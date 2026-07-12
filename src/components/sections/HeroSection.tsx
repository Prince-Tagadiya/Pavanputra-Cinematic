"use client";

import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

interface HeroProps {
  onIntroFinish: () => void;
  introFinished: boolean;
}

export default function HeroSection({ onIntroFinish, introFinished }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Explicitly attempt play to catch browser autoplay blocking
    const attemptPlay = async () => {
      try {
        await video.play();
      } catch (err) {
        onIntroFinish();
      }
    };
    attemptPlay();

    const handleTimeUpdate = () => {
      // Check if we are in the last 3 seconds of the video
      if (!introFinished && video.duration > 0 && video.duration - video.currentTime <= 3) {
        onIntroFinish();
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);

    // Bulletproof Failsafe: If video doesn't start playing within 3 seconds, unlock the site.
    const failsafe = setTimeout(() => {
      if (!introFinished && video.currentTime === 0) {
        onIntroFinish();
      }
    }, 3000);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      clearTimeout(failsafe);
    };
  }, [introFinished, onIntroFinish]);

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0 bg-black">
        <video
          ref={videoRef}
          src="/video1.mp4"
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Overlay darkens only after intro finishes for text readability */}
        <div className={cn("absolute inset-0 bg-black/40 z-10 transition-opacity duration-1000", introFinished ? "opacity-100" : "opacity-0")} />
      </div>

      <div className={cn(
        "relative z-20 h-full flex flex-col items-center justify-center container mx-auto px-6 text-center transition-all duration-1000 delay-500",
        introFinished ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}>
        <div className="flex flex-col items-center">
          <p className="text-brand-medical text-sm md:text-base tracking-[0.3em] uppercase font-semibold mb-6">
            The Future of Medicine
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white tracking-tight mb-8 leading-[1.1]">
            Pioneering<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-silver to-brand-medical">
              Global Health
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl font-light mb-12">
            World-class pharmaceutical manufacturing driven by innovation, quality, and uncompromising purity.
          </p>
          <Button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>
            Discover Our Vision
          </Button>
        </div>
      </div>
    </section>
  );
}
