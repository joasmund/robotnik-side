"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getUpcomingEvents } from "@/utils/eventUtils";
import { ChevronRight, ChevronDown } from "lucide-react";
import { EventCard } from "@/components/ui/EventCard";  
import { Analytics } from "@vercel/analytics/next";
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/testcard"
import { Spotlight } from "@/components/ui/spotlight"

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



export default function RobotnikLandingPage() {
  const upcomingEvents = getUpcomingEvents(3);
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
    <div className="min-h-screen bg-white text-gray-900">
      <header className={`fixed w-full z-50 transition-transform duration-300 ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <Header isScrolled={isScrolled} />
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/campus.jpg"
              alt="Campus background"
              fill
              className="object-cover"
              priority
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 py-32 text-center">
            <h1 className={`text-5xl md:text-7xl font-bold mb-6 text-white transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Ny student?
            </h1>
            <p className={`text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-white transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Velkommen til Robotnik, Linjeforeningen for Anvendt Robotikk ved NMBU!
            </p>
            <p className={`text-lg md:text-xl max-w-3xl mx-auto text-gray-200 transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Er du ny student ved Anvendt Robotikk på NMBU? Gratulerer med studieplassen! Vi i Robotnik ønsker deg hjertelig velkommen til et spennende og lærerikt studieløp. På denne siden finner du nyttig informasjon om både fadderuka, linjeforeningen vår og litt om livet på NMBU.
            </p>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            {/* First section: Welcome */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-2 lg:order-1">
                <Image
                  src="/Robotniklogo.png"
                  alt="Robotnik logo"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Hva er Robotnik?</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Robotnik er linjeforeningen for alle studenter ved Anvendt Robotikk. Vi jobber for å skape et inkluderende og sosialt miljø, og arrangerer faglige og sosiale aktiviteter gjennom hele året. Som medlem får du muligheten til å bli kjent med medstudenter på tvers av kull, delta på bedriftspresentasjoner, workshops, spillkvelder og mye mer. I tillegg er vi et bindeledd mellom studentene og fagmiljøet, og kan hjelpe deg med det meste – enten det gjelder studier, trivsel eller praktiske spørsmål.

                </p>
              </div>
            </div>

            {/* Second section: Fadderuka */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Fadderuka - Din start på studietiden</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Fadderuka er 17 dager fylt med morsomme aktiviteter, sosiale sammenkomster og muligheten til å bli kjent med både medstudenter og campus. Våre engasjerte faddere står klare til å ta deg imot og sørge for at du får den best mulige starten på studietiden. Gjennom fadderuka får du innsikt i studentlivet på NMBU, informasjon om studiet og ikke minst mange nye venner.                </p>
              </div>
              <div>
                <Image
                  src="/images/robot-student-2.png"
                  alt="Robot resources illustration"
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
              <p className="text-lg text-gray-600">Her finner du svar på de vanligste spørsmålene fra nye studenter</p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-4">
              <FAQItem 
                question="Når starter fadderuka og hvor lenge varer den?"
                answer="Fadderuka starter vanligvis 2-3 uker før semesterstart og varer i 17 dager. Du vil få detaljert informasjon om datoer og program nærmere oppstart."
              />
              <FAQItem 
                question="Hvor mye koster det å delta i fadderuka?"
                answer="Prisen for fadderuka varierer fra år til år, men ligger vanligvis rundt 1000-1500 kr. Dette dekker de fleste aktiviteter, mat og goder du får i løpet av de 17 dagene."
              />
              <FAQItem 
                question="Må jeg være medlem i Robotnik for å delta i aktiviteter?"
                answer="Nei, du trenger ikke være medlem for å delta i fadderuka eller de fleste arrangementer. Medlemskap gir deg likevel rabatter på arrangementer og tilgang til eksklusive aktiviteter."
              />
              <FAQItem 
                question="Hvor finner jeg bøker og utstyr til studiet?"
                answer="Du kan kjøpe bøker på NMBU sin bokhandel eller brukt gjennom Facebook-grupper. Spesialutstyr til robotikk vil bli presentert på studiestarten. Robotnik har også et utlånssystem for noe utstyr."
              />
              <FAQItem 
                question="Hvordan kommer jeg i kontakt med andre studenter?"
                answer="Gjennom fadderuka vil du bli med i en faddergruppe og få kontakt med både faddere og medstudenter. Vi har også Facebook-grupper og Discord-server hvor du kan chatte med andre studenter."
              />
              <FAQItem 
                question="Hvor kan jeg bo som student på NMBU?"
                answer="NMBU tilbyr studentboliger gjennom SiT (Studentsamskipnaden). Du kan søke om plass på studentsamskipnaden.no. Det finnes også private utleiealternativer i Ås-området."
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