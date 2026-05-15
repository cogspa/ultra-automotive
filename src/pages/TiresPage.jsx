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

export default function TiresPage() {
  return (
    <div className="min-h-screen bg-black font-sans text-white overflow-x-hidden selection:bg-[#ff8a4a]/30 selection:text-white">
      <TopNav />
      <main className="pt-32 pb-24 px-5 md:px-10 lg:px-14 max-w-[1400px] mx-auto">
        <QuickGuideNav />

        <div className="mb-8">
          <span className="font-mono-cap text-white/50">Quick Guide</span>
          <h1 className="mt-4 font-display text-white" style={{ fontSize: "clamp(40px, 5vw, 76px)", lineHeight: 0.96, letterSpacing: "-0.03em" }}>
            Tires <span className="italic-display" style={{ color: "#efe1d8" }}>Guide</span>
          </h1>
          <p className="mt-4 max-w-[640px] text-[15px] text-white/60 leading-relaxed">
            Inspect, rotate, and replace tires correctly — including TPMS service that customers will absolutely notice if you skip.
          </p>
        </div>

        <GuideMeta items={[
          { label: "Difficulty", value: "Beginner-friendly" },
          { label: "Time", value: "30 min – 2 hours" },
          { label: "Tools", value: "Tread gauge, torque wrench, TPMS tool" },
          { label: "Replace as", value: "Pairs minimum, sets on AWD" },
        ]} />

        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">

          <GuideCard tone="cream" eyebrow="01 · Overview">
            <GuideHeading>The only contact patch you have</GuideHeading>
            <GuideLead>
              Every input from steering, braking, and acceleration passes through four palm-sized contact patches. Tire condition and inflation matter more for safety than nearly any other maintenance item.
            </GuideLead>
            <GuideBody>
              <p>
                Replacement tires must meet or exceed OE <K>load index</K> and <K>speed rating</K>. Substituting lower-rated tires can void insurance, reduce stopping distance, and create unsafe handling at speed.
              </p>
              <p>
                On <K>AWD vehicles</K>, all four tires must match in size, brand, and tread depth within <K>2/32"</K>. Mismatched circumferences cause driveline binding and can destroy a transfer case.
              </p>
            </GuideBody>
            <GuideCallout variant="critical">
              Tire age matters as much as tread depth. Replace tires older than <K>6 years</K> regardless of remaining tread — rubber hardens and the sidewall loses structural integrity.
            </GuideCallout>
          </GuideCard>

          <GuideCard tone="blush" eyebrow="02 · Preparation">
            <GuideHeading>Identify, document, and inspect</GuideHeading>
            <GuideLead>
              The placard, the DOT date code, and the wear pattern tell you what's needed before you mount anything.
            </GuideLead>

            <GuideStep number="01" title="Read the door-jamb placard"
              summary="The placard — not the sidewall — is the authoritative source for OE size and pressure.">
              <GuideBullets>
                <GuideBullet>Size — for example <K>225/65R17</K></GuideBullet>
                <GuideBullet>Cold inflation pressure — front and rear may differ</GuideBullet>
                <GuideBullet>Load index and speed rating</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="02" title="Document tire age via DOT code"
              summary="Last four digits of the DOT code = week and year of manufacture.">
              <GuideBullets>
                <GuideBullet>Example: <K>2324</K> = 23rd week of 2024</GuideBullet>
                <GuideBullet>Tires over <K>6 years old</K> from DOT date — recommend replacement regardless of tread</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="03" title="Scan TPMS before service"
              summary="Document existing sensor IDs and battery health.">
              <GuideBullets>
                <GuideBullet>TPMS sensors older than <K>7 years</K> are due for replacement during dismount</GuideBullet>
                <GuideBullet>Always replace TPMS service kit (seal, grommet, valve core, nut) with every new tire</GuideBullet>
              </GuideBullets>
            </GuideStep>
          </GuideCard>

          <GuideCard tone="cream" eyebrow="03 · Inspection">
            <GuideHeading>Read the tires before you replace them</GuideHeading>
            <GuideLead>
              Wear patterns diagnose alignment, suspension, and inflation issues. New tires installed without addressing the underlying problem wear the same way.
            </GuideLead>

            <GuideStep number="01" title="Measure tread depth"
              summary="Across all three grooves on each tire.">
              <GuideBullets>
                <GuideBullet><K>2/32"</K> — legal minimum, replace immediately</GuideBullet>
                <GuideBullet><K>4/32"</K> — recommended replacement threshold for wet braking performance</GuideBullet>
                <GuideBullet>Variation across grooves indicates alignment or suspension issue</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="02" title="Read the wear pattern"
              summary="Each pattern points to a specific root cause.">
              <GuideBullets>
                <GuideBullet><K>Center wear</K> — chronic overinflation</GuideBullet>
                <GuideBullet><K>Edge wear, both shoulders</K> — chronic underinflation</GuideBullet>
                <GuideBullet><K>One-side wear</K> — camber out of spec</GuideBullet>
                <GuideBullet><K>Feathering / sawtooth</K> — toe out of spec</GuideBullet>
                <GuideBullet><K>Cupping / scalloping</K> — worn shocks or unbalanced wheels</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="03" title="Inspect sidewall and condition"
              summary="Any of these = immediate replacement.">
              <GuideBullets>
                <GuideBullet>Sidewall bulges — internal belt separation, can fail catastrophically</GuideBullet>
                <GuideBullet>Sidewall cracks (weather checking) — UV degradation</GuideBullet>
                <GuideBullet>Embedded objects in the tread — patch from inside, never plug from outside on a structural puncture</GuideBullet>
                <GuideBullet>Plug repairs on the shoulder or sidewall — not repairable, replace</GuideBullet>
              </GuideBullets>
            </GuideStep>
          </GuideCard>

          <GuideCard tone="blush" eyebrow="04 · Rotation & Replacement">
            <GuideHeading>Right pattern, right TPMS service, right balance</GuideHeading>
            <GuideLead>
              Rotation pattern depends on drivetrain and tire type. Get this wrong and you accelerate wear on the front axle.
            </GuideLead>

            <GuideStep number="01" title="Use the correct rotation pattern"
              summary="Drivetrain and tire direction dictate the pattern.">
              <GuideBullets>
                <GuideBullet><K>FWD</K> — forward cross (rears cross to front, fronts straight back)</GuideBullet>
                <GuideBullet><K>RWD / AWD</K> — rearward cross (fronts cross to rear, rears straight forward)</GuideBullet>
                <GuideBullet><K>Directional tires</K> — front-to-back on same side only</GuideBullet>
                <GuideBullet><K>Asymmetric or staggered</K> — refer to placard, may not be rotatable at all</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="02" title="Dismount carefully"
              summary="The wheel is more delicate than it looks. Modern alloys scratch easily.">
              <GuideBullets>
                <GuideBullet>Mark valve stem position for re-balance reference</GuideBullet>
                <GuideBullet>Apply bead lubricant — never soap containing chloride (corrodes alloys)</GuideBullet>
                <GuideBullet>Use plastic bead clamp protectors on alloy wheels</GuideBullet>
                <GuideBullet>Inspect wheel bead seat for corrosion — wire-brush and treat as needed</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="03" title="Service the TPMS sensor"
              summary="Service kit components are single-use.">
              <GuideBullets>
                <GuideBullet>Replace seal, grommet, valve core, and nut on every dismount</GuideBullet>
                <GuideBullet>Torque the nut to spec — typically <K>35 – 62 in-lb</K>, not ft-lb (easy to crush)</GuideBullet>
                <GuideBullet>If sensor battery is at end of life, replace the whole sensor</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="04" title="Seat beads safely and balance"
              summary="Bead seating is the highest-risk part of this job.">
              <GuideBullets>
                <GuideBullet>Never exceed <K>40 PSI</K> for bead seating without a safety cage</GuideBullet>
                <GuideBullet>Verify both beads seat fully and evenly against the rim</GuideBullet>
                <GuideBullet>Road-force balance for vehicles with prior vibration complaints</GuideBullet>
                <GuideBullet>Final pressure to door placard spec, measured cold</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="05" title="Mount wheels and torque"
              summary="Star pattern, OE torque, re-torque after a short drive.">
              <GuideBullets>
                <GuideBullet>Star pattern to OE lug-nut torque — typically <K>80 – 100 ft-lb</K></GuideBullet>
                <GuideBullet>Re-torque after <K>50 – 100 miles</K> — especially with alloy wheels</GuideBullet>
              </GuideBullets>
            </GuideStep>
          </GuideCard>

          <GuideCard tone="cream" eyebrow="05 · TPMS Relearn & Verify">
            <GuideHeading>Relearn TPMS and final road test</GuideHeading>
            <GuideLead>
              TPMS relearn procedure varies by manufacturer — get this wrong and the warning light stays on. The customer absolutely notices.
            </GuideLead>

            <GuideStep number="01" title="Perform TPMS relearn"
              summary="Procedure depends on vehicle.">
              <GuideBullets>
                <GuideBullet><K>Auto-learn</K> — drive 10 – 20 minutes above <K>20 mph</K> (most GM, Ford)</GuideBullet>
                <GuideBullet><K>Stationary relearn</K> — scan tool or magnet / deflation sequence (Toyota, Nissan, Honda)</GuideBullet>
                <GuideBullet><K>OBD relearn</K> — scan tool writes new sensor IDs to the module</GuideBullet>
                <GuideBullet>Verify all four sensor IDs are registered correctly</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="02" title="Set final pressure cold"
              summary="Pressure rises about 1 PSI per 10 °F as tires heat up.">
              <GuideBullets>
                <GuideBullet>Match door placard, not the sidewall maximum</GuideBullet>
                <GuideBullet>Set spare tire pressure if equipped</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="03" title="Road test"
              summary="Confirm no pull, no vibration, no warning lights.">
              <GuideBullets>
                <GuideBullet>Vehicle tracks straight with no steering input</GuideBullet>
                <GuideBullet>No vibration through wheel or seat at highway speed</GuideBullet>
                <GuideBullet>TPMS warning light extinguishes after relearn drive cycle</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideCallout variant="tip">
              Recommend alignment after every tire replacement, especially if the old tires showed uneven wear. Skipping alignment after new tires usually means the new tires wear the same way as the old ones.
            </GuideCallout>
          </GuideCard>

        </div>
      </main>
      <Footer />
    </div>
  );
}
