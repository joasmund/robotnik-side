"use client";

import { Button } from "@/components/ui/button"
import { Calendar, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/ui/header"
import { Footer } from "@/components/ui/footer"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function RobotnikLandingPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Header />
      <main>
        <section className="relative h-screen flex items-center justify-center overflow-hidden pt-2">
          <Image
            src="/sagaatnight.webp"
            alt="Saga Robotics at night"
            fill
            style={{ objectFit: "cover" }}
            className={`transition-transform duration-1000 ${isLoaded ? 'scale-100' : 'scale-125'}`}
          />
          <div className="relative z-10 text-center mt-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gray-200">Robotnik NMBU</h1>
            <p className="text-xl md:text-2xl mb-8">Framtidens robotikk starter her</p>
            <Link href="/kontaktside">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white mt-20">
                Involver deg <ChevronRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </section>

        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((event) => (
                <div key={event} className="bg-gray-700 rounded-lg p-6 hover:shadow-lg transition duration-300">
                  <Calendar className="w-12 h-12 mb-4 text-blue-500" />
                  <h3 className="text-xl font-semibold mb-2">Robotics Workshop {event}</h3>
                  <p className="text-gray-300 mb-4">Join us for an exciting hands-on robotics workshop!</p>
                  <Button variant="outline">Learn More</Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}