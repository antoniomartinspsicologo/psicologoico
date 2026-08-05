import { ClinicInfo, FAQItem, Specialty, StepItem, TreatmentModality } from '../types';

export const CLINIC_INFO: ClinicInfo = {
  name: 'Psicólogo Antonio Martins',
  professionalName: 'Antonio Martins Vieira e Silva Junior',
  crp: '11/12047',
  clinicName: 'Clínica Cândido Torres',
  address: 'Avenida Josefa Nogueira Monteiro, 1141, Centro',
  cityState: 'Icó - Ceará',
  fullAddress: 'Avenida Josefa Nogueira Monteiro, 1141, Centro, Icó - Ceará',
  phoneDisplay: '(88) 99915-1098',
  phoneRaw: '5588999151098',
  whatsappUrl: 'https://wa.me/5588999151098?text=Ola,%20gostaria%20de%20agendar%20uma%20consulta%20presencial%20para%20segunda-feira%20(08h%20as%2012h).',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Avenida+Josefa+Nogueira+Monteiro+1141+Centro+Ico+Ceara',
  googleMapsEmbedUrl: 'https://maps.google.com/maps?q=Avenida%20Josefa%20Nogueira%20Monteiro%201141%20Centro%20Ic%C3%B3%20Cear%C3%A1&t=&z=16&ie=UTF8&iwloc=&output=embed',
  workingHours: 'Segundas-feiras, das 08h às 12h (atendimentos exclusivamente nesse horário)',
};

export const SPECIALTIES: Specialty[] = [
  {
    id: 'borderline',
    title: 'Transtorno de Personalidade Borderline',
    subtitle: 'Regulação emocional e reestruturação de esquemas',
    approaches: ['Terapia Comportamental Dialética (DBT)', 'Terapia do Esquema'],
    description: 'Acompanhamento especializado com práticas validadas para o manejo da desregulação emocional intensa, impulsividade e instabilidade nas relações interpessoais.',
    details: [
      'Desenvolvimento de habilidades de tolerância ao mal-estar',
      'Treino de efetividade interpessoal e imposição de limites saudáveis',
      'Identificação e modificação de esquemas mentais disfuncionais da infância',
      'Construção de uma vida com significado e equilíbrio emocional'
    ],
    targetAudience: 'Indivíduos com oscilações intensas de humor, medo de abandono ou dificuldades de regulação afetiva',
    iconName: 'Brain'
  },
  {
    id: 'suicide-prevention',
    title: 'Prevenção do Suicídio e Ideação Suicida',
    subtitle: 'Intervenção focada, segura e confidencial',
    approaches: ['TCC Breve para Prevenção do Suicídio (TCCB-PS)'],
    description: 'Suporte psicológico especializado baseado em protocolos científicos específicos para acolhimento de crises, manejo de sofrimento extremo e construção de planos de segurança.',
    details: [
      'Avaliação rigorosa do risco e elaboração conjunta de plano de resposta à crise',
      'Desenvolvimento de estratégias imediatas de enfrentamento da dor psíquica',
      'Reestruturação de pensamentos automáticos de desesperança',
      'Fortalecimento de fatores protetivos e rede de apoio'
    ],
    targetAudience: 'Pessoas em momentos de intensa dor emocional, ideação suicida ou em situações de crise psíquica',
    iconName: 'ShieldAlert'
  },
  {
    id: 'depression-mood',
    title: 'Depressão e Transtornos do Humor',
    subtitle: 'Recuperação da vitalidade e ativação comportamental',
    approaches: ['Terapia Cognitivo-Comportamental (TCC)', 'Ativação Comportamental (BA)'],
    description: 'Tratamento focado na identificação de padrões de esquiva, reorganização da rotina diária e modificação de crenças centrais de desvalia ou desamparo.',
    details: [
      'Mapeamento de comportamentos e rotinas de ativação progressiva',
      'Reestruturação cognitiva de pensamentos autocríticos e ruminação',
      'Resgate do interesse por atividades significativas e relacionamentos',
      'Prevenção de recaídas através do fortalecimento da autonomia'
    ],
    targetAudience: 'Pessoas apresentando desânimo persistente, apatia, perda de interesse ou tristeza profunda',
    iconName: 'Sun'
  },
  {
    id: 'couples-therapy',
    title: 'Terapia de Casal',
    subtitle: 'Comunicação assertiva e fortalecimento de vínculos',
    approaches: ['Terapia Comportamental Integrativa de Casal (IBCT)'],
    description: 'Intervenção estruturada para casais que buscam superar conflitos recorrentes, restabelecer a intimidade emocional e desenvolver uma convivência cooperativa.',
    details: [
      'Compreensão dos ciclos repetitivos de discussão e má comunicação',
      'Desenvolvimento da aceitação empática e tolerância à diferença',
      'Treinamento em habilidades de negociação e resolução de problemas',
      'Restabelecimento da conexão afetiva e alinhamento de metas futuras'
    ],
    targetAudience: 'Casais em momentos de crise, desgaste na comunicação ou desejando fortalecer o relacionamento',
    iconName: 'HeartHandshake'
  },
  {
    id: 'male-sexual-health',
    title: 'Disfunções Sexuais Masculinas',
    subtitle: 'Acompanhamento focado, ético e estritamente confidencial',
    approaches: ['Terapia Cognitivo-Comportamental (TCC)'],
    description: 'Atendimento direcionado às demandas de saúde mental e ansiedade de desempenho que afetam a vivência sexual masculina, em espaço seguro e livre de julgamentos.',
    details: [
      'Manejamento da ansiedade de desempenho e bloqueios psicológicos',
      'Desmistificação de crenças e expectativas irrealistas sobre a sexualidade',
      'Psicoeducação sobre fatores emocionais e comportamentais envolvidos',
      'Protocolos cognitivo-comportamentais específicos para resgate da confiança'
    ],
    targetAudience: 'Homens buscando superar bloqueios emocionais, ansiedade de desempenho ou dificuldades na vida sexual',
    iconName: 'UserCheck'
  },
  {
    id: 'general-psychotherapy',
    title: 'Demandas Gerais e Saúde Mental',
    subtitle: 'Ansiedade, estresse e autoconhecimento',
    approaches: ['Terapia Cognitivo-Comportamental (TCC)'],
    description: 'Acompanhamento psicoterápico focado em estratégias práticas para o gerenciamento da ansiedade, fobia social, estresse do dia a dia e autodesenvolvimento.',
    details: [
      'Manejo de quadros ansiosos e crises de pânico',
      'Treino de assertividade e regulação do estresse ocupacional/pessoal',
      'Desenvolvimento de inteligência emocional e resolução de problemas',
      'Promoção de hábitos saudáveis e bem-estar integral'
    ],
    targetAudience: 'Adultez em busca de equilíbrio emocional, superação da ansiedade e aprimoramento pessoal',
    iconName: 'Sparkles'
  }
];

export const STEPS: StepItem[] = [
  {
    number: 1,
    title: 'Contato Inicial via WhatsApp',
    subtitle: 'Clínica Cândido Torres',
    description: 'Clique no botão de agendamento para falar com a recepção da Clínica Cândido Torres. Tire suas dúvidas iniciais de forma simples e rápida.',
    badge: 'Atendimento Rápido'
  },
  {
    number: 2,
    title: 'Horário de Atendimento',
    subtitle: 'Segunda-feira (08h às 12h)',
    description: 'Os atendimentos presenciais e os agendamentos ocorrem exclusivamente às segundas-feiras, das 08h às 12h, na Clínica Cândido Torres.',
    badge: 'Segundas das 08h às 12h'
  },
  {
    number: 3,
    title: 'Primeira Sessão e Avaliação',
    subtitle: 'Consultório Presencial',
    description: 'Realização da primeira consulta presencial para acolhimento da sua demanda, avaliação clínica cuidadosa e início do planejamento terapêutico personalizado.',
    badge: 'Acolhimento Humano'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-duration',
    category: 'Processo Terapêutico',
    question: 'Qual é a duração do tratamento psicológico?',
    answer: 'A duração da psicoterapia varia para cada pessoa. Conforme o Código de Ética Profissional do Psicólogo (regulamentado pelo Conselho Federal de Psicologia - CFP), o psicólogo não deve fazer promessas taxativas de tempo ou garantir prazos e resultados pré-determinados. O processo terapêutico respeita a singularidade, o ritmo, o histórico e as características únicas de cada paciente. A evolução é avaliada continuamente em parceria, buscando sempre a conquista da sua autonomia e da alta terapêutica.'
  },
  {
    id: 'faq-1',
    category: 'Geral',
    question: 'Como sei se a psicoterapia é para mim?',
    answer: 'A psicoterapia é indicada para qualquer pessoa que sinta necessidade de apoio para lidar com sofrimentos emocionais (como ansiedade, desânimo, crises familiares ou profissionais), traumas, episódios de mudança de vida, bem como para quem busca autoconhecimento, inteligência emocional e desenvolvimento interpessoal. Na primeira sessão, realizamos uma avaliação inicial transparente para alinhar expectativas e confirmar se o acompanhamento é ideal para o seu momento.'
  },
  {
    id: 'faq-2',
    category: 'Terapia de Casal',
    question: 'Como funcionam as sessões de terapia de casal?',
    answer: 'Na Terapia Comportamental Integrativa de Casal (IBCT), trabalhamos com ambos os parceiros para identificar os padrões repetitivos de conflito e as falhas na comunicação. O psicólogo atua de forma imparcial e acolhedora, auxiliando a promover a aceitação empática, a resolução cooperativa de problemas e o fortalecimento do compromisso afetivo.'
  },
  {
    id: 'faq-3',
    category: 'Ética e Sigilo',
    question: 'O atendimento é estritamente sigiloso?',
    answer: 'Sim. O sigilo profissional é um dever ético inegociável, regulamentado pelo Código de Ética Profissional do Psicólogo e pelo Conselho Federal de Psicologia (CFP). Todas as informações compartilhadas durante as sessões, relatórios e anotações clínicas são protegidas sob rigorosa confidencialidade.'
  },
  {
    id: 'faq-4',
    category: 'Agendamento',
    question: 'Quais os dias e horários de atendimento na Clínica Cândido Torres?',
    answer: 'Os atendimentos presenciais ocorrem exclusivamente às segundas-feiras, das 08h às 12h. O agendamento é feito de forma simples: basta clicar no botão "Agendar Consulta" em nosso site para falar com a recepção da Clínica Cândido Torres via WhatsApp (88 99915-1098) e reservar seu horário na Avenida Josefa Nogueira Monteiro, 1141, Centro, Icó - CE.'
  }
];

export const EMERGENCY_NOTICE = 'AVISO IMPORTANTE DE EMERGÊNCIA: Este site não oferece atendimento imediato para situações de crise grave ou risco de vida. Em caso de emergência emocional ou ideação suicida imediata, procure o CAPS (Centro de Atenção Psicossocial) da sua cidade, a unidade de saúde/hospital mais próximo ou ligue para o Centro de Valorização da Vida (CVV) pelo número 188 (atendimento gratuito 24 horas).';

export const TREATMENT_MODALITIES: TreatmentModality[] = [
  {
    id: 'tcc',
    name: 'TCC',
    shortName: 'TCC',
    fullName: 'Terapia Cognitivo-Comportamental',
    badge: 'Prática Científica Estruturada',
    summary: 'Abordagem prática e focada na relação entre pensamentos, emoções e atitudes, auxiliando na reestruturação de crenças e no enfrentamento de desafios atuais.',
    howItWorks: 'Na TCC, trabalhamos em parceria para compreender como seus pensamentos interpretam os fatos da vida e influenciam diretamente o seu sentir e agir. Através de técnicas acolhedoras e estruturadas, você aprende a identificar distorções cognitivas e a desenvolver novos padrões de pensamento mais saudáveis e funcionais.',
    keyBenefits: [
      'Identificação e modificação de pensamentos automáticos de angústia',
      'Desenvolvimento de estratégias práticas de enfrentamento do estresse',
      'Treino de habilidades sociais, assertividade e resolução de problemas',
      'Promoção da autonomia e autogestão emocional sustentável'
    ],
    recommendedFor: 'Ansiedade geral, estresse ocupacional, fobias, disfunções sexuais masculinas e autodesenvolvimento.'
  },
  {
    id: 'dbt',
    name: 'DBT',
    shortName: 'DBT',
    fullName: 'Terapia Comportamental Dialética',
    badge: 'Regulação Emocional Intensa',
    summary: 'Especialmente voltada para quem vivencia emoções muito intensas, impulsividade e oscilações frequentes nas relações interpessoais.',
    howItWorks: 'A DBT une o acolhimento amoroso de quem você é no presente (aceitação) com o aprendizado gradativo de novas formas de agir (mudança). Em um ambiente de total validação e livre de julgamentos, desenvolvemos quatro módulos de habilidades: Atenção Plena (Mindfulness), Regulação Emocional, Tolerância ao Mal-Estar e Efetividade Interpessoal.',
    keyBenefits: [
      'Manejamento da desregulação emocional severa e momentos de crise',
      'Aumento da capacidade de suportar a dor psíquica sem reações impulsivas',
      'Construção de relacionamentos mais estáveis, sinceros e seguros',
      'Validação profunda da sua dor em um espaço protegido e carinhoso'
    ],
    recommendedFor: 'Transtorno de Personalidade Borderline (TPB), oscilações intensas de humor, impulsividade e condutas autodestrutivas.'
  },
  {
    id: 'ibct',
    name: 'IBCT',
    shortName: 'IBCT (Casais)',
    fullName: 'Terapia Comportamental Integrativa de Casal',
    badge: 'Fortalecimento Conjugal',
    summary: 'Proporciona ao casal um ambiente seguro para superar conflitos repetitivos, desenvolver a empatia mútua e resgatar a cumplicidade.',
    howItWorks: 'A IBCT aborda os desafios do relacionamento sem buscar vilões ou culpados. Auxiliamos o casal a compreender a dinâmica oculta por trás das discussões recorrentes, estimulando a aceitação empática das diferenças e ensinando técnicas de comunicação assertiva para fortalecer a união.',
    keyBenefits: [
      'Interrupção de ciclos automáticos de acusações e ressentimentos',
      'Desenvolvimento da escuta empática e validação emocional do parceiro',
      'Treinamento de estratégias práticas para solução de problemas cotidianos',
      'Reconstrução do afeto, do diálogo respeitoso e do carinho conjugal'
    ],
    recommendedFor: 'Casais enfrentando crises de comunicação, desentendimentos frequentes, desgastes ou distanciamento afetivo.'
  },
  {
    id: 'esquema',
    name: 'Terapia do Esquema',
    shortName: 'Terapia do Esquema',
    fullName: 'Terapia do Esquema',
    badge: 'Transformação de Padrões Profundos',
    summary: 'Intervenção profunda que identifica e ressignifica crenças rígidas formadas na infância e juventude que geram sofrimento na vida adulta.',
    howItWorks: 'Muitas vezes repetições dolorosas na vida adulta nascem de necessidades emocionais que não puderam ser atendidas na infância. A Terapia do Esquema acolhe essas memórias com imensa gentileza, reestruturando "esquemas" de abandono, rejeição ou perfeccionismo para fortalecer a sua parte adulta e saudável.',
    keyBenefits: [
      'Compreensão profunda da origem de sentimentos crônicos de inadequação',
      'Cuidado humanizado e ressignificação de marcas emocionais do passado',
      'Fortalecimento da autoestima e do autocuidado compassivo',
      'Desarticulação de modos de enfrentamento disfuncionais e defensivos'
    ],
    recommendedFor: 'Padrões de relacionamento repetitivos, sentimento contínuo de vazio, baixa autoimagem e reações emocionais intensas.'
  },
  {
    id: 'tccb-ps',
    name: 'TCCB-PS',
    shortName: 'TCCB-PS (Prevenção)',
    fullName: 'Terapia Cognitivo-Comportamental Breve para Prevenção do Suicídio',
    badge: 'Acolhimento em Crise & Segurança',
    summary: 'Protocolo altamente específico e humanizado para oferecer suporte firme, confidencial e imediato em momentos de extrema dor psíquica.',
    howItWorks: 'Atuamos com extrema delicadeza e sensibilidade para acolher a dor de quem sente que não aguenta mais. Elaboramos conjuntamente um Plano de Resposta à Crise, mapeando gatilhos específicos, ativando estratégias de alívio imediato e renovando as razões individuais para continuar vivendo.',
    keyBenefits: [
      'Elaboração de um Plano de Segurança Pessoal detalhado e acessível',
      'Aprendizado de técnicas de desativação do modo de crise emocional',
      'Manejamento compassivo e sem estigma dos pensamentos de desesperança',
      'Fortalecimento contínuo da rede de apoio e da vontade de viver'
    ],
    recommendedFor: 'Pessoas enfrentando ideação suicida, desespero intenso, dor emocional profunda ou pós-crise psicológica.'
  },
  {
    id: 'ba',
    name: 'Ativação Comportamental',
    shortName: 'Ativação Comportamental (BA)',
    fullName: 'Ativação Comportamental para Depressão',
    badge: 'Resgate da Vitalidade',
    summary: 'Modalidade empática focada em romper o ciclo de desânimo, paralisia e isolamento promovido pelo estado depressivo.',
    howItWorks: 'A depressão faz com que a pessoa se afaste do mundo e das coisas de que gosta. Na Ativação Comportamental, não esperamos a energia voltar milagrosamente; caminhamos lado a lado em passos curtos e Gentis, planejando pequenas atividades que devolvem gradualmente a sensação de conquista, prazer e propósito.',
    keyBenefits: [
      'Quebra suave e gradual da espiral de isolamento e desânimo',
      'Reorganização carinhosa da rotina diária sem sobrecarregar o paciente',
      'Reconexão com momentos significativos de satisfação e bem-estar',
      'Resgate progressivo da autoconfiança, disposição e alegria'
    ],
    recommendedFor: 'Depressão, desânimo persistente, apatia, perda de motivação e rotinas paralisadas.'
  }
];

