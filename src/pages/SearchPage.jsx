import React, { useState, useMemo, useEffect } from "react";
import Fuse from "fuse.js";
import { Search, AlertCircle } from "lucide-react";
import TopNav from "../components/site/TopNav";
import Footer from "../components/site/Footer";
import KB from "../data/tsb-knowledge-base.json";
import FactoidsData from "../data/factoids.json";

// Matches OBD-II / mfr DTC format (P0338, C0035, U0100, B1000)
const DTC_REGEX = /^[PCBU]\d{4}$/i;

// Fuse.js configured for symptom + summary fuzzy search
const fuse = new Fuse(KB.entries, {
  keys: [
    { name: "title",         weight: 2.0 },
    { name: "summary",       weight: 1.5 },
    { name: "symptoms",      weight: 1.5 },
    { name: "cause",         weight: 1.0 },
    { name: "tags",          weight: 1.0 },
    { name: "vehicles.make", weight: 0.8 },
  ],
  threshold: 0.4,
  ignoreLocation: true,
  minMatchCharLength: 3,
});

const TYPE_ORDER = {
  diagnostic: 0,
  installation_tip: 1,
  warning: 2,
  appearance_only: 3,
};

const TYPE_COLOR = {
  diagnostic:       "#ff8a4a",
  installation_tip: "#9be4d4",
  warning:          "#ff5d5d",
  appearance_only:  "rgba(255,255,255,0.4)",
};

const TYPE_LABEL = {
  diagnostic:       "Diagnostic",
  installation_tip: "Installation tip",
  warning:          "Warning",
  appearance_only:  "Appearance variant",
};

export default function SearchPage() {
  const [query, setQuery]           = useState("");
  const [makeFilter, setMakeFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [factoid, setFactoid] = useState(null);

  useEffect(() => {
    // Pick a random factoid on load
    const randomFactoid = FactoidsData[Math.floor(Math.random() * FactoidsData.length)];
    setFactoid(randomFactoid);
  }, []);

  // Build unique makes list for the filter dropdown
  const makes = useMemo(() => {
    const set = new Set();
    KB.entries.forEach((e) => {
      if (e.vehicles?.make) set.add(e.vehicles.make);
    });
    return [...set].sort();
  }, []);

  const results = useMemo(() => {
    const q = query.trim();
    let matches = KB.entries;

    if (q) {
      if (DTC_REGEX.test(q)) {
        // Exact DTC match
        const code = q.toUpperCase();
        matches = KB.entries.filter((e) => (e.dtcs || []).includes(code));
      } else {
        // Fuzzy text search
        matches = fuse.search(q).map((r) => r.item);
      }
    }

    if (makeFilter !== "all") {
      matches = matches.filter((e) => e.vehicles?.make === makeFilter);
    }
    if (typeFilter !== "all") {
      matches = matches.filter((e) => e.type === typeFilter);
    }

    // Diagnostic results first, appearance-only last
    const sorted = [...matches].sort(
      (a, b) => (TYPE_ORDER[a.type] ?? 9) - (TYPE_ORDER[b.type] ?? 9)
    );

    // Remove duplicates and sanitize TSB/TBS mentions
    const uniqueMatches = [];
    const seen = new Set();

    for (const item of sorted) {
      // Strip any " (similar to TBS0054)" or "Same diagnostic content as TBS0054. "
      const cleanTitle = item.title
        .replace(/\s*\(similar to T[BS]B\d+\)/ig, "")
        .trim();
      const cleanSummary = item.summary
        .replace(/Same diagnostic content as T[BS]B\d+\.\s*/ig, "")
        .trim();

      const key = `${cleanTitle}|${cleanSummary}`;
      if (!seen.has(key)) {
        seen.add(key);
        uniqueMatches.push({
          ...item,
          title: cleanTitle,
          summary: cleanSummary,
        });
      }
    }

    return uniqueMatches;
  }, [query, makeFilter, typeFilter]);

  return (
    <div className="min-h-screen bg-black font-sans text-white overflow-x-hidden selection:bg-[#ff8a4a]/30 selection:text-white">
      <TopNav />
      <main
        id="search"
        className="pt-32 pb-24 px-5 md:px-10 lg:px-14 max-w-[1400px] mx-auto"
      >
        {/* Header */}
        <div className="mb-12">
          <span className="font-mono-cap text-white/50">Knowledge Hub</span>
          <h1
            className="mt-4 font-display text-white"
            style={{
              fontSize: "clamp(40px, 5vw, 76px)",
              lineHeight: 0.96,
              letterSpacing: "-0.03em",
            }}
          >
            Search the{" "}
            <span className="italic-display" style={{ color: "#efe1d8" }}>
              diagnostic
            </span>{" "}
            database
          </h1>
          <p className="mt-5 max-w-[640px] text-[15px] text-white/65 leading-relaxed">
            Search by OBD-II code (e.g. P0338) or describe a symptom. Results
            draw from MPA Technical Bulletins and the internal knowledge base.
          </p>
        </div>

        {/* Search input */}
        <div className="mb-6">
          <div className="relative">
            <Search className="h-5 w-5 absolute left-5 top-1/2 -translate-y-1/2 text-white/40" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Try: P0338, starter clicks no crank, Nissan cold start..."
              className="w-full pl-14 pr-5 py-4 rounded-full text-[15px] outline-none focus:ring-2 focus:ring-white/20 transition"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.10)",
              }}
              autoFocus
            />
          </div>
        </div>

        {/* Filters + result count */}
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <FilterSelect label="Make" value={makeFilter} onChange={setMakeFilter}>
            <option value="all">All makes</option>
            {makes.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </FilterSelect>
          <FilterSelect label="Type" value={typeFilter} onChange={setTypeFilter}>
            <option value="all">All types</option>
            <option value="diagnostic">Diagnostic</option>
            <option value="installation_tip">Installation tips</option>
            <option value="appearance_only">Appearance variants</option>
          </FilterSelect>
          {!(query.trim() === "" && makeFilter === "all" && typeFilter === "all") && (
            <span className="ml-auto font-mono-cap text-white/55">
              {results.length} result{results.length === 1 ? "" : "s"}
            </span>
          )}
        </div>

        {/* Results */}
        {query.trim() === "" && makeFilter === "all" && typeFilter === "all" ? (
          factoid && (
            <div
              className="rounded-3xl p-8 md:p-10"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <h3 className="font-mono-cap mb-4" style={{ color: "#9be4d4" }}>
                Did you know...
              </h3>
              <h4 className="text-[18px] md:text-[20px] text-white font-display mb-2">
                {factoid.title}
              </h4>
              <p className="text-[15px] text-white/80 leading-relaxed">
                {factoid.description}
              </p>
              {factoid.clarification && (
                <div className="mt-5 p-4 rounded-2xl" style={{ background: "rgba(255,255,255,0.04)" }}>
                  <span className="font-mono-cap text-white/40 block mb-1">Why this matters</span>
                  <p className="text-[14px] text-white/70 italic-display">{factoid.clarification}</p>
                </div>
              )}
            </div>
          )
        ) : results.length === 0 ? (
          <div
            className="rounded-3xl p-10 text-center"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <AlertCircle className="h-6 w-6 mx-auto mb-3 text-white/40" />
            <p className="text-white/60 text-[14px]">
              No results. Try a different query or clear the filters.
            </p>
          </div>
        ) : (
          <div className="grid gap-3">
            {results.map((entry) => (
              <ResultCard key={entry.id} entry={entry} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

function FilterSelect({ label, value, onChange, children }) {
  return (
    <label className="flex items-center gap-2">
      <span className="font-mono-cap text-white/45">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="px-3 py-2 rounded-full text-[13px] outline-none cursor-pointer transition"
        style={{
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.10)",
          color: "white",
        }}
      >
        {children}
      </select>
    </label>
  );
}

function ResultCard({ entry }) {
  const color  = TYPE_COLOR[entry.type] || "rgba(255,255,255,0.4)";
  const label  = TYPE_LABEL[entry.type] || entry.type;
  const fix    = entry.fixes?.[0];
  const symptoms = entry.symptoms || [];

  return (
    <article
      className="rounded-3xl p-6 md:p-7 transition hover:bg-white/[0.02]"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* Type + DTC + bulletin id */}
      <div className="mb-3 flex flex-wrap items-center gap-3">
        <span className="font-mono-cap" style={{ color }}>
          {label}
        </span>
        {entry.dtcs?.length > 0 && (
          <span
            className="font-mono-cap px-2 py-0.5 rounded-full"
            style={{ background: "rgba(255,138,74,0.15)", color: "#ff8a4a" }}
          >
            {entry.dtcs.join(", ")}
          </span>
        )}
      </div>

      {/* Title + summary */}
      <h3
        className="font-display text-[20px] md:text-[22px] mb-2"
        style={{ letterSpacing: "-0.01em" }}
      >
        {entry.title}
      </h3>
      <p className="text-[14px] text-white/65 leading-relaxed">
        {entry.summary}
      </p>

      {/* Vehicles */}
      {entry.vehicles?.make && (
        <div className="mt-3 text-[13px] text-white/55">
          <span className="font-mono-cap text-white/40 mr-2">Vehicles:</span>
          {entry.vehicles.make}
          {entry.vehicles.applies_to ? ` — ${entry.vehicles.applies_to}` : ""}
        </div>
      )}

      {/* Symptoms */}
      {symptoms.length > 0 && (
        <div className="mt-3">
          <span className="font-mono-cap text-white/40">Symptoms:</span>
          <ul className="mt-1.5 space-y-1">
            {symptoms.slice(0, 3).map((s) => (
              <li key={s} className="text-[13px] text-white/65">
                • {s}
              </li>
            ))}
            {symptoms.length > 3 && (
              <li className="text-[12px] text-white/40">
                + {symptoms.length - 3} more
              </li>
            )}
          </ul>
        </div>
      )}

      {/* Top fix */}
      {fix && (
        <div
          className="rounded-2xl p-3 mt-4"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <span className="font-mono-cap text-white/40">Top fix:</span>
          <p className="mt-1 text-[13.5px] text-white/85">{fix.action}</p>
          {fix.part_number && (
            <div className="mt-3 border-t border-white/10 pt-3">
              <p className="text-[12px] font-mono-cap text-white/55 mb-2">
                Requires: {fix.manufacturer} P/N {fix.part_number}
              </p>
              <LivePriceChecker manufacturer={fix.manufacturer} partNumber={fix.part_number} />
            </div>
          )}
        </div>
      )}
    </article>
  );
}

function LivePriceChecker({ manufacturer, partNumber }) {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPrices = async () => {
    // We expect the user to provide this API key in their .env.local file
    const apiKey = import.meta.env.VITE_SERPAPI_KEY;
    if (!apiKey) {
      setError("Please add VITE_SERPAPI_KEY to your .env.local file");
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const q = encodeURIComponent(`${manufacturer} ${partNumber}`);
      const serpUrl = `https://serpapi.com/search.json?engine=google_shopping&q=${q}&api_key=${apiKey}`;
      // SerpAPI blocks frontend requests via CORS to protect API keys. 
      // For this prototype, we route it through a free open CORS proxy.
      const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(serpUrl)}`;
      
      const res = await fetch(proxyUrl);
      if (!res.ok) throw new Error("Network response failed");
      
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      
      setResults(data.shopping_results || []);
    } catch (err) {
      setError(err.message || "Failed to fetch live prices.");
    } finally {
      setLoading(false);
    }
  };

  if (results) {
    if (results.length === 0) {
      return <div className="text-[12.5px] text-white/50 italic">No live prices found online.</div>;
    }
    return (
      <div className="space-y-2 mt-2">
        {results.slice(0, 3).map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-2.5 rounded-xl transition hover:bg-white/10"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div className="flex flex-col truncate pr-3">
              <span className="text-[13px] text-white/90 truncate font-medium">{item.source}</span>
              <span className="text-[11px] text-white/45 truncate mt-0.5">{item.title}</span>
            </div>
            <span className="text-[14px] font-mono font-medium whitespace-nowrap" style={{ color: "#9be4d4" }}>
              {item.extracted_price ? `$${item.extracted_price}` : item.price}
            </span>
          </a>
        ))}
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={fetchPrices}
        disabled={loading}
        className="text-[12px] font-mono-cap px-4 py-2 rounded-full transition disabled:opacity-50"
        style={{
          background: "rgba(255,255,255,0.1)",
          color: "white",
        }}
      >
        {loading ? "Searching..." : "Check Live Prices"}
      </button>
      {error && <p className="mt-2 text-[12.5px] text-[#ff5d5d]">{error}</p>}
    </div>
  );
}
