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

export default function TransmissionPage() {
  return (
    <div className="min-h-screen bg-black font-sans text-white overflow-x-hidden selection:bg-[#ff8a4a]/30 selection:text-white">
      <TopNav />
      <main className="pt-32 pb-24 px-5 md:px-10 lg:px-14 max-w-[1400px] mx-auto">
        <QuickGuideNav />

        <div className="mb-8">
          <span className="font-mono-cap text-white/50">Quick Guide</span>
          <h1 className="mt-4 font-display text-white" style={{ fontSize: "clamp(40px, 5vw, 76px)", lineHeight: 0.96, letterSpacing: "-0.03em" }}>
            Transmission <span className="italic-display" style={{ color: "#efe1d8" }}>Guide</span>
          </h1>
          <p className="mt-4 max-w-[640px] text-[15px] text-white/60 leading-relaxed">
            Service transmission fluid the right way, with the right fluid, and diagnose shift-quality complaints without going to a rebuild.
          </p>
        </div>

        <GuideMeta items={[
          { label: "Difficulty", value: "Intermediate – Advanced" },
          { label: "Time", value: "2 – 4 hours (fluid service)" },
          { label: "Tools", value: "Scan tool with live fluid temp, drain pan, fluid pump" },
          { label: "Common DTCs", value: "P0700 · P0730 · P0740 family" },
        ]} />

        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">

          <GuideCard tone="cream" eyebrow="01 · Overview">
            <GuideHeading>Fluid service is preventive maintenance</GuideHeading>
            <GuideLead>
              The transmission is the most expensive component on most vehicles after the engine. Regular fluid service is the single most effective preventive maintenance — fluid breakdown is the leading cause of premature failure.
            </GuideLead>
            <GuideBody>
              <p>
                Four transmission types dominate: traditional <K>automatic</K> (planetary gears, torque converter), <K>CVT</K> (belt or chain, continuously variable), <K>DCT</K> (dual-clutch), and <K>manual</K>. Each requires a specific fluid spec.
              </p>
              <p>
                Internal repair is beyond the scope of routine service. This guide covers diagnosis, fluid service, and verification — anything pointing to internal mechanical wear should go to a transmission specialist.
              </p>
            </GuideBody>
            <GuideCallout variant="critical">
              <K>CVT</K> and <K>DCT</K> fluids are NOT interchangeable with conventional ATF. Using the wrong fluid can destroy the transmission within a few hundred miles. "Universal" multi-vehicle ATF is acceptable only when the OEM-required spec is explicitly listed on the bottle.
            </GuideCallout>
          </GuideCard>

          <GuideCard tone="blush" eyebrow="02 · Preparation">
            <GuideHeading>Identify the trans, confirm the fluid</GuideHeading>
            <GuideLead>
              Get this wrong and the service will cause more damage than the original complaint. Five minutes of verification.
            </GuideLead>

            <GuideStep number="01" title="Identify transmission and fluid spec"
              summary="Decode the VIN, cross-reference, verify on the dipstick or owner's manual.">
              <GuideBullets>
                <GuideBullet>Confirm exact transmission model from VIN</GuideBullet>
                <GuideBullet>Cross-reference OE fluid: <K>ATF+4</K>, <K>Mercon LV</K>, <K>Dexron VI</K>, Nissan <K>NS-2 / NS-3</K>, Honda <K>DW-1</K>, Toyota <K>WS</K>, etc.</GuideBullet>
                <GuideBullet>Check for TSBs related to fluid spec updates</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="02" title="Confirm service interval"
              summary="Severe duty is more common than most drivers realize.">
              <GuideBullets>
                <GuideBullet><K>Severe duty</K> (towing, hot climate, stop-and-go) — service every <K>30 – 50k miles</K></GuideBullet>
                <GuideBullet><K>Normal duty</K> — typically <K>60 – 100k miles</K></GuideBullet>
                <GuideBullet>"Lifetime fill" claims are disputed — most fluids degrade meaningfully by <K>100k</K></GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="03" title="Gather parts and tools">
              <GuideBullets>
                <GuideBullet>Sufficient OE-spec fluid — drain / fill captures <K>30 – 50%</K> of total capacity</GuideBullet>
                <GuideBullet>New pan gasket and internal filter (for pan-drop service)</GuideBullet>
                <GuideBullet>Fluid pump or funnel for the fill port</GuideBullet>
                <GuideBullet>Scan tool capable of reading <K>live fluid temperature</K></GuideBullet>
              </GuideBullets>
            </GuideStep>
          </GuideCard>

          <GuideCard tone="cream" eyebrow="03 · Diagnosis">
            <GuideHeading>Decode the symptom before opening the pan</GuideHeading>
            <GuideLead>
              Each symptom points to a different root cause. Most don't require a rebuild.
            </GuideLead>

            <GuideStep number="01" title="Scan all modules for DTCs">
              <GuideBullets>
                <GuideBullet><K>P0700</K> — TCM is requesting MIL, retrieve TCM-specific codes next</GuideBullet>
                <GuideBullet><K>P0730 – P0736</K> — gear ratio / incorrect gear ratio (slipping or solenoid fault)</GuideBullet>
                <GuideBullet><K>P0740 – P0744</K> — torque converter clutch faults</GuideBullet>
                <GuideBullet><K>P0750 – P0780</K> — shift solenoid faults</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="02" title="Read the fluid"
              summary="Color, smell, and debris tell you most of what you need to know.">
              <GuideBullets>
                <GuideBullet><K>Healthy ATF</K> — translucent red, no burn smell</GuideBullet>
                <GuideBullet><K>Dark brown, burnt smell</K> — overheated, clutch material breakdown</GuideBullet>
                <GuideBullet><K>Milky / pink</K> — coolant contamination from failed radiator cooler (internal damage likely)</GuideBullet>
                <GuideBullet><K>Metallic particles on the magnet</K> — internal mechanical wear</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="03" title="Map symptom to root cause"
              summary="Match the complaint to the most likely fix.">
              <GuideBullets>
                <GuideBullet><K>Delayed engagement</K> in D or R — low fluid, pump or seal wear</GuideBullet>
                <GuideBullet><K>Slipping</K> (RPM flares between shifts) — worn clutches, low line pressure</GuideBullet>
                <GuideBullet><K>Harsh shifts</K> — adaptive learn corrupted (try TCM relearn) or solenoid fault</GuideBullet>
                <GuideBullet><K>No shift / stuck in gear</K> — TCM fault, sensor fault, or limp mode</GuideBullet>
                <GuideBullet><K>Shudder at light cruise</K> — torque converter clutch shudder — fluid change often resolves</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="04" title="Eliminate supporting-system causes"
              summary="What looks like a transmission problem often isn't.">
              <GuideBullets>
                <GuideBullet>Engine misfire under load can mimic transmission slip</GuideBullet>
                <GuideBullet>Cooler lines / cooler — leaks or blockages affect shift quality</GuideBullet>
                <GuideBullet>Broken transmission mounts cause perceived harsh shifts</GuideBullet>
              </GuideBullets>
            </GuideStep>
          </GuideCard>

          <GuideCard tone="blush" eyebrow="04 · Fluid Service">
            <GuideHeading>Drain, drop, or exchange</GuideHeading>
            <GuideLead>
              Three different service procedures with different use cases. Pick the right one for the mileage and condition.
            </GuideLead>

            <GuideStep number="01" title="Drain and pan-drop"
              summary="The conservative service — replaces 30 – 50% of fluid.">
              <GuideBullets>
                <GuideBullet>Bring transmission to operating temp before draining</GuideBullet>
                <GuideBullet>Drop pan, inspect magnet — fine clutch material is normal, metal flakes are not</GuideBullet>
                <GuideBullet>Replace internal filter and pan gasket — clean pan thoroughly</GuideBullet>
                <GuideBullet>Torque pan bolts in cross pattern — typically <K>8 – 10 ft-lb</K>, no more</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="02" title="Cooler-line fluid exchange"
              summary="For higher-mileage or contaminated-fluid service. Replaces 90%+ of fluid.">
              <GuideBullets>
                <GuideBullet>Disconnect a cooler line, run pump to push old fluid out while adding new</GuideBullet>
                <GuideBullet>Never use back-flush procedures — fluid must flow in factory direction</GuideBullet>
                <GuideBullet>Continue until clean fluid exits</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="03" title="Fill to correct level"
              summary="Critical: most modern transmissions check fluid level at a specific temperature window.">
              <GuideBullets>
                <GuideBullet>Most modern units have a fill plug and overflow standpipe — no dipstick</GuideBullet>
                <GuideBullet>Fluid level is checked at <K>95 – 115 °F</K> per OE</GuideBullet>
                <GuideBullet>Use scan tool to monitor live fluid temperature during fill</GuideBullet>
                <GuideBullet>Overfilling causes foaming and is as harmful as underfilling</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideCallout variant="critical">
              Do NOT flush a transmission with <K>significant clutch material</K> in the pan. Debris can plug valve body passages and turn a fluid service into a rebuild. Pan-drop only on heavily contaminated fluid.
            </GuideCallout>
          </GuideCard>

          <GuideCard tone="cream" eyebrow="05 · Verification">
            <GuideHeading>Reset adaptives, leak-check, road test</GuideHeading>
            <GuideLead>
              The shift quality immediately after fluid service may feel harsh — the TCM relearn cycle resolves it within 20 – 30 minutes of driving.
            </GuideLead>

            <GuideStep number="01" title="Reset adaptive shift learn"
              summary="Required after every fluid service.">
              <GuideBullets>
                <GuideBullet>Scan tool: reset TCM adaptive values</GuideBullet>
                <GuideBullet>Drive vehicle through full RPM range and all gears for <K>20 – 30 minutes</K> to relearn</GuideBullet>
                <GuideBullet>Initial harsh shifts normalize during the relearn cycle</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="02" title="Check for leaks"
              summary="Pan gasket, fill plug, cooler lines.">
              <GuideBullets>
                <GuideBullet>Inspect after road test with transmission at operating temp</GuideBullet>
                <GuideBullet>Re-verify fluid level at temperature after the drive cycle</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="03" title="Road test across all gears"
              summary="Verify smooth operation under load.">
              <GuideBullets>
                <GuideBullet>Smooth engagement in D and R from a stop</GuideBullet>
                <GuideBullet>Shifts through all forward gears under light, medium, and heavy throttle</GuideBullet>
                <GuideBullet>Confirm <K>TCC lockup</K> at steady cruise (TCM data PID or slight RPM drop at <K>40 – 55 mph</K>)</GuideBullet>
                <GuideBullet>Verify no DTCs return after a full drive cycle</GuideBullet>
              </GuideBullets>
            </GuideStep>
          </GuideCard>

        </div>
      </main>
      <Footer />
    </div>
  );
}
