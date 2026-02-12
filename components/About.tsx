
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-32 bg-brand-bg relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="w-full lg:w-5/12 relative group reveal">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="absolute -inset-4 bg-brand-rose/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              
              <div className="relative overflow-hidden rounded-sm">
                 <img 
                   src="https://i.ibb.co/HLN98G0z/wmremove-transformed.avif" 
                   alt="Dra. Fernanda Lopes" 
                   className="relative z-10 w-full h-auto object-cover transition-all duration-1000 transform group-hover:scale-[1.01]"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-60 z-20"></div>
              </div>

              {/* Badge "10+ Anos": Ajustado para aparecer no mobile com escala e posição otimizadas */}
              <div className="absolute -bottom-4 right-4 md:-bottom-6 md:-right-6 z-30 bg-brand-surface p-6 md:p-8 border border-white/5 shadow-2xl reveal delay-200">
                <p className="font-serif text-3xl md:text-4xl text-brand-rose italic">10+</p>
                <p className="text-[9px] md:text-[10px] text-brand-muted uppercase tracking-[0.25em] mt-2">Anos de <br />Dedicação</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-7/12 reveal delay-100">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-8 leading-tight">
              Mais que uma médica, <br />
              <span className="italic text-brand-muted font-serif">uma aliada.</span>
            </h2>
            <div className="space-y-8 text-brand-muted font-light text-lg leading-relaxed max-w-xl">
              <p>
                Acredito que a ginecologia moderna vai além do consultório; é sobre ouvir, entender e orientar a mulher em todas as suas fases.
              </p>
              <p>
                Minha missão é oferecer um espaço seguro, longe de julgamentos e mitos, onde a ciência encontra a empatia. Com formação especializada e atuação focada em Ginecologia e Obstetrícia, ofereço a segurança de quem realiza o diagnóstico e acompanha o tratamento.
              </p>
              <p className="text-brand-text font-normal border-l-2 border-brand-rose pl-4">
                Sou especialista em Ultrassonografia em Ginecologia e Obstetrícia (USG GO), garantindo precisão diagnóstica imediata.
              </p>
            </div>
            
            <div className="mt-16 grid grid-cols-2 gap-10 reveal delay-200 border-t border-white/5 pt-10">
              <div>
                <h4 className="text-brand-text font-serif text-2xl italic">USG GO</h4>
                <p className="text-[10px] text-brand-rose uppercase tracking-[0.2em] mt-2">Especialista em Imagem</p>
              </div>
              <div>
                <h4 className="text-brand-text font-serif text-2xl italic">Clínica Femma</h4>
                <p className="text-[10px] text-brand-rose uppercase tracking-[0.2em] mt-2">Diretora Médica</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
