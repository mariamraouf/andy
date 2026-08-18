import React from "react";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  variant = "dark",
  size = "md",
}) => {
  const isLightText = variant === "light";
  
  const sizeClasses = {
    sm: "h-7",
    md: "h-9 sm:h-10",
    lg: "h-12 sm:h-14",
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <svg
        viewBox="0 0 280 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${sizeClasses[size]} w-auto`}
        aria-label="Cruzian Logo"
      >
        {/* Palm Tree Graphic */}
        <g id="palm-tree">
          {/* Trunk */}
          <path
            d="M24 74 C 23 55, 30 38, 38 25 C 42 27, 36 46, 32 74 Z"
            fill="#E5A93C"
          />
          {/* Coconuts */}
          <circle cx="41" cy="30" r="4.5" fill="#D49324" />
          <circle cx="46" cy="33" r="4" fill="#D49324" />
          
          {/* Palm Fronds */}
          {/* Left top */}
          <path
            d="M38 25 C 30 18, 16 14, 5 18 C 14 24, 25 25, 38 25 Z"
            fill="#E5A93C"
          />
          {/* Left middle */}
          <path
            d="M38 25 C 26 22, 12 28, 4 38 C 15 37, 26 33, 38 25 Z"
            fill="#E5A93C"
          />
          {/* Left lower */}
          <path
            d="M38 25 C 28 32, 18 42, 12 55 C 21 47, 30 38, 38 25 Z"
            fill="#E5A93C"
          />
          {/* Top arch */}
          <path
            d="M38 25 C 38 12, 48 5, 60 7 C 54 15, 47 20, 38 25 Z"
            fill="#E5A93C"
          />
          {/* Right top */}
          <path
            d="M38 25 C 50 18, 65 18, 76 25 C 64 27, 52 27, 38 25 Z"
            fill="#E5A93C"
          />
          {/* Right middle */}
          <path
            d="M38 25 C 52 26, 68 34, 75 48 C 63 42, 50 35, 38 25 Z"
            fill="#E5A93C"
          />
        </g>

        {/* Vertical Separator Line */}
        <line
          x1="88"
          y1="16"
          x2="88"
          y2="66"
          stroke="#E5A93C"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* CRUZIAN Wordmark */}
        <text
          x="105"
          y="55"
          fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
          fontWeight="900"
          fontSize="36"
          letterSpacing="4"
          fill={isLightText ? "#FFFFFF" : "#0B1B3D"}
        >
          CRUZIAN
        </text>
      </svg>
    </div>
  );
};