import React from 'react';
import { Calendar, MapPin, ShieldCheck, ArrowRight, Award, CheckCircle2, PhoneCall } from 'lucide-react';
import { CLINIC_INFO } from '../data/content';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-teal-50/60 via-[#f8faf8] to-[#f8faf8]">
      
      {/* Subtle background graphic circles */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-teal-100/40 via-emerald-100/20 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Copy Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Location & Credentials Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 bg-white border border-teal-950/10 px-3.5 py-1.5 rounded-full text-xs font-medium text-teal-900 shadow-xs mb-2">
              <span className="flex items-center gap-1.5 text-teal-700 font-semibold">
                <MapPin className="w-3.5 h-3.5" />
                Icó - Ceará
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-600 font-normal">
                Atendimento na {CLINIC_INFO.clinicName}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-bold text-slate-900 leading-[1.18] tracking-tight">
              Psicoterapia baseada em <span className="text-teal-800 font-bold italic">evidências</span> e acolhimento humano em Icó-CE
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-670 leading-relaxed font-normal max-w-2xl">
              Apoio psicológico especializado, ético e seguro para transformar seu bem-estar emocional através de intervenções científicas validadas e escuta empática.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-teal-800 hover:bg-teal-900 text-white font-medium text-base px-6 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-95 group"
              >
                <Calendar className="w-5 h-5 text-teal-200" />
                <span>Agendar Consulta no WhatsApp</span>
                <ArrowRight className="w-4 h-4 text-teal-200 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#especialidades"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-medium text-base px-5 py-3.5 rounded-xl border border-slate-200 transition-colors shadow-xs"
              >
                <span>Conhecer Especialidades</span>
              </a>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700 bg-white/80 p-2.5 rounded-lg border border-slate-200/60 shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-teal-700 shrink-0" />
                <span>Sigilo Profissional CFP</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700 bg-white/80 p-2.5 rounded-lg border border-slate-200/60 shadow-2xs">
                <Award className="w-4 h-4 text-teal-700 shrink-0" />
                <span>Prática Científica (TCC/DBT)</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700 bg-white/80 p-2.5 rounded-lg border border-slate-200/60 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                <span>Atendimento Presencial</span>
              </div>
            </div>

          </div>

          {/* Right Card Column - Professional Identity Highlight */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame */}
              <div className="absolute -inset-2 bg-gradient-to-r from-teal-800/10 to-emerald-700/10 rounded-3xl blur-xl -z-10" />

              <div className="bg-white rounded-2xl border border-teal-900/10 p-6 sm:p-8 shadow-sm space-y-6">
                
                {/* Header Profile Info */}
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-teal-800 text-teal-50 flex items-center justify-center font-serif-display font-semibold text-2xl shrink-0 shadow-xs">
                    AM
                  </div>
                  <div>
                    <h3 className="font-serif-display text-xl font-semibold text-slate-900 leading-snug">
                      {CLINIC_INFO.professionalName}
                    </h3>
                    <p className="text-sm font-medium text-teal-800 mt-0.5">
                      Psicólogo Clínico
                    </p>
                    <span className="inline-block mt-1 text-xs font-mono bg-teal-50 text-teal-900 px-2 py-0.5 rounded border border-teal-200">
                      CRP {CLINIC_INFO.crp}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 pt-2 text-sm text-slate-600 border-t border-slate-100">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800 font-medium block">Local de Atendimento:</strong>
                      <span>{CLINIC_INFO.clinicName}</span>
                      <p className="text-xs text-slate-500">{CLINIC_INFO.address}, Icó-CE</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <PhoneCall className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800 font-medium block">Telefone para Agendamento:</strong>
                      <span className="font-mono text-slate-700">{CLINIC_INFO.phoneDisplay}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Calendar className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800 font-medium block">Horário de Atendimento:</strong>
                      <span className="text-teal-900 font-semibold text-xs block">Segundas-feiras, das 08h às 12h</span>
                      <p className="text-[11px] text-slate-500">Agendamentos exclusivamente nesse dia e horário</p>
                    </div>
                  </div>
                </div>

                {/* Direct Action Box */}
                <div className="bg-teal-50/70 p-4 rounded-xl border border-teal-100 text-xs space-y-2">
                  <p className="text-teal-900 font-medium">
                    Pronto para dar o primeiro passo na sua jornada de saúde mental?
                  </p>
                  <a
                    href={CLINIC_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-teal-800 hover:bg-teal-900 text-white font-medium py-2.5 px-4 rounded-lg transition-colors text-xs shadow-2xs"
                  >
                    <span>Falar no WhatsApp da Clínica</span>
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
