import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import OBD_CODES from "../../data/obd2-codes.json";
import { ALL_GUIDES, SYSTEM_DEFAULT_GUIDE } from "../../data/system-routes";

const OBD_PATTERN = /^[PBCU][0-9A-F]{4}$/i;

const SEV_COLOR = {
  high: "#a02635",
  moderate: "#9a4715",
  low: "rgba(10,10,10,0.65)",
};

export default function ObdCrtLookup({ typedCode = "" }) {
  const query = typedCode.toUpperCase().replace(/\s+/g, "");

  const match = useMemo(() => {
    if (!OBD_PATTERN.test(query)) return null;
    return OBD_CODES.find((c) => c.code === query) || null;
  }, [query]);

  const state = !query
    ? "idle"
    : !OBD_PATTERN.test(query)
    ? "partial"
    : match
    ? "hit"
    : "miss";

  const guidePath =
    match?.guide ||
    (match?.system ? SYSTEM_DEFAULT_GUIDE[match.system] : null);
  const guide = guidePath
    ? ALL_GUIDES.find((g) => g.path === guidePath)
    : null;

  return (
    <div className="obd-crt-shell" role="region" aria-label="OBD-II fault code lookup">
      <div className="obd-crt-canvas">
        <div className="obd-crt-wrap">
          <div className="obd-crt-bezel">
            <svg
              className="obd-crt-svg"
              xmlns="http://www.w3.org/2000/svg"
              width="656.32"
              height="385.32"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                stroke="#000"
                strokeWidth="0.88"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                fill="rgb(238, 232, 232)"
                d="M89.440,59.440 L565.440,59.440 C582.009,59.440 595.440,72.871 595.440,89.440 L595.440,294.440 C595.440,311.009 582.009,324.440 565.440,324.440 L89.440,324.440 C72.871,324.440 59.440,311.009 59.440,294.440 L59.440,89.440 C59.440,72.871 72.871,59.440 89.440,59.440 Z"
              />
            </svg>

            <div className="obd-crt-screen">
              <div className="obd-crt-query-line">
                <span className="obd-crt-prompt">&gt;</span>
                <span className="obd-crt-query-text">{query}</span>
                <span className="obd-crt-cursor" aria-hidden="true" />
              </div>

              <div className="obd-crt-results">
                {state === "idle" && (
                  <div className="obd-crt-empty">Awaiting input_</div>
                )}
                {state === "partial" && (
                  <div className="obd-crt-empty">
                    Format: P / C / B / U + 4 hex_
                  </div>
                )}
                {state === "miss" && (
                  <div className="obd-crt-empty">No record for {query}_</div>
                )}
                {state === "hit" && match && (
                  <div className="obd-crt-record">
                    <div className="obd-crt-row">
                      <span className="obd-crt-label">SYSTEM</span>
                      <span>{match.system}</span>
                    </div>
                    <div className="obd-crt-row">
                      <span className="obd-crt-label">SEV</span>
                      <span style={{ color: SEV_COLOR[match.severity] }}>
                        {match.severity}
                      </span>
                    </div>
                    <div className="obd-crt-title">{match.title}</div>

                    <div className="obd-crt-causes-head">Likely causes</div>
                    {match.components.slice(0, 4).map((c, i) => (
                      <div className="obd-crt-cause" key={c}>
                        <span className="obd-crt-cause-idx">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span>{c}</span>
                      </div>
                    ))}

                    {guide && (
                      <Link to={guide.path} className="obd-crt-guide-link">
                        → Open {guide.label.toLowerCase()} guide
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
