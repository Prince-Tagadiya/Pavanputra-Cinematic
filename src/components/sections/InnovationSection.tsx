"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SectionLabel, SectionHeading, SectionDescription } from "@/components/ui/Typography";

export default function InnovationSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    gsap.fromTo(imageRef.current, 
      { opacity: 0.2, scale: 0.8, y: 150 },
      { 
        opacity: 1, scale: 1, y: 0, 
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "center center",
          scrub: true,
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="innovation" className="relative py-32 md:py-48 bg-[#050505] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
        <SectionLabel>Innovation</SectionLabel>
        <SectionHeading className="mb-12">The DNA of Progress.</SectionHeading>
        
        <div className="relative w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl shadow-brand-medical/10">
          <img
            ref={imageRef}
            src="/innovation.png"
            alt="Pharmaceutical Innovation"
            className="w-full h-auto object-cover"
          />
        </div>

        <SectionDescription className="mt-12 mx-auto">
          We integrate advanced AI computational modeling and cutting-edge biotechnology to accelerate drug discovery, creating smarter, faster, and safer therapeutic solutions.
        </SectionDescription>
      </div>
    </section>
  );
}
