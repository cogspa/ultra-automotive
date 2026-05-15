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

export default function StartersPage() {
  return (
    <div className="min-h-screen bg-black font-sans text-white overflow-x-hidden selection:bg-[#ff8a4a]/30 selection:text-white">
      <TopNav />
      <main className="pt-32 pb-24 px-5 md:px-10 lg:px-14 max-w-[1400px] mx-auto">
        <QuickGuideNav />

        <div className="mb-8">
          <span className="font-mono-cap text-white/50">Quick Guide</span>
          <h1 className="mt-4 font-display text-white" style={{ fontSize: "clamp(40px, 5vw, 76px)", lineHeight: 0.96, letterSpacing: "-0.03em" }}>
            Starters <span className="italic-display" style={{ color: "#efe1d8" }}>Guide</span>
          </h1>
          <p className="mt-4 max-w-[640px] text-[15px] text-white/60 leading-relaxed">
            Diagnose a no-crank or slow-crank correctly, then replace the starter without damaging the new unit or the flywheel ring gear.
          </p>
        </div>

        <GuideMeta items={[
          { label: "Difficulty", value: "Intermediate" },
          { label: "Time", value: "1 – 2 hours" },
          { label: "Tools", value: "Sockets, torque wrench, multimeter" },
          { label: "Common DTCs", value: "P0615 – P0617 family" },
        ]} />

        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">

          <GuideCard tone="cream" eyebrow="01 · Overview">
            <GuideHeading>What the starter actually does</GuideHeading>
            <GuideLead>
              The starter spins the engine fast enough to draw fuel and fire — typically <K>200 – 300 rpm</K>. When it fails, the complaint is usually a click, a slow grind, or nothing at all when the key is turned.
            </GuideLead>
            <GuideBody>
              <p>
                Most "bad starter" complaints are actually <K>battery</K>, <K>cable</K>, <K>ignition switch</K>, or <K>starter relay</K> faults. Replacing a starter without ruling those out is the leading cause of comebacks.
              </p>
              <p>
                Modern engines with stop-start systems use heavy-duty starters rated for far higher cycle counts. Substituting a conventional starter on a stop-start vehicle is a dead-end fix.
              </p>
            </GuideBody>
            <GuideCallout variant="critical">
              Always disconnect the <K>negative battery cable</K> first. The starter's B+ terminal is hot to chassis at all times — a dropped wrench will arc-weld itself to the engine.
            </GuideCallout>
          </GuideCard>

          <GuideCard tone="blush" eyebrow="02 · Preparation">
            <GuideHeading>Rule out the easy stuff first</GuideHeading>
            <GuideLead>
              80% of no-crank complaints fix themselves with a battery charge or a cable cleaning. Eliminate those before touching the starter.
            </GuideLead>

            <GuideStep number="01" title="Confirm battery state of charge"
              summary="A weak battery looks identical to a failing starter from the driver's seat.">
              <GuideBullets>
                <GuideBullet>Resting voltage at <K>12.45 V</K> minimum before further testing</GuideBullet>
                <GuideBullet>Conductance-test the battery — below <K>80% of rated CCA</K> means replace it first</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="02" title="Voltage-drop test the cables"
              summary="Cranking pulls 150 – 250 A. Even small resistance becomes massive voltage drop.">
              <GuideBullets>
                <GuideBullet>Positive cable: under <K>0.5 V</K> drop during crank</GuideBullet>
                <GuideBullet>Negative / ground: under <K>0.2 V</K> drop during crank</GuideBullet>
                <GuideBullet>Clean both terminals to bright metal and re-test before condemning the starter</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="03" title="Check for fluid contamination"
              summary="Oil, coolant, or power-steering fluid on the starter shortens its life and voids warranty.">
              <GuideBullets>
                <GuideBullet>Repair the source of any leak before installing a replacement</GuideBullet>
              </GuideBullets>
            </GuideStep>
          </GuideCard>

          <GuideCard tone="cream" eyebrow="03 · Diagnosis">
            <GuideHeading>Decode the symptom</GuideHeading>
            <GuideLead>
              The way the starter fails tells you where to look. One click is not the same as no click is not the same as a slow grind.
            </GuideLead>

            <GuideStep number="01" title="Check for security and immobilizer faults"
              summary="A blinking anti-theft light KOEO is the entire diagnosis on many vehicles.">
              <GuideBullets>
                <GuideBullet>Active immobilizer fault — engine won't crank or won't start after cranking</GuideBullet>
                <GuideBullet>Re-program key or repair PATS / immobilizer before testing the starter</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="02" title="Scan all modules for DTCs"
              summary="Starter-related codes set in PCM and BCM — scan both.">
              <GuideBullets>
                <GuideBullet><K>P0615</K> — starter relay circuit malfunction</GuideBullet>
                <GuideBullet><K>P0616 / P0617</K> — starter relay circuit low / high</GuideBullet>
                <GuideBullet><K>P0335 / P0338</K> — crankshaft position sensor codes that cause a no-start that looks like a starter problem</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="03" title="Interpret the symptom"
              summary="Each pattern points to a different root cause.">
              <GuideBullets>
                <GuideBullet><K>One loud click, no crank</K> — solenoid pulls in but starter motor won't turn (worn brushes / armature)</GuideBullet>
                <GuideBullet><K>Rapid clicking</K> — low battery or high resistance, not the starter</GuideBullet>
                <GuideBullet><K>Slow grind</K> — low cranking voltage, dragging armature, or low battery</GuideBullet>
                <GuideBullet><K>Nothing at all</K> — ignition switch, neutral safety / clutch switch, fuse, or relay</GuideBullet>
                <GuideBullet><K>High-pitched whine after crank</K> — starter drive failed to disengage</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideCallout variant="tip">
              Voltage at the starter <K>S terminal</K> during crank should be <K>10 V minimum</K>. Less than that, the problem is upstream — relay, switch, or wiring — not the starter.
            </GuideCallout>
          </GuideCard>

          <GuideCard tone="blush" eyebrow="04 · Installation">
            <GuideHeading>Replace without damaging the new unit</GuideHeading>
            <GuideLead>
              Most installation failures come from skipped torque specs, wrong shims, or a starter that hangs from its harness. Slow down on these.
            </GuideLead>

            <GuideStep number="01" title="Disconnect the negative battery cable"
              summary="Non-negotiable. Verify with a meter — voltage to chassis should drop to zero." />

            <GuideStep number="02" title="Disconnect all electrical first, then unbolt"
              summary="A starter hanging by its harness damages the connector and the new unit.">
              <GuideBullets>
                <GuideBullet>Photograph harness routing before disconnect</GuideBullet>
                <GuideBullet>Remove B+ and S-terminal connections</GuideBullet>
                <GuideBullet>Support the starter by hand before removing the last mounting bolt</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="03" title="Inspect the old starter and the flywheel"
              summary="A failed starter often comes with a damaged ring gear — replacing one without checking the other guarantees a comeback.">
              <GuideBullets>
                <GuideBullet>Look for chipped or missing teeth on the starter drive (pinion)</GuideBullet>
                <GuideBullet>Rotate the engine by hand and inspect every ring-gear tooth through the inspection cover</GuideBullet>
                <GuideBullet>Cracked or worn-out mounting holes — verify the new starter's mounting surface seats flat</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="04" title="Clean the mounting surface"
              summary="Grease, paint, or corrosion at the bell housing creates poor ground and lateral misalignment.">
              <GuideBullets>
                <GuideBullet>Wire-brush the starter pad on the bell housing to bare metal</GuideBullet>
                <GuideBullet>Transfer shims if used by OE — pinion engagement depth is critical</GuideBullet>
                <GuideBullet>Transfer heat shields, brackets, and harness clips to the new unit</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="05" title="Install and torque to spec"
              summary="Even torque across mounting bolts prevents binding and ensures correct pinion engagement.">
              <GuideBullets>
                <GuideBullet>Mounting bolts to OE spec — typically <K>30 – 50 ft-lb</K></GuideBullet>
                <GuideBullet>B+ nut to OE spec — typically <K>10 – 15 ft-lb</K></GuideBullet>
                <GuideBullet>S-terminal connector clicks fully home and is properly routed</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideCallout variant="critical">
              On engines with <K>crankshaft position sensor</K> proximity issues, a missing or wrong-thickness shim can cause repeat no-starts and false CKP codes. Always transfer or replace shims to OE spec.
            </GuideCallout>
          </GuideCard>

          <GuideCard tone="cream" eyebrow="05 · Verification">
            <GuideHeading>Confirm engagement and disengagement</GuideHeading>
            <GuideLead>
              A starter that cranks once may still bind, drag, or whine. Three checks before the customer drives away.
            </GuideLead>

            <GuideStep number="01" title="Reconnect and test cranking"
              summary="Listen and watch the meter.">
              <GuideBullets>
                <GuideBullet>Smooth, quick crank with no grinding or screeching</GuideBullet>
                <GuideBullet>Voltage at the battery during crank — above <K>10 V</K></GuideBullet>
                <GuideBullet>Starter disengages cleanly the instant the engine fires</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="02" title="Clear and verify DTCs">
              <GuideBullets>
                <GuideBullet>Clear any codes set during disconnect</GuideBullet>
                <GuideBullet>Verify no starter, crank-sensor, or charging codes return after a full drive cycle</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="03" title="Road test the vehicle"
              summary="Several hot and cold starts surface intermittent issues.">
              <GuideBullets>
                <GuideBullet>Cold start, hot start, restart after a short trip</GuideBullet>
                <GuideBullet>No unusual noise during or after crank</GuideBullet>
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
