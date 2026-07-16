"use client";

import { Button } from "@/components/ui/button";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import Image from "next/image";
import { ExternalLink, MapPin, Calendar, Bot } from "lucide-react";
import { useScrollHeader } from "@/hooks/use-scroll-header";


export default function ProjectPage() {
  const { isLoaded, showHeader, isScrolled } = useScrollHeader();


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
                Prosjekter
              </h1>
              <p className={`text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-100 max-w-3xl transition-all duration-1000 delay-300 leading-relaxed ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                Se hva Robotnik NMBU jobber med og deltar på
              </p>
            </div>
          </div>
        </section>

        {/* FRE Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 text-white">Field Robot Event (FRE)</h2>
                <p className="text-lg text-gray-400">Internasjonal konkurranse i autonom navigasjon på jordbruksmark</p>
              </div>

              <div className="bg-gray-800 rounded-2xl p-8 md:p-12 mb-12">
                <h3 className="text-2xl font-bold mb-4 text-white">Hvem er vi?</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  I 2023 representerte vi Norges miljø- og biovitenskapelige universitet (NMBU) for
                  første gang på det årlige Field Robot Event (FRE) i Slovenia, hvor vi konkurrerte
                  med roboten vår, Jackal. I 2024 reiste laget til Tyskland, der vi designet, bygde
                  og programmerte en helt ny robot fra bunnen av. I 2025 deltok vi igjen, denne
                  gangen i Italia med vår nyutviklede robot Peik.
                </p>
              </div>

              <div className="bg-gray-800 rounded-2xl p-8 md:p-12 mb-12">
                <h3 className="text-2xl font-bold mb-4 text-white">Hva er FRE?</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Field Robot Event (FRE) er en internasjonal, årlig utendørskonkurranse på
                  jordbruksmark, der studenter og deres veiledere konkurrerer i flere oppgaver
                  innen autonom navigasjon og andre operasjoner. Konkurransen utfordrer lagene
                  til å utvikle roboter som kan navigere autonomt i åkre, utføre presisjonsjordbruk
                  og løse praktiske oppgaver knyttet til landbruksrobotikk.
                </p>
              </div>

              {/* Timeline */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-gray-800 rounded-xl p-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 bg-[#367d70]/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-7 h-7 text-[#367d70]" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">2023 — Slovenia</h4>
                  <p className="text-gray-400">Vår første deltakelse med roboten Jackal</p>
                </div>
                <div className="bg-gray-800 rounded-xl p-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 bg-[#367d70]/20 rounded-full flex items-center justify-center">
                    <Bot className="w-7 h-7 text-[#367d70]" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">2024 — Tyskland</h4>
                  <p className="text-gray-400">Bygde og programmerte en helt ny robot fra bunnen av</p>
                </div>
                <div className="bg-gray-800 rounded-xl p-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 bg-[#367d70]/20 rounded-full flex items-center justify-center">
                    <Calendar className="w-7 h-7 text-[#367d70]" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">2025 — Italia</h4>
                  <p className="text-gray-400">Deltok med vår nyutviklede robot Peik</p>
                </div>
              </div>

              <div className="text-center">
                <a href="https://nmbufre.no/" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-[#367d70] hover:bg-[#2a6359] text-white text-lg px-8 py-4">
                    Les mer om FRE-laget vårt <ExternalLink className="ml-2 w-5 h-5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}