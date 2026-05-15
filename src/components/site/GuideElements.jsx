import React from "react";

/**
 * GuideElements — reusable building blocks for Quick Guide detail pages.
 *
 * Drop-in replacements for the raw <div>/<ul> patterns currently used in
 * AlternatorsPage, StartersPage, etc. Composing pages from these components
 * gives consistent typography, spacing, and color across all guides.
 *
 * Usage:
 *   <GuideCard tone="cream" eyebrow="02 · Diagnosis">
 *     <GuideHeading>Battery Diagnosis</GuideHeading>
 *     <GuideLead>One-sentence framing of what this section covers.</GuideLead>
 *
 *     <GuideStep number="01" title="Measure resting voltage"
 *       summary="Vehicle off for 1+ hour for an accurate reading.">
 *       <GuideBullets>
 *         <GuideBullet><K>12.65 V</K> or higher — full charge</GuideBullet>
 *         <GuideBullet><K>12.45 V</K> — approx 75% (charge before testing)</GuideBullet>
 *       </GuideBullets>
 *     </GuideStep>
 *
 *     <GuideCallout variant="critical">
 *       Wear PPE — battery acid is corrosive.
 *     </GuideCallout>
 *   </GuideCard>
 */

/* -------------------------------------------------------------------------- */
/*  Card wrapper                                                              */
/* -------------------------------------------------------------------------- */

const CARD_TONES = {
  cream: "var(--c-cream-2)",
  blush: "var(--c-blush)",
};

export function GuideCard({ tone = "cream", eyebrow, children }) {
  return (
    <div
      className="rounded-3xl p-8 h-full break-inside-avoid mb-6 text-[#0a0a0a]"
      style={{
        background: CARD_TONES[tone] || CARD_TONES.cream,
        border: "1px solid rgba(10,10,10,0.07)",
      }}
    >
      {eyebrow && (
        <div
          className="font-mono-cap mb-5"
          style={{ color: "rgba(10,10,10,0.50)" }}
        >
          {eyebrow}
        </div>
      )}
      {children}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Headings & lead text                                                      */
/* -------------------------------------------------------------------------- */

export function GuideHeading({ children }) {
  return (
    <h3
      className="font-display text-[#0a0a0a] mb-3"
      style={{
        fontSize: "clamp(22px, 1.8vw, 26px)",
        letterSpacing: "-0.01em",
        lineHeight: 1.1,
      }}
    >
      {children}
    </h3>
  );
}

export function GuideLead({ children }) {
  return (
    <p className="text-[14.5px] text-[#0a0a0a]/70 mb-6 leading-relaxed">
      {children}
    </p>
  );
}

/**
 * Body paragraph block — for cards that are prose-heavy (overview cards).
 * Pass plain text or JSX children with <K> for inline emphasis.
 */
export function GuideBody({ children }) {
  return (
    <div className="space-y-3 text-[14px] text-[#0a0a0a]/70 leading-relaxed mb-4">
      {React.Children.map(children, (child, i) =>
        typeof child === "string" ? <p key={i}>{child}</p> : child
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Step block                                                                */
/* -------------------------------------------------------------------------- */

export function GuideStep({ number, title, summary, children }) {
  return (
    <div
      className="mb-3 p-5 rounded-2xl"
      style={{
        background: "rgba(10,10,10,0.04)",
        border: "1px solid rgba(10,10,10,0.06)",
      }}
    >
      <div className="flex items-baseline gap-3 mb-1.5">
        {number && (
          <span
            className="font-mono-cap tabular-nums shrink-0"
            style={{ color: "rgba(10,10,10,0.45)" }}
          >
            {number}
          </span>
        )}
        <div className="font-display text-[16.5px] text-[#0a0a0a] leading-snug">
          {title}
        </div>
      </div>
      {summary && (
        <p className="text-[13px] text-[#0a0a0a]/60 mb-3 leading-snug ml-0">
          {summary}
        </p>
      )}
      {children && <div className="mt-2">{children}</div>}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Bullets                                                                   */
/* -------------------------------------------------------------------------- */

export function GuideBullets({ children }) {
  return <ul className="space-y-1.5">{children}</ul>;
}

export function GuideBullet({ children }) {
  return (
    <li className="text-[14px] text-[#0a0a0a]/72 ml-5 list-disc leading-snug">
      {children}
    </li>
  );
}

/* -------------------------------------------------------------------------- */
/*  Inline callouts                                                           */
/* -------------------------------------------------------------------------- */

const CALLOUT_STYLES = {
  critical: {
    bg: "rgba(160, 38, 53, 0.07)",
    border: "1px solid rgba(160, 38, 53, 0.22)",
    label: "Critical",
    labelColor: "#a02635",
  },
  tip: {
    bg: "rgba(10, 10, 10, 0.05)",
    border: "1px solid rgba(10, 10, 10, 0.10)",
    label: "Tip",
    labelColor: "rgba(10,10,10,0.55)",
  },
  spec: {
    bg: "rgba(10, 10, 10, 0.03)",
    border: "1px dashed rgba(10, 10, 10, 0.20)",
    label: "Spec",
    labelColor: "rgba(10,10,10,0.55)",
  },
};

export function GuideCallout({ variant = "tip", label, children }) {
  const s = CALLOUT_STYLES[variant] || CALLOUT_STYLES.tip;
  return (
    <div
      className="mt-4 p-4 rounded-xl"
      style={{ background: s.bg, border: s.border }}
    >
      <div
        className="font-mono-cap mb-2"
        style={{ color: s.labelColor }}
      >
        {label || s.label}
      </div>
      <div className="text-[13.5px] text-[#0a0a0a]/82 leading-snug">
        {children}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Page-level meta strip                                                     */
/* -------------------------------------------------------------------------- */

/**
 * GuideMeta — strip of metadata at the top of a guide page (dark theme).
 * items = [{ label: "Difficulty", value: "Beginner" }, ...]
 */
export function GuideMeta({ items }) {
  return (
    <div
      className="mb-10 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4 pb-8 border-b"
      style={{ borderColor: "rgba(255,255,255,0.08)" }}
    >
      {items.map((item) => (
        <div key={item.label} className="flex flex-col">
          <span className="font-mono-cap text-white/40">{item.label}</span>
          <span className="text-[14px] text-white/85 mt-1.5 leading-snug">
            {item.value}
          </span>
        </div>
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Inline emphasis — <K>12.45 V</K>                                          */
/* -------------------------------------------------------------------------- */

export function K({ children }) {
  return (
    <strong className="font-semibold text-[#0a0a0a]">{children}</strong>
  );
}
