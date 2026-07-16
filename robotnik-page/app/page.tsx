"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import Image from "next/image";
import { ChevronRight } from "lucide-react"
import { useScrollHeader } from "@/hooks/use-scroll-header";

export default function RobotnikLandingPage() {
  const { isLoaded, showHeader, isScrolled } = useScrollHeader();
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
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
          
          <div className="relative z-10 px-4 sm:px-8 lg:px-12 text-center sm:text-left max-w-7xl mx-auto w-full">
            <div className="flex flex-col items-center sm:items-start">
              <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-white transition-all duration-1000 leading-tight ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                Robotnik NMBU
              </h1>
              <p className={`text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-100 max-w-2xl transition-all duration-1000 delay-300 leading-relaxed ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                Linjeforeningen for anvendt robotikk ved NMBU
              </p>
              <Link href="/ny-student">
                <Button size="lg" className={`bg-[#9597ad] hover:bg-[#367d70] text-white transition-all duration-300 delay-100 text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-4 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                  Ny student? <ChevronRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}