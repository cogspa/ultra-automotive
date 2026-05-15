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

export default function CalipersPage() {
  return (
    <div className="min-h-screen bg-black font-sans text-white overflow-x-hidden selection:bg-[#ff8a4a]/30 selection:text-white">
      <TopNav />
      <main className="pt-32 pb-24 px-5 md:px-10 lg:px-14 max-w-[1400px] mx-auto">
        <QuickGuideNav />

        <div className="mb-8">
          <span className="font-mono-cap text-white/50">Quick Guide</span>
          <h1 className="mt-4 font-display text-white" style={{ fontSize: "clamp(40px, 5vw, 76px)", lineHeight: 0.96, letterSpacing: "-0.03em" }}>
            Brake Calipers <span className="italic-display" style={{ color: "#efe1d8" }}>Guide</span>
          </h1>
          <p className="mt-4 max-w-[640px] text-[15px] text-white/60 leading-relaxed">
            Replace a brake caliper without trapping air, dragging a pad, or damaging an electric parking-brake actuator.
          </p>
        </div>

        <GuideMeta items={[
          { label: "Difficulty", value: "Intermediate" },
          { label: "Time", value: "1 – 2 hours per side" },
          { label: "Tools", value: "Sockets, torque wrench, brake bleeder, scan tool (EPB)" },
          { label: "Common DTCs", value: "C0265 · ABS faults · EPB faults" },
        ]} />

        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">

          <GuideCard tone="cream" eyebrow="01 · Overview">
            <GuideHeading>What the caliper actually does</GuideHeading>
            <GuideLead>
              The caliper houses the pistons that press the brake pads against the rotor. When it fails — sticking, leaking, or seizing — you get pulling, dragging, premature pad wear, or no braking at all.
            </GuideLead>
            <GuideBody>
              <p>
                Modern rear calipers often include an <K>electronic parking brake (EPB)</K> motor. Servicing one without retracting the piston through the scan tool can destroy the actuator within seconds.
              </p>
              <p>
                Always replace calipers in <K>axle pairs</K>. A new caliper paired with a worn one creates uneven braking force, pulling, and accelerated pad wear on the new side.
              </p>
            </GuideBody>
            <GuideCallout variant="critical">
              Brakes are a primary safety system. If you are not certain about any step, stop and refer the job to a professional. Improper installation can result in <K>brake failure</K>.
            </GuideCallout>
          </GuideCard>

          <GuideCard tone="blush" eyebrow="02 · Preparation">
            <GuideHeading>Inspect the whole system first</GuideHeading>
            <GuideLead>
              A failed caliper often comes with a worn rotor, contaminated pads, or a failing hose. Address the system, not just the symptom.
            </GuideLead>

            <GuideStep number="01" title="Confirm correct part application"
              summary="Front vs rear, left vs right, EPB vs conventional — all critical.">
              <GuideBullets>
                <GuideBullet>Verify caliper handedness — left and right are not interchangeable</GuideBullet>
                <GuideBullet>Confirm whether the rear caliper has <K>EPB</K> or a cable parking brake</GuideBullet>
                <GuideBullet>Match piston count and bore size to OE</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="02" title="Inspect the surrounding components"
              summary="Replace everything that's worn now — don't come back for it next month.">
              <GuideBullets>
                <GuideBullet>Pad thickness, even wear pattern, surface condition</GuideBullet>
                <GuideBullet>Rotor thickness vs minimum spec, scoring, cracking, heat checks</GuideBullet>
                <GuideBullet>Caliper bracket — corrosion at the slide / abutment surfaces</GuideBullet>
                <GuideBullet>Brake hose — cracking, ballooning, internal restriction</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="03" title="Gather tools and supplies"
              summary="Brake fluid is hygroscopic — open a fresh bottle for this job.">
              <GuideBullets>
                <GuideBullet>OE-spec brake fluid (<K>DOT 3</K>, <K>DOT 4</K>, or <K>DOT 5.1</K> — never silicone)</GuideBullet>
                <GuideBullet>High-temperature brake grease for slide pins</GuideBullet>
                <GuideBullet>New <K>copper crush washers</K> for banjo-bolt connections</GuideBullet>
                <GuideBullet>Scan tool capable of <K>EPB service mode</K> (rear EPB calipers only)</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideCallout variant="tip">
              While the caliper is off, this is the ideal moment to <K>flush the brake system</K>. Old fluid absorbs water and lowers boiling point — replace it every 2 – 3 years regardless of mileage.
            </GuideCallout>
          </GuideCard>

          <GuideCard tone="cream" eyebrow="03 · Removal">
            <GuideHeading>Get the old caliper off cleanly</GuideHeading>
            <GuideLead>
              The order matters: retract EPB first, then bleed pressure, then unbolt. Reverse and you'll damage the actuator or spray fluid everywhere.
            </GuideLead>

            <GuideStep number="01" title="Retract the EPB actuator (rear EPB only)"
              summary="Mandatory before opening any hydraulic line on an EPB caliper.">
              <GuideBullets>
                <GuideBullet>Enter <K>EPB service mode</K> via scan tool</GuideBullet>
                <GuideBullet>Verify pistons are fully retracted before continuing</GuideBullet>
                <GuideBullet>Disconnect EPB motor connector</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="02" title="Open the bleeder, then disconnect the hose"
              summary="Releases hydraulic pressure cleanly so fluid doesn't spray when the line breaks free.">
              <GuideBullets>
                <GuideBullet>Crack the bleeder, drain into a catch bottle, then close</GuideBullet>
                <GuideBullet>Disconnect the brake hose / line at the caliper, cap immediately</GuideBullet>
                <GuideBullet>Plug the brake hose to prevent fluid loss and air ingress</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="03" title="Unbolt the caliper from its bracket"
              summary="Slide pin bolts or mounting bolts depending on caliper style.">
              <GuideBullets>
                <GuideBullet>Remove caliper guide-pin bolts and slide the caliper off</GuideBullet>
                <GuideBullet>Support the caliper — never let it hang by the brake hose</GuideBullet>
              </GuideBullets>
            </GuideStep>
          </GuideCard>

          <GuideCard tone="blush" eyebrow="04 · Installation">
            <GuideHeading>Install with attention to slides, torque, and orientation</GuideHeading>
            <GuideLead>
              A new caliper that drags or leaks usually traces back to a contaminated slide pin or a wrong-orientation install. Get these right and the rest is easy.
            </GuideLead>

            <GuideStep number="01" title="Clean and lubricate the bracket"
              summary="Slide-pin corrosion is the #1 cause of premature pad wear on the inside pad.">
              <GuideBullets>
                <GuideBullet>Remove all corrosion from caliper bracket abutments to bare metal</GuideBullet>
                <GuideBullet>Apply <K>high-temperature brake grease</K> to slide pins and seat them with fresh boots</GuideBullet>
                <GuideBullet>Confirm slides move smoothly through full range by hand</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="02" title="Transfer EPB motor to the new caliper (rear EPB)"
              summary="Most replacement EPB calipers ship without the actuator.">
              <GuideBullets>
                <GuideBullet>Transfer motor before mounting the caliper to the bracket</GuideBullet>
                <GuideBullet>Inspect O-ring on motor housing — replace if damaged</GuideBullet>
                <GuideBullet>Verify motor connector clicks fully home and clips into routing guide</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="03" title="Mount the caliper and torque"
              summary="Bleeder must be at the top — if it's not, the caliper is upside down or wrong-side.">
              <GuideBullets>
                <GuideBullet>Verify <K>bleeder screw is at the top</K></GuideBullet>
                <GuideBullet>Install caliper to bracket, torque guide-pin bolts to OE spec</GuideBullet>
                <GuideBullet>Confirm caliper slides freely on the slide pins after install</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="04" title="Connect the brake line with new washers"
              summary="Always replace copper washers — never reuse.">
              <GuideBullets>
                <GuideBullet>For banjo bolts: <K>new copper washers</K> on both sides of the fitting</GuideBullet>
                <GuideBullet>Hand-thread the fitting first to avoid cross-threading</GuideBullet>
                <GuideBullet>Torque banjo bolt to OE spec — typically <K>20 – 30 ft-lb</K></GuideBullet>
                <GuideBullet>Confirm hose has no twist and doesn't contact suspension or steering through full travel</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="05" title="Reconnect parking-brake mechanism"
              summary="Cable systems need correct tension; EPB systems need a closeout from the scan tool.">
              <GuideBullets>
                <GuideBullet>Cable PB: reconnect cable, verify free movement of the lever arm</GuideBullet>
                <GuideBullet>EPB: reconnect motor connector, exit service mode via scan tool</GuideBullet>
              </GuideBullets>
            </GuideStep>
          </GuideCard>

          <GuideCard tone="cream" eyebrow="05 · Bleed & Verify">
            <GuideHeading>Bleed, test, road-verify</GuideHeading>
            <GuideLead>
              A new caliper traps air in the new chamber — bleeding is non-optional. Then test pedal feel before any movement.
            </GuideLead>

            <GuideStep number="01" title="Bleed the brake system"
              summary="Furthest from the master cylinder first, in OE sequence.">
              <GuideBullets>
                <GuideBullet>Top up master cylinder with fresh OE-spec fluid before starting</GuideBullet>
                <GuideBullet>Bleed each corner in OE sequence until clean, bubble-free fluid runs</GuideBullet>
                <GuideBullet>Verify the master cylinder never ran dry — if it did, bleed the entire system</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="02" title="Test pedal before moving the vehicle"
              summary="A spongy pedal means trapped air. A sinking pedal means a leak. Do not drive on either.">
              <GuideBullets>
                <GuideBullet>Pump the pedal — should firm up within <K>2 – 3 strokes</K> and stay firm under steady pressure</GuideBullet>
                <GuideBullet>Inspect every hose and fitting for fluid weep with the pedal held down hard</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="03" title="Initialize EPB and clear DTCs"
              summary="EPB systems require a scan-tool closeout after every caliper replacement.">
              <GuideBullets>
                <GuideBullet>Exit EPB service mode and perform calibration if required</GuideBullet>
                <GuideBullet>Clear any DTCs set during the repair</GuideBullet>
                <GuideBullet>Verify no ABS or EPB warning lights illuminate</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="04" title="Bed in the brakes and road test"
              summary="Light stops first to seat the pads — then a real-world test.">
              <GuideBullets>
                <GuideBullet>Perform pad bed-in procedure per pad manufacturer</GuideBullet>
                <GuideBullet>Verify vehicle tracks straight under braking — no pull</GuideBullet>
                <GuideBullet>Confirm parking brake holds the vehicle on a moderate grade</GuideBullet>
              </GuideBullets>
            </GuideStep>
          </GuideCard>

        </div>
      </main>
      <Footer />
    </div>
  );
}
