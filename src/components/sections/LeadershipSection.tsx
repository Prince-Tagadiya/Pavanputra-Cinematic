"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";
import { SectionLabel, SectionHeading } from "@/components/ui/Typography";

const FOUNDERS = [
  { name: "AKSHAR TAGADIYA", highlighted: true },
  { name: "Maulik Thummar", highlighted: false },
  { name: "Dhaval Gami", highlighted: false },
  { name: "Paras Ghadiya", highlighted: false },
  { name: "DARSHAN VADODRIYA", highlighted: true }
];

export default function LeadershipSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(".founder-card", 
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
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

        <ul className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6 text-center">
          {FOUNDERS.map((founder, i) => (
            <li 
              key={i} 
              className={cn(
                "founder-card flex flex-col justify-center bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl transition-all duration-500 hover:bg-brand-medical/10 hover:border-brand-medical/40 hover:scale-[1.02]",
                founder.highlighted 
                  ? "w-full md:w-[80%] py-12 px-8 shadow-2xl shadow-brand-medical/5" 
                  : "w-full md:w-[30%] py-8 px-6"
              )}
            >
              <h3 className={cn(
                "font-heading font-bold",
                founder.highlighted 
                  ? "text-3xl md:text-5xl lg:text-6xl uppercase tracking-widest text-white drop-shadow-lg" 
                  : "text-xl md:text-2xl text-white/80 font-medium"
              )}>
                {founder.name}
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
