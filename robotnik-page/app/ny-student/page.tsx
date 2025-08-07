"use client";

import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Analytics } from "@vercel/analytics/next";
import { ReactNode } from "react";

interface FAQItemProps {
  question: string;
  answer: ReactNode;
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
            <div className="absolute inset-0 bg-black/60"></div>
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
              Gratulerer med studieplassen! Vi i Robotnik ønsker deg hjertelig velkommen til et spennende og lærerikt studieløp. På denne siden finner du nyttig informasjon om både fadderuka, linjeforeningen vår og litt om livet på NMBU.
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
                  Robotnik er linjeforeningen for alle studenter ved Anvendt Robotikk. Vi jobber for å skape et inkluderende og sosialt miljø, og arrangerer faglige og sosiale aktiviteter gjennom hele året. Som medlem får du muligheten til å bli kjent med medstudenter på tvers av kull, delta på bedriftspresentasjoner, workshops, hytteturer og mye mer. I tillegg er vi et bindeledd mellom studentene og fagmiljøet, og kan hjelpe deg med det meste - enten det gjelder studier, trivsel eller praktiske spørsmål.

                </p>
              </div>
            </div>

            {/* Third section: About the Program */}
            <div className="max-w-4xl mx-auto mb-20 text-center">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Hva er Anvendt Robotikk?</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Anvendt Robotikk er et tverrfaglig studieprogram som kombinerer teknologi, innovasjon og praktisk anvendelse. Som student lærer du å designe, bygge og programmere roboter for å løse virkelige utfordringer innen landbruk, industri, helse og miljø.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Studiet dekker alt fra maskinlæring og kunstig intelligens til mekanikk og elektronikk. Du får erfaring med industriroboter, autonome kjøretøy, droner og spesialiserte roboter som Thorvald - NMBUs egne landbruksrobot. Gjennom praktiske prosjekter og samarbeid med næringslivet forbereder vi deg på en karriere i robotikkens fremtid.
              </p>
            </div>

            {/* Fourth section: Fadderuka */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Fadderuka - Din start på studietiden</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Fadderuka er 17 dager fylt med morsomme aktiviteter, sosiale sammenkomster og muligheten til å bli kjent med både medstudenter og campus. Våre engasjerte faddere står klare til å ta deg imot og sørge for at du får den best mulige starten på studietiden. Gjennom fadderuka får du innsikt i studentlivet på NMBU, informasjon om studiet og ikke minst mange nye venner.                </p>
              </div>
              <div>
                <Image
                  src="/tourdekringla.jpg"
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
              answer="I år varer fadderuka fra 8 - 24 august. Du vil få detaljert informasjon om datoer og program nærmere oppstart fra fadderen din."
              />
              <FAQItem 
              question="Har jeg skole i fadderuka?"
              answer={
                <>
                Ja, fadderuka er lagt opp slik at du får en myk start på studiene. I august har du faget{" "}
                <Link href="https://www.nmbu.no/emne/imrt100" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                  IMRT100
                </Link>
                , hvor dere i grupper skal utvikle en selvkjørende robot. Finnes det en bedre måte å starte studiene på?
                </>
              }
              />
              <FAQItem 
              question="Hvor mye koster det å delta i fadderuka?"
              answer="Det er gratis å delta i fadderuka, og de aller fleste arrangementer er gratis for alle studenter. Noen spesielle arrangementer, som konserter på Samfunnet, kan koste penger."
              />
              <FAQItem 
              question="Hvordan blir jeg medlem i Robotnik?"
              answer="Alle studenter på Anvendt Robotikk er automatisk medlemmer av Robotnik. Medlemskap gir deg tilgang til eksklusive aktiviteter resten av studietiden, samt stemmerett på årsmøter."
              />
              <FAQItem 
              question="Hvor finner jeg bøker og utstyr til studiet?"
              answer="Du kan kjøpe bøker på NMBU sin bokhandel eller brukt gjennom Facebook-grupper. Hør med faddere eller eldre studenter for tips, kanskje har de boka du trenger."
              />
              <FAQItem 
              question="Hvordan kommer jeg i kontakt med andre studenter?"
              answer="Gjennom fadderuka vil du bli med i en faddergruppe og få kontakt med både faddere og medstudenter. Vi har også en Facebook-gruppe for alle Robotnik-medlemmer."
              />
              <FAQItem 
              question="Hvor kan jeg bo som student på NMBU?"
              answer={
                <>
                NMBU tilbyr studentboliger gjennom SiÅs (Studentsamskipnaden). Du kan søke om plass på{" "}
                <Link href="https://sias.no" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                  sias.no
                </Link>
                . Det finnes også private utleiealternativer i Ås-området.
                </>
              }
              />
              <FAQItem 
              question="Hvor finner jeg robotlaben?"
              answer={
                <>
                Robotlaben finnes i Kajaveien 4. Se{" "}
                <Link href="https://link.mazemap.com/MwCcCnU7" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                  MazeMap
                </Link>
                {" "}for veibeskrivelse.
                </>
              }
              />
              <FAQItem 
              question="Må jeg kjøpe ny pc før jeg begynner på studiene?"
              answer="Det er ikke nødvendig å kjøpe ny pc før studiestart."
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