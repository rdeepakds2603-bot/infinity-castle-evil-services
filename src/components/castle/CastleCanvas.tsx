import React, { useEffect, useRef } from 'react';

interface CastleCanvasProps {
  isMoving?: boolean;
  ambientIntensity?: number;
  crimsonMode?: boolean;
}

export const CastleCanvas: React.FC<CastleCanvasProps> = ({
  isMoving = true,
  ambientIntensity = 1.0,
  crimsonMode = false,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Floating Dust / Firefly Particles
    const dustParticles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      pulse: number;
    }> = [];

    for (let i = 0; i < 90; i++) {
      dustParticles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -Math.random() * 0.5 - 0.2,
        size: Math.random() * 2.5 + 1,
        alpha: Math.random() * 0.8 + 0.2,
        pulse: Math.random() * Math.PI * 2,
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let frame = 0;

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      const parallaxX = (mouseX - width / 2) * 0.02;
      const parallaxY = (mouseY - height / 2) * 0.02;

      // 1. Floating Amber Dust & Embers over background image
      dustParticles.forEach((p) => {
        if (isMoving) {
          p.x += p.vx;
          p.y += p.vy;
          p.pulse += 0.04;
        }

        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        const currentAlpha = p.alpha * (Math.sin(p.pulse) * 0.3 + 0.7) * ambientIntensity;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = crimsonMode ? '#ef4444' : '#fbbf24';
        ctx.shadowColor = crimsonMode ? '#dc2626' : '#d97706';
        ctx.shadowBlur = 8;
        ctx.globalAlpha = currentAlpha;
        ctx.fill();
      });

      // 2. Atmospheric Pulsing Fog & Glow overlay
      const pulse = (Math.sin(frame * 0.03) + 1) * 0.5;
      const fogGrad = ctx.createRadialGradient(
        width / 2 + parallaxX * 2,
        height / 2 + parallaxY * 2,
        100,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.75
      );

      if (crimsonMode) {
        fogGrad.addColorStop(0, `rgba(185, 28, 28, ${0.15 + pulse * 0.1})`);
        fogGrad.addColorStop(0.7, 'rgba(30, 4, 10, 0.75)');
        fogGrad.addColorStop(1, 'rgba(5, 1, 3, 0.95)');
      } else {
        fogGrad.addColorStop(0, `rgba(245, 158, 11, ${0.08 + pulse * 0.06})`);
        fogGrad.addColorStop(0.6, 'rgba(15, 7, 5, 0.7)');
        fogGrad.addColorStop(1, 'rgba(5, 3, 4, 0.95)');
      }

      ctx.fillStyle = fogGrad;
      ctx.fillRect(0, 0, width, height);

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMoving, ambientIntensity, crimsonMode]);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-[#050304]">
      {/* Real Uploaded Castle Image Background with Parallax Scale */}
      <img
        src="/assets/castle/infinity_castle_bg.jpg"
        alt="Infinity Castle Background"
        className="w-full h-full object-cover object-center scale-105 transform transition-transform duration-1000 brightness-[0.75] contrast-[1.15]"
      />

      {/* Atmospheric Canvas Particle Overlay */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block pointer-events-none" />

      {/* Vignette Overlay for Depth */}
      <div className="absolute inset-0 bg-radial-[ellipse_at_center,_var(--tw-gradient-stops)] from-transparent via-black/40 to-black/95 pointer-events-none" />
    </div>
  );
};
