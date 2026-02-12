import React from 'react';

const Hero: React.FC = () => {
  // --- CONFIGURAÇÃO DE IMAGENS (STRATEGY: ART DIRECTION) ---
  
  // 1. Mobile (Portrait): Corte vertical nativo. 
  // Evita carregar a imagem gigante de desktop no 4G e foca no rosto.
  const MOBILE_IMAGE = "https://i.ibb.co/93tMYdG6/wmremove-transformed-1.avif";
  
  // 2. Tablet (Hybrid): Um meio termo. 
  // Se não tiver uma imagem específica, usamos a Desktop com ajuste fino de posicionamento.
  const TABLET_IMAGE = "https://i.ibb.co/27vwB78M/Gemini-Generated-Image-ywyhsuywyhsuywyh.avif";
  
  // 3. Desktop (Landscape): A imagem original ampla, cinemática.
  const DESKTOP_IMAGE = "https://i.ibb.co/wZb7VdHp/wmremove-transformed.avif";
  
  // ----------------------------------------------------------

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-bg scroll-mt-20">
      
      {/* ================= BACKGROUND LAYERS ================= */}
      
      {/* 1. MOBILE BACKGROUND (< 768px) */}
      <div className="absolute inset-0 z-0 md:hidden">
        {/* Gradient Mobile: Mais forte na base para o texto brilhar */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-[#121212]/20 z-10"></div>
        <img 
          src={MOBILE_IMAGE} 
          alt="Dra. Fernanda Lopes" 
          className="w-full h-full object-cover object-center opacity-80"
        />
      </div>

      {/* 2. TABLET BACKGROUND (>= 768px e < 1024px) */}
      <div className="absolute inset-0 z-0 hidden md:block lg:hidden">
        {/* Gradient Tablet: Lateral suave */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#121212]/60 to-transparent z-10"></div>
        <img 
          src={TABLET_IMAGE} 
          alt="Dra. Fernanda Lopes" 
          className="w-full h-full object-cover object-[center_20%] opacity-70"
        />
      </div>

      {/* 3. DESKTOP BACKGROUND (>= 1024px) */}
      <div className="absolute inset-0 z-0 hidden lg:block">
        {/* Desktop Gradient: Cinematic Noir - Escuro na esq, claro na dir */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#121212]/80 to-[#121212]/10 z-10"></div>
        <img 
          src={DESKTOP_IMAGE} 
          alt="Dra. Fernanda Lopes" 
          className="w-full h-full object-cover object-[50%_15%] opacity-60"
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="container mx-auto px-6 relative z-20 mt-20 md:mt-0">
        <div className="max-w-2xl animate-fade-in-up">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[1px] w-12 bg-brand-rose"></span>
            <span className="text-brand-rose text-xs font-bold uppercase tracking-[0.3em]">Ginecologia e Obstetrícia</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-light leading-[1.1] mb-6 text-white drop-shadow-lg">
            Sua saúde íntima <br />
            ouvida, <br />
            <span className="italic text-brand-rose">e tratada.</span>
          </h1>
          
          <p className="text-lg text-brand-muted/90 mb-8 font-light leading-relaxed max-w-lg border-l-2 border-brand-surface pl-4">
            Medicina sem pressa e sem tabus. Um protocolo que une a tecnologia do ultrassom ao acolhimento que você merece.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://wa.me/5563999992505?text=Ol%C3%A1%2C%20gostaria%20de%20marcar%20uma%20consulta%20com%20a%20Dra%20Fernanda."
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-brand-rose text-white px-8 py-4 rounded-sm hover:bg-white hover:text-brand-bg transition-all duration-300 uppercase tracking-widest text-xs font-bold shadow-[0_0_20px_rgba(205,139,139,0.2)] text-center flex items-center justify-center"
            >
              Iniciar Atendimento
            </a>
            <div className="flex items-center gap-4 px-4 py-2 border border-white/10 rounded-sm bg-brand-surface/30 backdrop-blur-sm">
               <div className="text-left">
                 <p className="text-xs text-brand-muted uppercase tracking-wider">CRM-TO 4138</p>
                 <p className="text-xs text-brand-muted uppercase tracking-wider">RQE 2906</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;