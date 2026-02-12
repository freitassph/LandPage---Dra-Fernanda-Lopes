import React from 'react';
import { getWhatsAppUrl, CONTACT_INFO, WHATSAPP_MESSAGES } from '../constants';

const Hero: React.FC = () => {
  const MOBILE_IMAGE = "https://i.ibb.co/TDDNQjzK/wmremove-transformed-2.avif";
  const TABLET_IMAGE = "https://i.ibb.co/bjVvCr0w/wmremove-transformed-3.avif";
  const DESKTOP_IMAGE = "https://i.ibb.co/My77cLKy/wmremove-transformed-1.avif";
  
  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.DEFAULT);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-bg scroll-mt-20">
      
      {/* ================= BACKGROUND LAYERS ================= */}
      <div className="absolute inset-0 z-0 md:hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-[#121212]/20 z-10"></div>
        <img src={MOBILE_IMAGE} alt="Dra. Fernanda Lopes" className="w-full h-full object-cover object-center opacity-80" />
      </div>

      <div className="absolute inset-0 z-0 hidden md:block lg:hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#121212]/60 to-transparent z-10"></div>
        <img src={TABLET_IMAGE} alt="Dra. Fernanda Lopes" className="w-full h-full object-cover object-[center_20%] opacity-70" />
      </div>

      <div className="absolute inset-0 z-0 hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#121212]/80 to-[#121212]/10 z-10"></div>
        <img src={DESKTOP_IMAGE} alt="Dra. Fernanda Lopes" className="w-full h-full object-cover object-[50%_15%] opacity-60" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="container mx-auto px-6 relative z-20 mt-20 md:mt-0">
        <div className="max-w-4xl animate-fade-in-up">
          <div className="flex items-center gap-4 mb-8">
            <span className="h-[1px] w-16 bg-brand-rose"></span>
            <span className="text-brand-rose text-[10px] font-bold uppercase tracking-[0.4em]">Ginecologia e Obstetrícia</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-[1.05] mb-8 text-white drop-shadow-lg">
            Sua saúde íntima <br />
            ouvida, <br />
            <span className="italic text-brand-rose font-serif">e tratada.</span>
          </h1>
          
          <p className="text-base md:text-lg text-brand-muted/80 mb-10 font-light leading-relaxed max-w-lg border-l border-brand-rose/30 pl-6">
            Medicina sem pressa e sem tabus. Um protocolo que une a tecnologia do ultrassom ao acolhimento que você merece.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <a 
              href={whatsappUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-brand-rose text-white px-10 py-4 rounded-sm hover:bg-white hover:text-brand-bg transition-all duration-300 uppercase tracking-[0.25em] text-[10px] font-bold shadow-[0_0_30px_rgba(205,139,139,0.2)]"
            >
              Iniciar Atendimento
            </a>
            <div className="flex gap-6 px-6 py-3 border border-white/5 rounded-sm bg-brand-surface/20 backdrop-blur-sm">
                 <p className="text-[10px] text-brand-muted uppercase tracking-[0.15em]">{CONTACT_INFO.CRM}</p>
                 <span className="text-brand-muted/30">|</span>
                 <p className="text-[10px] text-brand-muted uppercase tracking-[0.15em]">{CONTACT_INFO.RQE}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;