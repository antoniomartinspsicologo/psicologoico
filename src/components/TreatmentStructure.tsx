import React from 'react';
import { ClipboardCheck, Target, Activity, Award, ArrowRight } from 'lucide-react';
import { CLINIC_INFO } from '../data/content';

export const TreatmentStructure: React.FC = () => {
  const stages = [
    {
      step: '01',
      title: '1. Avaliação Inicial',
      icon: <ClipboardCheck className="w-5 h-5 text-teal-800" />,
      badge: 'Escuta & Diagnóstico',
      description: 'Compreensão aprofundada da sua demanda principal, história de vida, contexto atual e mapeamento dos sintomas ou angústias que motivaram a busca por ajuda.',
    },
    {
      step: '02',
      title: '2. Planejamento & Metas',
      icon: <Target className="w-5 h-5 text-teal-800" />,
      badge: 'Acordo Colaborativo',
      description: 'Definição clara e compartilhada dos objetivos terapêuticos e escolha da abordagem científica mais indicada (TCC, DBT, IBCT, etc.) alinhada às suas necessidades.',
    },
    {
      step: '03',
      title: '3. Intervenções & Prática',
      icon: <Activity className="w-5 h-5 text-teal-800" />,
      badge: 'Aplicação Científica',
      description: 'Sessões semanais com aplicação de técnicas validadas, psicoeducação, exercícios de regulação emocional e desenvolvimento de novas estratégias de enfrentamento.',
    },
    {
      step: '04',
      title: '4. Manutenção & Alta',
      icon: <Award className="w-5 h-5 text-teal-800" />,
      badge: 'Autonomia Emocional',
      description: 'Consolidação dos aprendizados adquiridos, prevenção de recaídas e preparação para a alta terapêutica, assegurando sua independência e bem-estar contínuo.',
    },
  ];

  return (
    <section id="estrutura-tratamento" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background Subtle Pattern Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div>
            <span className="inline-block text-xs font-semibold tracking-wider text-teal-300 uppercase bg-teal-800/80 px-3.5 py-1.5 rounded-lg border border-teal-700/60 mb-3">
              Jornada Psicoterápica
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-white leading-tight">
              Estrutura do tratamento psicológico
            </h2>
          </div>
          <p className="text-slate-300 text-base leading-relaxed">
            Conheça as quatro etapas que orientam nosso trabalho clínico no consultório, garantindo um acompanhamento organizado, transparente e focado na sua evolução.
          </p>
        </div>

        {/* 4 Stages Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stages.map((stage, idx) => (
            <div
              key={idx}
              className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80 space-y-4 flex flex-col justify-between relative hover:border-teal-500/60 transition-all group"
            >
              
              <div className="space-y-4">
                {/* Header: Stage Number & Icon */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-teal-900/90 text-teal-300 border border-teal-700/60 flex items-center justify-center font-bold">
                    {stage.icon}
                  </div>
                  <span className="text-xs font-mono font-semibold text-teal-300 bg-teal-950 px-2.5 py-1 rounded-md border border-teal-800">
                    Etapa {stage.step}
                  </span>
                </div>

                {/* Title & Badge */}
                <div className="space-y-1">
                  <span className="text-[11px] font-semibold text-teal-400 uppercase tracking-wide">
                    {stage.badge}
                  </span>
                  <h3 className="font-serif-display font-bold text-lg text-white group-hover:text-teal-200 transition-colors">
                    {stage.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {stage.description}
                </p>
              </div>

              {/* Arrow Connector for Desktop except last item */}
              {idx < stages.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-teal-500/50">
                  <ArrowRight className="w-5 h-5" />
                </div>
              )}

            </div>
          ))}
        </div>

        {/* Bottom Schedule Notice */}
        <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-5 sm:p-6 text-center max-w-2xl mx-auto space-y-2">
          <p className="text-xs sm:text-sm text-teal-200 font-medium">
            <strong>Atendimento Presencial:</strong> Segundas-feiras, das 08h às 12h
          </p>
          <p className="text-xs text-slate-400">
            Consultório na {CLINIC_INFO.clinicName} • Avenida Josefa Nogueira Monteiro, 1141, Centro, Icó - CE.
          </p>
        </div>

      </div>
    </section>
  );
};
