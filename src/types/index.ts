export type UpperRankId = 
  | 'kokushibo'
  | 'doma'
  | 'akaza'
  | 'hantengu'
  | 'gyokko'
  | 'gyutaro-daki'
  | 'muzan';

export interface KillTechnique {
  name: string;
  formNumber: string;
  lethality: number; // 1-100
  range: string;
  description: string;
  targetOutcome: string;
}

export interface EvilServicePackage {
  id: string;
  title: string;
  tier: 'STANDARD EXECUTION' | 'MASS EXTINCTION' | 'PERPETUAL TORMENT' | 'SUPREME ANNIHILATION';
  priceOffer: string;
  turnaroundTime: string;
  description: string;
  deliverables: string[];
}

export interface TransformationDetails {
  originalForm: string;
  finalForm: string;
  transformationTrigger: string;
  transformationDuration: string; // e.g. "25 Seconds"
  transformationAura: string;
  attackType: string;
  threatLevel: 'GOD-TIER CALAMITY' | 'CATASTROPHIC' | 'CONTINENTAL THREAT' | 'SUPREME EXTINCTION';
  specialAbility: string;
  weakness: string;
  transformationStages: Array<{
    second: string;
    stage: string;
    description: string;
  }>;
  videoReferencePrompt: string;
}

export interface CharacterData {
  id: UpperRankId;
  rank: string;
  rankNumber: number | null;
  name: string;
  title: string;
  serviceTitle: string;
  tagline: string;
  ability: string;
  bloodDemonArt: string;
  strength: string;
  contractType: string;
  lore: string;
  quote: string;
  themeColor: {
    primary: string;
    secondary: string;
    glow: string;
    accent: string;
    bgGradient: string;
    borderGlow: string;
  };
  metrics: {
    power: number; // 1-100
    speed: number;
    range: number;
    cruelty: number;
    contractFeasibility: number;
    targetSurvivalRate: number; // 0%
  };
  transformation: TransformationDetails;
  killMethodology: {
    approach: string;
    executionStyle: string;
    psychologicalImpact: string;
    cleanupGuarantee: string;
  };
  techniques: KillTechnique[];
  packages: EvilServicePackage[];
  signatureEffect: 'moon-slashes' | 'ice-lotus' | 'compass-needle' | 'wood-dragons' | 'water-pots' | 'dual-sickle-obi' | 'blood-curse';
  visualAsset: {
    imageSrc: string;
    bannerSrc: string;
    chamberBg: string;
  };
}

export interface EvilServiceRequest {
  id: string;
  selectedProvider: UpperRankId;
  targetName: string;
  targetAffiliation: string;
  servicePackageId: string;
  lethalityTier: string;
  bloodTitheOffering: string;
  disposalPreference: string;
  specialInstructions: string;
  status: 'PENDING_OFFERING' | 'ACCEPTED_BY_UPPER_RANK' | 'CONTRACT_SEALED' | 'DISPATCHED';
  timestamp: string;
}

export type AppPhase = 
  | 'cinematic-intro'
  | 'services-landing'
  | 'character-wall'
  | 'character-chamber'
  | 'request-service'
  | 'request-confirmed'
  | 'muzan-master-contract'
  | 'final-pact-sealed';
