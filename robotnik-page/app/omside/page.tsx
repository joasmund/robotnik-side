import { Button } from "@/components/ui/button"
import { Footer } from "@/components/ui/footer"
import Link from "next/link"
import { Header } from "@/components/ui/header"
import { Users, Book, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Header/>

      <main className="pt-20">
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Om Robotnik</h1>
            <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
              Robotnik er linjeforeningen for studenter ved Anvendt Robotikk ved NMBU. Vi er en gruppe engasjerte studenter som brenner for robotikk og teknologi.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-700 rounded-lg p-6 text-center">
                <Users className="w-12 h-12 mx-auto mb-4 text-blue-500" />
                <h2 className="text-2xl font-semibold mb-2">Designere og programmerere</h2>
                <p className="text-gray-300">
                  Vi velger spesialiseringsretning 3. året, med fokus på enten design eller programmering. Dette gir oss en bred faglig kompetanse innen robotikk.
                </p>
              </div>
              <div className="bg-gray-700 rounded-lg p-6 text-center">
                <Book className="w-12 h-12 mx-auto mb-4 text-blue-500" />
                <h2 className="text-2xl font-semibold mb-2">Vår oppgave</h2>
                <p className="text-gray-300">
                    Vi arrangerer workshops, foredrag og hackathons for å gi studentene muligheten til å lære mer om robotikk og teknologi. Samarbeid med våre partnere gir oss tilgang til spennende prosjekter og muligheter.
                </p>
              </div>
              <div className="bg-gray-700 rounded-lg p-6 text-center">
                <Award className="w-12 h-12 mx-auto mb-4 text-blue-500" />
                <h2 className="text-2xl font-semibold mb-2">Alumni</h2>
                <p className="text-gray-300">
                  Våre ferdigutdannede studenter har gått videre til spennende karrierer innen robotikk og teknologi.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Vår visjon</h2>
            <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
              Robotnik skal være en inkluderende og inspirerende linjeforening som gir studentene muligheten til å utforske og utvikle sin lidenskap for robotikk og teknologi. Vi jobber for å fremme innovasjon og samarbeid, og for å skape et sterkt faglig og sosialt fellesskap.
            </p>
            <div className="flex justify-center">
              <Link href="/kontaktside">
                <Button size="lg" className="bg-[#459D84] hover:bg-[#367d69] text-white">
                  Bli med da vel!
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer/>
    </div>
  )
}