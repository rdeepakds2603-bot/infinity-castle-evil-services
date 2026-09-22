import React, { useEffect, useRef } from 'react';
import type { CharacterData } from '../../types';

interface SignatureEffectsCanvasProps {
  character: CharacterData;
  isAttacking?: boolean;
}

export const SignatureEffectsCanvas: React.FC<SignatureEffectsCanvasProps> = ({
  character,
  isAttacking = false,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle state
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      life: number;
      maxLife: number;
      rot: number;
      vRot: number;
      color: string;
    }> = [];

    const numParticles = isAttacking ? 120 : 50;

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (isAttacking ? 4 : 1.5),
        vy: (Math.random() - 0.5) * (isAttacking ? 4 : 1.5),
        size: Math.random() * (isAttacking ? 18 : 10) + 4,
        alpha: Math.random() * 0.7 + 0.3,
        life: Math.random() * 100,
        maxLife: 100 + Math.random() * 80,
        rot: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.08,
        color: character.themeColor.accent,
      });
    }

    let frame = 0;

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      const effectType = character.signatureEffect;

      if (effectType === 'moon-slashes') {
        // Kokushibo Crescent Moons
        particles.forEach((p) => {
          p.x += p.vx;
          p.y += p.vy;
          p.rot += p.vRot;
          p.life++;

          if (p.life > p.maxLife || p.x < 0 || p.x > width || p.y < 0 || p.y > height) {
            p.x = Math.random() * width;
            p.y = Math.random() * height;
            p.life = 0;
          }

          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rot);
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 1.2, false);
          ctx.arc(p.size * 0.4, 0, p.size * 0.8, Math.PI * 1.2, 0, true);
          ctx.closePath();
          ctx.fillStyle = isAttacking ? '#fef08a' : '#c084fc';
          ctx.shadowColor = '#a855f7';
          ctx.shadowBlur = 15;
          ctx.globalAlpha = p.alpha * (1 - p.life / p.maxLife);
          ctx.fill();
          ctx.restore();
        });

        if (isAttacking) {
          // Slash shockwaves
          ctx.save();
          ctx.beginPath();
          const sweepX = (frame * 12) % (width + 400) - 200;
          ctx.moveTo(sweepX - 100, 0);
          ctx.lineTo(sweepX + 200, height);
          ctx.strokeStyle = '#fef08a';
          ctx.lineWidth = 4;
          ctx.shadowColor = '#a855f7';
          ctx.shadowBlur = 25;
          ctx.globalAlpha = 0.8;
          ctx.stroke();
          ctx.restore();
        }
      } else if (effectType === 'ice-lotus') {
        // Doma Frost and Floating Snow Lotus Petals
        particles.forEach((p) => {
          p.y += Math.abs(p.vy) * 0.8 + 0.4;
          p.x += Math.sin(frame * 0.03 + p.life) * 1.2;
          p.rot += p.vRot * 0.5;
          p.life++;

          if (p.y > height) {
            p.y = 0;
            p.x = Math.random() * width;
            p.life = 0;
          }

          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rot);
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size * 0.6, p.size * 1.2, 0, 0, Math.PI * 2);
          ctx.fillStyle = '#cffafe';
          ctx.shadowColor = '#38bdf8';
          ctx.shadowBlur = 12;
          ctx.globalAlpha = p.alpha * 0.7;
          ctx.fill();
          ctx.restore();
        });

        // Frost Vignette Corners
        const grad = ctx.createRadialGradient(
          width / 2,
          height / 2,
          width * 0.3,
          width / 2,
          height / 2,
          width * 0.7
        );
        grad.addColorStop(0, 'rgba(6, 182, 212, 0)');
        grad.addColorStop(1, isAttacking ? 'rgba(6, 182, 212, 0.45)' : 'rgba(6, 182, 212, 0.15)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
      } else if (effectType === 'compass-needle') {
        // Akaza Blue Kinetic Compass Needle Shockwaves
        const cx = width / 2;
        const cy = height * 0.75;
        const pulse = (Math.sin(frame * 0.06) + 1) * 0.5;

        // Expanding shockwave rings
        ctx.save();
        for (let r = 0; r < 4; r++) {
          const ringRad = ((frame * 3 + r * 80) % 350) + 40;
          ctx.beginPath();
          ctx.arc(cx, cy, ringRad, 0, Math.PI * 2);
          ctx.strokeStyle = '#38bdf8';
          ctx.lineWidth = 2;
          ctx.shadowColor = '#0284c7';
          ctx.shadowBlur = 18;
          ctx.globalAlpha = Math.max(0, 1 - ringRad / 350) * (isAttacking ? 0.9 : 0.4);
          ctx.stroke();
        }

        // Compass 12-point star
        ctx.translate(cx, cy);
        ctx.rotate(frame * 0.005);
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 1.5;
        for (let i = 0; i < 12; i++) {
          ctx.rotate((Math.PI * 2) / 12);
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(0, -120 - pulse * 20);
          ctx.stroke();
        }
        ctx.restore();

        // Particles bursting outward
        particles.forEach((p) => {
          p.x += p.vx * 1.5;
          p.y += p.vy * 1.5;
          p.life++;
          if (p.life > p.maxLife) {
            p.x = cx;
            p.y = cy;
            p.life = 0;
          }
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 0.4, 0, Math.PI * 2);
          ctx.fillStyle = '#fda4af';
          ctx.shadowColor = '#f43f5e';
          ctx.shadowBlur = 10;
          ctx.globalAlpha = p.alpha;
          ctx.fill();
        });
      } else if (effectType === 'wood-dragons') {
        // Hantengu Golden Thunder & Lightning Arcs
        if (frame % (isAttacking ? 6 : 18) === 0) {
          ctx.save();
          ctx.beginPath();
          let lx = Math.random() * width;
          let ly = 0;
          ctx.moveTo(lx, ly);
          while (ly < height) {
            lx += (Math.random() - 0.5) * 60;
            ly += Math.random() * 40 + 10;
            ctx.lineTo(lx, ly);
          }
          ctx.strokeStyle = '#fde047';
          ctx.lineWidth = isAttacking ? 3.5 : 2;
          ctx.shadowColor = '#eab308';
          ctx.shadowBlur = 20;
          ctx.stroke();
          ctx.restore();
        }

        particles.forEach((p) => {
          p.x += p.vx;
          p.y += p.vy;
          p.life++;
          if (p.life > p.maxLife) {
            p.x = Math.random() * width;
            p.y = Math.random() * height;
            p.life = 0;
          }
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 0.5, 0, Math.PI * 2);
          ctx.fillStyle = '#fde047';
          ctx.shadowColor = '#ca8a04';
          ctx.shadowBlur = 10;
          ctx.globalAlpha = p.alpha;
          ctx.fill();
        });
      } else if (effectType === 'water-pots') {
        // Gyokko Floating Aquatic Bubbles & Emerald Distortion
        particles.forEach((p) => {
          p.y -= Math.abs(p.vy) * 0.9 + 0.6;
          p.x += Math.sin(frame * 0.04 + p.life) * 1.5;
          p.life++;
          if (p.y < 0) {
            p.y = height;
            p.x = Math.random() * width;
            p.life = 0;
          }
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(16, 185, 129, 0.25)';
          ctx.strokeStyle = '#6ee7b7';
          ctx.lineWidth = 1.5;
          ctx.shadowColor = '#10b981';
          ctx.shadowBlur = 12;
          ctx.globalAlpha = p.alpha;
          ctx.fill();
          ctx.stroke();
        });
      } else if (effectType === 'dual-sickle-obi') {
        // Gyutaro & Daki Split Effects
        // Left side: Dark Green/Crimson Blood sickle sparks
        // Right side: Flowing Pink Obi waves
        ctx.save();
        const t = frame * 0.03;
        ctx.beginPath();
        for (let y = 0; y < height; y += 10) {
          const x = width * 0.75 + Math.sin(y * 0.015 + t) * 60;
          if (y === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = '#ec4899';
        ctx.lineWidth = 12;
        ctx.shadowColor = '#f472b6';
        ctx.shadowBlur = 20;
        ctx.globalAlpha = 0.5;
        ctx.stroke();
        ctx.restore();

        particles.forEach((p) => {
          p.x += p.vx;
          p.y += p.vy;
          p.life++;
          if (p.life > p.maxLife) {
            p.x = Math.random() * width;
            p.y = Math.random() * height;
            p.life = 0;
          }
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 0.6, 0, Math.PI * 2);
          ctx.fillStyle = p.x < width / 2 ? '#22c55e' : '#f472b6';
          ctx.shadowColor = p.x < width / 2 ? '#16a34a' : '#ec4899';
          ctx.shadowBlur = 12;
          ctx.globalAlpha = p.alpha;
          ctx.fill();
        });
      } else {
        // Muzan Progenitor Blood Embers & Dark Cosmic Tentacle Aura
        particles.forEach((p) => {
          p.y -= Math.abs(p.vy) * 1.2 + 0.8;
          p.x += Math.sin(frame * 0.05 + p.life) * 2;
          p.life++;
          if (p.y < 0) {
            p.y = height;
            p.x = Math.random() * width;
            p.life = 0;
          }
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 0.8, 0, Math.PI * 2);
          ctx.fillStyle = '#ef4444';
          ctx.shadowColor = '#dc2626';
          ctx.shadowBlur = 18;
          ctx.globalAlpha = p.alpha;
          ctx.fill();
        });

        // Pulsing Dark Red Fog
        const pulse = (Math.sin(frame * 0.04) + 1) * 0.5;
        const grad = ctx.createRadialGradient(
          width / 2,
          height / 2,
          50,
          width / 2,
          height / 2,
          width * 0.8
        );
        grad.addColorStop(0, `rgba(220, 38, 38, ${0.1 + pulse * 0.15})`);
        grad.addColorStop(1, 'rgba(0, 0, 0, 0.7)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [character, isAttacking]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 w-full h-full"
    />
  );
};
