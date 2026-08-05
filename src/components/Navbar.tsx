import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, MapPin, Phone } from 'lucide-react';
import { CLINIC_INFO } from '../data/content';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Atuação', href: '#especialidades' },
    { name: 'Modalidades', href: '#modalidades' },
    { name: 'Estrutura', href: '#estrutura-tratamento' },
    { name: 'Funcionamento', href: '#como-funciona' },
    { name: 'Localização', href: '#localizacao' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-teal-900/10 py-3' : 'bg-white/90 backdrop-blur-sm py-3.5 border-b border-slate-200/60'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center gap-2.5 group shrink-0 whitespace-nowrap">
            <div className="w-9 h-9 rounded-xl bg-teal-800 text-teal-50 flex items-center justify-center font-serif-display font-semibold text-lg shadow-xs group-hover:bg-teal-900 transition-colors">
              AM
            </div>
            <span className="font-semibold text-teal-950 text-base sm:text-lg tracking-tight">
              Antonio Martins <span className="font-normal text-slate-400 mx-1">|</span> <span className="text-teal-800 font-medium text-sm sm:text-base">Psicólogo</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-teal-900 text-xs xl:text-sm font-medium transition-colors hover:bg-teal-50/70 px-2.5 py-1.5 rounded-lg whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={CLINIC_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-teal-800 hover:bg-teal-900 text-white text-xs sm:text-sm font-medium px-3.5 sm:px-4 py-2 rounded-xl transition-all shadow-xs hover:shadow-md active:scale-95 whitespace-nowrap"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendamento</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-teal-800 hover:bg-teal-50 transition-colors"
              aria-label="Alternar Menu de Navegação"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-slate-100 pb-4 space-y-1.5 animate-fadeIn">
            <div className="px-2 py-1.5 mb-2 bg-slate-50 rounded-lg flex items-center gap-2 text-xs text-slate-600">
              <MapPin className="w-3.5 h-3.5 text-teal-700 shrink-0" />
              <span>{CLINIC_INFO.fullAddress}</span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-slate-700 hover:text-teal-900 hover:bg-teal-50 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-teal-800 text-white px-4 py-2.5 rounded-xl font-medium text-sm text-center shadow-xs"
              >
                <Phone className="w-4 h-4" />
                <span>WhatsApp: {CLINIC_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
