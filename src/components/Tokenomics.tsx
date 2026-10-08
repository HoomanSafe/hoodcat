import React, { useState } from 'react';
import { PROJECT_CONFIG } from '../config/project';
import { Copy, Check, Lock, ShieldCheck, Flame, ExternalLink, Zap } from 'lucide-react';
import { PumpFunIcon, SolanaIcon } from './PumpFunIcon';

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
    { label: "BLOCKCHAIN", value: "Solana (SPL)" },
    { label: "TOTAL SUPPLY", value: PROJECT_CONFIG.TOTAL_SUPPLY },
  ];

  const distribution = [
    { title: "pump.fun Bonding Curve", percent: "80%", desc: "Open fair market on pump.fun bonding curve. No pre-mine.", color: "#14F195" },
    { title: "Raydium Migration LP", percent: "20%", desc: "Auto-deposited into Raydium & LP tokens burned forever upon 100% completion.", color: "#9945FF" },
    { title: "Buy / Sell Taxes", percent: "0%", desc: "Zero transfer taxes. Zero hidden fees. Pure decentralized volume.", color: "#10B981" },
    { title: "Mint & Freeze Authority", percent: "Revoked", desc: "Contract immutable. Freeze authority disabled permanently on pump.fun.", color: "#E5C158" },
  ];

  return (
    <section id="tokenomics" className="py-24 bg-[#080A0E] border-t border-[#141C1A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0E141C] border border-[#20322B] text-xs font-mono text-[#14F195] mb-3">
            <SolanaIcon size={14} />
            <span>SOLANA SPL TOKENOMICS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight uppercase">
            Token Architecture
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#8CA09A]">
            100% fair launch parameters deployed natively on the Solana pump.fun bonding curve.
          </p>
        </div>

        {/* Primary Spec Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {tokenMetrics.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#0B0F15] border border-[#1A2824] flex flex-col justify-between"
            >
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#738882]">
                {item.label}
              </span>
              <div className="font-display font-bold text-xl sm:text-2xl text-white mt-2">
                {item.value}
              </div>
            </div>
          ))}
        </div>

        {/* Contract Address Interactive Banner */}
        <div className="p-6 rounded-2xl bg-[#0D131C] border border-[#20332D] flex flex-col md:flex-row items-center justify-between gap-4 mb-16">
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="w-10 h-10 rounded-xl bg-[#131E2A] border border-[#14F195]/40 flex items-center justify-center text-[#14F195] shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div className="overflow-hidden">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#14F195] font-semibold block">
                SOLANA MINT ADDRESS (SPL)
              </span>
              <span className="font-mono text-sm text-[#D8E6E0] truncate block">
                {PROJECT_CONFIG.CONTRACT_ADDRESS}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <button
              onClick={handleCopy}
              className="w-full md:w-auto px-5 py-2.5 rounded-xl bg-[#141C26] hover:bg-[#1A2532] text-white border border-[#243730] font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shrink-0"
            >
              {copied ? <Check className="w-4 h-4 text-[#14F195]" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied Mint' : 'Copy CA'}</span>
            </button>

            <a
              href={PROJECT_CONFIG.PUMPFUN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-6 py-2.5 rounded-xl pumpfun-pill-btn font-display font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shrink-0"
            >
              <PumpFunIcon size={16} />
              <span>pump.fun</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </div>

        {/* Allocation Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {distribution.map((dist, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0A0E14] border border-[#182622] relative overflow-hidden"
            >
              <div
                className="w-2.5 h-2.5 rounded-full mb-3"
                style={{ backgroundColor: dist.color, boxShadow: `0 0 10px ${dist.color}` }}
              />
              <span className="text-3xl font-display font-black text-white block">
                {dist.percent}
              </span>
              <h4 className="font-display font-bold text-sm text-[#E2EBE7] mt-1">
                {dist.title}
              </h4>
              <p className="text-xs text-[#829690] mt-2 leading-relaxed">
                {dist.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
