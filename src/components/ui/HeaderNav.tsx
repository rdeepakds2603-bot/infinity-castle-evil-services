import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, ShieldAlert, Flame } from 'lucide-react';
import { soundEngine } from '../audio/SoundEngine';
import type { AppPhase } from '../../types';

interface HeaderNavProps {
  currentPhase: AppPhase;
  onNavigate: (phase: AppPhase) => void;
  onRequestOpen: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  currentPhase,
  onNavigate,
  onRequestOpen,
}) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleSound = () => {
    const nextMuted = soundEngine.toggleMute();
    setIsMuted(nextMuted);
    if (!nextMuted) {
      soundEngine.playBiwaPluck(220, 0.8);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-md border-b border-red-900/40 py-2.5 shadow-[0_4px_25px_rgba(0,0,0,0.8)]'
          : 'bg-gradient-to-b from-black/95 via-black/50 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Castle Seal */}
        <button
          onClick={() => {
            soundEngine.playBiwaPluck(180, 0.7);
            onNavigate('services-landing');
          }}
          className="flex items-center gap-3 text-left group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-900 to-black border border-red-600/60 flex items-center justify-center text-red-500 shadow-[0_0_15px_rgba(220,38,38,0.5)] group-hover:scale-105 group-hover:border-red-500 transition-all duration-300">
            <span className="font-cinzel font-black text-sm text-amber-400">LAIR</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-cinzel text-sm sm:text-base font-bold tracking-widest text-neutral-100 group-hover:text-red-400 transition-colors">
                INFINITY CASTLE
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-red-950/80 border border-red-600/40 text-red-400 hidden sm:inline-block">
                LAIR
              </span>
            </div>
            <p className="text-[10px] font-cinzel text-neutral-400 tracking-wider">
              EVIL SERVICES MARKETPLACE
            </p>
          </div>
        </button>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => {
              soundEngine.playBiwaPluck(220, 0.6);
              onNavigate('services-landing');
            }}
            className={`text-xs font-cinzel tracking-widest transition-colors cursor-pointer py-1.5 ${
              currentPhase === 'services-landing'
                ? 'text-red-400 border-b-2 border-red-600 font-bold'
                : 'text-neutral-300 hover:text-red-400'
            }`}
          >
            EVIL SERVICES
          </button>

          <button
            onClick={() => {
              soundEngine.playBiwaPluck(240, 0.6);
              onNavigate('character-wall');
            }}
            className={`text-xs font-cinzel tracking-widest transition-colors cursor-pointer py-1.5 ${
              currentPhase === 'character-wall' || currentPhase === 'character-chamber'
                ? 'text-red-400 border-b-2 border-red-600 font-bold'
                : 'text-neutral-300 hover:text-red-400'
            }`}
          >
            UPPER RANKS
          </button>

          <button
            onClick={() => {
              soundEngine.playMuzanDarkPulse();
              onNavigate('muzan-master-contract');
            }}
            className={`text-xs font-cinzel tracking-widest transition-colors cursor-pointer py-1.5 flex items-center gap-1 ${
              currentPhase === 'muzan-master-contract'
                ? 'text-red-400 border-b-2 border-red-600 font-bold'
                : 'text-red-300 hover:text-red-200'
            }`}
          >
            <Flame className="w-3.5 h-3.5 text-red-500 animate-pulse" />
            THE MASTER
          </button>
        </nav>

        {/* Actions (Sound Toggle & CTA) */}
        <div className="flex items-center gap-3">
          {/* Audio Synthesizer Toggle */}
          <button
            onClick={handleToggleSound}
            title={isMuted ? 'Enable Procedural Sound Design' : 'Mute Sound'}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700 text-neutral-300 hover:text-white transition-all text-xs font-cinzel tracking-wider cursor-pointer"
          >
            {isMuted ? (
              <>
                <VolumeX className="w-4 h-4 text-neutral-500" />
                <span className="hidden sm:inline text-[11px]">SOUND OFF</span>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4 text-red-400 animate-pulse" />
                <span className="hidden sm:inline text-[11px] text-red-300">SOUND ON</span>
                {/* Audio wave bars */}
                <div className="flex items-end gap-0.5 h-3">
                  <span className="w-0.5 h-3 bg-red-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-0.5 h-2 bg-red-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-0.5 h-3 bg-red-500 animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </>
            )}
          </button>

          {/* Quick Request CTA */}
          <button
            onClick={() => {
              soundEngine.playTaikoDrum(55, 0.8);
              onRequestOpen();
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-red-700 to-red-900 hover:from-red-600 hover:to-red-800 text-white font-cinzel text-xs font-bold tracking-widest border border-red-500/60 shadow-[0_0_15px_rgba(220,38,38,0.4)] hover:shadow-[0_0_25px_rgba(220,38,38,0.7)] transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <ShieldAlert className="w-3.5 h-3.5 text-amber-300" />
            <span>COMMISSION HIT</span>
          </button>
        </div>
      </div>
    </header>
  );
};
