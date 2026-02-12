import React from 'react';
import { Instagram } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/5 text-center md:text-left reveal">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h4 className="text-xl font-serif text-white tracking-widest">FERNANDA LOPES</h4>
            <p className="text-xs text-brand-muted mt-2">Ginecologia, Obstetrícia e Ultrassonografia</p>
          </div>
          
          <div className="text-xs text-brand-muted space-y-1 text-center md:text-right">
            <p>Responsável Técnica: Dra. Fernanda Lopes</p>
            <p>{CONTACT_INFO.CRM} | {CONTACT_INFO.RQE}</p>
            <p className="mt-4 opacity-50 max-w-md">As informações contidas neste site têm caráter informativo e educacional e não substituem a consulta médica presencial. Em caso de emergência, procure o pronto-socorro.</p>
          </div>
        </div>
        <div className="border-t border-white/5 mt-8 pt-8 text-center flex flex-col items-center">
          <p className="text-[10px] text-gray-600 uppercase tracking-widest">© {new Date().getFullYear()} Dra. Fernanda Lopes. All rights reserved.</p>
          <p className="text-[10px] text-gray-700 uppercase tracking-widest mt-2">Designed for Excellence</p>
          <a 
            href={CONTACT_INFO.INSTAGRAM_URL}
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[10px] text-gray-700 uppercase tracking-widest mt-1 hover:text-brand-rose transition-all duration-300 flex items-center gap-1 group"
          >
            <span className="group-hover:tracking-[0.25em] transition-all duration-500">{CONTACT_INFO.INSTAGRAM_HANDLE}</span>
            <Instagram className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
