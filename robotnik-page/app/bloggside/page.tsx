"use client";


import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/next";


export default function BlogPage() {
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

            <main>
        <section className="relative h-screen flex items-start overflow-hidden">
          <Image
            src="/sagaatnight.webp"
            alt="Saga Robotics at night"
            fill
            quality={90}
            priority
            style={{ objectFit: "cover" }}
            className={`transition-transform duration-1000 ${isLoaded ? 'scale-100' : 'scale-125'}`}
          />
          <div className="relative z-10 pl-8 pt-32 text-left mt-60 ml-60">
            <h1 className={`text-5xl md:text-7xl font-bold mb-4 text-gray-200 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Robotnik-Bloggen kommer snart!
            </h1>
            <p className={`text-xl md:text-2xl mb-8 transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Her kommer det en blogg med spennende innhold om robotikk og teknologi, og alt som skjer hos Robotnik.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <Analytics />
    </div>
  );
};