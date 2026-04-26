"use client";

import { useEffect, useRef } from "react";

export function SceneCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    type Orb = {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      hue: number;
    };

    let animationFrame = 0;
    let orbs: Orb[] = [];

    const createOrbs = () => {
      const count = Math.min(24, Math.max(12, Math.floor(window.innerWidth / 70)));

      orbs = Array.from({ length: count }, (_, index) => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 120 + 40,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.16,
        hue: 160 + index * 5,
      }));
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createOrbs();
    };

    const drawGrid = () => {
      context.save();
      context.strokeStyle = "rgba(255,255,255,0.04)";
      context.lineWidth = 1;

      for (let x = 0; x < canvas.width; x += 72) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, canvas.height);
        context.stroke();
      }

      for (let y = 0; y < canvas.height; y += 72) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(canvas.width, y);
        context.stroke();
      }

      context.restore();
    };

    const drawScene = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      drawGrid();

      orbs.forEach((orb) => {
        orb.x += orb.vx;
        orb.y += orb.vy;

        if (orb.x < -100 || orb.x > canvas.width + 100) {
          orb.vx *= -1;
        }

        if (orb.y < -100 || orb.y > canvas.height + 100) {
          orb.vy *= -1;
        }

        const gradient = context.createRadialGradient(
          orb.x,
          orb.y,
          0,
          orb.x,
          orb.y,
          orb.radius
        );

        gradient.addColorStop(0, `hsla(${orb.hue}, 90%, 68%, 0.28)`);
        gradient.addColorStop(1, `hsla(${orb.hue + 40}, 90%, 50%, 0)`);

        context.beginPath();
        context.fillStyle = gradient;
        context.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        context.fill();
      });

      context.save();
      context.translate(canvas.width * 0.74, canvas.height * 0.28);
      context.rotate(Math.PI / 7);
      context.fillStyle = "rgba(255,255,255,0.05)";
      context.fillRect(-180, -180, 320, 320);
      context.restore();

      animationFrame = window.requestAnimationFrame(drawScene);
    };

    resize();
    window.addEventListener("resize", resize);

    if (!reducedMotion) {
      drawScene();
    } else {
      drawGrid();
    }

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <canvas ref={canvasRef} className="scene-canvas" aria-hidden="true" />;
}
