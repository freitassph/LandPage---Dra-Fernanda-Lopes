import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-brand-bg relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 relative group">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-brand-rose/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative">
               {/* Vertical portrait */}
               <div className="relative overflow-hidden rounded-sm shadow-2xl">
                 <img 
                   src="https://i.ibb.co/HLN98G0z/wmremove-transformed.avif" 
                   alt="Dra. Fernanda Lopes" 
                   className="relative z-10 w-full h-auto object-cover transition-all duration-700 transform group-hover:scale-[1.02]"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-50 z-20"></div>
               </div>

               {/* Badge de Autoridade - 10+ Anos */}
               <div className="absolute -bottom-6 -right-2 md:-bottom-12 md:-right-10 z-30 bg-[#151515] p-6 md:p-8 border border-brand-rose/20 shadow-[0_20px_50px_rgba(0,0,0,0.7)] group-hover:-translate-y-2 transition-transform duration-500">
                  <div className="flex flex-col items-start relative">
                    {/* Decorative corner */}
                    <div className="absolute -top-6 -left-6 md:-top-8 md:-left-8 w-8 h-8 md:w-12 md:h-12 border-t border-l border-brand-rose/40"></div>
                    
                    <p className="font-serif text-4xl md:text-5xl text-brand-rose italic leading-none">10+</p>
                    <p className="text-[10px] md:text-xs text-brand-muted uppercase tracking-[0.25em] mt-3 leading-relaxed border-t border-white/5 pt-3 w-full">
                      Anos de <br />
                      <span className="text-white font-medium">Dedicação</span>
                    </p>
                  </div>
               </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
              Mais que uma médica, <br />
              <span className="italic text-brand-muted">uma aliada.</span>
            </h2>
            <div className="space-y-6 text-brand-muted font-light text-lg leading-relaxed">
              <p>
                Acredito que a ginecologia moderna vai além do consultório; é sobre ouvir, entender e orientar a mulher em todas as suas fases.
              </p>
              <p>
                Minha missão é oferecer um espaço seguro, longe de julgamentos e mitos, onde a ciência encontra a empatia. Com formação especializada e atuação focada em Ginecologia e Obstetrícia, ofereço a segurança de quem realiza o diagnóstico e acompanha o tratamento.
              </p>
              <p className="text-brand-text font-normal">
                Sou especialista em Ultrassonografia em Ginecologia e Obstetrícia (USG GO), garantindo precisão diagnóstica imediata.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="border-l border-brand-rose pl-4">
                <h4 className="text-brand-text font-serif text-xl">USG GO</h4>
                <p className="text-xs text-brand-muted uppercase mt-1">Especialista em Imagem</p>
              </div>
              <div className="border-l border-brand-rose pl-4">
                <h4 className="text-brand-text font-serif text-xl">Clínica Femma</h4>
                <p className="text-xs text-brand-muted uppercase mt-1">Diretora Médica</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;