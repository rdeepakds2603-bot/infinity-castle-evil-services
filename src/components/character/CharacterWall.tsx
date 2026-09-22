import React from 'react';
import { CHARACTERS } from '../../data/charactersData';
import type { CharacterData } from '../../types';
import { soundEngine } from '../audio/SoundEngine';
import { Skull, Flame, ArrowRight, Video } from 'lucide-react';

interface CharacterWallProps {
  onSelectCharacter: (character: CharacterData) => void;
  onSelectMuzan: () => void;
}

export const CharacterWall: React.FC<CharacterWallProps> = ({
  onSelectCharacter,
  onSelectMuzan,
}) => {
  const upperRanks = CHARACTERS.filter((c) => c.id !== 'muzan');
  const muzan = CHARACTERS.find((c) => c.id === 'muzan');

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/80 border border-red-600/60 text-red-400 text-xs font-cinzel font-bold tracking-widest mb-4">
          <Skull className="w-3.5 h-3.5 text-amber-400" />
          <span>LETHAL VILLAINS & ASSASSINS OF THE INFINITY CASTLE</span>
        </div>

        <h2 className="font-cinzel-dec text-3xl sm:text-5xl font-black text-white tracking-wider mb-4 drop-shadow-[0_0_25px_rgba(220,38,38,0.5)]">
          MEET YOUR SERVICE PROVIDERS
        </h2>

        <p className="font-cinzel text-base sm:text-lg font-bold text-amber-400/90 tracking-[0.25em] mb-4">
          THE UPPER RANKS
        </p>

        <p className="text-xs sm:text-sm text-neutral-300 font-light max-w-xl mx-auto leading-relaxed">
          Select any villain to witness their 25-second anime-style final form transformation, inspect their lethality profile, and commission evil services.
        </p>
      </div>

      {/* Grid of Upper Rank Villains (1 through 6) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {upperRanks.map((demon) => (
          <div
            key={demon.id}
            onClick={() => {
              // Sound trigger
              if (demon.id === 'kokushibo') soundEngine.playKatanaSlash();
              else if (demon.id === 'doma') soundEngine.playFrostCrackle();
              else if (demon.id === 'akaza') soundEngine.playAkazaHeartbeat();
              else if (demon.id === 'hantengu') soundEngine.playHantenguThunder();
              else if (demon.id === 'gyokko') soundEngine.playWaterWarp();
              else if (demon.id === 'gyutaro-daki') soundEngine.playDualSlash();
              onSelectCharacter(demon);
            }}
            className="group relative rounded-2xl overflow-hidden bg-neutral-950/90 border border-neutral-800 hover:border-red-600/80 transition-all duration-500 cursor-pointer flex flex-col justify-between p-6 hover:shadow-[0_0_35px_rgba(220,38,38,0.4)] transform hover:-translate-y-2"
          >
            {/* Ambient Background Glow */}
            <div
              className="absolute inset-0 opacity-15 group-hover:opacity-35 transition-opacity duration-500 pointer-events-none"
              style={{
                background: `radial-gradient(circle at 50% 40%, ${demon.themeColor.primary}, transparent 70%)`,
              }}
            />

            {/* Top Rank Badge & Threat Level */}
            <div className="relative z-10 flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded bg-black/80 border border-neutral-700 text-xs font-cinzel font-bold text-neutral-200 tracking-wider">
                {demon.rank}
              </span>
              <span className="px-2.5 py-0.5 rounded bg-red-950/80 border border-red-600/60 text-red-400 text-[10px] font-cinzel font-bold tracking-wider">
                {demon.transformation.threatLevel}
              </span>
            </div>

            {/* Real Uploaded Character Photo with Glowing Card Border */}
            <div className="relative z-10 my-4 h-72 rounded-xl overflow-hidden border border-neutral-800 group-hover:border-red-500/60 transition-colors">
              <img
                src={demon.visualAsset.imageSrc}
                alt={demon.name}
                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-cinzel text-neutral-300">
                <span className="flex items-center gap-1">
                  <Video className="w-3.5 h-3.5 text-amber-400" />
                  <span>25s TRANSFORMATION</span>
                </span>
                <span className="font-bold text-red-400">{demon.metrics.power}% POWER</span>
              </div>
            </div>

            {/* Character Info */}
            <div className="relative z-10">
              <h3 className="font-cinzel text-2xl font-black text-white tracking-wider mb-1 group-hover:text-red-400 transition-colors">
                {demon.name}
              </h3>
              <p className="text-xs font-cinzel text-neutral-400 font-semibold mb-2">
                {demon.title}
              </p>

              <p className="text-xs text-neutral-300 font-light mb-4 line-clamp-2">
                {demon.tagline}
              </p>

              {/* Service Tag */}
              <div className="p-3 rounded-xl bg-black/80 border border-neutral-800 mb-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-cinzel text-neutral-500 uppercase tracking-widest block">
                    EVIL SERVICE
                  </span>
                  <span
                    className="font-cinzel text-xs font-bold tracking-wider"
                    style={{ color: demon.themeColor.accent }}
                  >
                    {demon.serviceTitle}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-cinzel text-neutral-500 uppercase tracking-widest block">
                    ATTACK TYPE
                  </span>
                  <span className="font-cinzel text-[11px] font-bold text-neutral-300">
                    {demon.transformation.attackType.split(' ')[0]}
                  </span>
                </div>
              </div>

              {/* Enter Chamber CTA */}
              <button className="w-full py-3 rounded-xl bg-gradient-to-r from-neutral-900 to-black group-hover:from-red-900 group-hover:to-red-950 border border-neutral-800 group-hover:border-red-500/60 text-neutral-300 group-hover:text-white text-xs font-cinzel font-bold tracking-widest flex items-center justify-center gap-2 transition-all cursor-pointer">
                <span>VIEW FINAL FORM TRANSFORMATION</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Muzan Kibutsuji Feature Banner (The Supreme Master) */}
      {muzan && (
        <div
          onClick={() => {
            soundEngine.playMuzanDarkPulse();
            onSelectMuzan();
          }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-red-950 via-black to-red-950 border-2 border-red-600/80 p-8 sm:p-12 shadow-[0_0_50px_rgba(220,38,38,0.5)] cursor-pointer group hover:scale-[1.01] transition-all duration-500"
        >
          {/* Animated Blood Sparks */}
          <div className="absolute inset-0 bg-radial-[ellipse_at_center,_var(--tw-gradient-stops)] from-red-900/30 via-transparent to-transparent opacity-60 animate-pulse pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-900/80 border border-red-500 text-amber-300 text-xs font-cinzel font-black tracking-widest mb-4">
                <Flame className="w-4 h-4 text-amber-400 animate-pulse" />
                <span>THE SUPREME DEMON KING • PROGENITOR</span>
              </div>

              <h3 className="font-cinzel-dec text-3xl sm:text-5xl font-black text-white tracking-wider mb-2">
                {muzan.name}
              </h3>
              <p className="font-cinzel text-sm text-red-400 font-bold mb-4 tracking-widest">
                {muzan.title} • SOVEREIGN OF THE CASTLE
              </p>

              <p className="text-sm sm:text-base text-neutral-300 font-light mb-6 leading-relaxed">
                "I have existed for a thousand years without a single flaw. All Upper Ranks answer to my pulse. Enter my presence to witness my true Progenitor combat form and seal an eternal blood covenant."
              </p>

              <div className="flex flex-wrap items-center gap-3 justify-center lg:justify-start">
                <span className="px-3 py-1 rounded bg-black/80 border border-red-800/80 text-xs font-cinzel text-red-300">
                  ⚡ DEMON CREATION
                </span>
                <span className="px-3 py-1 rounded bg-black/80 border border-red-800/80 text-xs font-cinzel text-red-300">
                  🩸 CELLULAR ASCENSION
                </span>
                <span className="px-3 py-1 rounded bg-black/80 border border-red-800/80 text-xs font-cinzel text-red-300">
                  ♾️ ABSOLUTE IMMORTALITY
                </span>
              </div>
            </div>

            {/* Muzan Video Preview using Uploaded WhatsApp Video */}
            <div className="w-64 sm:w-72 h-80 shrink-0 rounded-2xl overflow-hidden border-2 border-red-500/80 shadow-[0_0_35px_rgba(220,38,38,0.7)] relative group">
              <video
                src={muzan.visualAsset.videoSrc || '/assets/characters/muzan.mp4'}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-110"
              />
              <div className="absolute top-2.5 left-2.5 z-10 px-2 py-0.5 rounded-full bg-red-950/90 border border-red-500 text-[9px] font-cinzel font-bold text-amber-300 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                <span>VIDEO PREVIEW</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
