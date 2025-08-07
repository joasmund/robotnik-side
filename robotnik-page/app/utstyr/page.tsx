"use client";

import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
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
              Robotikklaben
            </h1>
            <p className={`text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-white transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Laben &ldquo;vår&rdquo; på campus.
            </p>
            <p className={`text-lg md:text-xl max-w-3xl mx-auto text-gray-200 transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
                Robotlaben på NMBU er for både nye studenter og erfarne professorer. Her har vi fag, utstyr og ressurser tilgjengelig for alle som ønsker å lære mer om robotikk. Enten du er interessert i programmering, mekanikk eller elektronikk, vil du finne noe som passer for deg i laben.
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
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Robotlaben</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Robotikklaben er hjertet for oss som studerer anvendt robotikk. Her finner du et mangfold av roboter, avansert utstyr, 3D-printere og laserkutter – alt tilgjengelig for medlemmene våre. Laben er ikke bare et sted for undervisning, men også et sosialt samlingspunkt hvor du kan møte andre studenter, jobbe med prosjekter eller bare ta en pause. Flere av fagene våre foregår her, og det er enkelt å få kontakt med både medstudenter og professorer for å diskutere faglige spørsmål eller få hjelp. Allerede i fadderuka blir du kjent med laben gjennom faget IMRT100, som starter i august og gir deg en praktisk innføring i både utstyr og miljøet. Uansett om du vil utforske ny teknologi, samarbeide med andre eller bare slappe av, er robotikklaben et sted du kommer til å bruke mye tid – og bli godt kjent med.
                </p>
              </div>
            </div>

            {/* Second section: Fadderuka */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Finn fram</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Robotlaben er lokalisert i hjertet av campus øst, bak TF-bygget. Se kartet for mer informasjon.
                </p>
              </div>
                <div className="flex flex-col items-center">
                  <div className="rounded-lg overflow-hidden shadow-lg w-full max-w-[600px]">
                    <iframe
                      width="600"
                      height="420"
                      src="https://use.mazemap.com/embed.html#v=1&amp;campusid=241&amp;zlevel=1&amp;center=10.777668,59.665991&amp;zoom=19.9&amp;sharepoitype=poi&amp;sharepoi=699162&amp;utm_medium=iframe"
                      style={{ borderRadius: "0.5rem" }}
                      allow="geolocation"
                      title="Map by MazeMap"
                    ></iframe>
                  </div>
                  <small>
                    <a href="https://www.mazemap.com/" target="_blank" rel="noopener noreferrer">
                      Map by MazeMap
                    </a>
                  </small>
                </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        {/* <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Ofte stilte spørsmål om robotikklaben</h2>
              <p className="text-lg text-gray-600">Her finner du svar på de vanligste spørsmålene om utstyr og fasiliteter i laben</p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-4">
              <FAQItem 
                question="Hvilket utstyr har vi tilgjengelig i robotikklaben?"
                answer="Laben har et bredt spekter av utstyr inkludert 3D-printere, laserkuttere, loddestasjoner, oscilloskoper, multimetre og et stort utvalg av roboter fra enkle Arduino-baserte systemer til avanserte industriroboter. Vi har også komponenter som sensorer, motorer, mikrokontrollere og verktøy for elektronikkarbeid."
              />
              <FAQItem 
                question="Kan jeg bruke 3D-printerne og laserkutteren når som helst?"
                answer="Utstyret er tilgjengelig for studenter, men du må gjennomføre sikkerhetskurs først. Det er åpningstider for laben, og noe utstyr krever booking på forhånd. Kontakt laboratorieansvarlig for å få tilgang og opplæring."
              />
              <FAQItem 
                question="Hvilke roboter kan vi jobbe med i laben?"
                answer="Vi har flere typer roboter: TurtleBots for navigasjon og SLAM, industriroboter som ABB og Universal Robots, flere versjoner av Thorvald, samt mindre roboter som Raspberry Pi og Arduino-baserte systemer. Mange av disse brukes i undervisningen og er tilgjengelige for masteroppgaver."
              />
              <FAQItem 
                question="Kan jeg låne komponenter til hjemmeprosjekter?"
                answer="Ja, Robotnik har et utlånssystem for grunnleggende komponenter som Arduino, sensorer og mindre elektronikkdeler. Du må være medlem og registrere det du låner. Større utstyr må brukes i laben av sikkerhetshensyn."
              />
              <FAQItem 
                question="Hvordan får jeg tilgang til laben utenfor undervisningstid?"
                answer="Studenter kan få tilgangskortet sitt programmert for laben etter å ha fullført sikkerhetskurs og fått godkjenning fra laboratorieansvarlig. Dette gir deg tilgang på dagtid og tidlige kvelder, men ikke på natten av sikkerhetshensyn."
              />
              <FAQItem 
                question="Koster det noe å bruke utstyret i laben?"
                answer="Grunnleggende bruk av laben er gratis for studenter. Du betaler kun for forbruksmateriell som 3D-printer filament, laserkutter materiale og elektronikkkomponenter du bruker til egne prosjekter. Prisene er subsidierte og svært rimelige."
              />
            </div>
          </div>
        </section> */}
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}