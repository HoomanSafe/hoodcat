import React, { useState } from 'react';
import { PROJECT_CONFIG } from '../config/project';
import { StealthImage } from './StealthImage';
import { Shield, Sparkles, Terminal, CheckCircle2, AlertTriangle, Eye, Flame, Award, Laugh } from 'lucide-react';

export const Characters: React.FC = () => {
  const [hoodCatClicks, setHoodCatClicks] = useState(0);
  const [easterEggActive, setEasterEggActive] = useState(false);
  const [catSpeech, setCatSpeech] = useState<string | null>(null);

  const catDialogues = [
    "Meow. I just shorted your attention span.",
    "Click me again and I execute an infinite loop of tuna cans.",
    "ACCESS GRANTED: You unlocked HoodCat's secret stashes!",
    "Why follow the white rabbit when you can follow the black hooded cat?",
    "Solana RPC node scratched successfully.",
  ];

  const handleHoodCatClick = () => {
    const nextCount = hoodCatClicks + 1;
    setHoodCatClicks(nextCount);
    
    // Play sound-like funny reaction dialogue
    const randomMsg = catDialogues[nextCount % catDialogues.length];
    setCatSpeech(randomMsg);

    if (nextCount >= 3) {
      setEasterEggActive(true);
      setTimeout(() => {
        setEasterEggActive(false);
      }, 7000);
    }
  };

  const hood = PROJECT_CONFIG.CHARACTERS.HOOD;
  const hoodcat = PROJECT_CONFIG.CHARACTERS.HOODCAT;

  return (
    <section id="characters" className="py-24 bg-[#090C0E] border-t border-[#141C17] relative overflow-hidden">
      {/* Background cyber ambient lines */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111A15] border border-[#1E3024] text-xs font-mono text-[#14F195] mb-3">
            <Eye className="w-3.5 h-3.5" />
            <span>OPERATIVE IDENTIFICATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight uppercase">
            Meet Hood & Neura Cat
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#91A59A]">
            One strategist manipulating neural parameters. One sentient feline agent devoted to pure decentralized bedlam.
          </p>
        </div>

        {/* Easter Egg Banner if triggered */}
        {easterEggActive && (
          <div className="mb-10 p-5 rounded-2xl bg-gradient-to-r from-[#172E21] via-[#1A3828] to-[#12241A] border-2 border-[#14F195] shadow-[0_0_40px_rgba(20,241,149,0.4)] animate-bounce text-center">
            <div className="inline-flex items-center gap-2 text-[#14F195] font-display font-black text-xl">
              <Laugh className="w-6 h-6" />
              <span>EASTER EGG UNLOCKED: NEURA CAT TOOK OVER THE ROUTER!</span>
            </div>
            <p className="text-sm font-mono text-[#D8E6DE] mt-1">
              "Congratulations human! You clicked me 3 times. All gas fees on Solana have been redirected to pump.fun tuna treats."
            </p>
          </div>
        )}

        {/* Characters Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* CHARACTER 01: HOOD */}
          <div className="flex flex-col rounded-2xl bg-[#0D1215] border border-[#1C2822] hover:border-[#00E676]/40 transition-all duration-300 overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.6)]">
            {/* Header info */}
            <div className="p-6 border-b border-[#18231D] flex items-center justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#00E676] font-bold">
                  OPERATIVE 01 // THE HUMAN
                </span>
                <h3 className="text-3xl font-display font-black text-white mt-1">
                  {hood.name}
                </h3>
                <span className="text-xs text-[#80968B] font-mono">{hood.alias}</span>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-[#111A15] border border-[#1E3024] text-xs font-mono text-[#A8BEB2] flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#00E676]" />
                <span>STRATEGY LEAD</span>
              </div>
            </div>

            {/* Visual Image container */}
            <div className="relative aspect-square max-h-[380px] overflow-hidden bg-[#0A0D10] border-b border-[#18231D]">
              <StealthImage
                src={hood.image}
                alt="Hood - The Human Operative"
                fallbackType="hood"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-[#090D0B]/85 backdrop-blur-sm border border-[#1C2C22] px-2.5 py-1 rounded text-[11px] font-mono text-[#00E676]">
                STATUS: SILENT EXECUTION
              </div>
            </div>

            {/* Details & Traits */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              <div>
                <blockquote className="border-l-2 border-[#00E676] pl-4 italic text-[#D4E2DA] text-sm font-medium">
                  "{hood.quote}"
                </blockquote>

                <p className="mt-4 text-xs sm:text-sm text-[#8EA196] leading-relaxed">
                  {hood.bio}
                </p>
              </div>

              {/* Trait list */}
              <div className="space-y-3">
                <span className="font-mono text-xs text-[#6F8277] uppercase tracking-wider block">
                  NEURAL ATTRIBUTES:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {hood.traits.map((trait, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2 rounded bg-[#090E10] border border-[#15211A] text-xs font-medium text-[#C8D9D0]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00E676] shrink-0" />
                      <span className="truncate">{trait}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Signature item */}
              <div className="p-3 rounded-lg bg-[#111815] border border-[#1F2E25] text-xs">
                <span className="font-mono text-[10px] text-[#00E676] uppercase tracking-wider block">
                  SIGNATURE ITEM:
                </span>
                <span className="text-white font-medium">{hood.signatureGear}</span>
              </div>
            </div>
          </div>

          {/* CHARACTER 02: NEURA CAT */}
          <div className="flex flex-col rounded-2xl bg-[#0D1215] border border-[#1C2822] hover:border-[#14F195]/40 transition-all duration-300 overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.6)]">
            {/* Header info */}
            <div className="p-6 border-b border-[#18231D] flex items-center justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#14F195] font-bold">
                  OPERATIVE 02 // NEURAL FELINE
                </span>
                <h3 className="text-3xl font-display font-black text-white mt-1">
                  {hoodcat.name}
                </h3>
                <span className="text-xs text-[#80968B] font-mono">{hoodcat.alias}</span>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-[#14181B] border border-[#213329] text-xs font-mono text-[#14F195] flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-[#14F195]" />
                <span>CHAOS ENGINE</span>
              </div>
            </div>

            {/* Visual Image container with interactive clicker */}
            <div
              onClick={handleHoodCatClick}
              className="relative aspect-square max-h-[380px] overflow-hidden bg-[#0A0D10] border-b border-[#18231D] cursor-pointer group"
              title="Click Neura Cat for interactive chaos!"
            >
              <StealthImage
                src={hoodcat.image}
                alt="Neura Cat - Sentient AI Operative"
                fallbackType="hoodcat"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute top-4 left-4 bg-[#090D0B]/85 backdrop-blur-sm border border-[#1C2C22] px-2.5 py-1 rounded text-[11px] font-mono text-[#14F195]">
                CLICKS: {hoodCatClicks} (CLICK 3X FOR SECRET)
              </div>

              {catSpeech && (
                <div className="absolute bottom-4 left-4 right-4 bg-[#0D1511]/95 backdrop-blur-md border border-[#14F195] p-3 rounded-xl shadow-lg animate-in fade-in duration-200">
                  <span className="font-mono text-[10px] text-[#14F195] font-bold block">NEURA CAT AUDIO TRANSMISSION:</span>
                  <p className="text-xs font-sans text-white font-medium mt-0.5">"{catSpeech}"</p>
                </div>
              )}
            </div>

            {/* Details & Traits */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              <div>
                <blockquote className="border-l-2 border-[#E5C158] pl-4 italic text-[#EAE6D6] text-sm font-medium">
                  "{hoodcat.quote}"
                </blockquote>

                <p className="mt-4 text-xs sm:text-sm text-[#8EA196] leading-relaxed">
                  {hoodcat.bio}
                </p>
              </div>

              {/* Trait list */}
              <div className="space-y-3">
                <span className="font-mono text-xs text-[#6F8277] uppercase tracking-wider block">
                  CHAOS SPECIFICATIONS:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {hoodcat.traits.map((trait, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2 rounded bg-[#090E10] border border-[#15211A] text-xs font-medium text-[#C8D9D0]"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#E5C158] shrink-0" />
                      <span className="truncate">{trait}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Signature item */}
              <div className="p-3 rounded-lg bg-[#141812] border border-[#2D3321] text-xs">
                <span className="font-mono text-[10px] text-[#E5C158] uppercase tracking-wider block">
                  SIGNATURE ITEM:
                </span>
                <span className="text-white font-medium">{hoodcat.signatureGear}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
