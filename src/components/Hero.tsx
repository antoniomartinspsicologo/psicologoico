import React from 'react';
import { Calendar, MapPin, ShieldCheck, ArrowRight, Award, CheckCircle2, Sparkles, Sun, Clock, UserCheck } from 'lucide-react';
import { CLINIC_INFO } from '../data/content';
import happyPatientImg from '../assets/images/happy_patient_self_discovery_1785964872791.jpg';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-amber-50/40 via-teal-50/20 to-[#f8faf8]">
      
      {/* Soft, warm ambient light glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-tr from-amber-100/40 via-teal-100/20 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Main Copy Column (Left Side) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Location & Credentials Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 bg-white/90 backdrop-blur-sm border border-amber-900/10 px-4 py-1.5 rounded-full text-xs font-medium text-teal-950 shadow-xs">
              <span className="flex items-center gap-1.5 text-amber-700 font-semibold">
                <MapPin className="w-3.5 h-3.5" />
                Icó - Ceará
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-700 font-normal">
                Atendimento na {CLINIC_INFO.clinicName}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-bold text-slate-900 leading-[1.18] tracking-tight">
              Psicoterapia baseada em <span className="text-teal-800 font-bold italic">evidências</span> e acolhimento humano em Icó-CE
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-670 leading-relaxed font-normal max-w-2xl">
              Um espaço acolhedor e seguro para você resgatar sua leveza, autoconfiança e bem-estar emocional através de uma escuta empática e de métodos científicos validados.
            </p>

            {/* Integrated Professional & Clinic Info Card (Left Column) */}
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 sm:p-4.5 border border-amber-900/10 shadow-xs space-y-3 max-w-2xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2.5 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-teal-800 text-teal-50 flex items-center justify-center font-serif-display font-bold text-lg shrink-0 shadow-2xs">
                    AM
                  </div>
                  <div>
                    <h3 className="font-serif-display text-base font-bold text-slate-900 leading-tight">
                      {CLINIC_INFO.professionalName}
                    </h3>
                    <p className="text-xs text-teal-800 font-medium flex items-center gap-1.5 mt-0.5">
                      <span>Psicólogo Clínico</span>
                      <span className="text-slate-300">•</span>
                      <span className="font-mono text-slate-600 bg-amber-50 px-1.5 py-0.2 rounded border border-amber-200/60 text-[11px]">
                        CRP {CLINIC_INFO.crp}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-xs text-teal-900 font-semibold bg-teal-50 px-3 py-1.5 rounded-lg border border-teal-100/80 self-start sm:self-auto">
                  <UserCheck className="w-3.5 h-3.5 text-teal-700" />
                  <span>+8 Anos de Experiência</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 pt-0.5">
                <div className="flex items-center gap-2 bg-slate-50/80 px-3 py-2 rounded-xl border border-slate-200/60">
                  <MapPin className="w-4 h-4 text-teal-700 shrink-0" />
                  <div className="truncate">
                    <span className="font-medium text-slate-800 block leading-tight">{CLINIC_INFO.clinicName}</span>
                    <span className="text-[11px] text-slate-500 truncate block">Centro, Icó - CE</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-slate-50/80 px-3 py-2 rounded-xl border border-slate-200/60">
                  <Clock className="w-4 h-4 text-amber-700 shrink-0" />
                  <div>
                    <span className="font-semibold text-teal-950 block leading-tight">Segundas-feiras</span>
                    <span className="text-[11px] text-slate-500 block">Das 08h às 12h</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
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
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-amber-50/50 text-slate-700 hover:text-teal-900 font-medium text-base px-5 py-3.5 rounded-xl border border-slate-200 transition-colors shadow-xs"
              >
                <span>Conhecer Especialidades</span>
              </a>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-5 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700 bg-white/90 p-2.5 rounded-xl border border-amber-900/10 shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-teal-700 shrink-0" />
                <span>Sigilo Profissional CFP</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700 bg-white/90 p-2.5 rounded-xl border border-amber-900/10 shadow-2xs">
                <Award className="w-4 h-4 text-teal-700 shrink-0" />
                <span>Prática Científica (TCC/DBT)</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700 bg-white/90 p-2.5 rounded-xl border border-amber-900/10 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                <span>Atendimento Presencial</span>
              </div>
            </div>

          </div>

          {/* Right Column - Clean, Inspiring & Warm Portrait Image Alone */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Soft Radiant Ambient Backglow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-amber-400/25 via-teal-400/20 to-emerald-300/20 rounded-3xl blur-2xl -z-10" />

              {/* Main Warm Image Container */}
              <div className="relative rounded-3xl p-2.5 bg-white/80 backdrop-blur-md border border-amber-200/80 shadow-2xl overflow-hidden group">
                
                {/* Image Frame */}
                <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100">
                  <img
                    src={happyPatientImg}
                    alt="Pessoa radiante vivenciando momentos de leveza e autodescoberta"
                    className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Gentle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent pointer-events-none" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-teal-950 px-3.5 py-1.5 rounded-full text-xs font-medium flex items-center gap-2 shadow-md border border-white/80">
                    <Sparkles className="w-4 h-4 text-amber-500 fill-amber-500" />
                    <span>Autodescoberta & Leveza</span>
                  </div>

                  {/* Bottom Floating Glassmorphism Tag */}
                  <div className="absolute bottom-4 left-4 right-4 bg-slate-950/40 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-white space-y-1.5 shadow-lg">
                    <div className="flex items-center gap-1.5 text-amber-300 font-semibold text-[11px] uppercase tracking-wider">
                      <Sun className="w-4 h-4" />
                      <span>Sua Jornada de Saúde Mental</span>
                    </div>
                    <p className="font-serif-display italic text-base text-slate-50 leading-snug">
                      "Reencontrar a paz interior e a autoconfiança para viver com plenitude."
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

