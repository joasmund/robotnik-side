import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

const Footer = () => (
  <footer className="bg-background border-t">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <Image src="/Robotnikwide.png" alt="Robotnik logo" width={200} height={120} />
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4 text-gray-900">Quick Links</h4> {/* Changed text color to text-gray-900 */}
          <ul className="space-y-2">
            <li><Link href="/about" className="text-sm text-gray-600 hover:text-primary transition-colors">About Us</Link></li>
            <li><Link href="/events" className="text-sm text-gray-600 hover:text-primary transition-colors">Events</Link></li>
            <li><Link href="/projects" className="text-sm text-gray-600 hover:text-primary transition-colors">Projects</Link></li>
            <li><Link href="/contact" className="text-sm text-gray-600 hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4 text-gray-900">Våre platformer</h4> {/* Changed text color to text-gray-900 */}
          <div className="flex space-x-4">
            <Link href="https://www.facebook.com/robotniknmbu" className="text-gray-600 hover:text-primary transition-colors">
              <Image src="/facebook.svg" alt="Facebook" width={20} height={20} />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="https://www.instagram.com/robotniknmbu" className="text-gray-600 hover:text-primary transition-colors">
              <Image src="/instagram.svg" alt="Instagram" width={20} height={20} />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="https://www.linkedin.com/company/robotnik-nmbu/" className="text-gray-600 hover:text-primary transition-colors">
              <Image src="/linkedin.svg" alt="LinkedIn" width={20} height={20} />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="https://www.github.com/robotniknmbu" className="text-gray-600 hover:text-primary transition-colors">
              <Image src="/github.svg" alt="GitHub" width={20} height={20} />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        </div>
        <div>
          <Image src="/Thorvald.png" alt="Thorvald logo" width={200} height={120} />
          <Separator className="my-8" />
          <Image src="/Kameleon.png" alt="kameleon logo" width={200} height={120} />
  
          
        </div>
      </div>
      <Separator className="my-8" />
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Robotnik. All rights reserved.
        </p>
        {/* <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="/privacy" className="text-sm text-gray-600 hover:text-primary transition-colors">
            Privacy Policy
          </Link>
        </div> */}
      </div>
    </div>
  </footer>
)

export { Footer }