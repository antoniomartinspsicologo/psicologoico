import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare, ShieldCheck } from 'lucide-react';
import { FAQS, CLINIC_INFO } from '../data/content';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div>
            <span className="inline-block text-xs font-semibold tracking-wider text-teal-800 uppercase bg-teal-50 px-3.5 py-1.5 rounded-lg border border-teal-200 mb-3">
              Esclarecimentos Frequentes
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-slate-900 leading-tight">
              Perguntas Frequentes (FAQ)
            </h2>
          </div>
          <p className="text-slate-600 text-base leading-relaxed">
            Respostas claras, empáticas e pautadas pelo respeito às suas dúvidas antes de iniciar seu processo terapêutico.
          </p>
        </div>

        {/* Interactive Accordion */}
        <div className="mt-12 space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 ${
                  isOpen ? 'bg-teal-50/40 border-teal-800/20 shadow-xs' : 'bg-slate-50/70 border-slate-200/80 hover:bg-slate-50'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-teal-800 text-white' : 'bg-white text-slate-500 border border-slate-200'
                    }`}>
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <span className="font-serif-display text-base sm:text-lg font-semibold text-slate-900">
                      {faq.question}
                    </span>
                  </div>
                  
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-200 shrink-0 ${
                    isOpen ? 'rotate-180 bg-teal-100 text-teal-800' : 'bg-white text-slate-400 border border-slate-200'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-0 text-slate-700 text-sm leading-relaxed border-t border-teal-900/10 mt-1 animate-fadeIn">
                    <p className="pt-4">{faq.answer}</p>
                    
                    <div className="mt-4 pt-3 border-t border-teal-950/5 flex items-center justify-between text-xs text-slate-500">
                      <span className="font-medium text-teal-800 bg-teal-100/60 px-2 py-0.5 rounded">
                        {faq.category}
                      </span>
                      <a
                        href={CLINIC_INFO.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-800 hover:underline font-semibold inline-flex items-center gap-1"
                      >
                        <MessageSquare className="w-3 h-3" />
                        <span>Tirar mais dúvidas no WhatsApp</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Footer Note */}
        <div className="mt-12 text-center p-6 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
          <p className="text-slate-700 text-sm">
            Ficou com alguma dúvida específica sobre o seu caso?
          </p>
          <a
            href={CLINIC_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-teal-800 hover:bg-teal-900 text-white font-medium text-sm px-5 py-2.5 rounded-xl transition-colors shadow-2xs"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Conversar diretamente via WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
