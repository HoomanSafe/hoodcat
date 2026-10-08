import React from 'react';
import { PROJECT_CONFIG } from '../config/project';
import { StealthImage } from './StealthImage';
import { ArrowUp, ExternalLink } from 'lucide-react';
import { PumpFunIcon, SolanaIcon } from './PumpFunIcon';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070A] border-t border-[#141C1A] pt-20 pb-12 relative overflow-hidden">
      {/* Background ambient glow - Solana gradient */}
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[300px] bg-[#9945FF]/[0.03] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-[500px] h-[300px] bg-[#14F195]/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-[#141C1A]">
          
          {/* Brand & Duo Vignette */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0B1017] border border-[#14F195]/40 flex items-center justify-center p-1.5 shadow-[0_0_12px_rgba(20,241,149,0.2)]">
                <img src="/assets/memeai-favicon.svg" alt="HoodCAT Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display font-black text-2xl tracking-wider text-white">
                    Hood<span className="text-[#14F195]">CAT</span>
                  </span>
                  <span className="px-1.5 py-0.5 rounded bg-[#14F195]/15 border border-[#14F195]/30 text-[10px] font-mono text-[#14F195] font-bold">
                    $HCAT
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[9px] font-mono font-bold tracking-wider -mt-0.5">
                  <span className="text-[#9945FF]">SOLANA</span>
                  <span className="text-[#3E5249]">•</span>
                  <span className="text-[#10B981]">PUMP.FUN</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-[#829690] max-w-sm leading-relaxed">
              The stealth AI duo operating on Solana. Hood crafts the neural algorithms from the shadows; HoodCat runs wild across the pump.fun bonding curve.
            </p>

            {/* Duo Mini Avatars */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0A0E15] border border-[#162420]">
                <div className="w-6 h-6 rounded-full overflow-hidden border border-[#14F195]/40">
                  <StealthImage src="/assets/hood-hero.webp" alt="Hood" fallbackType="hood" className="w-full h-full object-cover" />
                </div>
                <span className="text-xs font-display font-bold text-white">HOOD</span>
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0A0E15] border border-[#2B2819]">
                <div className="w-6 h-6 rounded-full overflow-hidden border border-[#E5C158]/40">
                  <StealthImage src="/assets/hoodcat-hero.webp" alt="HoodCat" fallbackType="hoodcat" className="w-full h-full object-cover" />
                </div>
                <span className="text-xs font-display font-bold text-[#E5C158]">HOODCAT</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#14F195] font-semibold block">
              OPERATIONAL LINKS
            </span>
            <ul className="space-y-2 text-xs text-[#8E9F99]">
              <li>
                <a href="#characters" className="hover:text-white transition-colors">The Duo (Hood & HoodCat)</a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-white transition-colors">Operational Dynamics</a>
              </li>
              <li>
                <a href="#ai-terminal" className="hover:text-white transition-colors">HoodCat AI Terminal</a>
              </li>
              <li>
                <a href="#memes" className="hover:text-white transition-colors">The Meme Vault</a>
              </li>
              <li>
                <a href="#ecosystem" className="hover:text-white transition-colors">Solana & pump.fun</a>
              </li>
              <li>
                <a href="#tokenomics" className="hover:text-white transition-colors">Token Architecture</a>
              </li>
            </ul>
          </div>

          {/* Community & Social Channels */}
          <div className="md:col-span-4 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#14F195] font-semibold block">
              COMMUNITY FREQUENCIES
            </span>
            <p className="text-xs text-[#829690]">
              Connect with fellow operatives in the Solana & pump.fun ecosystem.
            </p>

            <div className="flex flex-wrap gap-2">
              {/* Highlight pump.fun button */}
              <a
                href={PROJECT_CONFIG.PUMPFUN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-lg pumpfun-pill-btn font-display font-black text-xs uppercase tracking-wider flex items-center gap-2"
              >
                <PumpFunIcon size={16} />
                <span>pump.fun</span>
                <ExternalLink className="w-3 h-3 opacity-80" />
              </a>

              {PROJECT_CONFIG.SOCIAL_LINKS.filter(l => l.icon !== 'pumpfun').map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  className="px-3 py-2 rounded-lg bg-[#0D1219] hover:bg-[#131B24] border border-[#1A2824] text-xs font-mono text-[#BAC8C2] hover:text-[#14F195] flex items-center gap-2 transition-colors"
                >
                  <span>{link.label}</span>
                </a>
              ))}
            </div>

            <div className="pt-2 flex items-center gap-3">
              <div className="flex items-center gap-1.5 text-xs font-mono text-white">
                <SolanaIcon size={14} />
                <span>Solana (SPL)</span>
              </div>
              <span className="text-[#3A4D45]">•</span>
              <div className="flex items-center gap-1.5 text-xs font-mono text-[#14F195]">
                <PumpFunIcon size={14} />
                <span>Fair Launch</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#627770] font-mono">
          <div className="text-center md:text-left">
            &copy; 2026 {PROJECT_CONFIG.PROJECT_NAME} — All original character artwork and lore reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0C1017] border border-[#182622] text-[#8EA199] hover:text-[#14F195] transition-colors"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
