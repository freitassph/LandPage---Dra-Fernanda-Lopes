import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppUrl, WHATSAPP_MESSAGES } from '../constants';

const Location: React.FC = () => {
  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.LOCATION);
  const mapsUrl = CONTACT_INFO.MAPS_URL;

  return (
    <section id="localizacao" className="py-24 bg-brand-surface relative scroll-mt-28">
      {/* Alterado breakpoint de flex-row para lg:flex-row */}
      <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-12">
        <div className="w-full lg:w-1/2 reveal">
          <span className="text-brand-rose text-xs font-bold uppercase tracking-[0.3em]">Localização</span>
          <h2 className="text-4xl font-serif text-white mt-4 mb-8">Recebemos você na Clínica Femma</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <a 
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-brand-rose rounded-full text-white hover:bg-white hover:text-brand-rose transition-colors duration-300 flex-shrink-0 cursor-pointer shadow-[0_0_15px_rgba(205,139,139,0.3)]"
                aria-label="Ver localização no Google Maps"
              >
                <MapPin className="w-5 h-5" />
              </a>
              <div>
                <a 
                   href={mapsUrl}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-white font-serif text-lg hover:text-brand-rose transition-colors duration-300 block"
                >
                    {CONTACT_INFO.ADDRESS_STREET}
                </a>
                <p className="text-brand-muted font-light">{CONTACT_INFO.ADDRESS_NEIGHBORHOOD}, {CONTACT_INFO.CITY}-{CONTACT_INFO.STATE}</p>
                <p className="text-brand-muted font-light text-sm mt-1">CEP: {CONTACT_INFO.ZIP}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 group">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-brand-bg rounded-full text-brand-rose group-hover:bg-brand-rose group-hover:text-white transition-colors duration-500 shadow-sm group-hover:shadow-[0_0_15px_rgba(205,139,139,0.3)] flex-shrink-0 cursor-pointer"
                aria-label="Agendar via WhatsApp"
              >
                <Phone className="w-5 h-5" />
              </a>
              <div>
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-serif text-lg hover:text-brand-rose transition-all duration-300 relative inline-block group"
                >
                  <span>{CONTACT_INFO.PHONE_DISPLAY}</span>
                  <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-brand-rose transition-all duration-500 group-hover:w-full"></span>
                </a>
                <p className="text-brand-muted font-light text-sm mt-1">Agendamento via WhatsApp</p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a 
              href={whatsappUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-brand-rose text-white px-8 py-3 rounded-sm hover:bg-white hover:text-brand-bg transition-all duration-300 text-sm uppercase tracking-widest font-bold text-center shadow-[0_5px_15px_rgba(205,139,139,0.2)]"
            >
              Agendar Consulta
            </a>
            <a 
              href={mapsUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block border border-white/20 text-white px-8 py-3 rounded-sm hover:bg-white hover:text-brand-bg transition-all duration-300 text-sm uppercase tracking-widest text-center"
            >
              Ver no Google Maps
            </a>
          </div>
        </div>
        
        {/* Ajuste de altura para Tablets: h-96 ou min-h */}
        <div className="w-full lg:w-1/2 h-80 md:h-96 lg:h-auto bg-[#2C2C2C] rounded-sm overflow-hidden relative group reveal delay-200 isolate">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.376674640866!2d-49.0700!3d-11.7290!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDQzJzQ0LjQiUyA0OcKwMDQnMTIuMCJX!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }} 
            allowFullScreen={true} 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa da Clínica"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Location;