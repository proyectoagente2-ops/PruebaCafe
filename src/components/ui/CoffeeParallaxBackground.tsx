'use client';
import { useEffect, useRef } from 'react';

export default function CoffeeParallaxBackground({
  src = 'public/images/CAFÉS/E.jpg',
  opacity = 0.1,
  sensitivity = 30, // ajusta la intensidad
}: {
  src?: string;
  opacity?: number;
  sensitivity?: number;
}) {
  const elRef = useRef<HTMLDivElement | null>(null);
  const posRef = useRef({ tx: 0, ty: 0, lx: 0, ly: 0, raf: 0 });

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    // Si el dispositivo es táctil, no activamos el parallax por mouse
    const isTouch = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
    if (isTouch) {
      el.style.transform = 'translate(0px, 0px) scale(1)';
      return;
    }

    const handleMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      // Normaliza a -0.5 .. 0.5
      const nx = (e.clientX / innerWidth) - 0.5;
      const ny = (e.clientY / innerHeight) - 0.5;
      // Convertir a pixeles según sensitivity
      posRef.current.tx = nx * sensitivity;
      posRef.current.ty = ny * sensitivity;
      // arrancar RAF si no está
      if (!posRef.current.raf) {
        posRef.current.raf = requestAnimationFrame(animate);
      }
    };

    const animate = () => {
      const p = posRef.current;
      // lerp sencillo para suavizar
      p.lx += (p.tx - p.lx) * 0.12;
      p.ly += (p.ty - p.ly) * 0.12;
      // aplicamos transform (ajusta scale si quieres)
      el.style.transform = `translate(${p.lx}px, ${p.ly}px) scale(1.02)`;
      // continuar loop si la diferencia es significativa
      const dist = Math.abs(p.tx - p.lx) + Math.abs(p.ty - p.ly);
      if (dist > 0.01) {
        p.raf = requestAnimationFrame(animate);
      } else {
        cancelAnimationFrame(p.raf);
        p.raf = 0;
      }
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMove);
      if (posRef.current.raf) cancelAnimationFrame(posRef.current.raf);
    };
  }, [sensitivity]);

  return (
    <div
      ref={elRef}
      className="absolute inset-0 pointer-events-none transition-transform will-change-transform"
      style={{
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      <img
        src={src}
        alt="Parallax background"
        className="w-full h-full object-cover select-none"
        style={{
          opacity,
          filter: 'blur(0px)',
        }}
        draggable={false}
      />
    </div>
  );
}
