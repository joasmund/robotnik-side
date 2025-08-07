"use client";


import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/next";


export default function ProjectPage() {
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
        <div className="min-h-screen bg-gray-900 text-gray-200">
            <header className={`fixed w-full z-50 transition-transform duration-300 ${
            showHeader ? 'translate-y-0' : '-translate-y-full'
            }`}>
            <Header isScrolled={isScrolled} />
            </header>

            <main>
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <Image
            src="/sagaatnight.webp"
            alt="Saga Robotics at night"
            fill
            quality={90}
            priority
            style={{ objectFit: "cover" }}
            className={`transition-transform duration-1000 ${isLoaded ? 'scale-100' : 'scale-125'}`}
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40 z-5"></div>
          
          <div className="relative z-10 px-4 sm:px-8 lg:px-12 text-center max-w-7xl mx-auto w-full">
            <div className="flex flex-col items-center">
              <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white transition-all duration-1000 leading-tight ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                Her kommer det prosjekter!
              </h1>
              <p className={`text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-100 max-w-3xl transition-all duration-1000 delay-300 leading-relaxed ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                Her kommer det prosjekter som Robotnik NMBU jobber med. Følg med for oppdateringer!
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Analytics />
    </div>
  );
};