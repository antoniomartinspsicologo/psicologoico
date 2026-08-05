import React, { useState } from 'react';
import { TREATMENT_MODALITIES, CLINIC_INFO } from '../data/content';
import { TreatmentModality } from '../types';
import { CheckCircle2, HeartHandshake, HelpCircle, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export const TreatmentModalities: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>(TREATMENT_MODALITIES[0].id);

  const activeModality: TreatmentModality =
    TREATMENT_MODALITIES.find((m) => m.id === activeTabId) || TREATMENT_MODALITIES[0];

  return (
    <section id="modalidades" className="py-20 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header with Generous Spacing between Subtitle and Main Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div>
            <span className="inline-block text-xs font-semibold tracking-wider text-teal-800 uppercase bg-teal-100/70 px-3.5 py-1.5 rounded-lg border border-teal-200 mb-3">
              Abordagens Científicas & Acolhedoras
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-slate-900 leading-tight">
              Como funciona cada modalidade de tratamento
            </h2>
          </div>
          <p className="text-slate-600 text-base leading-relaxed">
            Conheça de forma simples e transparente as principais abordagens psicoterápicas utilizadas nas nossas consultas para cuidar do seu bem-estar com carinho e eficácia.
          </p>
        </div>

        {/* Tab Buttons Navigation */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none px-2">
          {TREATMENT_MODALITIES.map((modality) => {
            const isActive = modality.id === activeTabId;
            return (
              <button
                key={modality.id}
                onClick={() => setActiveTabId(modality.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 flex items-center gap-2 border ${
                  isActive
                    ? 'bg-teal-900 text-white border-teal-800 shadow-md scale-102'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                }`}
              >
                <span>{modality.shortName}</span>
                {isActive && <Sparkles className="w-3.5 h-3.5 text-teal-300 animate-pulse" />}
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-lg space-y-8 relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Top Header of Active Modality */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div className="space-y-1.5">
              <span className="inline-block text-xs font-semibold text-teal-900 bg-teal-50 px-3 py-1 rounded-md border border-teal-200/80">
                {activeModality.badge}
              </span>
              <h3 className="font-serif-display font-bold text-2xl sm:text-3xl text-slate-900">
                {activeModality.fullName} ({activeModality.shortName})
              </h3>
            </div>

            <a
              href={`https://wa.me/${CLINIC_INFO.phoneRaw}?text=Ola,%20gostaria%20de%20saber%20mais%20sobre%20o%20atendimento%20em%20${encodeURIComponent(activeModality.fullName)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-teal-800 hover:bg-teal-700 text-white font-medium px-4 py-2.5 rounded-xl transition-colors text-xs sm:text-sm shadow-xs shrink-0"
            >
              <span>Agendar Consulta com esta Abordagem</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Core Content Grid: 2 Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: How it Works Narrative */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-3">
                <h4 className="font-serif-display font-bold text-lg text-slate-900 flex items-center gap-2">
                  <HeartHandshake className="w-5 h-5 text-teal-700" />
                  Como Funciona na Prática?
                </h4>
                <p className="text-slate-700 text-base leading-relaxed bg-slate-50/80 p-5 rounded-2xl border border-slate-200/60">
                  {activeModality.howItWorks}
                </p>
              </div>

              <div className="bg-teal-50/70 p-4 rounded-2xl border border-teal-100 space-y-1.5 text-xs text-teal-950">
                <div className="font-semibold text-teal-900 flex items-center gap-1.5">
                  <HelpCircle className="w-4 h-4 text-teal-700" />
                  Para quem esta modalidade é especialmente indicada?
                </div>
                <p className="text-slate-700 leading-relaxed font-medium">
                  {activeModality.recommendedFor}
                </p>
              </div>

            </div>

            {/* Right Column: Key Benefits Bullet List */}
            <div className="lg:col-span-5 bg-slate-900 text-white p-6 sm:p-7 rounded-2xl space-y-5 border border-slate-800 shadow-md">
              <div className="space-y-1">
                <h4 className="font-serif-display font-bold text-lg text-white flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-teal-400" />
                  Principais Benefícios & Resultados
                </h4>
                <p className="text-xs text-slate-300">
                  O que construímos juntos durante as sessões presenciais:
                </p>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-200">
                {activeModality.keyBenefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span className="leading-snug">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
