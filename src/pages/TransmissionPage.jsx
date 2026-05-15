import React from "react";
import TopNav from "../components/site/TopNav";
import QuickGuideNav from "../components/site/QuickGuideNav";
import Footer from "../components/site/Footer";

export default function TransmissionPage() {
  return (
    <div className="min-h-screen bg-black font-sans text-white overflow-x-hidden selection:bg-[#ff8a4a]/30 selection:text-white">
      <TopNav />
      <main className="pt-32 pb-24 px-5 md:px-10 lg:px-14 max-w-[1400px] mx-auto">
        <QuickGuideNav />
        <div className="mb-12">
          <span className="font-mono-cap text-white/50">Quick Guide</span>
          <h1 className="mt-4 font-display text-white" style={{ fontSize: "clamp(40px, 5vw, 76px)", lineHeight: 0.96, letterSpacing: "-0.03em" }}>
            Transmission <span className="italic-display" style={{ color: "#efe1d8" }}>Guide</span>
          </h1>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">

          <div className="rounded-3xl p-8 h-full break-inside-avoid mb-6 text-[#0a0a0a]" style={{ background: "var(--c-cream-2)", border: "1px solid rgba(10,10,10,0.07)" }}>
            <div className="mb-8">
              <h3 className="font-display text-[24px] mb-4 text-[#0a0a0a]">Transmission Service Overview</h3>
              <p className="text-[14.5px] text-[#0a0a0a]/70 mb-4 leading-relaxed">
                The transmission is the most expensive component on most vehicles after the engine itself. Regular fluid service is the single most effective preventive maintenance you can perform — fluid breakdown is the leading cause of premature transmission failure.
              </p>
              <p className="text-[14.5px] text-[#0a0a0a]/70 mb-4 leading-relaxed">
                Modern vehicles use one of four common transmission types: traditional automatic (planetary gearsets, torque converter), CVT (continuously variable), DCT (dual-clutch), and conventional manual. Each requires a specific fluid — using the wrong type can destroy the transmission within a few hundred miles.
              </p>
              <p className="text-[14.5px] text-[#0a0a0a]/70 mb-4 leading-relaxed">
                This guide covers diagnosis, fluid service, and verification across the common transmission types. Internal repairs are beyond the scope of routine service and should be referred to a transmission specialist.
              </p>
              <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 text-sm">
                <p className="text-[14.5px] text-[#0a0a0a]/70 mb-4 leading-relaxed">Important:</p>
                <p className="text-[14.5px] text-[#0a0a0a]/70 mb-4 leading-relaxed">CVT and DCT fluids are NOT interchangeable with conventional ATF. Always verify the exact OEM fluid specification before service. "Universal" multi-vehicle ATF is acceptable only when the OEM-required spec is explicitly listed on the bottle.</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl p-8 h-full break-inside-avoid mb-6 text-[#0a0a0a]" style={{ background: "var(--c-blush)", border: "1px solid rgba(10,10,10,0.07)" }}>
            <div className="mb-8">
              <h3 className="font-display text-[24px] mb-4 text-[#0a0a0a]">Vehicle Preparation</h3>
              <div className="space-y-4">
                <div className="mb-4 p-5 rounded-2xl" style={{ background: "rgba(10,10,10,0.04)", border: "1px solid rgba(10,10,10,0.06)" }}>
                  <div className="font-display text-[16px] text-[#0a0a0a] mb-2">Identify transmission type and fluid spec</div>
                  <ul>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Decode VIN to confirm exact transmission model</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Cross-reference OEM fluid spec: ATF+4, Mercon LV, Dexron VI, Nissan NS-2/NS-3, Honda DW-1, Toyota WS, etc.</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Check for any TSBs related to fluid spec changes</li>
                  </ul>
                </div>

                <div className="mb-4 p-5 rounded-2xl" style={{ background: "rgba(10,10,10,0.04)", border: "1px solid rgba(10,10,10,0.06)" }}>
                  <div className="font-display text-[16px] text-[#0a0a0a] mb-2">Confirm service interval</div>
                  <ul>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Severe duty (towing, hot climate, stop-and-go) — service every 30–50k miles</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Normal duty — typically 60–100k miles</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">"Lifetime fill" claims are widely disputed — most fluids degrade meaningfully by 100k</li>
                  </ul>
                </div>

                <div className="mb-4 p-5 rounded-2xl" style={{ background: "rgba(10,10,10,0.04)", border: "1px solid rgba(10,10,10,0.06)" }}>
                  <div className="font-display text-[16px] text-[#0a0a0a] mb-2">Gather correct parts and tools</div>
                  <ul>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Sufficient quantity of OEM-spec fluid (drain/fill is 30–50% of total capacity)</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">New pan gasket and internal filter (for pan-drop service)</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Fluid level check fitting where applicable (most modern units have no dipstick)</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Scan tool capable of reading transmission fluid temperature</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl p-8 h-full break-inside-avoid mb-6 text-[#0a0a0a]" style={{ background: "var(--c-cream-2)", border: "1px solid rgba(10,10,10,0.07)" }}>
            <div className="mb-8">
              <h3 className="font-display text-[24px] mb-4 text-[#0a0a0a]">Transmission Diagnosis</h3>
              <div className="space-y-4">
                <div className="mb-4 p-5 rounded-2xl" style={{ background: "rgba(10,10,10,0.04)", border: "1px solid rgba(10,10,10,0.06)" }}>
                  <div className="font-display text-[16px] text-[#0a0a0a] mb-2">Scan all modules for DTCs</div>
                  <ul>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">P0700 — TCM requesting MIL, retrieve TCM-specific codes next</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">P0730–P0736 — gear ratio / incorrect gear ratio (slipping, solenoid fault)</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">P0740–P0744 — torque converter clutch faults</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">P0750–P0780 — shift solenoid faults</li>
                  </ul>
                </div>

                <div className="mb-4 p-5 rounded-2xl" style={{ background: "rgba(10,10,10,0.04)", border: "1px solid rgba(10,10,10,0.06)" }}>
                  <div className="font-display text-[16px] text-[#0a0a0a] mb-2">Inspect fluid condition</div>
                  <ul>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Healthy ATF — translucent red, no burn smell</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Dark brown / burnt smell — overheated, clutch material breakdown</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Milky / pink — coolant contamination from failed radiator cooler, internal damage likely</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Metallic particles on magnet — internal mechanical wear</li>
                  </ul>
                </div>

                <div className="mb-4 p-5 rounded-2xl" style={{ background: "rgba(10,10,10,0.04)", border: "1px solid rgba(10,10,10,0.06)" }}>
                  <div className="font-display text-[16px] text-[#0a0a0a] mb-2">Verify symptom under driving conditions</div>
                  <ul>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Delayed engagement (D or R) — low fluid, pump or seal wear</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Slipping (RPM flares between shifts) — worn clutches, low line pressure</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Harsh shifts — adaptive learn corrupted (try TCM relearn) or solenoid fault</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">No shift / stuck in gear — TCM fault, sensor fault, or limp mode</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Shudder at light cruise — torque converter clutch (TCC) shudder, fluid change often resolves</li>
                  </ul>
                </div>

                <div className="mb-4 p-5 rounded-2xl" style={{ background: "rgba(10,10,10,0.04)", border: "1px solid rgba(10,10,10,0.06)" }}>
                  <div className="font-display text-[16px] text-[#0a0a0a] mb-2">Check supporting systems</div>
                  <ul>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Engine misfire and excess load can mimic transmission slip</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Inspect cooler lines and external cooler for leaks or blockage</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Verify transmission mounts are intact — broken mounts cause perceived harsh shifts</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl p-8 h-full break-inside-avoid mb-6 text-[#0a0a0a]" style={{ background: "var(--c-blush)", border: "1px solid rgba(10,10,10,0.07)" }}>
            <div className="mb-8">
              <h3 className="font-display text-[24px] mb-4 text-[#0a0a0a]">Fluid Service</h3>
              <div className="space-y-4">
                <div className="mb-4 p-5 rounded-2xl" style={{ background: "rgba(10,10,10,0.04)", border: "1px solid rgba(10,10,10,0.06)" }}>
                  <div className="font-display text-[16px] text-[#0a0a0a] mb-2">Drain and pan-drop service</div>
                  <ul>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Bring transmission to operating temp before draining</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Drop pan, inspect for debris on magnet (some fine clutch material is normal)</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Replace internal filter and pan gasket — clean pan thoroughly</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Torque pan bolts to spec in cross pattern — usually 8–10 ft-lbs, no more</li>
                  </ul>
                </div>

                <div className="mb-4 p-5 rounded-2xl" style={{ background: "rgba(10,10,10,0.04)", border: "1px solid rgba(10,10,10,0.06)" }}>
                  <div className="font-display text-[16px] text-[#0a0a0a] mb-2">Fluid exchange (flush) for higher-mileage service</div>
                  <ul>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Cooler-line exchange replaces 90%+ of fluid vs 30–50% for drain-only</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Do NOT flush a transmission with significant clutch material in the pan — debris can plug valve body passages</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Never use back-flush procedures — fluid must flow in factory direction</li>
                  </ul>
                </div>

                <div className="mb-4 p-5 rounded-2xl" style={{ background: "rgba(10,10,10,0.04)", border: "1px solid rgba(10,10,10,0.06)" }}>
                  <div className="font-display text-[16px] text-[#0a0a0a] mb-2">Fill to correct level using OEM procedure</div>
                  <ul>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Most modern units have a fill plug and overflow standpipe</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Fluid level is checked at a specific temperature window (typically 95–115°F) per OEM</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Use scan tool to monitor live fluid temperature during fill</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Overfilling causes foaming and is as harmful as underfilling</li>
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
                  <div className="font-display text-[16px] text-[#0a0a0a] mb-2">Reset adaptive shift learn</div>
                  <ul>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Scan tool: reset TCM adaptive values after fluid service</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Drive the vehicle through full RPM range and all gears for 20–30 minutes to relearn</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Initial shifts after a reset may feel harsh — this normalizes during relearn</li>
                  </ul>
                </div>

                <div className="mb-4 p-5 rounded-2xl" style={{ background: "rgba(10,10,10,0.04)", border: "1px solid rgba(10,10,10,0.06)" }}>
                  <div className="font-display text-[16px] text-[#0a0a0a] mb-2">Check for leaks</div>
                  <ul>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Inspect pan gasket, fill plug, cooler line fittings after road test</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Re-verify fluid level at temperature after the drive cycle</li>
                  </ul>
                </div>

                <div className="mb-4 p-5 rounded-2xl" style={{ background: "rgba(10,10,10,0.04)", border: "1px solid rgba(10,10,10,0.06)" }}>
                  <div className="font-display text-[16px] text-[#0a0a0a] mb-2">Road test across all gears</div>
                  <ul>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Verify smooth engagement in D and R from a stop</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Confirm shifts through all forward gears under light, medium, and heavy throttle</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Confirm TCC lockup at steady cruise (TCM data PID or RPM drop at 40–55 mph)</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Verify no DTCs return after a full drive cycle</li>
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
