import { Outfit, Cinzel } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Vaishno Devi Yatra Guide | Katra, Mausam, Height, Distance, Parchi",
    template: "%s | Vaishno Devi Yatra Guide",
  },
  description:
    "Complete guide for Shri Mata Vaishno Devi Yatra from Katra. Vaishno Devi ki chadhai 12 km, Bhawan height 5200 ft (1584 m) sea level. Get yatra parchi (RFID), check katra weather & mausam, helicopter booking, room booking, trek distance, train info, and more.",
  keywords: [
    // Brand / General
    "vaishno devi", "vaishno", "vaishno mata", "mata vaishno devi", "vaishno devi mata",
    "maa vaishno devi", "man vaishno devi", "shri mata vaishno devi", "shri vaishno devi",
    "vaishnodevi", "vaisno devi", "veshno devi", "vashno devi", "veshnodevi",
    // Hindi
    "वैष्णो देवी", "माता वैष्णो देवी", "वैष्णो देवी मंदिर", "वैष्णो देवी",
    // Location
    "katra", "vaishno devi katra", "katra vaishno devi", "mata vaishno devi katra",
    "vaishno devi mandir", "vaishno devi temple", "vaishno devi temple jammu kashmir",
    "vaishno devi mandir kahan hai", "vaishno devi kahan hai", "vaishno mata mandir",
    "vaishno devi shrine", "vaishno devi bhawan", "shri mata vaishno devi katra",
    "mata vaishno devi shrine", "mata vaishno devi shrine board",
    // Weather / Temperature / Mausam
    "vaishno devi weather", "weather vaishno devi", "vaishno devi temperature",
    "vaishno devi ka temperature", "vaishno devi ka mausam", "katra weather",
    "vaishno devi katra weather", "katra vaishno devi weather", "weather katra vaishno devi",
    "vaishnodevi weather", "vaishno devi best time to visit", "best time to visit vaishno devi",
    // Distance / Trek
    "vaishno devi distance", "katra to vaishno devi", "katra to vaishno devi distance",
    "vaishno devi ki chadhai kitne kilometre hai", "vaishno devi ki chadhai kitni hai",
    "vaishno devi distance walk from katra", "vaishno devi trek", "vaishno devi track",
    "vaishno devi ki chadhai kitne kilometre ki hai",
    // Height / Altitude
    "vaishno devi height", "vaishno devi height from sea level", "vaishno devi altitude",
    // Yatra / Parchi / Registration
    "vaishno devi yatra", "vaishno devi yatra parchi", "yatra parchi vaishno devi",
    "vaishno devi yatra update", "vaishno devi yatra parchi online",
    // Transport / Train
    "vaishno devi train", "vaishno devi train ticket", "delhi to vaishno devi",
    "jaipur to vaishno devi distance", "vaishno devi booking",
    // Services
    "vaishno devi helicopter", "helicopter vaishno devi", "vaishno devi shrine board",
    "shrine board vaishno devi", "shrine board", "vaishnodevi shrine board",
    "vaishno devi aarti", "vaishno devi live", "ropeway vaishno devi",
  ],
  authors: [{ name: "Vaishno Devi Yatra Guide Portal" }],
  openGraph: {
    title: "Vaishno Devi Yatra Guide | Katra Weather, Height, Trek Distance, Parchi",
    description:
      "Complete Vaishno Devi Yatra guide — katra mausam, vaishno devi height 5200 ft, 12 km trek distance, yatra parchi (RFID), helicopter & room booking.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaishno Devi Yatra Guide | Katra, Mausam, Height, Distance, Parchi",
    description: "Complete guide for Shri Mata Vaishno Devi Yatra. Weather, trek distance, height, yatra parchi, helicopter booking and more.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function RootLayout({ children }) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Vaishno Devi Yatra Guide",
      "alternateName": ["Vaishno Devi Guide", "Katra Vaishno Devi Portal", "Shri Mata Vaishno Devi Yatra Guide"],
      "url": "https://www.vaishnodevikatra.in",
      "description": "Complete guide for Shri Mata Vaishno Devi Yatra — weather, distance, height, yatra parchi, helicopter booking, train info and more.",
      "inLanguage": ["en-IN", "hi-IN"],
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.vaishnodevikatra.in/faq#{search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Vaishno Devi Yatra Guide Portal",
      "url": "https://www.vaishnodevikatra.in",
      "logo": "https://www.vaishnodevikatra.in/finallogo.png",
      "sameAs": [
        "https://www.instagram.com/vaishnodevikatra",
        "https://youtube.com/@vaishnodevikatra"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "TouristDestination",
      "name": "Shri Mata Vaishno Devi Shrine",
      "alternateName": ["Vaishno Devi", "Vaishno Devi Mandir", "Mata Vaishno Devi Temple", "वैष्णो देवी मंदिर"],
      "description": "Holy cave shrine of Mata Vaishno Devi located at 5200 ft altitude in Trikuta Mountains, Katra, Reasi, Jammu & Kashmir. Trek distance from Katra is 12 km.",
      "geo": { "@type": "GeoCoordinates", "latitude": 32.9938, "longitude": 74.9513 },
      "touristType": ["Pilgrim", "Religious Tourist"],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Katra",
        "addressRegion": "Jammu & Kashmir",
        "postalCode": "182301",
        "addressCountry": "IN"
      }
    }
  ];

  return (
    <html lang="en" className={`${outfit.variable} ${cinzel.variable} h-full antialiased`}>
      <head>
        {/* Google AdSense Verification Script */}
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6304710753279952"
          crossOrigin="anonymous"
        ></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-cream-50 font-sans text-stone-800">
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
