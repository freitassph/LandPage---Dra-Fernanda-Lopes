
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.HEADER);

  // Efeito otimizado para detectar scroll sem causar jank (travamentos)
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

  // Bloqueia o scroll do corpo da página quando o menu mobile está aberto
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
      // Pequeno delay para garantir transição suave em mobile
      setTimeout(() => {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'py-3' : 'py-5'
      }`}
    >
      {/* Background Element - Separated to prevent 'backdrop-filter' from creating a containing block for fixed children */}
      <div 
        className={`absolute inset-0 transition-all duration-500 ${
          isScrolled 
            ? 'bg-brand-bg/95 backdrop-blur-md border-b border-white/5 shadow-lg' 
            : 'bg-transparent border-transparent'
        }`} 
      />

      <div className="container mx-auto px-6 relative z-50">
        <div className="flex justify-between items-center">
          <a 
            href="#inicio" 
            onClick={(e) => handleNavClick(e, 'inicio')}
            className="text-2xl font-serif font-semibold tracking-widest text-white group cursor-pointer relative"
          >
            FERNANDA <span className="text-brand-rose group-hover:text-white transition-colors">LOPES</span>
          </a>

          {/* Desktop Nav - Visible only on LG and up */}
          <nav className="hidden lg:flex space-x-8 text-sm uppercase tracking-widest text-brand-muted">
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
            className="hidden lg:inline-block px-6 py-2 border border-brand-rose text-brand-rose hover:bg-brand-rose hover:text-white transition-all duration-300 rounded-full text-xs font-bold uppercase tracking-wide"
          >
            Agendar Consulta
          </a>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={toggleMenu} 
            className="lg:hidden text-white focus:outline-none p-4 -mr-2 relative transition-transform active:scale-95"
            aria-label={isOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-brand-bg z-40 flex flex-col justify-center items-center transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isOpen 
            ? 'opacity-100 visible translate-y-0' 
            : 'opacity-0 invisible -translate-y-4'
        }`}
      >
        {/* Elementos decorativos de fundo */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-rose/5 blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/5 blur-[100px] pointer-events-none"></div>

        <nav className="flex flex-col items-center space-y-8 w-full px-6 max-w-md text-center relative z-50">
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
              className={`text-2xl font-serif text-white hover:text-brand-rose transition-all duration-500 transform ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${isOpen ? 100 + (idx * 50) : 0}ms` }}
            >
              {item.label}
            </a>
          ))}
          
          <div 
            className={`mt-8 w-full transition-all duration-700 delay-500 ${
              isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <a 
              href={whatsappUrl}
              onClick={closeMenu}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-4 bg-brand-rose text-white rounded-sm font-bold uppercase text-sm tracking-widest shadow-[0_0_20px_rgba(205,139,139,0.3)] hover:bg-white hover:text-brand-bg transition-all"
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
