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

export default function BatteriesPage() {
  return (
    <div className="min-h-screen bg-black font-sans text-white overflow-x-hidden selection:bg-[#ff8a4a]/30 selection:text-white">
      <TopNav />
      <main className="pt-32 pb-24 px-5 md:px-10 lg:px-14 max-w-[1400px] mx-auto">
        <QuickGuideNav />

        <div className="mb-8">
          <span className="font-mono-cap text-white/50">Quick Guide</span>
          <h1 className="mt-4 font-display text-white" style={{ fontSize: "clamp(40px, 5vw, 76px)", lineHeight: 0.96, letterSpacing: "-0.03em" }}>
            Batteries <span className="italic-display" style={{ color: "#efe1d8" }}>Guide</span>
          </h1>
          <p className="mt-4 max-w-[640px] text-[15px] text-white/60 leading-relaxed">
            Test, replace, and register a 12 V starter battery — including the module resets and BMS coding that most shops forget.
          </p>
        </div>

        <GuideMeta items={[
          { label: "Difficulty", value: "Beginner-friendly" },
          { label: "Time", value: "30 – 60 minutes" },
          { label: "Tools", value: "Wrench, scan tool, terminal cleaner" },
          { label: "Common DTCs", value: "P0562 · P0620 · BMS faults" },
        ]} />

        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">

          <GuideCard tone="cream" eyebrow="01 · Overview">
            <GuideHeading>What the battery actually does</GuideHeading>
            <GuideLead>
              The battery is the anchor of the entire electrical system. It cranks the engine, stabilizes voltage for sensitive electronics, and buffers loads when accessories pull more than the alternator can supply.
            </GuideLead>
            <GuideBody>
              <p>
                Three chemistries are common today: <K>flooded lead-acid</K> (legacy), <K>AGM (absorbed glass mat)</K> — used in most modern vehicles and every start-stop system — and <K>lithium-ion</K> (performance and EV applications).
              </p>
              <p>
                Installing the wrong chemistry, or skipping the BMS registration step on a modern vehicle, will cause repeat premature failures and false charging-system codes within weeks.
              </p>
            </GuideBody>
            <GuideCallout variant="critical">
              Vehicles equipped with <K>start-stop</K> or <K>regenerative braking</K> require <K>AGM</K>. Substituting a flooded battery will destroy it within months and may trigger charging-system DTCs.
            </GuideCallout>
          </GuideCard>

          <GuideCard tone="blush" eyebrow="02 · Preparation">
            <GuideHeading>Identify, document, protect</GuideHeading>
            <GuideLead>
              Three minutes of prep prevents the most common mistakes: wrong-chemistry installs, lost radio codes, and module learn data wiped during disconnect.
            </GuideLead>

            <GuideStep number="01" title="Identify the OE battery"
              summary="Match the replacement to OE chemistry, group size, and capacity.">
              <GuideBullets>
                <GuideBullet>Confirm chemistry — <K>flooded</K>, <K>AGM</K>, or <K>EFB</K></GuideBullet>
                <GuideBullet>Note <K>BCI group size</K>, <K>CCA rating</K>, and reserve capacity from the OE label</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="02" title="Gather tools and PPE"
              summary="Battery acid is corrosive. Never bridge terminals to a wrench or chassis ground.">
              <GuideBullets>
                <GuideBullet>Safety glasses, nitrile gloves, baking-soda solution for spills</GuideBullet>
                <GuideBullet><K>Memory saver</K> to preserve module learn data and radio codes</GuideBullet>
                <GuideBullet>Scan tool capable of <K>battery registration / BMS reset</K></GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="03" title="Document the electrical baseline"
              summary="Capture state before disconnect erases it.">
              <GuideBullets>
                <GuideBullet>Active DTCs across all modules</GuideBullet>
                <GuideBullet>Radio security codes, seat / mirror memory positions</GuideBullet>
                <GuideBullet>Photograph existing terminal orientation and routing</GuideBullet>
              </GuideBullets>
            </GuideStep>
          </GuideCard>

          <GuideCard tone="cream" eyebrow="03 · Diagnosis">
            <GuideHeading>Test before you replace</GuideHeading>
            <GuideLead>
              Half of batteries returned under warranty are perfectly good. A 30-second resting voltage check and a conductance test will tell you whether the battery is the actual problem.
            </GuideLead>

            <GuideStep number="01" title="Measure resting (open-circuit) voltage"
              summary="Vehicle off for at least 1 hour for an accurate reading.">
              <GuideBullets>
                <GuideBullet><K>12.65 V</K> or higher — full state of charge</GuideBullet>
                <GuideBullet><K>12.45 V</K> — approximately <K>75%</K>, charge before testing further</GuideBullet>
                <GuideBullet>Below <K>12.00 V</K> — deep discharge, suspect parasitic draw or internal failure</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="02" title="Conductance or carbon-pile load test"
              summary="Conductance is faster and works without a full charge.">
              <GuideBullets>
                <GuideBullet>Compare measured CCA against the rating printed on the battery label</GuideBullet>
                <GuideBullet>Below <K>80% of rated CCA</K> — battery is end-of-life, replace</GuideBullet>
                <GuideBullet>Print and retain the test report for warranty support</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="03" title="Parasitic draw test"
              summary="Only if the battery drains overnight despite a healthy state of charge.">
              <GuideBullets>
                <GuideBullet>Wait <K>20 – 45 min</K> for modules to fully sleep</GuideBullet>
                <GuideBullet>Inline DC clamp on negative cable — target <K>under 50 mA</K> after sleep</GuideBullet>
                <GuideBullet>Pull fuses one at a time to isolate the offending circuit</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideCallout variant="tip">
              A bulged or warm case is an immediate fail — internal short. Replace without further testing.
            </GuideCallout>
          </GuideCard>

          <GuideCard tone="blush" eyebrow="04 · Replacement">
            <GuideHeading>Replace and connect in the right order</GuideHeading>
            <GuideLead>
              Order matters at both disconnect and reconnect. Reversing it is the most common cause of dropped wrenches arc-welding themselves to the strut tower.
            </GuideLead>

            <GuideStep number="01" title="Connect a memory saver if available"
              summary="Preserves module learn data, radio codes, seat / mirror memory.">
              <GuideBullets>
                <GuideBullet>OBD-II port saver, or jumper to a known-good donor battery</GuideBullet>
                <GuideBullet>Verify the saver is delivering at least <K>12.0 V</K> before you disconnect</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="02" title="Disconnect — negative first"
              summary="The order prevents a short to chassis if the wrench slips.">
              <GuideBullets>
                <GuideBullet>Loosen and remove <K>negative (−)</K> first</GuideBullet>
                <GuideBullet>Then <K>positive (+)</K></GuideBullet>
                <GuideBullet>Remove hold-down bracket and lift the battery out using a carry strap</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="03" title="Clean tray and terminals"
              summary="Corrosion adds resistance and accelerates the next failure.">
              <GuideBullets>
                <GuideBullet>Neutralize corrosion with <K>baking-soda solution</K>, rinse and dry</GuideBullet>
                <GuideBullet>Wire-brush cable terminals to bright metal</GuideBullet>
                <GuideBullet>Inspect cable insulation — replace if cracked or showing internal corrosion</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="04" title="Install new battery — positive first"
              summary="Reverse of disconnect.">
              <GuideBullets>
                <GuideBullet>Confirm polarity orientation before placing in the tray</GuideBullet>
                <GuideBullet>Reinstall the <K>hold-down bracket</K> — loose batteries crack from vibration</GuideBullet>
                <GuideBullet>Connect <K>positive (+)</K> first, then <K>negative (−)</K>, torque to OE spec</GuideBullet>
                <GuideBullet>Apply dielectric grease or anti-corrosion spray on terminals</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="05" title="Register the new battery"
              summary="Critical on BMW, Audi / VW, Mercedes, Volvo, and late-model GM / Ford.">
              <GuideBullets>
                <GuideBullet>Use scan tool to enter the new battery's <K>chemistry</K>, <K>group size</K>, and <K>CCA</K></GuideBullet>
                <GuideBullet>Reset any charging-system adaptation values where applicable</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideCallout variant="critical">
              Skipping BMS registration causes the alternator to undercharge the new battery, killing it in <K>6 – 18 months</K>. This is the #1 cause of repeat warranty claims on European vehicles.
            </GuideCallout>
          </GuideCard>

          <GuideCard tone="cream" eyebrow="05 · Verification">
            <GuideHeading>Confirm the fix before the customer drives away</GuideHeading>
            <GuideLead>
              Three quick checks catch the issues that show up two days later and cost a comeback.
            </GuideLead>

            <GuideStep number="01" title="Verify charging-system output">
              <GuideBullets>
                <GuideBullet><K>13.5 V – 14.7 V</K> at idle, accessories off</GuideBullet>
                <GuideBullet>Voltage holds under load — headlights, blower, rear defrost on</GuideBullet>
                <GuideBullet>No undercharging codes return (<K>P0562</K>, <K>P0620</K> family)</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="02" title="Clear and verify DTCs">
              <GuideBullets>
                <GuideBullet>Clear any codes set during disconnect</GuideBullet>
                <GuideBullet>Verify no battery or BMS codes return after a full drive cycle</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="03" title="Reinitialize affected systems"
              summary="Many comfort and convenience features lose calibration on power loss.">
              <GuideBullets>
                <GuideBullet>Power window auto-up / auto-down learn procedure</GuideBullet>
                <GuideBullet>Sunroof and power-liftgate initialization</GuideBullet>
                <GuideBullet>Steering angle sensor calibration if equipped</GuideBullet>
                <GuideBullet>Re-enter radio security codes, reset clock</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideCallout variant="tip">
              On a start-stop vehicle, the system may stay disabled for one full drive cycle while the BMS learns the new battery's state of health. This is normal and self-resolves.
            </GuideCallout>
          </GuideCard>

        </div>
      </main>
      <Footer />
    </div>
  );
}
