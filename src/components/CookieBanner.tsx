import React, { useState, useEffect } from 'react';
import { Cookie, ShieldCheck, X } from 'lucide-react';

interface CookieBannerProps {
  onOpenTerms: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onOpenTerms }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const hasAccepted = localStorage.getItem('cookie_consent_accepted');
    if (!hasAccepted) {
      // Show banner after brief delay for smooth appearance
      const timer = setTimeout(() => setIsVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent_accepted', 'true');
    setIsVisible(false);
  };

  const handleClose = () => {
    // Dismiss for session
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div 
      role="region" 
      aria-label="Autorização de Cookies e Privacidade"
      className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-xl z-50 bg-slate-900/95 backdrop-blur-md text-white p-5 rounded-3xl shadow-2xl border border-slate-700/80 animate-in slide-in-from-bottom-5 duration-300"
    >
      <div className="space-y-4">
        
        {/* Top Header & Icon */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-teal-800/90 text-teal-300 flex items-center justify-center border border-teal-700/60 shrink-0">
              <Cookie className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif-display font-bold text-base text-white flex items-center gap-1.5">
                Privacidade & Cookies
              </h4>
              <p className="text-[11px] text-teal-300 font-mono">LGPD Compliance</p>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors"
            aria-label="Fechar aviso de cookies"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Text */}
        <p className="text-xs text-slate-300 leading-relaxed">
          Utilizamos cookies essenciais para garantir o funcionamento seguro e otimizar sua experiência neste site. Não utilizamos seus dados para rastreamento comercial, respeitando as diretrizes da <strong>LGPD</strong> e o sigilo profissional da psicologia.
        </p>

        {/* Buttons */}
        <div className="pt-1 flex flex-wrap items-center gap-2 text-xs">
          <button
            onClick={handleAccept}
            className="flex-1 sm:flex-initial px-4 py-2 bg-teal-600 hover:bg-teal-500 text-white font-medium rounded-xl transition-colors shadow-xs flex items-center justify-center gap-1.5"
          >
            <ShieldCheck className="w-4 h-4 text-teal-200" />
            <span>Aceitar Todos</span>
          </button>

          <button
            onClick={onOpenTerms}
            className="flex-1 sm:flex-initial px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium rounded-xl border border-slate-700 transition-colors text-center"
          >
            Termos de Uso & LGPD
          </button>
        </div>

      </div>
    </div>
  );
};
