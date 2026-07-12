"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 1;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const tl = gsap.timeline({
        onComplete,
      });

      tl.to(textRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.8,
        ease: "power2.inOut",
      })
      .to(progressRef.current, {
        opacity: 0,
        duration: 0.5,
      }, "-=0.4")
      .to(containerRef.current, {
        yPercent: -100,
        duration: 1.2,
        ease: "power4.inOut",
      });
    }
  }, [progress, onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center"
    >
      <div ref={textRef} className="text-5xl md:text-7xl font-heading font-bold text-white mb-8 tracking-tighter">
        Pavanputra<span className="text-brand-medical">.</span>
      </div>
      
      {/* Soft Particles Simulation Placeholder (Simple CSS glow) */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-medical/30 via-transparent to-transparent blur-3xl"></div>

      <div ref={progressRef} className="flex flex-col items-center gap-4">
        <div className="text-sm text-white/50 font-medium tracking-widest">
          {Math.min(progress, 100)}%
        </div>
        <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden">
          <div 
            className="absolute top-0 left-0 h-full bg-brand-medical transition-all duration-200 ease-out"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
      </div>
    </div>
  );
}
