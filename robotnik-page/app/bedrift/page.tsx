"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronDown, Users, Presentation, Handshake, Mail } from "lucide-react";
import { Analytics } from "@vercel/analytics/next";

// FAQ Item Component
interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 focus:outline-none focus:bg-gray-50 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-gray-900">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-700 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default function BedriftPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className="min-h-screen bg-white text-gray-200">
      <header className={`fixed w-full z-50 transition-transform duration-300 ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <Header isScrolled={isScrolled} />
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/campus.jpg"
              alt="Campus background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 py-32 text-center">
            <h1 className={`text-5xl md:text-7xl font-bold mb-6 text-white transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              For bedrifter
            </h1>
            <p className={`text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-white transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Bli kjent med fremtidens robotikk-ingeniører gjennom et bedriftsbesøk hos Robotnik
            </p>
            <p className={`text-lg md:text-xl max-w-3xl mx-auto text-gray-200 transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Vi tilbyr bedrifter muligheten til å presentere seg for studentene ved Anvendt Robotikk på NMBU. Et bedriftsbesøk er en unik sjanse til å møte engasjerte og dyktige studenter som snart er klare for arbeidslivet.
            </p>
          </div>
        </section>

        {/* Why visit Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Hvorfor besøke oss?</h2>
              <p className="text-lg text-gray-600">Et bedriftsbesøk gir dere direkte tilgang til motiverte robotikk-studenter</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Møt studentene</h3>
                <p className="text-gray-700 leading-relaxed">
                  Få direkte kontakt med studenter som studerer anvendt robotikk, automatisering og relaterte fagfelt.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <Presentation className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Presenter bedriften</h3>
                <p className="text-gray-700 leading-relaxed">
                  Fortell om spennende prosjekter, teknologier og karrieremuligheter hos dere. Vis studentene hva dere jobber med.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <Handshake className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Rekruttering</h3>
                <p className="text-gray-700 leading-relaxed">
                  Bygg relasjoner tidlig og finn kandidater til sommerjobber, deltidsstillinger og faste stillinger.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What we offer Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-6 text-gray-900 text-center">Hva vi tilbyr</h2>
              <p className="text-lg text-gray-600 text-center mb-12">Vi tilpasser besøket etter deres ønsker og behov</p>

              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Bedriftspresentasjon</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Hold en presentasjon for studentene om bedriften, prosjekter og karrieremuligheter. Vi stiller med lokale, projektor og sørger for at studentene møter opp.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Workshop</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Arranger en praktisk workshop hvor studentene får jobbe med reelle problemstillinger fra bedriften. En flott måte å vise hva dere driver med og se studentene i aksjon.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Sosialt arrangement</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Kombiner presentasjonen med et sosialt arrangement som pizza, quiz eller mingling. En uformell setting gir bedre relasjonsbygging.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Samarbeid på masteroppgaver</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Vi tilbyr bedrifter muligheten til å samarbeide med studenter på masteroppgaver. Dere kan foreslå problemstillinger fra deres virksomhet, og studentene løser dem som del av sin mastergrad. En vinn-vinn som gir dere konkrete resultater og studentene verdifull erfaring.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Ta kontakt</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Interessert i å besøke oss? Ta kontakt med vår næringslivsansvarlige for å avtale et besøk. Vi er fleksible og tilpasser oss gjerne deres ønsker.
                </p>
                <div className="space-y-3 mb-8">
                  <p className="text-gray-700">
                    <span className="font-medium">Næringslivsansvarlig:</span> Kristiane Westersjø
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">E-post:</span> robotnik@nmbu.no
                  </p>
                </div>
                <Link href="/kontakt">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Mail className="w-5 h-5 mr-2" />
                    Kontakt oss
                  </Button>
                </Link>
              </div>
              <div>
                <Image
                  src="/Robotniklogo.png"
                  alt="Robotnik logo"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Ofte stilte spørsmål</h2>
              <p className="text-lg text-gray-600">Svar på vanlige spørsmål om bedriftsbesøk</p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              <FAQItem
                question="Hva koster et bedriftsbesøk?"
                answer="Ta kontakt med vår næringslivsansvarlige for informasjon om priser og pakker. Vi tilbyr ulike alternativer tilpasset bedriftens budsjett og ønsker."
              />
              <FAQItem
                question="Hvor mange studenter kan vi forvente?"
                answer="Avhengig av type arrangement kan vi forvente mellom 20 og 60 studenter. Vi promoterer arrangementet aktivt gjennom våre kanaler for å sikre godt oppmøte."
              />
              <FAQItem
                question="Hvor holder dere til?"
                answer="Vi holder til på NMBU (Norges miljø- og biovitenskapelige universitet) på Ås, omtrent 30 minutter sør for Oslo. Vi har tilgang til foredragssaler, grupperom og sosiale lokaler."
              />
              <FAQItem
                question="Kan vi kombinere flere aktiviteter?"
                answer="Absolutt! Mange bedrifter kombinerer for eksempel en presentasjon med en workshop eller et sosialt arrangement. Vi hjelper dere gjerne med å sette sammen et program som passer."
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}
