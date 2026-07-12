import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "glass";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center px-8 py-4 text-sm font-medium transition-all duration-300 rounded-full",
          {
            "bg-brand-medical text-white hover:bg-white hover:text-brand-medical":
              variant === "primary",
            "border border-white/20 text-white hover:bg-white hover:text-black":
              variant === "outline",
            "bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white/20":
              variant === "glass",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
