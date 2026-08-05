import React from 'react';
import { Heart, Sparkles, Brain, ShieldCheck, Smile, Compass } from 'lucide-react';

export const TherapyBenefits: React.FC = () => {
  const benefits = [
    {
      icon: <Brain className="w-5 h-5 text-teal-800" />,
      title: 'Autoconhecimento & Clareza',
      description: 'Compreenda a origem de seus sentimentos, padrões de pensamento e comportamentos repetitivos com profundidade.',
    },
    {
      icon: <Heart className="w-5 h-5 text-teal-800" />,
      title: 'Regulação Emocional',
      description: 'Aprenda técnicas práticas para manejar ansiedade, angústia, raiva e oscilações de humor com serenidade.',
    },
    {
      icon: <Compass className="w-5 h-5 text-teal-800" />,
      title: 'Relações Mais Saudáveis',
      description: 'Desenvolva comunicação assertiva, escuta empática e capacidade de estabelecer limites respeitosos.',
    },
    {
      icon: <Smile className="w-5 h-5 text-teal-800" />,
      title: 'Alívio do Sofrimento',
      description: 'Reduza o estresse do dia a dia e resgate a leveza, a disposição e o prazer nas suas rotinas individuais.',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-teal-800" />,
      title: 'Ferramentas de Enfrentamento',
      description: 'Adquira estratégias com eficácia comprovada pela ciência para lidar com momentos de crise e transição.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-teal-800" />,
      title: 'Espaço Seguro & Sem Julgamentos',
      description: 'Conte com um ambiente protegido pelo sigilo profissional, focado no seu bem-estar e no seu acolhimento.',
    },
  ];

  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div>
            <span className="inline-block text-xs font-semibold tracking-wider text-teal-800 uppercase bg-teal-50 px-3.5 py-1.5 rounded-lg border border-teal-200 mb-2">
              Por Que Fazer Terapia?
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif-display font-bold text-slate-900 leading-tight">
              Benefícios do acompanhamento psicológico
            </h2>
          </div>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Investir em psicoterapia é dar um passo em direção ao cuidado com a sua saúde mental, proporcionando transformação e qualidade de vida.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-slate-50/90 p-5 sm:p-6 rounded-2xl border border-slate-200/80 space-y-3 hover:bg-white hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-teal-100/80 border border-teal-200 flex items-center justify-center shrink-0">
                  {benefit.icon}
                </div>
                <h3 className="font-serif-display font-bold text-slate-900 text-base">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
