import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "badge" | "plain";
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  size = "md",
  variant = "badge",
}) => {
  const sizeClasses = {
    sm: "h-6",
    md: "h-8",
    lg: "h-11",
  };

  if (variant === "badge") {
    return (
      <div
        className={`inline-flex items-center gap-2 bg-[#0B1B3D] px-3.5 py-1.5 rounded-xl border border-slate-800 shadow-xs hover:bg-[#132752] transition-colors select-none ${className}`}
      >
        <img
          src="/logo.webp"
          alt="Cruzian"
          className={`${sizeClasses[size]} w-auto object-contain`}
        />
      </div>
    );
  }

  return (
    <div className={`flex items-center select-none ${className}`}>
      <img
        src="/logo.webp"
        alt="Cruzian"
        className={`${sizeClasses[size]} w-auto object-contain`}
      />
    </div>
  );
};