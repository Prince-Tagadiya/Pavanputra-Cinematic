"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ManufacturingSection from "@/components/sections/ManufacturingSection";
import ResearchSection from "@/components/sections/ResearchSection";
import QualitySection from "@/components/sections/QualitySection";
import PuritySection from "@/components/sections/PuritySection";
import InnovationSection from "@/components/sections/InnovationSection";
import ProductsSection from "@/components/sections/ProductsSection";
import PackagingSection from "@/components/sections/PackagingSection";
import WarehouseSection from "@/components/sections/WarehouseSection";
import DistributionSection from "@/components/sections/DistributionSection";
import VisionSection from "@/components/sections/VisionSection";
import LeadershipSection from "@/components/sections/LeadershipSection";
import ContactSection from "@/components/sections/ContactSection";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Home() {
  const [introFinished, setIntroFinished] = useState(false);

  useEffect(() => {
    // Prevent browser from restoring previous scroll position which breaks the intro
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    // Force scroll to top on reload so the intro works perfectly
    window.scrollTo(0, 0);
    
    // Lock scrolling on the body until intro finishes
    if (!introFinished) {
      document.body.style.overflow = "hidden";
      // Using setTimeout to ensure SmoothScroll has mounted and attached listeners
      setTimeout(() => window.dispatchEvent(new Event("lock-scroll")), 50);
    } else {
      document.body.style.overflow = "";
      window.dispatchEvent(new Event("unlock-scroll"));
    }
  }, [introFinished]);

  return (
    <main className="relative min-h-screen bg-[#050505]">
      
      <div className={cn("transition-opacity duration-1000", introFinished ? "opacity-100" : "opacity-0")}>
        <Navbar />
      </div>

      <div className="relative z-0">
        <HeroSection onIntroFinish={() => setIntroFinished(true)} introFinished={introFinished} />
        <AboutSection />
        <ManufacturingSection />
        <ResearchSection />
        <QualitySection />
        <PuritySection />
        <InnovationSection />
        <ProductsSection />
        <PackagingSection />
        <WarehouseSection />
        <DistributionSection />
        <VisionSection />
        <LeadershipSection />
        <ContactSection />
      </div>
      
      <Footer />
    </main>
  );
}
