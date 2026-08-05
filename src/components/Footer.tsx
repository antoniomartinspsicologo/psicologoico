import React from 'react';
import { MapPin, Phone, ShieldAlert, Heart, Calendar } from 'lucide-react';
import { CLINIC_INFO, EMERGENCY_NOTICE } from '../data/content';

interface FooterProps {
  onOpenTerms?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerms }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          
          {/* Professional Details */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-700 text-white flex items-center justify-center font-serif-display font-semibold text-lg">
                AM
              </div>
              <div>
                <h3 className="font-serif-display text-lg font-semibold text-white">
                  {CLINIC_INFO.professionalName}
                </h3>
                <p className="text-xs text-teal-300 font-mono">
                  Psicólogo Clínico • CRP {CLINIC_INFO.crp}
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed">
              Atendimento psicoterápico presencial baseado em evidências (TCC, DBT, IBCT) focado em regulação emocional, ansiedade, depressão e fortalecimento de vínculos na cidade de Icó, Ceará.
            </p>

            <div className="pt-2">
              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-600 text-white text-xs font-medium px-4 py-2.5 rounded-xl transition-colors shadow-2xs"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar Consulta na Clínica Cândido Torres</span>
              </a>
            </div>
          </div>

          {/* Location & Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider font-mono">
              Localização e Contato
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">{CLINIC_INFO.clinicName}</strong>
                  <span>{CLINIC_INFO.fullAddress}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <span>WhatsApp: <strong className="text-white font-mono">{CLINIC_INFO.phoneDisplay}</strong></span>
              </div>

              <div className="flex items-start gap-2 pt-1 border-t border-slate-800">
                <Calendar className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">Atendimento Presencial:</strong>
                  <span className="text-teal-300 font-semibold block">Segundas-feiras, das 08h às 12h</span>
                  <span className="text-[11px] text-slate-400">Agendamentos exclusivamente nesse horário</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider font-mono">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#sobre" className="hover:text-teal-300 transition-colors">Sobre o Profissional</a></li>
              <li><a href="#especialidades" className="hover:text-teal-300 transition-colors">Áreas de Atuação</a></li>
              <li><a href="#como-funciona" className="hover:text-teal-300 transition-colors">Como Funciona</a></li>
              <li><a href="#localizacao" className="hover:text-teal-300 transition-colors">Localização em Icó</a></li>
              <li><a href="#faq" className="hover:text-teal-300 transition-colors">Perguntas Frequentes</a></li>
            </ul>
          </div>

        </div>

        {/* MANDATORY EMERGENCY NOTICE BOX */}
        <div className="bg-rose-950/40 border border-rose-800/40 p-5 rounded-2xl text-xs text-rose-200/90 leading-relaxed space-y-2">
          <div className="flex items-center gap-2 font-semibold text-rose-300 text-sm">
            <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
            <span>AVISO IMPORTANTE DE EMERGÊNCIA</span>
          </div>
          <p>
            {EMERGENCY_NOTICE}
          </p>
        </div>

        {/* Copyright & Technical Info */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4 pt-4 border-t border-slate-800/60">
          <p>
            © {new Date().getFullYear()} {CLINIC_INFO.professionalName} (CRP {CLINIC_INFO.crp}). Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            {onOpenTerms && (
              <button
                onClick={onOpenTerms}
                className="hover:text-teal-300 underline transition-colors"
              >
                Termos de Uso & LGPD
              </button>
            )}
            <span>Atendimento presencial na {CLINIC_INFO.clinicName} • Icó - CE</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
