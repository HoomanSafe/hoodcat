import React from 'react';
import { PROJECT_CONFIG } from '../config/project';
import { Zap, ShieldCheck, Flame, ArrowUpRight, CheckCircle2, ExternalLink } from 'lucide-react';
import { PumpFunIcon, SolanaIcon } from './PumpFunIcon';

export const SolanaSection: React.FC = () => {
  return (
    <section id="ecosystem" className="py-24 bg-[#07090D] border-t border-[#141C1A] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-[#9945FF]/[0.05] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-[#14F195]/[0.05] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F141E] border border-[#233530] text-xs font-mono mb-3 shadow-[0_0_15px_rgba(20,241,149,0.15)]">
            <SolanaIcon size={14} />
            <span className="text-[#9945FF] font-bold">SOLANA NATIVE</span>
            <span className="text-[#3A4E46]">•</span>
            <PumpFunIcon size={14} />
            <span className="text-[#14F195] font-extrabold">PUMP.FUN LAUNCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight uppercase">
            Built On Solana. Powered by pump.fun.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#8CA09A]">
            Neura Cat ($NCAT) combines instant 400ms blockchain finality with the purest fair launch mechanism on the internet.
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="p-7 rounded-2xl bg-[#0B0F15] border border-[#1B2925] hover:border-[#14F195]/40 transition-all duration-300 space-y-4 group">
            <div className="w-12 h-12 rounded-xl bg-[#0E171E] border border-[#14F195]/30 flex items-center justify-center text-[#14F195] group-hover:scale-105 transition-transform">
              <PumpFunIcon size={24} />
            </div>
            <h3 className="font-display font-bold text-xl text-white">
              100% Fair Launch
            </h3>
            <p className="text-xs text-[#8A9E97] leading-relaxed">
              Launched exclusively on the pump.fun bonding curve. Zero team pre-mine, zero private sales, zero insider whitelist. Every single holder starts from the same block.
            </p>
            <div className="pt-2 flex items-center gap-2 text-[11px] font-mono text-[#14F195]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Anti-Rug by Design</span>
            </div>
          </div>

          <div className="p-7 rounded-2xl bg-[#0B0F15] border border-[#1B2925] hover:border-[#9945FF]/40 transition-all duration-300 space-y-4 group">
            <div className="w-12 h-12 rounded-xl bg-[#141221] border border-[#9945FF]/30 flex items-center justify-center text-[#9945FF] group-hover:scale-105 transition-transform">
              <SolanaIcon size={24} />
            </div>
            <h3 className="font-display font-bold text-xl text-white">
              Sub-Cent & 400ms TPS
            </h3>
            <p className="text-xs text-[#8A9E97] leading-relaxed">
              Powered by Solana's lightning-fast parallel runtime. Transactions settle in ~400ms for less than $0.0005, allowing HoodCat's viral memes and ape trades to execute frictionlessly.
            </p>
            <div className="pt-2 flex items-center gap-2 text-[11px] font-mono text-[#9945FF]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>65,000 TPS Throughput</span>
            </div>
          </div>

          <div className="p-7 rounded-2xl bg-[#0B0F15] border border-[#1B2925] hover:border-[#14F195]/40 transition-all duration-300 space-y-4 group">
            <div className="w-12 h-12 rounded-xl bg-[#0E171E] border border-[#14F195]/30 flex items-center justify-center text-[#14F195] group-hover:scale-105 transition-transform">
              <Flame className="w-6 h-6 text-[#14F195]" />
            </div>
            <h3 className="font-display font-bold text-xl text-white">
              Automatic Raydium Graduation
            </h3>
            <p className="text-xs text-[#8A9E97] leading-relaxed">
              When the pump.fun bonding curve reaches 100%, liquidity is automatically migrated to Raydium and the LP tokens are permanently burned, locking liquidity forever.
            </p>
            <div className="pt-2 flex items-center gap-2 text-[11px] font-mono text-[#14F195]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Permanent Burn & Lock</span>
            </div>
          </div>

        </div>

        {/* Interactive pump.fun Launch Card */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#0C121A] via-[#101820] to-[#0A1016] border border-[#20342D] flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_15px_45px_rgba(0,0,0,0.7)]">
          <div className="space-y-2 text-left max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#14F195] font-bold">
              <PumpFunIcon size={16} />
              <span>BONDING CURVE READY</span>
            </div>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
              Ready to Join the Neura Cat Collective?
            </h3>
            <p className="text-xs sm:text-sm text-[#8EA299] leading-relaxed">
              Connect your Phantom or Solflare wallet on pump.fun and trade $NCAT instantly with zero slippage issues.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            <a
              href={PROJECT_CONFIG.PUMPFUN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl pumpfun-pill-btn font-display font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 transition-transform hover:scale-105"
            >
              <PumpFunIcon size={20} />
              <span>Open on pump.fun</span>
              <ExternalLink className="w-4 h-4 opacity-80" />
            </a>

            <a
              href={PROJECT_CONFIG.DEXSCREENER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-[#111722] hover:bg-[#182330] border border-[#243730] text-white font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
            >
              <span>DexScreener</span>
              <ArrowUpRight className="w-4 h-4 text-[#14F195]" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
