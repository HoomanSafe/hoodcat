import React, { useState } from 'react';
import { PROJECT_CONFIG, MemeItem } from '../config/project';
import { StealthImage } from './StealthImage';
import { Sparkles, RefreshCw, Download, Copy, Check, Terminal, Wand2 } from 'lucide-react';

export const MemeGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [customTopText, setCustomTopText] = useState('');
  const [customBottomText, setCustomBottomText] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentMeme, setCurrentMeme] = useState<MemeItem>(PROJECT_CONFIG.MEMES[0]);
  const [copied, setCopied] = useState(false);

  const presetPrompts = [
    "HoodCat discovers the big red button",
    "Hood calculates the Robinhood block time",
    "4,200% candle while the cat was asleep",
    "Staring contest with decentralized AI",
  ];

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      // Pick random meme or one matching prompt
      const randomIndex = Math.floor(Math.random() * PROJECT_CONFIG.MEMES.length);
      setCurrentMeme(PROJECT_CONFIG.MEMES[randomIndex]);
      setIsGenerating(false);
    }, 600);
  };

  const handleCopyCaption = () => {
    const textToCopy = `"${currentMeme.title}" - ${currentMeme.caption}\n${currentMeme.hoodReaction}\n${currentMeme.hoodCatReaction}\n#HoodCAT #HCAT #Solana #PumpFun`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 bg-[#0A0D10] border-t border-[#141C17] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111A15] border border-[#1E3024] text-xs font-mono text-[#00E676] mb-3">
            <Wand2 className="w-3.5 h-3.5" />
            <span>LOCAL MEME COMPILER</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight uppercase">
            HoodCAT Meme Lab
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#82968B]">
            Zero external APIs required. Fully powered by HoodCat's chaotic local asset matrix.
          </p>
        </div>

        {/* Generator Workstation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Panel (Left) */}
          <div className="lg:col-span-5 rounded-2xl bg-[#0D1216] border border-[#1C2922] p-6 space-y-6">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#A0B4AA] mb-2 font-semibold">
                Describe Your Meme Concept:
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="e.g. HoodCat ignores instructions during peak volume..."
                  className="w-full px-4 py-3 rounded-xl bg-[#080B0D] border border-[#1F2D25] text-sm text-white placeholder-[#4E6256] focus:outline-none focus:border-[#00E676] transition-colors"
                />
              </div>
            </div>

            {/* Quick Prompt Starters */}
            <div>
              <span className="text-[11px] font-mono text-[#62776B] uppercase tracking-wider block mb-2">
                Quick Starters:
              </span>
              <div className="flex flex-wrap gap-2">
                {presetPrompts.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setPrompt(p);
                      handleGenerate();
                    }}
                    className="text-xs px-3 py-1.5 rounded-lg bg-[#111714] hover:bg-[#16221C] border border-[#1D2C23] text-[#A6BAAE] hover:text-[#00E676] text-left transition-colors"
                  >
                    "{p}"
                  </button>
                ))}
              </div>
            </div>

            {/* Optional Custom Text Overlays */}
            <div className="space-y-3 pt-2 border-t border-[#18231D]">
              <span className="text-[11px] font-mono text-[#62776B] uppercase tracking-wider block">
                Custom Text Overlay (Optional):
              </span>
              <input
                type="text"
                value={customTopText}
                onChange={(e) => setCustomTopText(e.target.value)}
                placeholder="TOP CAPTION (e.g. ME EXPLAINING ROBINHOOD BLOCKCHAIN)"
                className="w-full px-3 py-2 rounded-lg bg-[#080B0D] border border-[#1F2D25] text-xs text-white placeholder-[#4E6256] focus:outline-none focus:border-[#00E676]"
              />
              <input
                type="text"
                value={customBottomText}
                onChange={(e) => setCustomBottomText(e.target.value)}
                placeholder="BOTTOM CAPTION (e.g. HOODCAT PRESSING EXECUTE)"
                className="w-full px-3 py-2 rounded-lg bg-[#080B0D] border border-[#1F2D25] text-xs text-white placeholder-[#4E6256] focus:outline-none focus:border-[#00E676]"
              />
            </div>

            {/* Generate Action Button */}
            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full py-3.5 rounded-xl bg-[#00E676] hover:bg-[#00c864] text-[#090B0D] font-display font-bold text-sm uppercase tracking-wider transition-all transform hover:-translate-y-0.5 shadow-[0_0_20px_rgba(0,230,118,0.3)] flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${isGenerating ? 'animate-spin' : ''}`} />
              <span>{isGenerating ? 'Synthesizing Meme Vector...' : 'Generate Meme'}</span>
            </button>
          </div>

          {/* Generated Result Showcase (Right) */}
          <div className="lg:col-span-7 rounded-2xl bg-[#0D1216] border border-[#1C2922] p-6 flex flex-col justify-between">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#18231D] text-xs font-mono">
              <span className="text-[#00E676] font-semibold">
                RENDERED ARTIFACT: {currentMeme.id.toUpperCase()}
              </span>
              <span className="text-[#788E81]">100% LOCAL ASSET ARCHIVE</span>
            </div>

            {/* Meme Display Box with Optional Overlay */}
            <div className="relative rounded-xl overflow-hidden aspect-square max-h-[460px] bg-[#070A0C] border border-[#1F2D25] flex items-center justify-center">
              <StealthImage
                src={currentMeme.image}
                alt={currentMeme.title}
                fallbackType="meme"
                className="w-full h-full object-contain"
              />

              {/* Dynamic Top Text */}
              {customTopText && (
                <div className="absolute top-4 inset-x-4 text-center pointer-events-none">
                  <span className="font-display font-black text-xl sm:text-2xl text-white uppercase tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] stroke-black">
                    {customTopText}
                  </span>
                </div>
              )}

              {/* Dynamic Bottom Text */}
              {customBottomText && (
                <div className="absolute bottom-4 inset-x-4 text-center pointer-events-none">
                  <span className="font-display font-black text-xl sm:text-2xl text-white uppercase tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] stroke-black">
                    {customBottomText}
                  </span>
                </div>
              )}
            </div>

            {/* Meme Meta info & Dialogue */}
            <div className="mt-4 pt-4 border-t border-[#18231D] space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="text-lg font-display font-bold text-white">
                    {currentMeme.title}
                  </h4>
                  <p className="text-xs text-[#95A89E] mt-0.5">
                    {currentMeme.caption}
                  </p>
                </div>

                <button
                  onClick={handleCopyCaption}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111A15] hover:bg-[#16241D] border border-[#1F2F25] text-xs font-mono text-[#D0E0D6] shrink-0 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[#00E676]" /> : <Copy className="w-3.5 h-3.5 text-[#82968B]" />}
                  <span>{copied ? 'Copied' : 'Copy Text'}</span>
                </button>
              </div>

              {/* Dialogue Box */}
              <div className="p-3 rounded-lg bg-[#080B0D] border border-[#16201A] font-mono text-xs space-y-1">
                <div className="text-[#38BDF8]">{currentMeme.hoodReaction}</div>
                <div className="text-[#E5C158]">{currentMeme.hoodCatReaction}</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
