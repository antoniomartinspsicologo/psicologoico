import React from 'react';
import { X, ShieldCheck, Lock, FileText, AlertCircle, CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO } from '../data/content';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-teal-900 to-slate-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-800/80 flex items-center justify-center border border-teal-700/60">
              <ShieldCheck className="w-5 h-5 text-teal-300" />
            </div>
            <div>
              <h3 className="font-serif-display font-bold text-xl text-white">
                Termos de Uso & Política de Privacidade
              </h3>
              <p className="text-xs text-teal-200 font-mono">
                LGPD - Lei 13.709/2018 | Resolução CFP nº 010/2005
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Fechar termos"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-700 text-sm leading-relaxed">
          
          <div className="bg-teal-50 border border-teal-200/80 p-4 rounded-2xl flex items-start gap-3">
            <Lock className="w-5 h-5 text-teal-800 shrink-0 mt-0.5" />
            <div className="text-xs text-teal-950 space-y-1">
              <p className="font-semibold text-teal-900">Privacidade & Proteção de Dados Garantidas</p>
              <p>
                Este site respeita sua privacidade e atua de forma transparente, em estrita conformidade com a LGPD e o Código de Ética do Psicólogo.
              </p>
            </div>
          </div>

          {/* Section 1 */}
          <section className="space-y-2">
            <h4 className="font-serif-display font-bold text-base text-slate-900 flex items-center gap-2">
              <FileText className="w-4 h-4 text-teal-700" />
              1. Identificação Profissional e Local de Atendimento
            </h4>
            <p>
              Este portal pertence ao psicólogo <strong>{CLINIC_INFO.professionalName}</strong>, inscrito no Conselho Regional de Psicologia do Ceará sob o registro <strong>CRP {CLINIC_INFO.crp}</strong>. Os atendimentos psicoterápicos são prestados presencialmente na <strong>{CLINIC_INFO.clinicName}</strong>, localizada na {CLINIC_INFO.address}, na cidade de {CLINIC_INFO.cityState}.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-2">
            <h4 className="font-serif-display font-bold text-base text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-teal-700" />
              2. Coleta de Dados Pessoais (LGPD)
            </h4>
            <p>
              Este website institucional possui caráter prioritariamente informativo. <strong>Não coletamos, vendemos ou armazenamos dados pessoais sensíveis de saúde mental através de formulários neste site.</strong>
            </p>
            <p>
              O agendamento de consultas é realizado diretamente através do canal oficial de comunicação no WhatsApp ({CLINIC_INFO.phoneDisplay}), onde suas mensagens são protegidas por criptografia de ponta a ponta.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-2">
            <h4 className="font-serif-display font-bold text-base text-slate-900 flex items-center gap-2">
              <Lock className="w-4 h-4 text-teal-700" />
              3. Sigilo e Ética Profissional
            </h4>
            <p>
              Toda a relação terapêutica e as informações compartilhadas durante as sessões presenciais são resguardadas pelo <strong>Sigilo Profissional</strong>, conforme estipulado pelo Código de Ética Profissional do Psicólogo (Resolução CFP nº 010/2005).
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-2">
            <h4 className="font-serif-display font-bold text-base text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-700" />
              4. Uso de Cookies no Navegador
            </h4>
            <p>
              Utilizamos apenas cookies essenciais e anônimos para garantir a boa navegabilidade do site, lembrando suas preferências de navegação (como o consentimento destes termos). Nenhum dado comportamental é utilizado para fins de anúncios invasivos ou rastreamento de terceiros.
            </p>
          </section>

          {/* Section 5 */}
          <section className="bg-amber-50 border border-amber-200 p-4 rounded-2xl space-y-2 text-amber-950">
            <h4 className="font-serif-display font-bold text-base text-amber-900 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-700" />
              5. Atendimento de Emergências e Crises Imediatas
            </h4>
            <p className="text-xs leading-relaxed">
              <strong>Atenção:</strong> Este website e os canais de agendamento não prestam atendimento psicológico de emergência em tempo real. Em casos de crise psiquiátrica aguda, surto ou ideação suicida imediata:
            </p>
            <ul className="text-xs list-disc pl-5 space-y-1">
              <li>Ligue gratuitamente para o <strong>CVV (Centro de Valorização da Vida) pelo número 188</strong> (disponível 24h).</li>
              <li>Procure a unidade do <strong>CAPS (Centro de Atenção Psicossocial)</strong> ou a Emergência Hospitalar / UPA mais próxima em Icó-CE.</li>
            </ul>
          </section>

        </div>

        {/* Footer actions */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 bg-teal-800 hover:bg-teal-700 text-white font-medium text-sm rounded-xl transition-colors shadow-xs"
          >
            Entendi e Concordo
          </button>
        </div>

      </div>

    </div>
  );
};
