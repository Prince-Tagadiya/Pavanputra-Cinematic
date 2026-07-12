"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SectionLabel, SectionHeading, SectionDescription } from "@/components/ui/Typography";

export default function ResearchSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    // Parallax zoom on the image
    gsap.to(imageRef.current, {
      scale: 1.15,
      yPercent: 10,
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
    <section ref={containerRef} id="research" className="relative py-32 md:py-48 bg-[#050505] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative h-[50vh] md:h-[70vh] rounded-3xl overflow-hidden shadow-2xl shadow-brand-medical/20">
          <img
            ref={imageRef}
            src="/research.png"
            alt="Pharmaceutical Research"
            className="w-full h-full object-cover origin-center scale-100"
          />
        </div>
        <div className="order-1 lg:order-2 flex flex-col justify-center">
          <SectionLabel>Research & Development</SectionLabel>
          <SectionHeading className="text-4xl md:text-5xl lg:text-6xl">Discovering the Next Breakthrough.</SectionHeading>
          <SectionDescription>
            Our advanced R&D facilities are the heart of Pavanputra. With dedicated teams of elite scientists, we continuously push the boundaries of molecular synthesis to develop therapies that redefine global health standards.
          </SectionDescription>
        </div>
      </div>
    </section>
  );
}
