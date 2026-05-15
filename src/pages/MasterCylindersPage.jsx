import React from "react";
import TopNav from "../components/site/TopNav";
import QuickGuideNav from "../components/site/QuickGuideNav";
import Footer from "../components/site/Footer";
import {
  GuideCard,
  GuideHeading,
  GuideLead,
  GuideBody,
  GuideStep,
  GuideBullets,
  GuideBullet,
  GuideCallout,
  GuideMeta,
  K,
} from "../components/site/GuideElements";

export default function MasterCylindersPage() {
  return (
    <div className="min-h-screen bg-black font-sans text-white overflow-x-hidden selection:bg-[#ff8a4a]/30 selection:text-white">
      <TopNav />
      <main className="pt-32 pb-24 px-5 md:px-10 lg:px-14 max-w-[1400px] mx-auto">
        <QuickGuideNav />

        <div className="mb-8">
          <span className="font-mono-cap text-white/50">Quick Guide</span>
          <h1 className="mt-4 font-display text-white" style={{ fontSize: "clamp(40px, 5vw, 76px)", lineHeight: 0.96, letterSpacing: "-0.03em" }}>
            Master Cylinders <span className="italic-display" style={{ color: "#efe1d8" }}>Guide</span>
          </h1>
          <p className="mt-4 max-w-[640px] text-[15px] text-white/60 leading-relaxed">
            Replace a master cylinder with a properly bench-bled unit, leak-free connections, and a firm pedal on the first test.
          </p>
        </div>

        <GuideMeta items={[
          { label: "Difficulty", value: "Intermediate" },
          { label: "Time", value: "1 – 2 hours" },
          { label: "Tools", value: "Wrenches, bench-bleed kit, scan tool" },
          { label: "Common DTCs", value: "C1214 · ABS faults" },
        ]} />

        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">

          <GuideCard tone="cream" eyebrow="01 · Overview">
            <GuideHeading>What the master cylinder does</GuideHeading>
            <GuideLead>
              The master cylinder converts pedal force into hydraulic pressure that activates every wheel's caliper or wheel cylinder. When it fails, the pedal sinks, the brakes feel spongy, or the warning light comes on.
            </GuideLead>
            <GuideBody>
              <p>
                Modern dual-circuit master cylinders feed two independent hydraulic circuits — typically diagonal (LF/RR and RF/LR). If one fails, the other still provides braking, but the pedal will be low and pull hard to one side.
              </p>
              <p>
                The #1 cause of comebacks on master-cylinder replacements is <K>skipping the bench-bleed step</K>. Air trapped in the master cylinder cannot be bled out at the calipers.
              </p>
            </GuideBody>
            <GuideCallout variant="critical">
              Brakes are a primary safety system. If you are not certain about any step, refer the job to a professional.
            </GuideCallout>
          </GuideCard>

          <GuideCard tone="blush" eyebrow="02 · Preparation">
            <GuideHeading>Confirm symptoms and gather parts</GuideHeading>
            <GuideLead>
              Most "soft pedal" complaints are caliper, hose, or air-in-system issues — not a failing master cylinder. Diagnose carefully before replacing.
            </GuideLead>

            <GuideStep number="01" title="Confirm the master cylinder is the actual failure"
              summary="A sinking pedal under steady pressure is the textbook symptom.">
              <GuideBullets>
                <GuideBullet>Press and hold pedal with engine off — pedal that sinks slowly under steady pressure with no external leak is a failed master cylinder</GuideBullet>
                <GuideBullet>Inspect for external leakage at the booster mating surface — leak there usually means the booster is also contaminated</GuideBullet>
                <GuideBullet>Fluid in the booster vacuum hose is a clear master-cylinder fail</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="02" title="Verify correct part application">
              <GuideBullets>
                <GuideBullet>Bore size and port configuration must match OE</GuideBullet>
                <GuideBullet>Reservoir style (integral vs remote) must match</GuideBullet>
                <GuideBullet>Compare new and old units side by side before installation</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="03" title="Gather parts and tools">
              <GuideBullets>
                <GuideBullet>OE-spec brake fluid (typically <K>DOT 3</K> or <K>DOT 4</K>) — fresh bottle</GuideBullet>
                <GuideBullet>Bench-bleed kit (usually included with the new master cylinder)</GuideBullet>
                <GuideBullet>Line wrenches sized for the brake lines — flare nuts strip easily with open-ends</GuideBullet>
                <GuideBullet>Fluid catch tray and shop towels</GuideBullet>
              </GuideBullets>
            </GuideStep>
          </GuideCard>

          <GuideCard tone="cream" eyebrow="03 · Bench Bleed">
            <GuideHeading>Bench-bleed before installation</GuideHeading>
            <GuideLead>
              This is the step that determines whether the pedal will be firm on first test. Skip it and you'll never get a firm pedal at the calipers.
            </GuideLead>

            <GuideStep number="01" title="Mount the master cylinder securely"
              summary="Clamp in a vise by the mounting flange — never the body.">
              <GuideBullets>
                <GuideBullet>Use soft jaws or wood blocks to protect the casting</GuideBullet>
                <GuideBullet>Mount level so the reservoir bores sit horizontal</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="02" title="Install bench-bleed tubes"
              summary="Tubes return fluid from outlet ports back into the reservoir.">
              <GuideBullets>
                <GuideBullet>Install bleed adapter fittings to each outlet port</GuideBullet>
                <GuideBullet>Route tubes so the discharge end sits <K>below fluid level</K> in the reservoir</GuideBullet>
                <GuideBullet>Fill the reservoir with fresh OE-spec brake fluid</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="03" title="Stroke the pushrod slowly until no air"
              summary="Use a long screwdriver or wood dowel — short, slow strokes.">
              <GuideBullets>
                <GuideBullet>Stroke <K>1 – 1.5 inches</K> slowly, release, repeat</GuideBullet>
                <GuideBullet>Watch for bubbles at the tube discharge — continue until they stop</GuideBullet>
                <GuideBullet>Keep the reservoir topped off — never let it run dry</GuideBullet>
                <GuideBullet>Verify pushrod stroke feels firm with no give</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideCallout variant="tip">
              Keep the bench-bleed tubes in place until the master cylinder is bolted to the booster. Removing them lets air back in.
            </GuideCallout>
          </GuideCard>

          <GuideCard tone="blush" eyebrow="04 · Installation">
            <GuideHeading>Bolt up and connect brake lines</GuideHeading>
            <GuideLead>
              Hand-start every threaded fitting. Cross-threading a brake line is one of the most expensive mistakes in this job.
            </GuideLead>

            <GuideStep number="01" title="Mount the master cylinder to the booster"
              summary="Use a new gasket or seal if applicable.">
              <GuideBullets>
                <GuideBullet>Inspect booster pushrod tip for damage</GuideBullet>
                <GuideBullet>Confirm pushrod length matches OE spec — wrong length causes pedal-too-high or pedal-too-low complaints</GuideBullet>
                <GuideBullet>Torque mounting nuts to OE spec</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="02" title="Remove bench-bleed tubes one at a time"
              summary="Connect brake lines immediately so air can't enter.">
              <GuideBullets>
                <GuideBullet>Remove one tube, immediately install brake line — hand-thread first</GuideBullet>
                <GuideBullet>Confirm threads engage smoothly before torquing</GuideBullet>
                <GuideBullet>Torque line fittings to OE spec with a <K>line wrench</K></GuideBullet>
                <GuideBullet>Repeat for the second outlet</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="03" title="Top off the reservoir and prime"
              summary="Pump the pedal slowly 3 – 4 times to fill the system.">
              <GuideBullets>
                <GuideBullet>Top reservoir to <K>MAX</K> line</GuideBullet>
                <GuideBullet>Pump pedal slowly to push fluid into the lines</GuideBullet>
                <GuideBullet>Inspect every connection for weep with the pedal held down</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideCallout variant="critical">
              Brake fluid is corrosive to paint. Wipe up any spills immediately and rinse the area with water. Even a few drops on body panels will lift the finish within hours.
            </GuideCallout>
          </GuideCard>

          <GuideCard tone="cream" eyebrow="05 · Bleed & Verify">
            <GuideHeading>System bleed and pedal verification</GuideHeading>
            <GuideLead>
              After bench-bleeding, the system still needs a full corner-by-corner bleed to displace any air in the lines.
            </GuideLead>

            <GuideStep number="01" title="Bleed each wheel in OE sequence"
              summary="Furthest from master cylinder first, in OE-specified order.">
              <GuideBullets>
                <GuideBullet>Keep the master cylinder reservoir topped off throughout</GuideBullet>
                <GuideBullet>Bleed until clean, bubble-free fluid runs at each corner</GuideBullet>
                <GuideBullet>On ABS-equipped vehicles, perform <K>scan-tool-controlled ABS bleed</K> if the system was ever fully drained</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="02" title="Pedal test before driving"
              summary="A spongy pedal means trapped air — bleed again.">
              <GuideBullets>
                <GuideBullet>Pump pedal — should firm up within <K>2 – 3 strokes</K></GuideBullet>
                <GuideBullet>Hold steady pressure — pedal should not sink</GuideBullet>
                <GuideBullet>Confirm pedal height matches OE feel</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="03" title="Clear DTCs and road test">
              <GuideBullets>
                <GuideBullet>Clear any ABS or brake codes set during the repair</GuideBullet>
                <GuideBullet>Test braking from <K>5 mph</K>, then <K>30 mph</K>, then highway speed</GuideBullet>
                <GuideBullet>Verify no warning lights illuminate, no pull, no pulsation</GuideBullet>
              </GuideBullets>
            </GuideStep>
          </GuideCard>

        </div>
      </main>
      <Footer />
    </div>
  );
}
