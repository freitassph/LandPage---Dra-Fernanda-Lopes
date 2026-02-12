import React from 'react';

const BackgroundEffects: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* 
        Volumetric Lighting / Spotlight Effect 
        "Alive" background that breathes slowly.
      */}
      
      {/* 1. Rose Gold Blob - Top Left/Center */}
      <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] bg-brand-rose/20 rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-blob"></div>
      
      {/* 2. Deep Purple/Surface Blob - Bottom Right */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#2a1b2a]/40 rounded-full mix-blend-screen filter blur-[120px] opacity-30 animate-blob animation-delay-2000"></div>
      
      {/* 3. Gold Accent Blob - Middle Left (Subtle) */}
      <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] bg-brand-gold/5 rounded-full mix-blend-screen filter blur-[100px] opacity-10 animate-blob animation-delay-4000"></div>

      {/* Noise Texture Overlay for "Film Grain" look (Silent Luxury) */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }}></div>
    </div>
  );
};

export default BackgroundEffects;