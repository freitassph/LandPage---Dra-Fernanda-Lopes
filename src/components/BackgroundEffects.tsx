import React from 'react';

const BackgroundEffects: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none">
      {/* 
        PERFORMANCE UPDATE:
        - Removed SVG feTurbulence (Noise) which causes freezes on Safari/iOS.
        - Removed mix-blend-screen which triggers expensive compositing steps.
        - Added will-change-transform to hint the browser to promote layers.
      */}
      
      {/* 1. Rose Accent - Top Left */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-rose rounded-full filter blur-[100px] opacity-[0.08] animate-blob will-change-transform"></div>
      
      {/* 2. Deep Surface Accent - Bottom Right */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-surface rounded-full filter blur-[100px] opacity-[0.3] animate-blob animation-delay-2000 will-change-transform"></div>
      
      {/* 3. Gold Accent - Middle Left (Subtle) */}
      <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] bg-brand-gold rounded-full filter blur-[80px] opacity-[0.03] animate-blob animation-delay-4000 will-change-transform"></div>

      {/* 
         Static Gradient Overlay for depth without computational cost 
         Replaces the noise texture with a subtle vignette
      */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-bg/80"></div>
    </div>
  );
};

export default BackgroundEffects;