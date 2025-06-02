/* import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"


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
</div> */