import type { CharacterData } from '../types';

export const CHARACTERS: CharacterData[] = [
  {
    id: 'kokushibo',
    rank: 'UPPER RANK 1',
    rankNumber: 1,
    name: 'Kokushibo',
    title: 'THE MOON BLADE EMPEROR',
    serviceTitle: 'MOONBREATH COMBAT MASTERY',
    tagline: 'Execution of Supreme Targets & Dimensional Blade Cleaving',
    ability: 'Moon Breathing & Sentient Flesh Katana Mastery',
    bloodDemonArt: 'Crescent Moon Blade Swarm',
    strength: 'Supreme Swordsmanship & 6-Eye Spatial Foresight',
    contractType: 'SUPREME SANCTION COVENANT',
    quote: 'Be thankful. You will fall by the edge of an art honed across four centuries of relentless perfection.',
    lore: 'Originally a legendary master samurai from the Sengoku Era. He wields the Kyokokukamusari, a sentient demonic katana lined with pulsating eyes that generates countless chaotic crescent-shaped spatial blades with every fraction of a swing.',
    themeColor: {
      primary: '#9333ea', // Purple
      secondary: '#4c1d95',
      glow: 'rgba(168, 85, 247, 0.45)',
      accent: '#c084fc',
      bgGradient: 'from-purple-950 via-slate-950 to-black',
      borderGlow: 'border-purple-600/60 shadow-[0_0_25px_rgba(168,85,247,0.35)]',
    },
    metrics: {
      power: 99,
      speed: 98,
      range: 92,
      cruelty: 85,
      contractFeasibility: 95,
      targetSurvivalRate: 0,
    },
    transformation: {
      originalForm: 'Human Sengoku Master Swordsman (Michikatsu Tsugikuni)',
      finalForm: 'Awakened Six-Eyed Crescent Moon Demon Lord',
      transformationTrigger: 'Unsheathing the Flesh Blade under the Full Blood Moon',
      transformationDuration: '25 Seconds',
      transformationAura: 'Dark Violet & Crimson Spatial Distortion with Swirling Crescent Blades',
      attackType: 'Dimensional Blade Cleaving & Multi-Point Spatial Bisection',
      threatLevel: 'GOD-TIER CALAMITY',
      specialAbility: 'Sentient Flesh Katana Blade Extension & Spontaneous Chaotic Crescent Storms',
      weakness: 'Sunlight, Simultaneous Multi-Point Crimson Blade Decapitation, Internal Soul Conflict',
      transformationStages: [
        {
          second: '00:00 - 00:05',
          stage: 'Initial Breath & Full Moon Alignment',
          description: 'Dark purple spatial mist envelops the chamber as six demonic eyes open in unison under the glowing celestial moon.',
        },
        {
          second: '00:05 - 00:12',
          stage: 'Flesh Katana Awakening',
          description: 'The blade unsheathes, its biological eye veins throbbing with demonic blood while miniature crescent blades ignite in orbit.',
        },
        {
          second: '00:12 - 00:18',
          stage: 'Dimensional Aura Release',
          description: 'High-speed camera zoom-in reveals thousands of sharp crescent scythes slicing through gravity and shattering the surrounding air.',
        },
        {
          second: '00:18 - 00:25',
          stage: 'Supreme Final Combat Pose',
          description: 'Kokushibo locks into an absolute Iaijutsu execution stance, eyes glowing gold-red with the final Moon Breathing posture.',
        },
      ],
      videoReferencePrompt: 'Cinematic anime transformation clip showing Kokushibo drawing his eye-covered flesh katana under a giant violet moon, releasing spinning crescent energy blades in 4K slow motion.',
    },
    killMethodology: {
      approach: 'Instantaneous dimensional ambush via high-speed sword draw across the battlefield.',
      executionStyle: 'Spatial bisection with thousands of autonomous microscopic crescent moon blades that shred armor, weapons, and flesh simultaneously.',
      psychologicalImpact: 'Target experiences complete paralysis under the oppressive aura of six demonic eyes reading every muscular contraction.',
      cleanupGuarantee: 'Molecular dissection leaving zero biological trace; target is rendered into vaporous mist.',
    },
    techniques: [
      {
        name: 'Dark Moon - Evening Palace',
        formNumber: 'First Form',
        lethality: 96,
        range: 'Mid-Range (15m)',
        description: 'A blinding singular horizontal slash releasing dozens of chaotic curved crescent blades.',
        targetOutcome: 'Instant decapitation of up to 10 targets in 0.04 seconds.'
      },
      {
        name: 'Moon Spirit Calamitous Eddy',
        formNumber: 'Fifth Form',
        lethality: 98,
        range: 'Wide Area (30m)',
        description: 'Curving vortex slashes layered without moving the blade, creating a self-sustaining storm of crescent scythes.',
        targetOutcome: 'Complete structural destruction and target vaporized into mist.'
      },
      {
        name: 'Moonbow - Half-Broken Moon',
        formNumber: 'Sixteenth Form',
        lethality: 100,
        range: 'Supreme Range (60m)',
        description: 'Downwards cascade of colossal six-fold vertical blade columns cratering the battlefield.',
        targetOutcome: 'Total annihilation of entire fortresses and high-priority armies.'
      }
    ],
    packages: [
      {
        id: 'koku-pkg-1',
        title: 'Singular Supreme Execution',
        tier: 'STANDARD EXECUTION',
        priceOffer: '100 Liters Sanctified Blood + Royal Lineage Oath',
        turnaroundTime: 'Instantaneous (Under 1 Hour)',
        description: 'Surgical elimination of any single warlord, master swordsman, or fortress leader.',
        deliverables: [
          'Guaranteed zero-trace assassination',
          'Destruction of target heirloom weapon',
          'Proof of severed token delivered to your threshold'
        ]
      },
      {
        id: 'koku-pkg-2',
        title: 'Calamitous Moon Oblivion',
        tier: 'SUPREME ANNIHILATION',
        priceOffer: '1,000 Souls + Eternal Fealty to Upper Rank 1',
        turnaroundTime: 'Within 1 Nightfall',
        description: 'Complete eradication of an entire syndicate, army division, or fortified compound.',
        deliverables: [
          'Full-scale spatial obliteration of compound',
          'Zero collateral harm to client premises',
          'Protective demonic ward cast over client sanctuary'
        ]
      }
    ],
    signatureEffect: 'moon-slashes',
    visualAsset: {
      imageSrc: '/assets/characters/kokushibo.jpg',
      bannerSrc: '/assets/characters/kokushibo.jpg',
      chamberBg: 'bg-gradient-to-b from-purple-950/70 via-black to-black',
    }
  },
  {
    id: 'doma',
    rank: 'UPPER RANK 2',
    rankNumber: 2,
    name: 'Doma',
    title: 'THE ETERNAL LOTUS CRYO-LORD',
    serviceTitle: 'FROZEN ETERNITY',
    tagline: 'Mass Cryogenic Purge & Painless Absolute Preservation',
    ability: 'Crystalline Ice Demon Art & Dual Golden War Fans',
    bloodDemonArt: 'Crystalline Powdered Frost',
    strength: 'Atmospheric Cryo-Necrosis & Massive Ice Bodhisattva Statues',
    contractType: 'ETERNAL PARADISE SALVATION PACT',
    quote: 'Do not weep... Within my eternal freezing garden, all your mortal agony ceases forever.',
    lore: 'Cult leader of the Eternal Paradise Faith. He converts his demonic blood into microscopic freezing crystalline mist that necroses the lungs of anyone breathing the air, weaponizing absolute zero with cheerful, theatrical elegance.',
    themeColor: {
      primary: '#06b6d4', // Cyan
      secondary: '#0e7490',
      glow: 'rgba(6, 182, 212, 0.45)',
      accent: '#67e8f9',
      bgGradient: 'from-cyan-950 via-slate-950 to-black',
      borderGlow: 'border-cyan-500/60 shadow-[0_0_25px_rgba(6,182,212,0.35)]',
    },
    metrics: {
      power: 97,
      speed: 94,
      range: 99,
      cruelty: 96,
      contractFeasibility: 92,
      targetSurvivalRate: 0,
    },
    transformation: {
      originalForm: 'Cult Leader with Silver Hair and Blood Crown',
      finalForm: 'True Cryo-Deity: Rime Water Lily Bodhisattva Awakened',
      transformationTrigger: 'Opening Golden War Fans & Releasing Powdered Blood Fog',
      transformationDuration: '25 Seconds',
      transformationAura: 'Sub-Zero Cyan Frost Mist with Blooming Diamond Lotus Petals',
      attackType: 'Atmospheric Cryogenic Necrosis & Giant Ice Summoning',
      threatLevel: 'CATASTROPHIC',
      specialAbility: 'Autonomous Ice Clones (Crystalline Divine Child) & Lung Freezing Powder',
      weakness: 'Heavy Wisteria Poison Dosage, Prolonged Sunlight Exposure',
      transformationStages: [
        {
          second: '00:00 - 00:06',
          stage: 'Chamber Temperature Drop',
          description: 'The surrounding air instantly drops to absolute zero, frosting all surfaces as Doma unfolds twin golden fans with a playful smile.',
        },
        {
          second: '00:06 - 00:14',
          stage: 'Lotus Ice Bloom',
          description: 'Razor-sharp crystalline lotus flowers burst from the floor, showering the air with lethal freezing powdered mist.',
        },
        {
          second: '00:14 - 00:20',
          stage: 'Bodhisattva Colossus Manifestation',
          description: 'A colossal ice statue rises behind Doma, channeling glacial blizzards capable of freezing entire city blocks.',
        },
        {
          second: '00:20 - 00:25',
          stage: 'Elegantly Chilling Final Pose',
          description: 'Doma rests his golden fan against his cheek, eyes glowing rainbow-gold as frost crystals swirl in slow motion.',
        },
      ],
      videoReferencePrompt: 'Anime transformation sequence showing Doma waving golden tessen fans to freeze the surrounding air into blooming crystal lotus ice sculptures with rainbow eye glints.',
    },
    killMethodology: {
      approach: 'Atmospheric saturation of the target district with undetectable pulverized ice mist.',
      executionStyle: 'Lungs freeze upon the first inhalation, followed by instant cellular crystallization and graceful lotus flower impalement.',
      psychologicalImpact: 'Targets perish with a blissful frozen smile, unable to scream as vocal cords shatter like brittle glass.',
      cleanupGuarantee: 'Complete cryogenic preservation for display or zero-trace melting into clear glacial water.',
    },
    techniques: [
      {
        name: 'Lotus Vines: Crystalline Ice Bloom',
        formNumber: 'Technique 1',
        lethality: 94,
        range: 'Mid-Range (20m)',
        description: 'Creates razor-sharp lotus flowers and vines of jagged solid ice that ensnare and flay approaching adversaries.',
        targetOutcome: 'Complete immobilization followed by multi-point cryogenic impalement.'
      },
      {
        name: 'Freezing Mist: Cloud of Winter Tears',
        formNumber: 'Technique 2',
        lethality: 97,
        range: 'Wide Area (100m)',
        description: 'Spreads an invisible cloud of microscopic powdered ice that freezes respiratory tissue on inhalation.',
        targetOutcome: 'Mass internal asphyxiation of all biological targets within 12 seconds.'
      },
      {
        name: 'Rime - Water Lily Bodhisattva',
        formNumber: 'Ultimate Technique',
        lethality: 99,
        range: 'Colossal (200m)',
        description: 'Manifests a towering giant Ice Bodhisattva generating blizzards that freeze entire armies in seconds.',
        targetOutcome: 'Total district deep-freeze into a permanent glacial monument.'
      }
    ],
    packages: [
      {
        id: 'doma-pkg-1',
        title: 'Silent Winter Inhalation',
        tier: 'STANDARD EXECUTION',
        priceOffer: '150 Youthful Devotees + Cult Hall Dedication',
        turnaroundTime: 'Overnight Frostfall',
        description: 'Discreet elimination where target appears to have passed away peacefully in their sleep.',
        deliverables: [
          'Undetectable toxicological footprint',
          'Permanent preservation of target assets intact',
          'Painless aesthetic exit'
        ]
      },
      {
        id: 'doma-pkg-2',
        title: 'Glacial Paradise Cleansing',
        tier: 'MASS EXTINCTION',
        priceOffer: 'Whole Clan Consecration + Sacred Shrine Tithe',
        turnaroundTime: 'Single Midnight',
        description: 'Full regional purge freezing rival organizations down to sub-zero crystal sculptures.',
        deliverables: [
          'Complete extinction of target organization',
          'Sculpted ice trophies delivered upon request',
          'Eternal frost ward protecting client estates'
        ]
      }
    ],
    signatureEffect: 'ice-lotus',
    visualAsset: {
      imageSrc: '/assets/characters/doma.jpg',
      bannerSrc: '/assets/characters/doma.jpg',
      chamberBg: 'bg-gradient-to-b from-cyan-950/70 via-black to-black',
    }
  },
  {
    id: 'akaza',
    rank: 'UPPER RANK 3',
    rankNumber: 3,
    name: 'Akaza',
    title: 'THE DESTRUCTIVE MARTIAL PURIST',
    serviceTitle: 'COMBAT EVOLUTION',
    tagline: 'Close-Quarter Annihilation & Fighting Spirit Elimination',
    ability: 'Soryu Martial Arts & Compass Needle Willpower Tracking',
    bloodDemonArt: 'Destructive Death Shockwaves',
    strength: 'Supersonic Kinetic Fists & Omnidirectional Counter-Strikes',
    contractType: 'WARRIOR CODE OBLIVION CONTRACT',
    quote: 'Surpass your fragile mortal limits... or be crushed beneath the weight of my fists.',
    lore: 'Master of the ancient Soryu bare-handed martial art. His Blood Demon Art deploys a 12-point compass snowflake beneath the target that tracks fighting spirit, allowing him to anticipate and smash every attack with devastating kinetic shockwaves.',
    themeColor: {
      primary: '#f43f5e', // Rose/Crimson
      secondary: '#9f1239',
      glow: 'rgba(244, 63, 94, 0.45)',
      accent: '#fda4af',
      bgGradient: 'from-rose-950 via-slate-950 to-black',
      borderGlow: 'border-rose-500/60 shadow-[0_0_25px_rgba(244,63,94,0.35)]',
    },
    metrics: {
      power: 96,
      speed: 97,
      range: 84,
      cruelty: 72,
      contractFeasibility: 98,
      targetSurvivalRate: 0,
    },
    transformation: {
      originalForm: 'Soryu Martial Artist (Hakuji)',
      finalForm: 'Destructive Death: Awakened War God Form',
      transformationTrigger: 'Stamping Compass Needle Mandala on Earth & Clenching Fists',
      transformationDuration: '25 Seconds',
      transformationAura: 'Radiant Electric Blue Kinetic Mandala with Pulse Shockwave Rings',
      attackType: 'Close-Quarters Kinetic Pulverization & Shockwave Cannonades',
      threatLevel: 'CATASTROPHIC',
      specialAbility: 'Fighting Spirit Compass Needle & Decapitation Survival via Sheer Will',
      weakness: 'Regaining Mortal Human Memories & Emotional Core, Sunlight',
      transformationStages: [
        {
          second: '00:00 - 00:05',
          stage: 'Compass Needle Deployment',
          description: 'Akaza stomps into a deep martial stance, projecting a glowing 12-point blue snowflake mandala across the battlefield.',
        },
        {
          second: '00:05 - 00:12',
          stage: 'Fighting Spirit Resonance',
          description: 'Blue demonic stripes across his muscular torso ignite with blinding kinetic energy as dual heartbeat shockwaves boom through the ground.',
        },
        {
          second: '00:12 - 00:18',
          stage: 'Shockwave Barrage Acceleration',
          description: 'Hundreds of supersonic air-compression punches fire in milliseconds, cratering surrounding structures into dust.',
        },
        {
          second: '00:18 - 00:25',
          stage: 'Supreme Annihilation Stance',
          description: 'Akaza locks into the Annihilation Style posture, fists surrounded by spiraling blue and pink destructive plasma rings.',
        },
      ],
      videoReferencePrompt: 'High-impact anime transformation clip featuring Akaza deploying the Destructive Death Compass Needle on the ground and launching explosive blue shockwave punches in fast-paced combat.',
    },
    killMethodology: {
      approach: 'Direct frontal breach at supersonic velocity, detonating the terrain with Compass Needle deployment.',
      executionStyle: 'Devastating shockwave punches that rupture internal organs, shatter bones, and punch clean through reinforced armor.',
      psychologicalImpact: 'Target watches their ultimate moves effortlessly read and countered before their core is crushed.',
      cleanupGuarantee: 'Target is pulverized via kinetic shockwaves; no traces of vital organs remain intact.',
    },
    techniques: [
      {
        name: 'Destructive Death: Compass Needle',
        formNumber: 'Foundation',
        lethality: 92,
        range: 'Omnidirectional (50m)',
        description: 'Deploys a glowing snowflake compass tracking target fighting spirit for 100% strike accuracy.',
        targetOutcome: 'Total suppression of target evasion capabilities.'
      },
      {
        name: 'Destructive Death: Disorder',
        formNumber: 'Assault Form',
        lethality: 96,
        range: 'Rapid Mid-Range (15m)',
        description: 'A storm of hundreds of dense compressed-air shockwave punches fired in under a fraction of a second.',
        targetOutcome: 'Target body turned into crushed organic pulp.'
      },
      {
        name: 'Destructive Death: Annihilation Style',
        formNumber: 'Supreme Finisher',
        lethality: 100,
        range: 'Point-Blank Core Strike',
        description: 'The ultimate offensive charge focusing explosive kinetic energy into a single devastating fist strike through the heart.',
        targetOutcome: 'Guaranteed chest cavity puncture and instantaneous death.'
      }
    ],
    packages: [
      {
        id: 'akaza-pkg-1',
        title: 'Martial Vanguard Pulverization',
        tier: 'STANDARD EXECUTION',
        priceOffer: '50 Master Martial Artist Duels + Blood Tribute',
        turnaroundTime: 'Immediate (Under 30 Minutes)',
        description: 'Surgical elimination of champion fighters, bodyguards, and elite security commanders.',
        deliverables: [
          'Direct core fist strike execution',
          'Target defenses completely demolished',
          'Zero collateral injury to unarmed civilians'
        ]
      },
      {
        id: 'akaza-pkg-2',
        title: 'Total Force Shockwave Breaker',
        tier: 'SUPREME ANNIHILATION',
        priceOffer: 'Grand Dojo Surrender + 500 Warrior Souls',
        turnaroundTime: 'Within 2 Hours',
        description: 'Full decimation of heavily fortified military encampments and mercenary headquarters.',
        deliverables: [
          'Wall-to-wall kinetic cratering',
          'Overwhelming frontal assault',
          'Absolute demonstration of superior martial power'
        ]
      }
    ],
    signatureEffect: 'compass-needle',
    visualAsset: {
      imageSrc: '/assets/characters/akaza.jpg',
      bannerSrc: '/assets/characters/akaza.jpg',
      chamberBg: 'bg-gradient-to-b from-rose-950/70 via-black to-black',
    }
  },
  {
    id: 'hantengu',
    rank: 'UPPER RANK 4',
    rankNumber: 4,
    name: 'Hantengu (Zohakuten)',
    title: 'THE MULTI-CLONE WRATH DRAGON',
    serviceTitle: 'EMOTION MANIFESTATION',
    tagline: 'Multi-Clone Psychological Warfare & Wood Dragon Shockwaves',
    ability: 'Emotion Splitting & Colossal Wooden Dragon Avatars',
    bloodDemonArt: 'Emotional Avatar Synthesis',
    strength: '5 Clones (Anger, Sorrow, Joy, Pleasure, Hatred) & Thunder Wood Dragons',
    contractType: 'WRATH EMBODIMENT PACT',
    quote: 'You torment the weak! You wicked villains deserve to be crushed into dust by my dragons!',
    lore: 'Cowardly main body that splits into four formidable combat avatars representing Anger (Sekido), Sorrow (Aizetsu), Joy (Urogi), and Pleasure (Karaku), which merge into the supreme wrath form: Zohakuten with his thundering wooden dragons.',
    themeColor: {
      primary: '#eab308', // Amber / Gold
      secondary: '#854d0e',
      glow: 'rgba(234, 179, 8, 0.45)',
      accent: '#fde047',
      bgGradient: 'from-amber-950 via-slate-950 to-black',
      borderGlow: 'border-amber-500/60 shadow-[0_0_25px_rgba(234,179,8,0.35)]',
    },
    metrics: {
      power: 95,
      speed: 91,
      range: 96,
      cruelty: 94,
      contractFeasibility: 89,
      targetSurvivalRate: 0,
    },
    transformation: {
      originalForm: 'Cowardly Old Man Demon with Emotion Clones',
      finalForm: 'Zohakuten: The Supreme Embodiment of Hatred',
      transformationTrigger: 'Sekido Consuming All Clones & Summoning Thunder Drums',
      transformationDuration: '25 Seconds',
      transformationAura: 'Golden Thunder Arcs, Roaring Wooden Dragons, and Heavy Vibration Miasma',
      attackType: 'Sonic Vocal Shockwaves, High-Voltage Lightning & Wooden Dragon Crushing',
      threatLevel: 'CONTINENTAL THREAT',
      specialAbility: '5-Head Wooden Dragon Conjuration & Microscopic Main Body Concealment',
      weakness: 'Locating and Decapitating the Hidden Tiny Main Body (Fear)',
      transformationStages: [
        {
          second: '00:00 - 00:06',
          stage: 'Emotion Avatar Absorption',
          description: 'The four emotion clones dissolve into dark flesh ribbons, fusing into the youthful, furious form of Zohakuten.',
        },
        {
          second: '00:06 - 00:13',
          stage: 'Thunder Drums Manifestation',
          description: 'A ring of floating golden Tomoe drums locks behind his back as blazing red eyes glare through golden lightning.',
        },
        {
          second: '00:13 - 00:19',
          stage: 'Wooden Dragon Emergence',
          description: 'Five massive wooden dragon heads erupt from the ground, roaring with combined lightning and sonic shockwaves.',
        },
        {
          second: '00:19 - 00:25',
          stage: 'Wrath Overlord Final Stance',
          description: 'Zohakuten strikes his drum with dual bone mallets, commanding the dragon forest into a sweeping siege pose.',
        },
      ],
      videoReferencePrompt: 'Dramatic anime transformation scene showing Sekido absorbing the emotion clones to become Zohakuten, summoning thunder drums and 5 wooden dragons with lightning effects.',
    },
    killMethodology: {
      approach: 'Simultaneous quad-directional siege from air, ground, electricity, and wind pressure.',
      executionStyle: 'Zohakuten beats his thunder drums, summoning five-headed colossal wooden dragons that crush and scream sonic ruptures.',
      psychologicalImpact: 'Target is hunted from 5 angles simultaneously with impossible sensory overload before being devoured.',
      cleanupGuarantee: 'Wood dragons devour every physical piece of the target, leaving only clean splintered timber.',
    },
    techniques: [
      {
        name: 'Lightning Spear of Sekido',
        formNumber: 'Thunder Form',
        lethality: 91,
        range: 'Long-Range (40m)',
        description: 'Emits a blinding electrical voltage through the ground that instantly paralyzes nerves.',
        targetOutcome: 'Full neuromuscular collapse within 0.1s.'
      },
      {
        name: 'Compressed Sonic Wind of Urogi',
        formNumber: 'Sonic Form',
        lethality: 93,
        range: 'Wide Cone (50m)',
        description: 'Fires high-frequency vocal shockwaves from dragon mouths that rupture concrete and organs.',
        targetOutcome: 'Target internal brain hemorrhage and organ liquefaction.'
      },
      {
        name: 'Countless Wooden Dragon Waves',
        formNumber: 'Supreme Siege',
        lethality: 98,
        range: 'Territorial (120m)',
        description: 'Summons an endless forest of roaring wooden dragons with combined thunder, wind, and crushing force.',
        targetOutcome: 'Total siege obliteration of castles and armies.'
      }
    ],
    packages: [
      {
        id: 'hantengu-pkg-1',
        title: 'Quad-Emotion Psychological Siege',
        tier: 'PERPETUAL TORMENT',
        priceOffer: '300 Frightened Captives + Sorrow Tithe',
        turnaroundTime: '3 Consecutive Nights',
        description: 'Psychological torture where target is hunted in their nightmares by splitting demonic avatars.',
        deliverables: [
          'Full psychological breakdown of target',
          'Territorial lightning lockouts',
          'Clean dragon consumption termination'
        ]
      },
      {
        id: 'hantengu-pkg-2',
        title: 'Zohakuten Drum Cataclysm',
        tier: 'MASS EXTINCTION',
        priceOffer: 'Entire Provincial Tax Tithe + Blood Oath',
        turnaroundTime: 'Single Thunderstorm',
        description: 'Complete forest dragon takeover crushing entire fortifications into sawdust.',
        deliverables: [
          'Guaranteed structural collapse',
          'Zero survivors policy',
          'Dragon barrier left in place'
        ]
      }
    ],
    signatureEffect: 'wood-dragons',
    visualAsset: {
      imageSrc: '/assets/characters/hantengu.jpg',
      bannerSrc: '/assets/characters/hantengu.jpg',
      chamberBg: 'bg-gradient-to-b from-amber-950/70 via-black to-black',
    }
  },
  {
    id: 'gyokko',
    rank: 'UPPER RANK 5',
    rankNumber: 5,
    name: 'Gyokko',
    title: 'THE GROTESQUE POT METAMORPH',
    serviceTitle: 'REALITY DISTORTION',
    tagline: 'Vase Teleportation, Water Prison Suffocation & Living Artworks',
    ability: 'Porcelain Pot Teleportation & Aquatic Transmutation',
    bloodDemonArt: 'Water Basin Pots & God Hand Transmutation',
    strength: 'Instantaneous Pot Transport & Molten Diamond Scales',
    contractType: 'AVANT-GARDE DEATH ARTISTRY',
    quote: 'HYO HYO! Your agonizing death screams shall serve as the highest note in my newest masterwork vase!',
    lore: 'Obsessed demonic artisan residing inside ornate porcelain vases. His eyes and mouths are grotesquely transposed. He can instantly teleport between any vessel and transmutates victims into macabre living sculptures of biological agony.',
    themeColor: {
      primary: '#10b981', // Emerald
      secondary: '#065f46',
      glow: 'rgba(168, 85, 247, 0.45)',
      accent: '#6ee7b7',
      bgGradient: 'from-emerald-950 via-slate-950 to-black',
      borderGlow: 'border-emerald-500/60 shadow-[0_0_25px_rgba(16,185,129,0.35)]',
    },
    metrics: {
      power: 91,
      speed: 93,
      range: 98,
      cruelty: 99,
      contractFeasibility: 88,
      targetSurvivalRate: 0,
    },
    transformation: {
      originalForm: 'Vase-Dwelling Demon with Transposed Facial Features',
      finalForm: 'True Molted Form: God Hand Serpent Dragon',
      transformationTrigger: 'Shedding Porcelain Vessel to Reveal Diamond Molted Body',
      transformationDuration: '25 Seconds',
      transformationAura: 'Bioluminescent Emerald Aquatic Vortex with Swirling Scales',
      attackType: 'Instant Transmutation Touch & High-Pressure Aquatic Drowning',
      threatLevel: 'CONTINENTAL THREAT',
      specialAbility: 'God Hand Transmutation (Turns All Touched Objects into Flopping Fish)',
      weakness: 'Insulting his Artistic Vases (Loses Composure), Sunlight, Decapitation',
      transformationStages: [
        {
          second: '00:00 - 00:05',
          stage: 'Porcelain Vessel Cracking',
          description: 'The masterwork vase shatters from within as golden and emerald aquatic bubbles flood the chamber floor.',
        },
        {
          second: '00:05 - 00:13',
          stage: 'Molted Serpent Emergence',
          description: 'Gyokko slithers forth in his true muscular serpent form, coated in impenetrable diamond-hard scales.',
        },
        {
          second: '00:13 - 00:19',
          stage: 'God Hand Transmutation Activation',
          description: 'His webbed claw hands glow with iridescent aquatic energy, transmutating ambient matter into living fish.',
        },
        {
          second: '00:19 - 00:25',
          stage: 'True Form Apex Pose',
          description: 'Gyokko coils upon a giant porcelain pillar, grinning through his transposed mouths in a theatrical combat pose.',
        },
      ],
      videoReferencePrompt: 'Creepy high-quality anime transformation of Gyokko shedding his pot to reveal his true serpent-like muscular scale form and summoning water prison bubbles.',
    },
    killMethodology: {
      approach: 'Spontaneous emergence from any small porcelain jar, tea cup, or vase within the target quarters.',
      executionStyle: 'Entrapment inside an inescapable Water Prison Pot where target drowns in enchanted water, followed by fish needle barrage.',
      psychologicalImpact: 'Target experiences claustrophobic terror as everyday ceramics turn into gaping gateways.',
      cleanupGuarantee: 'Victim is compressed and preserved permanently inside a bespoke signed porcelain collector vase.',
    },
    techniques: [
      {
        name: 'Water Prison Pot',
        formNumber: 'Trap Form',
        lethality: 93,
        range: 'Enclosed Sphere (10m)',
        description: 'Traps target inside a dense aquatic sphere with suffocating hydrostatic pressure absorbing all strikes.',
        targetOutcome: 'Painless or agonizing suffocation depending on client specification.'
      },
      {
        name: 'Thousand Needles of Killer Fish',
        formNumber: 'Swarm Form',
        lethality: 95,
        range: 'Rapid Swarm (30m)',
        description: 'Summons hundreds of demonic flying fish that shoot paralytic venomous bone needles.',
        targetOutcome: 'Target paralyzed and corroded into grotesque art form within 8 seconds.'
      },
      {
        name: 'God Hand Scale Annihilation',
        formNumber: 'True Finisher',
        lethality: 98,
        range: 'High-Speed BQC (5m)',
        description: 'Transforms everything he touches into living flopping fish with God Hand transmutation.',
        targetOutcome: 'Target and weapons transmutated into raw biological aquatic biomass.'
      }
    ],
    packages: [
      {
        id: 'gyokko-pkg-1',
        title: 'Living Ceramic Sculpture Commission',
        tier: 'PERPETUAL TORMENT',
        priceOffer: '10 Rare Ancient Artifacts + 200 Blood Gallons',
        turnaroundTime: '1 Sunset Cycle',
        description: 'Target is extracted from the most secure vault and transformed into an ornamental vase.',
        deliverables: [
          'Vase containing target delivered directly to your parlor',
          'Zero signs of forced entry at target vault',
          'Authenticity seal signed by Gyokko'
        ]
      },
      {
        id: 'gyokko-pkg-2',
        title: 'Aquatic District Submersion',
        tier: 'MASS EXTINCTION',
        priceOffer: 'Master Ceramicist Lineage Souls + Gold Tithe',
        turnaroundTime: 'Immediate Surge',
        description: 'Floods target complex with toxic demon fish and inescapable water spheres.',
        deliverables: [
          'Complete lockdown of rival trade post',
          'All target assets safely stored in pots',
          'Territorial vase network left for client defense'
        ]
      }
    ],
    signatureEffect: 'water-pots',
    visualAsset: {
      imageSrc: '/assets/characters/gyokko.jpg',
      bannerSrc: '/assets/characters/gyokko.jpg',
      chamberBg: 'bg-gradient-to-b from-emerald-950/70 via-black to-black',
    }
  },
  {
    id: 'gyutaro-daki',
    rank: 'UPPER RANK 6',
    rankNumber: 6,
    name: 'Gyutaro & Daki',
    title: 'THE DUAL CARNAGE ENTERTAINERS',
    serviceTitle: 'DUAL DEMON CONTRACT',
    tagline: 'Lethal Blood Sickle Poison & Razor-Sharp Obi Sash Strangulation',
    ability: 'Curved Flying Blood Sickles & Razor Obi Web Slashes',
    bloodDemonArt: 'Flying Blood Scythes & Razor Obi Sashes',
    strength: 'Simultaneous Dual Decapitation Condition & Necrotic Blood Poison',
    contractType: 'RED LIGHT DISTRICT DUAL PACT',
    quote: 'Nobody hurts my pretty sister! I will carve your flesh into thin ribbons and watch the poison rot you from the inside!',
    lore: 'Inseparable brother and sister sharing the mantle of Upper Rank 6. Both must be beheaded at the exact same instant to be killed. Gyutaro unleashes fatal rotting blood poison with his bone sickles while Daki slices targets into ribbons with multi-directional razor obi sashes.',
    themeColor: {
      primary: '#ec4899', // Pink / Blood Green Dual
      secondary: '#15803d',
      glow: 'rgba(236, 72, 153, 0.45)',
      accent: '#f472b6',
      bgGradient: 'from-pink-950 via-emerald-950 to-black',
      borderGlow: 'border-pink-500/60 shadow-[0_0_25px_rgba(236,72,153,0.35)]',
    },
    metrics: {
      power: 92,
      speed: 95,
      range: 91,
      cruelty: 98,
      contractFeasibility: 97,
      targetSurvivalRate: 0,
    },
    transformation: {
      originalForm: 'Entertainment District Courtesan (Ume) & Outcast Debt Collector',
      finalForm: 'Twin Demon Lord Synergy: Poison Blood Sickle & Razor Obi Awakened',
      transformationTrigger: 'Gyutaro Emerging from Daki Spine upon Fatal Threat',
      transformationDuration: '25 Seconds',
      transformationAura: 'Neon Crimson Poison Sickle Sparkles & Radiant Magenta Silk Ribbons',
      attackType: 'Multi-Directional Poison Scythe Barrage & Razor Ribbon Web Dissection',
      threatLevel: 'CONTINENTAL THREAT',
      specialAbility: 'Simultaneous Dual Decapitation Rule & Rapid Flesh-Rotting Blood Poison',
      weakness: 'Simultaneous Decapitation of Both Gyutaro and Daki at the Exact Same Instant',
      transformationStages: [
        {
          second: '00:00 - 00:06',
          stage: 'Daki Obi Sashes Unfurl',
          description: 'Daki releases dozens of glowing floral silk belts across the room, slicing walls into cross-sections.',
        },
        {
          second: '00:06 - 00:13',
          stage: 'Gyutaro Awakening from Within',
          description: 'Gyutaro crawls forth from Daki back, twirling dual curved flesh sickles dripping with black-green poison.',
        },
        {
          second: '00:13 - 00:19',
          stage: 'Dual Rampant Blood Cyclone',
          description: 'Flying blood sickles trace homing arcs while silk ribbons form an inescapable dome of flying blades.',
        },
        {
          second: '00:19 - 00:25',
          stage: 'Synchronized Sibling Final Pose',
          description: 'Daki poses gracefully at front with glowing eyes while Gyutaro perches behind her, blades crossed in lethal synergy.',
        },
      ],
      videoReferencePrompt: 'High-octane anime sequence showing Gyutaro emerging from Daki to fight side-by-side, creating an explosive vortex of flying blood sickles and razor obi ribbons.',
    },
    killMethodology: {
      approach: 'Daki infiltrates high-society estates disguised as an elite courtesan while Gyutaro hides inside her back.',
      executionStyle: 'Daki traps the room in a web of flying razor obi ribbons, while Gyutaro launches homing blood sickles coated in lethal necrotic toxin.',
      psychologicalImpact: 'Target realizes they are facing two synchronized apex predators at once; even a minor scratch is 100% fatal.',
      cleanupGuarantee: 'Gyutaro poison dissolves internal organs into blackened sludge; Daki obi sweeps and weaves away all blood splatters.',
    },
    techniques: [
      {
        name: 'Flying Blood Scythes',
        formNumber: 'Gyutaro Form 1',
        lethality: 95,
        range: 'Homing Multi-Angle (35m)',
        description: 'Curved razor crescent blades made of solidified poisonous blood tracking targets by scent.',
        targetOutcome: 'Uncurable necrotic poisoning within 3 seconds of skin contact.'
      },
      {
        name: 'Eight-Layered Razor Obi Slashes',
        formNumber: 'Daki Form 1',
        lethality: 94,
        range: 'Omnidirectional (40m)',
        description: 'Daki unfurls multiple razor-sharp silk belts slicing through stone, steel, and bodies.',
        targetOutcome: 'Target dissected into hundreds of delicate cross-sections.'
      },
      {
        name: 'Circular Rampant Blood Slash',
        formNumber: 'Dual Finisher',
        lethality: 99,
        range: 'Dome Radius (50m)',
        description: 'A colossal vortex shield of poisonous blood sickles spinning outwards, obliterating entire city blocks.',
        targetOutcome: 'Complete eradication of all living entities in the engagement zone.'
      }
    ],
    packages: [
      {
        id: 'gyutaro-pkg-1',
        title: 'Entertainment Infiltration & Poison Kiss',
        tier: 'STANDARD EXECUTION',
        priceOffer: '80 Silk Kimonos + 100 Noble Blood Vials',
        turnaroundTime: 'Single Nightfall',
        description: 'Covert infiltration into heavily guarded banquets with zero alarm raised.',
        deliverables: [
          'Target poisoned with zero trace before main course',
          'All evidence swept inside sealed obi dimensional pockets',
          'Safe extraction of client inside discreet silk carriage'
        ]
      },
      {
        id: 'gyutaro-pkg-2',
        title: 'Dual Demon Annihilation Frenzy',
        tier: 'MASS EXTINCTION',
        priceOffer: 'Entire Merchant Guild Coffers + Eternal Fealty',
        turnaroundTime: 'Immediate Night Sweep',
        description: 'Full tandem rampage across an entire rival entertainment quarter or fortress.',
        deliverables: [
          'Simultaneous two-pronged slaughter',
          'Complete destruction of rival syndicates',
          'Guaranteed dual-demon sanctuary guard'
        ]
      }
    ],
    signatureEffect: 'dual-sickle-obi',
    visualAsset: {
      imageSrc: '/assets/characters/gyutaro_daki.jpg',
      bannerSrc: '/assets/characters/gyutaro_daki.jpg',
      chamberBg: 'bg-gradient-to-b from-pink-950/70 via-emerald-950/40 to-black',
    }
  },
  {
    id: 'muzan',
    rank: 'THE SUPREME MASTER',
    rankNumber: 0,
    name: 'Muzan Kibutsuji',
    title: 'THE PROGENITOR DEMON KING',
    serviceTitle: 'PROGENITOR BLOOD INFUSION & FINAL EXTINCTION',
    tagline: 'Total Biological Domination, Demonic Ascension & Infinite Immortality',
    ability: 'Absolute Genetic Restructuring & Biwa-Controlled Infinity Castle',
    bloodDemonArt: 'Black Blood Demon Curse & Cellular Annihilation',
    strength: '7 Hearts, 5 Brains, Whip Tendrils & Instantaneous Regeneration',
    contractType: 'PROGENITOR ETERNAL BLOOD OATH',
    quote: 'I have existed for a thousand years without a single flaw. Do you truly possess the resolve to partake of my blood?',
    lore: 'The original demon progenitor and absolute sovereign of the Infinity Castle. He can instantly read thoughts, inflict agonizing curses across miles, spawn new Upper Ranks with droplets of his divine demonic blood, and reorder reality inside the castle at will.',
    themeColor: {
      primary: '#dc2626', // Deep Blood Red
      secondary: '#450a0a',
      glow: 'rgba(220, 38, 38, 0.65)',
      accent: '#f87171',
      bgGradient: 'from-red-950 via-slate-950 to-black',
      borderGlow: 'border-red-600/80 shadow-[0_0_35px_rgba(220,38,38,0.55)]',
    },
    metrics: {
      power: 100,
      speed: 100,
      range: 100,
      cruelty: 100,
      contractFeasibility: 99,
      targetSurvivalRate: 0,
    },
    transformation: {
      originalForm: 'Refined Noble Gentleman in Tailored Suit & White Fedora',
      finalForm: 'Combat Form: Supreme Demon King with 8 Bladed Spine Whips',
      transformationTrigger: 'Releasing Progenitor Demonic Blood & Shifting Flesh Armor',
      transformationDuration: '25 Seconds',
      transformationAura: 'Deep Crimson Black Void Lightning & Explosive Shockwave Pulse',
      attackType: 'Supersonic Bladed Flesh Whips & Genetic Cellular Poison Dissolution',
      threatLevel: 'SUPREME EXTINCTION',
      specialAbility: 'Instantaneous Cellular Regeneration, Demon Progenitor Creation, Mind Reading',
      weakness: 'Pure Sunlight, Tamayo Anti-Demon Medicine Matrix, Multiple Organ Decapitation',
      transformationStages: [
        {
          second: '00:00 - 00:05',
          stage: 'Crimson Eye Flare',
          description: 'Muzan sits upon his red throne, his cat-like plum eyes glowing with cosmic malice as the Infinity Castle trembles.',
        },
        {
          second: '00:05 - 00:13',
          stage: 'Flesh Whip Unfurling',
          description: 'Eight razor-sharp bladed whips and four spine tendrils erupt from his back, tearing through concrete and air at Mach 8.',
        },
        {
          second: '00:13 - 00:19',
          stage: 'Shockwave Roar Disintegration',
          description: 'Muzan releases a terrifying biological shockwave that pulverizes weapons and shatters matter at a molecular level.',
        },
        {
          second: '00:19 - 00:25',
          stage: 'Progenitor Godhood Stance',
          description: 'Standing at the center of the shifting castle, Muzan extends a blood-stained hand offering immortality or absolute ruin.',
        },
      ],
      videoReferencePrompt: 'Terrifying anime scene of Muzan Kibutsuji transforming from his aristocratic suit form into his final combat whip form, destroying the Infinity Castle chamber with crimson lightning.',
    },
    killMethodology: {
      approach: 'Omnipresent spatial summoning inside the shifting corridors of the Infinity Castle.',
      executionStyle: 'Rapid-firing bladed spine and leg whips moving at Mach 8, combined with toxic cellular injection that dissolves target DNA in seconds.',
      psychologicalImpact: 'Target experiences cosmic dread and cellular despair under the glare of the Progenitor.',
      cleanupGuarantee: 'Absolute molecular vaporization; target ceases to have ever existed in historical records.',
    },
    techniques: [
      {
        name: 'Black Blood: Brambles of Ruin',
        formNumber: 'Curse Form',
        lethality: 100,
        range: 'Global Dimensional Scope',
        description: 'Manifests barbed tendrils that tear through reality and inject pure Progenitor cellular poison.',
        targetOutcome: 'Instant cellular rupture and genetic decay within milliseconds.'
      },
      {
        name: 'Combat Whip Spines & Shockwave Roar',
        formNumber: 'War Form',
        lethality: 100,
        range: 'Wide Area (80m)',
        description: 'Unleashes 8 bladed arm whips and 4 spine whips with supersonic kinetic shockwaves.',
        targetOutcome: 'Total physical eradication of any mortal or supernatural adversary.'
      },
      {
        name: 'Cellular Infusion & Demonic Ascension',
        formNumber: 'Ascension Pact',
        lethality: 100,
        range: 'Contract Recipient Core',
        description: 'Infuses client with drops of royal blood, granting immortality or immediate cellular destruction upon disloyalty.',
        targetOutcome: 'Client ascends beyond human limitations into immortal demonhood.'
      }
    ],
    packages: [
      {
        id: 'muzan-pkg-1',
        title: 'Progenitor Blood Ascension Pact',
        tier: 'SUPREME ANNIHILATION',
        priceOffer: 'Eternal Fealty + Surrender of Human Identity',
        turnaroundTime: 'Immediate Blood Infusion',
        description: 'Direct ingestion of Muzan blood, granting immortality, superhuman regeneration, and demonic abilities.',
        deliverables: [
          'Complete immunity to mortal diseases and aging',
          'Awakening of personalized Blood Demon Art',
          'Direct protection under the Demon King mantle'
        ]
      },
      {
        id: 'muzan-pkg-2',
        title: 'Total Historical Erasure of Bloodline',
        tier: 'SUPREME ANNIHILATION',
        priceOffer: 'Total Dynasty Consecration + Blue Spider Lily Coordinates',
        turnaroundTime: 'Single Biwa Strum',
        description: 'Dispatching all Upper Ranks simultaneously to wipe target lineage from existence.',
        deliverables: [
          'Full mobilization of Upper Ranks 1 through 6',
          'Total destruction of all generational lineage records',
          'Personal guarantee of the Progenitor'
        ]
      }
    ],
    signatureEffect: 'blood-curse',
    visualAsset: {
      imageSrc: '/assets/characters/muzan.jpg',
      bannerSrc: '/assets/characters/muzan.jpg',
      chamberBg: 'bg-gradient-to-b from-red-950/90 via-black to-black',
    }
  }
];
