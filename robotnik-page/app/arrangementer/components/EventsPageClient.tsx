"use client";

import { Button } from "@/components/ui/button";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Calendar, MapPin, Users, ChevronDown } from "lucide-react"
import { Analytics } from "@vercel/analytics/next";
import { Event } from "@/utils/markdownEvents";

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

interface EventsPageClientProps {
  events: Event[];
}

export function EventsPageClient({ events }: EventsPageClientProps) {
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
              alt="Events background"
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
              Arrangementer
            </h1>
            <p className={`text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-white transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Opplev det beste av studentlivet med våre arrangementer
            </p>
            <p className={`text-lg md:text-xl max-w-3xl mx-auto text-gray-200 transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Fra faglige workshops og bedriftspresentasjoner til sosiale sammenkomster og hytteturer - her finner du alle våre kommende arrangementer. Bli med på fellesskapet!
            </p>
          </div>
        </section>

        {/* Events Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Kommende arrangementer</h2>
              <p className="text-lg text-gray-600">Se hva som skjer framover og meld deg på!</p>
            </div>

            {/* Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
              {events.length > 0 ? (
                events.map((event) => (
                  <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
                    <div className="relative h-48">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {event.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{event.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-gray-700">
                          <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                          <span className="text-sm">{new Date(event.date).toLocaleDateString('no-NO')} kl. {event.time}</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                          <span className="text-sm">{event.location}</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <Users className="w-4 h-4 mr-2 text-blue-600" />
                          <span className="text-sm">{event.attendees}/{event.maxAttendees} påmeldte</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-gray-900">
                          {event.price === 0 ? 'Gratis' : `${event.price} kr`}
                        </span>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                          Meld deg på
                        </Button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-500 text-lg">Ingen kommende arrangementer for øyeblikket.</p>
                  <p className="text-gray-400 mt-2">Sjekk tilbake senere for nye arrangementer!</p>
                </div>
              )}
            </div>

            {/* Load More Button - only show if there are events */}
            {events.length > 0 && (
              <div className="text-center">
                <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                  Last inn flere arrangementer
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Har du en idé?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-700">
              Ønsker du å arrangere noe selv eller har du forslag til arrangementer? Vi hjelper deg gjerne med å planlegge og promotere det!
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Foreslå et arrangement
            </Button>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Ofte stilte spørsmål</h2>
              <p className="text-lg text-gray-600">Alt du trenger å vite om våre arrangementer</p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-4">
              <FAQItem 
                question="Hvordan melder jeg meg på arrangementer?"
                answer="Du kan melde deg på arrangementer ved å klikke på 'Meld deg på' knappen på arrangementet du ønsker å delta på. For noen arrangementer kreves det betaling på forhånd."
              />
              <FAQItem 
                question="Kan jeg melde meg av et arrangement?"
                answer="Ja, du kan melde deg av så lenge det er ledig plass og arrangementet ikke har startet. Kontakt oss på styret@robotnik.no hvis du trenger å melde deg av."
              />
              <FAQItem 
                question="Er arrangementene kun for Robotnik-medlemmer?"
                answer="De fleste av våre arrangementer er åpne for alle studenter ved NMBU, men noen eksklusive arrangementer er kun for medlemmer av Robotnik."
              />
              <FAQItem 
                question="Hvordan får jeg vite om nye arrangementer?"
                answer="Følg oss på sosiale medier eller sjekk denne siden jevnlig for oppdateringer om nye arrangementer. Vi sender også ut informasjon via e-post til medlemmer."
              />
              <FAQItem 
                question="Hva hvis jeg ikke kan delta på et arrangement jeg har meldt meg på?"
                answer="Gi oss beskjed så raskt som mulig slik at vi kan tilby plassen til noen på ventelisten. Send en e-post til styret@robotnik.no."
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
