import React, { useState, useEffect } from 'react';
import { PROJECT_CONFIG } from '../config/project';
import { Terminal, Menu, X, Copy, Check, ExternalLink } from 'lucide-react';
import { PumpFunIcon, SolanaIcon } from './PumpFunIcon';

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
    { label: 'Solana & pump.fun', href: '#ecosystem' },
    { label: 'Tokenomics', href: '#tokenomics' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080A0E]/92 backdrop-blur-md border-b border-[#1A2624] py-3 shadow-[0_4px_24px_rgba(0,0,0,0.7)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Wordmark & Icon */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-[#0C1118] border border-[#14F195]/40 flex items-center justify-center p-1.5 transition-transform duration-300 group-hover:scale-105 group-hover:border-[#14F195] shadow-[0_0_12px_rgba(20,241,149,0.25)]">
            <img src="/assets/memeai-favicon.svg" alt="HoodCAT Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-display font-black text-xl tracking-wider text-white">
                Hood<span className="text-[#14F195]">CAT</span>
              </span>
              <span className="px-1.5 py-0.2 bg-[#14F195]/15 border border-[#14F195]/35 rounded text-[10px] font-mono text-[#14F195] font-bold">
                {PROJECT_CONFIG.TICKER}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#14F195] animate-pulse" />
            </div>
            <div className="flex items-center gap-1 text-[9px] font-mono font-semibold tracking-wider">
              <span className="text-[#9945FF]">SOLANA</span>
              <span className="text-[#4E6258]">•</span>
              <span className="text-[#10B981]">PUMP.FUN</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 bg-[#0D1219]/80 border border-[#1C2825] rounded-full px-4 py-1.5 shadow-inner">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-3.5 py-1.5 text-xs font-medium text-[#A6B5B0] hover:text-[#14F195] transition-colors rounded-full hover:bg-[#16231E]"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Quick Copy CA */}
          <button
            onClick={handleCopyCA}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#0F141C] border border-[#21312B] hover:border-[#14F195]/50 text-xs font-mono text-[#D0DCD7] transition-all hover:bg-[#15201C]"
            title="Copy Solana Mint Address"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-[#14F195]" /> : <Copy className="w-3.5 h-3.5 text-[#80968F]" />}
            <span>CA: {PROJECT_CONFIG.CONTRACT_ADDRESS.substring(0, 10)}...</span>
          </button>

          {/* Featured pump.fun CTA Button */}
          <a
            href={PROJECT_CONFIG.PUMPFUN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg pumpfun-pill-btn font-display font-black text-xs uppercase tracking-wider transition-all transform hover:-translate-y-0.5"
          >
            <PumpFunIcon size={16} />
            <span>Buy on pump.fun</span>
            <ExternalLink className="w-3 h-3 opacity-70" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-[#111720] border border-[#20322B] text-[#14F195] hover:bg-[#16211C]"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#1A2624] bg-[#0A0D12]/98 px-6 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 text-sm font-medium text-[#C2D1CC] hover:text-[#14F195] hover:bg-[#121A1A] rounded-lg transition-colors border border-transparent hover:border-[#1F302A]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-[#192422] flex flex-col gap-3">
            <a
              href={PROJECT_CONFIG.PUMPFUN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg pumpfun-pill-btn font-display font-black text-xs uppercase tracking-wider"
            >
              <PumpFunIcon size={18} />
              <span>Launch on pump.fun</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={handleCopyCA}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#10161E] border border-[#21312B] text-xs font-mono text-[#D0DCD7]"
            >
              {copied ? <Check className="w-4 h-4 text-[#14F195]" /> : <Copy className="w-4 h-4 text-[#80968F]" />}
              <span>CA: {PROJECT_CONFIG.CONTRACT_ADDRESS}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
