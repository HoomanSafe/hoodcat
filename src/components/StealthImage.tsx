import React, { useState } from 'react';

interface StealthImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackType?: 'hood' | 'hoodcat' | 'duo' | 'meme' | 'generic';
  containerClassName?: string;
}

export const StealthImage: React.FC<StealthImageProps> = ({
  src,
  alt = 'MemeAI Asset',
  className = '',
  containerClassName = '',
  fallbackType = 'generic',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[#0D1216] ${containerClassName}`}>
      {/* Loading Skeleton */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 z-10 animate-pulse bg-gradient-to-tr from-[#0E151A] via-[#14211B] to-[#0A0E12] flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-[#00E676]/30 border-t-[#00E676] animate-spin" />
        </div>
      )}

      {/* Actual Image */}
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
          {...props}
        />
      ) : (
        /* Designed Fallback Component */
        <div className="w-full h-full min-h-[220px] flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#111814] to-[#0A0D0F] border border-[#1C2C23]">
          <div className="w-16 h-16 rounded-2xl bg-[#090D0B] border border-[#00E676]/30 flex items-center justify-center mb-3 text-[#00E676] shadow-[0_0_15px_rgba(0,230,118,0.2)]">
            {fallbackType === 'hoodcat' ? (
              <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5c-4 0-7 3-7 7 0 5 4 8 7 8s7-3 7-8c0-4-3-7-7-7z" />
                <path d="M7 6L5 2l4 2" />
                <path d="M17 6l2-4-4 2" />
                <circle cx="9" cy="11" r="1.5" fill="#00E676" />
                <circle cx="15" cy="11" r="1.5" fill="#00E676" />
              </svg>
            ) : fallbackType === 'hood' ? (
              <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2C8 2 5 6 5 11c0 6 3 9 7 9s7-3 7-9c0-5-3-9-7-9z" />
                <path d="M9 13l2-1-2-1" />
                <path d="M15 13l-2-1 2-1" />
              </svg>
            ) : (
              <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
              </svg>
            )}
          </div>
          <span className="font-display font-bold text-sm tracking-wider text-[#ECEFF1] uppercase">
            {alt}
          </span>
          <span className="font-mono text-xs text-[#00E676] mt-1">
            [STEALTH NODE OPERATIONAL]
          </span>
        </div>
      )}
    </div>
  );
};
