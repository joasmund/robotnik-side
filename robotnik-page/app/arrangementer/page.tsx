import { getUpcomingEvents } from "@/utils/markdownEvents";
import { EventsPageClient } from "./components/EventsPageClient";

export default async function EventsPage() {
  // Fetch events from markdown files
  const events = await getUpcomingEvents();

  return <EventsPageClient events={events} />;
}