"use client";

import { Button } from "@/components/ui/button";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/next";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {

    
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

      <main className="pt-20">
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Contact Us</h1>
            <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
              Have questions or want to get involved? Wed love to hear from you! Reach out to us using the form below or through our contact information.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <Input id="name" placeholder="Your Name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <Textarea id="message" placeholder="Your message here..." className="h-32" />
                  </div>
                  <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600">Send Message</Button>
                </form>
              </div>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="w-6 h-6 mr-4 text-blue-500" />
                      <span>robotnik@nmbu.no</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-6 h-6 mr-4 text-blue-500" />
                      <span>+47 123 45 678</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-6 h-6 mr-4 text-blue-500" />
                      <span>Postboks 800 NMBU, 1433 Ås</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Office Hours</h2>
                  <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p>Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <Analytics />
    </div>
  )
}