import React from 'react';
import { PROJECT_CONFIG } from '../config/project';
import { ShieldCheck, Cpu, AlertCircle, Layers, CheckCircle2, Terminal } from 'lucide-react';

export const RobinhoodSection: React.FC = () => {
  return (
    <section id="ecosystem" className="py-24 bg-[#080B0D] border-t border-[#141C17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111A15] border border-[#1E3024] text-xs font-mono text-[#00E676] mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>EXCLUSIVE ECOSYSTEM FOCUS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight uppercase">
            Built For Robinhood Blockchain
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#8CA094]">
            An independent AI and meme universe deployed strictly within the Robinhood Blockchain architecture.
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="p-6 rounded-2xl bg-[#0C1114] border border-[#1A261F] space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#111B15] border border-[#00E676]/30 flex items-center justify-center text-[#00E676]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-lg text-white">
              Single-Chain Dedication
            </h3>
            <p className="text-xs text-[#8A9E92] leading-relaxed">
              HoodCAT ($HCAT) is intentionally not multi-chain. Every neural vector, meme release, and token metric is anchored directly to the Robinhood Blockchain.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0C1114] border border-[#1A261F] space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#111B15] border border-[#00E676]/30 flex items-center justify-center text-[#00E676]">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-lg text-white">
              Optimized for Low Latency
            </h3>
            <p className="text-xs text-[#8A9E92] leading-relaxed">
              Engineered to leverage the speed and fluid execution of the Robinhood Blockchain, ensuring instant meme distribution without chain congestion.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0C1114] border border-[#1A261F] space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#111B15] border border-[#00E676]/30 flex items-center justify-center text-[#00E676]">
              <Terminal className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-lg text-white">
              Independent Community Core
            </h3>
            <p className="text-xs text-[#8A9E92] leading-relaxed">
              A grassroots creative coalition run by Hood and HoodCat, dedicated to delivering organic culture to Robinhood Blockchain participants.
            </p>
          </div>

        </div>

        {/* Verified Disclaimer & Boundaries Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0E1310] border border-[#1E2E24] flex flex-col md:flex-row items-start md:items-center gap-6 text-left">
          <div className="w-12 h-12 rounded-xl bg-[#16211A] border border-[#23382B] flex items-center justify-center text-[#00E676] shrink-0">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div className="space-y-1.5 flex-1">
            <h4 className="font-display font-bold text-base text-white">
              Ecosystem Notice & Independent Status
            </h4>
            <p className="text-xs text-[#899C91] leading-relaxed font-sans">
              {PROJECT_CONFIG.DISCLAIMER}
            </p>
          </div>
          <div className="shrink-0 font-mono text-[11px] text-[#00E676] px-3 py-1.5 rounded-lg bg-[#111A15] border border-[#1E3024]">
            [INDEPENDENT_PROJECT_VERIFIED]
          </div>
        </div>

      </div>
    </section>
  );
};
