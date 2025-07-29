"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
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

// Board Member Component
interface BoardMemberProps {
  name: string;
  position: string;
  image?: string;
  description: string;
}

const BoardMember = ({ name, position, image, description }: BoardMemberProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
      <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-full overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={`${name} - ${position}`}
            width={128}
            height={128}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
            {name.split(' ').map(n => n[0]).join('')}
          </div>
        )}
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-900">{name}</h3>
      <p className="text-lg font-medium text-blue-600 mb-4">{position}</p>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
};

export default function StyretPage() {
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
              Styret
            </h1>
            <p className={`text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-white transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Møt styret i Robotnik - de som driver linjeforeningen fremover!
            </p>
            <p className={`text-lg md:text-xl max-w-3xl mx-auto text-gray-200 transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Styret i Robotnik består av engasjerte studenter som jobber for å skape det beste studentmiljøet for alle ved Anvendt Robotikk. Her kan du bli kjent med hvem som sitter i styret og hva de jobber med.
            </p>
          </div>
        </section>

        {/* About the Board Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto mb-20 text-center">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Om styret</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Styret i Robotnik er den operative ledelsen av linjeforeningen og består av studenter som brenner for å gjøre studenttilværelsen best mulig for alle ved Anvendt Robotikk. Vi jobber med alt fra arrangementer og faglige aktiviteter til kontakt med bedrifter og instituttledelsen.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Styret velges årlig på generalforsamlingen og er ansvarlig for den daglige driften av Robotnik. Vi har åpne dører og ønsker alltid tilbakemeldinger, forslag til forbedringer eller bare en hyggelig prat!
              </p>
            </div>
          </div>
        </section>

        {/* Board Members Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Styremedlemmer 2024/2025</h2>
              <p className="text-lg text-gray-600">Her er våre dedikerte styremedlemmer som jobber for dere hver dag</p>
            </div>
            
            {/* Top row - Leader only */}
            <div className="flex justify-center mb-8">
              <div className="max-w-sm">
                <BoardMember
                  name="Jørgen Asmundvaag"
                  position="Leder"
                  description="Som leder koordinerer jeg styrets arbeid og representerer Robotnik utad. Jeg brenner for å skape et inkluderende miljø hvor alle føler seg hjemme."
                />
              </div>
            </div>
            
            {/* Second row - 3 members */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
              
              <BoardMember
                name="Kristiane Westersjø"
                position="Næringslivsansvarlig"
                description="Jeg jobber med å bygge relasjoner til næringslivet og skaffe sponsorer, slik at vi kan tilby spennende aktiviteter og arrangementer for studentene."
              />
              <BoardMember
                name="Ludvik Høibjerg-Aslaksen"
                position="Nestleder/Økonomiansvarlig"
                description="Jeg bistår lederen og holder styr på økonomien, slik at vi kan gjennomføre flest mulig arrangementer."
              />
              <BoardMember
                name="Georg Dahl-Steinsvik"
                position="Arrangementsansvarlig"
                description="Planlegger og gjennomfører sosiale arrangementer som fester, hytteturer og bedriftspresentasjoner. Målet er at alle skal ha det gøy!"
              />
            </div>
            
            {/* Third row - 3 members */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <BoardMember
                name="Vincent Gabriel Macedo Kollbotn"
                position="Administrasjonsansvarlig"
                description="Jeg vedlikeholder nettsiden, sosiale medier og teknisk utstyr. Elsker både koding og design, og sørger for at alt fungerer smidig."
              />
              <BoardMember
                name="Daniel Mortén"
                position="Markedsføringsansvarlig"
                description="Ansvarlig for kommunikasjon, sosiale medier og kontakt med andre linjeforeninger. Jeg sørger for at alle får informasjonen de trenger."
              />
              <BoardMember
                name="Mariamawit Natnael"
                position="Linjesjef"
                description="jeg er ansvarlig for gjennomføring av fadderuka og oppfølging av nye studenter."
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Ta kontakt med styret</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Har du spørsmål, forslag eller ønsker å være med på noe? Vi er alltid interessert i å høre fra dere! Du kan kontakte oss på e-post, møte oss på campus eller komme innom styremøtene våre.
                </p>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <span className="font-medium">Generell henvendelse:</span> robotnik@nmbu.no
                  </p>
                </div>
                <div className="mt-8">
                  <Link href="/kontakt">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                      Gå til kontaktside
                    </Button>
                  </Link>
                </div>
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
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Ofte stilte spørsmål om styret</h2>
              <p className="text-lg text-gray-600">Her finner du svar på vanlige spørsmål om styret og hvordan vi jobber</p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-4">
              <FAQItem 
                question="Hvordan kan jeg bli styremedlem i Robotnik?"
                answer="Styret velges på den årlige generalforsamlingen som holdes på våren. Alle medlemmer kan stille til valg, og vi oppfordrer alle interesserte til å melde sin interesse. Du kan også være med i komiteer og arbeidsgrupper underveis i året."
              />
              <FAQItem 
                question="Hvor ofte møtes styret?"
                answer="Styret har faste møter hver tirsdag kl. 16:00 i robotikklaben. Vi har også ekstraordinære møter ved behov, spesielt før store arrangementer. Møtene er åpne for alle som ønsker å komme og høre hva som skjer."
              />
              <FAQItem 
                question="Hva er styrets hovedoppgaver?"
                answer="Styret planlegger og gjennomfører arrangementer, forvalter økonomien, representerer studentene overfor instituttet, vedlikeholder tekniske systemer og jobber for å skape et godt studiemiljø for alle."
              />
              <FAQItem 
                question="Kan jeg påvirke styrets beslutninger?"
                answer="Absolutt! Vi ønsker tilbakemeldinger og forslag fra alle medlemmer. Du kan komme på styremøter, sende e-post, eller ta kontakt direkte med styremedlemmer. Vi tar alle innspill på alvor."
              />
              <FAQItem 
                question="Hvor mye tid krever det å være i styret?"
                answer="Det varierer, men regn med 5-10 timer i uken avhengig av verv og hvor mye som skjer. Lederverv krever naturligvis mer tid, mens andre verv kan tilpasses studiebelastningen bedre."
              />
              <FAQItem 
                question="Får styremedlemmer noen kompensasjon?"
                answer="Styrearbeid er frivillig og ulønnet, men vi får verdifull erfaring med ledelse, økonomi, arrangement og samarbeid. Mange tidligere styremedlemmer sier det var en av de beste opplevelsene fra studietiden."
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
