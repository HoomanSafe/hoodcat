import React, { useState, useEffect } from 'react';
import { PROJECT_CONFIG } from '../config/project';
import { Shield, Terminal, Image as ImageIcon, Cpu, Coins, Menu, X, Copy, Check } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyCA = () => {
    navigator.clipboard.writeText(PROJECT_CONFIG.CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navItems = [
    { label: 'The Duo', href: '#characters' },
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'AI Terminal', href: '#ai-terminal' },
    { label: 'Meme Vault', href: '#memes' },
    { label: 'Robinhood Chain', href: '#ecosystem' },
    { label: 'Tokenomics', href: '#tokenomics' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090B0D]/90 backdrop-blur-md border-b border-[#1A261F] py-3 shadow-[0_4px_24px_rgba(0,0,0,0.6)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Wordmark & Icon */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-[#0D1410] border border-[#00E676]/40 flex items-center justify-center p-1.5 transition-transform duration-300 group-hover:scale-105 group-hover:border-[#00E676] shadow-[0_0_12px_rgba(0,230,118,0.2)]">
            <img src="/assets/memeai-favicon.svg" alt="MemeAI Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-display font-black text-xl tracking-wider text-white">
                Hood<span className="text-[#00E676]">CAT</span>
              </span>
              <span className="px-1.5 py-0.2 bg-[#00E676]/15 border border-[#00E676]/30 rounded text-[10px] font-mono text-[#00E676] font-bold">
                $HCAT
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E676] animate-pulse" />
            </div>
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#809689] -mt-0.5 font-semibold">
              ROBINHOOD BLOCKCHAIN
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 bg-[#0E1311]/80 border border-[#1C2820] rounded-full px-4 py-1.5 shadow-inner">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-3.5 py-1.5 text-xs font-medium text-[#A6B5AE] hover:text-[#00E676] transition-colors rounded-full hover:bg-[#16221A]"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={handleCopyCA}
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#111714] border border-[#233529] hover:border-[#00E676]/50 text-xs font-mono text-[#D0DCD5] transition-all hover:bg-[#16221A]"
            title="Copy Contract Address placeholder"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-[#00E676]" /> : <Copy className="w-3.5 h-3.5 text-[#809689]" />}
            <span>CA: {PROJECT_CONFIG.CONTRACT_ADDRESS.substring(0, 10)}...</span>
          </button>

          <a
            href="#ai-terminal"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00E676] hover:bg-[#00c864] text-[#090B0D] text-xs font-bold font-display uppercase tracking-wider transition-all transform hover:-translate-y-0.5 shadow-[0_0_15px_rgba(0,230,118,0.3)]"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>AI Ops</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-[#121814] border border-[#213227] text-[#00E676] hover:bg-[#17221B]"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#1A261F] bg-[#0A0D0E]/98 px-6 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 text-sm font-medium text-[#C2D1C9] hover:text-[#00E676] hover:bg-[#121A15] rounded-lg transition-colors border border-transparent hover:border-[#1F3025]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-[#19241E] flex flex-col gap-3">
            <button
              onClick={handleCopyCA}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#121814] border border-[#213227] text-xs font-mono text-[#D0DCD5]"
            >
              {copied ? <Check className="w-4 h-4 text-[#00E676]" /> : <Copy className="w-4 h-4 text-[#809689]" />}
              <span>CA: {PROJECT_CONFIG.CONTRACT_ADDRESS}</span>
            </button>
            <a
              href="#ai-terminal"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#00E676] text-[#090B0D] text-xs font-bold font-display uppercase tracking-wider"
            >
              <Terminal className="w-4 h-4" />
              <span>Launch AI Terminal</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
