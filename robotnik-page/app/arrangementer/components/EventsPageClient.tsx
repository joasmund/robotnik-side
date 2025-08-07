"use client";

import { Button } from "@/components/ui/button";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Calendar, MapPin, ChevronDown, X } from "lucide-react"
import { Analytics } from "@vercel/analytics/next";
import { Event } from "@/utils/markdownEvents";

// FAQ Item Component
/* interface FAQItemProps {
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
}; */

// Event Modal Component
interface EventModalProps {
  event: Event;
  isOpen: boolean;
  onClose: () => void;
}

const EventModal = ({ event, isOpen, onClose }: EventModalProps) => {
  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop with gradient overlay */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal content */}
      <div className="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
        {/* Header with image */}
        <div className="relative h-48">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
            aria-label="Lukk modal"
          >
            <X className="w-5 h-5" />
          </button>
          
          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {event.category}
            </span>
          </div>
          
          {/* Title overlay */}
          <div className="absolute bottom-4 left-4 right-4">
            <h2 className="text-2xl font-bold text-white mb-2">{event.title}</h2>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-12rem)]">
          {/* Event details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center text-gray-700">
              <Calendar className="w-5 h-5 mr-3 text-blue-600" />
              <div>
                <div className="font-medium">Dato & Tid</div>
                <div className="text-sm text-gray-600">
                  {new Date(event.date).toLocaleDateString('no-NO')}{event.time && ` kl. ${event.time}`}
                </div>
              </div>
            </div>
            
            <div className="flex items-center text-gray-700">
              <MapPin className="w-5 h-5 mr-3 text-blue-600" />
              <div>
                <div className="font-medium">Sted</div>
                <div className="text-sm text-gray-600">{event.location}</div>
              </div>
            </div>
          </div>
          
          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">Om arrangementet</h3>
            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{event.description}</p>
          </div>
          
          {/* Footer with price */}
          <div className="pt-4 border-t border-gray-200">
            <div>
              <div className="text-sm text-gray-600">Pris</div>
              <div className="text-2xl font-bold text-gray-900">
                {event.price === 0 ? 'Gratis' : `${event.price} kr`}
              </div>
              <div className="text-sm text-gray-600 mt-1">
                Arrangert av {event.organizer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Event Card Component
interface EventCardProps {
  event: Event;
  onOpenModal: () => void;
}

const EventCard = ({ event, onOpenModal }: EventCardProps) => {
  // Check if description is long enough to show "Vis mer"
  const isLongDescription = event.description.length > 120;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
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
        
        <div className="text-gray-600 mb-4">
          <p className="line-clamp-3">{event.description}</p>
          {isLongDescription && (
            <button
              onClick={onOpenModal}
              className="inline-flex items-center mt-2 text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
            >
              Vis mer
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>
          )}
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-700">
            <Calendar className="w-4 h-4 mr-2 text-blue-600" />
            <span className="text-sm">{new Date(event.date).toLocaleDateString('no-NO')}{event.time && ` kl. ${event.time}`}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <MapPin className="w-4 h-4 mr-2 text-blue-600" />
            <span className="text-sm">{event.location}</span>
          </div>
        </div>
        
        <div>
          <span className="text-lg font-bold text-gray-900">
            {event.price === 0 ? 'Gratis' : `${event.price} kr`}
          </span>
        </div>
      </div>
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
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (event: Event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

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
                  <EventCard 
                    key={event.id} 
                    event={event} 
                    onOpenModal={() => openModal(event)}
                  />
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-500 text-lg">Ingen kommende arrangementer for øyeblikket.</p>
                  <p className="text-gray-400 mt-2">Sjekk tilbake senere for nye arrangementer!</p>
                </div>
              )}
            </div>

            {/* Event Modal */}
            {selectedEvent && (
              <EventModal 
                event={selectedEvent} 
                isOpen={isModalOpen} 
                onClose={closeModal} 
              />
            )}

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
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <a href="/kontakt">
              Foreslå et arrangement
              </a>
            </Button>
          </div>
        </section>

        {/* FAQ Section */}
        {/* <section className="py-20 bg-white">
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
        </section> */}
      </main>

      <Footer />
      <Analytics />
    </div>
  );
}
