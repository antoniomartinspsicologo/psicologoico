import React, { useState } from 'react';
import { Heart, Sparkles, Brain, ShieldCheck, Smile, Compass, CheckCircle2, ArrowRight, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../data/content';

interface BenefitItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  shortDesc: string;
  subtitle: string;
  description: string;
  highlights: string[];
}

export const TherapyBenefits: React.FC = () => {
  const benefits: BenefitItem[] = [
    {
      id: 'autoconhecimento',
      icon: <Brain className="w-5 h-5" />,
      title: 'Autoconhecimento & Clareza',
      shortDesc: 'Compreensão de gatilhos, crenças e padrões',
      subtitle: 'Compreenda a raiz dos seus pensamentos, escolhas e emoções',
      description: 'A psicoterapia oferece um espaço analítico e seguro para você compreender por que reage de determinadas formas diante dos desafios da vida. Ao identificar crenças centrais e gatilhos emocionais, você ganha a autonomia necessária para fazer escolhas conscientes e alinhadas aos seus valores.',
      highlights: [
        'Identificação de crenças disfuncionais e gatilhos recorrentes',
        'Clareza para tomadas de decisão pessoais e profissionais',
        'Rompimento de ciclos e comportamentos repetitivos nocivos',
      ],
    },
    {
      id: 'regulacao-emocional',
      icon: <Heart className="w-5 h-5" />,
      title: 'Regulação Emocional',
      shortDesc: 'Manejo de ansiedade, angústia e estresse',
      subtitle: 'Aprenda a acolher e gerenciar suas emoções com equilíbrio',
      description: 'Sentir ansiedade, raiva ou angústia é humano, mas ser dominado por essas emoções traz intenso sofrimento. Através de ferramentas embasadas na ciência psicológica, você desenvolve habilidades práticas para desacelerar a mente, manejar crises e encontrar estabilidade emocional.',
      highlights: [
        'Técnicas cognitivas e comportamentais para controle da ansiedade',
        'Desenvolvimento de tolerância ao mal-estar e momentos de pressão',
        'Redução de reações impulsivas e explosões emocionais',
      ],
    },
    {
      id: 'relacoes-saudaveis',
      icon: <Compass className="w-5 h-5" />,
      title: 'Relações Mais Saudáveis',
      shortDesc: 'Comunicação assertiva e limites respeitosos',
      subtitle: 'Fortaleça vínculos interpessoais com respeito e maturidade',
      description: 'Muitos conflitos surgem de ruídos na comunicação, dificuldades em dizer "não" ou dependência emocional. No espaço terapêutico, trabalhamos a assertividade, a escuta empática e a construção de limites saudáveis no casamento, na família e no trabalho.',
      highlights: [
        'Comunicação clara e não violenta sem sentimento de culpa',
        'Estabelecimento de limites interpessoais protegendo sua saúde mental',
        'Resolução construtiva de conflitos afetivos e familiares',
      ],
    },
    {
      id: 'alivio-sofrimento',
      icon: <Smile className="w-5 h-5" />,
      title: 'Alívio do Sofrimento & Leveza',
      shortDesc: 'Resgate do bem-estar e redução da sobrecarga',
      subtitle: 'Recupere o prazer cotidiano e a qualidade de vida',
      description: 'O esgotamento mental e a sensação de carregar um peso constante afetam a saúde física e a rotina. A terapia proporciona o esvaziamento das cargas acumuladas, ajudando a restaurar o equilíbrio do sono, o foco diário e a satisfação pessoal.',
      highlights: [
        'Desaceleração da sobrecarga e do estresse acumulado',
        'Resgate da motivação e vitalidade nas atividades rotineiras',
        'Prevenção e cuidado contínuo contra o esgotamento (Burnout)',
      ],
    },
    {
      id: 'enfrentamento-crises',
      icon: <Sparkles className="w-5 h-5" />,
      title: 'Estratégias de Enfrentamento',
      shortDesc: 'Métodos científicos para momentos de transição',
      subtitle: 'Ferramentas práticas fundamentadas na ciência psicológica',
      description: 'Diante de lutos, separações, mudanças de carreira ou fases de incerteza, a terapia instrumentaliza você com estratégias comprovadas. Em vez de conselhos genéricos, construímos um plano prático adaptado à sua realidade.',
      highlights: [
        'Desenvolvimento de resiliência psicológica diante de perdas',
        'Planos de ação estruturados para momentos de transição',
        'Estratégias comportamentais validadas (TCC e DBT)',
      ],
    },
    {
      id: 'espaco-seguro',
      icon: <ShieldCheck className="w-5 h-5" />,
      title: 'Espaço Seguro & Sigiloso',
      shortDesc: 'Escuta empática e livre de julgamentos',
      subtitle: 'Um porto seguro protegido pelo sigilo profissional',
      description: 'No consultório do Psicólogo Antonio Martins, você encontra uma escuta humana, acolhedora e estritamente ética. Um lugar onde você pode expressar suas vulnerabilidades com a garantia do sigilo regulamentado pelo Conselho Federal de Psicologia.',
      highlights: [
        'Garantia total de sigilo profissional (CRP 11/12047)',
        'Ambiente neutro, acolhedor e livre de julgamentos morais',
        'Atendimento presencial personalizado na Clínica Cândido Torres',
      ],
    },
  ];

  const [activeTabId, setActiveTabId] = useState<string>(benefits[0].id);

  const activeBenefit = benefits.find((b) => b.id === activeTabId) || benefits[0];

  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-block text-xs font-semibold tracking-wider text-teal-800 uppercase bg-teal-50 px-3.5 py-1 rounded-full border border-teal-200/80">
            Por Que Fazer Terapia?
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif-display font-bold text-slate-900 leading-tight">
            Benefícios do acompanhamento psicológico
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Navegue pelos principais pilares do desenvolvimento emocional e descubra como a psicoterapia transforma sua qualidade de vida.
          </p>
        </div>

        {/* 2-Column Tabs Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Vertical Tabs List */}
          <div className="lg:col-span-5 flex flex-col gap-2.5">
            {benefits.map((b) => {
              const isActive = b.id === activeTabId;
              return (
                <button
                  key={b.id}
                  onClick={() => setActiveTabId(b.id)}
                  className={`w-full text-left p-4 rounded-2xl transition-all border flex items-center justify-between gap-3 group ${
                    isActive
                      ? 'bg-teal-900 text-white border-teal-900 shadow-md translate-x-1'
                      : 'bg-slate-50 hover:bg-slate-100/80 text-slate-700 border-slate-200/70 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? 'bg-teal-800 text-amber-300'
                          : 'bg-teal-50 text-teal-800 group-hover:bg-teal-100/80'
                      }`}
                    >
                      {b.icon}
                    </div>
                    <div className="min-w-0">
                      <h3
                        className={`font-serif-display font-bold text-sm sm:text-base leading-snug truncate ${
                          isActive ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        {b.title}
                      </h3>
                      <p
                        className={`text-xs truncate mt-0.5 ${
                          isActive ? 'text-teal-100' : 'text-slate-500'
                        }`}
                      >
                        {b.shortDesc}
                      </p>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isActive
                        ? 'text-amber-300 translate-x-1'
                        : 'text-slate-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Benefit Detail View */}
          <div className="lg:col-span-7 bg-slate-50/90 rounded-3xl p-6 sm:p-8 border border-slate-200/80 flex flex-col justify-between space-y-6 shadow-xs">
            
            <div className="space-y-6">
              
              {/* Header inside detail card */}
              <div className="flex items-start gap-4 pb-5 border-b border-slate-200/80">
                <div className="w-12 h-12 rounded-2xl bg-teal-800 text-amber-300 flex items-center justify-center shrink-0 shadow-xs">
                  {activeBenefit.icon}
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif-display font-bold text-slate-900 leading-snug">
                    {activeBenefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-teal-800 font-medium mt-1">
                    {activeBenefit.subtitle}
                  </p>
                </div>
              </div>

              {/* Main Detailed Description */}
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {activeBenefit.description}
              </p>

              {/* Highlights List */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                  O que você desenvolve na prática:
                </h4>
                <ul className="space-y-2.5">
                  {activeBenefit.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Bottom CTA Box inside Detail View */}
            <div className="pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-white/70 p-4 sm:p-5 rounded-2xl border border-slate-200/60">
              <div>
                <span className="text-xs font-semibold text-slate-900 block">Deseja vivenciar essa transformação?</span>
                <span className="text-xs text-slate-500 block">Atendimento presencial em Icó-CE no turno da manhã.</span>
              </div>
              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-teal-800 hover:bg-teal-900 text-white text-xs sm:text-sm font-medium px-4 py-2.5 rounded-xl transition-all shadow-xs shrink-0"
              >
                <Calendar className="w-4 h-4 text-teal-200" />
                <span>Agendar Consulta</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

