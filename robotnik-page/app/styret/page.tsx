"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { FAQItem } from "@/components/ui/faq-item";
import { useScrollHeader } from "@/hooks/use-scroll-header";
import Image from "next/image";

// Board Member Component
interface BoardMemberProps {
  name: string;
  position: string;
  image?: string;
}

const BoardMember = ({ name, position, image }: BoardMemberProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
      <div className="w-40 h-52 mx-auto mb-4 bg-gray-200 rounded-lg overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={`${name} - ${position}`}
            width={160}
            height={208}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
            {name.split(' ').map(n => n[0]).join('')}
          </div>
        )}
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-900">{name}</h3>
      <p className="text-lg font-medium text-blue-600">{position}</p>
    </div>
  );
};

export default function StyretPage() {
  const { isLoaded, showHeader, isScrolled } = useScrollHeader();

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
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Styremedlemmer 2025/2026</h2>
              <p className="text-lg text-gray-600">Her er våre dedikerte styremedlemmer som jobber for dere hver dag</p>
            </div>
            
            {/* Top row - Leader only */}
            <div className="flex justify-center mb-8">
              <div className="max-w-sm">
                <BoardMember
                  name="Jørgen Asmundvaag"
                  position="Leder"
                  image="/jorgen.jpg"
                />
              </div>
            </div>
            
            {/* Second row - 3 members */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
              
              <BoardMember
                name="Kristiane Westersjø"
                position="Næringslivsansvarlig"
                image="/kristiane.jpg"
              />
              <BoardMember
                name="Ilwaad Hasan"
                position="Nestleder/Økonomiansvarlig"
                image="/ilwaad.jpg"
              />
              <BoardMember
                name="Sondre Einvik"
                position="Arrangementsansvarlig"
              />
            </div>
            
            {/* Third row - 3 members */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <BoardMember
                name="Håkon Bekken"
                position="Administrasjonsansvarlig"
                image="/haakon.jpg"
              />
              <BoardMember
                name="Finhas Weldu"
                position="Markedsføringsansvarlig"
                image="/finhas.jpg"
              />
              <BoardMember
                name="Mathias Gundersen"
                position="Faddersjef"
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
                question="Hva er styrets hovedoppgaver?"
                answer="Styret planlegger og gjennomfører arrangementer, forvalter økonomien, representerer studentene overfor instituttet, vedlikeholder tekniske systemer og jobber for å skape et godt studiemiljø for alle."
              />
              <FAQItem 
                question="Kan jeg påvirke styrets beslutninger?"
                answer="Absolutt! Vi ønsker tilbakemeldinger og forslag fra alle medlemmer. Du kan komme på styremøter, sende e-post, eller ta kontakt direkte med styremedlemmer. Vi tar alle innspill på alvor."
              />
              <FAQItem 
                question="Får styremedlemmer noen kompensasjon?"
                answer="Styrearbeid er frivillig og ulønnet, men vi får verdifull erfaring med ledelse, økonomi, arrangement og samarbeid, og man blir kjent med den supre gjengen på robotikk."
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
