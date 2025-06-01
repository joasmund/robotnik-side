import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, DollarSign } from "lucide-react"
import Image from "next/image"

interface Event {
  id: string
  title: string
  description: string
  date: string
  time: string
  location: string
  category: string
  price: number
  image: string
  attendees: number
  maxAttendees: number
  organizer: string
}

interface EventCardProps {
  event: Event
}

export function EventCard({ event }: EventCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  const formatTime = (timeString: string) => {
    const [hours, minutes] = timeString.split(":")
    const date = new Date()
    date.setHours(Number.parseInt(hours), Number.parseInt(minutes))
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
  }

  const attendancePercentage = (event.attendees / event.maxAttendees) * 100

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <Image
          src={event.image || "/placeholder.svg"}
          alt={event.title}
          width={400}
          height={200}
          className="w-full h-48 object-cover"
        />
        <Badge className="absolute top-3 left-3" variant="secondary">
          {event.category}
        </Badge>
        {event.price === 0 && <Badge className="absolute top-3 right-3 bg-green-500 hover:bg-green-600">Free</Badge>}
      </div>

      <CardHeader className="pb-3">
        <h3 className="font-semibold text-lg line-clamp-2 leading-tight">{event.title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{event.description}</p>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="flex items-center gap-2 text-sm">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span>{formatDate(event.date)}</span>
          <Clock className="h-4 w-4 text-muted-foreground ml-2" />
          <span>{formatTime(event.time)}</span>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <MapPin className="h-4 w-4 text-muted-foreground" />
          <span className="line-clamp-1">{event.location}</span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span>
              {event.attendees}/{event.maxAttendees} attending
            </span>
          </div>
          {event.price > 0 && (
            <div className="flex items-center gap-1 font-semibold">
              <DollarSign className="h-4 w-4" />
              <span>{event.price}</span>
            </div>
          )}
        </div>

        {/* Attendance progress bar */}
        <div className="w-full bg-muted rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${Math.min(attendancePercentage, 100)}%` }}
          />
        </div>

        <p className="text-xs text-muted-foreground">Organized by {event.organizer}</p>
      </CardContent>

      <CardFooter className="pt-3">
        <Button className="w-full">{event.price === 0 ? "Register Free" : "Buy Ticket"}</Button>
      </CardFooter>
    </Card>
  )
}
