import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Send, Sparkles, RefreshCw, Cpu, CheckCircle, ShieldAlert, Zap, ExternalLink } from 'lucide-react';
import { PROJECT_CONFIG } from '../config/project';
import { StealthImage } from './StealthImage';
import { PumpFunIcon, SolanaIcon } from './PumpFunIcon';

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
      text: 'HOOD_SOLANA_OS v4.2 initialized. Connected to Solana cluster listener & pump.fun bonding curve.',
      timestamp: '00:01:14',
    },
    {
      id: 'init-2',
      sender: 'hood',
      text: "Operator authenticated. Welcome to HoodCAT ($HCAT) stealth terminal. HoodCat is currently monitoring the pump.fun chart.",
      timestamp: '00:01:15',
    },
    {
      id: 'init-3',
      sender: 'hoodcat',
      text: "*swipes paw across screen* APE THE GREEN CANDLE OR I CHEW THE FIBER OPTIC CABLE.",
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
    { label: 'pump.fun status', cmd: 'pumpfun-status' },
    { label: 'solana tps', cmd: 'solana-tps' },
    { label: 'feed hoodcat', cmd: 'feed-cat' },
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
          text: `[MEME TRANSMITTED] HoodCat: "You demanded a meme? Behold '${randomMeme.title}'! Freshly minted from our stealth cache."`,
          timestamp: new Date().toLocaleTimeString(),
          memePreview: randomMeme.image,
        };
      } else if (cmd.includes('hood-strategy') || cmd.includes('strategy')) {
        responseLog = {
          id: `resp-${Date.now()}`,
          sender: 'hood',
          text: `Hood: "Master Directive: Propel HoodCAT ($HCAT) through the pump.fun bonding curve and achieve 100% Raydium graduation. 1) Deploy high-throughput memes. 2) Maintain sub-second market reaction. 3) Keep HoodCat away from the emergency power strip."`,
          timestamp: new Date().toLocaleTimeString(),
        };
      } else if (cmd.includes('pump') || cmd.includes('bonding')) {
        responseLog = {
          id: `resp-${Date.now()}`,
          sender: 'hoodcat',
          text: `HoodCat: "PUMP.FUN STATUS: Green candles detected! Bonding curve locked in fair mode. Next stop: King of the Hill crown!"`,
          timestamp: new Date().toLocaleTimeString(),
        };
      } else if (cmd.includes('solana') || cmd.includes('tps') || cmd.includes('chain')) {
        responseLog = {
          id: `resp-${Date.now()}`,
          sender: 'system',
          text: `SOLANA CLUSTER TELEMETRY: Slot height synced. Average block latency: ~400ms. Cluster TPS: 2,860. Gas cost: <0.000005 SOL ($0.0004). Status: PEAK EFFICIENCY.`,
          timestamp: new Date().toLocaleTimeString(),
        };
      } else if (cmd.includes('feed') || cmd.includes('tuna') || cmd.includes('treat')) {
        responseLog = {
          id: `resp-${Date.now()}`,
          sender: 'hoodcat',
          text: `HoodCat: "*NOM NOM* Decrypted tuna packet devoured. Threat level lowered to: 'Purring but will ape again'.`,
          timestamp: new Date().toLocaleTimeString(),
        };
      } else if (cmd.includes('help')) {
        responseLog = {
          id: `resp-${Date.now()}`,
          sender: 'hood',
          text: `OPERATIONAL COMMANDS: 'generate-meme', 'hood-strategy', 'pumpfun-status', 'solana-tps', 'feed-cat', 'clear'.`,
          timestamp: new Date().toLocaleTimeString(),
        };
      } else {
        responseLog = {
          id: `resp-${Date.now()}`,
          sender: 'hoodcat',
          text: `HoodCat: "Instruction '${rawCmd}' not found in the Solana handbook. Try clicking the quick command buttons below."`,
          timestamp: new Date().toLocaleTimeString(),
        };
      }

      setLogs((prev) => [...prev, responseLog]);
      setIsProcessing(false);
    }, 450);
  };

  return (
    <section id="ai-terminal" className="py-24 bg-[#080A0E] border-t border-[#141C1A] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Terminal Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0F141C] border border-[#20322B] text-xs font-mono text-[#14F195] mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>SOLANA NODE CONSOLE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight uppercase">
            HoodCat AI Console
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#829690]">
            Simulated Solana command interface. Monitor cluster telemetry or trigger HoodCat meme executions.
          </p>
        </div>

        {/* Tactical Terminal Frame */}
        <div className="rounded-2xl bg-[#090C11] border border-[#1A2824] shadow-[0_20px_50px_rgba(0,0,0,0.85)] overflow-hidden flex flex-col h-[520px]">
          
          {/* Terminal Window Bar */}
          <div className="px-4 py-3 bg-[#0E131A] border-b border-[#182521] flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#EF4444]/80" />
              <span className="w-3 h-3 rounded-full bg-[#F59E0B]/80" />
              <span className="w-3 h-3 rounded-full bg-[#10B981]/80" />
              <span className="ml-2 text-[#7E938D] hidden sm:inline">bash — hoodcat-node@solana-pumpfun</span>
            </div>
            <div className="flex items-center gap-2 text-[#14F195]">
              <span className="w-2 h-2 rounded-full bg-[#14F195] animate-pulse" />
              <span>SOLANA MAINNET SYNCED</span>
            </div>
          </div>

          {/* Terminal Output Log Area */}
          <div className="flex-1 p-4 sm:p-6 overflow-y-auto font-mono text-xs sm:text-sm space-y-4">
            {logs.map((log) => (
              <div key={log.id} className="space-y-1">
                <div className="flex items-center gap-2 text-[11px] text-[#556963]">
                  <span>[{log.timestamp}]</span>
                  {log.sender === 'user' && <span className="text-[#E2ECE8] font-bold">OPERATOR &gt;</span>}
                  {log.sender === 'system' && <span className="text-[#9945FF] font-bold">SOLANA_CORE &gt;</span>}
                  {log.sender === 'hood' && <span className="text-[#38BDF8] font-bold">HOOD [STRATEGY] &gt;</span>}
                  {log.sender === 'hoodcat' && <span className="text-[#14F195] font-bold">HOODCAT [CHAOS] &gt;</span>}
                </div>

                <div
                  className={`p-3 rounded-lg text-xs leading-relaxed ${
                    log.sender === 'user'
                      ? 'bg-[#121A22] text-white border border-[#1C2C3A]'
                      : log.sender === 'hoodcat'
                      ? 'bg-[#0E1A16] text-[#E0F8EC] border border-[#183628]'
                      : log.sender === 'hood'
                      ? 'bg-[#0E1620] text-[#CBE3F3] border border-[#162B3B]'
                      : 'bg-[#12101E] text-[#D8C7F8] border border-[#261E3D]'
                  }`}
                >
                  {log.text}

                  {/* If log includes meme preview */}
                  {log.memePreview && (
                    <div className="mt-3 max-w-xs rounded-lg overflow-hidden border border-[#2B3B34]">
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
              <div className="flex items-center gap-2 text-xs font-mono text-[#14F195] animate-pulse">
                <span>HoodCat is executing chaotic calculations across Solana nodes...</span>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Quick Command Suggestions */}
          <div className="px-4 py-2 bg-[#0C1117] border-t border-[#15231F] flex items-center gap-2 overflow-x-auto">
            <span className="text-[10px] font-mono text-[#6A7F78] shrink-0 uppercase">Presets:</span>
            {quickCommands.map((q) => (
              <button
                key={q.cmd}
                onClick={() => handleCommand(q.cmd)}
                className="px-2.5 py-1 rounded bg-[#10171F] hover:bg-[#16222C] border border-[#1B2B26] text-[11px] font-mono text-[#A8BEB7] hover:text-[#14F195] whitespace-nowrap transition-colors"
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
            className="p-3 bg-[#0B0F15] border-t border-[#182723] flex items-center gap-2"
          >
            <div className="text-[#14F195] font-mono text-sm pl-2 font-bold">&gt;</div>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Type command ('generate meme', 'pump.fun status', 'solana tps')..."
              className="flex-1 bg-transparent border-none outline-none font-mono text-xs sm:text-sm text-white placeholder-[#4E625B] focus:ring-0"
            />
            <button
              type="submit"
              className="p-2 rounded-lg bg-[#14F195] hover:bg-[#10d482] text-[#080A0D] transition-colors"
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
