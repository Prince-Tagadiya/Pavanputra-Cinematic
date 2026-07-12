"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SectionLabel, SectionHeading, SectionDescription } from "@/components/ui/Typography";

export default function WarehouseSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=100%", // Pin for 100vh
        pin: true,
        scrub: true,
      },
    });

    // Pan image horizontally to show scale
    tl.to(imageRef.current, {
      xPercent: -20,
      ease: "none",
    }, 0);

    // Fade out text while panning
    tl.to(textRef.current, {
      opacity: 0,
      y: -50,
      ease: "power1.in",
    }, 0.5);

  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="warehouse" className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <img
          ref={imageRef}
          src="/Pavanputra-Cinematic/warehouse.png"
          alt="Massive Warehouse"
          className="w-[130%] h-full max-w-none object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div ref={textRef} className="relative z-10 h-full flex flex-col justify-center container mx-auto px-6">
        <div className="max-w-2xl">
          <SectionLabel>Warehousing</SectionLabel>
          <SectionHeading>Immense Scale.</SectionHeading>
          <SectionDescription>
            Climate-controlled, autonomous storage facilities capable of securing millions of units safely.
          </SectionDescription>
        </div>
      </div>
    </section>
  );
}
