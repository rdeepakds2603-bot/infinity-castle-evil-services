import { useState } from 'react';
import type { AppPhase, CharacterData, EvilServicePackage } from './types';
import { CHARACTERS } from './data/charactersData';
import { HeaderNav } from './components/ui/HeaderNav';
import { CastleCanvas } from './components/castle/CastleCanvas';
import { CinematicIntro } from './components/intro/CinematicIntro';
import { ServicesLanding } from './components/services/ServicesLanding';
import { CharacterWall } from './components/character/CharacterWall';
import { CharacterDetailView } from './components/character/CharacterDetailView';
import { MuzanChamber } from './components/master/MuzanChamber';
import { ServiceRequestModal } from './components/request/ServiceRequestModal';
import { soundEngine } from './components/audio/SoundEngine';

export function App() {
  const [phase, setPhase] = useState<AppPhase>('cinematic-intro');
  const [selectedCharacter, setSelectedCharacter] = useState<CharacterData | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<EvilServicePackage | undefined>(undefined);
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);

  // Navigate to character chamber
  const handleSelectCharacter = (character: CharacterData) => {
    setSelectedCharacter(character);
    setPhase('character-chamber');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Open commission modal for specific character & package
  const handleCommissionRequest = (character: CharacterData, pkg?: EvilServicePackage) => {
    setSelectedCharacter(character);
    setSelectedPackage(pkg);
    setIsRequestModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#050304] text-neutral-100 relative selection:bg-red-700 selection:text-white overflow-x-hidden">
      {/* Background Castle Canvas */}
      <CastleCanvas
        isMoving={true}
        ambientIntensity={phase === 'muzan-master-contract' ? 0.3 : 1.0}
        crimsonMode={phase === 'muzan-master-contract'}
      />

      {/* Phase 1: Cinematic Castle Entry */}
      {phase === 'cinematic-intro' && (
        <CinematicIntro
          onComplete={() => {
            setPhase('services-landing');
          }}
        />
      )}

      {/* Main App Layout (Visible after intro) */}
      {phase !== 'cinematic-intro' && (
        <>
          {/* Top Header Navigation */}
          <HeaderNav
            currentPhase={phase}
            onNavigate={(newPhase) => {
              setPhase(newPhase);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onRequestOpen={() => {
              setSelectedCharacter(CHARACTERS[0]);
              setIsRequestModalOpen(true);
            }}
          />

          {/* Phase 2: Evil Services Landing */}
          {phase === 'services-landing' && (
            <ServicesLanding
              onSelectCharacter={handleSelectCharacter}
              onRequestOpen={() => {
                setSelectedCharacter(CHARACTERS[0]);
                setIsRequestModalOpen(true);
              }}
              onNavigateToMaster={() => {
                setPhase('muzan-master-contract');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          )}

          {/* Phase 3: Upper Rank Character Wall */}
          {phase === 'character-wall' && (
            <div className="pt-16">
              <CharacterWall
                onSelectCharacter={handleSelectCharacter}
                onSelectMuzan={() => {
                  setPhase('muzan-master-contract');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            </div>
          )}

          {/* Phase 4 & 5: Character Detail / Power Chamber */}
          {phase === 'character-chamber' && selectedCharacter && (
            <CharacterDetailView
              character={selectedCharacter}
              onBack={() => {
                setPhase('services-landing');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onRequestService={handleCommissionRequest}
            />
          )}

          {/* Phase 7: The Master / Muzan Final Contract Chamber */}
          {phase === 'muzan-master-contract' && (
            <MuzanChamber
              onExploreAgain={() => {
                setPhase('cinematic-intro');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onViewServices={() => {
                setPhase('services-landing');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          )}

          {/* Phase 6: Service Request & Blood Seal Modal */}
          <ServiceRequestModal
            isOpen={isRequestModalOpen}
            onClose={() => setIsRequestModalOpen(false)}
            initialCharacter={selectedCharacter || CHARACTERS[0]}
            initialPackage={selectedPackage}
            onProceedToMaster={() => {
              setIsRequestModalOpen(false);
              setPhase('muzan-master-contract');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />

          {/* Footer */}
          <footer className="relative z-10 border-t border-neutral-900 bg-black/90 py-12 px-4 sm:px-6 lg:px-8 text-center text-xs text-neutral-500 font-cinzel">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="font-japanese text-amber-500 text-lg">⛩️</span>
                <span className="text-neutral-400 font-bold tracking-widest">
                  INFINITY CASTLE EVIL SERVICES • 無限城
                </span>
              </div>
              <p className="tracking-wider">
                Fictional Supernatural Marketplace • Created for Anime Supervillain Services Hackathon
              </p>
              <div className="flex items-center gap-4 text-neutral-400">
                <button
                  onClick={() => {
                    soundEngine.playBiwaPluck(220, 0.4);
                    setPhase('services-landing');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-red-400 transition-colors cursor-pointer"
                >
                  SERVICES
                </button>
                <span>•</span>
                <button
                  onClick={() => {
                    soundEngine.playBiwaPluck(260, 0.4);
                    setPhase('character-wall');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-red-400 transition-colors cursor-pointer"
                >
                  UPPER RANKS
                </button>
                <span>•</span>
                <button
                  onClick={() => {
                    soundEngine.playMuzanDarkPulse();
                    setPhase('muzan-master-contract');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-red-400 transition-colors cursor-pointer"
                >
                  THE MASTER
                </button>
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;
