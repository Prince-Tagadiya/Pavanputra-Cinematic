"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SectionLabel, SectionHeading, SectionDescription } from "@/components/ui/Typography";

export default function ProductsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(textRef.current, {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%",
      },
    });

    gsap.to(imageRef.current, {
      yPercent: 15,
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
    <section ref={containerRef} id="products" className="relative py-32 md:py-48 bg-[#080808] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative h-[50vh] md:h-[70vh] rounded-3xl overflow-hidden shadow-2xl shadow-white/5">
          <img
            ref={imageRef}
            src="/products.png"
            alt="Premium Medical Products"
            className="w-full h-[120%] -top-[10%] absolute object-cover origin-bottom scale-105"
          />
        </div>
        <div ref={textRef} className="flex flex-col justify-center">
          <SectionLabel>Products</SectionLabel>
          <SectionHeading className="text-4xl md:text-5xl lg:text-6xl">Premium Formulations.</SectionHeading>
          <SectionDescription>
            Our diverse portfolio of specialized chemicals and active pharmaceutical ingredients is packaged in industry-leading sterile conditions, ready for professional global distribution.
          </SectionDescription>
        </div>
      </div>
    </section>
  );
}
