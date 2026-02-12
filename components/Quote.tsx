import React from 'react';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '../constants';

const Quote: React.FC = () => {
  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.UROGYNECOLOGY);

  return (
    <section id="agendar" className="py-24 bg-brand-bg border-y border-white/5 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="bg-brand-surface p-12 md:p-20 rounded-sm relative overflow-hidden reveal">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-rose/5 blur-[120px]"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-16 relative z-10">
            <div className="md:w-3/4">
              <h3 className="text-3xl md:text-5xl font-serif text-white mb-8 leading-snug">
                "Verdades sobre a saúde íntima para <span className="italic text-brand-rose opacity-90">falar</span> e sair correndo..."
              </h3>
              <p className="text-brand-muted font-light mb-10 text-lg max-w-2xl">
                Não. Perda de urina não é normal. Sentir dor não é "coisa de mulher". Na minha consulta, quebramos tabus com ciência e resolvemos problemas reais que afetam sua qualidade de vida.
              </p>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-rose hover:text-white border-b border-brand-rose/50 pb-1 transition-colors uppercase tracking-[0.25em] text-[10px] font-bold"
              >
                Agendar Avaliação Uroginecológica
              </a>
            </div>
            <div className="md:w-1/4 text-right hidden md:block">
              <span className="text-[200px] leading-none font-serif text-white/5 absolute top-10 right-10 select-none">"</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;