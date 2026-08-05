import React, { useState } from 'react';
import { Phone, Calendar, X, MessageSquare } from 'lucide-react';
import { CLINIC_INFO } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <>
      {/* Desktop & Tablet Floating WhatsApp Button (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end gap-2 group">
        
        {/* Tooltip bubble */}
        {showTooltip && (
          <div className="bg-slate-900 text-white text-xs px-3.5 py-2 rounded-xl shadow-lg border border-slate-700 flex items-center gap-2 animate-bounce">
            <MessageSquare className="w-3.5 h-3.5 text-teal-400 shrink-0" />
            <span>Agendamento rápido no WhatsApp</span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-white ml-1"
              aria-label="Fechar dica"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        )}

        {/* Floating Button */}
        <a
          href={CLINIC_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-teal-700 hover:bg-teal-800 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group-hover:scale-105 active:scale-95 border border-teal-600"
          aria-label="Agendar Consulta no WhatsApp com Psicólogo Antonio Martins"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>

      {/* Mobile Bottom Fixed Bar for Instant Access */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 p-3 shadow-lg flex items-center gap-3">
        <a
          href={CLINIC_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-teal-800 hover:bg-teal-900 text-white font-medium text-sm py-3 px-4 rounded-xl shadow-xs transition-colors"
        >
          <Calendar className="w-4 h-4 text-teal-200" />
          <span>Agendar Consulta via WhatsApp</span>
        </a>
      </div>
    </>
  );
};
