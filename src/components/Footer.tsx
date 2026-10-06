import React from 'react';
import { PROJECT_CONFIG } from '../config/project';
import { StealthImage } from './StealthImage';
import { Shield, ArrowUp, Send, Twitter, Disc, ExternalLink, Terminal, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#06080A] border-t border-[#141C17] pt-20 pb-12 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#00E676]/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-[#141C17]">
          
          {/* Brand & Duo Vignette */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0D1410] border border-[#00E676]/40 flex items-center justify-center p-1.5 shadow-[0_0_12px_rgba(0,230,118,0.2)]">
                <img src="/assets/memeai-favicon.svg" alt="MemeAI Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display font-black text-2xl tracking-wider text-white">
                    Hood<span className="text-[#00E676]">CAT</span>
                  </span>
                  <span className="px-1.5 py-0.5 rounded bg-[#00E676]/15 border border-[#00E676]/30 text-[10px] font-mono text-[#00E676] font-bold">
                    $HCAT
                  </span>
                </div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#809689] block -mt-0.5 font-semibold">
                  ROBINHOOD BLOCKCHAIN ONLY
                </span>
              </div>
            </div>

            <p className="text-xs text-[#82968B] max-w-sm leading-relaxed">
              The stealth AI duo operating inside the Robinhood Blockchain. Hood crafts the neural algorithms from the shadows; HoodCat runs wild across the network.
            </p>

            {/* Duo Mini Avatars */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0C1114] border border-[#18261F]">
                <div className="w-6 h-6 rounded-full overflow-hidden border border-[#00E676]/40">
                  <StealthImage src="/assets/hood-hero.webp" alt="Hood" fallbackType="hood" className="w-full h-full object-cover" />
                </div>
                <span className="text-xs font-display font-bold text-white">HOOD</span>
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0C1114] border border-[#2B2819]">
                <div className="w-6 h-6 rounded-full overflow-hidden border border-[#E5C158]/40">
                  <StealthImage src="/assets/hoodcat-hero.webp" alt="HoodCat" fallbackType="hoodcat" className="w-full h-full object-cover" />
                </div>
                <span className="text-xs font-display font-bold text-[#E5C158]">HOODCAT</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#00E676] font-semibold block">
              OPERATIONAL LINKS
            </span>
            <ul className="space-y-2 text-xs text-[#8E9F94]">
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
                <a href="#ecosystem" className="hover:text-white transition-colors">Robinhood Blockchain Focus</a>
              </li>
              <li>
                <a href="#tokenomics" className="hover:text-white transition-colors">Token Architecture</a>
              </li>
            </ul>
          </div>

          {/* Community & Social Channels */}
          <div className="md:col-span-4 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#00E676] font-semibold block">
              COMMUNITY FREQUENCIES
            </span>
            <p className="text-xs text-[#82968B]">
              Connect with fellow operatives in the Robinhood Blockchain ecosystem.
            </p>

            <div className="flex flex-wrap gap-2">
              {PROJECT_CONFIG.SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  className="px-3 py-2 rounded-lg bg-[#0F1418] hover:bg-[#151D22] border border-[#1C2921] text-xs font-mono text-[#BAC8BF] hover:text-[#00E676] flex items-center gap-2 transition-colors"
                >
                  <span>{link.label}</span>
                </a>
              ))}
            </div>

            <div className="pt-2">
              <span className="font-mono text-[10px] text-[#55695E] block">
                TARGET NETWORK:
              </span>
              <span className="font-mono text-xs text-white font-bold">
                {PROJECT_CONFIG.NETWORK}
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#62776B] font-mono">
          <div className="text-center md:text-left">
            &copy; 2026 {PROJECT_CONFIG.PROJECT_NAME} — All original character artwork and lore reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0D1216] border border-[#1A261F] text-[#8EA195] hover:text-[#00E676] transition-colors"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
