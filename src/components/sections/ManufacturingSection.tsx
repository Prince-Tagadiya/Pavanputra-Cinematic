"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SectionLabel, SectionHeading, SectionDescription } from "@/components/ui/Typography";

export default function ManufacturingSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const video = videoRef.current;
    if (!video) return;

    const setupTimeline = () => {
      // Clear in case of hot-reload
      gsap.killTweensOf(video);
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=200%", // Pin for 200vh
          pin: true,
          scrub: true, // Ties video time directly to scroll
        },
      });

      // Scrub the video based on scroll position
      tl.fromTo(video, 
        { currentTime: 0 },
        { currentTime: video.duration || 1, duration: 1, ease: "none" }, 
        0
      );

      // Reveal text halfway through the scroll scrub
      tl.fromTo(
        textRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" },
        0.5
      );
    };

    if (video.readyState >= 1) {
      setupTimeline();
    } else {
      video.addEventListener("loadedmetadata", setupTimeline);
      // Force load to ensure metadata arrives if browser deferred it
      video.load();
      return () => video.removeEventListener("loadedmetadata", setupTimeline);
    }
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="manufacturing" className="relative h-screen w-full bg-[#050505] flex items-center justify-center overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src="/Pavanputra-Cinematic/video2.mp4"
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <div ref={textRef} className="relative z-20 container mx-auto px-6 text-center pointer-events-none">
        <SectionLabel className="text-white">Manufacturing</SectionLabel>
        <SectionHeading>State-of-the-art<br/>Facilities</SectionHeading>
        <SectionDescription className="mx-auto text-white/90 max-w-3xl">
          Automated production lines ensuring absolute precision and uncompromised scalability at every stage of the manufacturing process.
        </SectionDescription>
      </div>

    </section>
  );
}
