import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Send, Sparkles, RefreshCw, Cpu, CheckCircle, ShieldAlert, Zap } from 'lucide-react';
import { PROJECT_CONFIG } from '../config/project';
import { StealthImage } from './StealthImage';

interface TerminalLog {
  id: string;
  sender: 'user' | 'system' | 'hood' | 'hoodcat';
  text: string;
  timestamp: string;
  memePreview?: string;
}

export const AiTerminal: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [logs, setLogs] = useState<TerminalLog[]>([
    {
      id: 'init-1',
      sender: 'system',
      text: 'HOOD_NODE_OS v2.4 initialized. Connected to Robinhood Blockchain local stealth listener.',
      timestamp: '00:01:14',
    },
    {
      id: 'init-2',
      sender: 'hood',
      text: "Operator authenticated. Welcome to HoodCAT ($HCAT) terminal. HoodCat is currently lurking on the main console.",
      timestamp: '00:01:15',
    },
    {
      id: 'init-3',
      sender: 'hoodcat',
      text: "*paws at keyboard* TYPE SOMETHING OR I PRESS THE RED BUTTON.",
      timestamp: '00:01:17',
    },
  ]);

  const [isProcessing, setIsProcessing] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const quickCommands = [
    { label: 'generate meme', cmd: 'generate-meme' },
    { label: 'hood strategy', cmd: 'hood-strategy' },
    { label: 'hoodcat status', cmd: 'hoodcat-status' },
    { label: 'chain telemetry', cmd: 'chain-status' },
    { label: 'tuna treats', cmd: 'feed-cat' },
    { label: 'clear', cmd: 'clear' },
  ];

  const handleCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    const time = new Date().toLocaleTimeString();

    // Add user command
    const userLog: TerminalLog = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: rawCmd,
      timestamp: time,
    };

    if (cmd === 'clear') {
      setLogs([]);
      setInputVal('');
      return;
    }

    setLogs((prev) => [...prev, userLog]);
    setInputVal('');
    setIsProcessing(true);

    setTimeout(() => {
      let responseLog: TerminalLog;

      if (cmd.includes('meme') || cmd === 'generate-meme') {
        const randomMeme = PROJECT_CONFIG.MEMES[Math.floor(Math.random() * PROJECT_CONFIG.MEMES.length)];
        responseLog = {
          id: `resp-${Date.now()}`,
          sender: 'hoodcat',
          text: `[MEME TRANSMITTED] HoodCat: "You demanded a meme? Witness '${randomMeme.title}'! Straight from the encrypted memory cache."`,
          timestamp: new Date().toLocaleTimeString(),
          memePreview: randomMeme.image,
        };
      } else if (cmd.includes('hood-strategy') || cmd.includes('strategy')) {
        responseLog = {
          id: `resp-${Date.now()}`,
          sender: 'hood',
          text: `Hood: "Objective: Establish HoodCAT ($HCAT) as the sovereign meme titan on Robinhood Blockchain. Steps: 1) Deploy humor without slippage. 2) Outsmart legacy tokens. 3) Keep HoodCat away from the router power plug."`,
          timestamp: new Date().toLocaleTimeString(),
        };
      } else if (cmd.includes('hoodcat') || cmd.includes('status')) {
        responseLog = {
          id: `resp-${Date.now()}`,
          sender: 'hoodcat',
          text: `HoodCat: "Status: 99.8% mischief, 0.2% nap time. Heart rate steady at 180bpm. Ready to jump on keyboard at critical moments."`,
          timestamp: new Date().toLocaleTimeString(),
        };
      } else if (cmd.includes('chain') || cmd.includes('robinhood')) {
        responseLog = {
          id: `resp-${Date.now()}`,
          sender: 'system',
          text: `SYSTEM TELEMETRY: Ecosystem verified -> [ROBINHOOD BLOCKCHAIN ONLY]. No cross-chain contaminants detected. Latency: <12ms. Status: Optimal.`,
          timestamp: new Date().toLocaleTimeString(),
        };
      } else if (cmd.includes('feed') || cmd.includes('tuna') || cmd.includes('treat')) {
        responseLog = {
          id: `resp-${Date.now()}`,
          sender: 'hoodcat',
          text: `HoodCat: "*CHOMP* Decrypted salmon packet consumed. Threat level temporarily reduced from Extreme to Moderate."`,
          timestamp: new Date().toLocaleTimeString(),
        };
      } else if (cmd.includes('help')) {
        responseLog = {
          id: `resp-${Date.now()}`,
          sender: 'hood',
          text: `AVAILABLE OPERATIONS: 'generate-meme', 'hood-strategy', 'hoodcat-status', 'chain-status', 'feed-cat', 'clear'.`,
          timestamp: new Date().toLocaleTimeString(),
        };
      } else {
        responseLog = {
          id: `resp-${Date.now()}`,
          sender: 'hoodcat',
          text: `HoodCat: "Command '${rawCmd}' not recognized. I chewed the syntax manual. Try clicking the quick buttons below."`,
          timestamp: new Date().toLocaleTimeString(),
        };
      }

      setLogs((prev) => [...prev, responseLog]);
      setIsProcessing(false);
    }, 450);
  };

  return (
    <section id="ai-terminal" className="py-24 bg-[#080B0D] border-t border-[#141C17] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Terminal Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111A15] border border-[#1E3024] text-xs font-mono text-[#00E676] mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>SIMULATED COMMAND INTERFACE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight uppercase">
            HoodCat AI Console
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#82968B]">
            Interactive local node console. Type instructions or trigger direct commands below.
          </p>
        </div>

        {/* Tactical Terminal Frame */}
        <div className="rounded-2xl bg-[#090D0F] border border-[#1A261F] shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col h-[520px]">
          
          {/* Terminal Window Bar */}
          <div className="px-4 py-3 bg-[#0E1418] border-b border-[#18231C] flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#EF4444]/80" />
              <span className="w-3 h-3 rounded-full bg-[#F59E0B]/80" />
              <span className="w-3 h-3 rounded-full bg-[#10B981]/80" />
              <span className="ml-2 text-[#7E9388] hidden sm:inline">bash — memeai-node@robinhood-chain</span>
            </div>
            <div className="flex items-center gap-2 text-[#00E676]">
              <span className="w-2 h-2 rounded-full bg-[#00E676] animate-pulse" />
              <span>LIVE STEALTH PROTOCOL</span>
            </div>
          </div>

          {/* Terminal Output Log Area */}
          <div className="flex-1 p-4 sm:p-6 overflow-y-auto font-mono text-xs sm:text-sm space-y-4">
            {logs.map((log) => (
              <div key={log.id} className="space-y-1">
                <div className="flex items-center gap-2 text-[11px] text-[#55695E]">
                  <span>[{log.timestamp}]</span>
                  {log.sender === 'user' && <span className="text-[#E2ECE6] font-bold">OPERATOR &gt;</span>}
                  {log.sender === 'system' && <span className="text-[#00E676] font-bold">NODE_SYS &gt;</span>}
                  {log.sender === 'hood' && <span className="text-[#38BDF8] font-bold">HOOD [LEAD] &gt;</span>}
                  {log.sender === 'hoodcat' && <span className="text-[#E5C158] font-bold">HOODCAT [CHAOS] &gt;</span>}
                </div>

                <div
                  className={`p-2.5 rounded-lg text-xs leading-relaxed ${
                    log.sender === 'user'
                      ? 'bg-[#121A1E] text-white border border-[#1C2C34]'
                      : log.sender === 'hoodcat'
                      ? 'bg-[#181912] text-[#EFEAD8] border border-[#2B2A18]'
                      : log.sender === 'hood'
                      ? 'bg-[#0E161C] text-[#CBE3F3] border border-[#162B36]'
                      : 'bg-[#0B1310] text-[#93C8A9] border border-[#15291E]'
                  }`}
                >
                  {log.text}

                  {/* If log includes meme preview */}
                  {log.memePreview && (
                    <div className="mt-3 max-w-xs rounded-lg overflow-hidden border border-[#2B3B30]">
                      <StealthImage
                        src={log.memePreview}
                        alt="Terminal Meme Preview"
                        fallbackType="meme"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isProcessing && (
              <div className="flex items-center gap-2 text-xs font-mono text-[#00E676] animate-pulse">
                <span>HoodCat is executing chaotic calculations...</span>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Quick Command Suggestions */}
          <div className="px-4 py-2 bg-[#0C1215] border-t border-[#152119] flex items-center gap-2 overflow-x-auto">
            <span className="text-[10px] font-mono text-[#6A7F73] shrink-0 uppercase">Presets:</span>
            {quickCommands.map((q) => (
              <button
                key={q.cmd}
                onClick={() => handleCommand(q.cmd)}
                className="px-2.5 py-1 rounded bg-[#101814] hover:bg-[#18261E] border border-[#1B2B21] text-[11px] font-mono text-[#A8BEB2] hover:text-[#00E676] whitespace-nowrap transition-colors"
              >
                ${q.label}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleCommand(inputVal);
            }}
            className="p-3 bg-[#0B1013] border-t border-[#18251D] flex items-center gap-2"
          >
            <div className="text-[#00E676] font-mono text-sm pl-2 font-bold">&gt;</div>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Type command ('generate meme', 'hood strategy', 'feed cat')..."
              className="flex-1 bg-transparent border-none outline-none font-mono text-xs sm:text-sm text-white placeholder-[#4E6256] focus:ring-0"
            />
            <button
              type="submit"
              className="p-2 rounded-lg bg-[#00E676] hover:bg-[#00c864] text-[#090B0D] transition-colors"
              aria-label="Send command"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>

      </div>
    </section>
  );
};
