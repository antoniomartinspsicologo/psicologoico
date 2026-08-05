import React from 'react';
import { BookOpen, Heart, Shield, CheckCircle, Camera, Award, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../data/content';
import profilePhoto from '../assets/images/dr_antonio_martins_1785941537703.jpg';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* TOP SUB-SECTION: 2 COLUMNS (PHOTO + PRESENTATION) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Column 1: Professional Photo Reserved Space */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md">
              
              {/* Decorative background glow frame */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-teal-800/20 via-emerald-600/10 to-teal-500/20 rounded-3xl blur-xl -z-10" />

              <div className="bg-white p-3 rounded-3xl border border-slate-200/90 shadow-lg space-y-4">
                
                {/* Image Frame with Fallback */}
                <div className="relative aspect-3/4 rounded-2xl overflow-hidden bg-slate-100 group border border-slate-200">
                  <img
                    src={profilePhoto}
                    alt="Psicólogo Antonio Martins Vieira e Silva Junior"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.classList.add('flex', 'flex-col', 'items-center', 'justify-center', 'p-6', 'text-center', 'bg-teal-900', 'text-white');
                        parent.innerHTML = `
                          <div className="w-20 h-20 rounded-full bg-teal-800 flex items-center justify-center font-serif-display text-3xl font-bold text-teal-100 mb-4 shadow-sm">AM</div>
                          <h4 className="font-serif-display font-bold text-lg">${CLINIC_INFO.professionalName}</h4>
                          <p className="text-xs text-teal-200 mt-1 font-mono">CRP ${CLINIC_INFO.crp}</p>
                          <p className="text-xs text-slate-300 mt-3">Psicólogo Clínico - Icó/CE</p>
                        `;
                      }
                    }}
                  />
                  
                  {/* Floating Identity Tag */}
                  <div className="absolute bottom-3 left-3 right-3 bg-slate-900/85 backdrop-blur-md text-white p-3 rounded-xl border border-white/10 flex items-center justify-between text-xs">
                    <div>
                      <p className="font-serif-display font-bold text-white text-sm">
                        {CLINIC_INFO.professionalName}
                      </p>
                      <p className="text-teal-300 font-mono text-[11px]">
                        CRP {CLINIC_INFO.crp}
                      </p>
                    </div>
                    <span className="bg-teal-800/80 text-teal-100 px-2 py-1 rounded text-[10px] font-semibold border border-teal-700/60">
                      Icó - CE
                    </span>
                  </div>
                </div>

                {/* Sub-caption details under photo */}
                <div className="p-2 space-y-2 text-xs text-slate-600">
                  <div className="flex items-center justify-between bg-teal-50/80 p-2.5 rounded-xl border border-teal-100/80">
                    <span className="font-semibold text-teal-950 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-teal-700" />
                      Atendimento Presencial
                    </span>
                    <span className="text-slate-600 font-medium">{CLINIC_INFO.clinicName}</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Column 2: Detailed Professional Narrative */}
          <div className="lg:col-span-7 space-y-6">
            
            <div>
              <span className="inline-block text-xs font-semibold tracking-wider text-teal-800 uppercase bg-teal-50 px-3.5 py-1.5 rounded-lg border border-teal-200 mb-3">
                Cuidado Humano & Prática Clínica
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-slate-900 leading-snug">
                Um espaço seguro de acolhimento, carinho e respeito à sua história
              </h2>
            </div>

            <div className="prose prose-slate text-slate-700 leading-relaxed text-base space-y-4">
              <p>
                Seja muito bem-vindo, meu nome é <strong className="text-slate-900 font-semibold">Antonio Martins</strong>, sou psicólogo e ao longo de <strong>mais de 8 anos de experiência prática na clínica psicológica</strong>, aprendi que por trás de cada queixa ou diagnóstico existe um ser humano buscando compreensão, alívio e um porto seguro para suas dores.
              </p>
              <p>
                Minha atuação é pautada pelo acolhimento afetuoso, pela escuta atenta e livre de qualquer julgamento moral, pois acredito verdadeiramente que a psicoterapia é um trabalho construído a quatro mãos, onde a delicadeza e o carinho se somam às <strong className="text-teal-900 font-semibold">intervenções de maior respaldo científico</strong> para devolver a leveza e o sentido à sua vida.
              </p>
              <p>
                Com o compromisso de manter a excelência técnica sempre aliada à sensibilidade humana, atuo também desde 2019 como <strong>professor universitário e supervisor clínico na graduação em Psicologia</strong>, auxiliando no ensino e na orientação de futuros psicólogos.
              </p>
              <p>
                Atendo de forma presencial na <strong className="text-slate-900 font-semibold">{CLINIC_INFO.clinicName}</strong>, em Icó-CE, e estou pronto para caminhar ao seu lado no enfrentamento da ansiedade, depressão, momentos de crise, desregulação emocional e conflitos nos relacionamentos.
              </p>
            </div>

          </div>

        </div>

        {/* BOTTOM SUB-SECTION: CORE CLINICAL PRINCIPLES */}
        <div className="pt-8 border-t border-slate-200/80 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="font-serif-display font-bold text-2xl text-slate-900">
              Princípios da Nossa Prática Terapêutica
            </h3>
            <p className="text-slate-600 text-sm">
              Valores que guiam cada consulta no consultório presencial na Clínica Cândido Torres.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-3 hover:bg-white hover:shadow-xs transition-all">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center">
                <Heart className="w-5 h-5 text-teal-800" />
              </div>
              <h4 className="font-serif-display font-bold text-slate-900 text-base">Escuta Empática</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Acolhimento humanizado e totalmente livre de julgamentos morais, permitindo que você expresse seus sentimentos em total segurança.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-3 hover:bg-white hover:shadow-xs transition-all">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-teal-800" />
              </div>
              <h4 className="font-serif-display font-bold text-slate-900 text-base">Base Científica</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Protocolos estruturados como TCC, DBT e Terapia do Esquema, com eficácia comprovada para alívio do sofrimento psíquico.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-3 hover:bg-white hover:shadow-xs transition-all">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center">
                <Shield className="w-5 h-5 text-teal-800" />
              </div>
              <h4 className="font-serif-display font-bold text-slate-900 text-base">Sigilo Rigoroso</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Privacidade total pautada pelo Código de Ética Profissional do Psicólogo e pelas diretrizes do Conselho Federal de Psicologia.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

