"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SectionLabel, SectionHeading, SectionDescription } from "@/components/ui/Typography";

export default function QualitySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(textRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%",
      },
    });

    gsap.to(imageRef.current, {
      yPercent: -20,
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
    <section ref={containerRef} id="quality" className="relative py-32 md:py-48 bg-[#0a0a0a] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div ref={textRef} className="flex flex-col justify-center">
          <SectionLabel>Quality Assurance</SectionLabel>
          <SectionHeading className="text-4xl md:text-5xl lg:text-6xl">Uncompromising Precision.</SectionHeading>
          <SectionDescription>
            Quality is not just a protocol; it's our foundational ethos. Utilizing state-of-the-art robotic precision and laser scanning, every batch undergoes rigorous, automated quality control to ensure flawless results.
          </SectionDescription>
        </div>
        <div className="relative h-[50vh] md:h-[70vh] rounded-3xl overflow-hidden shadow-2xl shadow-brand-blue/30">
          <img
            ref={imageRef}
            src="/quality.png"
            alt="Quality Assurance"
            className="w-full h-[120%] -top-[10%] absolute object-cover"
          />
        </div>
      </div>
    </section>
  );
}
