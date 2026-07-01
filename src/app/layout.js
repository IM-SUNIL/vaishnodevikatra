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
  title: "Shri Mata Vaishno Devi Yatra - Complete Informational & Guidance Portal",
  description: "A premium official guidance portal for Shri Mata Vaishno Devi Yatris. Get comprehensive guides on Yatra RFID registration, room booking, helicopter rides, battery cars, ropeways, palkis, and prasad. Plan your holy yatra from Katra to Bhawan with verified details.",
  keywords: "Vaishno Devi, Vaishno Devi Yatra, Katra, Helicopter Booking, Room Booking SMVD, Battery Car Katra, Ropeway ticket Bhawan, Yatra RFID card, Vaishno Devi Guide, Palki SMVD, Prasad Bhawan",
  authors: [{ name: "Vaishno Devi Yatra Guide Portal" }],
  openGraph: {
    title: "Shri Mata Vaishno Devi Yatra - Complete Informational & Guidance Portal",
    description: "Plan your divine journey to Shri Mata Vaishno Devi Shrine with step-by-step guides, timings, prices, FAQs, and tips.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${cinzel.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-cream-50 font-sans text-stone-800">
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
