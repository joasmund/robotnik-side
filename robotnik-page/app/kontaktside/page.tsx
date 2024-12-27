import { Button } from "@/components/ui/button"
import { Header } from "@/components/ui/header"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Header/> 

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
                      <span>NMBU Campus, Ås, Norway</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Office Hours</h2>
                  <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p>Saturday - Sunday: Closed</p>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
                  <div className="flex space-x-4">
                    <a href="#" className="text-blue-500 hover:text-blue-400">Twitter</a>
                    <a href="#" className="text-blue-500 hover:text-blue-400">Facebook</a>
                    <a href="#" className="text-blue-500 hover:text-blue-400">LinkedIn</a>
                    <a href="#" className="text-blue-500 hover:text-blue-400">Instagram</a>
                  </div>
                </div>
              </div>
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