"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SectionLabel, SectionHeading, SectionDescription } from "@/components/ui/Typography";

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Pin section and reveal text
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=100%", // Pin for 100vh
        pin: true,
        scrub: 1,
      },
    });

    tl.fromTo(
      contentRef.current,
      { opacity: 0, y: 100, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power2.out" }
    ).to(contentRef.current, { opacity: 0, y: -50, scale: 1.05, duration: 1, ease: "power2.in" });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="about" className="relative h-screen w-full bg-[#050505] flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-brand-medical/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div ref={contentRef} className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <SectionLabel>About Company</SectionLabel>
          <SectionHeading>
            A Legacy of Excellence in Every Molecule.
          </SectionHeading>
          <SectionDescription className="mx-auto mt-8">
            At Pavanputra Pharmachem™, we blend cutting-edge technology with rigorous scientific research to produce APIs and specialized chemicals that meet the highest global standards. Our campus represents the pinnacle of modern pharmaceutical engineering.
          </SectionDescription>
        </div>
      </div>
    </section>
  );
}
