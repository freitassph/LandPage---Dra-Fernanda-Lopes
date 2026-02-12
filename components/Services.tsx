import React from 'react';
import { Heart, Activity, MonitorPlay } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="atuacao" className="py-32 bg-transparent border-t border-white/5 scroll-mt-20 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 reveal">
          <span className="text-brand-rose text-[10px] font-bold uppercase tracking-[0.4em]">Atuação</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mt-6">Protocolos de Cuidado Integral</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="glass-card p-10 group reveal delay-100">
            <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:border-brand-rose/50 group-hover:bg-brand-rose/10 transition-colors duration-500">
              <Heart className="w-6 h-6 text-brand-rose" strokeWidth={1} />
            </div>
            <h3 className="text-2xl font-serif text-white mb-6 group-hover:text-brand-rose transition-colors duration-300 italic">Ginecologia</h3>
            <p className="text-brand-muted font-light text-sm leading-relaxed mb-8 group-hover:text-white/80 transition-colors">
              Prevenção e tratamento de patologias como endometriose, SOP e climatério. Foco na recuperação da qualidade de vida e saúde íntima.
            </p>
            <ul className="space-y-3 text-xs uppercase tracking-wider text-brand-muted/60">
              <li className="flex items-center gap-3"><span className="w-1 h-1 bg-brand-rose rounded-full"></span>Rotina Ginecológica</li>
              <li className="flex items-center gap-3"><span className="w-1 h-1 bg-brand-rose rounded-full"></span>Implantes Hormonais</li>
              <li className="flex items-center gap-3"><span className="w-1 h-1 bg-brand-rose rounded-full"></span>Uroginecologia</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="glass-card p-10 group reveal delay-200">
            <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:border-brand-rose/50 group-hover:bg-brand-rose/10 transition-colors duration-500">
              <Activity className="w-6 h-6 text-brand-rose" strokeWidth={1} />
            </div>
            <h3 className="text-2xl font-serif text-white mb-6 group-hover:text-brand-rose transition-colors duration-300 italic">Obstetrícia</h3>
            <p className="text-brand-muted font-light text-sm leading-relaxed mb-8 group-hover:text-white/80 transition-colors">
              Acompanhamento gestacional rigoroso, garantindo a saúde do binômio mãe-bebê com monitoramento constante e humanização.
            </p>
            <ul className="space-y-3 text-xs uppercase tracking-wider text-brand-muted/60">
              <li className="flex items-center gap-3"><span className="w-1 h-1 bg-brand-rose rounded-full"></span>Pré-Natal de Alto Risco</li>
              <li className="flex items-center gap-3"><span className="w-1 h-1 bg-brand-rose rounded-full"></span>Parto Humanizado</li>
              <li className="flex items-center gap-3"><span className="w-1 h-1 bg-brand-rose rounded-full"></span>Puerpério</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="glass-card p-10 group reveal delay-300 md:col-span-2 lg:col-span-1">
            <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:border-brand-rose/50 group-hover:bg-brand-rose/10 transition-colors duration-500">
              <MonitorPlay className="w-6 h-6 text-brand-rose" strokeWidth={1} />
            </div>
            <h3 className="text-2xl font-serif text-white mb-6 group-hover:text-brand-rose transition-colors duration-300 italic">Ultrassonografia</h3>
            <p className="text-brand-muted font-light text-sm leading-relaxed mb-8 group-hover:text-white/80 transition-colors">
              A comodidade de realizar seus exames de imagem com sua própria médica, garantindo correlação clínica imediata.
            </p>
            <ul className="space-y-3 text-xs uppercase tracking-wider text-brand-muted/60">
              <li className="flex items-center gap-3"><span className="w-1 h-1 bg-brand-rose rounded-full"></span>USG Obstétrico</li>
              <li className="flex items-center gap-3"><span className="w-1 h-1 bg-brand-rose rounded-full"></span>USG Transvaginal</li>
              <li className="flex items-center gap-3"><span className="w-1 h-1 bg-brand-rose rounded-full"></span>Doppler Fluxometria</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;