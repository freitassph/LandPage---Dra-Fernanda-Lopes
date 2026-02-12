import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  // closeMenu removido pois não era utilizado (causava erro TS6133)

  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.HEADER);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      setIsOpen(false);
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div 
        className={`absolute inset-0 transition-all duration-500 ${
          isScrolled 
            ? 'bg-brand-bg/90 backdrop-blur-md border-b border-white/5 shadow-lg' 
            : 'bg-transparent border-transparent'
        }`} 
      />

      <div className="container mx-auto px-6 relative z-50">
        <div className="flex justify-between items-center">
          <a 
            href="#inicio" 
            onClick={(e) => handleNavClick(e, 'inicio')}
            className="text-xl md:text-2xl font-serif font-semibold tracking-[0.15em] text-white group cursor-pointer relative"
          >
            FERNANDA <span className="text-brand-rose group-hover:text-white transition-colors">LOPES</span>
          </a>

          <nav className="hidden xl:flex space-x-10 text-[11px] uppercase tracking-[0.25em] text-brand-muted">
            {['Início', 'Especialista', 'Atuação', 'Agendar', 'Localização', 'Dúvidas'].map((item) => {
              const ids: {[key: string]: string} = {
                'Início': 'inicio',
                'Especialista': 'sobre',
                'Atuação': 'atuacao',
                'Agendar': 'agendar',
                'Localização': 'localizacao',
                'Dúvidas': 'faq'
              };
              const targetId = ids[item];
              return (
                <a 
                  key={item}
                  href={`#${targetId}`}
                  onClick={(e) => handleNavClick(e, targetId)}
                  className="hover:text-brand-rose transition-colors duration-300 cursor-pointer"
                >
                  {item}
                </a>
              );
            })}
          </nav>

          <a 
            href={whatsappUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden xl:inline-block px-8 py-3 border border-brand-rose/50 text-brand-rose hover:bg-brand-rose hover:text-white transition-all duration-300 rounded-sm text-[10px] font-bold uppercase tracking-[0.25em] active:scale-95"
          >
            Agendar
          </a>

          <button 
            onClick={toggleMenu} 
            className="xl:hidden text-white focus:outline-none p-4 -mr-2 relative"
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div 
        className={`fixed inset-0 bg-brand-bg z-40 flex flex-col justify-center items-center transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-rose/5 blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/5 blur-[100px] pointer-events-none"></div>

        <nav className="flex flex-col items-center space-y-10 w-full px-6 text-center relative z-50">
          {[
            { label: 'Início', id: 'inicio' },
            { label: 'Especialista', id: 'sobre' },
            { label: 'Atuação', id: 'atuacao' },
            { label: 'Agendar', id: 'agendar' },
            { label: 'Localização', id: 'localizacao' },
            { label: 'Dúvidas', id: 'faq' },
          ].map((item, idx) => (
            <a 
              key={item.id}
              href={`#${item.id}`} 
              onClick={(e) => handleNavClick(e, item.id)} 
              className={`text-3xl font-serif text-white hover:text-brand-rose transition-all duration-300 transform ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: `${isOpen ? 50 + (idx * 30) : 0}ms` }}
            >
              {item.label}
            </a>
          ))}
          
          <div className={`mt-10 ${isOpen ? 'opacity-100' : 'opacity-0'} transition-opacity delay-300`}>
             <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-brand-rose border-b border-brand-rose pb-1 text-xs uppercase tracking-[0.3em] transition-all duration-200 active:scale-95 active:text-white active:border-white hover:text-brand-rose/80"
             >
               Agendar via WhatsApp
             </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;