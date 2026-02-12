import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-brand-bg relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Alterado de md:flex-row para lg:flex-row. No tablet fica um em cima do outro. */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative group reveal">
            {/* Wrapper for positioning context relative to image width on all breakpoints */}
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-brand-rose/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative overflow-hidden rounded-sm">
                 {/* Vertical portrait */}
                 <img 
                   src="https://i.ibb.co/HLN98G0z/wmremove-transformed.avif" 
                   alt="Dra. Fernanda Lopes" 
                   width="800"
                   height="1000"
                   className="relative z-10 w-full h-auto object-cover transition-all duration-700 transform group-hover:scale-[1.02]"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-50 z-20"></div>
              </div>

              {/* Badge Responsivo - Fixed positioning relative to image wrapper */}
              <div className="absolute -bottom-4 right-4 md:-bottom-6 md:-right-6 lg:-bottom-6 lg:-right-6 z-30 bg-brand-surface p-4 md:p-6 border border-brand-rose/30 shadow-xl reveal delay-200">
                <p className="font-serif text-2xl md:text-3xl text-brand-rose italic">10+</p>
                <p className="text-[10px] md:text-xs text-brand-muted uppercase tracking-widest mt-1">Anos de <br />Dedicação</p>
              </div>
              
            </div>
          </div>

          <div className="w-full lg:w-1/2 reveal delay-100">
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
            
            <div className="mt-10 grid grid-cols-2 gap-6 reveal delay-200">
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