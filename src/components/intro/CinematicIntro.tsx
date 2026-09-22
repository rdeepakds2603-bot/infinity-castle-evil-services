import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles, ArrowRight } from 'lucide-react';
import { soundEngine } from '../audio/SoundEngine';
import { CastleCanvas } from '../castle/CastleCanvas';

interface CinematicIntroProps {
  onComplete: () => void;
}

export const CinematicIntro: React.FC<CinematicIntroProps> = ({ onComplete }) => {
  // Intro progression states: 'initial' -> 'playing-sequence' -> 'ready-to-enter'
  const [introState, setIntroState] = useState<'initial' | 'playing-sequence' | 'ready-to-enter'>('initial');
  const [sequenceStep, setSequenceStep] = useState<number>(0);
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);

  // Progressive timer sequence
  useEffect(() => {
    if (introState !== 'playing-sequence') return;

    // Step 0: 0-1s Black screen
    // Step 1: 1-2s Faint architecture
    // Step 2: 2-4s Castle environment fades in
    // Step 3: 4-6s Camera moves forward
    // Step 4: 6-8s Floating dust and fog
    // Step 5: 8-10s Warm glowing lights
    // Step 6: 10s Reveal complete "ENTER THE LAIR"

    const timers = [
      setTimeout(() => {
        setSequenceStep(1);
        if (isAudioEnabled) soundEngine.playBiwaPluck(110, 0.4);
      }, 1000),

      setTimeout(() => {
        setSequenceStep(2);
        if (isAudioEnabled) soundEngine.playTaikoDrum(50, 1.2);
      }, 2500),

      setTimeout(() => {
        setSequenceStep(3);
        if (isAudioEnabled) soundEngine.playBiwaPluck(220, 0.6);
      }, 4500),

      setTimeout(() => {
        setSequenceStep(4);
        if (isAudioEnabled) soundEngine.playBiwaPluck(330, 0.8);
      }, 6500),

      setTimeout(() => {
        setSequenceStep(5);
        if (isAudioEnabled) soundEngine.playTaikoDrum(40, 1.5);
      }, 8500),

      setTimeout(() => {
        setSequenceStep(6);
        setIntroState('ready-to-enter');
        if (isAudioEnabled) soundEngine.playBiwaPluck(440, 1.0);
      }, 10000),
    ];

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [introState, isAudioEnabled]);

  const handleStartSequence = (enableAudio: boolean) => {
    if (enableAudio) {
      soundEngine.setMuted(false);
      setIsAudioEnabled(true);
      soundEngine.playTaikoDrum(55, 1.5);
      soundEngine.playBiwaPluck(165, 0.7);
    }
    setIntroState('playing-sequence');
  };

  const handleSkip = () => {
    soundEngine.playBiwaPluck(330, 0.7);
    onComplete();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#050304] flex items-center justify-center overflow-hidden">
      {/* Background Castle Layer - Progressive Opacity based on sequence step */}
      <div
        className={`absolute inset-0 transition-all duration-1000 ${
          sequenceStep >= 1 ? 'opacity-100' : 'opacity-0'
        } ${sequenceStep >= 3 ? 'scale-105' : 'scale-100'}`}
        style={{ transitionDuration: '2500ms' }}
      >
        <CastleCanvas
          isMoving={sequenceStep >= 3}
          ambientIntensity={
            sequenceStep === 1
              ? 0.15
              : sequenceStep === 2
              ? 0.4
              : sequenceStep === 3
              ? 0.65
              : sequenceStep >= 4
              ? 1.0
              : 0
          }
        />
      </div>

      {/* Atmospheric Fog Overlay */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${
          sequenceStep >= 4 ? 'opacity-70' : 'opacity-0'
        } bg-[radial-gradient(circle_at_center,_transparent_30%,_rgba(5,3,4,0.85)_100%)]`}
      />

      {/* INITIAL PROMPT: Black Screen with Center Button */}
      {introState === 'initial' && (
        <div className="relative z-10 text-center px-4 max-w-lg mx-auto animate-fade-in">
          {/* Subtle Emblem */}
          <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-red-900/60 bg-black/80 flex items-center justify-center shadow-[0_0_25px_rgba(220,38,38,0.3)]">
            <span className="font-cinzel text-xl text-red-500 font-black">LAIR</span>
          </div>

          <h2 className="font-cinzel text-xs uppercase tracking-[0.4em] text-neutral-400 mb-2">
            THE INFINITY CASTLE CONCLAVE
          </h2>

          <h1 className="font-cinzel-dec text-3xl sm:text-4xl font-bold text-white tracking-wider mb-6 drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]">
            A VILLAIN'S LAIR
          </h1>

          <p className="font-cinzel text-sm text-neutral-400 mb-8 tracking-widest">
            EVIL SERVICES AWAIT.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => handleStartSequence(true)}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-red-800 to-red-950 hover:from-red-700 hover:to-red-900 text-white font-cinzel text-xs font-bold tracking-[0.25em] border border-red-500/60 shadow-[0_0_25px_rgba(220,38,38,0.5)] hover:shadow-[0_0_35px_rgba(220,38,38,0.8)] transition-all cursor-pointer flex items-center justify-center gap-2 group"
            >
              <Volume2 className="w-4 h-4 text-amber-400 group-hover:animate-pulse" />
              <span>ENTER WITH SOUND</span>
            </button>

            <button
              onClick={() => handleStartSequence(false)}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 hover:text-white font-cinzel text-xs tracking-[0.2em] border border-neutral-700 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <VolumeX className="w-4 h-4 text-neutral-500" />
              <span>ENTER SILENTLY</span>
            </button>
          </div>
        </div>
      )}

      {/* SEQUENCE PLAYING: Progress & Ambient Status */}
      {introState === 'playing-sequence' && (
        <div className="relative z-10 text-center px-4 max-w-xl mx-auto pointer-events-none">
          <div className="space-y-4">
            <p className="font-cinzel text-sm text-amber-400 font-bold tracking-[0.3em] uppercase animate-pulse">
              INFINITY CASTLE • DIMENSIONAL GATEWAYS OPENING
            </p>

            <div className="h-0.5 w-48 mx-auto bg-gradient-to-r from-transparent via-red-600 to-transparent animate-pulse" />

            <p className="font-cinzel text-xs tracking-[0.3em] text-neutral-400">
              {sequenceStep === 1 && 'Architectural foundations shifting...'}
              {sequenceStep === 2 && 'Tatami corridors expanding across dimensions...'}
              {sequenceStep === 3 && 'Spatial gravity destabilizing...'}
              {sequenceStep === 4 && 'Upper Rank demonic miasma manifesting...'}
              {sequenceStep >= 5 && 'The Chamber of Evil Services awakens...'}
            </p>
          </div>
        </div>
      )}

      {/* SEQUENCE COMPLETE: Big Cinematic Reveal */}
      {introState === 'ready-to-enter' && (
        <div className="relative z-10 text-center px-4 max-w-2xl mx-auto animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-600/60 text-red-400 text-[11px] font-cinzel tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>SANCTIONED BY THE UPPER RANKS</span>
          </div>

          <h1 className="font-cinzel-dec text-4xl sm:text-6xl font-black text-white tracking-widest mb-3 drop-shadow-[0_0_35px_rgba(220,38,38,0.8)]">
            A VILLAIN'S LAIR
          </h1>

          <p className="font-cinzel text-sm sm:text-base font-semibold text-amber-400/90 tracking-[0.25em] mb-4">
            EVIL SERVICES FROM THE UPPER RANKS
          </p>

          <p className="text-xs sm:text-sm text-neutral-300 font-light max-w-lg mx-auto mb-8 leading-relaxed font-sans">
            Mortal conflicts are fleeting. Our supernatural assassinations, cryogenic obliterations, and combat purges are eternal.
          </p>

          <button
            onClick={() => {
              soundEngine.playTaikoDrum(45, 1.5);
              soundEngine.playBiwaPluck(220, 1.0);
              onComplete();
            }}
            className="px-10 py-4 rounded-xl bg-gradient-to-r from-red-700 via-red-800 to-red-950 hover:from-red-600 hover:to-red-900 text-white font-cinzel text-sm font-black tracking-[0.3em] border border-red-400 shadow-[0_0_30px_rgba(220,38,38,0.7)] hover:shadow-[0_0_50px_rgba(220,38,38,1)] transition-all cursor-pointer flex items-center justify-center gap-3 mx-auto transform hover:scale-105 active:scale-95"
          >
            <span>ENTER THE LAIR</span>
            <ArrowRight className="w-4 h-4 text-amber-300" />
          </button>
        </div>
      )}

      {/* Skip Intro Button (Top Right) */}
      <button
        onClick={handleSkip}
        className="absolute top-6 right-6 z-20 px-4 py-2 rounded-full bg-black/70 hover:bg-black/90 border border-neutral-700 hover:border-neutral-400 text-neutral-300 hover:text-white text-xs font-cinzel tracking-widest transition-all cursor-pointer shadow-lg"
      >
        SKIP INTRO →
      </button>
    </div>
  );
};
