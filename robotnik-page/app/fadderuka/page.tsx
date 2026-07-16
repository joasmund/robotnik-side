"use client";

import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { FAQItem } from "@/components/ui/faq-item";
import { useScrollHeader } from "@/hooks/use-scroll-header";
import Image from "next/image";
import Link from "next/link";

export default function FadderukaPage() {
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
              src="/tourdekringla.jpg"
              alt="Fadderuka bakgrunn"
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
              Fadderuka 2026
            </h1>
            <p className={`text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-white transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Din start på studietiden ved NMBU
            </p>
            <p className={`text-lg md:text-xl max-w-3xl mx-auto text-gray-200 transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              7. august – 24. august
            </p>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            {/* Hva er fadderuka */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Hva er fadderuka?</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Fadderuka er en to ukers introduksjonsperiode for nye studenter ved NMBU. Her blir du tatt imot av erfarne studenter – fadderne dine – som sørger for at du får en god start på studietiden.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Gjennom fadderuka får du muligheten til å bli kjent med campus, medstudenter og studentlivet i Ås. Det er fylt med sosiale aktiviteter, fester, konkurranser og mye moro.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Fadderuka er helt gratis og frivillig å delta på, men vi anbefaler alle nye studenter å bli med – det er den beste måten å starte studietiden på!
                </p>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/tourdekringla.jpg"
                  alt="Fadderuka aktivitet"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Hva skjer under fadderuka */}
            <div className="max-w-4xl mx-auto mb-20 text-center">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Hva skjer under fadderuka?</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Fadderuka er full av aktiviteter som gjør at du raskt blir kjent med dine nye medstudenter og campuslivet på NMBU.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Bli kjent med faddergruppen</h3>
                  <p className="text-gray-700">
                    Du blir en del av en faddergruppe med andre nye studenter. Sammen deltar dere på aktiviteter og blir kjent med hverandre.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Campusturer og omvisning</h3>
                  <p className="text-gray-700">
                    Du får en guidet tur rundt på campus slik at du lærer deg hvor forelesninger, kantina, biblioteket og andre viktige steder er.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Sosiale sammenkomster</h3>
                  <p className="text-gray-700">
                    Det arrangeres fester, grillkvelder, sportslige aktiviteter og andre sosiale tilstelninger gjennom hele fadderuka.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">IMRT100 – selvkjørende robot</h3>
                  <p className="text-gray-700">
                    Parallelt med fadderuka starter du i faget{" "}
                    <Link href="https://www.nmbu.no/emne/imrt100" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                      IMRT100
                    </Link>
                    , der du i grupper skal utvikle en selvkjørende robot. En perfekt måte å bli kjent med medstudenter på!
                  </p>
                </div>
              </div>
            </div>

            {/* Hva er en fadder */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 flex justify-center">
                <Image
                  src="/Robotniklogo.png"
                  alt="Robotnik fadder"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Hva er en fadder?</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  En fadder er en erfaren robotikk-student som har frivillig påtatt seg å hjelpe nye studenter trygt i gang med studiene. Fadderen din vil kontakte deg før studiestart og gi deg all informasjon du trenger.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Fadderne vil sørge for at du føler deg velkommen, at du finner frem på campus, og at du blir kjent med andre studenter. De er der for å svare på alle spørsmål du måtte ha – om det gjelder studier, studentlivet eller bare livet i Ås.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Alle nye studenter får tildelt en fadder i forkant av studiestart. Du vil bli kontaktet av fadderen din før fadderuka begynner.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sosiale medier */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Følg fadderuka på sosiale medier</h2>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              Hold deg oppdatert på hva som skjer under fadderuka ved å følge oss på sosiale medier
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <Link
                href="https://www.instagram.com/fadderukanmbu/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow flex flex-col items-center gap-4 min-w-[200px]"
              >
                <Image src="/instagram.svg" alt="Instagram" width={40} height={40} />
                <div>
                  <p className="font-semibold text-gray-900">@fadderukanmbu</p>
                  <p className="text-sm text-gray-500">Instagram</p>
                </div>
              </Link>
              <Link
                href="https://www.instagram.com/fadderukarealtek/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow flex flex-col items-center gap-4 min-w-[200px]"
              >
                <Image src="/instagram.svg" alt="Instagram" width={40} height={40} />
                <div>
                  <p className="font-semibold text-gray-900">@fadderukarealtek</p>
                  <p className="text-sm text-gray-500">Instagram</p>
                </div>
              </Link>
              <Link
                href="https://www.facebook.com/fadderukaNMBU/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow flex flex-col items-center gap-4 min-w-[200px]"
              >
                <Image src="/facebook.svg" alt="Facebook" width={40} height={40} />
                <div>
                  <p className="font-semibold text-gray-900">Fadderuka NMBU</p>
                  <p className="text-sm text-gray-500">Facebook</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Kontakt */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Spørsmål?</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Ta gjerne kontakt med oss i Robotnik hvis du har spørsmål om fadderuka eller studiestart.
            </p>
            <Link
              href="/kontakt"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Kontakt oss
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Ofte stilte spørsmål</h2>
              <p className="text-lg text-gray-600">Svar på vanlige spørsmål om fadderuka</p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              <FAQItem 
                question="Når starter fadderuka?"
                answer="Fadderuka starter 7. august og varer frem til 24. august 2026. Du vil få mer detaljert informasjon om programmet fra fadderen din før oppstart."
              />
              <FAQItem 
                question="Er fadderuka gratis?"
                answer="Ja, fadderuka er helt gratis å delta på. De aller fleste arrangementer er gratis for alle studenter. Enkelte arrangementer, som konserter, kan ha egen billettpris."
              />
              <FAQItem 
                question="Må jeg delta på fadderuka?"
                answer="Nei, fadderuka er frivillig. Men vi anbefaler alle nye studenter å delta – det er en fantastisk mulighet til å bli kjent med medstudenter og få en god start på studietiden."
              />
              <FAQItem 
                question="Har jeg skole i fadderuka?"
                answer={
                  <>
                    Ja, fadderuka er lagt opp slik at du får en myk start på studiene. I august har du faget{" "}
                    <Link href="https://www.nmbu.no/emne/imrt100" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                      IMRT100
                    </Link>
                    , hvor dere i grupper skal utvikle en selvkjørende robot. Finnes det en bedre måte å starte studiene på?
                  </>
                }
              />
              <FAQItem 
                question="Hvordan får jeg informasjon fra fadderen min?"
                answer="Fadderen din vil kontakte deg i forkant av studiestart, vanligvis via e-post eller sosiale medier. Sørg for at du har oppgitt riktig kontaktinformasjon i søknaden din til NMBU."
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
