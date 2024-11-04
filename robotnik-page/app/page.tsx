import { Button } from "@/components/ui/button"
import { Calendar, Users, Cpu, ChevronRight } from "lucide-react"
import Link from "next/link"
import {Header} from "@/components/ui/header"


export default function RobotnikLandingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Header/>
      <main>
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <video
            autoPlay
            loop
            muted
            className="absolute w-full h-full object-cover"
            poster="/placeholder.svg?height=1080&width=1920"
          >
            <source src="/placeholder.mp4" type="video/mp4" />
          </video>
          <div className="relative z-10 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Robotnik NMBU</h1>
            <p className="text-xl md:text-2xl mb-8">Framtidens robotikk starter her</p>
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
              Involver deg <ChevronRight className="ml-2" />
            </Button>
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

        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Partners</h2>
            <div className="flex flex-wrap justify-center items-center gap-12">
              {[1, 2, 3, 4].map((partner) => (
                <div key={partner} className="w-40 h-40 bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-500">Partner {partner}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2].map((project) => (
                <div key={project} className="bg-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
                  <div className="h-64 bg-gray-600 flex items-center justify-center">
                    <Cpu className="w-24 h-24 text-blue-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Robotics Project {project}</h3>
                    <p className="text-gray-300 mb-4">An innovative project pushing the boundaries of robotics.</p>
                    <Button variant="outline">View Project</Button>
                  </div>
                </div>
              ))}
            </div>
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