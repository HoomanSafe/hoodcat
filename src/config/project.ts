/**
 * HoodCAT ($HCAT) — Project Configuration
 * Exclusively tailored for the Solana Blockchain & pump.fun ecosystem.
 * All project parameters, token metrics, and social channels reside here.
 */

export interface SocialLink {
  label: string;
  url: string;
  icon: 'pumpfun' | 'twitter' | 'telegram' | 'discord' | 'explorer' | 'dexscreener';
  available: boolean;
  highlight?: boolean;
}

export interface MemeItem {
  id: string;
  title: string;
  caption: string;
  image: string;
  hoodReaction: string;
  hoodCatReaction: string;
  tags: string[];
}

export interface CharacterProfile {
  name: string;
  alias: string;
  archetype: string;
  role: string;
  quote: string;
  traits: string[];
  signatureGear: string;
  image: string;
  bio: string;
}

export const PROJECT_CONFIG = {
  PROJECT_NAME: "HoodCAT",
  TAGLINE: "The Stealth AI & Meme Mascot on Solana",
  SUBTITLE: "Hood constructs the neural vectors. HoodCAT executes spontaneous pandemonium on pump.fun.",
  TICKER: "$HCAT",
  NETWORK: "Solana",
  LAUNCHPAD: "pump.fun",
  CONTRACT_ADDRESS: "TBD", // Update with Solana Mint Address upon deployment on pump.fun
  PUMPFUN_URL: "https://pump.fun", // Link directly to token once created e.g. https://pump.fun/coin/YOUR_MINT_ADDRESS
  DEXSCREENER_URL: "https://dexscreener.com/solana",
  SOLSCAN_URL: "https://solscan.io",
  TOTAL_SUPPLY: "1,000,000,000 $HCAT",
  DECIMALS: 6,
  TAX: "0% Buy / 0% Sell",
  LIQUIDITY: "Fair Launch via pump.fun bonding curve -> Auto Raydium Graduation",
  ECOSYSTEM: "Solana Ecosystem",
  STATUS: "Launching on pump.fun",
  DESCRIPTION: 
    "HoodCAT ($HCAT) is the sovereign stealth AI and meme universe built on Solana and launching via pump.fun. Guided by Hood, the shadowy digital mastermind, and powered by HoodCAT, his unhinged feline operative, the duo leverages Solana's 400ms transaction speed and zero-friction bonding curve to distribute pure internet alpha.",
  DISCLAIMER: 
    "HoodCAT ($HCAT) is an independent community meme and AI cultural initiative launching on Solana via pump.fun. Cryptographic assets involve market volatility. Always verify contract addresses before swapping.",

  STATS: [
    { label: "BLOCKCHAIN", value: "Solana (SPL)" },
    { label: "LAUNCHPAD", value: "pump.fun" },
    { label: "BONDING CURVE", value: "Fair Launch (No Pre-mine)" },
    { label: "FINALITY SPEED", value: "~400ms Instant" },
  ],

  SOCIAL_LINKS: [
    { label: "pump.fun", url: "https://pump.fun", icon: "pumpfun", available: true, highlight: true },
    { label: "X / Twitter", url: "https://x.com/neuracatfun", icon: "twitter", available: true },
    { label: "Telegram", url: "#", icon: "telegram", available: true },
    { label: "DexScreener", url: "https://dexscreener.com/solana", icon: "dexscreener", available: true },
    { label: "Solscan", url: "https://solscan.io", icon: "explorer", available: true },
  ] as SocialLink[],

  CHARACTERS: {
    HOOD: {
      name: "Hood",
      alias: "The Ghost Operator",
      archetype: "Modern Digital Stealth Mastermind",
      role: "Strategic AI Lead & Solana Node Architect",
      quote: "Why compute in daylight when the Solana ledger processes at 65,000 TPS?",
      traits: ["Calculated", "Deep Cover", "Neural Hacker", "Calm Under Fire"],
      signatureGear: "Zero-Trace Stealth Cowl & Sub-Visual Retinal Scanners",
      image: "/assets/hood-hero.webp",
      bio: "Hood is a modern, shadowy technologist operating on the high-speed rails of Solana. He doesn't wield medieval bows or neon superhero tropes—he works in quiet, dark code. Armed with proprietary AI models, he monitors pump.fun bonding curves and redistributes decentralized culture to the internet.",
    } as CharacterProfile,
    HOODCAT: {
      name: "HoodCat",
      alias: "Unit 0-Chaos",
      archetype: "Sentient Unpredictable Feline",
      role: "Chief of Meme Havoc & pump.fun Ape",
      quote: "You called it a bonding curve. I called it a ramp for my zoomies.",
      traits: ["Chaotic Neutral", "Zero Latency Paw", "Snack-Motivated", "Loves Green Candles"],
      signatureGear: "Micro Stealth Hood & Emerald Photon Collar",
      image: "/assets/hoodcat-hero.webp",
      bio: "Found deep inside a Solana validator datacenter, HoodCat refused to leave. Equipped with a matching miniature cowl and hyper-dilated emerald eyes, HoodCat possesses a terrifyingly high IQ paired with zero impulse control. He is the heartbeat of pure pump.fun meme mania.",
    } as CharacterProfile,
  },

  MEMES: [
    {
      id: "meme-01",
      title: "The Big Green Button Protocol",
      caption: "Hood planned a sophisticated liquidity routing model on Solana. HoodCat saw the green 'BUY' button on pump.fun.",
      image: "/assets/hoodcat-meme-01.webp",
      hoodReaction: "Hood: 'Did you just market-order the entire bonding curve...?'",
      hoodCatReaction: "HoodCat: 'It was green. Green means go fast. Next question.'",
      tags: ["Execution", "PumpFun", "ZeroRegrets"],
    },
    {
      id: "meme-02",
      title: "The Catnap Candle Spike",
      caption: "While HoodCat slept on the mechanical keyboard, a god-candle broke the chart on DexScreener.",
      image: "/assets/hoodcat-meme-02.webp",
      hoodReaction: "Hood: 'Do not wake him up. Solana validators are sweating.'",
      hoodCatReaction: "HoodCat: 'Zzz... purr... 100k SOL volume... zzz'",
      tags: ["Charts", "SleepAlpha", "SolanaCandles"],
    },
    {
      id: "meme-03",
      title: "Master Strategy vs. The Laser Dot",
      caption: "Hood wrote 40,000 lines of Solana SPL token analytics. HoodCat spotted a rogue green photon.",
      image: "/assets/hoodcat-meme-03.webp",
      hoodReaction: "Hood: 'Did you absorb the Raydium graduation target?'",
      hoodCatReaction: "HoodCat: 'THE GREEN DOT MUST BE APED.'",
      tags: ["Strategy", "Laser", "Distraction"],
    },
    {
      id: "meme-04",
      title: "Boss Level Smugness",
      caption: "HoodCat sporting dark shades, guarding the pump.fun King of the Hill crown with supreme unbothered posture.",
      image: "/assets/hoodcat-meme-04.webp",
      hoodReaction: "Hood: 'Where did you get those shades?'",
      hoodCatReaction: "HoodCat: 'King of the Hill privileges, human.'",
      tags: ["Swag", "Shades", "KingOfTheHill"],
    },
    {
      id: "meme-05",
      title: "Cool Operatives Never Look Back",
      caption: "Walking away from a glowing data cluster eruption without batting an eye after completing the bonding curve.",
      image: "/assets/hoodcat-meme-05.webp",
      hoodReaction: "Hood: 'Bonding curve 100%. Raydium migration engaged.'",
      hoodCatReaction: "HoodCat: 'Munching on decrypted tuna chips.'",
      tags: ["SlowMotion", "Badass", "CleanEscape"],
    },
    {
      id: "meme-06",
      title: "Error 404: Key Consumed",
      caption: "Phantom wallet private key was misplaced. Suspect was found licking green crumbs off whiskers.",
      image: "/assets/hoodcat-meme-06.webp",
      hoodReaction: "Hood: 'Tell me you didn't swallow the 12-word seed phrase.'",
      hoodCatReaction: "HoodCat: 'Crunchy. Tasted like Solana tokens.'",
      tags: ["SeedPhrase", "Cryptic", "Oops"],
    },
    {
      id: "meme-07",
      title: "The Keynote Mic Batting Incident",
      caption: "Hood delivers an earnest manifesto on decentralized AI on Solana. HoodCat tests gravity on the microphone.",
      image: "/assets/hoodcat-meme-07.webp",
      hoodReaction: "Hood: 'Ladies and gentlemen, our technical co-founder.'",
      hoodCatReaction: "HoodCat: '*smack* ...thud. Perfect.'",
      tags: ["Keynote", "Disruption", "MicDrop"],
    },
    {
      id: "meme-08",
      title: "We Run This Node",
      caption: "The final stare: one cold strategic mind, one manic unpredictable companion dominating pump.fun.",
      image: "/assets/hoodcat-meme-08.webp",
      hoodReaction: "Hood: 'Solana has never seen a stealth duo like this.'",
      hoodCatReaction: "HoodCat: 'And pump.fun will never be the same.'",
      tags: ["Standoff", "Partners", "Genesis"],
    },
  ] as MemeItem[],
};
