import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin } from "lucide-react"
import Link from "next/link"
import {Header} from "@/components/ui/header"

export default function EventsPage() {
  const events = [
    {
      title: "Annual Robotics Symposium",
      date: "September 15, 2023",
      time: "9:00 AM - 5:00 PM",
      location: "NMBU Main Auditorium",
      description: "Join us for a day of inspiring talks and demonstrations from leading robotics researchers and industry professionals."
    },
    {
      title: "Robotics Workshop Series",
      date: "Every Tuesday",
      time: "6:00 PM - 8:00 PM",
      location: "Robotics Lab, Building 42",
      description: "Hands-on workshops covering various aspects of robotics, from basic programming to advanced AI integration."
    },
    {
      title: "Robotnik Hackathon",
      date: "November 5-7, 2023",
      time: "48-hour event",
      location: "NMBU Innovation Center",
      description: "Put your skills to the test in this exciting 48-hour robotics hackathon. Great prizes to be won!"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Header/>

      <main className="pt-20">
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Upcoming Events</h1>
            <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
              Stay up to date with the latest Robotnik events and activities. Join us to learn, network, and innovate!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <div key={index} className="bg-gray-700 rounded-lg p-6 flex flex-col">
                  <h2 className="text-2xl font-semibold mb-4">{event.title}</h2>
                  <div className="flex items-center mb-2">
                    <Calendar className="w-5 h-5 mr-2 text-blue-500" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <Clock className="w-5 h-5 mr-2 text-blue-500" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <MapPin className="w-5 h-5 mr-2 text-blue-500" />
                    <span>{event.location}</span>
                  </div>
                  <p className="text-gray-300 mb-6 flex-grow">{event.description}</p>
                  <Button className="self-start mt-auto">Register</Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Want to host an event?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              If you have an idea for a robotics-related event, we'd love to hear from you! 
              Robotnik supports student-led initiatives and can help you bring your event to life.
            </p>
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
              Propose an Event
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-bold text-blue-500 mb-2">Robotnik</h3>
              <p className="text-gray-400">Shaping the future of robotics</p>
            </div>
            <nav className="flex flex-wrap justify-center gap-4">
              <Link href="#" className="text-gray-400 hover:text-blue-500 transition duration-300">About</Link>
              <Link href="#" className="text-gray-400 hover:text-blue-500 transition duration-300">Events</Link>
              <Link href="#" className="text-gray-400 hover:text-blue-500 transition duration-300">Projects</Link>
              <Link href="#" className="text-gray-400 hover:text-blue-500 transition duration-300">Contact</Link>
            </nav>
          </div>
          <div className="mt-8 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Robotnik. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}