import React from "react";
import TopNav from "../components/site/TopNav";
import QuickGuideNav from "../components/site/QuickGuideNav";
import Footer from "../components/site/Footer";

export default function BatteriesPage() {
  return (
    <div className="min-h-screen bg-black font-sans text-white overflow-x-hidden selection:bg-[#ff8a4a]/30 selection:text-white">
      <TopNav />
      <main className="pt-32 pb-24 px-5 md:px-10 lg:px-14 max-w-[1400px] mx-auto">
        <QuickGuideNav />
        <div className="mb-12">
          <span className="font-mono-cap text-white/50">Quick Guide</span>
          <h1 className="mt-4 font-display text-white" style={{ fontSize: "clamp(40px, 5vw, 76px)", lineHeight: 0.96, letterSpacing: "-0.03em" }}>
            Batteries <span className="italic-display" style={{ color: "#efe1d8" }}>Guide</span>
          </h1>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">

          <div className="rounded-3xl p-8 h-full break-inside-avoid mb-6 text-[#0a0a0a]" style={{ background: "var(--c-cream-2)", border: "1px solid rgba(10,10,10,0.07)" }}>
            <div className="mb-8">
              <h3 className="font-display text-[24px] mb-4 text-[#0a0a0a]">Battery Service Overview</h3>
              <p className="text-[14.5px] text-[#0a0a0a]/70 mb-4 leading-relaxed">
                The battery is the foundation of the entire electrical system. It provides the cranking amps to start the engine, stabilizes voltage for sensitive electronics, and acts as a buffer when electrical loads exceed alternator output.
              </p>
              <p className="text-[14.5px] text-[#0a0a0a]/70 mb-4 leading-relaxed">
                Modern vehicles use one of three battery chemistries: flooded lead-acid (legacy), AGM (absorbed glass mat — most modern vehicles, all start-stop systems), and lithium-ion (high-end performance, EVs). Installing the wrong chemistry, or failing to register a new battery with the BCM, can cause repeated premature failures and false charging system codes.
              </p>
              <p className="text-[14.5px] text-[#0a0a0a]/70 mb-4 leading-relaxed">
                Following these best practices ensures correct chemistry, proper registration, and reliable long-term performance.
              </p>
            </div>
          </div>

          <div className="rounded-3xl p-8 h-full break-inside-avoid mb-6 text-[#0a0a0a]" style={{ background: "var(--c-blush)", border: "1px solid rgba(10,10,10,0.07)" }}>
            <div className="mb-8">
              <h3 className="font-display text-[24px] mb-4 text-[#0a0a0a]">Vehicle Preparation</h3>
              <div className="space-y-4">
                <div className="mb-4 p-5 rounded-2xl" style={{ background: "rgba(10,10,10,0.04)", border: "1px solid rgba(10,10,10,0.06)" }}>
                  <div className="font-display text-[16px] text-[#0a0a0a] mb-2">Identify battery chemistry and group size</div>
                  <ul>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Read the OE label — confirm flooded, AGM, or EFB</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Verify BCI group size, CCA rating, and reserve capacity</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Vehicles equipped with start-stop or regenerative braking REQUIRE AGM — never substitute flooded</li>
                  </ul>
                </div>

                <div className="mb-4 p-5 rounded-2xl" style={{ background: "rgba(10,10,10,0.04)", border: "1px solid rgba(10,10,10,0.06)" }}>
                  <div className="font-display text-[16px] text-[#0a0a0a] mb-2">Gather safety equipment and tools</div>
                  <ul>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Safety glasses, nitrile gloves, baking soda solution for spills</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Memory saver to preserve module learn data and radio presets</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Battery terminal cleaner, dielectric grease, anti-corrosion washers</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Scan tool capable of battery registration / BMS reset</li>
                  </ul>
                </div>

                <div className="mb-4 p-5 rounded-2xl" style={{ background: "rgba(10,10,10,0.04)", border: "1px solid rgba(10,10,10,0.06)" }}>
                  <div className="font-display text-[16px] text-[#0a0a0a] mb-2">Document vehicle electrical baseline before disconnect</div>
                  <ul>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Note radio security codes if equipped</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Capture any active DTCs before power loss</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Confirm power windows, sunroof, and seat memory positions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl p-8 h-full break-inside-avoid mb-6 text-[#0a0a0a]" style={{ background: "var(--c-cream-2)", border: "1px solid rgba(10,10,10,0.07)" }}>
            <div className="mb-8">
              <h3 className="font-display text-[24px] mb-4 text-[#0a0a0a]">Battery Diagnosis</h3>
              <div className="space-y-4">
                <div className="mb-4 p-5 rounded-2xl" style={{ background: "rgba(10,10,10,0.04)", border: "1px solid rgba(10,10,10,0.06)" }}>
                  <div className="font-display text-[16px] text-[#0a0a0a] mb-2">Measure resting (open-circuit) voltage</div>
                  <ul>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Vehicle off for a minimum of 1 hour for accurate reading</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">12.65V or higher — 100% state of charge</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">12.45V — approx. 75% (charge before testing)</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Below 12.00V — deeply discharged, suspect parasitic draw or internal failure</li>
                  </ul>
                </div>

                <div className="mb-4 p-5 rounded-2xl" style={{ background: "rgba(10,10,10,0.04)", border: "1px solid rgba(10,10,10,0.06)" }}>
                  <div className="font-display text-[16px] text-[#0a0a0a] mb-2">Conductance test (preferred) or carbon-pile load test</div>
                  <ul>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Compare measured CCA to rated CCA on battery label</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Below 80% of rated CCA — battery is end-of-life</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Print and retain test report for warranty</li>
                  </ul>
                </div>

                <div className="mb-4 p-5 rounded-2xl" style={{ background: "rgba(10,10,10,0.04)", border: "1px solid rgba(10,10,10,0.06)" }}>
                  <div className="font-display text-[16px] text-[#0a0a0a] mb-2">Parasitic draw test if battery drains overnight</div>
                  <ul>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Allow modules to sleep (20–45 min depending on platform)</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Inline DC clamp on negative cable — target under 50 mA after sleep</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Pull fuses one at a time to isolate offending circuit</li>
                  </ul>
                </div>

                <div className="mb-4 p-5 rounded-2xl" style={{ background: "rgba(10,10,10,0.04)", border: "1px solid rgba(10,10,10,0.06)" }}>
                  <div className="font-display text-[16px] text-[#0a0a0a] mb-2">Inspect physical condition</div>
                  <ul>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Bulged case — internal failure, replace immediately</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Heavy terminal corrosion — clean and load test</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Check date code — most batteries have a 4-5 year service life</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl p-8 h-full break-inside-avoid mb-6 text-[#0a0a0a]" style={{ background: "var(--c-blush)", border: "1px solid rgba(10,10,10,0.07)" }}>
            <div className="mb-8">
              <h3 className="font-display text-[24px] mb-4 text-[#0a0a0a]">Battery Replacement</h3>
              <div className="space-y-4">
                <div className="mb-4 p-5 rounded-2xl" style={{ background: "rgba(10,10,10,0.04)", border: "1px solid rgba(10,10,10,0.06)" }}>
                  <div className="font-display text-[16px] text-[#0a0a0a] mb-2">Connect memory saver if available</div>
                  <ul>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Preserves module learn data, radio codes, seat/mirror memory</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Use OBD-II port saver or jumper cables to a known-good donor battery</li>
                  </ul>
                </div>

                <div className="mb-4 p-5 rounded-2xl" style={{ background: "rgba(10,10,10,0.04)", border: "1px solid rgba(10,10,10,0.06)" }}>
                  <div className="font-display text-[16px] text-[#0a0a0a] mb-2">Disconnect cables in correct order</div>
                  <ul>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Negative (−) first — prevents short to chassis with wrench</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Positive (+) second</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Remove hold-down bracket and lift battery out using carry strap</li>
                  </ul>
                </div>

                <div className="mb-4 p-5 rounded-2xl" style={{ background: "rgba(10,10,10,0.04)", border: "1px solid rgba(10,10,10,0.06)" }}>
                  <div className="font-display text-[16px] text-[#0a0a0a] mb-2">Clean tray and terminals</div>
                  <ul>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Neutralize corrosion with baking soda solution, rinse and dry</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Wire-brush cable terminals to bright metal</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Inspect cable insulation for damage — replace if cracked or corroded internally</li>
                  </ul>
                </div>

                <div className="mb-4 p-5 rounded-2xl" style={{ background: "rgba(10,10,10,0.04)", border: "1px solid rgba(10,10,10,0.06)" }}>
                  <div className="font-display text-[16px] text-[#0a0a0a] mb-2">Install new battery and connect in reverse order</div>
                  <ul>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Confirm correct polarity orientation before placing in tray</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Reinstall hold-down — loose batteries crack from vibration</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Connect positive (+) first, then negative (−) — torque to manufacturer spec</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Apply anti-corrosion spray or dielectric grease on terminals</li>
                  </ul>
                </div>

                <div className="mb-4 p-5 rounded-2xl" style={{ background: "rgba(10,10,10,0.04)", border: "1px solid rgba(10,10,10,0.06)" }}>
                  <div className="font-display text-[16px] text-[#0a0a0a] mb-2">Register the new battery (critical on BMW, Audi/VW, Mercedes, Volvo, late-model GM/Ford)</div>
                  <ul>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Use scan tool to enter new battery's chemistry, group size, and CCA</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Failure to register causes the BMS to undercharge, leading to repeat premature failure</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Reset charging system adaptation values where applicable</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl p-8 h-full break-inside-avoid mb-6 text-[#0a0a0a]" style={{ background: "var(--c-cream-2)", border: "1px solid rgba(10,10,10,0.07)" }}>
            <div className="mb-8">
              <h3 className="font-display text-[24px] mb-4 text-[#0a0a0a]">Verification</h3>
              <div className="space-y-4">
                <div className="mb-4 p-5 rounded-2xl" style={{ background: "rgba(10,10,10,0.04)", border: "1px solid rgba(10,10,10,0.06)" }}>
                  <div className="font-display text-[16px] text-[#0a0a0a] mb-2">Verify charging system output</div>
                  <ul>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">13.5V–14.7V at idle, accessories off</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Voltage should hold under load (headlights, blower, rear defrost on)</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">No undercharging codes (P0562, P0620 family)</li>
                  </ul>
                </div>

                <div className="mb-4 p-5 rounded-2xl" style={{ background: "rgba(10,10,10,0.04)", border: "1px solid rgba(10,10,10,0.06)" }}>
                  <div className="font-display text-[16px] text-[#0a0a0a] mb-2">Clear and verify DTCs</div>
                  <ul>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Clear any codes set during disconnect</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Verify no battery-related or BMS codes return after a drive cycle</li>
                  </ul>
                </div>

                <div className="mb-4 p-5 rounded-2xl" style={{ background: "rgba(10,10,10,0.04)", border: "1px solid rgba(10,10,10,0.06)" }}>
                  <div className="font-display text-[16px] text-[#0a0a0a] mb-2">Reinitialize affected systems</div>
                  <ul>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Power window auto-up/down learn procedure</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Sunroof and power liftgate initialization</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Steering angle sensor calibration if equipped</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Re-enter radio security codes and reset clock</li>
                  </ul>
                </div>

                <div className="mb-4 p-5 rounded-2xl" style={{ background: "rgba(10,10,10,0.04)", border: "1px solid rgba(10,10,10,0.06)" }}>
                  <div className="font-display text-[16px] text-[#0a0a0a] mb-2">Road test</div>
                  <ul>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Confirm normal cranking, no warning lights, normal accessory function</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Verify start-stop function (if equipped) re-enables after one full drive cycle</li>
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
