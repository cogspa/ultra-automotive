import React from "react";
import TopNav from "../components/site/TopNav";
import QuickGuideNav from "../components/site/QuickGuideNav";
import Footer from "../components/site/Footer";

export default function TiresPage() {
  return (
    <div className="min-h-screen bg-black font-sans text-white overflow-x-hidden selection:bg-[#ff8a4a]/30 selection:text-white">
      <TopNav />
      <main className="pt-32 pb-24 px-5 md:px-10 lg:px-14 max-w-[1400px] mx-auto">
        <QuickGuideNav />
        <div className="mb-12">
          <span className="font-mono-cap text-white/50">Quick Guide</span>
          <h1 className="mt-4 font-display text-white" style={{ fontSize: "clamp(40px, 5vw, 76px)", lineHeight: 0.96, letterSpacing: "-0.03em" }}>
            Tires <span className="italic-display" style={{ color: "#efe1d8" }}>Guide</span>
          </h1>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">

          <div className="rounded-3xl p-8 h-full break-inside-avoid mb-6 text-[#0a0a0a]" style={{ background: "var(--c-cream-2)", border: "1px solid rgba(10,10,10,0.07)" }}>
            <div className="mb-8">
              <h3 className="font-display text-[24px] mb-4 text-[#0a0a0a]">Tire Service Overview</h3>
              <p className="text-[14.5px] text-[#0a0a0a]/70 mb-4 leading-relaxed">
                Tires are the only contact patch between the vehicle and the road — every input from steering, braking, and acceleration passes through them. Proper sizing, pressure, rotation, and replacement are essential for handling, fuel economy, and stopping distance.
              </p>
              <p className="text-[14.5px] text-[#0a0a0a]/70 mb-4 leading-relaxed">
                Modern tire specs include a load index, speed rating, DOT date code (last 4 digits = WWYY), and a UTQG treadwear/traction/temperature grade. Replacement tires must meet or exceed the OE load index and speed rating — substituting lower-rated tires can void insurance and create unsafe handling at speed.
              </p>
              <p className="text-[14.5px] text-[#0a0a0a]/70 mb-4 leading-relaxed">
                This guide covers inspection, rotation, replacement, and TPMS service so each job is completed correctly the first time.
              </p>
            </div>
          </div>

          <div className="rounded-3xl p-8 h-full break-inside-avoid mb-6 text-[#0a0a0a]" style={{ background: "var(--c-blush)", border: "1px solid rgba(10,10,10,0.07)" }}>
            <div className="mb-8">
              <h3 className="font-display text-[24px] mb-4 text-[#0a0a0a]">Vehicle Preparation</h3>
              <div className="space-y-4">
                <div className="mb-4 p-5 rounded-2xl" style={{ background: "rgba(10,10,10,0.04)", border: "1px solid rgba(10,10,10,0.06)" }}>
                  <div className="font-display text-[16px] text-[#0a0a0a] mb-2">Verify OE tire specification</div>
                  <ul>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Read the driver-door jamb placard for OE size, load index, and inflation pressure</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Confirm speed rating meets or exceeds the original</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">For AWD vehicles, all four tires must match in size, brand, and tread depth within 2/32"</li>
                  </ul>
                </div>

                <div className="mb-4 p-5 rounded-2xl" style={{ background: "rgba(10,10,10,0.04)", border: "1px solid rgba(10,10,10,0.06)" }}>
                  <div className="font-display text-[16px] text-[#0a0a0a] mb-2">Scan TPMS system before service</div>
                  <ul>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Document existing sensor IDs and battery health</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Sensors over 7 years old are due for replacement during dismount</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Replace rubber valve stems and metal-stem service kits with every new tire</li>
                  </ul>
                </div>

                <div className="mb-4 p-5 rounded-2xl" style={{ background: "rgba(10,10,10,0.04)", border: "1px solid rgba(10,10,10,0.06)" }}>
                  <div className="font-display text-[16px] text-[#0a0a0a] mb-2">Inspect suspension and alignment</div>
                  <ul>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Check ball joints, tie rods, control arm bushings for play</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Recommend alignment with new tire installation — uneven wear destroys new tires fast</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Verify shocks and struts are not leaking or worn</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl p-8 h-full break-inside-avoid mb-6 text-[#0a0a0a]" style={{ background: "var(--c-cream-2)", border: "1px solid rgba(10,10,10,0.07)" }}>
            <div className="mb-8">
              <h3 className="font-display text-[24px] mb-4 text-[#0a0a0a]">Inspection & Diagnosis</h3>
              <div className="space-y-4">
                <div className="mb-4 p-5 rounded-2xl" style={{ background: "rgba(10,10,10,0.04)", border: "1px solid rgba(10,10,10,0.06)" }}>
                  <div className="font-display text-[16px] text-[#0a0a0a] mb-2">Measure tread depth with a gauge</div>
                  <ul>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">2/32" — legal minimum, replace immediately</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">4/32" — recommended replacement threshold for wet braking performance</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Measure across all three grooves on each tire</li>
                  </ul>
                </div>

                <div className="mb-4 p-5 rounded-2xl" style={{ background: "rgba(10,10,10,0.04)", border: "1px solid rgba(10,10,10,0.06)" }}>
                  <div className="font-display text-[16px] text-[#0a0a0a] mb-2">Identify wear patterns</div>
                  <ul>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Center wear — chronic overinflation</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Edge wear (both shoulders) — chronic underinflation</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">One-side wear — camber out of spec</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Feathering or sawtooth — toe out of spec</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Cupping/scalloping — worn shocks or unbalanced wheels</li>
                  </ul>
                </div>

                <div className="mb-4 p-5 rounded-2xl" style={{ background: "rgba(10,10,10,0.04)", border: "1px solid rgba(10,10,10,0.06)" }}>
                  <div className="font-display text-[16px] text-[#0a0a0a] mb-2">Check tire age and condition</div>
                  <ul>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">DOT date code on sidewall — replace tires over 6 years old regardless of tread</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Inspect for sidewall cracks, bulges, embedded objects, plug repairs</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">A sidewall bulge indicates internal belt separation — replace immediately</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl p-8 h-full break-inside-avoid mb-6 text-[#0a0a0a]" style={{ background: "var(--c-blush)", border: "1px solid rgba(10,10,10,0.07)" }}>
            <div className="mb-8">
              <h3 className="font-display text-[24px] mb-4 text-[#0a0a0a]">Rotation & Replacement</h3>
              <div className="space-y-4">
                <div className="mb-4 p-5 rounded-2xl" style={{ background: "rgba(10,10,10,0.04)", border: "1px solid rgba(10,10,10,0.06)" }}>
                  <div className="font-display text-[16px] text-[#0a0a0a] mb-2">Use correct rotation pattern</div>
                  <ul>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">FWD — forward cross (rears cross to front, fronts straight back)</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">RWD/AWD — rearward cross (fronts cross to rear, rears straight forward)</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Directional tires — front-to-back on same side only</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Asymmetric or staggered fitment — refer to placard, may not be rotatable</li>
                  </ul>
                </div>

                <div className="mb-4 p-5 rounded-2xl" style={{ background: "rgba(10,10,10,0.04)", border: "1px solid rgba(10,10,10,0.06)" }}>
                  <div className="font-display text-[16px] text-[#0a0a0a] mb-2">Dismount and replace correctly</div>
                  <ul>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Mark valve stem position for re-balance reference</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Apply bead lubricant — never soap that contains chloride</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Replace TPMS service kit (seal, grommet, valve core, nut)</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Inspect wheel bead seat for corrosion — wire brush and treat as needed</li>
                  </ul>
                </div>

                <div className="mb-4 p-5 rounded-2xl" style={{ background: "rgba(10,10,10,0.04)", border: "1px solid rgba(10,10,10,0.06)" }}>
                  <div className="font-display text-[16px] text-[#0a0a0a] mb-2">Inflate and seat beads safely</div>
                  <ul>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Never exceed 40 PSI for bead seating without a safety cage</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Verify both beads seat fully and evenly against the rim</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Final pressure to door placard spec — measured cold</li>
                  </ul>
                </div>

                <div className="mb-4 p-5 rounded-2xl" style={{ background: "rgba(10,10,10,0.04)", border: "1px solid rgba(10,10,10,0.06)" }}>
                  <div className="font-display text-[16px] text-[#0a0a0a] mb-2">Balance and mount</div>
                  <ul>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Road force balance preferred for vehicles with prior vibration complaints</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Torque lug nuts in a star pattern to manufacturer spec</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Re-torque after 50–100 miles — especially with alloy wheels</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl p-8 h-full break-inside-avoid mb-6 text-[#0a0a0a]" style={{ background: "var(--c-cream-2)", border: "1px solid rgba(10,10,10,0.07)" }}>
            <div className="mb-8">
              <h3 className="font-display text-[24px] mb-4 text-[#0a0a0a]">TPMS & Verification</h3>
              <div className="space-y-4">
                <div className="mb-4 p-5 rounded-2xl" style={{ background: "rgba(10,10,10,0.04)", border: "1px solid rgba(10,10,10,0.06)" }}>
                  <div className="font-display text-[16px] text-[#0a0a0a] mb-2">Perform TPMS relearn</div>
                  <ul>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Auto-learn — drive 10–20 min above 20 mph (most GM, Ford)</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Stationary relearn — scan tool or magnet/deflation sequence (Toyota, Nissan, Honda)</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">OBD relearn — scan tool writes new sensor IDs to module</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Verify all four sensor IDs are registered correctly</li>
                  </ul>
                </div>

                <div className="mb-4 p-5 rounded-2xl" style={{ background: "rgba(10,10,10,0.04)", border: "1px solid rgba(10,10,10,0.06)" }}>
                  <div className="font-display text-[16px] text-[#0a0a0a] mb-2">Set final pressure cold</div>
                  <ul>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Pressure rises 1 PSI per 10°F as tires heat up</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Match door placard, not sidewall maximum</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Set spare tire pressure if equipped</li>
                  </ul>
                </div>

                <div className="mb-4 p-5 rounded-2xl" style={{ background: "rgba(10,10,10,0.04)", border: "1px solid rgba(10,10,10,0.06)" }}>
                  <div className="font-display text-[16px] text-[#0a0a0a] mb-2">Road test</div>
                  <ul>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Verify no pull, no vibration through steering wheel or seat</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Confirm TPMS warning light extinguishes after relearn drive</li>
                    <li className="text-[14px] text-[#0a0a0a]/65 ml-4 list-disc mb-1">Recommend alignment if uneven wear was present or vehicle pulls</li>
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
