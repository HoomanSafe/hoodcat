/**
 * MEMEAI — Project Configuration
 * Exclusively tailored for the Robinhood Blockchain ecosystem.
 * All project parameters, token metrics, and social channels reside here.
 */

export interface SocialLink {
  label: string;
  url: string;
  icon: 'twitter' | 'telegram' | 'discord' | 'explorer' | 'github' | 'docs';
  available: boolean;
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
  TAGLINE: "The Stealth AI & Meme Duo on Robinhood Blockchain",
  SUBTITLE: "Hood constructs the neural vectors. HoodCAT executes spontaneous pandemonium.",
  TICKER: "$HCAT",
  NETWORK: "Robinhood Blockchain",
  CONTRACT_ADDRESS: "[ADD VERIFIED INFORMATION]", // Configurable: Update upon official deployment on Robinhood Blockchain
  TOTAL_SUPPLY: "1,000,000,000 $HCAT",
  ECOSYSTEM: "Robinhood Blockchain Native",
  STATUS: "Stealth Genesis Stage",
  DESCRIPTION: 
    "HoodCAT ($HCAT) is the premier independent AI and meme universe engineered exclusively for the Robinhood Blockchain. Led by Hood, an enigmatic digital operative, and HoodCAT, his utterly chaotic feline sidekick, the project merges covert algorithmic intelligence with high-frequency internet meme culture.",
  DISCLAIMER: 
    "HoodCAT ($HCAT) is an independent, community-driven meme and AI creative universe designed for the Robinhood Blockchain ecosystem. HoodCAT is not officially affiliated with, operated by, sponsored by, or endorsed by Robinhood Markets, Inc. or any of its subsidiaries.",

  
  STATS: [
    { label: "TARGET CHAIN", value: "Robinhood Blockchain" },
    { label: "OPERATIVES", value: "2 (Hood + HoodCat)" },
    { label: "AI PREDICTABILITY", value: "0.04% (HoodCat effect)" },
    { label: "MEME VELOCITY", value: "Instantaneous" },
  ],

  SOCIAL_LINKS: [
    { label: "X / Twitter", url: "#", icon: "twitter", available: true },
    { label: "Telegram", url: "#", icon: "telegram", available: true },
    { label: "Discord", url: "#", icon: "discord", available: true },
    { label: "Robinhood Chain Explorer", url: "#", icon: "explorer", available: false },
  ] as SocialLink[],

  CHARACTERS: {
    HOOD: {
      name: "Hood",
      alias: "The Ghost Operator",
      archetype: "Modern Digital Stealth Mastermind",
      role: "Strategic AI Lead & Node Architect",
      quote: "Why compute in daylight when the void delivers higher throughput?",
      traits: ["Calculated", "Deep Cover", "Neural Hacker", "Calm Under Fire"],
      signatureGear: "Zero-Trace Stealth Cowl & Sub-Visual Retinal Scanners",
      image: "/assets/hood-hero.webp",
      bio: "Hood is a modern, shadowy technologist operating on the fringes of the Robinhood Blockchain. He doesn't wield medieval bows or neon superhero tropes—he works in quiet, dark code. Armed with proprietary AI models, he redistributes humor, intelligence, and decentralized culture to the internet.",
    } as CharacterProfile,
    HOODCAT: {
      name: "HoodCat",
      alias: "Unit 0-Chaos",
      archetype: "Sentient Unpredictable Feline",
      role: "Chief of Meme Havoc & Button Masher",
      quote: "You called it a strategic plan. I called it a scratching post.",
      traits: ["Chaotic Neutral", "Zero Latency Paw", "Snack-Motivated", "Loves Red Buttons"],
      signatureGear: "Micro Stealth Hood & Emerald Photon Collar",
      image: "/assets/hoodcat-hero.webp",
      bio: "Found deep inside a server vent on the Robinhood Blockchain node cluster, HoodCat refused to leave. Equipped with a matching miniature cowl and hyper-dilated emerald eyes, HoodCat possesses a terrifyingly high IQ paired with zero impulse control. He is the heartbeat of pure internet meme magic.",
    } as CharacterProfile,
  },

  MEMES: [
    {
      id: "meme-01",
      title: "The Big Red Button Protocol",
      caption: "Hood planned a 48-hour zero-slippage liquidity routing. HoodCat saw a glowing button.",
      image: "/assets/hoodcat-meme-01.webp",
      hoodReaction: "Hood: 'That wasn't the testnet, was it...?'",
      hoodCatReaction: "HoodCat: 'It was shiny. Next question.'",
      tags: ["Execution", "Terminal", "Zero Regrets"],
    },
    {
      id: "meme-02",
      title: "The Catnap Candle Spike",
      caption: "While HoodCat slept on the mechanical keyboard, a +4,200% Robinhood Blockchain candle occurred.",
      image: "/assets/hoodcat-meme-02.webp",
      hoodReaction: "Hood: 'Do not wake him up. Nobody move.'",
      hoodCatReaction: "HoodCat: 'Zzz... purr... moon... zzz'",
      tags: ["Charts", "SleepAlpha", "GreenCandles"],
    },
    {
      id: "meme-03",
      title: "Master Strategy vs. The Laser Dot",
      caption: "Hood wrote 40,000 lines of algorithmic documentation. HoodCat spotted a rogue green photon.",
      image: "/assets/hoodcat-meme-03.webp",
      hoodReaction: "Hood: 'Did you absorb the tokenomic model?'",
      hoodCatReaction: "HoodCat: 'THE DOT MUST DIE.'",
      tags: ["Strategy", "Laser", "Distraction"],
    },
    {
      id: "meme-04",
      title: "Boss Level Smugness",
      caption: "HoodCat sporting dark shades, guarding the vault with supreme unbothered posture.",
      image: "/assets/hoodcat-meme-04.webp",
      hoodReaction: "Hood: 'Where did you get those shades?'",
      hoodCatReaction: "HoodCat: 'Borrowed. Permanently.'",
      tags: ["Swag", "Shades", "VaultKeeper"],
    },
    {
      id: "meme-05",
      title: "Cool Operatives Never Look Back",
      caption: "Walking away from a glowing data cluster eruption without batting an eye.",
      image: "/assets/hoodcat-meme-05.webp",
      hoodReaction: "Hood: 'Clean breach. Zero logs left behind.'",
      hoodCatReaction: "HoodCat: 'Munching on decrypted tuna chips.'",
      tags: ["SlowMotion", "Badass", "CleanEscape"],
    },
    {
      id: "meme-06",
      title: "Error 404: Key Consumed",
      caption: "Private encryption key was misplaced. Suspect was found licking green crumbs off whiskers.",
      image: "/assets/hoodcat-meme-06.webp",
      hoodReaction: "Hood: 'Tell me you didn't swallow the seed phrase.'",
      hoodCatReaction: "HoodCat: 'Crunchy. Tasted like 24 words.'",
      tags: ["SeedPhrase", "Cryptic", "Oops"],
    },
    {
      id: "meme-07",
      title: "The Keynote Mic Batting Incident",
      caption: "Hood delivers an earnest manifesto on decentralized AI. HoodCat tests gravity on the microphone.",
      image: "/assets/hoodcat-meme-07.webp",
      hoodReaction: "Hood: 'Ladies and gentlemen, our technical co-founder.'",
      hoodCatReaction: "HoodCat: '*smack* ...thud. Perfect.'",
      tags: ["Keynote", "Disruption", "MicDrop"],
    },
    {
      id: "meme-08",
      title: "We Run This Node",
      caption: "The final stare: one cold strategic mind, one manic unpredictable companion.",
      image: "/assets/hoodcat-meme-08.webp",
      hoodReaction: "Hood: 'The Robinhood Blockchain has never seen a duo like this.'",
      hoodCatReaction: "HoodCat: 'And they never will again.'",
      tags: ["Standoff", "Partners", "Genesis"],
    },
  ] as MemeItem[],
};
