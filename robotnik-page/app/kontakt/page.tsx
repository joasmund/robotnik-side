"use client";

import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/next";
import { Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsScrolled(true); // Always show header in scrolled state for better visibility

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
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
    <div className="min-h-screen bg-white text-gray-200">
      <header className={`fixed w-full z-50 transition-transform duration-300 ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <Header isScrolled={isScrolled} />
      </header>

      <main className="pt-20">
        {/* Contact Form Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">Ta kontakt</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-stretch">
              {/* Contact Button */}
              <div className="flex">
                <div className="bg-gray-50 rounded-lg p-8 text-center flex-1 flex flex-col justify-center">
                  <Mail className="w-16 h-16 mx-auto mb-6 text-blue-600" />
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Kontakt oss direkte</h3>
                  <p className="text-gray-700 mb-6">
                    Send oss dine spørsmål, ideer eller bare si hei! Vi svarer så raskt vi kan.
                  </p>
                  <a
                    href="mailto:styret@robotnik.no?subject=Henvendelse fra nettsiden&body=Hei Robotnik,%0D%0A%0D%0AJeg vil gjerne..."
                    className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors text-sm w-fit mx-auto"
                  >
                    <span className="flex items-center">
                      <Mail className="w-4 h-4 mr-2" />
                      Send e-post til styret
                    </span>
                  </a>
                </div>
              </div>

              {/* Contact Information Blocks */}
              <div className="grid grid-rows-2 gap-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Generell kontakt</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="w-6 h-6 mr-4 text-blue-600" />
                      <span className="text-gray-700">robotnik@nmbu.no</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-6 h-6 mr-4 text-blue-600" />
                      <span className="text-gray-700">Drøbakveien 31, 1433 Ås</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Følg oss</h3>
                  <p className="text-gray-700 mb-4">Hold deg oppdatert på våre aktiviteter og arrangementer</p>
                  <div className="flex space-x-4">
                    <a href="https://www.facebook.com/robotniknmbu" className="text-blue-600 hover:text-blue-800 transition-colors">
                      Facebook
                    </a>
                    <a href="https://www.instagram.com/robotniknmbu" className="text-blue-600 hover:text-blue-800 transition-colors">
                      Instagram
                    </a>
                    <a href="https://www.linkedin.com/company/robotnik-nmbu/" className="text-blue-600 hover:text-blue-800 transition-colors">
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Finn oss på campus</h2>
              <p className="text-lg text-gray-600">Robotikklaben er vårt hjem på NMBU Campus Ås</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Adresse</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Postadresse: Drøbakveien 31, 1433 Ås<br />
                  Robotlaben: Kajaveien 4, 1433 Ås<br />
                  Fakultet for Realfag og Teknologi (REALTEK)<br />
                  NMBU - Norges miljø- og biovitenskapelige universitet<br />
                  {/* Postboks 5003 NMBU<br /> */}
                </p>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Hvordan komme seg hit</h3>
                <p className="text-lg text-gray-700">
                  <span className="font-medium">Med tog:</span> Ås stasjon (ca. 10 min gange fra stasjonen)<br />
                  <span className="font-medium">Med bil:</span> Parkering tilgjengelig på campus<br />
                  <span className="font-medium">Med buss:</span> Universitetet i Ås er nærmeste busstopp<br />
                </p>
              </div>
              
              <div>
                <Image
                  src="/campus.jpg"
                  alt="NMBU Campus Ås"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        {/* <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Ofte stilte spørsmål</h2>
              <p className="text-lg text-gray-600">Her finner du svar på de vanligste spørsmålene</p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-4">
              <FAQItem 
                question="Når kan jeg komme innom kontoret?"
                answer="Du kan komme innom robotikklaben på dagtid når det er aktivitet. Styremøtene våre er hver tirsdag kl. 16:00 og er åpne for alle som ønsker å komme."
              />
              <FAQItem 
                question="Hvor raskt får jeg svar på henvendelser?"
                answer="Vi prøver å svare på alle henvendelser innen 1-2 virkedager. I travle perioder kan det ta litt lengre tid, men vi kommer alltid tilbake til deg."
              />
              <FAQItem 
                question="Kan jeg besøke dere uten å være student ved Anvendt Robotikk?"
                answer="Selvfølgelig! Vi ønsker alle interesserte velkommen til våre åpne arrangementer. Ta kontakt med oss på forhånd så kan vi fortelle deg mer om hva som skjer."
              />
              <FAQItem 
                question="Hvordan kan jeg bli med i Robotnik?"
                answer="Alle studenter ved Anvendt Robotikk er automatisk medlemmer. Hvis du studerer noe annet men er interessert i robotikk, kan du delta på våre åpne arrangementer og bli med i aktiviteter."
              />
              <FAQItem 
                question="Arrangerer dere bedriftspresentasjoner?"
                answer="Ja! Vi arrangerer jevnlig bedriftspresentasjoner og karrieredager. Følg oss på sosiale medier eller meld deg på nyhetsbrevet vårt for å holde deg oppdatert."
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