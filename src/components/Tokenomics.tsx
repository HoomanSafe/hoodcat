import React, { useState } from 'react';
import { PROJECT_CONFIG } from '../config/project';
import { Coins, Copy, Check, ShieldCheck, Lock, Flame, PieChart, ExternalLink } from 'lucide-react';

export const Tokenomics: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(PROJECT_CONFIG.CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tokenMetrics = [
    { label: "PROJECT NAME", value: PROJECT_CONFIG.PROJECT_NAME },
    { label: "TICKER", value: PROJECT_CONFIG.TICKER },
    { label: "NETWORK", value: PROJECT_CONFIG.NETWORK },
    { label: "TOTAL SUPPLY", value: PROJECT_CONFIG.TOTAL_SUPPLY },
  ];

  const distribution = [
    { title: "Fair Liquidity Pool", percent: "60%", desc: "Locked on Robinhood Blockchain native DEX", color: "#00E676" },
    { title: "Community & Memes", percent: "20%", desc: "Meme competitions, creator grants, viral bounties", color: "#38BDF8" },
    { title: "Stealth Development", percent: "10%", desc: "AI terminal expansions & ongoing artwork", color: "#E5C158" },
    { title: "HoodCat Tuna Vault", percent: "10%", desc: "Emergency reserves strictly for feline peace", color: "#A78BFA" },
  ];

  return (
    <section id="tokenomics" className="py-24 bg-[#090C0F] border-t border-[#141C17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111A15] border border-[#1E3024] text-xs font-mono text-[#00E676] mb-3">
            <Coins className="w-3.5 h-3.5" />
            <span>CONFIGURABLE METRICS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight uppercase">
            Token Architecture
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#8CA094]">
            Transparent parameters tailored strictly for the Robinhood Blockchain ecosystem.
          </p>
        </div>

        {/* Primary Spec Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {tokenMetrics.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#0D1216] border border-[#1C2A21] flex flex-col justify-between"
            >
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#73887B]">
                {item.label}
              </span>
              <div className="font-display font-bold text-xl sm:text-2xl text-white mt-2">
                {item.value}
              </div>
            </div>
          ))}
        </div>

        {/* Contract Address Interactive Banner */}
        <div className="p-6 rounded-2xl bg-[#0D1511] border border-[#1F3326] flex flex-col md:flex-row items-center justify-between gap-4 mb-16">
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="w-10 h-10 rounded-xl bg-[#132219] border border-[#00E676]/40 flex items-center justify-center text-[#00E676] shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div className="overflow-hidden">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#00E676] font-semibold block">
                CONTRACT ADDRESS (ROBINHOOD BLOCKCHAIN)
              </span>
              <span className="font-mono text-sm text-[#D8E6DE] truncate block">
                {PROJECT_CONFIG.CONTRACT_ADDRESS}
              </span>
            </div>
          </div>

          <button
            onClick={handleCopy}
            className="w-full md:w-auto px-5 py-2.5 rounded-xl bg-[#00E676] hover:bg-[#00c864] text-[#090B0D] font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shrink-0"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Copied Address' : 'Copy Contract'}</span>
          </button>
        </div>

        {/* Allocation Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {distribution.map((dist, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0C1014] border border-[#19241E] relative overflow-hidden"
            >
              <div
                className="w-2 h-2 rounded-full mb-3"
                style={{ backgroundColor: dist.color, boxShadow: `0 0 10px ${dist.color}` }}
              />
              <span className="text-3xl font-display font-black text-white block">
                {dist.percent}
              </span>
              <h4 className="font-display font-bold text-sm text-[#E2EBE5] mt-1">
                {dist.title}
              </h4>
              <p className="text-xs text-[#82968B] mt-2 leading-relaxed">
                {dist.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
