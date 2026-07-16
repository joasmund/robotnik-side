import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Robotnik NMBU | Linjeforeningen for Anvendt Robotikk",
    template: "%s | Robotnik NMBU",
  },
  description:
    "Linjeforeningen for anvendt robotikk ved NMBU. Vi arrangerer workshops, bedriftspresentasjoner og sosiale arrangementer for robotikkstudenter.",
  openGraph: {
    title: "Robotnik NMBU",
    description:
      "Linjeforeningen for anvendt robotikk ved NMBU",
    siteName: "Robotnik NMBU",
    locale: "nb_NO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
