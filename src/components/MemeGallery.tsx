import React, { useState } from 'react';
import { PROJECT_CONFIG, MemeItem } from '../config/project';
import { StealthImage } from './StealthImage';
import { Sparkles, Maximize2, X, Download, Copy, Check, MessageSquare } from 'lucide-react';

export const MemeGallery: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [activeModalMeme, setActiveModalMeme] = useState<MemeItem | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const tags = ['all', 'Execution', 'Charts', 'Strategy', 'Swag', 'Disruption'];

  const filteredMemes = selectedTag === 'all'
    ? PROJECT_CONFIG.MEMES
    : PROJECT_CONFIG.MEMES.filter((m) => m.tags.includes(selectedTag));

  const handleCopy = (meme: MemeItem) => {
    const text = `"${meme.title}"\n${meme.caption}\n${meme.hoodReaction}\n${meme.hoodCatReaction}\n#HoodCAT #HCAT on Robinhood Blockchain`;
    navigator.clipboard.writeText(text);
    setCopiedId(meme.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="memes" className="py-24 bg-[#090C0E] border-t border-[#151D18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111A15] border border-[#1E3024] text-xs font-mono text-[#00E676] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>OFFICIAL MEME ARCHIVE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-display text-white uppercase tracking-tight">
              The Meme Vault
            </h2>
            <p className="mt-2 text-sm text-[#8EA296] max-w-xl">
              Original graphic scenes documenting Hood's meticulous plans versus HoodCat's continuous sabotage.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
                  selectedTag === tag
                    ? 'bg-[#00E676] text-[#090B0D] font-bold shadow-[0_0_12px_rgba(0,230,118,0.25)]'
                    : 'bg-[#111614] border border-[#1C2921] text-[#A2B6AB] hover:text-white hover:bg-[#16201B]'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Meme Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredMemes.map((meme) => (
            <div
              key={meme.id}
              className="rounded-2xl bg-[#0D1215] border border-[#1A261F] hover:border-[#00E676]/40 transition-all duration-300 overflow-hidden flex flex-col group shadow-lg"
            >
              {/* Image with zoom trigger */}
              <div
                className="relative aspect-square overflow-hidden bg-[#070A0C] cursor-pointer"
                onClick={() => setActiveModalMeme(meme)}
              >
                <StealthImage
                  src={meme.image}
                  alt={meme.title}
                  fallbackType="meme"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <span className="p-2 rounded-full bg-[#00E676] text-[#090B0D]">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>
                <div className="absolute top-3 left-3 bg-[#090D0B]/85 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-mono text-[#00E676] border border-[#1C2C22]">
                  #{meme.id.replace('meme-', '')}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h4 className="font-display font-bold text-base text-white group-hover:text-[#00E676] transition-colors">
                    {meme.title}
                  </h4>
                  <p className="text-xs text-[#8A9E92] mt-1 line-clamp-2">
                    {meme.caption}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#17221B] flex items-center justify-between">
                  <div className="flex gap-1.5 flex-wrap">
                    {meme.tags.map((t) => (
                      <span key={t} className="text-[10px] font-mono text-[#576D61]">
                        #{t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => handleCopy(meme)}
                    className="p-1.5 rounded bg-[#101713] hover:bg-[#16231C] text-[#93A79C] hover:text-[#00E676] transition-colors"
                    title="Copy Meme Text"
                  >
                    {copiedId === meme.id ? <Check className="w-3.5 h-3.5 text-[#00E676]" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeModalMeme && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="max-w-3xl w-full bg-[#0D1215] border border-[#203227] rounded-2xl overflow-hidden shadow-2xl relative">
            <button
              onClick={() => setActiveModalMeme(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#090D0B]/80 text-[#ECEFF1] hover:text-[#00E676] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="aspect-square bg-black flex items-center justify-center">
                <StealthImage
                  src={activeModalMeme.image}
                  alt={activeModalMeme.title}
                  fallbackType="meme"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#00E676] font-bold">
                    HOODCAT VAULT ARCHIVE
                  </span>
                  <h3 className="text-2xl font-display font-black text-white mt-1">
                    {activeModalMeme.title}
                  </h3>
                  <p className="text-xs text-[#9BB0A4] mt-2 leading-relaxed">
                    {activeModalMeme.caption}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#080B0D] border border-[#18261E] space-y-2 text-xs font-mono">
                  <div className="text-[#38BDF8] font-semibold">{activeModalMeme.hoodReaction}</div>
                  <div className="text-[#E5C158] font-semibold">{activeModalMeme.hoodCatReaction}</div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={() => handleCopy(activeModalMeme)}
                    className="flex-1 py-2.5 rounded-lg bg-[#00E676] hover:bg-[#00c864] text-[#090B0D] font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                  >
                    {copiedId === activeModalMeme.id ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedId === activeModalMeme.id ? 'Copied to Clipboard' : 'Copy Dialogue'}</span>
                  </button>
                  <a
                    href={activeModalMeme.image}
                    download={`${activeModalMeme.id}.webp`}
                    className="p-2.5 rounded-lg bg-[#121915] border border-[#213227] text-white hover:text-[#00E676] transition-colors"
                    title="Download Meme File"
                  >
                    <Download className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
