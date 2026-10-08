/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Characters } from './components/Characters';
import { DuoPhilosophy } from './components/DuoPhilosophy';
import { AiTerminal } from './components/AiTerminal';
import { MemeGenerator } from './components/MemeGenerator';
import { MemeGallery } from './components/MemeGallery';
import { SolanaSection } from './components/SolanaSection';
import { Tokenomics } from './components/Tokenomics';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#080A0E] text-[#ECEFF1] flex flex-col selection:bg-[#14F195] selection:text-[#080A0E]">
      {/* Navigation */}
      <Navbar />

      {/* Main Experience Stream */}
      <main className="flex-1">
        {/* 01: Hero Scene with Eye Tracker & Real Character Renders */}
        <Hero />

        {/* 02 & 03: Meet Hood & Meet HoodCat with Interactive Easter Egg */}
        <Characters />

        {/* 04 & 05: The Duo Dynamics & What is HoodCAT */}
        <DuoPhilosophy />

        {/* 06: Interactive AI Console (HoodCat Command Terminal) */}
        <AiTerminal />

        {/* 07: Offline MemeAI Generator */}
        <MemeGenerator />

        {/* 08: The Meme Vault Archive (Original Graphic Scenes) */}
        <MemeGallery />

        {/* 09: Dedicated Solana & pump.fun Section */}
        <SolanaSection />

        {/* 10: Configurable Token Metrics Architecture */}
        <Tokenomics />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
