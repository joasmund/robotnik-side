import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Footer } from "@/components/ui/footer"

// This would typically come from a database or CMS
const blogPosts = [
  {
    id: 1,
    title: "Advancements in Swarm Robotics",
    description: "Exploring the latest developments in swarm robotics and their potential applications.",
    date: "2023-05-15",
    slug: "advancements-in-swarm-robotics"
  },
  {
    id: 2,
    title: "The Role of AI in Modern Robotics",
    description: "How artificial intelligence is shaping the future of robotics and automation.",
    date: "2023-05-22",
    slug: "role-of-ai-in-modern-robotics"
  },
  {
    id: 3,
    title: "Robotics in Healthcare: A New Frontier",
    description: "Examining the growing impact of robotics in healthcare and medical procedures.",
    date: "2023-05-29",
    slug: "robotics-in-healthcare"
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="bg-background/90 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">Robotnik</Link>
          <nav className="space-x-2">
            <Button variant="ghost" asChild><Link href="/about">About</Link></Button>
            <Button variant="ghost" asChild><Link href="/events">Events</Link></Button>
            <Button variant="ghost" asChild><Link href="/projects">Projects</Link></Button>
            <Button variant="ghost" asChild><Link href="/blog">Blog</Link></Button>
            <Button variant="ghost" asChild><Link href="/contact">Contact</Link></Button>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Robotnik Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id}>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{post.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href={`/blog/${post.slug}`}>Read More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}