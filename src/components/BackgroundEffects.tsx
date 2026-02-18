import React from 'react';

const BackgroundEffects: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none">
      {/* 
        PERFORMANCE OPTIMIZATION (MOBILE FIRST):
        - Blobs e animações pesadas (blur/animate) removidos no mobile (hidden).
        - Noise Texture removido no mobile (hidden) pois causa alto uso de CPU.
        - No mobile, usamos apenas um gradiente estático suave.
      */}
      
      {/* Static Gradient for Mobile Performance */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-bg via-brand-bg to-[#1a1010] md:hidden opacity-50"></div>

      {/* 1. Rose Accent - Top Left (Desktop Only) */}
      <div className="hidden md:block absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-rose rounded-full filter blur-[100px] opacity-[0.08] animate-blob will-change-transform"></div>
      
      {/* 2. Deep Surface Accent - Bottom Right (Desktop Only) */}
      <div className="hidden md:block absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-surface rounded-full filter blur-[100px] opacity-[0.3] animate-blob animation-delay-2000 will-change-transform"></div>
      
      {/* 3. Gold Accent - Middle Left (Desktop Only) */}
      <div className="hidden md:block absolute top-[40%] left-[20%] w-[300px] h-[300px] bg-brand-gold rounded-full filter blur-[80px] opacity-[0.03] animate-blob animation-delay-4000 will-change-transform"></div>

      {/* 
         Noise Texture Overlay for "Film Grain" look (Silent Luxury) 
         HIDDEN ON MOBILE to prevent main thread blocking
      */}
      <div className="hidden md:block absolute inset-0 opacity-[0.03]" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }}></div>
    </div>
  );
};

export default BackgroundEffects;