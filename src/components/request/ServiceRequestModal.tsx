import React, { useState } from 'react';
import type { CharacterData, EvilServicePackage, UpperRankId } from '../../types';
import { CHARACTERS } from '../../data/charactersData';
import { soundEngine } from '../audio/SoundEngine';
import {
  X,
  Skull,
  ShieldAlert,
  Flame,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ServiceRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCharacter?: CharacterData;
  initialPackage?: EvilServicePackage;
  onProceedToMaster: () => void;
}

export const ServiceRequestModal: React.FC<ServiceRequestModalProps> = ({
  isOpen,
  onClose,
  initialCharacter,
  onProceedToMaster,
}) => {
  const [selectedCharId, setSelectedCharId] = useState<UpperRankId>(
    initialCharacter?.id || 'kokushibo'
  );
  const [targetName, setTargetName] = useState('Demon Slayer Corps Commander');
  const [targetAffiliation, setTargetAffiliation] = useState('Imperial Stronghold / Elite Guard');
  const [lethalityTier, setLethalityTier] = useState('SUPREME ANNIHILATION');
  const [bloodTithe, setBloodTithe] = useState('500 Liters Sanctified Blood + Eternal Fealty Oath');
  const [disposalMethod, setDisposalMethod] = useState('Total Dimensional Bisection & Vaporization');
  const [specialConditions, setSpecialConditions] = useState('Leave no biological trace; deliver severed weapon hilt as token.');

  // Submission cinematic state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);

  if (!isOpen) return null;

  const currentCharacter =
    CHARACTERS.find((c) => c.id === selectedCharId) || CHARACTERS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Play taiko and seal sound
    soundEngine.playTaikoDrum(40, 1.8);
    soundEngine.playBloodSealStamp();

    setTimeout(() => {
      setIsSubmitting(false);
      setIsAccepted(true);

      // Blood red confetti explosion
      try {
        confetti({
          particleCount: 80,
          spread: 90,
          origin: { y: 0.6 },
          colors: ['#dc2626', '#991b1b', '#fbbf24', '#7f1d1d'],
        });
      } catch {}
    }, 1600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl overflow-y-auto">
      {/* Modal Container */}
      <div className="relative w-full max-w-3xl my-8 rounded-3xl bg-neutral-950 border-2 border-red-700/80 shadow-[0_0_60px_rgba(220,38,38,0.5)] overflow-hidden">
        {/* Top Decorative Shoji Bar */}
        <div className="h-2 w-full bg-gradient-to-r from-red-800 via-amber-500 to-red-800 animate-pulse" />

        {/* Close Button */}
        <button
          onClick={() => {
            soundEngine.playBiwaPluck(180, 0.4);
            onClose();
          }}
          className="absolute top-5 right-5 z-20 p-2 rounded-full bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-700 text-neutral-400 hover:text-white transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="p-6 sm:p-8 border-b border-red-900/40 bg-gradient-to-b from-red-950/40 to-transparent">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-600/60 text-red-400 text-xs font-cinzel tracking-widest w-fit mb-3">
            <Skull className="w-3.5 h-3.5 text-amber-400" />
            <span>COMMISSION PACT BUILDER</span>
          </div>

          <h2 className="font-cinzel-dec text-2xl sm:text-3xl font-black text-white tracking-wider mb-1">
            REQUEST AN EVIL SERVICE
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 font-cinzel tracking-wider">
            All contracts sealed within the Infinity Castle are absolute, irreversible, and eternal.
          </p>
        </div>

        {/* CONTENT STATE 1: CONTRACT FORM */}
        {!isAccepted && (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            {/* Selected Demon Provider Bar with Real Uploaded Photo */}
            <div className="p-4 rounded-2xl bg-black border border-red-900/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-20 rounded-xl bg-neutral-900 border border-neutral-700 overflow-hidden flex items-center justify-center shrink-0">
                  {currentCharacter.visualAsset.videoSrc ? (
                    <video
                      src={currentCharacter.visualAsset.videoSrc}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover object-center"
                    />
                  ) : (
                    <img
                      src={currentCharacter.visualAsset.imageSrc}
                      alt={currentCharacter.name}
                      className="w-full h-full object-cover object-top"
                    />
                  )}
                </div>
                <div>
                  <span className="text-[10px] font-cinzel text-neutral-500 uppercase tracking-widest block">
                    SELECTED SERVICE PROVIDER
                  </span>
                  <h4 className="font-cinzel text-lg font-black text-white">
                    {currentCharacter.name} ({currentCharacter.rank})
                  </h4>
                  <p
                    className="font-cinzel text-xs font-bold"
                    style={{ color: currentCharacter.themeColor.accent }}
                  >
                    {currentCharacter.serviceTitle}
                  </p>
                </div>
              </div>

              {/* Change Provider Dropdown */}
              <select
                value={selectedCharId}
                onChange={(e) => {
                  const id = e.target.value as UpperRankId;
                  setSelectedCharId(id);
                  soundEngine.playBiwaPluck(240, 0.4);
                }}
                className="w-full sm:w-auto px-3.5 py-2 rounded-lg bg-neutral-900 border border-neutral-700 text-xs font-cinzel text-neutral-200 focus:border-red-500 outline-none cursor-pointer"
              >
                {CHARACTERS.map((char) => (
                  <option key={char.id} value={char.id}>
                    {char.rank} — {char.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Target Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-cinzel text-neutral-300 font-bold uppercase tracking-wider mb-2">
                  TARGET DESIGNATION / NAME
                </label>
                <input
                  type="text"
                  value={targetName}
                  onChange={(e) => setTargetName(e.target.value)}
                  placeholder="e.g. Master Swordsman, Rebel Warlord"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-black border border-neutral-800 text-sm text-neutral-100 placeholder-neutral-600 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-cinzel text-neutral-300 font-bold uppercase tracking-wider mb-2">
                  TARGET FACTION / STRONGHOLD
                </label>
                <input
                  type="text"
                  value={targetAffiliation}
                  onChange={(e) => setTargetAffiliation(e.target.value)}
                  placeholder="e.g. Imperial Fortress, Garrison Syndicate"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-black border border-neutral-800 text-sm text-neutral-100 placeholder-neutral-600 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all"
                />
              </div>
            </div>

            {/* Lethality Tier Selection */}
            <div>
              <label className="block text-xs font-cinzel text-neutral-300 font-bold uppercase tracking-wider mb-2">
                DESIRED LETHALITY TIER
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  'SURGICAL HIT',
                  'MASS EXTINCTION',
                  'PERPETUAL TORMENT',
                  'SUPREME ANNIHILATION',
                ].map((tier) => (
                  <button
                    type="button"
                    key={tier}
                    onClick={() => setLethalityTier(tier)}
                    className={`py-2.5 px-3 rounded-xl text-[11px] font-cinzel font-bold tracking-wider border transition-all cursor-pointer ${
                      lethalityTier === tier
                        ? 'bg-red-950 border-red-500 text-white shadow-[0_0_15px_rgba(220,38,38,0.5)]'
                        : 'bg-black border-neutral-800 text-neutral-400 hover:border-neutral-700'
                    }`}
                  >
                    {tier}
                  </button>
                ))}
              </div>
            </div>

            {/* Blood Tithe Offering */}
            <div>
              <label className="block text-xs font-cinzel text-neutral-300 font-bold uppercase tracking-wider mb-2">
                BLOOD TITHE OFFERING (FICTIONAL CURRENCY)
              </label>
              <select
                value={bloodTithe}
                onChange={(e) => setBloodTithe(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-black border border-neutral-800 text-sm text-amber-300 focus:border-red-500 outline-none cursor-pointer"
              >
                <option value="100 Liters Sanctified Human Blood + Royal Lineage Oath">
                  🩸 100 Liters Sanctified Human Blood + Royal Lineage Oath
                </option>
                <option value="500 Liters Sanctified Blood + Eternal Fealty Oath">
                  🩸 500 Liters Sanctified Blood + Eternal Fealty Oath
                </option>
                <option value="300 Frightened Captives + Sorrow Tithe">
                  ⛓️ 300 Frightened Captives + Sorrow Tithe
                </option>
                <option value="Dynasty Consecration + Blue Spider Lily Coordinates">
                  💮 Dynasty Consecration + Blue Spider Lily Coordinates
                </option>
                <option value="Immortal Demon Loyalty Bond">
                  ⛩️ Immortal Demon Loyalty Bond to Muzan
                </option>
              </select>
            </div>

            {/* Disposal Preference */}
            <div>
              <label className="block text-xs font-cinzel text-neutral-300 font-bold uppercase tracking-wider mb-2">
                TARGET DISPOSAL PREFERENCE
              </label>
              <input
                type="text"
                value={disposalMethod}
                onChange={(e) => setDisposalMethod(e.target.value)}
                placeholder="e.g. Vaporized, Cryogenic Sculpture, Living Vase"
                className="w-full px-4 py-3 rounded-xl bg-black border border-neutral-800 text-sm text-neutral-100 focus:border-red-500 outline-none transition-all"
              />
            </div>

            {/* Special Instructions */}
            <div>
              <label className="block text-xs font-cinzel text-neutral-300 font-bold uppercase tracking-wider mb-2">
                SPECIAL KILL CONDITIONS / INSTRUCTIONS
              </label>
              <textarea
                value={specialConditions}
                onChange={(e) => setSpecialConditions(e.target.value)}
                rows={2}
                className="w-full px-4 py-3 rounded-xl bg-black border border-neutral-800 text-sm text-neutral-100 focus:border-red-500 outline-none transition-all"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-red-700 via-red-800 to-red-950 hover:from-red-600 hover:to-red-900 text-white font-cinzel text-sm font-black tracking-[0.25em] border border-red-500 shadow-[0_0_30px_rgba(220,38,38,0.7)] hover:shadow-[0_0_45px_rgba(220,38,38,1)] transition-all cursor-pointer flex items-center justify-center gap-3 disabled:opacity-50"
            >
              <ShieldAlert className="w-5 h-5 text-amber-300 animate-pulse" />
              <span>{isSubmitting ? 'SEALING BLOOD PACT...' : 'SUBMIT EVIL CONTRACT'}</span>
            </button>
          </form>
        )}

        {/* CONTENT STATE 2: CINEMATIC SEAL ACCEPTANCE */}
        {isAccepted && (
          <div className="p-8 sm:p-12 text-center space-y-6 animate-fade-in">
            {/* Animated Crimson Blood Seal */}
            <div className="w-28 h-28 mx-auto rounded-full bg-red-950 border-4 border-red-500 shadow-[0_0_50px_rgba(220,38,38,0.9)] flex items-center justify-center animate-seal-stamp">
              <span className="font-cinzel text-2xl text-amber-300 font-black">
                SEALED
              </span>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/90 border border-red-500 text-red-300 text-xs font-cinzel font-bold tracking-widest">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>REQUEST SANCTIONED BY {currentCharacter.rank}</span>
            </div>

            <h3 className="font-cinzel-dec text-3xl sm:text-4xl font-black text-white tracking-wider">
              BLOOD PACT ACCEPTED
            </h3>

            <p className="text-sm sm:text-base text-neutral-300 font-light max-w-lg mx-auto leading-relaxed">
              <strong className="text-red-400 font-cinzel">{currentCharacter.name}</strong> has acknowledged your target (<span className="text-amber-300">{targetName}</span>). The execution parameters have been locked into the Infinity Castle ledger.
            </p>

            {/* Contract Summary Box */}
            <div className="max-w-md mx-auto p-4 rounded-xl bg-black/90 border border-red-900/80 text-left space-y-2 text-xs font-cinzel">
              <div className="flex justify-between text-neutral-400">
                <span>TARGET:</span>
                <span className="text-white font-bold">{targetName}</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>LETHALITY:</span>
                <span className="text-red-400 font-bold">{lethalityTier}</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>TITHE:</span>
                <span className="text-amber-300 truncate max-w-[200px]">{bloodTithe}</span>
              </div>
            </div>

            {/* Proceed to The Master CTA */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => {
                  soundEngine.playMuzanDarkPulse();
                  onClose();
                  onProceedToMaster();
                }}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 via-red-700 to-red-900 text-white font-cinzel text-xs font-black tracking-[0.25em] border border-red-400 shadow-[0_0_35px_rgba(220,38,38,0.8)] hover:shadow-[0_0_50px_rgba(220,38,38,1)] transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Flame className="w-4 h-4 text-amber-300 animate-pulse" />
                <span>PROCEED TO THE MASTER (MUZAN)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 text-xs font-cinzel tracking-widest border border-neutral-700 transition-all cursor-pointer"
              >
                RETURN TO CASTLE
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
