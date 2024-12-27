import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

const Footer = () => (
  <footer className="bg-background border-t">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Robotnik</h3>
          <p className="text-sm text-muted-foreground">
            Shaping the future of robotics through innovation and education.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
            <li><Link href="/events" className="text-sm text-muted-foreground hover:text-primary transition-colors">Events</Link></li>
            <li><Link href="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">Projects</Link></li>
            <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Våre platformer</h4>
          <div className="flex space-x-4">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Image src="/facebook.svg" alt="Facebook" width={20} height={20} />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Image src="/instagram.svg" alt="Instagram" width={20} height={20} />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Image src="/linkedin.svg" alt="LinkedIn" width={20} height={20} />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Image src="/github.svg" alt="GitHub" width={20} height={20} />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Subscribe to Our Newsletter</h4>
          <form className="space-y-2">
            <Input type="email" placeholder="Enter your email" />
            <Button type="submit" className="w-full">Subscribe</Button>
          </form>
        </div>
      </div>
      <Separator className="my-8" />
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Robotnik. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  </footer>
)

export { Footer }