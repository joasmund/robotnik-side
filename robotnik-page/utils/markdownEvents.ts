import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: string;
  price: number;
  image: string;
  organizer: string;
  content?: string;
}

const eventsDirectory = path.join(process.cwd(), 'content/events');

export async function getAllEvents(): Promise<Event[]> {
  try {
    // Check if the directory exists
    if (!fs.existsSync(eventsDirectory)) {
      console.warn('Events directory does not exist:', eventsDirectory);
      return [];
    }

    const fileNames = fs.readdirSync(eventsDirectory);
    const markdownFiles = fileNames.filter(name => name.endsWith('.md'));

    const allEventsData = await Promise.all(
      markdownFiles.map(async (fileName) => {
        const id = fileName.replace(/\.md$/, '');
        const fullPath = path.join(eventsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Use remark to convert markdown into HTML string
        const processedContent = await remark()
          .use(html)
          .process(matterResult.content);
        const contentHtml = processedContent.toString();

        // Combine the data with the id and content
        return {
          id,
          content: contentHtml,
          ...matterResult.data,
        } as Event;
      })
    );

    // Sort events by date (upcoming first)
    return allEventsData.sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
  } catch (error) {
    console.error('Error reading events:', error);
    return [];
  }
}

export async function getUpcomingEvents(): Promise<Event[]> {
  const allEvents = await getAllEvents();
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set to start of day for comparison

  return allEvents.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate >= today;
  });
}

export async function getPastEvents(): Promise<Event[]> {
  const allEvents = await getAllEvents();
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set to start of day for comparison

  return allEvents.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate < today;
  }).reverse(); // Most recent past events first
}

export async function getEventById(id: string): Promise<Event | null> {
  try {
    const fullPath = path.join(eventsDirectory, `${id}.md`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
      id,
      content: contentHtml,
      ...matterResult.data,
    } as Event;
  } catch (error) {
    console.error('Error reading event:', error);
    return null;
  }
}
