import { Button } from "@/components/ui/button"
import { Header } from "@/components/ui/header"
import { Cpu, Users, Zap } from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Autonomous Drone Swarm",
      description: "Developing a swarm of drones that can autonomously coordinate and perform complex tasks.",
      icon: Cpu,
      status: "Ongoing"
    },
    {
      title: "Robotic Arm for Precision Agriculture",
      description: "Creating a robotic arm capable of delicate operations in agricultural settings, such as selective harvesting.",
      icon: Users,
      status: "Completed"
    },
    {
      title: "AI-Powered Waste Sorting System",
      description: "Implementing an intelligent system that can automatically sort and process different types of waste materials.",
      icon: Zap,
      status: "Planning"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Header/>

      <main className="pt-20">
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Our Projects</h1>
            <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
              Explore the cutting-edge robotics projects our students are working on. From autonomous systems to AI-powered robots, we're pushing the boundaries of what's possible.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-gray-700 rounded-lg p-6 flex flex-col">
                  <project.icon className="w-12 h-12 mb-4 text-blue-500" />
                  <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                  <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <span className={`px-2 py-1 rounded-full text-sm ${
                      project.status === 'Ongoing' ? 'bg-green-500' :
                      project.status === 'Completed' ? 'bg-blue-500' :
                      'bg-yellow-500'
                    }`}>
                      {project.status}
                    </span>
                    <Button variant="outline">Learn More</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Have a Project Idea?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              We're always looking for new and exciting robotics projects. If you have an idea, we'd love to hear about it and potentially help bring it to life!
            </p>
            
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
              Submit a Project Proposal
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