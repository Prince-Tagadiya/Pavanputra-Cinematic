"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SectionLabel, SectionHeading, SectionDescription } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";

export default function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(cardRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        end: "top 30%",
        scrub: true,
      },
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="contact" className="relative py-32 w-full bg-[#050505] overflow-hidden">
      
      {/* Floating map abstraction */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-medical/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl mb-16">
          <SectionLabel>Contact Us</SectionLabel>
          <SectionHeading>Let's Shape the Future Together.</SectionHeading>
          <SectionDescription>
            Partner with Pavanputra Pharmachem for world-class pharmaceutical manufacturing solutions.
          </SectionDescription>
        </div>

        <div ref={cardRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12">
          
          <div className="flex flex-col gap-6">
            <div>
              <label className="block text-sm text-white/50 mb-2 uppercase tracking-widest font-semibold">Name</label>
              <input type="text" className="w-full bg-transparent border-b border-white/20 pb-2 text-white outline-none focus:border-brand-medical transition-colors" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm text-white/50 mb-2 uppercase tracking-widest font-semibold">Email</label>
              <input type="email" className="w-full bg-transparent border-b border-white/20 pb-2 text-white outline-none focus:border-brand-medical transition-colors" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-sm text-white/50 mb-2 uppercase tracking-widest font-semibold">Inquiry</label>
              <textarea rows={3} className="w-full bg-transparent border-b border-white/20 pb-2 text-white outline-none focus:border-brand-medical transition-colors resize-none" placeholder="How can we help?" />
            </div>
            <Button variant="primary" className="self-start mt-4">Send Message</Button>
          </div>

          <div className="flex flex-col justify-center space-y-8 lg:pl-12 lg:border-l border-white/10">
            <div>
              <h4 className="text-white font-semibold mb-2">Global Headquarters</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                123 Innovation Drive<br/>
                Medical District, NY 10001<br/>
                United States
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Direct Contact</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                info@pavanputra.com<br/>
                +1 (555) 123-4567
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
