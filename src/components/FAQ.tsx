import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '../constants';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/5 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full py-8 flex justify-between items-center text-left group focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="text-xl md:text-2xl font-serif text-white group-hover:text-brand-rose transition-colors duration-300 pr-8 italic">
          {question}
        </span>
        <span className={`text-brand-rose transition-transform duration-500 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          {isOpen ? <Minus size={18} strokeWidth={1} /> : <Plus size={18} strokeWidth={1} />}
        </span>
      </button>
      <div 
        className={`grid transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isOpen ? 'grid-rows-[1fr] opacity-100 mb-8' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="text-brand-muted font-light leading-loose text-sm md:text-base pr-8 max-w-2xl">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqData = [
    {
      question: "A Dra. Fernanda atende por planos de saúde?",
      answer: "Prezamos pela exclusividade e pelo tempo dedicado a cada paciente. Por isso, os atendimentos são particulares. No entanto, emitimos nota fiscal para que você possa solicitar o reembolso integral ou parcial junto ao seu convênio, dependendo do seu plano."
    },
    {
      question: "É possível realizar o ultrassom durante a consulta?",
      answer: "Sim. A Dra. Fernanda possui Título de Especialista em Ultrassonografia em Ginecologia e Obstetrícia. Realizar o exame no momento da consulta permite uma correlação clínica imediata, agilizando o diagnóstico e o tratamento."
    },
    {
      question: "Como funciona o agendamento de consultas?",
      answer: "O agendamento é realizado prioritariamente via WhatsApp. Nossa equipe está preparada para encontrar o melhor horário para você e fornecer todas as orientações prévias necessárias para o seu atendimento."
    },
    {
      question: "Quais procedimentos são realizados na clínica?",
      answer: "Além das consultas de rotina e pré-natal, realizamos inserção de DIU e Implanon, biópsias, cauterizações, ultrassonografia obstétrica e ginecológica (incluindo Doppler), entre outros procedimentos ambulatoriais."
    },
    {
      question: "Qual o tempo de duração da consulta?",
      answer: "Não estipulamos um tempo fixo rígido, pois cada caso exige uma atenção específica. Nossas consultas são agendadas com intervalo suficiente para uma anamnese detalhada, exame físico completo e realização de ultrassom, sem pressa."
    }
  ];

  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.FAQ);

  return (
    <section id="faq" className="py-32 bg-brand-bg relative scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          
          <div className="w-full lg:w-1/3 reveal">
            <span className="text-brand-rose text-[10px] font-bold uppercase tracking-[0.4em]">Dúvidas</span>
            <h2 className="text-5xl font-serif text-white mt-6 mb-8">Perguntas <br /><span className="italic text-brand-muted">Frequentes</span></h2>
            <p className="text-brand-muted font-light mb-10 leading-relaxed">
              Esclareça questões comuns sobre o atendimento, convênios e procedimentos realizados pela Dra. Fernanda Lopes.
            </p>
            <a 
              href={whatsappUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-block text-brand-rose hover:text-white border-b border-brand-rose pb-1 transition-colors uppercase tracking-[0.25em] text-[10px] font-bold"
            >
              Falar com a Secretaria
            </a>
          </div>

          <div className="w-full lg:w-2/3 reveal delay-100">
            <div className="divide-y divide-white/5 border-t border-white/5">
              {faqData.map((item, index) => (
                <FAQItem key={index} question={item.question} answer={item.answer} />
              ))}
            </div>
            
             <div className="mt-12 lg:hidden">
                <a 
                  href={whatsappUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-rose hover:text-white border-b border-brand-rose pb-1 transition-colors uppercase tracking-[0.25em] text-[10px] font-bold"
                >
                  Tenho outra dúvida
                </a>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;