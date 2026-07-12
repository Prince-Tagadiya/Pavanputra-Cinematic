"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SectionLabel, SectionHeading, SectionDescription } from "@/components/ui/Typography";

export default function PackagingSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    // Reveal by scaling down from a large blur
    gsap.fromTo(imageRef.current, 
      { scale: 1.3, filter: "blur(20px)" },
      { 
        scale: 1, 
        filter: "blur(0px)", 
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="packaging" className="relative h-screen w-full bg-[#050505] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          ref={imageRef}
          src="/packaging.png"
          alt="Automated Packaging"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/80" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <SectionLabel>Packaging</SectionLabel>
        <SectionHeading>Automated Sterility.</SectionHeading>
        <SectionDescription className="mx-auto">
          Every vial is processed through our high-speed, fully automated sterile packaging lines, eliminating human error and ensuring complete integrity from factory to patient.
        </SectionDescription>
      </div>
    </section>
  );
}
