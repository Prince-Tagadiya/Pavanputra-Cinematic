"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SectionLabel, SectionHeading } from "@/components/ui/Typography";

const FOUNDERS = [
  "Akshar Tagadiya",
  "Maulik Thummar",
  "Dhaval Gami",
  "Paras Ghadiya",
  "Darshan Vadodriya"
];

export default function LeadershipSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useGSAP(() => {
    gsap.fromTo(".founder-card", 
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="leadership" className="relative py-32 md:py-48 w-full bg-[#050505]">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <SectionLabel>Leadership</SectionLabel>
          <SectionHeading>Our Founders</SectionHeading>
        </div>

        <ul className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6 text-center">
          {FOUNDERS.map((founder, i) => (
            <li key={i} className="founder-card flex-grow bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl py-8 px-6 hover:bg-brand-medical/20 hover:border-brand-medical/50 transition-all duration-300">
              <h3 className="text-xl md:text-2xl font-heading font-medium text-white">{founder}</h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
