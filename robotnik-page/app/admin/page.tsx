"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { Calendar, MapPin, DollarSign, Tag, User } from "lucide-react";

interface EventFormData {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: string;
  price: number;
  image: string;
  organizer: string;
  content: string;
}

const initialFormData: EventFormData = {
  title: '',
  description: '',
  date: '',
  time: '',
  location: '',
  category: 'Workshop',
  price: 0,
  image: '/campus.jpg',
  organizer: 'Robotnik',
  content: ''
};

export default function AdminPage() {
  const [formData, setFormData] = useState<EventFormData>(initialFormData);
  const [generatedMarkdown, setGeneratedMarkdown] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generateMarkdown = () => {
    const slug = formData.title
      .toLowerCase()
      .replace(/[æåøä]/g, (c) => ({ 'æ': 'ae', 'å': 'aa', 'ø': 'o', 'ä': 'a' }[c] || c))
      .replace(/[^a-z0-9]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');

    const fileName = `${formData.date}-${slug}.md`;

    const markdown = `---
title: "${formData.title}"
description: "${formData.description}"
date: "${formData.date}"
time: "${formData.time}"
location: "${formData.location}"
category: "${formData.category}"
price: ${formData.price}
image: "${formData.image}"
organizer: "${formData.organizer}"
---

${formData.content || `# ${formData.title}

${formData.description}

## Detaljer

**Dato:** ${new Date(formData.date).toLocaleDateString('no-NO')} kl. ${formData.time}
**Sted:** ${formData.location}
**Pris:** ${formData.price === 0 ? 'Gratis' : `${formData.price} kr`}
**Arrangør:** ${formData.organizer}

## Påmelding

For å melde deg på dette arrangementet, [kontakt oss](mailto:styret@robotnik.no) eller bruk påmeldingsknappen på arrangementssiden.

Vi gleder oss til å se deg!`}`;

    setGeneratedMarkdown(markdown);
    return fileName;
  };

  const handleGenerateMarkdown = () => {
    const fileName = generateMarkdown();
    console.log('Generated file name:', fileName);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedMarkdown);
      alert('Markdown kopiert til utklippstavle!');
    } catch (err) {
      console.error('Kunne ikke kopiere til utklippstavle:', err);
      alert('Kunne ikke kopiere til utklippstavle. Prøv å markere og kopiere teksten manuelt.');
    }
  };

  const downloadMarkdown = () => {
    const slug = formData.title
      .toLowerCase()
      .replace(/[æåøä]/g, (c) => ({ 'æ': 'ae', 'å': 'aa', 'ø': 'o', 'ä': 'a' }[c] || c))
      .replace(/[^a-z0-9]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');

    const fileName = `${formData.date}-${slug}.md`;
    const blob = new Blob([generatedMarkdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isScrolled={true} />
      
      <main className="container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Arrangement Admin
            </h1>
            <p className="text-lg text-gray-600">
              Opprett et nytt arrangement ved å fylle ut skjemaet under. Du kan deretter generere en Markdown-fil som kan legges i content/events mappen.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900">Arrangement detaljer</h2>
              
              <div className="space-y-4">
                {/* Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tittel
                  </label>
                  <Input
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="F.eks. Robotikk Workshop"
                    required
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Kort beskrivelse
                  </label>
                  <Textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="En kort beskrivelse av arrangementet..."
                    rows={3}
                    required
                  />
                </div>

                {/* Date and Time */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="w-4 h-4 inline mr-1" />
                      Dato
                    </label>
                    <Input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tid
                    </label>
                    <Input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MapPin className="w-4 h-4 inline mr-1" />
                    Sted
                  </label>
                  <Input
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="F.eks. Robotikklaben, NMBU"
                    required
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Tag className="w-4 h-4 inline mr-1" />
                    Kategori
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    title="Velg kategori for arrangementet"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="Workshop">Workshop</option>
                    <option value="Bedrift">Bedrift</option>
                    <option value="Sosial">Sosial</option>
                    <option value="Faglig">Faglig</option>
                    <option value="Tur">Tur</option>
                    <option value="Annet">Annet</option>
                  </select>
                </div>

                {/* Price */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <DollarSign className="w-4 h-4 inline mr-1" />
                    Pris (kr)
                  </label>
                  <Input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    min="0"
                    placeholder="0"
                  />
                </div>

                {/* Organizer */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-1" />
                    Arrangør
                  </label>
                  <Input
                    name="organizer"
                    value={formData.organizer}
                    onChange={handleInputChange}
                    placeholder="Robotnik"
                  />
                </div>

                {/* Image */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bilde (sti)
                  </label>
                  <Input
                    name="image"
                    value={formData.image}
                    onChange={handleInputChange}
                    placeholder="/campus.jpg"
                  />
                </div>

                {/* Content */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Detaljert innhold (valgfritt)
                  </label>
                  <Textarea
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                    placeholder="Detaljert beskrivelse av arrangementet i Markdown format..."
                    rows={6}
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Hvis du ikke fyller inn dette feltet, vil det bli generert automatisk basert på de andre feltene.
                  </p>
                </div>

                <Button 
                  onClick={handleGenerateMarkdown}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Generer Markdown
                </Button>
              </div>
            </div>

            {/* Generated Markdown */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900">Generert Markdown</h2>
              
              {generatedMarkdown ? (
                <div>
                  <div className="mb-4">
                    <Button 
                      onClick={copyToClipboard}
                      variant="outline"
                      className="mr-2"
                    >
                      Kopier til utklippstavle
                    </Button>
                    <Button 
                      onClick={downloadMarkdown}
                      className="bg-green-600 hover:bg-green-700 text-white"
                    >
                      Last ned .md fil
                    </Button>
                  </div>
                  
                  <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-auto max-h-96 whitespace-pre-wrap">
                    {generatedMarkdown}
                  </pre>
                  
                  <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h3 className="font-medium text-blue-900 mb-2">Instruksjoner:</h3>
                    <ol className="text-sm text-blue-800 space-y-1">
                      <li>1. Kopier teksten over eller last ned .md filen</li>
                      <li>2. Legg filen i mappen <code className="bg-blue-100 px-1 rounded">content/events/</code></li>
                      <li>3. Arrangementet vil automatisk vises på arrangementer-siden</li>
                    </ol>
                  </div>
                </div>
              ) : (
                <div className="text-center text-gray-500 py-8">
                  <p>Fyll ut skjemaet og klikk &ldquo;Generer Markdown&rdquo; for å se den genererte filen.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
