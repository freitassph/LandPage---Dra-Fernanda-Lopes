import React from 'react';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '../constants';

const Quote: React.FC = () => {
  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.UROGYNECOLOGY);

  return (
    <section id="agendar" className="py-20 bg-brand-bg border-y border-white/5 scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="bg-[#181818] p-10 md:p-16 rounded-sm relative overflow-hidden reveal">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-rose/10 blur-[100px]"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
            <div className="md:w-2/3">
              <h3 className="text-3xl md:text-4xl font-serif text-white mb-4">
                "Verdades sobre a saúde íntima para falar e sair correndo..."
              </h3>
              <p className="text-brand-muted font-light mb-8">
                Não. Perda de urina não é normal. Sentir dor não é "coisa de mulher". Na minha consulta, quebramos tabus com ciência e resolvemos problemas reais que afetam sua qualidade de vida.
              </p>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-rose hover:text-white border-b border-brand-rose pb-1 transition-colors uppercase tracking-widest text-xs font-bold"
              >
                Agendar Avaliação Uroginecológica
              </a>
            </div>
            <div className="md:w-1/3 text-right">
              <span className="text-[150px] leading-none font-serif text-brand-surface absolute -top-10 right-0 opacity-50 select-none">"</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
