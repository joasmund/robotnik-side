
import events from '../data/events.json';
import { Event } from '../types/event';

export function getAllEvents(): Event[] {
  // Sort events by date
  return events.events
    .map(event => ({
      ...event,
      imageUrl: event.imagePath // Assuming imagePath should be mapped to imageUrl
    }))
    .sort((a, b) => 
      new Date(a.date).getTime() - new Date(b.date).getTime()
    );
}

export function getUpcomingEvents(limit?: number): Event[] {
  const now = new Date();
  
  // Filter upcoming events
  const upcomingEvents = getAllEvents().filter(event => 
    new Date(event.date) > now
  );
  
  // Return all or limited number of events
  return limit ? upcomingEvents.slice(0, limit) : upcomingEvents;
}