import React from 'react';

interface PumpFunIconProps {
  className?: string;
  size?: number;
}

export const PumpFunIcon: React.FC<PumpFunIconProps> = ({ className = "w-5 h-5", size = 20 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Pill Capsule tilted 45 deg */}
      <g transform="rotate(-35 16 16)">
        {/* Top/Left half of pill - Green */}
        <path
          d="M16 6C10.4772 6 6 10.4772 6 16L16 16L16 6Z"
          fill="#10B981"
        />
        <path
          d="M6 16C6 16 6 16 6 16L16 16L16 16L6 16Z"
          fill="#10B981"
        />
        {/* Pill full capsule contour */}
        <rect
          x="7"
          y="7"
          width="18"
          height="18"
          rx="9"
          fill="#0D2818"
          stroke="#14F195"
          strokeWidth="2"
        />
        {/* Left half pill filled with neon green */}
        <path
          d="M7 16C7 11.0294 11.0294 7 16 7V25C11.0294 25 7 20.9706 7 16Z"
          fill="#14F195"
        />
        {/* Right half pill dark with glass sheen */}
        <path
          d="M16 7C20.9706 7 25 11.0294 25 16C25 20.9706 20.9706 25 16 25V7Z"
          fill="#0A1810"
        />
        {/* Center divider line */}
        <line
          x1="16"
          y1="7"
          x2="16"
          y2="25"
          stroke="#000000"
          strokeWidth="1.5"
          strokeOpacity="0.4"
        />
        {/* Pill shine dot */}
        <circle cx="11.5" cy="11.5" r="1.5" fill="#FFFFFF" fillOpacity="0.8" />
      </g>
    </svg>
  );
};

export const SolanaIcon: React.FC<PumpFunIconProps> = ({ className = "w-5 h-5", size = 20 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 397.7 311.7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <linearGradient id="solanaGrad1" x1="63.8" y1="29.9" x2="333.9" y2="282.6" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#9945FF" />
        <stop offset="1" stopColor="#14F195" />
      </linearGradient>
      <linearGradient id="solanaGrad2" x1="63.8" y1="-32.1" x2="333.9" y2="220.6" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#9945FF" />
        <stop offset="1" stopColor="#14F195" />
      </linearGradient>
      <linearGradient id="solanaGrad3" x1="63.8" y1="91.9" x2="333.9" y2="344.6" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#9945FF" />
        <stop offset="1" stopColor="#14F195" />
      </linearGradient>
      <path
        d="M64.6 237.9c2.4-2.4 5.7-3.8 9.2-3.8h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1l62.7-62.7z"
        fill="url(#solanaGrad1)"
      />
      <path
        d="M64.6 3.8C67.1 1.4 70.4 0 73.8 0h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1L64.6 3.8z"
        fill="url(#solanaGrad2)"
      />
      <path
        d="M333.1 120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8 0-8.7 7-4.6 11.1l62.7 62.7c2.4 2.4 5.7 3.8 9.2 3.8h317.4c5.8 0 8.7-7 4.6-11.1l-62.7-62.7z"
        fill="url(#solanaGrad3)"
      />
    </svg>
  );
};
