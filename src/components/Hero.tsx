import React from 'react';
import { getWhatsAppUrl, CONTACT_INFO, WHATSAPP_MESSAGES } from '../constants';

const Hero: React.FC = () => {
  const MOBILE_IMAGE = "https://i.ibb.co/TDDNQjzK/wmremove-transformed-2.avif";
  const TABLET_IMAGE = "https://i.ibb.co/bjVvCr0w/wmremove-transformed-3.avif";
  const DESKTOP_IMAGE = "https://i.ibb.co/My77cLKy/wmremove-transformed-1.avif";
  
  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.DEFAULT);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-bg scroll-mt-20">
      
      {/* ================= BACKGROUND LAYERS (OPTIMIZED) ================= */}
      <div className="absolute inset-0 z-0">
         <picture>
            {/* Desktop (Aspect Ratio approx 16:9) */}
            <source media="(min-width: 1024px)" srcSet={DESKTOP_IMAGE} width="1920" height="1080" />
            {/* Tablet (Aspect Ratio approx 4:3 or similar) */}
            <source media="(min-width: 768px)" srcSet={TABLET_IMAGE} width="1024" height="1366" />
            {/* Mobile (Aspect Ratio approx 9:16) */}
            <img 
              src={MOBILE_IMAGE} 
              alt="Dra. Fernanda Lopes - Ginecologista e Obstetra" 
              width="600" 
              height="1067"
              /* PERFORMANCE: Removed transition-opacity on mobile for instant LCP paint. 
                 Opacity is handled via classNames with md: prefixes for effects if needed, 
                 but here we keep it simple for mobile speed. 
              */
              className="w-full h-full object-cover object-[center_30%] md:object-[center_20%] lg:object-[50%_15%] opacity-70 md:opacity-60 lg:opacity-50 md:transition-opacity md:duration-1000"
              fetchPriority="high"
              decoding="sync"
            />
         </picture>
         
         {/* Gradients Overlay */}
         <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent md:bg-gradient-to-r md:from-[#050505] md:via-[#050505]/80 md:to-[#050505]/10 z-10"></div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="container mx-auto px-6 relative z-20 mt-20 md:mt-0">
        <div className="max-w-2xl animate-fade-in-up">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[1px] w-12 bg-brand-rose/60"></span>
            <span className="text-brand-rose text-xs font-bold uppercase tracking-[0.3em]">Ginecologia e Obstetrícia</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-light leading-[1.1] mb-6 text-white drop-shadow-2xl">
            Sua saúde íntima <br />
            ouvida, <br />
            <span className="italic text-brand-rose font-serif opacity-90">e tratada.</span>
          </h1>
          
          <p className="text-lg text-brand-muted mb-8 font-light leading-relaxed max-w-lg border-l border-brand-surface pl-4">
            Medicina sem pressa e sem tabus. Um protocolo que une a tecnologia do ultrassom ao acolhimento que você merece.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={whatsappUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-brand-rose/90 text-white px-8 py-4 rounded-sm hover:bg-white hover:text-brand-bg transition-all duration-500 uppercase tracking-widest text-xs font-bold shadow-[0_0_20px_rgba(192,149,149,0.1)] text-center flex items-center justify-center hover:shadow-none"
            >
              Iniciar Atendimento
            </a>
            <div className="flex items-center gap-4 px-4 py-2 border border-white/5 rounded-sm bg-brand-surface/50 backdrop-blur-sm">
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