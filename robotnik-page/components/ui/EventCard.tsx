import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";


interface Event {
  title: string;
  date: string;
  location: string;
  description: string;
  imagePath?: string;
  imageWidth?: number;
  imageHeight?: number;
}

export const EventCard = ({ event }: { event: Event }) => {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('no-NO', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const formatDescription = (description: string) => {
    return description.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  return (
    <Card className="bg-gray-700 text-gray-100 mb-4 hover:bg-gray-600 transition-colors duration-300">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{event.title}</CardTitle>
        <CardDescription className="text-gray-300">
          <div className="flex items-center gap-2 mt-2">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <MapPin className="w-4 h-4" />
            <span>{event.location}</span>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex items-start gap-4">
        <p className="text-gray-300">{formatDescription(event.description)}</p>
        {event.imagePath && (
          <Image 
            src={event.imagePath} 
            alt={event.title} 
            width={parseInt(event.imageWidth?.toString() || '0')} 
            height={parseInt(event.imageHeight?.toString() || '0')} 
            className="object-cover rounded ml-auto mr-10" 
          />
        )}
      </CardContent>
    </Card>
  );
};

export default EventCard;