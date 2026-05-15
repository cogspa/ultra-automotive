import React from "react";
import TopNav from "../components/site/TopNav";
import QuickGuideNav from "../components/site/QuickGuideNav";
import Footer from "../components/site/Footer";

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-black font-sans text-white overflow-x-hidden selection:bg-[#ff8a4a]/30 selection:text-white">
      <TopNav />
      <main className="pt-32 pb-24 px-5 md:px-10 lg:px-14 max-w-[1400px] mx-auto">
        <QuickGuideNav />
        <div className="mb-12">
          <span className="font-mono-cap text-white/50">Quick Guide</span>
          <h1 className="mt-4 font-display text-white" style={{ fontSize: "clamp(40px, 5vw, 76px)", lineHeight: 0.96, letterSpacing: "-0.03em" }}>
            General Maintenance <span className="italic-display" style={{ color: "#efe1d8" }}>Guide</span>
          </h1>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">

          <div className="rounded-3xl p-8 h-full break-inside-avoid mb-6 text-[#0a0a0a]" style={{ background: "var(--c-cream-2)", border: "1px solid rgba(10,10,10,0.07)" }}>
            <div className="mb-8">
              <h3 className="font-display text-[24px] mb-4 text-[#0a0a0a]">Maintenance Overview</h3>
              <p className="text-[14.5px] text-[#0a0a0a]/70 mb-4 leading-relaxed">
                Scheduled maintenance is the cheapest insurance against expensive repair. Most catastrophic engine, transmission, and cooling failures trace back to a deferred service that would have cost a fraction of the eventual repair.
              </p>
              <p className="text-[14.5px] text-[#0a0a0a]/70 mb-4 leading-relaxed">
                Every OEM publishes two maintenance schedules — "normal" and "severe duty." Most real-world driving (short trips, stop-and-go, towing, dusty roads, extreme heat or cold) falls under severe duty. Default to the severe-duty schedule unless the vehicle is truly a long-distance highway commuter.
              </p>
              <p className="text-[14.5px] text-[#0a0a0a]/70 mb-4 leading-relaxed">
                This guide covers the most common interval-based services: engine oil and filter, engine air filter, cabin air filter, brake fluid, coolant, spark plugs, and serpentine belt. Each task is small, fast, and high-value when done on time.
              </p>
            </div>
          </div>

          <div className="rounded-3xl p-8 h-full break-inside-avoid mb-6 text-[#0a0a0a]" style={{ background: "var(--c-blush)", border: "1px solid rgba(10,10,10,0.07)" }}>
            <div className="mb-8">
              <h3 className="font-display text-[24px] mb-4 text-[#0a0a0a]">Engine Oil & Filter</h3>
              <div className="space-y-4">
                <div className="mb-4 p-5 rounded-2xl" style={{ background: "rgba(10,10,10,0.04)", border: "1px solid rgba(10,10,10,0.06)" }}>
                  <div className="font-display text-[16px] text-[#0a0a0a] mb-2">Verify correct viscosity and spec</div>
                  <ul>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Read the oil fill cap and owner's manual — 0W-20, 5W-30, 0W-16 etc.</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Confirm API/ILSAC/ACEA certification or manufacturer spec (dexos1, MB 229.5, VW 502.00, etc.)</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Synthetic is required for most modern turbocharged and direct-injection engines</li>
                  </ul>
                </div>

                <div className="mb-4 p-5 rounded-2xl" style={{ background: "rgba(10,10,10,0.04)", border: "1px solid rgba(10,10,10,0.06)" }}>
                  <div className="font-display text-[16px] text-[#0a0a0a] mb-2">Service interval guidance</div>
                  <ul>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Conventional oil — typically 3–5k miles</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Synthetic oil — 5–10k miles, follow oil-life monitor where equipped</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Severe duty — cut OEM interval by 30–50%</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Direct-injection turbo engines benefit from shorter intervals (5k synthetic) due to fuel dilution</li>
                  </ul>
                </div>

                <div className="mb-4 p-5 rounded-2xl" style={{ background: "rgba(10,10,10,0.04)", border: "1px solid rgba(10,10,10,0.06)" }}>
                  <div className="font-display text-[16px] text-[#0a0a0a] mb-2">Service procedure</div>
                  <ul>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Warm engine briefly, drain pan plug with new crush washer / o-ring</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Use OEM-quality filter — cheap filters bypass under cold start</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Pre-lube filter gasket, hand-tighten 3/4 turn past contact</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Fill to correct capacity, run engine, recheck level cold next day</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Reset oil life monitor</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl p-8 h-full break-inside-avoid mb-6 text-[#0a0a0a]" style={{ background: "var(--c-cream-2)", border: "1px solid rgba(10,10,10,0.07)" }}>
            <div className="mb-8">
              <h3 className="font-display text-[24px] mb-4 text-[#0a0a0a]">Air & Cabin Filters</h3>
              <div className="space-y-4">
                <div className="mb-4 p-5 rounded-2xl" style={{ background: "rgba(10,10,10,0.04)", border: "1px solid rgba(10,10,10,0.06)" }}>
                  <div className="font-display text-[16px] text-[#0a0a0a] mb-2">Engine air filter</div>
                  <ul>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Inspect every oil change — replace every 15–30k miles or sooner in dusty environments</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Check airbox seals — air leaks past the filter wear the MAF sensor</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Do not tap or blow out filters with compressed air — damages the media</li>
                  </ul>
                </div>

                <div className="mb-4 p-5 rounded-2xl" style={{ background: "rgba(10,10,10,0.04)", border: "1px solid rgba(10,10,10,0.06)" }}>
                  <div className="font-display text-[16px] text-[#0a0a0a] mb-2">Cabin air filter</div>
                  <ul>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Typically behind glovebox or under dash — refer to service info for exact location</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Replace every 15–25k miles or annually — sooner if customer reports reduced airflow or odor</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Note airflow direction arrow on new filter</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Activated carbon filters add odor protection and are typically only slightly more expensive</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl p-8 h-full break-inside-avoid mb-6 text-[#0a0a0a]" style={{ background: "var(--c-blush)", border: "1px solid rgba(10,10,10,0.07)" }}>
            <div className="mb-8">
              <h3 className="font-display text-[24px] mb-4 text-[#0a0a0a]">Brake Fluid & Coolant</h3>
              <div className="space-y-4">
                <div className="mb-4 p-5 rounded-2xl" style={{ background: "rgba(10,10,10,0.04)", border: "1px solid rgba(10,10,10,0.06)" }}>
                  <div className="font-display text-[16px] text-[#0a0a0a] mb-2">Brake fluid service</div>
                  <ul>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Brake fluid is hygroscopic — absorbs water from air, lowering boiling point</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Test water content with a refractometer or electronic tester — flush at 3% or higher</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Recommended interval — every 2–3 years regardless of mileage</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Use only the OEM-specified fluid — DOT 3, DOT 4, DOT 5.1 (never DOT 5 silicone in conventional systems)</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Bleed in correct sequence — typically furthest from master cylinder first</li>
                  </ul>
                </div>

                <div className="mb-4 p-5 rounded-2xl" style={{ background: "rgba(10,10,10,0.04)", border: "1px solid rgba(10,10,10,0.06)" }}>
                  <div className="font-display text-[16px] text-[#0a0a0a] mb-2">Coolant service</div>
                  <ul>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Modern long-life coolants are color-coded but NOT interchangeable — verify OEM spec (OAT, HOAT, IAT, P-OAT)</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Service interval typically 5 years / 100k miles for long-life, 2 years for conventional green</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Test freeze point with refractometer — aim for −34°F protection</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Mix only with distilled water if not using pre-mixed</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Bleed cooling system per OEM procedure — air pockets cause overheating</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl p-8 h-full break-inside-avoid mb-6 text-[#0a0a0a]" style={{ background: "var(--c-cream-2)", border: "1px solid rgba(10,10,10,0.07)" }}>
            <div className="mb-8">
              <h3 className="font-display text-[24px] mb-4 text-[#0a0a0a]">Spark Plugs & Belt</h3>
              <div className="space-y-4">
                <div className="mb-4 p-5 rounded-2xl" style={{ background: "rgba(10,10,10,0.04)", border: "1px solid rgba(10,10,10,0.06)" }}>
                  <div className="font-display text-[16px] text-[#0a0a0a] mb-2">Spark plug replacement</div>
                  <ul>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Iridium and platinum plugs — replace every 60–100k miles</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Use OEM-spec plug — heat range and reach matter</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Apply anti-seize sparingly only on plugs that specify it — many modern plugs have a plated shell that does not need it</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Torque to spec — overtightening cracks insulators and pulls threads from aluminum heads</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Inspect coil-on-plug boots and dielectric — replace boots showing carbon tracking</li>
                  </ul>
                </div>

                <div className="mb-4 p-5 rounded-2xl" style={{ background: "rgba(10,10,10,0.04)", border: "1px solid rgba(10,10,10,0.06)" }}>
                  <div className="font-display text-[16px] text-[#0a0a0a] mb-2">Serpentine belt and tensioner</div>
                  <ul>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Inspect for cracks, glazing, missing chunks every oil change</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Use a belt wear gauge — modern EPDM belts wear smooth before they crack</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Replace tensioner with belt at high mileage — failed tensioners destroy new belts quickly</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Photograph routing before removal, or check the underhood diagram</li>
                  </ul>
                </div>

                <div className="mb-4 p-5 rounded-2xl" style={{ background: "rgba(10,10,10,0.04)", border: "1px solid rgba(10,10,10,0.06)" }}>
                  <div className="font-display text-[16px] text-[#0a0a0a] mb-2">Document and reset</div>
                  <ul>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Reset service reminder indicators after each service</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Log mileage and date in vehicle service records</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Note recommended next-service items for the customer</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
