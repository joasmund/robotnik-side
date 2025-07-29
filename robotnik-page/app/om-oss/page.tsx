"use client";

import { Award, Book, Users, ChevronDown } from "lucide-react";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import Image from "next/image";
import { useEffect, useState } from "react";
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

export default function AboutPage() {
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
              Om Robotnik
            </h1>
            <p className={`text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-white transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Linjeforeningen for studenter ved Anvendt Robotikk ved NMBU
            </p>
            <p className={`text-lg md:text-xl max-w-3xl mx-auto text-gray-200 transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Vi er en gruppe engasjerte studenter som brenner for robotikk og teknologi. Robotnik jobber for å skape et inkluderende og inspirerende miljø hvor alle kan utforske sin lidenskap for robotikk.
            </p>
          </div>
        </section>

        {/* Main Content Sections */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            {/* Vision Section */}
            <div className="max-w-4xl mx-auto mb-20 text-center">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Vår visjon</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Robotnik skal være en inkluderende og inspirerende linjeforening som gir studentene muligheten til å utforske og utvikle sin lidenskap for robotikk og teknologi.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Vi jobber for å fremme innovasjon og samarbeid, og for å skape et sterke faglige og sosiale fellesskap som vil følge deg gjennom hele studietiden og videre i karrieren.
              </p>
            </div>

            {/* What We Do Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Hva vi gjør</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Robotnik arrangerer workshops, foredrag og hackathons for å gi studentene muligheten til å lære mer om robotikk og teknologi. Vi jobber tett med våre partnere i næringslivet for å gi studentene tilgang til spennende prosjekter og karrieremuligheter.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Fra sosiale arrangementer og hytteturer til bedriftspresentasjoner og tekniske workshops - vi sørger for at studietiden blir både lærerik og morsom.
                </p>
              </div>
              <div>
                <Image
                  src="/Robotnikwide.png"
                  alt="Robotnik logo"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Study Program Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <Image
                  src="/formler.jpg"
                  alt="Studenter med tavle. Foto: Tommy Normann-NMBU"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Våre studenter</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Studentene ved Anvendt Robotikk velger spesialiseringsretning på 3. året, med fokus på enten <strong>robotdesign</strong> eller <strong>robotprogrammering og maskinlæring</strong>. Dette gir oss en bred faglig kompetanse innen robotikk og teknologi.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Våre ferdigutdannede studenter har gått videre til spennende karrierer innen robotikk, AI, automatisering og teknologi - både i Norge og internasjonalt.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Våre verdier</h2>
              <p className="text-lg text-gray-600">Dette er det vi står for som linjeforening</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white rounded-lg p-8 text-center shadow-lg">
                <Users className="w-16 h-16 mx-auto mb-6 text-blue-600" />
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Inkludering</h3>
                <p className="text-gray-700 leading-relaxed">
                  Vi ønsker at alle skal føle seg velkommen uansett bakgrunn, erfaring eller interesser. Mangfold gjør oss sterkere.
                </p>
              </div>
              <div className="bg-white rounded-lg p-8 text-center shadow-lg">
                <Book className="w-16 h-16 mx-auto mb-6 text-blue-600" />
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Læring</h3>
                <p className="text-gray-700 leading-relaxed">
                  Vi brenner for kunnskap og deling av erfaringer. Sammen lærer vi mer enn hver for oss.
                </p>
              </div>
              <div className="bg-white rounded-lg p-8 text-center shadow-lg">
                <Award className="w-16 h-16 mx-auto mb-6 text-blue-600" />
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Innovasjon</h3>
                <p className="text-gray-700 leading-relaxed">
                  Vi utfordrer grenser og utforsker nye muligheter innen robotikk og teknologi.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
       {/*  <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Bli med i Robotnik-familien!</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-700">
              Er du klar for å bli en del av et engasjert fellesskap av robotikk-entusiaster?
            </p>
            <Link href="/kontaktside">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                Bli med da vel!
              </Button>
            </Link>
          </div>
        </section> */}

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Ofte stilte spørsmål</h2>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-4">
              <FAQItem 
                question="Hvem kan bli medlem i Robotnik?"
                answer="Alle studenter ved Anvendt Robotikk er automatisk medlemmer av Robotnik. Har du gjennomført internt bytte til robotikk, eller søkt deg inn på høyere årstrinn? Ta kontakt så hjelper vi deg."
              />
              <FAQItem 
                question="Hvor ofte arrangerer dere aktiviteter?"
                answer="Vi har noe på gang gjennom hele semesteret! Alt fra lavterskel-kvelder og sosiale sammenkomster til større arrangementer som hytteturer og bedriftspresentasjoner. Den årlige quicupen er også et høydepunkt!"
              />
              <FAQItem 
                question="Kan jeg bidra til Robotnik uten å være i styret?"
                answer="Absolutt! Har du en idé til et arrangement eller vil du holde en workshop? Ta kontakt med oss, så finner vi ut av det sammen."
              />
              <FAQItem 
                question="Hva slags arrangementer arrangerer dere?"
                answer="Vi arrangerer alt fra bedriftsbesøk og bedriftspresentasjoner til sosiale arrangementer som julebord, vors, spillkvelder og hytteturer. Vi har også arrangementer med andre linjeforeninger."
              />
              <FAQItem 
                question="Hvordan holder jeg meg oppdatert på aktiviteter?"
                answer="Følg oss på sosiale medier og sjekk nettsiden vår regelmessig. Vi sender også ut nyhetsbrev til alle medlemmer med informasjon om kommende arrangementer."
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