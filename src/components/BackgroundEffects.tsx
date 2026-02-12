import React from 'react';

const BackgroundEffects: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* 
        Volumetric Lighting / Spotlight Effect 
        REFINADO: Opacidade reduzida para evitar efeito "estourado" sobre o preto.
      */}
      
      {/* 1. Rose Accent - Muito mais sutil e difuso */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-rose rounded-full filter blur-[150px] opacity-[0.04] animate-blob"></div>
      
      {/* 2. Surface Tint - Apenas para dar profundidade ao preto */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-brand-surface rounded-full filter blur-[150px] opacity-[0.1] animate-blob animation-delay-2000"></div>
      
      {/* 3. Gold Hint - Quase imperceptível */}
      <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-brand-gold rounded-full filter blur-[180px] opacity-[0.02] animate-blob animation-delay-4000"></div>

      {/* Noise Texture Overlay for "Film Grain" look (Silent Luxury) */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }}></div>
    </div>
  );
};

export default BackgroundEffects;