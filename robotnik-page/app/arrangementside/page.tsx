"use client";

import { Button } from "@/components/ui/button";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { useEffect, useState } from "react";
import { getUpcomingEvents } from "@/utils/eventUtils";
import { EventCard } from "@/components/ui/event-card"
import { Plus } from "lucide-react"

const events = [
  {
    id: "1",
    title: "Tech Conference 2024",
    description:
      "Join us for the biggest tech conference of the year featuring industry leaders and cutting-edge innovations.",
    date: "2024-03-15",
    time: "09:00",
    location: "San Francisco Convention Center",
    category: "Technology",
    price: 299,
    image: "/placeholder.svg?height=200&width=400",
    attendees: 1250,
    maxAttendees: 1500,
    organizer: "TechEvents Inc.",
  },
  {
    id: "2",
    title: "Design Workshop",
    description: "Learn the latest design trends and techniques from expert designers in this hands-on workshop.",
    date: "2024-03-20",
    time: "14:00",
    location: "Creative Studio Downtown",
    category: "Design",
    price: 89,
    image: "/placeholder.svg?height=200&width=400",
    attendees: 45,
    maxAttendees: 50,
    organizer: "Design Masters",
  },
  {
    id: "3",
    title: "Startup Networking Event",
    description:
      "Connect with fellow entrepreneurs, investors, and startup enthusiasts in a relaxed networking environment.",
    date: "2024-03-25",
    time: "18:30",
    location: "Innovation Hub",
    category: "Business",
    price: 0,
    image: "/placeholder.svg?height=200&width=400",
    attendees: 180,
    maxAttendees: 200,
    organizer: "Startup Community",
  },
  {
    id: "4",
    title: "Photography Masterclass",
    description:
      "Master the art of photography with professional photographers. Bring your camera and learn hands-on techniques.",
    date: "2024-04-02",
    time: "10:00",
    location: "Photo Studio Plus",
    category: "Arts",
    price: 150,
    image: "/placeholder.svg?height=200&width=400",
    attendees: 25,
    maxAttendees: 30,
    organizer: "Photo Academy",
  },
  {
    id: "5",
    title: "Marketing Summit",
    description: "Discover the latest marketing strategies and tools that will help you grow your business in 2024.",
    date: "2024-04-10",
    time: "09:30",
    location: "Business Center",
    category: "Marketing",
    price: 199,
    image: "/placeholder.svg?height=200&width=400",
    attendees: 320,
    maxAttendees: 400,
    organizer: "Marketing Pro",
  },
  {
    id: "6",
    title: "Wellness Retreat",
    description: "Rejuvenate your mind and body with yoga, meditation, and wellness activities in a peaceful setting.",
    date: "2024-04-15",
    time: "08:00",
    location: "Mountain View Resort",
    category: "Health",
    price: 250,
    image: "/placeholder.svg?height=200&width=400",
    attendees: 60,
    maxAttendees: 80,
    organizer: "Wellness Center",
  },
]

export default function EventsPage() {
  const upcomingEvents = getUpcomingEvents(10);
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
      

<header className={`fixed w-full z-50 transition-transform duration-300 ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <Header isScrolled={isScrolled} />
      </header>
      <main className="pt-20">
       {/*  <section className="py-20 bg-gray-800">
                  <div className="container mx-auto px-4 relative z-10 pl-8 pt- text-left">
                    <h1 className={`text-5xl md:text-7xl font-bold mb-20 text-gray-200 transition-all duration-1000 ${
                      isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>Kommende arrangementer</h1>
                    {upcomingEvents.map((event) => (
                      <EventCard key={event.id} event={event} />
                    ))}
                  </div>
                </section> */}

        <div className="min-h-screen bg-background">

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col">
          {/* Main content */}
          <div className="w-full">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-950">Kommende arrangementer</h1>
                <p className="text-muted-foreground mt-2 text-slate-700">Se hva som skjer framover</p>
              </div>
              {/* <Button className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Create Event
              </Button> */}
            </div>

            {/* Events grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>

            {/* Load more button */}
            <div className="flex justify-center mt-12">
              <Button variant="outline" size="lg">
                Load More Events
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>

        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Noe du savner?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Har du en idé til et arrangement eller en workshop du ønsker å arrangere? Vi hjelper deg gjerne med å planlegge og promotere det!
            </p>
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
              Foreslå et arrangement
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}