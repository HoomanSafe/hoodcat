import React, { useState, useEffect } from 'react';
import { PROJECT_CONFIG } from '../config/project';
import { StealthImage } from './StealthImage';
import { Terminal, ArrowRight, ExternalLink, Eye, TrendingUp, Sparkles } from 'lucide-react';
import { PumpFunIcon, SolanaIcon } from './PumpFunIcon';

export const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState<'duo' | 'hood' | 'hoodcat'>('duo');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden bg-stealth-grid">
      {/* Background ambient lighting - Solana gradient glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#9945FF]/[0.08] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#14F195]/[0.07] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center mb-8">
          
          {/* Ecosystem Verification Chip - Solana & pump.fun */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0E131C] border border-[#233530] mb-6 shadow-[0_0_20px_rgba(20,241,149,0.15)]">
            <SolanaIcon size={16} />
            <span className="font-mono text-xs text-[#9945FF] font-bold tracking-wider">
              SOLANA
            </span>
            <span className="text-[#3F544D] text-xs">|</span>
            <PumpFunIcon size={15} />
            <span className="font-mono text-xs text-[#14F195] font-extrabold tracking-wider animate-pulse">
              LAUNCHING ON PUMP.FUN
            </span>
          </div>

          {/* Main Title */}
          <div className="flex flex-col items-center">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black font-display tracking-tight text-white mb-2 leading-none">
              Hood<span className="text-[#14F195] drop-shadow-[0_0_30px_rgba(20,241,149,0.5)]">CAT</span>
            </h1>
            <div className="inline-flex items-center gap-2 mb-4 font-mono text-sm sm:text-base text-[#14F195] font-bold tracking-widest bg-[#0C1518] px-4 py-1 rounded-full border border-[#19322D]">
              <span>TICKER:</span>
              <span className="text-white bg-[#14F195]/20 px-2.5 py-0.5 rounded border border-[#14F195]/40 text-[#14F195] shadow-[0_0_10px_rgba(20,241,149,0.25)]">
                {PROJECT_CONFIG.TICKER}
              </span>
              <span className="text-[#4E675E]">|</span>
              <span className="text-[#9945FF] text-xs font-black">SOLANA ECOSYSTEM</span>
            </div>
          </div>

          {/* Subtitle */}
          <p className="max-w-2xl text-lg sm:text-xl text-[#B4C4BF] font-medium mb-6">
            <strong className="text-white">HOOD</strong> architects the neural vectors.{' '}
            <strong className="text-[#14F195]">HOODCAT</strong> unchains spontaneous pandemonium on <span className="text-[#10B981] font-bold">pump.fun</span>.
          </p>

          <p className="max-w-xl text-xs sm:text-sm text-[#7D918A] font-mono mb-8">
            The modern digital stealth duo bringing covert AI models and high-octane meme culture to Solana.
          </p>

          {/* CTA Group with prominent pump.fun button */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
            {/* Primary pump.fun Launch Button */}
            <a
              href={PROJECT_CONFIG.PUMPFUN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-xl pumpfun-pill-btn font-display font-black text-sm tracking-wider uppercase transition-all duration-200 transform hover:-translate-y-0.5 flex items-center gap-2.5"
            >
              <PumpFunIcon size={20} />
              <span>Trade on pump.fun</span>
              <ExternalLink className="w-4 h-4 opacity-80" />
            </a>

            {/* DexScreener Chart Button */}
            <a
              href={PROJECT_CONFIG.DEXSCREENER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-[#101620] hover:bg-[#16212D] text-[#ECEFF1] border border-[#233532] hover:border-[#14F195]/50 font-display font-bold text-sm tracking-wide uppercase transition-all duration-200 flex items-center gap-2"
            >
              <TrendingUp className="w-4 h-4 text-[#14F195]" />
              <span>DexScreener</span>
            </a>

            {/* AI Ops Simulator */}
            <a
              href="#ai-terminal"
              className="px-5 py-3.5 rounded-xl bg-[#0D1219] hover:bg-[#131C24] text-[#A2B6AF] hover:text-white border border-[#1B2724] text-xs font-mono transition-all duration-200 flex items-center gap-2"
            >
              <Terminal className="w-4 h-4 text-[#9945FF]" />
              <span>Simulate AI Terminal</span>
            </a>
          </div>
        </div>

        {/* Cinematic Character Showcase Card with Eye Tracking Interaction */}
        <div className="relative max-w-5xl mx-auto rounded-2xl bg-gradient-to-b from-[#10161C] to-[#0A0D12] border border-[#1E2E2A] p-4 sm:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.85)] overflow-hidden">
          {/* Tactical Header bar */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#182623] text-xs font-mono text-[#7D918A]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#14F195] animate-pulse" />
              <span className="text-white font-semibold">FEED: SOLANA NODE #0042</span>
              <span className="hidden sm:inline text-[#3F544D]">|</span>
              <span className="hidden sm:inline text-[#14F195]">TARGET: PUMP.FUN BONDING CURVE</span>
            </div>

            {/* View Switcher */}
            <div className="flex items-center bg-[#080B0F] p-1 rounded-lg border border-[#1B2925] gap-1">
              <button
                onClick={() => setActiveTab('duo')}
                className={`px-2.5 py-1 rounded text-[11px] font-sans font-medium transition-colors ${
                  activeTab === 'duo' ? 'bg-[#14F195] text-[#080A0D] font-bold' : 'text-[#859892] hover:text-white'
                }`}
              >
                THE DUO
              </button>
              <button
                onClick={() => setActiveTab('hood')}
                className={`px-2.5 py-1 rounded text-[11px] font-sans font-medium transition-colors ${
                  activeTab === 'hood' ? 'bg-[#14F195] text-[#080A0D] font-bold' : 'text-[#859892] hover:text-white'
                }`}
              >
                HOOD
              </button>
              <button
                onClick={() => setActiveTab('hoodcat')}
                className={`px-2.5 py-1 rounded text-[11px] font-sans font-medium transition-colors ${
                  activeTab === 'hoodcat' ? 'bg-[#14F195] text-[#080A0D] font-bold' : 'text-[#859892] hover:text-white'
                }`}
              >
                HOODCAT
              </button>
            </div>
          </div>

          {/* Interactive Artwork Display */}
          <div className="relative rounded-xl overflow-hidden aspect-[16/9] sm:aspect-[21/9] max-h-[500px] border border-[#1F312B] group">
            {activeTab === 'duo' && (
              <StealthImage
                src="/assets/hood-duo.webp"
                alt="Hood and HoodCat Cinematic Duo"
                fallbackType="duo"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
              />
            )}
            {activeTab === 'hood' && (
              <StealthImage
                src="/assets/hood-hero.webp"
                alt="Hood - The Ghost Operator"
                fallbackType="hood"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
              />
            )}
            {activeTab === 'hoodcat' && (
              <StealthImage
                src="/assets/hoodcat-hero.webp"
                alt="HoodCat - Unit 0-Chaos"
                fallbackType="hoodcat"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
              />
            )}

            {/* Simulated Eye Tracking Gaze Crosshair with Solana Glow */}
            <div
              className="absolute pointer-events-none transition-transform duration-150 ease-out hidden sm:flex items-center justify-center"
              style={{
                top: `${40 + mousePos.y * 12}%`,
                left: `${50 + mousePos.x * 15}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <div className="relative">
                <div className="w-12 h-12 rounded-full border border-[#14F195]/40 flex items-center justify-center animate-ping duration-1000 opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full border border-[#14F195] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#14F195] shadow-[0_0_8px_#14F195]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#080B0F] via-transparent to-transparent opacity-80 pointer-events-none" />

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 text-white">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#14F195] font-bold">
                  {activeTab === 'duo' ? 'SOLANA STEALTH ENGINE' : activeTab === 'hood' ? 'NEURAL COMPILER' : 'PUMP.FUN APER'}
                </span>
                <h3 className="font-display font-bold text-lg sm:text-2xl text-white">
                  {activeTab === 'duo'
                    ? 'Instant Solana Finality. Unhinged Memes.'
                    : activeTab === 'hood'
                    ? 'Hood: "Why compute in daylight when Solana TPS processes in milliseconds?"'
                    : 'HoodCat: "The pump.fun bonding curve is my personal scratching post."'}
                </h3>
              </div>
              <div className="flex items-center gap-2 bg-[#080B0F]/85 backdrop-blur-md px-3 py-1.5 rounded border border-[#1B2925] text-xs font-mono text-[#14F195]">
                <Eye className="w-3.5 h-3.5 animate-pulse" />
                <span>SOLANA NODE SYNCED</span>
              </div>
            </div>
          </div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4 pt-2">
            {PROJECT_CONFIG.STATS.map((stat, i) => (
              <div key={i} className="bg-[#080B0F] rounded-lg p-3 border border-[#16221D] text-left">
                <span className="text-[10px] font-mono text-[#7D918A] uppercase tracking-wider block">
                  {stat.label}
                </span>
                <span className="text-sm font-display font-bold text-[#E2ECE8] mt-0.5 block truncate">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
