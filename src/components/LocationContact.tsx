import React from 'react';
import { MapPin, Phone, ExternalLink, Building2, Clock, Calendar, CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO } from '../data/content';

export const LocationContact: React.FC = () => {
  return (
    <section id="localizacao" className="py-20 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div>
            <span className="inline-block text-xs font-semibold tracking-wider text-teal-800 uppercase bg-teal-100/70 px-3.5 py-1.5 rounded-lg border border-teal-200 mb-3">
              Localização e Contato
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-slate-900 leading-tight">
              Atendimento presencial no Centro de Icó, Ceará
            </h2>
          </div>
          <p className="text-slate-600 text-base leading-relaxed">
            Consultório estruturado na Clínica Cândido Torres, proporcionando privacidade, conforto e acessibilidade no coração da cidade.
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Address Card */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              
              {/* Header */}
              <div className="flex items-start gap-4 pb-4 border-b border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-teal-800 text-white flex items-center justify-center shrink-0 shadow-2xs">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif-display text-xl font-semibold text-slate-900">
                    {CLINIC_INFO.clinicName}
                  </h3>
                  <p className="text-xs font-medium text-teal-800 mt-0.5">
                    Consultório de Psicoterapia Clínica
                  </p>
                </div>
              </div>

              {/* Address details list */}
              <div className="space-y-4 text-sm text-slate-700">
                
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-medium">Endereço Completo:</strong>
                    <span>{CLINIC_INFO.address}</span>
                    <p className="text-slate-500 text-xs mt-0.5 font-medium">{CLINIC_INFO.cityState}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-medium">Telefone / WhatsApp:</strong>
                    <span className="font-mono font-semibold text-teal-900">{CLINIC_INFO.phoneDisplay}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-medium">Horário de Atendimento:</strong>
                    <span className="text-slate-600 text-xs block">{CLINIC_INFO.workingHours}</span>
                  </div>
                </div>

              </div>

              {/* Highlights */}
              <div className="bg-teal-50/80 p-4 rounded-xl border border-teal-100 text-xs space-y-2 text-teal-900">
                <div className="flex items-center gap-2 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                  <span>Estrutura Moderna & Acessível</span>
                </div>
                <p className="text-slate-600 leading-normal">
                  Ambiente climatizado, discreto e preparado para garantir total conforto antes e durante a consulta.
                </p>
              </div>

            </div>

            {/* CTA Buttons */}
            <div className="pt-4 border-t border-slate-100 space-y-3">
              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 px-4 rounded-xl transition-colors text-sm shadow-2xs"
              >
                <ExternalLink className="w-4 h-4 text-slate-300" />
                <span>Abrir no Google Maps</span>
              </a>

              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-teal-800 hover:bg-teal-900 text-white font-medium py-3 px-4 rounded-xl transition-colors text-sm shadow-2xs"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar Consulta Presencial</span>
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Iframe */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/80 p-2 shadow-xs overflow-hidden flex flex-col">
            <div className="relative w-full h-full min-h-[380px] rounded-xl overflow-hidden bg-slate-100">
              <iframe
                title="Mapa de Localização - Clínica Cândido Torres Icó Ceará"
                src={CLINIC_INFO.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full rounded-xl"
              />
            </div>
            <div className="p-3 text-center text-xs text-slate-500 bg-slate-50 border-t border-slate-100 rounded-b-xl flex items-center justify-between">
              <span>Clínica Cândido Torres • Icó - CE</span>
              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-800 hover:underline font-medium inline-flex items-center gap-1"
              >
                <span>Ver rota</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
