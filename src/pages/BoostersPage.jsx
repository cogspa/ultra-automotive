import React, { useState } from "react";
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

export default function BoostersPage() {
  const [type, setType] = useState("vacuum");

  return (
    <div className="min-h-screen bg-black font-sans text-white overflow-x-hidden selection:bg-[#ff8a4a]/30 selection:text-white">
      <TopNav />
      <main className="pt-32 pb-24 px-5 md:px-10 lg:px-14 max-w-[1400px] mx-auto">
        <QuickGuideNav />

        <div className="mb-8">
          <span className="font-mono-cap text-white/50">Quick Guide</span>
          <h1 className="mt-4 font-display text-white" style={{ fontSize: "clamp(40px, 5vw, 76px)", lineHeight: 0.96, letterSpacing: "-0.03em" }}>
            Brake Boosters <span className="italic-display" style={{ color: "#efe1d8" }}>Guide</span>
          </h1>
          <p className="mt-4 max-w-[640px] text-[15px] text-white/60 leading-relaxed">
            Diagnose and replace vacuum or hydroboost brake boosters with proper pushrod adjustment and a firm pedal on the first test.
          </p>
        </div>

        <GuideMeta items={[
          { label: "Difficulty", value: "Intermediate – Advanced" },
          { label: "Time", value: "2 – 4 hours" },
          { label: "Tools", value: "Wrenches, vacuum gauge or PS pressure gauge" },
          { label: "Type", value: "Vacuum or Hydroboost" },
        ]} />

        {/* Type switcher */}
        <div className="mb-10 flex gap-2 flex-wrap">
          <button
            onClick={() => setType("vacuum")}
            className={`px-4 py-2 rounded-full text-[13px] font-mono-cap transition ${
              type === "vacuum"
                ? "bg-white text-black"
                : "bg-white/5 text-white/70 hover:bg-white/10"
            }`}
          >
            Vacuum Booster
          </button>
          <button
            onClick={() => setType("hydro")}
            className={`px-4 py-2 rounded-full text-[13px] font-mono-cap transition ${
              type === "hydro"
                ? "bg-white text-black"
                : "bg-white/5 text-white/70 hover:bg-white/10"
            }`}
          >
            Hydroboost
          </button>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">

          {/* CARD 01 — OVERVIEW (common) */}
          <GuideCard tone="cream" eyebrow="01 · Overview">
            <GuideHeading>How brake boosters multiply pedal force</GuideHeading>
            <GuideLead>
              A booster multiplies the force applied at the pedal so the driver doesn't need 100+ lb of leg strength to stop the vehicle. Two technologies dominate modern vehicles.
            </GuideLead>
            <GuideBody>
              <p>
                <K>Vacuum boosters</K> use engine vacuum (or an electric vacuum pump on direct-injection / turbo / EV engines) to create a pressure differential across a diaphragm. Most cars and light trucks use this.
              </p>
              <p>
                <K>Hydroboost</K> uses hydraulic pressure from the power-steering pump instead of vacuum. Common on diesels, heavy-duty trucks, and many modern Ford / GM full-size vehicles.
              </p>
            </GuideBody>
            <GuideCallout variant="critical">
              Brakes are a primary safety system. If you are not confident with hydraulic or vacuum diagnosis, refer the job to a professional.
            </GuideCallout>
          </GuideCard>

          {/* VACUUM BOOSTER PATH */}
          {type === "vacuum" && (
            <>
              <GuideCard tone="blush" eyebrow="02 · Preparation · Vacuum">
                <GuideHeading>Verify vacuum supply first</GuideHeading>
                <GuideLead>
                  Most "bad booster" complaints on modern engines are actually low vacuum from a leak, a failed check valve, or a failed electric vacuum pump.
                </GuideLead>

                <GuideStep number="01" title="Test engine vacuum at idle"
                  summary="Most boosters need at least 17 – 21 inHg to function correctly.">
                  <GuideBullets>
                    <GuideBullet>Connect vacuum gauge to a manifold port</GuideBullet>
                    <GuideBullet>Reading below <K>17 inHg</K> at idle — diagnose vacuum leak before condemning booster</GuideBullet>
                    <GuideBullet>Electric vacuum pump–equipped vehicles: verify pump cycles and holds vacuum</GuideBullet>
                  </GuideBullets>
                </GuideStep>

                <GuideStep number="02" title="Inspect the vacuum supply line"
                  summary="A collapsed or cracked hose creates symptoms identical to a failed booster.">
                  <GuideBullets>
                    <GuideBullet>Check hose for cracks, soft spots, or collapse under vacuum</GuideBullet>
                    <GuideBullet>Test check valve — should allow flow toward engine only, hold vacuum on the booster side</GuideBullet>
                  </GuideBullets>
                </GuideStep>

                <GuideStep number="03" title="Inspect master cylinder mating surface"
                  summary="Brake fluid leaking past the master cylinder rear seal contaminates the booster.">
                  <GuideBullets>
                    <GuideBullet>Pull master cylinder and inspect the mating surface for fluid</GuideBullet>
                    <GuideBullet>Fluid present — replace the master cylinder along with the booster</GuideBullet>
                  </GuideBullets>
                </GuideStep>
              </GuideCard>

              <GuideCard tone="cream" eyebrow="03 · Diagnosis · Vacuum">
                <GuideHeading>Confirm the booster is actually failed</GuideHeading>
                <GuideLead>
                  Two simple tests isolate the booster from other brake-system causes.
                </GuideLead>

                <GuideStep number="01" title="The pump-down test"
                  summary="Detects whether the booster holds vacuum.">
                  <GuideBullets>
                    <GuideBullet>Engine off, pump pedal <K>4 – 5 times</K> to deplete vacuum reserve</GuideBullet>
                    <GuideBullet>Hold pedal pressure, start engine</GuideBullet>
                    <GuideBullet>Pedal should drop slightly as vacuum assist engages — if not, booster or vacuum supply is failed</GuideBullet>
                  </GuideBullets>
                </GuideStep>

                <GuideStep number="02" title="The hold-down test"
                  summary="Detects whether the booster leaks vacuum.">
                  <GuideBullets>
                    <GuideBullet>Engine running, press and hold pedal at moderate pressure</GuideBullet>
                    <GuideBullet>Shut off the engine, continue holding pedal</GuideBullet>
                    <GuideBullet>Pedal should stay firm for <K>30+ seconds</K> — sinking pedal indicates internal leak</GuideBullet>
                  </GuideBullets>
                </GuideStep>
              </GuideCard>

              <GuideCard tone="blush" eyebrow="04 · Installation · Vacuum">
                <GuideHeading>Replace and adjust pushrod</GuideHeading>
                <GuideLead>
                  Wrong pushrod length causes the most common comeback — pedal too high, pedal too low, or brake drag.
                </GuideLead>

                <GuideStep number="01" title="Remove master cylinder from booster"
                  summary="Cap brake lines to prevent fluid loss.">
                  <GuideBullets>
                    <GuideBullet>Disconnect brake lines, cap immediately</GuideBullet>
                    <GuideBullet>Remove master cylinder, set aside without disturbing reservoir level</GuideBullet>
                  </GuideBullets>
                </GuideStep>

                <GuideStep number="02" title="Remove booster from firewall"
                  summary="Pedal pin from inside the cabin, then mounting nuts.">
                  <GuideBullets>
                    <GuideBullet>Disconnect pushrod clevis pin at the brake pedal</GuideBullet>
                    <GuideBullet>Remove vacuum hose and mounting nuts</GuideBullet>
                    <GuideBullet>Lift booster out, transferring any brackets to the new unit</GuideBullet>
                  </GuideBullets>
                </GuideStep>

                <GuideStep number="03" title="Verify and set pushrod length"
                  summary="Critical step. Both pedal-side and master-cylinder-side pushrods.">
                  <GuideBullets>
                    <GuideBullet>Compare new pushrod length to original</GuideBullet>
                    <GuideBullet>Use manufacturer's gauge if specified — eyeballing causes pedal-feel complaints</GuideBullet>
                    <GuideBullet>Adjust per OE procedure if pushrod is adjustable</GuideBullet>
                  </GuideBullets>
                </GuideStep>

                <GuideStep number="04" title="Install and reconnect"
                  summary="Reverse of removal, torque to spec.">
                  <GuideBullets>
                    <GuideBullet>Mount booster, torque firewall nuts to OE spec</GuideBullet>
                    <GuideBullet>Reconnect pedal clevis pin and retaining clip</GuideBullet>
                    <GuideBullet>Mount master cylinder with new gasket, torque to spec</GuideBullet>
                    <GuideBullet>Reconnect vacuum hose with check valve oriented correctly</GuideBullet>
                  </GuideBullets>
                </GuideStep>
              </GuideCard>
            </>
          )}

          {/* HYDROBOOST PATH */}
          {type === "hydro" && (
            <>
              <GuideCard tone="blush" eyebrow="02 · Preparation · Hydroboost">
                <GuideHeading>Service the power-steering system first</GuideHeading>
                <GuideLead>
                  Hydroboost shares fluid with power steering. Contamination, low pressure, or low fluid level will destroy a new hydroboost unit.
                </GuideLead>

                <GuideStep number="01" title="Test power-steering pressure"
                  summary="Hydroboost needs full PS pump output to function.">
                  <GuideBullets>
                    <GuideBullet>Connect a power-steering pressure gauge</GuideBullet>
                    <GuideBullet>Verify pump output meets OE spec at idle and at <K>1,500 rpm</K></GuideBullet>
                    <GuideBullet>Low pressure — repair pump or pulley before installing new hydroboost</GuideBullet>
                  </GuideBullets>
                </GuideStep>

                <GuideStep number="02" title="Inspect fluid and lines"
                  summary="Burnt or contaminated fluid degrades hydroboost seals fast.">
                  <GuideBullets>
                    <GuideBullet>Fluid should be clear / amber — dark or burnt fluid means full system flush</GuideBullet>
                    <GuideBullet>Inspect all PS hoses for cracks, leaks, ballooning</GuideBullet>
                    <GuideBullet>Verify PS belt condition and tension</GuideBullet>
                  </GuideBullets>
                </GuideStep>

                <GuideStep number="03" title="Confirm fluid type"
                  summary="Mixing fluid types is a common cause of repeat hydroboost failure.">
                  <GuideBullets>
                    <GuideBullet>Verify OE fluid spec — typically <K>Dexron VI</K>, <K>Mercon V</K>, or dedicated PS fluid</GuideBullet>
                    <GuideBullet>Flush entire system if fluid type is unknown or contaminated</GuideBullet>
                  </GuideBullets>
                </GuideStep>
              </GuideCard>

              <GuideCard tone="cream" eyebrow="03 · Diagnosis · Hydroboost">
                <GuideHeading>Distinguish hydroboost from PS failure</GuideHeading>
                <GuideLead>
                  Many "hard pedal" complaints on hydroboost vehicles are actually power-steering issues. Confirm which system is failed before opening anything.
                </GuideLead>

                <GuideStep number="01" title="The pedal-reserve test"
                  summary="Hydroboost stores energy in an accumulator for one or two assisted stops with engine off.">
                  <GuideBullets>
                    <GuideBullet>Engine off, pump pedal until firm</GuideBullet>
                    <GuideBullet>Start engine — pedal should drop and feel assisted</GuideBullet>
                    <GuideBullet>If pedal stays hard with engine running, hydroboost or PS pressure is failed</GuideBullet>
                  </GuideBullets>
                </GuideStep>

                <GuideStep number="02" title="Steering vs braking correlation"
                  summary="Hydroboost and PS share fluid — symptoms often correlate.">
                  <GuideBullets>
                    <GuideBullet>Hard pedal AND hard steering — PS pump or fluid issue</GuideBullet>
                    <GuideBullet>Hard pedal, normal steering — hydroboost unit is failed</GuideBullet>
                    <GuideBullet>Pedal grunts or hisses — hydroboost seal failure</GuideBullet>
                  </GuideBullets>
                </GuideStep>
              </GuideCard>

              <GuideCard tone="blush" eyebrow="04 · Installation · Hydroboost">
                <GuideHeading>Replace with new O-rings and a fluid flush</GuideHeading>
                <GuideLead>
                  Hand-thread every PS line. Cross-threading the high-pressure connection is one of the most expensive mistakes possible on this job.
                </GuideLead>

                <GuideStep number="01" title="Drain power-steering system"
                  summary="Place catch pan, disconnect return line, drain fully.">
                  <GuideBullets>
                    <GuideBullet>Mark PS pressure and return lines for proper reconnect</GuideBullet>
                    <GuideBullet>Cap all lines and ports to prevent contamination</GuideBullet>
                  </GuideBullets>
                </GuideStep>

                <GuideStep number="02" title="Remove master cylinder and hydroboost"
                  summary="Master first, then hydroboost from firewall.">
                  <GuideBullets>
                    <GuideBullet>Disconnect brake lines, cap immediately</GuideBullet>
                    <GuideBullet>Remove master cylinder mounting nuts</GuideBullet>
                    <GuideBullet>Disconnect pushrod clevis at pedal, remove firewall nuts</GuideBullet>
                  </GuideBullets>
                </GuideStep>

                <GuideStep number="03" title="Install new hydroboost"
                  summary="Always with new O-rings on every hydraulic connection.">
                  <GuideBullets>
                    <GuideBullet>Transfer pushrod or set length per OE</GuideBullet>
                    <GuideBullet>Mount unit, torque firewall nuts to spec</GuideBullet>
                    <GuideBullet>Install all <K>new O-rings</K> on hydraulic fittings</GuideBullet>
                    <GuideBullet>Hand-thread PS lines first, then torque to OE spec</GuideBullet>
                  </GuideBullets>
                </GuideStep>

                <GuideStep number="04" title="Install master cylinder">
                  <GuideBullets>
                    <GuideBullet>Use new gasket between master and hydroboost</GuideBullet>
                    <GuideBullet>Torque mounting nuts to spec</GuideBullet>
                    <GuideBullet>Reconnect brake lines, hand-thread first</GuideBullet>
                  </GuideBullets>
                </GuideStep>

                <GuideCallout variant="critical">
                  Always use new O-rings on every hydraulic connection. Reusing old O-rings is the leading cause of leaks on hydroboost replacement.
                </GuideCallout>
              </GuideCard>
            </>
          )}

          {/* CARD 05 — VERIFICATION (common, type-aware text) */}
          <GuideCard tone="cream" eyebrow="05 · Verification">
            <GuideHeading>Bleed, pressurize, and road-test</GuideHeading>
            <GuideLead>
              {type === "vacuum"
                ? "Bleed the brake system and verify vacuum assist before any movement."
                : "Bleed both the power-steering system and the brake system before any movement."}
            </GuideLead>

            {type === "hydro" && (
              <GuideStep number="01" title="Bleed power-steering system"
                summary="Air in the PS system means no assist.">
                <GuideBullets>
                  <GuideBullet>Fill reservoir with correct OE-spec fluid</GuideBullet>
                  <GuideBullet>Cycle steering lock-to-lock with engine off, top off</GuideBullet>
                  <GuideBullet>Start engine, cycle again until no air bubbles in reservoir</GuideBullet>
                </GuideBullets>
              </GuideStep>
            )}

            <GuideStep
              number={type === "hydro" ? "02" : "01"}
              title="Bleed the brake system"
              summary="Furthest from master cylinder first, in OE sequence."
            >
              <GuideBullets>
                <GuideBullet>Bleed until clean, bubble-free fluid runs at each corner</GuideBullet>
                <GuideBullet>Keep master cylinder reservoir topped off throughout</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep
              number={type === "hydro" ? "03" : "02"}
              title="Test pedal feel before movement"
            >
              <GuideBullets>
                <GuideBullet>Pedal should firm up within <K>2 – 3 strokes</K></GuideBullet>
                <GuideBullet>Should not sink under steady pressure</GuideBullet>
                <GuideBullet>{type === "vacuum"
                  ? "Pedal drops slightly when engine starts — confirms vacuum assist"
                  : "Pedal drops noticeably when engine starts — confirms hydroboost assist"}</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep
              number={type === "hydro" ? "04" : "03"}
              title="Road test and verify"
            >
              <GuideBullets>
                <GuideBullet>Inspect every fitting for leaks with the system pressurized</GuideBullet>
                <GuideBullet>Verify no warning lights, no pull, normal pedal feel under all conditions</GuideBullet>
                <GuideBullet>Adjust brake light switch if pedal height changed</GuideBullet>
              </GuideBullets>
            </GuideStep>
          </GuideCard>

        </div>
      </main>
      <Footer />
    </div>
  );
}
