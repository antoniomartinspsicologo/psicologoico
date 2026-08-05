import React, { useState } from 'react';
import { 
  Brain, 
  ShieldAlert, 
  Sun, 
  HeartHandshake, 
  UserCheck, 
  Sparkles, 
  ChevronRight, 
  CheckCircle,
  Calendar,
  Search,
  X
} from 'lucide-react';
import { SPECIALTIES, CLINIC_INFO } from '../data/content';
import { Specialty } from '../types';

export const Specialties: React.FC = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState<Specialty | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain': return <Brain className="w-6 h-6 text-teal-800" />;
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6 text-rose-700" />;
      case 'Sun': return <Sun className="w-6 h-6 text-amber-700" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6 text-teal-800" />;
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-emerald-800" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-teal-800" />;
      default: return <Brain className="w-6 h-6 text-teal-800" />;
    }
  };

  const filteredSpecialties = SPECIALTIES.filter((s) => {
    const term = searchTerm.toLowerCase();
    return (
      s.title.toLowerCase().includes(term) ||
      s.description.toLowerCase().includes(term) ||
      s.approaches.some(a => a.toLowerCase().includes(term))
    );
  });

  return (
    <section id="especialidades" className="py-20 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div>
            <span className="inline-block text-xs font-semibold tracking-wider text-teal-800 uppercase bg-teal-100/70 px-3.5 py-1.5 rounded-lg border border-teal-200 mb-3">
              Áreas de Atuação e Especialidades
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-slate-900 leading-tight">
              Acompanhamento especializado e humanizado
            </h2>
          </div>
          <p className="text-slate-600 text-base leading-relaxed">
            Atendimento presencial focado nas suas necessidades individuais e conjugais, aplicando métodos validados cientificamente para promover alívio e qualidade de vida.
          </p>
        </div>

        {/* Search Bar for Quick Navigation */}
        <div className="mt-8 max-w-md mx-auto">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar por especialidade ou abordagem (ex: DBT, TCC, Casal)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-teal-700/30 focus:border-teal-700 transition-all shadow-2xs"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSpecialties.map((specialty) => (
            <div
              key={specialty.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                {/* Header Icon */}
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center group-hover:bg-teal-100/80 transition-colors">
                    {getIcon(specialty.iconName)}
                  </div>
                </div>

                {/* Title */}
                <div className="space-y-1">
                  <h3 className="font-serif-display text-xl font-bold text-slate-900 leading-snug group-hover:text-teal-900 transition-colors">
                    {specialty.title}
                  </h3>
                </div>

                {/* Approaches Badges (Placed BELOW the Disorder Title) */}
                <div className="flex flex-wrap gap-1.5 pt-0.5">
                  {specialty.approaches.map((app, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-semibold text-teal-900 bg-teal-50 px-2.5 py-0.5 rounded-md border border-teal-200/80"
                    >
                      {app}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                  {specialty.description}
                </p>

                {/* Bullet Points Preview */}
                <ul className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-700">
                  {specialty.details.slice(0, 2).map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-teal-700 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedSpecialty(specialty)}
                  className="text-xs font-semibold text-teal-800 hover:text-teal-950 inline-flex items-center gap-1 transition-colors"
                >
                  <span>Ver Detalhes</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={`https://wa.me/${CLINIC_INFO.phoneRaw}?text=Ola,%20gostaria%20de%20agendar%20uma%20consulta%20focada%20em%20${encodeURIComponent(specialty.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-teal-800 hover:bg-teal-900 text-white text-xs font-medium px-3 py-2 rounded-lg transition-colors shadow-2xs"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Agendar</span>
                </a>
              </div>

            </div>
          ))}
        </div>

        {filteredSpecialties.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 mt-6">
            <p className="text-slate-600 text-sm">Nenhuma especialidade encontrada para a sua busca.</p>
            <button
              onClick={() => setSearchTerm('')}
              className="mt-3 text-xs font-semibold text-teal-800 hover:underline"
            >
              Limpar busca
            </button>
          </div>
        )}

        {/* Modal for Detailed Specialty View */}
        {selectedSpecialty && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
            <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-xl border border-slate-200 max-h-[90vh] overflow-y-auto">
              
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0">
                    {getIcon(selectedSpecialty.iconName)}
                  </div>
                  <div>
                    <h3 className="font-serif-display text-2xl font-semibold text-slate-900">
                      {selectedSpecialty.title}
                    </h3>
                    <p className="text-xs font-medium text-teal-800">
                      {selectedSpecialty.subtitle}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedSpecialty(null)}
                  className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                {selectedSpecialty.approaches.map((app, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold text-teal-900 bg-teal-50 px-3 py-1 rounded-md border border-teal-200"
                  >
                    Abordagem: {app}
                  </span>
                ))}
              </div>

              <div className="space-y-3 text-sm text-slate-700">
                <h4 className="font-semibold text-slate-900 text-base">Sobre esta modalidade:</h4>
                <p className="leading-relaxed">{selectedSpecialty.description}</p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-slate-900 text-sm">Principais Objetivos e Intervenções:</h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {selectedSpecialty.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs text-slate-600">
                <strong className="text-slate-800 block mb-1">Público Alvo:</strong>
                {selectedSpecialty.targetAudience}
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/${CLINIC_INFO.phoneRaw}?text=Ola,%20gostaria%20de%20agendar%20uma%20consulta%20focada%20em%20${encodeURIComponent(selectedSpecialty.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-teal-800 hover:bg-teal-900 text-white font-medium py-3 px-4 rounded-xl transition-colors text-sm shadow-xs"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Agendar Consulta para esta Especialidade</span>
                </a>
                <button
                  onClick={() => setSelectedSpecialty(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-3 px-4 rounded-xl transition-colors text-sm"
                >
                  Fechar
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
