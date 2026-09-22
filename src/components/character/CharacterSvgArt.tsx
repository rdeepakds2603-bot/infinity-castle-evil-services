import React from 'react';
import type { UpperRankId } from '../../types';

interface CharacterSvgArtProps {
  characterId: UpperRankId;
  variant?: 'avatar' | 'fullPose' | 'attackPose';
  isAttacking?: boolean;
  className?: string;
}

export const CharacterSvgArt: React.FC<CharacterSvgArtProps> = ({
  characterId,
  isAttacking = false,
  className = '',
}) => {
  switch (characterId) {
    case 'kokushibo':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 500 600" className="w-full h-full drop-shadow-[0_0_35px_rgba(168,85,247,0.5)]">
            <defs>
              <radialGradient id="kokuGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#c084fc" stopOpacity="0.8" />
                <stop offset="60%" stopColor="#7e22ce" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#3b0764" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="bladeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f87171" />
                <stop offset="30%" stopColor="#a855f7" />
                <stop offset="70%" stopColor="#dc2626" />
                <stop offset="100%" stopColor="#4c1d95" />
              </linearGradient>
              <filter id="moonGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Aura Background */}
            <circle cx="250" cy="280" r="220" fill="url(#kokuGlow)" className="animate-pulse" />

            {/* Floating Crescent Moons */}
            <g className={isAttacking ? 'animate-spin origin-center' : 'opacity-80'}>
              {[
                { x: 120, y: 150, r: 25, rot: 30 },
                { x: 380, y: 180, r: 35, rot: -45 },
                { x: 90, y: 360, r: 20, rot: 60 },
                { x: 410, y: 390, r: 30, rot: -120 },
                { x: 250, y: 80, r: 22, rot: 15 },
              ].map((m, idx) => (
                <path
                  key={idx}
                  d={`M ${m.x} ${m.y} A ${m.r} ${m.r} 0 0 0 ${m.x + m.r * 1.5} ${m.y + m.r * 0.8} A ${m.r * 1.2} ${m.r * 1.2} 0 0 1 ${m.x} ${m.y}`}
                  fill="#fef08a"
                  filter="url(#moonGlow)"
                  className="transition-transform duration-500 hover:scale-125"
                />
              ))}
            </g>

            {/* Demon Hair (Long Black-Purple Spiky Ponytail) */}
            <path
              d="M 170 180 C 130 90, 200 40, 250 50 C 300 40, 370 90, 330 180 C 420 280, 430 460, 390 560 C 360 480, 370 380, 340 300 C 350 480, 300 580, 260 590 C 230 500, 240 380, 220 310 C 190 440, 150 540, 110 520 C 130 400, 140 280, 170 180 Z"
              fill="#180d2b"
              stroke="#6b21a8"
              strokeWidth="3"
            />
            {/* Red Hair Tip Highlights */}
            <path d="M 390 560 Q 420 500 370 440" stroke="#ef4444" strokeWidth="4" fill="none" />
            <path d="M 260 590 Q 280 520 250 450" stroke="#ef4444" strokeWidth="4" fill="none" />
            <path d="M 110 520 Q 140 460 130 390" stroke="#ef4444" strokeWidth="4" fill="none" />

            {/* Kimono Robe (Purple & Black Checked Sengoku Style) */}
            <path
              d="M 160 300 L 250 260 L 340 300 L 390 580 L 110 580 Z"
              fill="#2e1065"
              stroke="#581c87"
              strokeWidth="4"
            />
            {/* Inner Red Layer */}
            <path d="M 220 270 L 250 340 L 280 270 Z" fill="#991b1b" />
            <path d="M 250 340 L 250 580" stroke="#fbbf24" strokeWidth="5" />

            {/* Face Shape */}
            <polygon points="200,190 250,290 300,190 280,140 220,140" fill="#fce7f3" stroke="#be185d" strokeWidth="1.5" />

            {/* Flame Demon Marks on Forehead and Neck */}
            <path d="M 205 150 Q 215 135 225 155 Q 210 165 205 150" fill="#dc2626" />
            <path d="M 275 240 Q 285 220 295 245 Q 280 260 275 240" fill="#dc2626" />

            {/* SIX DEMONIC EYES */}
            {/* Top Pair */}
            <ellipse cx="225" cy="180" rx="14" ry="7" fill="#dc2626" stroke="#fbbf24" strokeWidth="1.5" className="animate-pulse" />
            <circle cx="225" cy="180" r="3" fill="#fbbf24" />
            <ellipse cx="275" cy="180" rx="14" ry="7" fill="#dc2626" stroke="#fbbf24" strokeWidth="1.5" className="animate-pulse" />
            <circle cx="275" cy="180" r="3" fill="#fbbf24" />

            {/* Middle Pair (With Kanji '上弦' '壱') */}
            <ellipse cx="218" cy="205" rx="17" ry="9" fill="#dc2626" stroke="#f59e0b" strokeWidth="2" filter="url(#moonGlow)" />
            <text x="218" y="209" fontSize="9" fill="#fef08a" textAnchor="middle" fontWeight="bold" fontFamily="serif">上弦</text>
            <ellipse cx="282" cy="205" rx="17" ry="9" fill="#dc2626" stroke="#f59e0b" strokeWidth="2" filter="url(#moonGlow)" />
            <text x="282" y="209" fontSize="10" fill="#fef08a" textAnchor="middle" fontWeight="bold" fontFamily="serif">壱</text>

            {/* Bottom Pair */}
            <ellipse cx="230" cy="230" rx="13" ry="6" fill="#dc2626" stroke="#fbbf24" strokeWidth="1.5" className="animate-pulse" />
            <circle cx="230" cy="230" r="2.5" fill="#fbbf24" />
            <ellipse cx="270" cy="230" rx="13" ry="6" fill="#dc2626" stroke="#fbbf24" strokeWidth="1.5" className="animate-pulse" />
            <circle cx="270" cy="230" r="2.5" fill="#fbbf24" />

            {/* Flesh Katana: Kyokokukamusari (Eye-lined Flesh Katana) */}
            <g className={isAttacking ? 'animate-bounce origin-bottom' : ''}>
              {/* Giant Blade */}
              <path
                d="M 330 290 Q 430 200 480 80 Q 460 220 360 340 Z"
                fill="url(#bladeGrad)"
                stroke="#fca5a5"
                strokeWidth="2"
                filter="url(#moonGlow)"
              />
              {/* Katana Eyes */}
              <circle cx="370" cy="260" r="5" fill="#fef08a" stroke="#dc2626" strokeWidth="2" />
              <circle cx="410" cy="200" r="6" fill="#fef08a" stroke="#dc2626" strokeWidth="2" />
              <circle cx="445" cy="140" r="5" fill="#fef08a" stroke="#dc2626" strokeWidth="2" />
              {/* Crescent Aura Slashes along Blade */}
              <path d="M 350 250 Q 420 160 490 60" stroke="#fef08a" strokeWidth="3" strokeDasharray="8,6" fill="none" />
            </g>
          </svg>
        </div>
      );

    case 'doma':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 500 600" className="w-full h-full drop-shadow-[0_0_35px_rgba(6,182,212,0.5)]">
            <defs>
              <radialGradient id="domaIceGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#0891b2" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#083344" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="rainbowEye" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f43f5e" />
                <stop offset="25%" stopColor="#fbbf24" />
                <stop offset="50%" stopColor="#22c55e" />
                <stop offset="75%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>

            {/* Cryo Atmosphere */}
            <circle cx="250" cy="280" r="230" fill="url(#domaIceGlow)" />

            {/* Ice Lotus Flowers in Background */}
            {[
              { x: 100, y: 130, s: 0.8 },
              { x: 400, y: 140, s: 1.1 },
              { x: 80, y: 440, s: 0.9 },
              { x: 420, y: 430, s: 1.0 },
            ].map((lotus, idx) => (
              <g key={idx} transform={`translate(${lotus.x}, ${lotus.y}) scale(${lotus.s})`} className="animate-pulse">
                <path d="M 0 0 C -20 -30, -30 -50, 0 -70 C 30 -50, 20 -30, 0 0 Z" fill="#cffafe" stroke="#38bdf8" strokeWidth="2" opacity="0.8" />
                <path d="M 0 0 C -40 -15, -60 -25, -50 0 C -40 25, -20 15, 0 0 Z" fill="#a5f3fc" stroke="#38bdf8" strokeWidth="2" opacity="0.7" />
                <path d="M 0 0 C 40 -15, 60 -25, 50 0 C 40 25, 20 15, 0 0 Z" fill="#a5f3fc" stroke="#38bdf8" strokeWidth="2" opacity="0.7" />
                <circle cx="0" cy="-20" r="8" fill="#e0f2fe" />
              </g>
            ))}

            {/* Silver-Platinum Blonde Hair */}
            <path
              d="M 180 180 C 140 70, 220 30, 250 40 C 300 30, 360 70, 320 180 C 380 240, 380 380, 340 460 C 310 390, 330 280, 300 240 C 270 280, 230 280, 200 240 C 170 280, 190 390, 160 460 C 120 380, 120 240, 180 180 Z"
              fill="#f1f5f9"
              stroke="#cbd5e1"
              strokeWidth="2.5"
            />
            {/* Blood Dripping Crown on Head (Iconic Doma design) */}
            <path d="M 210 60 C 230 40, 270 40, 290 60 C 290 100, 270 120, 250 110 C 230 120, 210 100, 210 60 Z" fill="#991b1b" stroke="#7f1d1d" strokeWidth="2" />
            <circle cx="235" cy="115" r="4" fill="#ef4444" />
            <circle cx="265" cy="118" r="3.5" fill="#ef4444" />

            {/* Cult Robes (Scarlet and Black with Golden Hem) */}
            <path d="M 150 280 L 250 240 L 350 280 L 380 580 L 120 580 Z" fill="#7f1d1d" stroke="#b91c1c" strokeWidth="3" />
            <path d="M 200 280 L 250 360 L 300 280 Z" fill="#18181b" />
            <circle cx="250" cy="380" r="14" fill="#fbbf24" stroke="#d97706" strokeWidth="2" />

            {/* Face & Seductive Smile */}
            <polygon points="190,180 250,270 310,180 290,130 210,130" fill="#fff1f2" stroke="#f43f5e" strokeWidth="1" />
            <path d="M 235 235 Q 250 248 265 235" stroke="#be123c" strokeWidth="2.5" fill="none" />

            {/* Rainbow Iridescent Eyes with Kanji */}
            <ellipse cx="225" cy="190" rx="15" ry="9" fill="url(#rainbowEye)" stroke="#fef08a" strokeWidth="2" />
            <text x="225" y="193" fontSize="8" fill="#1e1b4b" textAnchor="middle" fontWeight="bold">上弦</text>
            <ellipse cx="275" cy="190" rx="15" ry="9" fill="url(#rainbowEye)" stroke="#fef08a" strokeWidth="2" />
            <text x="275" y="193" fontSize="9" fill="#1e1b4b" textAnchor="middle" fontWeight="bold">弐</text>

            {/* Twin Ornate Golden War Fans (Tessen) */}
            <g className={isAttacking ? 'animate-bounce origin-center' : ''}>
              {/* Left Fan */}
              <path d="M 120 400 Q 60 320 120 240 Q 180 320 120 400 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="3" />
              <path d="M 120 320 L 70 270 M 120 320 L 80 360 M 120 320 L 160 270" stroke="#78350f" strokeWidth="1.5" />
              
              {/* Right Fan */}
              <path d="M 380 400 Q 440 320 380 240 Q 320 320 380 400 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="3" />
              <path d="M 380 320 L 430 270 M 380 320 L 420 360 M 380 320 L 340 270" stroke="#78350f" strokeWidth="1.5" />
            </g>
          </svg>
        </div>
      );

    case 'akaza':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 500 600" className="w-full h-full drop-shadow-[0_0_35px_rgba(244,63,94,0.5)]">
            <defs>
              <radialGradient id="akazaGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#fb7185" stopOpacity="0.8" />
                <stop offset="60%" stopColor="#e11d48" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#4c0519" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Compass Needle (Destructive Death Snowflake Under Feet) */}
            <g className="animate-spin origin-[250px_480px]" style={{ animationDuration: '24s' }}>
              <circle cx="250" cy="480" r="140" fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="8,6" opacity="0.6" />
              <circle cx="250" cy="480" r="100" fill="none" stroke="#0284c7" strokeWidth="2" opacity="0.5" />
              {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => (
                <line
                  key={i}
                  x1="250"
                  y1="480"
                  x2={250 + 140 * Math.cos((deg * Math.PI) / 180)}
                  y2={480 + 140 * Math.sin((deg * Math.PI) / 180)}
                  stroke="#38bdf8"
                  strokeWidth="1.5"
                  opacity="0.7"
                />
              ))}
              <circle cx="250" cy="480" r="16" fill="#0284c7" stroke="#bae6fd" strokeWidth="2" />
            </g>

            {/* Muscular Body with Sleeveless White Haori */}
            <path d="M 160 300 L 250 250 L 340 300 L 360 580 L 140 580 Z" fill="#f8fafc" stroke="#94a3b8" strokeWidth="3" />
            {/* Muscular Chest & Indigo Demon Tattoos */}
            <path d="M 180 300 L 250 370 L 320 300 Z" fill="#fed7aa" />
            {/* Blue Lines on Chest and Arms */}
            <line x1="250" y1="270" x2="250" y2="440" stroke="#0284c7" strokeWidth="6" strokeLinecap="round" />
            <line x1="220" y1="330" x2="280" y2="330" stroke="#0284c7" strokeWidth="5" strokeLinecap="round" />
            <line x1="210" y1="380" x2="290" y2="380" stroke="#0284c7" strokeWidth="5" strokeLinecap="round" />

            {/* Spiky Magenta-Pink Hair */}
            <path
              d="M 170 170 C 130 90, 180 50, 210 70 C 230 40, 270 40, 290 70 C 320 50, 370 90, 330 170 C 370 140, 390 200, 340 240 C 330 200, 310 180, 290 190 C 270 180, 230 180, 210 190 C 190 180, 170 200, 160 240 C 110 200, 130 140, 170 170 Z"
              fill="#ec4899"
              stroke="#be185d"
              strokeWidth="3"
            />

            {/* Face Shape */}
            <polygon points="195,170 250,260 305,170 285,120 215,120" fill="#ffedd5" stroke="#f97316" strokeWidth="1" />

            {/* Blue Demonic Face Striping Tattoos */}
            <line x1="250" y1="120" x2="250" y2="220" stroke="#0284c7" strokeWidth="4" />
            <line x1="200" y1="180" x2="230" y2="180" stroke="#0284c7" strokeWidth="4" />
            <line x1="270" y1="180" x2="300" y2="180" stroke="#0284c7" strokeWidth="4" />
            <line x1="205" y1="200" x2="235" y2="210" stroke="#0284c7" strokeWidth="3.5" />
            <line x1="295" y1="200" x2="265" y2="210" stroke="#0284c7" strokeWidth="3.5" />

            {/* Golden Demon Eyes with Sclera and Kanji */}
            <ellipse cx="225" cy="175" rx="14" ry="8" fill="#fef08a" stroke="#eab308" strokeWidth="2" />
            <text x="225" y="178" fontSize="8" fill="#450a0a" textAnchor="middle" fontWeight="bold">上弦</text>
            <ellipse cx="275" cy="175" rx="14" ry="8" fill="#fef08a" stroke="#eab308" strokeWidth="2" />
            <text x="275" y="178" fontSize="9" fill="#450a0a" textAnchor="middle" fontWeight="bold">参</text>

            {/* Dynamic Kinetic Shockwave Fists */}
            <g className={isAttacking ? 'animate-ping origin-center' : ''}>
              <circle cx="130" cy="380" r="30" fill="none" stroke="#38bdf8" strokeWidth="3" />
              <circle cx="370" cy="380" r="30" fill="none" stroke="#38bdf8" strokeWidth="3" />
            </g>
            {/* Clenched Fists with Indigo Nails */}
            <circle cx="130" cy="380" r="22" fill="#ffedd5" stroke="#0284c7" strokeWidth="3" />
            <circle cx="370" cy="380" r="22" fill="#ffedd5" stroke="#0284c7" strokeWidth="3" />
          </svg>
        </div>
      );

    case 'hantengu':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 500 600" className="w-full h-full drop-shadow-[0_0_35px_rgba(234,179,8,0.5)]">
            <defs>
              <radialGradient id="zohaGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#fde047" stopOpacity="0.7" />
                <stop offset="50%" stopColor="#ca8a04" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#422006" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Thunder Aura */}
            <circle cx="250" cy="280" r="230" fill="url(#zohaGlow)" />

            {/* Ring of Thunder Drums (Tomoe Taiko Drums) */}
            <g className="animate-spin origin-center" style={{ animationDuration: '30s' }}>
              {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
                const x = 250 + 190 * Math.cos((deg * Math.PI) / 180);
                const y = 280 + 190 * Math.sin((deg * Math.PI) / 180);
                return (
                  <g key={i}>
                    <circle cx={x} cy={y} r="24" fill="#713f12" stroke="#eab308" strokeWidth="3" />
                    <circle cx={x} cy={y} r="18" fill="#fef08a" />
                    {/* Tomoe glyph */}
                    <circle cx={x - 4} cy={y - 4} r="4" fill="#854d0e" />
                    <circle cx={x + 5} cy={y - 2} r="4" fill="#854d0e" />
                    <circle cx={x} cy={y + 5} r="4" fill="#854d0e" />
                  </g>
                );
              })}
            </g>

            {/* Coiling Wooden Dragons with Glowing Red Eyes */}
            <path
              d="M 60 480 C 100 320, 140 200, 80 120 C 120 130, 180 200, 160 350 Z"
              fill="#543310"
              stroke="#ca8a04"
              strokeWidth="3"
            />
            <circle cx="85" cy="130" r="6" fill="#ef4444" className="animate-pulse" />

            <path
              d="M 440 480 C 400 320, 360 200, 420 120 C 380 130, 320 200, 340 350 Z"
              fill="#543310"
              stroke="#ca8a04"
              strokeWidth="3"
            />
            <circle cx="415" cy="130" r="6" fill="#ef4444" className="animate-pulse" />

            {/* Zohakuten Dark Armor & Demonic Collar */}
            <path d="M 170 290 L 250 250 L 330 290 L 360 580 L 140 580 Z" fill="#1c1917" stroke="#eab308" strokeWidth="3" />
            
            {/* Golden Horns & Angry Spiky Hair */}
            <path d="M 190 120 C 150 70, 140 30, 160 20 C 180 40, 190 80, 200 110 Z" fill="#eab308" stroke="#a16207" strokeWidth="2" />
            <path d="M 310 120 C 350 70, 360 30, 340 20 C 320 40, 310 80, 300 110 Z" fill="#eab308" stroke="#a16207" strokeWidth="2" />
            
            {/* Spiky Demon Hair */}
            <path d="M 190 150 C 160 100, 210 60, 250 70 C 290 60, 340 100, 310 150 Z" fill="#0f172a" />

            {/* Demonic Wrath Face */}
            <polygon points="200,160 250,250 300,160 280,120 220,120" fill="#fef2f2" stroke="#dc2626" strokeWidth="1.5" />
            
            {/* Golden Wrath Eyes with Kanji */}
            <ellipse cx="230" cy="170" rx="14" ry="8" fill="#eab308" stroke="#dc2626" strokeWidth="2" />
            <text x="230" y="173" fontSize="8" fill="#000" textAnchor="middle" fontWeight="bold">上弦</text>
            <ellipse cx="270" cy="170" rx="14" ry="8" fill="#eab308" stroke="#dc2626" strokeWidth="2" />
            <text x="270" y="173" fontSize="9" fill="#000" textAnchor="middle" fontWeight="bold">肆</text>
          </svg>
        </div>
      );

    case 'gyokko':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 500 600" className="w-full h-full drop-shadow-[0_0_35px_rgba(16,185,129,0.5)]">
            <defs>
              <radialGradient id="gyokkoGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#6ee7b7" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#059669" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#022c22" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Aquatic Swirl */}
            <circle cx="250" cy="280" r="230" fill="url(#gyokkoGlow)" />

            {/* Giant Porcelain Vase */}
            <path
              d="M 170 340 C 130 380, 110 460, 150 540 C 180 580, 320 580, 350 540 C 390 460, 370 380, 330 340 C 310 320, 190 320, 170 340 Z"
              fill="#f8fafc"
              stroke="#0f766e"
              strokeWidth="5"
            />
            {/* Ornate Gold & Emerald Dragons Painted on Vase */}
            <path d="M 180 440 Q 250 400 320 460 Q 250 520 180 480" stroke="#10b981" strokeWidth="6" fill="none" />
            <circle cx="250" cy="460" r="20" fill="#fbbf24" stroke="#b45309" strokeWidth="3" />

            {/* Slender Pale Serpentine Body Emerging from Vase */}
            <path d="M 200 330 C 180 240, 200 180, 250 170 C 300 180, 320 240, 300 330 Z" fill="#ecfdf5" stroke="#10b981" strokeWidth="3" />

            {/* Tiny Multiple Baby Hands along Head & Spine */}
            {[
              { x: 190, y: 150 }, { x: 310, y: 150 },
              { x: 180, y: 200 }, { x: 320, y: 200 },
              { x: 190, y: 250 }, { x: 310, y: 250 }
            ].map((hand, i) => (
              <circle key={i} cx={hand.x} cy={hand.y} r="8" fill="#d1fae5" stroke="#059669" strokeWidth="1.5" />
            ))}

            {/* Grotesque Face (Eyes in Mouth, Mouth on Forehead!) */}
            <ellipse cx="250" cy="140" rx="35" ry="45" fill="#f0fdf4" stroke="#047857" strokeWidth="2" />
            
            {/* Forehead Mouth */}
            <ellipse cx="250" cy="115" rx="14" ry="6" fill="#be123c" stroke="#881337" strokeWidth="1.5" />
            
            {/* Main Eyes (Transposed!) */}
            <ellipse cx="230" cy="145" rx="12" ry="7" fill="#10b981" stroke="#fbbf24" strokeWidth="1.5" />
            <text x="230" y="148" fontSize="7" fill="#fff" textAnchor="middle" fontWeight="bold">上弦</text>
            <ellipse cx="270" cy="145" rx="12" ry="7" fill="#10b981" stroke="#fbbf24" strokeWidth="1.5" />
            <text x="270" y="148" fontSize="8" fill="#fff" textAnchor="middle" fontWeight="bold">伍</text>

            {/* Floating Water Prison Pot Spheres */}
            <circle cx="110" cy="220" r="35" fill="#06b6d4" fillOpacity="0.4" stroke="#67e8f9" strokeWidth="2" className="animate-bounce" />
            <circle cx="390" cy="200" r="40" fill="#06b6d4" fillOpacity="0.4" stroke="#67e8f9" strokeWidth="2" className="animate-pulse" />
          </svg>
        </div>
      );

    case 'gyutaro-daki':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 500 600" className="w-full h-full drop-shadow-[0_0_35px_rgba(236,72,153,0.5)]">
            <defs>
              <linearGradient id="dualSplitGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#15803d" stopOpacity="0.7" />
                <stop offset="50%" stopColor="#4c0519" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#db2777" stopOpacity="0.7" />
              </linearGradient>
            </defs>

            {/* Background Split Atmosphere */}
            <circle cx="250" cy="280" r="230" fill="url(#dualSplitGrad)" />

            {/* LEFT SIDE: GYUTARO (Skeletal, Dark Green/Crimson, Blood Sickles) */}
            <g transform="translate(-40, 0)">
              {/* Gyutaro Body */}
              <path d="M 180 320 C 130 260, 160 220, 190 200 C 220 220, 200 290, 170 380 Z" fill="#14532d" stroke="#22c55e" strokeWidth="2" />
              {/* Green/Black Wild Hair */}
              <path d="M 160 180 C 120 120, 150 70, 190 100 C 210 130, 200 180, 160 180 Z" fill="#052e16" stroke="#16a34a" strokeWidth="2" />
              {/* Curved Blood Sickles (Kama) */}
              <path d="M 110 360 C 60 280, 100 200, 160 220 C 120 250, 100 310, 110 360 Z" fill="#881337" stroke="#ef4444" strokeWidth="3" />
              <path d="M 110 360 L 130 420" stroke="#78350f" strokeWidth="4" />
              {/* Left Kanji Eye */}
              <ellipse cx="185" cy="140" rx="9" ry="5" fill="#facc15" stroke="#ef4444" strokeWidth="1" />
              <text x="185" y="142" fontSize="5" fill="#000" textAnchor="middle" fontWeight="bold">陸</text>
            </g>

            {/* RIGHT SIDE: DAKI (Gorgeous Oiran, Flowing Floral Razor Obi Belts) */}
            <g transform="translate(40, 0)">
              {/* Flowing Razor Obi Ribbons */}
              <path
                d="M 270 300 C 350 200, 420 280, 480 220 C 440 320, 360 280, 290 380 Z"
                fill="#f472b6"
                stroke="#ec4899"
                strokeWidth="3"
                opacity="0.9"
              />
              <path d="M 320 260 Q 380 240 440 260" stroke="#fef08a" strokeWidth="3" strokeDasharray="6,4" fill="none" />
              {/* Daki Silver Hair with Green Tips */}
              <path d="M 280 180 C 270 90, 330 60, 350 110 C 370 140, 340 200, 280 180 Z" fill="#f8fafc" stroke="#86efac" strokeWidth="2" />
              {/* Face & Floral Markings */}
              <polygon points="280,140 320,210 340,150" fill="#fff1f2" />
              <ellipse cx="305" cy="150" rx="9" ry="5" fill="#f43f5e" stroke="#fbbf24" strokeWidth="1" />
              <text x="305" y="152" fontSize="5" fill="#fff" textAnchor="middle" fontWeight="bold">陸</text>
            </g>
          </svg>
        </div>
      );

    case 'muzan':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 500 600" className="w-full h-full drop-shadow-[0_0_45px_rgba(220,38,38,0.7)]">
            <defs>
              <radialGradient id="muzanAura" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ef4444" stopOpacity="0.9" />
                <stop offset="40%" stopColor="#991b1b" stopOpacity="0.5" />
                <stop offset="80%" stopColor="#450a0a" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#000" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="suitGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#18181b" />
                <stop offset="100%" stopColor="#09090b" />
              </linearGradient>
            </defs>

            {/* Crimson Demon King Aura */}
            <circle cx="250" cy="280" r="230" fill="url(#muzanAura)" className="animate-pulse" />

            {/* 8 Bladed Spine Whip Tendrils Emerging from Back */}
            {[
              { d: 'M 180 300 Q 80 200 40 100 Q 100 180 190 280 Z' },
              { d: 'M 320 300 Q 420 200 460 100 Q 400 180 310 280 Z' },
              { d: 'M 170 380 Q 50 380 30 280 Q 90 350 180 360 Z' },
              { d: 'M 330 380 Q 450 380 470 280 Q 410 350 320 360 Z' },
            ].map((tendril, idx) => (
              <path
                key={idx}
                d={tendril.d}
                fill="#7f1d1d"
                stroke="#ef4444"
                strokeWidth="2.5"
                className={isAttacking ? 'animate-bounce origin-center' : ''}
              />
            ))}

            {/* Tailored Black Suit & White Silk Tie */}
            <path d="M 160 300 L 250 250 L 340 300 L 370 580 L 130 580 Z" fill="url(#suitGrad)" stroke="#3f3f46" strokeWidth="3" />
            <polygon points="230,270 250,380 270,270" fill="#fafafa" stroke="#e4e4e7" strokeWidth="1" />
            <polygon points="245,280 250,350 255,280" fill="#dc2626" />

            {/* Aristocratic Pale Face */}
            <polygon points="200,180 250,270 300,180 280,130 220,130" fill="#fff1f2" stroke="#e11d48" strokeWidth="1" />

            {/* Crisp White Fedora with Black Hatband */}
            <ellipse cx="250" cy="130" rx="90" ry="24" fill="#fafafa" stroke="#d4d4d8" strokeWidth="2" />
            <path d="M 190 130 C 190 60, 310 60, 310 130 Z" fill="#f4f4f5" stroke="#e4e4e7" strokeWidth="2" />
            <rect x="190" y="118" width="120" height="12" fill="#18181b" />

            {/* Curly Black Hair Tufts under Hat */}
            <path d="M 190 140 C 170 170, 180 200, 210 180" stroke="#09090b" strokeWidth="5" fill="none" />
            <path d="M 310 140 C 330 170, 320 200, 290 180" stroke="#09090b" strokeWidth="5" fill="none" />

            {/* PIERCING CAT-SLIT PLUM-RED GLOWING EYES */}
            <ellipse cx="225" cy="180" rx="14" ry="8" fill="#dc2626" stroke="#fca5a5" strokeWidth="2" className="animate-pulse" />
            <ellipse cx="225" cy="180" rx="2.5" ry="7" fill="#450a0a" />
            <ellipse cx="275" cy="180" rx="14" ry="8" fill="#dc2626" stroke="#fca5a5" strokeWidth="2" className="animate-pulse" />
            <ellipse cx="275" cy="180" rx="2.5" ry="7" fill="#450a0a" />

            {/* Cold Merciless Smirk */}
            <path d="M 238 232 Q 250 238 262 230" stroke="#be123c" strokeWidth="2" fill="none" />
          </svg>
        </div>
      );

    default:
      return null;
  }
};
