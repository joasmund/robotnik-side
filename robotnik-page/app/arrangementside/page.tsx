"use client";

import { Button } from "@/components/ui/button";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { useEffect, useState } from "react";
import { getUpcomingEvents } from "@/utils/eventUtils";
import { EventCard } from "@/components/ui/EventCard";

export default function EventsPage() {
  const upcomingEvents = getUpcomingEvents(10);
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
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className={`fixed w-full z-50 transition-transform duration-300 ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <Header isScrolled={isScrolled} />
      </header>
      

<header className={`fixed w-full z-50 transition-transform duration-300 ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <Header isScrolled={isScrolled} />
      </header>
      <main className="pt-20">
        <section className="py-20 bg-gray-800">
                  <div className="container mx-auto px-4 relative z-10 pl-8 pt- text-left">
                    <h1 className={`text-5xl md:text-7xl font-bold mb-20 text-gray-200 transition-all duration-1000 ${
                      isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>Kommende arrangementer</h1>
                    {upcomingEvents.map((event) => (
                      <EventCard key={event.id} event={event} />
                    ))}
                  </div>
                </section>

        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Noe du savner?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Har du en idé til et arrangement eller en workshop du ønsker å arrangere? Vi hjelper deg gjerne med å planlegge og promotere det!
            </p>
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
              Foreslå et arrangement
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}