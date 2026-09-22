import React, { useState } from 'react';
import type { CharacterData } from '../../types';
import { soundEngine } from '../audio/SoundEngine';
import { Zap, ChevronRight } from 'lucide-react';

interface CastleDoorCardProps {
  character: CharacterData;
  onSelect: (character: CharacterData) => void;
}

export const CastleDoorCard: React.FC<CastleDoorCardProps> = ({ character, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    soundEngine.playBiwaPluck(220 + (character.rankNumber || 0) * 40, 0.35);
  };

  const handleSelect = () => {
    // Play character-specific signature sound
    switch (character.id) {
      case 'kokushibo':
        soundEngine.playKatanaSlash();
        break;
      case 'doma':
        soundEngine.playFrostCrackle();
        break;
      case 'akaza':
        soundEngine.playAkazaHeartbeat();
        break;
      case 'hantengu':
        soundEngine.playHantenguThunder();
        break;
      case 'gyokko':
        soundEngine.playWaterWarp();
        break;
      case 'gyutaro-daki':
        soundEngine.playDualSlash();
        break;
      default:
        soundEngine.playMuzanDarkPulse();
        break;
    }
    onSelect(character);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleSelect}
      className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 border ${
        isHovered
          ? `${character.themeColor.borderGlow} scale-[1.02] -translate-y-2`
          : 'border-neutral-800/80 hover:border-neutral-700 bg-neutral-950/80'
      } flex flex-col justify-between p-6 h-[520px] shadow-2xl backdrop-blur-md`}
    >
      {/* Background Castle Shoji Pattern */}
      <div className="absolute inset-0 bg-shoji-pattern opacity-15 pointer-events-none" />

      {/* Dynamic Glow and Silhouette Backdrop */}
      <div
        className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 30%, ${character.themeColor.glow}, transparent 75%)`,
          opacity: isHovered ? 0.75 : 0.15,
        }}
      />

      {/* Real Uploaded Character Photo in Background with Zoom Effect */}
      <div className="absolute inset-x-0 top-0 h-64 overflow-hidden pointer-events-none">
        <img
          src={character.visualAsset.imageSrc}
          alt={character.name}
          className={`w-full h-full object-cover object-top transition-all duration-700 ${
            isHovered
              ? 'scale-110 brightness-110 contrast-110'
              : 'scale-100 brightness-75 contrast-100'
          }`}
        />
        {/* Gradient fade to bottom card */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-transparent" />
      </div>

      {/* Upper Section: Rank Badge & Threat Level */}
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/90 border border-neutral-700 text-neutral-200 text-[11px] font-cinzel font-bold tracking-widest">
            <span
              className="w-2 h-2 rounded-full animate-ping"
              style={{ backgroundColor: character.themeColor.primary }}
            />
            <span>{character.rank}</span>
          </div>

          <span className="px-2.5 py-0.5 rounded bg-red-950/80 border border-red-600/60 text-red-400 text-[10px] font-cinzel font-bold tracking-wider">
            {character.transformation.threatLevel}
          </span>
        </div>
      </div>

      {/* Middle & Lower Section: Character Name, Service, & Power Indicator */}
      <div className="relative z-10 mt-auto">
        <h3 className="font-cinzel text-2xl font-black text-white tracking-wider mb-0.5 group-hover:text-red-300 transition-colors">
          {character.name}
        </h3>
        <p className="font-cinzel text-xs text-neutral-400 font-semibold mb-3">
          {character.title}
        </p>

        {/* Evil Service Title Badge */}
        <div className="p-3 rounded-xl bg-black/80 border border-neutral-800/90 mb-3 group-hover:border-neutral-700 transition-colors">
          <div className="text-[10px] font-cinzel text-neutral-500 uppercase tracking-widest">
            OFFERED EVIL SERVICE
          </div>
          <div
            className="font-cinzel text-xs sm:text-sm font-bold tracking-wider truncate"
            style={{ color: character.themeColor.accent }}
          >
            {character.serviceTitle}
          </div>
        </div>

        {/* Lethality / Power Gauge */}
        <div className="mb-4">
          <div className="flex items-center justify-between text-[11px] font-cinzel text-neutral-400 mb-1.5">
            <span className="flex items-center gap-1">
              <Zap className="w-3 h-3 text-amber-400" />
              <span>LETHALITY RATING</span>
            </span>
            <span className="font-bold text-neutral-200">{character.metrics.power}%</span>
          </div>
          <div className="w-full h-1.5 bg-neutral-900 rounded-full overflow-hidden border border-neutral-800">
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{
                width: `${character.metrics.power}%`,
                backgroundColor: character.themeColor.primary,
                boxShadow: isHovered ? `0 0 10px ${character.themeColor.primary}` : 'none',
              }}
            />
          </div>
        </div>

        {/* Explore Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleSelect();
          }}
          className={`w-full py-3 px-4 rounded-xl text-xs font-cinzel font-bold tracking-widest flex items-center justify-center gap-2 transition-all cursor-pointer ${
            isHovered
              ? 'bg-gradient-to-r from-red-700 to-red-900 text-white shadow-[0_0_20px_rgba(220,38,38,0.6)] border border-red-500'
              : 'bg-neutral-900 text-neutral-300 hover:text-white border border-neutral-700'
          }`}
        >
          <span>ENTER CHAMBER & FINAL FORM</span>
          <ChevronRight className={`w-4 h-4 transition-transform ${isHovered ? 'translate-x-1 text-amber-300' : ''}`} />
        </button>
      </div>
    </div>
  );
};
