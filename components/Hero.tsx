import React from 'react';
import { getWhatsAppUrl, CONTACT_INFO, WHATSAPP_MESSAGES } from '../constants';

const Hero: React.FC = () => {
  // --- CONFIGURAÇÃO DE IMAGENS (STRATEGY: ART DIRECTION) ---
  const MOBILE_IMAGE = "https://i.ibb.co/93tMYdG6/wmremove-transformed-1.avif";
  
  // IMAGEM TRAVADA PARA TABLET (VERTICAL) - NÃO ALTERAR
  // Link fixo solicitado: https://i.ibb.co/HTHHB3jL/wmremove-transformed-2.avif
  const TABLET_IMAGE = "https://i.ibb.co/HTHHB3jL/wmremove-transformed-2.avif"; 
  
  const DESKTOP_IMAGE = "https://i.ibb.co/wZb7VdHp/wmremove-transformed.avif";
  
  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.DEFAULT);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-bg scroll-mt-20">
      
      {/* ================= BACKGROUND LAYERS ================= */}
      
      {/* 1. MOBILE BACKGROUND (< 768px) */}
      <div className="absolute inset-0 z-0 md:hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-[#121212]/20 z-10"></div>
        <img 
          src={MOBILE_IMAGE} 
          alt="Dra. Fernanda Lopes"
          width="1080"
          height="1920" 
          className="w-full h-full object-cover object-center opacity-80"
        />
      </div>

      {/* 2. TABLET BACKGROUND (>= 768px e < 1024px) */}
      {/* Esta div só aparece em Tablets (Portrait/Vertical) e esconde em Desktop */}
      <div className="absolute inset-0 z-0 hidden md:block lg:hidden">
        {/* Gradient mais forte no tablet para garantir leitura do texto à esquerda */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#121212]/80 to-transparent z-10"></div>
        <img 
          src={TABLET_IMAGE} 
          alt="Dra. Fernanda Lopes"
          width="1280"
          height="800"
          className="w-full h-full object-cover object-[center_top] opacity-70"
        />
      </div>

      {/* 3. DESKTOP BACKGROUND (>= 1024px) */}
      <div className="absolute inset-0 z-0 hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#121212]/80 to-[#121212]/10 z-10"></div>
        <img 
          src={DESKTOP_IMAGE} 
          alt="Dra. Fernanda Lopes"
          width="1920"
          height="1080" 
          className="w-full h-full object-cover object-[50%_15%] opacity-60"
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="container mx-auto px-6 relative z-20 mt-10 md:mt-0">
        <div className="max-w-2xl animate-fade-in-up">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[1px] w-8 md:w-12 bg-brand-rose"></span>
            <span className="text-brand-rose text-xs font-bold uppercase tracking-[0.3em]">Ginecologia e Obstetrícia</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light leading-[1.1] mb-6 text-white drop-shadow-lg">
            Sua saúde íntima <br />
            ouvida, <br />
            <span className="italic text-brand-rose">e tratada.</span>
          </h1>
          
          <p className="text-base md:text-lg text-brand-muted/90 mb-8 font-light leading-relaxed max-w-lg border-l-2 border-brand-surface pl-4">
            Medicina sem pressa e sem tabus. Um protocolo que une a tecnologia do ultrassom ao acolhimento que você merece.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 reveal delay-200">
            <a 
              href={whatsappUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-brand-rose text-white px-8 py-4 rounded-sm hover:bg-white hover:text-brand-bg transition-all duration-300 uppercase tracking-widest text-xs font-bold shadow-[0_0_20px_rgba(205,139,139,0.2)] text-center flex items-center justify-center"
            >
              Iniciar Atendimento
            </a>
            <div className="flex items-center gap-4 px-4 py-2 border border-white/10 rounded-sm bg-brand-surface/30 backdrop-blur-sm">
               <div className="text-left">
                 <p className="text-xs text-brand-muted uppercase tracking-wider">{CONTACT_INFO.CRM}</p>
                 <p className="text-xs text-brand-muted uppercase tracking-wider">{CONTACT_INFO.RQE}</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;