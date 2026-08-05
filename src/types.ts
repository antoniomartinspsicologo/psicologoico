export interface Specialty {
  id: string;
  title: string;
  subtitle: string;
  approaches: string[];
  description: string;
  details: string[];
  targetAudience: string;
  iconName: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface StepItem {
  number: number;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
}

export interface ClinicInfo {
  name: string;
  professionalName: string;
  crp: string;
  clinicName: string;
  address: string;
  cityState: string;
  fullAddress: string;
  phoneDisplay: string;
  phoneRaw: string;
  whatsappUrl: string;
  googleMapsUrl: string;
  googleMapsEmbedUrl: string;
  workingHours: string;
}

export interface TreatmentModality {
  id: string;
  name: string;
  shortName: string;
  fullName: string;
  summary: string;
  howItWorks: string;
  keyBenefits: string[];
  recommendedFor: string;
  badge: string;
}
