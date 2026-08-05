import React from 'react';
import { MessageSquare, Calendar, UserCheck, ArrowRight, ShieldCheck } from 'lucide-react';
import { STEPS, CLINIC_INFO } from '../data/content';

export const HowItWorks: React.FC = () => {
  const getStepIcon = (num: number) => {
    switch (num) {
      case 1: return <MessageSquare className="w-6 h-6 text-teal-800" />;
      case 2: return <Calendar className="w-6 h-6 text-teal-800" />;
      case 3: return <UserCheck className="w-6 h-6 text-teal-800" />;
      default: return <Calendar className="w-6 h-6 text-teal-800" />;
    }
  };

  return (
    <section id="como-funciona" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div>
            <span className="inline-block text-xs font-semibold tracking-wider text-teal-800 uppercase bg-teal-50 px-3.5 py-1.5 rounded-lg border border-teal-200 mb-3">
              Jornada do Atendimento
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-slate-900 leading-tight">
              Como funciona o agendamento e o primeiro atendimento
            </h2>
          </div>
          <p className="text-slate-600 text-base leading-relaxed">
            Um processo transparente, prático e confidencial para que você inicie seu acompanhamento psicológico com serenidade na Clínica Cândido Torres em Icó.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {STEPS.map((step, idx) => (
            <div
              key={step.number}
              className="relative bg-slate-50/80 rounded-2xl p-6 sm:p-8 border border-slate-200/80 space-y-4 hover:bg-white hover:shadow-sm transition-all flex flex-col justify-between"
            >
              
              {/* Step Number & Badge */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-teal-100/80 border border-teal-200 flex items-center justify-center font-bold text-teal-900 text-lg">
                    {getStepIcon(step.number)}
                  </div>
                  <span className="text-[11px] font-mono font-medium text-teal-900 bg-white px-2.5 py-1 rounded-md border border-slate-200">
                    Etapa 0{step.number}
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-semibold text-teal-800 uppercase tracking-wide">
                    {step.badge}
                  </span>
                  <h3 className="font-serif-display text-xl font-semibold text-slate-900 leading-snug">
                    {step.title}
                  </h3>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Decorative connector for desktop */}
              {idx < STEPS.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-slate-300">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}

            </div>
          ))}

        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-12 bg-teal-900 text-teal-50 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-2 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-teal-300 bg-teal-800/80 px-2.5 py-1 rounded-md">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Ambiente Estritamente Sigiloso</span>
            </div>
            <h3 className="font-serif-display text-xl font-semibold text-white">
              Pronto para marcar sua primeira consulta presenciais em Icó?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
              Entre em contato com a Clínica Cândido Torres pelo WhatsApp ({CLINIC_INFO.phoneDisplay}) e verifique a disponibilidade de horários.
            </p>
          </div>

          <a
            href={CLINIC_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-white hover:bg-teal-50 text-teal-950 font-semibold px-6 py-3.5 rounded-xl transition-all shadow-xs text-sm"
          >
            <Calendar className="w-4 h-4 text-teal-800" />
            <span>Falar com a Recepção</span>
          </a>
        </div>

      </div>
    </section>
  );
};
