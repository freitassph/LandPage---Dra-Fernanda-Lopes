import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppUrl, WHATSAPP_MESSAGES } from '../constants';

const Location: React.FC = () => {
  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.LOCATION);
  const mapsUrl = CONTACT_INFO.MAPS_URL;

  return (
    <section id="localizacao" className="py-32 bg-brand-surface relative scroll-mt-20">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-20">
        <div className="w-full lg:w-1/2 reveal">
          <span className="text-brand-rose text-[10px] font-bold uppercase tracking-[0.4em]">Localização</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mt-6 mb-12 leading-tight">Recebemos você na <br/><span className="italic text-brand-rose">Clínica Femma</span></h2>
          
          <div className="space-y-10">
            {/* Ícone de Localização */}
            <div className="flex items-start gap-6 group">
              <a 
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-brand-rose/10 border border-brand-rose/20 rounded-full text-brand-rose group-hover:bg-brand-rose group-hover:text-white transition-colors duration-500 flex-shrink-0 cursor-pointer"
              >
                <MapPin className="w-5 h-5" />
              </a>
              <div>
                <a 
                   href={mapsUrl}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-white font-serif text-2xl hover:text-brand-rose transition-colors duration-300 block mb-2"
                >
                    {CONTACT_INFO.ADDRESS_STREET}
                </a>
                <p className="text-brand-muted font-light text-sm">{CONTACT_INFO.ADDRESS_NEIGHBORHOOD}, {CONTACT_INFO.CITY}-{CONTACT_INFO.STATE}</p>
                <p className="text-brand-muted font-light text-sm mt-1 tracking-widest">CEP: {CONTACT_INFO.ZIP}</p>
              </div>
            </div>
            
            {/* Ícone de Telefone */}
            <div className="flex items-start gap-6 group">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-brand-rose/10 border border-brand-rose/20 rounded-full text-brand-rose group-hover:bg-brand-rose group-hover:text-white transition-colors duration-500 flex-shrink-0 cursor-pointer"
              >
                <Phone className="w-5 h-5" />
              </a>
              <div>
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-serif text-2xl hover:text-brand-rose transition-all duration-300 relative inline-block group"
                >
                  <span>{CONTACT_INFO.PHONE_DISPLAY}</span>
                </a>
                <p className="text-brand-muted font-light text-sm mt-2 uppercase tracking-[0.1em] text-[10px]">Agendamento via WhatsApp</p>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col sm:flex-row gap-6">
            <a 
              href={whatsappUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-brand-rose text-white px-10 py-4 rounded-sm hover:bg-white hover:text-brand-bg transition-all duration-300 text-[10px] uppercase tracking-[0.25em] font-bold text-center"
            >
              Agendar Consulta
            </a>
            <a 
              href={mapsUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block border border-white/20 text-white px-10 py-4 rounded-sm hover:bg-white hover:text-brand-bg transition-all duration-300 text-[10px] uppercase tracking-[0.25em] text-center"
            >
              Ver no Google Maps
            </a>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 h-96 lg:h-auto bg-[#2C2C2C] rounded-sm overflow-hidden relative group reveal delay-200">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.376674640866!2d-49.0700!3d-11.7290!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDQzJzQ0LjQiUyA0OcKwMDQnMTIuMCJX!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }} 
            allowFullScreen={true} 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa da Clínica"
            className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-700"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Location;