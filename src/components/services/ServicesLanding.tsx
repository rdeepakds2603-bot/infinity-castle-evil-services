import React from 'react';
import { CHARACTERS } from '../../data/charactersData';
import type { CharacterData } from '../../types';
import { CastleDoorCard } from '../castle/CastleDoorCard';
import { soundEngine } from '../audio/SoundEngine';
import {
  Skull,
  Flame,
  Zap,
  ArrowRight,
  Sparkles,
  Scroll,
  ShieldCheck,
} from 'lucide-react';

interface ServicesLandingProps {
  onSelectCharacter: (character: CharacterData) => void;
  onRequestOpen: () => void;
  onNavigateToMaster: () => void;
}

export const ServicesLanding: React.FC<ServicesLandingProps> = ({
  onSelectCharacter,
  onNavigateToMaster,
}) => {
  const serviceDemons = CHARACTERS.filter((c) => c.id !== 'muzan');

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/80 border border-red-600/60 text-red-400 text-xs font-cinzel font-bold tracking-widest mb-4 shadow-[0_0_20px_rgba(220,38,38,0.4)]">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>INFINITY CASTLE SUPERNATURAL MARKETPLACE</span>
        </div>

        <h1 className="font-cinzel-dec text-4xl sm:text-6xl font-black text-white tracking-wider mb-4 drop-shadow-[0_0_30px_rgba(220,38,38,0.6)]">
          EVIL SERVICES
        </h1>

        <p className="font-cinzel text-base sm:text-xl font-bold text-amber-400/90 tracking-[0.2em] mb-4">
          "Problems are temporary. Our solutions are eternal."
        </p>

        <p className="text-xs sm:text-sm text-neutral-300 font-light max-w-xl mx-auto leading-relaxed">
          Commission legendary Upper Rank demons for surgical assassinations, cryogenic regional freezes, martial pulverization, and total bloodline purges.
        </p>
      </div>

      {/* 6 Castle Door Service Chambers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {serviceDemons.map((character) => (
          <CastleDoorCard
            key={character.id}
            character={character}
            onSelect={onSelectCharacter}
          />
        ))}
      </div>

      {/* 4-Step How to Commission Workflow */}
      <div className="p-8 sm:p-12 rounded-3xl bg-neutral-950/90 border border-red-900/60 shadow-2xl mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h3 className="font-cinzel text-xs font-bold text-red-400 tracking-[0.3em] uppercase mb-2">
            PROTOCOL OF THE CASTLE
          </h3>
          <h2 className="font-cinzel-dec text-2xl sm:text-4xl font-black text-white tracking-wider">
            HOW TO COMMISSION AN UPPER RANK
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: '01',
              title: 'SELECT PROVIDER',
              desc: 'Choose an Upper Rank whose Blood Demon Art matches the lethality required for your target.',
              icon: <Skull className="w-5 h-5 text-red-400" />,
            },
            {
              step: '02',
              title: 'INSPECT DOSSIER',
              desc: 'Enter their personal chamber to review killing techniques, range metrics, and turnaround speeds.',
              icon: <Zap className="w-5 h-5 text-amber-400" />,
            },
            {
              step: '03',
              title: 'OFFER BLOOD TITHE',
              desc: 'Submit target coordinates and pledge fictional blood, captives, or loyalty oaths to seal the pact.',
              icon: <Scroll className="w-5 h-5 text-red-400" />,
            },
            {
              step: '04',
              title: 'FINAL SANCTION',
              desc: 'Obtain the Progenitor Muzan seal for irreversible dimensional execution and guaranteed results.',
              icon: <ShieldCheck className="w-5 h-5 text-amber-400" />,
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-black border border-neutral-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-cinzel text-2xl font-black text-red-500/60">
                    {item.step}
                  </span>
                  <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800">
                    {item.icon}
                  </div>
                </div>
                <h4 className="font-cinzel text-sm font-bold text-white tracking-wider mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Master CTA Banner */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-red-950 via-black to-red-950 border border-red-600/60 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_35px_rgba(220,38,38,0.4)]">
        <div>
          <span className="text-xs font-cinzel text-amber-400 font-bold uppercase tracking-widest block mb-1">
            SEEKING ABSOLUTE IMMORTALITY?
          </span>
          <h3 className="font-cinzel-dec text-2xl sm:text-3xl font-black text-white tracking-wider">
            STEP INTO THE MASTER'S INNER CHAMBER
          </h3>
          <p className="text-xs text-neutral-400 font-light mt-1">
            Ascend directly to Muzan Kibutsuji for progenitor demonic conversion and royal covenant.
          </p>
        </div>

        <button
          onClick={() => {
            soundEngine.playMuzanDarkPulse();
            onNavigateToMaster();
          }}
          className="px-8 py-3.5 rounded-xl bg-red-700 hover:bg-red-600 text-white font-cinzel text-xs font-bold tracking-[0.2em] border border-red-400 shadow-[0_0_20px_rgba(220,38,38,0.7)] transition-all cursor-pointer shrink-0 flex items-center gap-2"
        >
          <Flame className="w-4 h-4 text-amber-300 animate-pulse" />
          <span>SUMMON MUZAN</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
