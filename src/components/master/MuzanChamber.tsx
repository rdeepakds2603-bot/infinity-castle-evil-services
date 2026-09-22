import React, { useState, useEffect } from 'react';
import { CHARACTERS } from '../../data/charactersData';
import { SignatureEffectsCanvas } from '../character/SignatureEffectsCanvas';
import { soundEngine } from '../audio/SoundEngine';
import {
  Flame,
  ShieldAlert,
  CheckCircle2,
  RotateCcw,
  Crown,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface MuzanChamberProps {
  onExploreAgain: () => void;
  onViewServices: () => void;
}

export const MuzanChamber: React.FC<MuzanChamberProps> = ({
  onExploreAgain,
  onViewServices,
}) => {
  const muzanData = CHARACTERS.find((c) => c.id === 'muzan') || CHARACTERS[0];
  const upperRanks = CHARACTERS.filter((c) => c.id !== 'muzan');

  // Reveal stages: 0 (darkness) -> 1 (eyes glow) -> 2 (silhouette) -> 3 (full demon king reveal)
  const [revealStage, setRevealStage] = useState<number>(0);
  const [selectedTerms, setSelectedTerms] = useState<string[]>([
    'DEMON CREATION & CELLULAR ASCENSION',
    'IMMORTALITY & SUPERHUMAN REGENERATION',
    'UPPER RANK ASSASSIN DISPATCH ACCESS',
  ]);
  const [isSealingContract, setIsSealingContract] = useState(false);
  const [isContractFinalized, setIsContractFinalized] = useState(false);

  useEffect(() => {
    // Gradual dramatic reveal sequence
    const t1 = setTimeout(() => {
      setRevealStage(1);
      soundEngine.playBiwaPluck(110, 0.5);
    }, 800);

    const t2 = setTimeout(() => {
      setRevealStage(2);
      soundEngine.playTaikoDrum(45, 1.2);
    }, 2200);

    const t3 = setTimeout(() => {
      setRevealStage(3);
      soundEngine.playMuzanDarkPulse();
    }, 3800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  const handleToggleTerm = (term: string) => {
    soundEngine.playBiwaPluck(330, 0.3);
    if (selectedTerms.includes(term)) {
      setSelectedTerms(selectedTerms.filter((t) => t !== term));
    } else {
      setSelectedTerms([...selectedTerms, term]);
    }
  };

  const handleAcceptFinalContract = () => {
    setIsSealingContract(true);
    soundEngine.playBloodSealStamp();

    // Climax sequence
    setTimeout(() => {
      soundEngine.playMuzanDarkPulse();
      setIsSealingContract(false);
      setIsContractFinalized(true);

      // Crimson and Gold confetti burst
      try {
        confetti({
          particleCount: 150,
          spread: 120,
          origin: { y: 0.5 },
          colors: ['#dc2626', '#b91c1c', '#f59e0b', '#7f1d1d', '#000000'],
        });
      } catch {}
    }, 2200);
  };

  return (
    <div className="relative min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Dynamic Blood Canvas Aura */}
      <SignatureEffectsCanvas character={muzanData} isAttacking={isSealingContract || isContractFinalized} />

      {/* BEFORE CONTRACT SEALED */}
      {!isContractFinalized && (
        <div className="relative z-20 max-w-4xl mx-auto text-center">
          {/* Top Master Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/90 border border-red-500 text-amber-300 text-xs font-cinzel font-black tracking-widest mb-6 transition-all duration-1000 ${
              revealStage >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Crown className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>THE SUPREME PROGENITOR CONCLAVE</span>
          </div>

          {/* Gradual Character Real Uploaded Portrait */}
          <div className="my-6 h-80 sm:h-96 w-full flex items-center justify-center relative">
            <div
              className={`w-full h-full max-w-md rounded-3xl overflow-hidden border-2 border-red-600/80 shadow-[0_0_50px_rgba(220,38,38,0.7)] transition-all duration-1000 ${
                revealStage === 0
                  ? 'opacity-0 scale-90 blur-xl'
                  : revealStage === 1
                  ? 'opacity-30 scale-95 blur-md'
                  : revealStage === 2
                  ? 'opacity-70 scale-100 blur-sm'
                  : 'opacity-100 scale-105 blur-none'
              }`}
            >
              <img
                src={muzanData.visualAsset.imageSrc}
                alt="Muzan Kibutsuji"
                className="w-full h-full object-cover object-top brightness-90 hover:brightness-110 transition-all duration-700"
              />
            </div>
          </div>

          {/* Dialogue & Progenitor Titles */}
          <div
            className={`space-y-4 transition-all duration-1000 ${
              revealStage >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <h1 className="font-cinzel-dec text-3xl sm:text-5xl font-black text-white tracking-widest drop-shadow-[0_0_35px_rgba(220,38,38,0.9)]">
              MUZAN KIBUTSUJI
            </h1>
            <p className="font-cinzel text-sm text-red-500 font-bold tracking-[0.3em]">
              PROGENITOR DEMON KING • SOVEREIGN OF THE CASTLE
            </p>

            <div className="p-6 rounded-2xl bg-black/85 border border-red-900/60 max-w-2xl mx-auto shadow-2xl">
              <p className="font-cinzel italic text-sm sm:text-base text-neutral-200 leading-relaxed">
                "You have crossed into the heart of the Infinity Castle seeking our evil services. Every mortal desire comes at a price. Ingest my progenitor blood, and your will shall become absolute law."
              </p>
            </div>
          </div>

          {/* Blood Contract Provisions Selector */}
          <div
            className={`mt-10 p-6 sm:p-8 rounded-3xl bg-neutral-950/90 border border-red-800/80 text-left max-w-2xl mx-auto transition-all duration-1000 ${
              revealStage >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <h3 className="font-cinzel text-xs font-black text-amber-400 tracking-widest uppercase mb-4 flex items-center gap-2">
              <Flame className="w-4 h-4 text-red-500" />
              <span>PROGENITOR BLOOD COVENANT PROVISIONS</span>
            </h3>

            <div className="space-y-3">
              {[
                {
                  id: 'DEMON CREATION & CELLULAR ASCENSION',
                  desc: 'Infusion of Muzan progenitor blood granting immunity to aging and mortal sickness.',
                },
                {
                  id: 'IMMORTALITY & SUPERHUMAN REGENERATION',
                  desc: 'Near-instantaneous tissue regeneration from all conventional weaponry.',
                },
                {
                  id: 'UPPER RANK ASSASSIN DISPATCH ACCESS',
                  desc: 'Permanent clearance to commission Kokushibo, Doma, and Akaza at will.',
                },
                {
                  id: 'TOTAL ENEMY DYNASTY ERADICATION',
                  desc: 'Complete annihilation of all biological and historical records of target clan.',
                },
              ].map((term) => (
                <div
                  key={term.id}
                  onClick={() => handleToggleTerm(term.id)}
                  className={`p-3.5 rounded-xl border flex items-start gap-3 cursor-pointer transition-all ${
                    selectedTerms.includes(term.id)
                      ? 'bg-red-950/60 border-red-500 text-white'
                      : 'bg-black border-neutral-800 text-neutral-400 hover:border-neutral-700'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded border mt-0.5 flex items-center justify-center shrink-0 ${
                      selectedTerms.includes(term.id)
                        ? 'bg-red-600 border-red-400 text-white'
                        : 'border-neutral-700 bg-neutral-900'
                    }`}
                  >
                    {selectedTerms.includes(term.id) && <CheckCircle2 className="w-3.5 h-3.5" />}
                  </div>
                  <div>
                    <div className="font-cinzel text-xs font-bold tracking-wider">{term.id}</div>
                    <div className="text-[11px] text-neutral-400 font-light">{term.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Accept Contract Button */}
            <button
              onClick={handleAcceptFinalContract}
              disabled={isSealingContract || selectedTerms.length === 0}
              className="w-full mt-6 py-4 px-6 rounded-xl bg-gradient-to-r from-red-600 via-red-800 to-red-950 hover:from-red-500 hover:to-red-900 text-white font-cinzel text-sm font-black tracking-[0.25em] border border-red-400 shadow-[0_0_40px_rgba(220,38,38,0.8)] hover:shadow-[0_0_60px_rgba(220,38,38,1)] transition-all cursor-pointer flex items-center justify-center gap-3 disabled:opacity-50 transform hover:scale-[1.02] active:scale-95"
            >
              <ShieldAlert className="w-5 h-5 text-amber-300 animate-pulse" />
              <span>
                {isSealingContract
                  ? 'TRANSMUTING BLOOD COVENANT...'
                  : 'ACCEPT PROGENITOR BLOOD CONTRACT'}
              </span>
            </button>
          </div>
        </div>
      )}

      {/* AFTER CONTRACT SEALED: Climax Celebration & Upper Rank Dispatched */}
      {isContractFinalized && (
        <div className="relative z-20 max-w-3xl mx-auto text-center animate-fade-in space-y-8">
          {/* Glowing Blood Wax Seal */}
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-red-900 via-red-950 to-black border-4 border-amber-400 shadow-[0_0_60px_rgba(245,158,11,0.9)] flex items-center justify-center animate-seal-stamp">
            <span className="font-cinzel text-4xl text-amber-300 font-black">MUZAN</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950 border border-red-500 text-red-300 text-xs font-cinzel font-bold tracking-widest">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span>CONTRACT SEALED UNDER MUZAN KIBUTSUJI</span>
          </div>

          <h2 className="font-cinzel-dec text-4xl sm:text-5xl font-black text-white tracking-widest drop-shadow-[0_0_35px_rgba(220,38,38,0.9)]">
            WELCOME TO THE LAIR
          </h2>

          <p className="text-sm sm:text-base text-neutral-200 font-light max-w-xl mx-auto leading-relaxed">
            Your blood covenant has been accepted by the Progenitor Demon King. The Upper Ranks have received their instructions. Reality within the Infinity Castle bends to your commission.
          </p>

          {/* Upper Rank Real Image Gallery in Unison */}
          <div className="p-6 rounded-3xl bg-black/90 border border-red-900/80 shadow-2xl">
            <div className="text-xs font-cinzel text-neutral-400 uppercase tracking-widest mb-4">
              ACTIVE UPPER RANK ASSASSINS DISPATCHED
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {upperRanks.map((demon) => (
                <div
                  key={demon.id}
                  className="p-2.5 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col items-center justify-center text-center overflow-hidden"
                >
                  <div className="w-16 h-20 rounded-lg overflow-hidden mb-2 border border-neutral-700">
                    <img
                      src={demon.visualAsset.imageSrc}
                      alt={demon.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <span className="text-[11px] font-cinzel font-bold text-white truncate w-full">
                    {demon.name}
                  </span>
                  <span className="text-[10px] font-cinzel text-red-400">
                    {demon.rank}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Final Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => {
                soundEngine.playBiwaPluck(220, 0.6);
                onViewServices();
              }}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-red-700 to-red-950 hover:from-red-600 hover:to-red-900 text-white font-cinzel text-xs font-bold tracking-[0.2em] border border-red-500 shadow-[0_0_25px_rgba(220,38,38,0.6)] transition-all cursor-pointer"
            >
              VIEW EVIL SERVICES
            </button>

            <button
              onClick={() => {
                soundEngine.playBiwaPluck(180, 0.6);
                onExploreAgain();
              }}
              className="px-6 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 text-xs font-cinzel tracking-widest border border-neutral-700 transition-all cursor-pointer flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4 text-neutral-400" />
              <span>EXPLORE LAIR AGAIN</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
