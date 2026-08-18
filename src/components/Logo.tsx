import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  size = "md",
}) => {
  const sizeClasses = {
    sm: "h-7",
    md: "h-10",
    lg: "h-14",
  };

  return (
    <div className={`flex items-center select-none ${className}`}>
      <img
        src="/logo.webp"
        alt="Cruzian Logo"
        className={`${sizeClasses[size]} w-auto object-contain`}
      />
    </div>
  );
};