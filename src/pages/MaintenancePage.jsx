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

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-black font-sans text-white overflow-x-hidden selection:bg-[#ff8a4a]/30 selection:text-white">
      <TopNav />
      <main className="pt-32 pb-24 px-5 md:px-10 lg:px-14 max-w-[1400px] mx-auto">
        <QuickGuideNav />

        <div className="mb-8">
          <span className="font-mono-cap text-white/50">Quick Guide</span>
          <h1 className="mt-4 font-display text-white" style={{ fontSize: "clamp(40px, 5vw, 76px)", lineHeight: 0.96, letterSpacing: "-0.03em" }}>
            General Maintenance <span className="italic-display" style={{ color: "#efe1d8" }}>Guide</span>
          </h1>
          <p className="mt-4 max-w-[640px] text-[15px] text-white/60 leading-relaxed">
            The cheapest insurance against expensive repair — every interval-based service that prevents catastrophic failure.
          </p>
        </div>

        <GuideMeta items={[
          { label: "Difficulty", value: "Beginner-friendly" },
          { label: "Cadence", value: "Per OE schedule" },
          { label: "Tools", value: "Sockets, filter wrench, refractometer" },
          { label: "Default schedule", value: "Severe-duty interval" },
        ]} />

        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">

          <GuideCard tone="cream" eyebrow="01 · Overview">
            <GuideHeading>Why maintenance matters more than repair</GuideHeading>
            <GuideLead>
              Most catastrophic engine, transmission, and cooling failures trace back to a deferred service that would have cost a fraction of the eventual repair.
            </GuideLead>
            <GuideBody>
              <p>
                Every OEM publishes two schedules — <K>normal</K> and <K>severe duty</K>. Most real-world driving (short trips, stop-and-go, towing, dusty roads, extreme heat or cold) qualifies as severe duty.
              </p>
              <p>
                Default to the severe-duty schedule unless the vehicle is genuinely a long-distance highway commuter. The cost difference is small; the risk difference is large.
              </p>
            </GuideBody>
            <GuideCallout variant="tip">
              Document every service with date, mileage, and parts used. Maintenance records significantly improve resale value and are required for many manufacturer warranty claims.
            </GuideCallout>
          </GuideCard>

          <GuideCard tone="blush" eyebrow="02 · Oil & Filter">
            <GuideHeading>Engine oil and filter</GuideHeading>
            <GuideLead>
              The most impactful service on the vehicle. Wrong viscosity, wrong spec, or stretched intervals destroy engines.
            </GuideLead>

            <GuideStep number="01" title="Verify viscosity and spec"
              summary="Read the oil-fill cap and the owner's manual.">
              <GuideBullets>
                <GuideBullet>Viscosity: <K>0W-20</K>, <K>5W-30</K>, <K>0W-16</K>, etc.</GuideBullet>
                <GuideBullet>OE certification: <K>dexos1</K>, <K>MB 229.5</K>, <K>VW 502.00</K>, etc.</GuideBullet>
                <GuideBullet>Synthetic is required on most modern turbocharged and direct-injection engines</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="02" title="Service interval guidance">
              <GuideBullets>
                <GuideBullet>Conventional oil — typically <K>3 – 5k miles</K></GuideBullet>
                <GuideBullet>Synthetic — <K>5 – 10k miles</K>, follow oil-life monitor where equipped</GuideBullet>
                <GuideBullet>Severe duty — cut OEM interval by <K>30 – 50%</K></GuideBullet>
                <GuideBullet>Direct-injection turbo engines: <K>5k synthetic</K> due to fuel dilution</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="03" title="Service procedure">
              <GuideBullets>
                <GuideBullet>Warm engine briefly, drain with new crush washer or o-ring on the plug</GuideBullet>
                <GuideBullet>Use OEM-quality filter — budget filters can bypass on cold start</GuideBullet>
                <GuideBullet>Pre-lube filter gasket, hand-tighten <K>3/4 turn past contact</K></GuideBullet>
                <GuideBullet>Fill to correct capacity, run engine, recheck level cold the next day</GuideBullet>
                <GuideBullet>Reset oil-life monitor</GuideBullet>
              </GuideBullets>
            </GuideStep>
          </GuideCard>

          <GuideCard tone="cream" eyebrow="03 · Filters">
            <GuideHeading>Air and cabin filters</GuideHeading>
            <GuideLead>
              Two filters, two completely different jobs. Both are easy and high-value.
            </GuideLead>

            <GuideStep number="01" title="Engine air filter"
              summary="Restricted airflow destroys MAF sensors and reduces economy.">
              <GuideBullets>
                <GuideBullet>Inspect every oil change — replace every <K>15 – 30k miles</K></GuideBullet>
                <GuideBullet>Sooner in dusty environments</GuideBullet>
                <GuideBullet>Check airbox seals — air leaks past the filter wear the MAF sensor prematurely</GuideBullet>
                <GuideBullet>Do not tap or blow out filters with compressed air — damages the media</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="02" title="Cabin air filter"
              summary="Behind the glovebox or under the dash on most vehicles.">
              <GuideBullets>
                <GuideBullet>Replace every <K>15 – 25k miles</K> or annually</GuideBullet>
                <GuideBullet>Sooner if customer reports reduced airflow or odor</GuideBullet>
                <GuideBullet>Note airflow direction arrow on the new filter</GuideBullet>
                <GuideBullet>Activated-carbon filters add odor protection for slightly higher cost</GuideBullet>
              </GuideBullets>
            </GuideStep>
          </GuideCard>

          <GuideCard tone="blush" eyebrow="04 · Brake Fluid & Coolant">
            <GuideHeading>Hydraulic fluids that absorb water</GuideHeading>
            <GuideLead>
              Both of these fluids degrade chemically over time even if the vehicle sits. Time-based intervals matter as much as mileage.
            </GuideLead>

            <GuideStep number="01" title="Brake fluid service"
              summary="Hygroscopic — absorbs water from the air, lowers boiling point.">
              <GuideBullets>
                <GuideBullet>Test water content with refractometer or electronic tester — flush at <K>3%</K> or higher</GuideBullet>
                <GuideBullet>Recommended interval — every <K>2 – 3 years</K> regardless of mileage</GuideBullet>
                <GuideBullet>Use only OE-specified fluid — <K>DOT 3</K>, <K>DOT 4</K>, or <K>DOT 5.1</K></GuideBullet>
                <GuideBullet>Never use <K>DOT 5 silicone</K> in conventional brake systems</GuideBullet>
                <GuideBullet>Bleed in correct sequence — typically furthest from master cylinder first</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="02" title="Coolant service"
              summary="Modern long-life coolants are color-coded but NOT interchangeable.">
              <GuideBullets>
                <GuideBullet>Verify OE spec — <K>OAT</K>, <K>HOAT</K>, <K>IAT</K>, or <K>P-OAT</K></GuideBullet>
                <GuideBullet>Long-life: <K>5 years / 100k miles</K>. Conventional green: <K>2 years</K></GuideBullet>
                <GuideBullet>Test freeze point with refractometer — aim for <K>−34 °F</K> protection</GuideBullet>
                <GuideBullet>Mix only with distilled water if not using pre-mixed</GuideBullet>
                <GuideBullet>Bleed cooling system per OE procedure — air pockets cause overheating</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideCallout variant="critical">
              Brake fluid is corrosive to paint. Wipe any spills immediately and rinse the area with water — even a few drops will lift body paint within hours.
            </GuideCallout>
          </GuideCard>

          <GuideCard tone="cream" eyebrow="05 · Plugs & Belt">
            <GuideHeading>Spark plugs and serpentine belt</GuideHeading>
            <GuideLead>
              Two high-mileage services that prevent expensive failures. Plug replacement protects the catalytic converter; belt replacement prevents being stranded.
            </GuideLead>

            <GuideStep number="01" title="Spark plug replacement"
              summary="Iridium and platinum plugs typically run 60 – 100k miles.">
              <GuideBullets>
                <GuideBullet>Use OE-spec plug — heat range and reach must match</GuideBullet>
                <GuideBullet>Apply anti-seize sparingly only on plugs that specify it</GuideBullet>
                <GuideBullet>Many modern plugs have a <K>plated shell</K> that does not need anti-seize</GuideBullet>
                <GuideBullet>Torque to spec — overtightening cracks insulators and pulls threads from aluminum heads</GuideBullet>
                <GuideBullet>Inspect coil-on-plug boots — replace any showing carbon tracking</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="02" title="Serpentine belt and tensioner"
              summary="Modern EPDM belts wear smooth before they crack — a belt that looks fine can still be failed.">
              <GuideBullets>
                <GuideBullet>Inspect for cracks, glazing, missing chunks every oil change</GuideBullet>
                <GuideBullet>Use a belt wear gauge for accurate condition assessment</GuideBullet>
                <GuideBullet>Replace tensioner with belt at high mileage — a failed tensioner destroys a new belt fast</GuideBullet>
                <GuideBullet>Photograph routing before removal, or check the underhood diagram</GuideBullet>
              </GuideBullets>
            </GuideStep>

            <GuideStep number="03" title="Document and reset"
              summary="A complete service record is part of the deliverable.">
              <GuideBullets>
                <GuideBullet>Reset service reminder indicators after each service</GuideBullet>
                <GuideBullet>Log mileage and date in vehicle service records</GuideBullet>
                <GuideBullet>Note recommended next-service items for the customer</GuideBullet>
              </GuideBullets>
            </GuideStep>
          </GuideCard>

        </div>
      </main>
      <Footer />
    </div>
  );
}
