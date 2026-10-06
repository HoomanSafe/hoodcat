import React, { useState, useEffect } from 'react';
import { PROJECT_CONFIG } from '../config/project';
import { StealthImage } from './StealthImage';
import { Shield, Sparkles, Terminal, ArrowRight, Activity, Zap, Eye } from 'lucide-react';

export const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState<'duo' | 'hood' | 'hoodcat'>('duo');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized mouse coords (-1 to 1)
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden bg-stealth-grid">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#00E676]/[0.05] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-[#162D21]/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle top badge */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center mb-8">
          {/* Ecosystem Verification Chip */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D1511] border border-[#1E3024] mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#00E676] animate-ping" />
            <span className="font-mono text-xs text-[#00E676] tracking-wider font-semibold">
              ROBINHOOD BLOCKCHAIN EXCLUSIVE
            </span>
            <span className="text-[#3F5447] text-xs">|</span>
            <span className="text-xs text-[#95A89E] font-medium">ORIGINAL CREATIVE UNIVERSE</span>
          </div>

          {/* Main Title */}
          <div className="flex flex-col items-center">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black font-display tracking-tight text-white mb-2 leading-none">
              Hood<span className="text-[#00E676] drop-shadow-[0_0_25px_rgba(0,230,118,0.4)]">CAT</span>
            </h1>
            <div className="inline-flex items-center gap-2 mb-4 font-mono text-sm sm:text-base text-[#00E676] font-bold tracking-widest bg-[#0C1510] px-4 py-1 rounded-full border border-[#193223]">
              <span>TICKER:</span>
              <span className="text-white bg-[#00E676]/20 px-2.5 py-0.5 rounded border border-[#00E676]/40 text-[#00E676] shadow-[0_0_10px_rgba(0,230,118,0.2)]">
                {PROJECT_CONFIG.TICKER}
              </span>
              <span className="text-[#4E6759]">|</span>
              <span className="text-[#98ADA2] text-xs">ROBINHOOD BLOCKCHAIN</span>
            </div>
          </div>

          {/* Subtitle */}
          <p className="max-w-2xl text-lg sm:text-xl text-[#B4C4BC] font-medium mb-6">
            <strong className="text-white">HOOD</strong> architects the neural vectors.{' '}
            <strong className="text-[#00E676]">HOODCAT</strong> unchains spontaneous pandemonium.
          </p>

          <p className="max-w-xl text-xs sm:text-sm text-[#7D9186] font-mono mb-8">
            The modern digital Robin Hood duo operating from the encrypted shadows of the Robinhood Blockchain.
          </p>

          {/* CTA Group */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
            <a
              href="#characters"
              className="px-6 py-3 rounded-lg bg-[#00E676] hover:bg-[#00c864] text-[#090B0D] font-display font-bold text-sm tracking-wide uppercase transition-all duration-200 transform hover:-translate-y-0.5 shadow-[0_0_20px_rgba(0,230,118,0.3)] flex items-center gap-2"
            >
              <span>Meet The Operatives</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#ai-terminal"
              className="px-6 py-3 rounded-lg bg-[#111714] hover:bg-[#16221B] text-[#ECEFF1] border border-[#213528] hover:border-[#00E676]/40 font-display font-semibold text-sm tracking-wide uppercase transition-all duration-200 flex items-center gap-2"
            >
              <Terminal className="w-4 h-4 text-[#00E676]" />
              <span>Simulate AI Ops</span>
            </a>

            <a
              href="#memes"
              className="px-6 py-3 rounded-lg bg-[#0F1412] hover:bg-[#141C18] text-[#9DB0A6] border border-[#1A261F] text-sm font-medium transition-all duration-200 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#E5C158]" />
              <span>Meme Vault (8 Scenes)</span>
            </a>
          </div>
        </div>

        {/* Cinematic Character Showcase Card with Eye Tracking Interaction */}
        <div className="relative max-w-5xl mx-auto rounded-2xl bg-gradient-to-b from-[#111814] to-[#0A0D0E] border border-[#1D2C22] p-4 sm:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden">
          {/* Tactical Header bar */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#18261E] text-xs font-mono text-[#7D9186]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00E676]/80 animate-pulse" />
              <span className="text-white font-semibold">FEED: ENCRYPTED NODE #8092</span>
              <span className="hidden sm:inline text-[#3F5447]">|</span>
              <span className="hidden sm:inline text-[#9DB0A6]">TARGET: ROBINHOOD BLOCKCHAIN</span>
            </div>

            {/* View Switcher */}
            <div className="flex items-center bg-[#090D0B] p-1 rounded-lg border border-[#1A271F] gap-1">
              <button
                onClick={() => setActiveTab('duo')}
                className={`px-2.5 py-1 rounded text-[11px] font-sans font-medium transition-colors ${
                  activeTab === 'duo' ? 'bg-[#00E676] text-[#090B0D] font-bold' : 'text-[#85988F] hover:text-white'
                }`}
              >
                THE DUO
              </button>
              <button
                onClick={() => setActiveTab('hood')}
                className={`px-2.5 py-1 rounded text-[11px] font-sans font-medium transition-colors ${
                  activeTab === 'hood' ? 'bg-[#00E676] text-[#090B0D] font-bold' : 'text-[#85988F] hover:text-white'
                }`}
              >
                HOOD
              </button>
              <button
                onClick={() => setActiveTab('hoodcat')}
                className={`px-2.5 py-1 rounded text-[11px] font-sans font-medium transition-colors ${
                  activeTab === 'hoodcat' ? 'bg-[#00E676] text-[#090B0D] font-bold' : 'text-[#85988F] hover:text-white'
                }`}
              >
                HOODCAT
              </button>
            </div>
          </div>

          {/* Interactive Artwork Display */}
          <div className="relative rounded-xl overflow-hidden aspect-[16/9] sm:aspect-[21/9] max-h-[500px] border border-[#1F2F25] group">
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

            {/* Simulated Eye Tracking Gaze Crosshair that follows mouse subtly */}
            <div
              className="absolute pointer-events-none transition-transform duration-150 ease-out hidden sm:flex items-center justify-center"
              style={{
                top: `${40 + mousePos.y * 12}%`,
                left: `${50 + mousePos.x * 15}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <div className="relative">
                <div className="w-12 h-12 rounded-full border border-[#00E676]/40 flex items-center justify-center animate-ping duration-1000 opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full border border-[#00E676] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00E676] shadow-[0_0_8px_#00E676]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Tactical overlay gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#090D0B] via-transparent to-transparent opacity-80 pointer-events-none" />

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 text-white">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#00E676] font-bold">
                  {activeTab === 'duo' ? 'SYNCHRONIZED CO-OPERATION' : activeTab === 'hood' ? 'STRATEGIC CORE' : 'CHAOS ENGINE'}
                </span>
                <h3 className="font-display font-bold text-lg sm:text-2xl text-white">
                  {activeTab === 'duo'
                    ? 'Silent Code. Unrestrained Memes.'
                    : activeTab === 'hood'
                    ? 'Hood: "Why compute in daylight when the void delivers?"'
                    : 'HoodCat: "Your tokenomics are neat. Can I scratch them?"'}
                </h3>
              </div>
              <div className="flex items-center gap-2 bg-[#090D0B]/80 backdrop-blur-md px-3 py-1.5 rounded border border-[#1B2920] text-xs font-mono text-[#00E676]">
                <Eye className="w-3.5 h-3.5 animate-pulse" />
                <span>CYBER GAZE LOCKED</span>
              </div>
            </div>
          </div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4 pt-2">
            {PROJECT_CONFIG.STATS.map((stat, i) => (
              <div key={i} className="bg-[#090D0B] rounded-lg p-3 border border-[#16221A] text-left">
                <span className="text-[10px] font-mono text-[#7D9186] uppercase tracking-wider block">
                  {stat.label}
                </span>
                <span className="text-sm font-display font-bold text-[#E2ECE6] mt-0.5 block truncate">
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
