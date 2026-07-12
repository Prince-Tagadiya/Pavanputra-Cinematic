"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SectionLabel, SectionHeading, SectionDescription } from "@/components/ui/Typography";

export default function DistributionSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    gsap.fromTo(imageRef.current, 
      { opacity: 0.2, y: 150, scale: 0.9 },
      { 
        opacity: 1, y: 0, scale: 1,
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
    <section ref={containerRef} id="distribution" className="relative py-32 md:py-48 bg-[#030812] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative h-[50vh] md:h-[60vh] rounded-3xl overflow-hidden shadow-2xl shadow-brand-medical/30">
          <img
            ref={imageRef}
            src="/Pavanputra-Cinematic/distribution.png"
            alt="Global Distribution"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="order-1 lg:order-2 flex flex-col justify-center">
          <SectionLabel>Global Reach</SectionLabel>
          <SectionHeading className="text-4xl md:text-5xl lg:text-6xl">Connecting the World.</SectionHeading>
          <SectionDescription>
            Our dedicated global logistics network ensures that critical medicines reach every corner of the globe securely, swiftly, and at the perfect temperature.
          </SectionDescription>
        </div>
      </div>
    </section>
  );
}
