"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // Force Lenis to start at the absolute top immediately on reload
    lenis.scrollTo(0, { immediate: true });

    // Start locked by default for the Hero Intro!
    lenis.stop();

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    
    gsap.ticker.lagSmoothing(0);

    const handleLock = () => lenis.stop();
    const handleUnlock = () => lenis.start();

    window.addEventListener("lock-scroll", handleLock);
    window.addEventListener("unlock-scroll", handleUnlock);

    // Refresh ScrollTrigger after a slight delay to ensure all heights are calculated
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      window.removeEventListener("lock-scroll", handleLock);
      window.removeEventListener("unlock-scroll", handleUnlock);
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
