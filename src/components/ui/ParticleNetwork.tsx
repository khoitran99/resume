import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

const PARTICLE_COUNT = 60;
const MAX_DIST = 130;
const MAX_DIST_SQ = MAX_DIST * MAX_DIST;
const MOUSE_DIST = 180;
const MOUSE_DIST_SQ = MOUSE_DIST * MOUSE_DIST;
const SPEED = 0.35;
const FRAME_MS = 1000 / 60; // cap at 60 fps regardless of display refresh rate

const ParticleNetwork: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Skip on reduced-motion preference or touch-only devices (mobile/tablet)
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) return;

    let animId: number;
    let lastTime = 0;
    let mouseX = -9999;
    let mouseY = -9999;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * SPEED,
      vy: (Math.random() - 0.5) * SPEED,
      radius: Math.random() * 1.2 + 0.8,
    }));

    const tick = (time: number) => {
      animId = requestAnimationFrame(tick);

      // Skip frame if tab is hidden
      if (document.hidden) return;

      // Skip frame if not enough time has passed (60 fps cap)
      if (time - lastTime < FRAME_MS) return;
      lastTime = time;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const dark = document.documentElement.classList.contains("dark");

      const dotRgb   = dark ? "148,163,184" : "100,116,139";
      const lineRgb  = dark ? "148,163,184" : "100,116,139";
      const mouseRgb = dark ? "96,165,250"  : "71,85,105";
      const lineMax  = dark ? 0.35 : 0.18;
      const mouseMax = dark ? 0.7  : 0.45;
      const dotAlpha = dark ? 0.7  : 0.45;

      // Move and draw dots
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${dotRgb},${dotAlpha})`;
        ctx.fill();
      }

      // Draw connections — squared distance check avoids sqrt for distant pairs
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];

        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < MAX_DIST_SQ) {
            const d = Math.sqrt(d2);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(${lineRgb},${lineMax * (1 - d / MAX_DIST)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Mouse lines
        const mdx = a.x - mouseX;
        const mdy = a.y - mouseY;
        const md2 = mdx * mdx + mdy * mdy;
        if (md2 < MOUSE_DIST_SQ) {
          const md = Math.sqrt(md2);
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.strokeStyle = `rgba(${mouseRgb},${mouseMax * (1 - md / MOUSE_DIST)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    };

    animId = requestAnimationFrame(tick);

    const onMove  = (e: MouseEvent) => { mouseX = e.clientX; mouseY = e.clientY; };
    const onLeave = () => { mouseX = -9999; mouseY = -9999; };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden
    />
  );
};

export default ParticleNetwork;
