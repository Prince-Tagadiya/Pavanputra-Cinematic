"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SectionLabel, SectionHeading, SectionDescription } from "@/components/ui/Typography";

export default function VisionSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Parallax background
    gsap.to(bgRef.current, {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="vision" className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden bg-black">
      <div 
        ref={bgRef}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat h-[130%] -top-[15%]"
        style={{ backgroundImage: "url('/vision.png')" }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-black" />
      <div className="absolute inset-0 z-10 bg-black/40" />

      <div className="relative z-20 container mx-auto px-6 text-center">
        <SectionLabel className="text-white drop-shadow-md">Our Vision</SectionLabel>
        <SectionHeading className="drop-shadow-lg text-5xl md:text-7xl">A Healthier Tomorrow.</SectionHeading>
        <SectionDescription className="mx-auto text-white/90 drop-shadow-md text-xl md:text-2xl mt-8 font-light">
          We envision a future where borders do not limit access to life-saving therapies.
        </SectionDescription>
      </div>
    </section>
  );
}
