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

export default function BrakePadsRotorsPage() {
  return (
    <div className="min-h-screen bg-black font-sans text-white overflow-x-hidden selection:bg-[#ff8a4a]/30 selection:text-white">
      <TopNav />
      <main className="pt-32 pb-24 px-5 md:px-10 lg:px-14 max-w-[1400px] mx-auto">
        <QuickGuideNav />

        <div className="mb-8">
          <span className="font-mono-cap text-white/50">Quick Guide</span>
          <h1 className="mt-4 font-display text-white" style={{ fontSize: "clamp(40px, 5vw, 76px)", lineHeight: 0.96, letterSpacing: "-0.03em" }}>
            Brake Pads & Rotors <span className="italic-display" style={{ color: "#efe1d8" }}>Guide</span>
          </h1>
          <p className="mt-4 max-w-[640px] text-[15px] text-white/60 leading-relaxed">
            Replace pads and rotors with the proper hardware, correct bed-in, and no comebacks for squeal, pulsation, or premature wear.
          </p>
        </div>

        <GuideMeta items={[
          { label: "Difficulty", value: "Beginner-friendly" },
          { label: "Time", value: "1 – 2 hours per axle" },
          { label: "Tools", value: "Sockets, torque wrench, C-clamp / piston tool" },
          { label: "Replace as", value: "Axle pairs, never single side" },
        ]} />

        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">

          <GuideCard tone="cream" eyebrow="01 · Overview">
            <GuideHeading>What pads and rotors actually do</GuideHeading>
            <GuideLead>
              Pads provide the friction surface; rotors provide the heat sink. Every stop converts the vehicle's kinetic energy into heat — a typical pad sees temperatures of <K>300 – 600 °F</K> in normal driving and can exceed <K>1,000 °F</K> under hard use.
            </GuideLead>
            <GuideBody>
              <p>
                Pad and rotor selection must match the vehicle's <K>weight, intended use, and OE specification</K>. A track pad on a daily driver squeals constantly cold; an economy pad on a tow vehicle fades and warps within months.
              </p>
              <p>
                Always replace pads in <K>axle pairs</K> at minimum. Replace rotors in pairs whenever they're below minimum thickness, scored deeper than <K>0.020"</K>, or showing heat-checking.
              </p>
            </GuideBody>
            <GuideCallout variant="critical">
              Brake friction material can contain copper or other particulates. Wear nitrile gloves and a respirator when sanding or grinding pads. Never use compressed air to blow dust off — wet-wipe instead.
            </GuideCallout>
          </GuideCard>

          <GuideCard tone="blush" eyebrow="02 · Preparation">
            <GuideHeading>Inspect before disassembly</GuideHeading>
            <GuideLead>
              A full brake-system inspection on the rack often reveals additional issues — collapsed hoses, seized calipers, worn hardware — that should be addressed at the same time.
            </GuideLead>

            <GuideStep number="01" title="Verify correct part application">
              <GuideBullets>
                <GuideBullet>Confirm pad compound matches use case (OE, ceramic, semi-metallic, performance)</GuideBullet>
                <GuideBullet>Verify rotor diameter, thickness, and vented vs solid</GuideBullet>
                <GuideBullet>For coated rotors, confirm coating type doesn't conflict with pad compound</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="02" title="Inspect related components"
              summary="Pads and rotors don't fail in isolation. Addressing surrounding wear prevents the next comeback.">
              <GuideBullets>
                <GuideBullet>Caliper slide pins — must move freely, boots intact</GuideBullet>
                <GuideBullet>Caliper bracket — corrosion on abutment surfaces causes pad binding</GuideBullet>
                <GuideBullet>Brake hardware (anti-rattle clips, shims) — replace with new on every pad job</GuideBullet>
                <GuideBullet>Brake hoses — cracking or ballooning means failure soon</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="03" title="Test drive before disassembly"
              summary="Document any complaint so you can verify it's resolved.">
              <GuideBullets>
                <GuideBullet>Note pull, pulsation, noise, pedal feel, ABS activation</GuideBullet>
                <GuideBullet>Any of these can indicate problems beyond just worn pads</GuideBullet>
              </GuideBullets>
            </GuideStep>
          </GuideCard>

          <GuideCard tone="cream" eyebrow="03 · Removal">
            <GuideHeading>Remove the old hardware</GuideHeading>
            <GuideLead>
              Slow and methodical here. Photographs of OE hardware position save time on reassembly.
            </GuideLead>

            <GuideStep number="01" title="Lift, support, and remove wheels"
              summary="Refer to OE jacking points; never trust a hydraulic jack alone.">
              <GuideBullets>
                <GuideBullet>Vehicle on a level surface, wheels chocked</GuideBullet>
                <GuideBullet>Jack stands rated for vehicle weight, properly placed</GuideBullet>
                <GuideBullet>Mark wheel-to-stud orientation for re-balance reference</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="02" title="Remove caliper and bracket"
              summary="Support the caliper — never let it hang by the hose.">
              <GuideBullets>
                <GuideBullet>Remove guide-pin bolts, lift caliper off rotor</GuideBullet>
                <GuideBullet>Hang caliper with a bungee or wire from suspension</GuideBullet>
                <GuideBullet>Remove caliper bracket bolts if rotor is to be replaced</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="03" title="Inspect everything you removed"
              summary="The old parts tell you what went wrong.">
              <GuideBullets>
                <GuideBullet>Even pad wear — system healthy</GuideBullet>
                <GuideBullet>Uneven pad wear — sticking caliper or hose, or slide-pin corrosion</GuideBullet>
                <GuideBullet>Tapered pad wear (front to back) — slide-pin binding</GuideBullet>
                <GuideBullet>Rotor heat checks, hot spots, deep scoring — replace, do not turn</GuideBullet>
              </GuideBullets>
            </GuideStep>
          </GuideCard>

          <GuideCard tone="blush" eyebrow="04 · Installation">
            <GuideHeading>Install with correct hardware and torque</GuideHeading>
            <GuideLead>
              Pad slap-and-go is the leading cause of customer complaints. Five extra minutes on hardware and torque eliminates 90% of comebacks.
            </GuideLead>

            <GuideStep number="01" title="Prep and install the new rotor"
              summary="Coated rotors don't need cleaning; bare rotors do.">
              <GuideBullets>
                <GuideBullet>For bare rotors, clean both friction surfaces with <K>brake cleaner</K> to remove anti-corrosion coating</GuideBullet>
                <GuideBullet>Clean the hub mounting face with a wire brush — corrosion here causes rotor runout and pulsation</GuideBullet>
                <GuideBullet>Apply a thin film of <K>anti-seize</K> to the hub face only — never on the rotor friction surface</GuideBullet>
                <GuideBullet>Install rotor and torque retaining screw if present</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="02" title="Service the caliper bracket"
              summary="Clean abutments and grease slide pins for the new pads to move freely.">
              <GuideBullets>
                <GuideBullet>Wire-brush all abutment surfaces to bare metal</GuideBullet>
                <GuideBullet>Replace anti-rattle clips with the new hardware in the box</GuideBullet>
                <GuideBullet>Apply <K>high-temperature brake grease</K> to slide pins and pad contact points</GuideBullet>
                <GuideBullet>Reinstall bracket and torque to OE spec</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="03" title="Retract the caliper piston"
              summary="Front: push straight back. Rear with cable PB: push back. Rear with EPB: scan-tool retract.">
              <GuideBullets>
                <GuideBullet>Open the bleeder so retracting the piston pushes contaminated fluid out, not back through the ABS module</GuideBullet>
                <GuideBullet>Front and rear cable PB: use a C-clamp or piston tool to push the piston back evenly</GuideBullet>
                <GuideBullet>Rear EPB: enter <K>EPB service mode</K> via scan tool — never push back manually</GuideBullet>
                <GuideBullet>Close the bleeder once piston is fully retracted</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="04" title="Install new pads and caliper"
              summary="Inner and outer pads are sometimes different — confirm orientation.">
              <GuideBullets>
                <GuideBullet>Apply <K>brake quiet</K> to the back of the pads if specified</GuideBullet>
                <GuideBullet>Install pads with anti-rattle clips engaged</GuideBullet>
                <GuideBullet>Slide caliper over pads, torque guide-pin bolts to OE spec</GuideBullet>
                <GuideBullet>Confirm caliper moves freely on slide pins</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="05" title="Mount wheels and torque"
              summary="Lug-nut torque in a star pattern, then re-torque after a short drive.">
              <GuideBullets>
                <GuideBullet>Torque to OE spec in a star pattern — typically <K>80 – 100 ft-lb</K></GuideBullet>
                <GuideBullet>Re-torque after <K>50 – 100 miles</K>, especially with alloy wheels</GuideBullet>
              </GuideBullets>
            </GuideStep>
          </GuideCard>

          <GuideCard tone="cream" eyebrow="05 · Bed-in & Verify">
            <GuideHeading>Bed-in is non-optional</GuideHeading>
            <GuideLead>
              New pads need a heat cycle to transfer a thin layer of friction material onto the rotor. Skipping bed-in causes squeal, judder, and uneven deposition that mimics a warped rotor.
            </GuideLead>

            <GuideStep number="01" title="Pump pedal before any movement"
              summary="The piston was retracted — pedal will be soft until pads contact the rotors.">
              <GuideBullets>
                <GuideBullet>Pump pedal slowly until firm — typically <K>3 – 5 strokes</K></GuideBullet>
                <GuideBullet>Confirm pedal stays firm under steady pressure</GuideBullet>
                <GuideBullet>Top off master cylinder reservoir if low</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="02" title="Perform bed-in procedure"
              summary="Follow the pad manufacturer's procedure — most are similar.">
              <GuideBullets>
                <GuideBullet>Series of moderate stops from <K>30 – 35 mph</K> to <K>10 mph</K>, then <K>40 – 45 mph</K> to <K>10 mph</K></GuideBullet>
                <GuideBullet>Avoid coming to a complete stop while pads are hot — leaves a deposit shadow on the rotor</GuideBullet>
                <GuideBullet>Cool down with light driving for <K>5 – 10 minutes</K> after bed-in</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="03" title="Final road test"
              summary="Confirm no pull, no pulsation, no warning lights.">
              <GuideBullets>
                <GuideBullet>Vehicle tracks straight under braking</GuideBullet>
                <GuideBullet>No vibration through the pedal or steering wheel</GuideBullet>
                <GuideBullet>Verify ABS warning light is off</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideCallout variant="tip">
              Some squeal during the first <K>50 – 100 miles</K> is normal as the pads finish seating. Persistent squeal after that points to missing anti-rattle hardware, contaminated pads, or insufficient brake grease on contact points.
            </GuideCallout>
          </GuideCard>

        </div>
      </main>
      <Footer />
    </div>
  );
}
