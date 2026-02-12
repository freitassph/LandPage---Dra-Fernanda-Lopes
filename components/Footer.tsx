import React from 'react';
import { Instagram } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-16 border-t border-white/5 text-center md:text-left reveal">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
            <h4 className="text-xl font-serif text-white tracking-[0.2em] uppercase">Fernanda Lopes</h4>
            <p className="text-[10px] text-brand-muted mt-3 uppercase tracking-[0.1em]">Ginecologia • Obstetrícia • Ultrassonografia</p>
          </div>
          
          <div className="text-[10px] text-brand-muted/60 space-y-2 text-center md:text-right uppercase tracking-wider">
            <p>Responsável Técnica: Dra. Fernanda Lopes</p>
            <p>{CONTACT_INFO.CRM} | {CONTACT_INFO.RQE}</p>
          </div>
        </div>
        <div className="border-t border-white/5 mt-12 pt-12 text-center flex flex-col items-center">
          <p className="text-[9px] text-gray-700 uppercase tracking-[0.3em]">© {new Date().getFullYear()} Dra. Fernanda Lopes</p>
          <a 
            href={CONTACT_INFO.INSTAGRAM_URL}
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[9px] text-gray-600 uppercase tracking-[0.3em] mt-4 hover:text-brand-rose transition-all duration-300 flex items-center gap-2 group"
          >
            <span className="group-hover:tracking-[0.5em] transition-all duration-500">{CONTACT_INFO.INSTAGRAM_HANDLE}</span>
            <Instagram className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;