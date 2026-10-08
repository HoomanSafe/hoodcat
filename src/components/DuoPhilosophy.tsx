import React from 'react';
import { StealthImage } from './StealthImage';
import { Brain, Sparkles, Zap, Shield, ArrowUpRight, Cpu } from 'lucide-react';
import { PumpFunIcon, SolanaIcon } from './PumpFunIcon';

export const DuoPhilosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 bg-[#090C11] border-t border-[#141C1A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#14F195] font-bold block mb-2">
            // OPERATIONAL DYNAMICS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-white uppercase tracking-tight">
            The Mind & The Mayhem
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#8FA49D]">
            Why does HoodCAT work? Because pure AI with no memes is boring math, and pure memes with no AI is just noise.
          </p>
        </div>

        {/* Dynamic Split Comparison Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          
          {/* Hood's Strategic Pillar */}
          <div className="p-8 rounded-2xl bg-[#0C1118] border border-[#1A2A26] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#9945FF]/10 rounded-bl-full pointer-events-none" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#101824] border border-[#14F195]/30 flex items-center justify-center text-[#14F195]">
                <Brain className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-[#14F195] uppercase tracking-wider block">THE ALGORITHM</span>
                <h3 className="text-xl font-display font-bold text-white">Hood: Sovereign Strategy</h3>
              </div>
            </div>

            <div className="space-y-4 text-sm text-[#93A7A0] leading-relaxed">
              <p>
                Hood oversees the architecture. He builds models designed specifically to thrive inside the high-frequency execution speeds of <strong className="text-white">Solana</strong>.
              </p>
              <div className="p-4 rounded-xl bg-[#080B10] border border-[#15231F] font-mono text-xs space-y-2">
                <div className="text-[#14F195] font-semibold">PLAN_DIRECTIVE_ALPHA:</div>
                <div className="text-[#B9CCC5]">1. Monitor pump.fun bonding curve velocity</div>
                <div className="text-[#B9CCC5]">2. Retain zero telemetry footprint on Solana ledger</div>
                <div className="text-[#B9CCC5]">3. Guarantee seamless Raydium pool migration</div>
              </div>
            </div>
          </div>

          {/* HoodCat's Chaos Pillar */}
          <div className="p-8 rounded-2xl bg-[#0C1118] border border-[#2A261A] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#14F195]/10 rounded-bl-full pointer-events-none" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#191811] border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158]">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-[#E5C158] uppercase tracking-wider block">THE CATALYST</span>
                <h3 className="text-xl font-display font-bold text-white">HoodCat: Sovereign Chaos</h3>
              </div>
            </div>

            <div className="space-y-4 text-sm text-[#93A7A0] leading-relaxed">
              <p>
                HoodCat ignores spreadsheets and runs directly on instinct. He aped the pump.fun bonding curve before Hood finished the tokenomic diagram, sparking instant viral wildfire.
              </p>
              <div className="p-4 rounded-xl bg-[#080B10] border border-[#232115] font-mono text-xs space-y-2">
                <div className="text-[#E5C158] font-semibold">CAT_DIRECTIVE_OMEGA:</div>
                <div className="text-[#CCC6BC]">1. Smash the pump.fun green button with both paws</div>
                <div className="text-[#CCC6BC]">2. Sleep on the keyboard during +4,000% candles</div>
                <div className="text-[#CCC6BC]">3. Demand tuna treats paid in $HCAT tokens</div>
              </div>
            </div>
          </div>

        </div>

        {/* Feature Action Banner: Hood & HoodCat Running In Stealth */}
        <div className="rounded-2xl bg-gradient-to-r from-[#0C121A] via-[#101822] to-[#0A0E15] border border-[#1C2E29] p-6 sm:p-10 flex flex-col lg:flex-row items-center gap-8 shadow-2xl">
          <div className="w-full lg:w-1/2 aspect-video rounded-xl overflow-hidden border border-[#223832] relative group">
            <StealthImage
              src="/assets/hood-running.webp"
              alt="Hood and HoodCat Stealth Escape"
              fallbackType="duo"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-3 left-3 bg-[#080B0F]/85 backdrop-blur-sm border border-[#1E302B] px-2.5 py-1 rounded text-[10px] font-mono text-[#14F195]">
              STATUS: SOLANA MEME ESCAPE
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-5 text-left">
            <span className="font-mono text-xs uppercase tracking-widest text-[#14F195] font-bold">
              // THE DUO IN ACTION
            </span>
            <h3 className="text-2xl sm:text-4xl font-display font-black text-white leading-tight">
              "Why do manually what AI can extract from the void?"
            </h3>
            <p className="text-sm text-[#8DA19A] leading-relaxed">
              In a world flooded with recycled copies, HoodCAT ($HCAT) takes a different route. We built an authentic story universe natively tuned for Solana and launching on pump.fun. Hood designs the nodes, HoodCat causes the ripples, and the community reaps the culture.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-[#D2E2DC]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#14F195]" />
                <span>Zero Slop</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#9945FF]" />
                <span>Solana (SPL)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                <span>pump.fun Native</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
