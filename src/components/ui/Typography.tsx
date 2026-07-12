"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function SectionLabel({ children, className, ...props }: TypographyProps) {
  return (
    <p className={cn("text-brand-medical text-xs uppercase tracking-[0.3em] font-semibold mb-4", className)} {...props}>
      {children}
    </p>
  );
}

export function SectionHeading({ children, className, ...props }: TypographyProps) {
  return (
    <h2 className={cn("text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white tracking-tight leading-[1.1]", className)} {...props}>
      {children}
    </h2>
  );
}

export function SectionDescription({ children, className, ...props }: TypographyProps) {
  return (
    <p className={cn("text-lg md:text-xl text-white/70 max-w-2xl font-sans font-light leading-relaxed mt-6", className)} {...props}>
      {children}
    </p>
  );
}
