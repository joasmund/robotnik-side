"use client";

import { Button } from "@/components/ui/button";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import Image from "next/image";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header isScrolled={true} />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/campus.jpg"
              alt="Campus background"
              fill
              className="object-cover"
              priority
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 py-32 text-center">
            <div className="max-w-4xl mx-auto">
              {/* Robot Icon */}
              <div className="mb-8">
                <Image
                  src="/Robotniklogo.png"
                  alt="Robotnik logo"
                  width={150}
                  height={150}
                  className="mx-auto opacity-80"
                />
              </div>
              
              {/* 404 Text */}
              <h1 className="text-8xl md:text-9xl font-bold mb-6 text-white">
                404
              </h1>
              
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                Oops! Siden ble ikke funnet
              </h2>
              
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-200">
                Det ser ut som denne roboten har gått seg vill! Siden du leter etter eksisterer ikke, eller linken kan være ødelagt.
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
                <Link href="/">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg flex items-center gap-2">
                    <Home className="w-5 h-5" />
                    Gå til forsiden
                  </Button>
                </Link>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={() => window.history.back()}
                  className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg flex items-center gap-2"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Gå tilbake
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Helpful Links Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Kanskje du leter etter dette?</h2>
              <p className="text-lg text-gray-600">Her er noen populære sider på vår nettside</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Link href="/arrangementer">
                <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Arrangementer</h3>
                  <p className="text-gray-600">Se kommende arrangementer og aktiviteter</p>
                </div>
              </Link>
              
              <Link href="/om-oss">
                <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Om oss</h3>
                  <p className="text-gray-600">Lær mer om Robotnik og vår visjon</p>
                </div>
              </Link>
              
              <Link href="/styret">
                <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Styret</h3>
                  <p className="text-gray-600">Møt styremedlemmene våre</p>
                </div>
              </Link>
              
              <Link href="/ny-student">
                <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Ny student</h3>
                  <p className="text-gray-600">Informasjon for nye studenter</p>
                </div>
              </Link>
              
              <Link href="/utstyr">
                <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Utstyr</h3>
                  <p className="text-gray-600">Se hva slags utstyr vi har tilgjengelig</p>
                </div>
              </Link>
              
              <Link href="/kontakt">
                <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Kontakt</h3>
                  <p className="text-gray-600">Ta kontakt med oss</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Trenger du hjelp?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-700">
              Hvis du ikke finner det du leter etter, ikke nøl med å ta kontakt med oss!
            </p>
            <Link href="/kontakt">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                Kontakt oss
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
