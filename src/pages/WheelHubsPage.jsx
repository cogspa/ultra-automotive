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

export default function WheelHubsPage() {
  return (
    <div className="min-h-screen bg-black font-sans text-white overflow-x-hidden selection:bg-[#ff8a4a]/30 selection:text-white">
      <TopNav />
      <main className="pt-32 pb-24 px-5 md:px-10 lg:px-14 max-w-[1400px] mx-auto">
        <QuickGuideNav />

        <div className="mb-8">
          <span className="font-mono-cap text-white/50">Quick Guide</span>
          <h1 className="mt-4 font-display text-white" style={{ fontSize: "clamp(40px, 5vw, 76px)", lineHeight: 0.96, letterSpacing: "-0.03em" }}>
            Wheel Hubs <span className="italic-display" style={{ color: "#efe1d8" }}>Guide</span>
          </h1>
          <p className="mt-4 max-w-[640px] text-[15px] text-white/60 leading-relaxed">
            Replace a hub bearing assembly without damaging the ABS sensor, the axle splines, or the new bearing itself.
          </p>
        </div>

        <GuideMeta items={[
          { label: "Difficulty", value: "Intermediate" },
          { label: "Time", value: "1 – 3 hours" },
          { label: "Tools", value: "Sockets, torque wrench, hub puller (often), scan tool" },
          { label: "Common DTCs", value: "C0035 · C0040 · C0045 · C0050" },
        ]} />

        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">

          <GuideCard tone="cream" eyebrow="01 · Overview">
            <GuideHeading>What the hub bearing does</GuideHeading>
            <GuideLead>
              The hub bearing supports the wheel, allows it to rotate, and houses the wheel-speed sensor that feeds ABS, traction control, and stability control. A failing hub is rarely just a "noise" — it disables half the safety systems on a modern vehicle.
            </GuideLead>
            <GuideBody>
              <p>
                Two designs dominate: <K>Gen 1</K> press-in bearings (require a press and special tools), and <K>Gen 2 / 3</K> bolt-on hub assemblies that replace as a complete unit.
              </p>
              <p>
                Most modern vehicles use the bolt-on style — easier to service, more expensive to buy, but no specialty tooling required.
              </p>
            </GuideBody>
            <GuideCallout variant="critical">
              Always replace in matched pairs across the axle if both sides show wear. A new bearing paired with a worn one will exhibit unequal handling under cornering load.
            </GuideCallout>
          </GuideCard>

          <GuideCard tone="blush" eyebrow="02 · Preparation">
            <GuideHeading>Diagnose, confirm, then disassemble</GuideHeading>
            <GuideLead>
              "Hum that changes with speed" is the classic failed-hub complaint, but it can also be a tire-noise issue. Confirm before opening anything.
            </GuideLead>

            <GuideStep number="01" title="Verify the hub is the failure"
              summary="Two quick tests isolate hub from tire and CV joint.">
              <GuideBullets>
                <GuideBullet>Noise that <K>changes pitch when changing lanes</K> — confirms hub bearing</GuideBullet>
                <GuideBullet>Noise increases under load on one side — usually the opposite hub (offside loads under cornering)</GuideBullet>
                <GuideBullet>Shake the wheel at 12/6 and 3/9 with vehicle off ground — play indicates failed bearing or worn ball joint</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="02" title="Scan for ABS DTCs"
              summary="Wheel-speed sensor codes often accompany a failing hub.">
              <GuideBullets>
                <GuideBullet><K>C0035</K> — left front wheel speed sensor</GuideBullet>
                <GuideBullet><K>C0040</K> — right front wheel speed sensor</GuideBullet>
                <GuideBullet><K>C0045 / C0050</K> — left and right rear wheel speed sensors</GuideBullet>
                <GuideBullet>Document codes before disassembly — useful for verifying the fix</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="03" title="Verify correct part application">
              <GuideBullets>
                <GuideBullet>Hub assemblies vary by drivetrain (<K>FWD</K>, <K>RWD</K>, <K>4WD</K>, <K>AWD</K>)</GuideBullet>
                <GuideBullet>Front and rear are typically different — not interchangeable</GuideBullet>
                <GuideBullet>ABS-equipped vs non-ABS hubs are different units</GuideBullet>
              </GuideBullets>
            </GuideStep>
          </GuideCard>

          <GuideCard tone="cream" eyebrow="03 · Removal">
            <GuideHeading>Get the old hub off without damaging anything</GuideHeading>
            <GuideLead>
              Corrosion fuses everything together. Heat, penetrant, and patience save time and tools.
            </GuideLead>

            <GuideStep number="01" title="Lift, support, remove wheel"
              summary="Wheels chocked, vehicle on jack stands rated for weight.">
              <GuideBullets>
                <GuideBullet>Loosen lug nuts before lifting</GuideBullet>
                <GuideBullet>Mark wheel-to-stud position for rebalance reference</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="02" title="Remove the axle nut (FWD / AWD front)"
              summary="Often torqued to 200+ ft-lb and corroded in place.">
              <GuideBullets>
                <GuideBullet>Apply penetrant before attempting removal</GuideBullet>
                <GuideBullet>Some axle nuts are <K>one-time-use</K> — verify in service info before reusing</GuideBullet>
                <GuideBullet>Inspect axle threads for damage as the nut comes off</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="03" title="Disconnect brake and ABS"
              summary="Set components aside without stressing hoses or wiring.">
              <GuideBullets>
                <GuideBullet>Remove caliper and bracket, hang aside with bungee — never by the hose</GuideBullet>
                <GuideBullet>Remove rotor (may require persuasion if rust-stuck)</GuideBullet>
                <GuideBullet>Disconnect ABS sensor connector — wire is fragile, support during removal</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="04" title="Remove the hub from the knuckle"
              summary="Bolt-on hubs: unbolt and pull. Press-in: requires hydraulic press.">
              <GuideBullets>
                <GuideBullet>Bolt-on: remove backing bolts, pull hub off splines (often requires a slide hammer)</GuideBullet>
                <GuideBullet>If hub is corrosion-locked to the knuckle, apply penetrant and heat carefully</GuideBullet>
                <GuideBullet>Press-in: support knuckle in press, drive bearing race out per service info</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideCallout variant="tip">
              On 4WD / AWD vehicles, the axle stub often stays with the hub. Don't let the axle hang from the CV joint — support it with wire or a stand to prevent CV damage.
            </GuideCallout>
          </GuideCard>

          <GuideCard tone="blush" eyebrow="04 · Installation">
            <GuideHeading>Install clean, torque to spec, route the wire</GuideHeading>
            <GuideLead>
              Most install failures trace to corrosion on the mounting face (causes runout), wrong torque, or a pinched ABS wire.
            </GuideLead>

            <GuideStep number="01" title="Clean the knuckle mounting surface"
              summary="Bare metal, square to the bore, free of debris.">
              <GuideBullets>
                <GuideBullet>Wire-brush mounting surface to bright metal</GuideBullet>
                <GuideBullet>Inspect bore for damage from extraction</GuideBullet>
                <GuideBullet>Apply a thin film of <K>anti-seize</K> on the mounting surface only</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="02" title="Inspect and clean axle splines (4WD / AWD)"
              summary="Damaged splines will destroy the new hub.">
              <GuideBullets>
                <GuideBullet>Inspect for damaged or twisted splines</GuideBullet>
                <GuideBullet>Apply a light film of grease before installing the hub</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="03" title="Install the new hub"
              summary="Bolt-on or press-in per OE procedure.">
              <GuideBullets>
                <GuideBullet>Bolt-on: align with knuckle, hand-thread mounting bolts</GuideBullet>
                <GuideBullet>Torque mounting bolts to OE spec in cross pattern</GuideBullet>
                <GuideBullet>Press-in: use correct press tools — never strike a bearing directly</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="04" title="Route the ABS wire correctly"
              summary="A pinched ABS wire is the #1 cause of immediate post-install ABS faults.">
              <GuideBullets>
                <GuideBullet>Match OE routing exactly — through every clip and grommet</GuideBullet>
                <GuideBullet>Confirm no contact with rotating CV joints or steering components through full lock</GuideBullet>
                <GuideBullet>Connector clicks fully home and is secured</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="05" title="Reinstall brake hardware and axle nut"
              summary="Axle nut to spec, often a specific angle-tightening procedure.">
              <GuideBullets>
                <GuideBullet>Install rotor, caliper bracket, and caliper — torque to spec</GuideBullet>
                <GuideBullet>Install axle nut, torque to OE spec — typically <K>150 – 250 ft-lb</K></GuideBullet>
                <GuideBullet>Some applications require <K>angle-tightening</K> beyond the torque value — verify in service info</GuideBullet>
                <GuideBullet>Stake the nut if OE design calls for it</GuideBullet>
              </GuideBullets>
            </GuideStep>
          </GuideCard>

          <GuideCard tone="cream" eyebrow="05 · Verification">
            <GuideHeading>Confirm alignment, ABS function, and quiet operation</GuideHeading>
            <GuideLead>
              A hub replacement can affect alignment and almost always sets temporary ABS codes that need clearing.
            </GuideLead>

            <GuideStep number="01" title="Install wheel, torque lug nuts"
              summary="Star pattern, OE spec, re-torque after 50 – 100 miles.">
              <GuideBullets>
                <GuideBullet>Star pattern to <K>OE lug-nut torque</K></GuideBullet>
                <GuideBullet>Re-torque after a short test drive</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="02" title="Clear ABS DTCs and verify"
              summary="Wheel-speed sensor codes commonly need scan-tool clearing.">
              <GuideBullets>
                <GuideBullet>Clear all codes set during disassembly</GuideBullet>
                <GuideBullet>Drive vehicle above <K>15 mph</K> in a circle and straight line</GuideBullet>
                <GuideBullet>Verify ABS warning light is off and no codes return</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="03" title="Check alignment"
              summary="Hub replacement often shifts alignment slightly.">
              <GuideBullets>
                <GuideBullet>Inspect for new tire wear after a short drive</GuideBullet>
                <GuideBullet>Recommend full alignment after hub bearing replacement</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="04" title="Road test"
              summary="Listen for changes that indicate a problem.">
              <GuideBullets>
                <GuideBullet>No noise under acceleration, deceleration, or cornering load</GuideBullet>
                <GuideBullet>Vehicle tracks straight, no pull</GuideBullet>
                <GuideBullet>ABS / TC / stability control all functional</GuideBullet>
              </GuideBullets>
            </GuideStep>
          </GuideCard>

        </div>
      </main>
      <Footer />
    </div>
  );
}
