import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TherapyBenefits } from './components/TherapyBenefits';
import { Specialties } from './components/Specialties';
import { TreatmentModalities } from './components/TreatmentModalities';
import { TreatmentStructure } from './components/TreatmentStructure';
import { HowItWorks } from './components/HowItWorks';
import { LocationContact } from './components/LocationContact';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CookieBanner } from './components/CookieBanner';
import { TermsModal } from './components/TermsModal';

export default function App() {
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8faf8] text-slate-800 flex flex-col font-sans selection:bg-teal-100 selection:text-teal-900 pb-16 sm:pb-0">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <TherapyBenefits />
        <Specialties />
        <TreatmentModalities />
        <TreatmentStructure />
        <HowItWorks />
        <LocationContact />
        <FAQ />
      </main>

      {/* Footer and Emergency Disclaimer */}
      <Footer onOpenTerms={() => setIsTermsOpen(true)} />

      {/* Floating Call to Action */}
      <FloatingWhatsApp />

      {/* LGPD Cookie Consent Banner */}
      <CookieBanner onOpenTerms={() => setIsTermsOpen(true)} />

      {/* Terms of Use & Privacy Policy Modal */}
      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
    </div>
  );
}
