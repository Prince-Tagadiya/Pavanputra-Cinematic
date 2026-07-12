"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SectionLabel, SectionHeading, SectionDescription } from "@/components/ui/Typography";

export default function PuritySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Pin section and blur background slightly to focus on text
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=100%",
        pin: true,
        scrub: true,
      },
    });

    tl.to(bgRef.current, {
      scale: 1.1,
      filter: "blur(10px)",
      duration: 1,
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="purity" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      <div 
        ref={bgRef}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/purity.png')" }}
      />
      <div className="absolute inset-0 z-10 bg-black/40" />

      <div className="relative z-20 container mx-auto px-6 text-center">
        <SectionLabel className="text-white drop-shadow-md">Absolute Purity</SectionLabel>
        <SectionHeading className="drop-shadow-lg">Crystal Clear Efficacy.</SectionHeading>
        <SectionDescription className="mx-auto text-white/90 drop-shadow-md">
          At a molecular level, our products are engineered for 99.9% purity. No compromises.
        </SectionDescription>
      </div>
    </section>
  );
}
