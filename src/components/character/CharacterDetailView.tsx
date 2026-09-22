import React, { useState } from 'react';
import type { CharacterData, EvilServicePackage } from '../../types';
import { SignatureEffectsCanvas } from './SignatureEffectsCanvas';
import { TransformationVideoSection } from './TransformationVideoSection';
import { soundEngine } from '../audio/SoundEngine';
import {
  ArrowLeft,
  Skull,
  Zap,
  ShieldAlert,
  CheckCircle2,
  Target,
  Clock,
  Video,
  Award,
} from 'lucide-react';

interface CharacterDetailViewProps {
  character: CharacterData;
  onBack: () => void;
  onRequestService: (character: CharacterData, pkg?: EvilServicePackage) => void;
}

export const CharacterDetailView: React.FC<CharacterDetailViewProps> = ({
  character,
  onBack,
  onRequestService,
}) => {
  const [isAttacking, setIsAttacking] = useState(false);
  const [activeTab, setActiveTab] = useState<'transformation' | 'methodology' | 'techniques' | 'packages'>('transformation');
  const [selectedPackage, setSelectedPackage] = useState<EvilServicePackage | null>(
    character.packages[0] || null
  );

  const triggerAttackStance = () => {
    setIsAttacking(true);

    // Play signature attack audio
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

    setTimeout(() => {
      setIsAttacking(false);
    }, 2800);
  };

  return (
    <div className="relative min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* 60fps Live Signature Canvas Background */}
      <SignatureEffectsCanvas character={character} isAttacking={isAttacking} />

      {/* Top Navigation Bar */}
      <div className="relative z-20 flex flex-wrap items-center justify-between gap-4 mb-8">
        <button
          onClick={() => {
            soundEngine.playBiwaPluck(180, 0.5);
            onBack();
          }}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-black/85 hover:bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white text-xs font-cinzel font-bold tracking-widest transition-all cursor-pointer shadow-lg"
        >
          <ArrowLeft className="w-4 h-4 text-red-500" />
          <span>RETURN TO CASTLE CONCLAVE</span>
        </button>

        {/* Rank & Threat Level Indicator */}
        <div className="flex items-center gap-3">
          <div
            className="px-4 py-1.5 rounded-full border text-xs font-cinzel font-bold tracking-widest"
            style={{
              borderColor: character.themeColor.primary,
              backgroundColor: 'rgba(0,0,0,0.85)',
              color: character.themeColor.accent,
            }}
          >
            {character.rank}
          </div>
          <span className="px-3 py-1.5 rounded-full bg-red-950/90 border border-red-600 text-red-300 text-xs font-cinzel font-bold tracking-wider">
            {character.transformation.threatLevel}
          </span>
        </div>
      </div>

      {/* Main 2-Column / Responsive Dossier Layout */}
      <div className="relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
        {/* LEFT COLUMN: Real Character Artwork & Interactive Attack Stance Simulator */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div
            className={`w-full max-w-md rounded-3xl overflow-hidden relative border transition-all duration-700 ${
              isAttacking
                ? `${character.themeColor.borderGlow} scale-105 shadow-[0_0_50px_rgba(220,38,38,0.7)]`
                : 'border-neutral-800 bg-black/90'
            }`}
          >
            {/* Real Uploaded Character Artwork or Video with Cinematic Glow */}
            <div className="h-[460px] w-full relative overflow-hidden">
              {character.visualAsset.videoSrc ? (
                <video
                  src={character.visualAsset.videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className={`w-full h-full object-cover object-center transition-all duration-700 ${
                    isAttacking
                      ? 'scale-110 brightness-125 contrast-125 saturate-150'
                      : 'scale-100 brightness-95 contrast-110'
                  }`}
                />
              ) : (
                <img
                  src={character.visualAsset.imageSrc}
                  alt={character.name}
                  className={`w-full h-full object-cover object-top transition-all duration-700 ${
                    isAttacking
                      ? 'scale-110 brightness-125 contrast-125 saturate-150'
                      : 'scale-100 brightness-95 contrast-110'
                  }`}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />

              {/* Threat Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-black/80 border border-red-500/60 text-[10px] font-cinzel font-bold text-amber-300">
                  {character.transformation.threatLevel}
                </span>
              </div>
            </div>

            {/* Attack Stance Trigger Button */}
            <div className="p-4 bg-neutral-950 border-t border-neutral-800">
              <button
                onClick={triggerAttackStance}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-red-950 via-red-900 to-black hover:from-red-900 hover:to-red-800 text-white font-cinzel text-xs font-black tracking-[0.25em] border border-red-500/70 shadow-[0_0_20px_rgba(220,38,38,0.5)] hover:shadow-[0_0_35px_rgba(220,38,38,0.8)] transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Zap className={`w-4 h-4 text-amber-300 ${isAttacking ? 'animate-bounce' : ''}`} />
                <span>{isAttacking ? 'DISCHARGING SIGNATURE ATTACK...' : 'TEST FINAL ATTACK STANCE'}</span>
              </button>
            </div>
          </div>

          {/* Quote Banner */}
          <div className="w-full max-w-md mt-6 p-4 rounded-2xl bg-black/80 border border-neutral-800 text-center shadow-lg">
            <p className="font-cinzel italic text-xs sm:text-sm text-neutral-300 leading-relaxed">
              "{character.quote}"
            </p>
          </div>
        </div>

        {/* RIGHT / MAIN CONTENT COLUMN: Service Details, Transformation Summary & Lethality */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Header Info */}
          <div className="p-6 sm:p-8 rounded-3xl bg-black/90 border border-neutral-800/80 backdrop-blur-md shadow-2xl">
            <div className="text-[11px] font-cinzel text-neutral-400 tracking-widest uppercase mb-1">
              OFFERED EVIL SERVICE
            </div>
            <h1 className="font-cinzel-dec text-3xl sm:text-4xl font-black text-white tracking-wider mb-2">
              {character.serviceTitle}
            </h1>
            <p className="text-sm font-cinzel text-red-400 font-bold tracking-widest mb-4">
              PROVIDER: {character.name.toUpperCase()} — {character.title}
            </p>
            <p className="text-sm text-neutral-300 leading-relaxed font-sans font-light">
              {character.lore}
            </p>

            {/* Quick Transformation Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 pt-6 border-t border-neutral-800">
              <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800">
                <span className="text-[10px] font-cinzel text-neutral-500 uppercase tracking-widest block mb-1">
                  ORIGINAL FORM
                </span>
                <span className="text-xs font-semibold text-neutral-200">
                  {character.transformation.originalForm}
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800">
                <span className="text-[10px] font-cinzel text-neutral-500 uppercase tracking-widest block mb-1">
                  FINAL / AWAKENED FORM
                </span>
                <span className="text-xs font-semibold text-amber-300">
                  {character.transformation.finalForm}
                </span>
              </div>
            </div>
          </div>

          {/* Lethality Profile & Power Level */}
          <div className="p-6 sm:p-8 rounded-3xl bg-black/90 border border-neutral-800/80 backdrop-blur-md shadow-2xl">
            <h3 className="font-cinzel text-sm font-black text-white tracking-widest uppercase mb-4 flex items-center gap-2">
              <Target className="w-4 h-4 text-red-500" />
              <span>SUPERNATURAL POWER PROFILE & LETHALITY</span>
            </h3>

            <div className="space-y-3.5">
              {[
                { label: 'DESTRUCTIVE POWER LEVEL', val: character.metrics.power, color: '#ef4444' },
                { label: 'EXECUTION SPEED & AGILITY', val: character.metrics.speed, color: '#f59e0b' },
                { label: 'KILL RADIUS & AREA RANGE', val: character.metrics.range, color: '#38bdf8' },
                { label: 'TARGET TORMENT & CRUELTY', val: character.metrics.cruelty, color: '#ec4899' },
                { label: 'CONTRACT FEASIBILITY', val: character.metrics.contractFeasibility, color: '#10b981' },
              ].map((m, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-xs font-cinzel text-neutral-300 mb-1">
                    <span>{m.label}</span>
                    <span className="font-bold">{m.val}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-neutral-900 border border-neutral-800 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{
                        width: `${m.val}%`,
                        backgroundColor: m.color,
                        boxShadow: `0 0 8px ${m.color}`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Attack Type & Weakness Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 pt-6 border-t border-neutral-800">
              <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800">
                <span className="text-[10px] font-cinzel text-neutral-500 uppercase tracking-widest block mb-1">
                  ATTACK TYPE
                </span>
                <span className="text-xs font-semibold text-red-400">
                  {character.transformation.attackType}
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800">
                <span className="text-[10px] font-cinzel text-neutral-500 uppercase tracking-widest block mb-1">
                  KNOWN WEAKNESS
                </span>
                <span className="text-xs font-semibold text-neutral-300">
                  {character.transformation.weakness}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation: Transformation Video Vault vs Kill Methodology vs Techniques vs Packages */}
      <div className="flex flex-wrap border-b border-neutral-800 gap-4 mb-8">
        <button
          onClick={() => setActiveTab('transformation')}
          className={`pb-3 text-xs font-cinzel font-bold tracking-wider cursor-pointer border-b-2 transition-all flex items-center gap-2 ${
            activeTab === 'transformation'
              ? 'border-red-500 text-red-400'
              : 'border-transparent text-neutral-400 hover:text-white'
          }`}
        >
          <Video className="w-4 h-4" />
          <span>FINAL FORM VIDEO VAULT & TRANSFORMATION</span>
        </button>
        <button
          onClick={() => setActiveTab('methodology')}
          className={`pb-3 text-xs font-cinzel font-bold tracking-wider cursor-pointer border-b-2 transition-all flex items-center gap-2 ${
            activeTab === 'methodology'
              ? 'border-red-500 text-red-400'
              : 'border-transparent text-neutral-400 hover:text-white'
          }`}
        >
          <Skull className="w-4 h-4" />
          <span>KILL METHODOLOGY</span>
        </button>
        <button
          onClick={() => setActiveTab('techniques')}
          className={`pb-3 text-xs font-cinzel font-bold tracking-wider cursor-pointer border-b-2 transition-all flex items-center gap-2 ${
            activeTab === 'techniques'
              ? 'border-red-500 text-red-400'
              : 'border-transparent text-neutral-400 hover:text-white'
          }`}
        >
          <Zap className="w-4 h-4" />
          <span>SIGNATURE TECHNIQUES ({character.techniques.length})</span>
        </button>
        <button
          onClick={() => setActiveTab('packages')}
          className={`pb-3 text-xs font-cinzel font-bold tracking-wider cursor-pointer border-b-2 transition-all flex items-center gap-2 ${
            activeTab === 'packages'
              ? 'border-red-500 text-red-400'
              : 'border-transparent text-neutral-400 hover:text-white'
          }`}
        >
          <Award className="w-4 h-4" />
          <span>COMMISSION PACKAGES ({character.packages.length})</span>
        </button>
      </div>

      {/* TAB 1: 25-Second Transformation Scene & Video Vault */}
      {activeTab === 'transformation' && (
        <TransformationVideoSection character={character} />
      )}

      {/* TAB 2: Kill Methodology Dossier */}
      {activeTab === 'methodology' && (
        <div className="p-6 sm:p-8 rounded-3xl bg-black/90 border border-neutral-800/80 space-y-4 animate-fade-in shadow-2xl">
          <h4 className="font-cinzel text-xs font-bold text-amber-400 tracking-widest uppercase mb-2">
            HOW THIS PROVIDER ELIMINATES YOUR TARGET
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-neutral-300">
            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800">
              <span className="font-cinzel text-red-400 font-bold block mb-1">
                INFILTRATION & APPROACH
              </span>
              <p className="font-light">{character.killMethodology.approach}</p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800">
              <span className="font-cinzel text-red-400 font-bold block mb-1">
                EXECUTION STYLE & FATALITY
              </span>
              <p className="font-light">{character.killMethodology.executionStyle}</p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800">
              <span className="font-cinzel text-red-400 font-bold block mb-1">
                PSYCHOLOGICAL IMPACT ON ADVERSARIES
              </span>
              <p className="font-light">{character.killMethodology.psychologicalImpact}</p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800">
              <span className="font-cinzel text-red-400 font-bold block mb-1">
                CLEANUP & ZERO-TRACE GUARANTEE
              </span>
              <p className="font-light">{character.killMethodology.cleanupGuarantee}</p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: Lethal Techniques Breakdown */}
      {activeTab === 'techniques' && (
        <div className="space-y-4 animate-fade-in">
          {character.techniques.map((tech, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-black/90 border border-neutral-800 hover:border-red-600/60 transition-all shadow-xl"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div>
                  <h4 className="font-cinzel text-lg font-bold text-white tracking-wider">
                    {tech.name}
                  </h4>
                  <p className="font-cinzel text-xs text-amber-400 font-bold">
                    {tech.formNumber}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded bg-neutral-900 border border-neutral-700 text-xs font-cinzel text-neutral-300">
                    {tech.range}
                  </span>
                  <span className="px-3 py-1 rounded bg-red-950/80 border border-red-600 text-xs font-cinzel font-bold text-red-400">
                    {tech.lethality}% FATALITY
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 font-light mb-3 leading-relaxed">
                {tech.description}
              </p>

              <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800/80 text-xs text-red-300 flex items-center gap-2">
                <Skull className="w-3.5 h-3.5 text-red-500 shrink-0" />
                <span>Target Outcome: {tech.targetOutcome}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 4: Commission Packages & Fictional Offerings */}
      {activeTab === 'packages' && (
        <div className="space-y-4 animate-fade-in">
          {character.packages.map((pkg) => (
            <div
              key={pkg.id}
              onClick={() => setSelectedPackage(pkg)}
              className={`p-6 sm:p-8 rounded-3xl border transition-all cursor-pointer ${
                selectedPackage?.id === pkg.id
                  ? 'bg-neutral-950 border-red-500 shadow-[0_0_30px_rgba(220,38,38,0.5)]'
                  : 'bg-black/80 border-neutral-800 hover:border-neutral-700'
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="px-3.5 py-1 rounded-full bg-red-950 border border-red-600/80 text-xs font-cinzel font-bold text-red-300">
                  {pkg.tier}
                </span>
                <span className="text-xs font-cinzel text-neutral-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  {pkg.turnaroundTime}
                </span>
              </div>

              <h4 className="font-cinzel text-xl sm:text-2xl font-black text-white tracking-wider mb-2">
                {pkg.title}
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 font-light mb-4">
                {pkg.description}
              </p>

              {/* Offering Price */}
              <div className="p-4 rounded-xl bg-black border border-red-900/60 mb-4 flex items-center justify-between">
                <span className="text-xs font-cinzel text-neutral-400 uppercase tracking-wider">
                  REQUIRED BLOOD TITHE
                </span>
                <span className="font-cinzel text-xs sm:text-sm font-bold text-amber-300">
                  {pkg.priceOffer}
                </span>
              </div>

              {/* Deliverables List */}
              <div className="space-y-2">
                {pkg.deliverables.map((del, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-neutral-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Primary CTA: Commission Evil Service */}
      <div className="pt-8 flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => {
            soundEngine.playTaikoDrum(50, 1.2);
            onRequestService(character, selectedPackage || undefined);
          }}
          className="flex-1 py-4 px-8 rounded-2xl bg-gradient-to-r from-red-700 via-red-800 to-red-950 hover:from-red-600 hover:to-red-900 text-white font-cinzel text-sm font-black tracking-[0.25em] border border-red-400 shadow-[0_0_30px_rgba(220,38,38,0.7)] hover:shadow-[0_0_45px_rgba(220,38,38,1)] transition-all cursor-pointer flex items-center justify-center gap-3 transform hover:-translate-y-0.5 active:translate-y-0"
        >
          <ShieldAlert className="w-5 h-5 text-amber-300 animate-pulse" />
          <span>COMMISSION THIS EVIL SERVICE</span>
        </button>
      </div>
    </div>
  );
};
