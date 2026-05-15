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

export default function AlternatorsPage() {
  return (
    <div className="min-h-screen bg-black font-sans text-white overflow-x-hidden selection:bg-[#ff8a4a]/30 selection:text-white">
      <TopNav />
      <main className="pt-32 pb-24 px-5 md:px-10 lg:px-14 max-w-[1400px] mx-auto">
        <QuickGuideNav />

        <div className="mb-8">
          <span className="font-mono-cap text-white/50">Quick Guide</span>
          <h1 className="mt-4 font-display text-white" style={{ fontSize: "clamp(40px, 5vw, 76px)", lineHeight: 0.96, letterSpacing: "-0.03em" }}>
            Alternators <span className="italic-display" style={{ color: "#efe1d8" }}>Guide</span>
          </h1>
          <p className="mt-4 max-w-[640px] text-[15px] text-white/60 leading-relaxed">
            Diagnose a charging-system fault correctly the first time, then replace the alternator with no comebacks for belt squeal, undercharging, or a repeat dead battery.
          </p>
        </div>

        <GuideMeta items={[
          { label: "Difficulty", value: "Intermediate" },
          { label: "Time", value: "1 – 2 hours" },
          { label: "Tools", value: "Multimeter, scan tool, torque wrench" },
          { label: "Common DTCs", value: "P0562 · P0563 · P0620 family" },
        ]} />

        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">

          <GuideCard tone="cream" eyebrow="01 · Overview">
            <GuideHeading>What the alternator actually does</GuideHeading>
            <GuideLead>
              The alternator recharges the battery and powers every electrical load while the engine runs. When it fails, the battery takes the hit — and replacing only the battery on an undercharging vehicle guarantees a second comeback within weeks.
            </GuideLead>
            <GuideBody>
              <p>
                Modern alternators are <K>computer-controlled</K> — the PCM commands field voltage based on load, battery temperature, and state of charge. That means a "no-charge" complaint can originate at the alternator, the battery, the PCM, or the wiring between them.
              </p>
              <p>
                Diagnose the system, not the symptom. The order in this guide — battery first, wiring second, alternator last — catches the most common misdiagnoses before parts get thrown at the problem.
              </p>
            </GuideBody>
            <GuideCallout variant="critical">
              Never disconnect the battery with the engine running. Modern alternators can spike to <K>over 100 V</K> with no load, frying every module on the CAN bus.
            </GuideCallout>
          </GuideCard>

          <GuideCard tone="blush" eyebrow="02 · Preparation">
            <GuideHeading>Verify the battery and cables first</GuideHeading>
            <GuideLead>
              A bad battery makes a good alternator look bad. Every alternator diagnosis starts with a battery that's known healthy and cables that are known clean.
            </GuideLead>

            <GuideStep number="01" title="Confirm battery state of charge"
              summary="Resting voltage tells you whether the battery is even a valid test subject.">
              <GuideBullets>
                <GuideBullet><K>12.45 V</K> minimum before any further testing</GuideBullet>
                <GuideBullet>Below that, charge fully and load-test before continuing</GuideBullet>
                <GuideBullet>Conductance-test the battery — replace if below <K>80% of rated CCA</K></GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="02" title="Voltage-drop test the cables"
              summary="High resistance in the charging circuit looks identical to a failing alternator on a meter.">
              <GuideBullets>
                <GuideBullet>Positive cable: alternator B+ to battery + — target <K>under 0.3 V</K> drop at high load</GuideBullet>
                <GuideBullet>Negative cable: battery − to engine block — target <K>under 0.2 V</K> drop</GuideBullet>
                <GuideBullet>Clean both terminals to bright metal and re-test before condemning anything</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="03" title="Inspect for fluid contamination"
              summary="Coolant or oil intrusion is the leading cause of premature alternator failure on modern engines.">
              <GuideBullets>
                <GuideBullet>Trace any leaks to the source — repair before installing a new alternator</GuideBullet>
                <GuideBullet>Power-steering fluid on the case is also a warranty-killer</GuideBullet>
              </GuideBullets>
            </GuideStep>
          </GuideCard>

          <GuideCard tone="cream" eyebrow="03 · Diagnosis">
            <GuideHeading>Test the alternator under load</GuideHeading>
            <GuideLead>
              An alternator that reads correct voltage at idle with no load can still fail under accessory load. Diagnosis happens at the meter with the engine running and loads cycled.
            </GuideLead>

            <GuideStep number="01" title="Observe warning lights key-on / engine-off"
              summary="The battery light should illuminate KOEO and extinguish once the engine starts.">
              <GuideBullets>
                <GuideBullet>Light stays on after start — alternator is not exciting</GuideBullet>
                <GuideBullet>Light never illuminates KOEO — bulb out or instrument-cluster circuit fault</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="02" title="Scan all modules for DTCs"
              summary="Charging-system codes set in the PCM, BCM, and instrument cluster — scan all of them.">
              <GuideBullets>
                <GuideBullet><K>P0562 / P0563</K> — system voltage low / high</GuideBullet>
                <GuideBullet><K>P0620 family</K> — generator control circuit faults</GuideBullet>
                <GuideBullet>Follow service info to correct any DTC before measuring output</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="03" title="Measure output at the battery"
              summary="Engine running, accessories off — then with full load.">
              <GuideBullets>
                <GuideBullet>No load: <K>13.5 V – 14.7 V</K> at idle</GuideBullet>
                <GuideBullet>Full load (headlights, blower, rear defrost): voltage should hold above <K>13.2 V</K></GuideBullet>
                <GuideBullet>Ripple voltage on AC scale: <K>under 0.5 V AC</K> — higher indicates failing diodes</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="04" title="Inspect belt, tensioner, and pulley">
              <GuideBullets>
                <GuideBullet>Belt: no cracks, no glazing, no missing chunks</GuideBullet>
                <GuideBullet>Operate tensioner through full range — should move smoothly with even resistance</GuideBullet>
                <GuideBullet>Spin the alternator pulley by hand — quiet, free, no lateral play</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideCallout variant="tip">
              A <K>decoupler pulley</K> (overrunning alternator pulley / OAP) should freewheel one direction and lock the other. If it spins both ways or won't spin at all, replace the pulley — often resolves the complaint without replacing the alternator.
            </GuideCallout>
          </GuideCard>

          <GuideCard tone="blush" eyebrow="04 · Installation">
            <GuideHeading>Replace the alternator</GuideHeading>
            <GuideLead>
              Most failures here are mechanical: wrong belt routing, undertorqued mounting bolts, or a connector swapped to the wrong terminal. Slow down on the last 10%.
            </GuideLead>

            <GuideStep number="01" title="Disconnect the negative battery cable"
              summary="Non-negotiable. The B+ terminal on the alternator is hot to chassis when the battery is connected." />

            <GuideStep number="02" title="Transfer hardware from the old unit"
              summary="Mounting brackets, spacers, sensors, decoupler pulleys, heat shields.">
              <GuideBullets>
                <GuideBullet>Lay out the old and new alternator side by side before disturbing anything</GuideBullet>
                <GuideBullet>Photograph the connector orientation before disconnecting</GuideBullet>
                <GuideBullet>Verify pulley type matches — solid vs decoupler is not interchangeable</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="03" title="Clean the mounting surface"
              summary="Corrosion or paint under the mounting flange creates ground-path resistance.">
              <GuideBullets>
                <GuideBullet>Wire-brush the alternator mounting boss to bright metal</GuideBullet>
                <GuideBullet>Verify the engine ground strap is clean and tight</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="04" title="Install and torque to spec"
              summary="Mounting bolts and B+ terminal both need correct torque.">
              <GuideBullets>
                <GuideBullet>Mounting bolts to OE spec — typically <K>25 – 45 ft-lb</K></GuideBullet>
                <GuideBullet>B+ terminal nut to spec — typically <K>10 – 15 ft-lb</K>, never improvised by feel</GuideBullet>
                <GuideBullet>Reconnect the field connector — verify it clicks fully home</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="05" title="Verify belt routing and tension">
              <GuideBullets>
                <GuideBullet>Match the under-hood diagram or a photo of the original routing</GuideBullet>
                <GuideBullet>Confirm belt sits centered on every pulley before starting the engine</GuideBullet>
                <GuideBullet>Spin the engine over by hand if possible to verify no binding</GuideBullet>
              </GuideBullets>
            </GuideStep>
          </GuideCard>

          <GuideCard tone="cream" eyebrow="05 · Verification">
            <GuideHeading>Confirm the fix under real load</GuideHeading>
            <GuideLead>
              A new alternator can read correct at idle and still fail under combined load. Two minutes of testing before the customer drives away catches the rare bad-out-of-box unit.
            </GuideLead>

            <GuideStep number="01" title="Reconnect and recheck output"
              summary="Engine at operating temp, then cycle electrical loads.">
              <GuideBullets>
                <GuideBullet>Idle, no load: <K>13.5 V – 14.7 V</K></GuideBullet>
                <GuideBullet>Hold <K>2,000 rpm</K> with headlights, blower, rear defrost on — voltage should remain above <K>13.2 V</K></GuideBullet>
                <GuideBullet>Verify amperage output with a clamp meter if available</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="02" title="Clear and verify DTCs">
              <GuideBullets>
                <GuideBullet>Clear any codes set during the repair</GuideBullet>
                <GuideBullet>Verify no charging-related codes return after a 10-minute drive cycle</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="03" title="Road test under varied load"
              summary="Real-world conditions surface intermittent faults that bench tests miss.">
              <GuideBullets>
                <GuideBullet>Confirm no belt squeal at cold start, hot start, or under accessory load</GuideBullet>
                <GuideBullet>Verify no warning lights illuminate during the drive</GuideBullet>
                <GuideBullet>Final battery voltage after shutdown — should hold above <K>12.5 V</K></GuideBullet>
              </GuideBullets>
            </GuideStep>
          </GuideCard>

        </div>
      </main>
      <Footer />
    </div>
  );
}
