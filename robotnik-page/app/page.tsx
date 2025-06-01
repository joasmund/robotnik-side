"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getUpcomingEvents } from "@/utils/eventUtils";
import { ChevronRight } from "lucide-react";
import { EventCard } from "@/components/ui/EventCard";  
import { Analytics } from "@vercel/analytics/next";
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/testcard"
import { Spotlight } from "@/components/ui/spotlight"



export default function RobotnikLandingPage() {
  const upcomingEvents = getUpcomingEvents(3);
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
              Robotnik NMBU
            </h1>
            <p className={`text-xl md:text-2xl mb-8 transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Linjeforeningen for anvendt robotikk ved NMBU
            </p>
            <Link href="/kontaktside">
              <Button size="lg" className={`bg-[#9597ad] hover:bg-[#367d70] text-white transition-all duration-300 delay-100 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                Involver deg <ChevronRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </section>
        {/* <section className="relative">
          <Card className="sticky top-0 w-full h-screen bg-black/[0.96] z-10">
            <Spotlight
              className="-top-40 left-0 md:left-60 md:-top-20"
              fill="white"
            />
            <div className="flex h-full">

              <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                  Robotnik NMBU
                </h1>
                <p className="mt-4 text-neutral-300 max-w-lg">
                  Framtidens robotikk starter her
                </p>
              </div>

              <div className="flex-1 relative h-full overflow-hidden">
                <SplineScene 
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
            <div className="relative z-10 px-8 pt-32 text-left">
              <h1 className={`text-5xl md:text-7xl font-bold mb-4 text-gray-200 transition-all duration-1000 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                Robotnik NMBU
              </h1>
              <p className={`text-xl md:text-2xl mb-8 transition-all duration-1000 delay-300 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                Framtidens robotikk starter her
              </p>
              <Link href="/kontaktside">
                <Button size="lg" className={`bg-[#9597ad] hover:bg-[#367d70] text-white transition-all duration-300 delay-100 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                  Involver deg <ChevronRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </Card>

          <div className="h-[200vh] bg-gray-800">

          </div>
        </section> */}
        
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}