"use client";

import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import Image from "next/image";
import { useScrollHeader } from "@/hooks/use-scroll-header";

export default function UtstyrPage() {
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
          <div className="absolute inset-0 z-0">
            <Image
              src="/campus.jpg"
              alt="Campus background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 py-32 text-center">
            <h1 className={`text-5xl md:text-7xl font-bold mb-6 text-white transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Robotikklaben
            </h1>
            <p className={`text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-white transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Laben &ldquo;vår&rdquo; på campus.
            </p>
            <p className={`text-lg md:text-xl max-w-3xl mx-auto text-gray-200 transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
                Robotlaben på NMBU er for både nye studenter og erfarne professorer. Her har vi fag, utstyr og ressurser tilgjengelig for alle som ønsker å lære mer om robotikk. Enten du er interessert i programmering, mekanikk eller elektronikk, vil du finne noe som passer for deg i laben.
            </p>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-2 lg:order-1">
                <Image
                  src="/Robotniklogo.png"
                  alt="Robotnik logo"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Robotlaben</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Robotikklaben er hjertet for oss som studerer anvendt robotikk. Her finner du et mangfold av roboter, avansert utstyr, 3D-printere og laserkutter – alt tilgjengelig for medlemmene våre. Laben er ikke bare et sted for undervisning, men også et sosialt samlingspunkt hvor du kan møte andre studenter, jobbe med prosjekter eller bare ta en pause. Flere av fagene våre foregår her, og det er enkelt å få kontakt med både medstudenter og professorer for å diskutere faglige spørsmål eller få hjelp. Allerede i fadderuka blir du kjent med laben gjennom faget IMRT100, som starter i august og gir deg en praktisk innføring i både utstyr og miljøet. Uansett om du vil utforske ny teknologi, samarbeide med andre eller bare slappe av, er robotikklaben et sted du kommer til å bruke mye tid – og bli godt kjent med.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Finn fram</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Robotlaben er lokalisert i hjertet av campus øst, bak TF-bygget. Se kartet for mer informasjon.
                </p>
              </div>
                <div className="flex flex-col items-center">
                  <div className="rounded-lg overflow-hidden shadow-lg w-full">
                    <iframe
                      className="w-full"
                      style={{ height: "420px", borderRadius: "0.5rem" }}
                      src="https://use.mazemap.com/embed.html#v=1&amp;campusid=241&amp;zlevel=1&amp;center=10.777668,59.665991&amp;zoom=19.9&amp;sharepoitype=poi&amp;sharepoi=699162&amp;utm_medium=iframe"
                      allow="geolocation"
                      title="Map by MazeMap"
                    ></iframe>
                  </div>
                  <small>
                    <a href="https://www.mazemap.com/" target="_blank" rel="noopener noreferrer">
                      Map by MazeMap
                    </a>
                  </small>
                </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
