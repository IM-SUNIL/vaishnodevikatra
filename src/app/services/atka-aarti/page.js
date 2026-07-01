import React from "react";
import Link from "next/link";
import Image from "next/image";
import FAQAccordion from "@/components/FAQAccordion";
import NoticeBox from "@/components/NoticeBox";

export const metadata = {
  title: "Official Atka Aarti Booking Guide - Shri Mata Vaishno Devi Yatra",
  description: "Official guide on booking Atka Aarti slots at Shri Mata Vaishno Devi Shrine. Learn about booking rates, daily timings, dress code guidelines, and ticket verification.",
};

export default function AtkaAartiPage() {
  const faqItems = [
    {
      question: "Is there a formal dress code for attending the Atka Aarti?",
      answer: "Yes. All attendees must wear traditional modest clothing. Men should wear Kurta-Pyjama or Dhoti-Kurta. Women must wear Sarees, Salwar-Suits, or traditional Indian wear. T-shirts, shorts, jeans, and western outfits are strictly prohibited.",
    },
    {
      question: "What is the age limit for child ticketing at Aarti?",
      answer: "Children up to 3 years can accompany their parents for free but must stay on their lap. Children above 3 years require an individual ticket.",
    },
    {
      question: "Can I cancel my Atka Aarti booking?",
      answer: "Online Aarti tickets can be cancelled up to 48 hours prior to the date. A 30% deduction fee is charged, and refunds take 7 to 10 days.",
    },
    {
      question: "Are mobile phones or cameras allowed during Aarti?",
      answer: "No. Carrying electronics, mobile phones, cameras, or leather bags is strictly banned inside the Aarti area. You must deposit them in the cloakrooms before entering the queue.",
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-cream-50 animate-fade-in-up">
      {/* Hero Section */}
      <section className="relative h-[25vh] md:h-[35vh] w-full flex items-center overflow-hidden bg-stone-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/shrineservices/aarti.jpg"
            alt="Atka Aarti Banner"
            fill
            priority
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left text-white">
          <span className="text-xs font-bold text-saffron-400 tracking-widest uppercase bg-saffron-950/50 px-3 py-1 rounded-md">
            HOLY BHAWAN DAILY SEVA
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight font-display text-gradient-gold mt-2">
            Atka Aarti Guide
          </h1>
          <p className="max-w-2xl text-xs md:text-sm text-stone-200 mt-1">
            Complete playbook on reserving Atka Aarti slots, seating protocols, dress code rules, and reporting schedules.
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-cream-100/50 border-b border-stone-200/50 py-3 text-xs md:text-sm font-semibold text-stone-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
          <Link href="/" className="hover:text-saffron-600 transition-colors">
            Home
          </Link>
          <span className="text-stone-400">/</span>
          <Link href="/services" className="hover:text-saffron-600 transition-colors">
            Services
          </Link>
          <span className="text-stone-400">/</span>
          <span className="text-stone-800">Atka Aarti</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column - Detailed Content */}
        <div className="lg:col-span-8 space-y-8">
          {/* Summary Table */}
          <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-xs">
            <h3 className="text-lg font-bold text-stone-900 mb-4 font-display">
              Aarti Timings & Price Structures
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs md:text-sm">
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-100">
                <span className="block text-stone-400 font-bold mb-1">Morning Timings</span>
                <span className="font-extrabold text-stone-850">06:00 AM - 08:00 AM</span>
              </div>
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-100">
                <span className="block text-stone-400 font-bold mb-1">Evening Timings</span>
                <span className="font-extrabold text-stone-850">07:00 PM - 09:00 PM</span>
              </div>
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-100">
                <span className="block text-stone-400 font-bold mb-1">Official Price</span>
                <span className="font-extrabold text-stone-850 text-saffron-700">₹1,000 / Yatri</span>
              </div>
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-100">
                <span className="block text-stone-400 font-bold mb-1">Booking Window</span>
                <span className="font-extrabold text-stone-850">60 Days Advance</span>
              </div>
            </div>
          </div>

          {/* Booking Walkthrough */}
          <div className="bg-white border border-stone-200 rounded-3xl p-6 md:p-8 shadow-xs space-y-4">
            <h3 className="text-xl font-bold text-stone-950 font-display border-l-4 border-saffron-500 pl-3">
              How to Secure Aarti Slots
            </h3>
            <div className="space-y-4 text-stone-650 text-xs sm:text-sm leading-relaxed">
              <p>
                Atka Aarti is performed in front of the Holy Cave. The seating area (Atka) has limited capacity, and online bookings sell out immediately.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-saffron-100 text-saffron-700 font-bold flex items-center justify-center flex-shrink-0 text-xs mt-0.5">1</div>
                  <div>
                    <strong className="text-stone-900 block mb-0.5">Online Pre-Booking</strong>
                    Log in to the official portal, click "Atka Aarti Booking", choose your slot date, add passenger details, and complete the reservation.
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-saffron-100 text-saffron-700 font-bold flex items-center justify-center flex-shrink-0 text-xs mt-0.5">2</div>
                  <div>
                    <strong className="text-stone-900 block mb-0.5">Report at Kalika Bhawan</strong>
                    On the day of booking, report to the Kalika Bhawan Enquiry counter at Bhawan at least **2 hours before** the Aarti time for pass verification.
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-saffron-100 text-saffron-700 font-bold flex items-center justify-center flex-shrink-0 text-xs mt-0.5">3</div>
                  <div>
                    <strong className="text-stone-900 block mb-0.5">Seating and Entrance</strong>
                    Enter the assigned Atka area. Seating is on a clean, carpeted floor in front of the sanctum sanctorum.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Verification details */}
          <div className="bg-white border border-stone-200 rounded-3xl p-6 md:p-8 shadow-xs space-y-4">
            <h3 className="text-xl font-bold text-stone-950 font-display">
              Required Pass Verification Documents
            </h3>
            <ul className="list-disc list-inside text-stone-650 text-xs sm:text-sm space-y-2 leading-relaxed">
              <li>Printout of the online Atka Aarti confirmation ticket.</li>
              <li>**Original Government Photo ID Card** matching the names on the ticket.</li>
              <li>Matching RFID Yatra Card.</li>
            </ul>
          </div>

          {/* Rules Notice */}
          <NoticeBox type="gold" title="Strict Decorum Rules">
            <p className="text-[11px] leading-relaxed">
              Pilgrims must maintain traditional discipline and remain seated silently inside the Atka enclosure during the entire 2-hour Aarti ritual. Incense burning, chanting slogans, or carrying metal bags inside the temple area is strictly regulated by security marshals.
            </p>
          </NoticeBox>

          {/* FAQs */}
          <section className="space-y-6">
            <h3 className="text-xl font-bold font-display text-stone-950 border-l-4 border-crimson-700 pl-3">
              Atka Aarti FAQs
            </h3>
            <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-xs">
              <FAQAccordion items={faqItems} />
            </div>
          </section>
        </div>

        {/* Right Column - Sidebars */}
        <div className="lg:col-span-4 space-y-8">
          {/* Seating specifications */}
          <div className="bg-stone-900 text-white rounded-3xl p-6 shadow-md space-y-4">
            <h4 className="text-lg font-bold font-display text-gradient-gold">
              Reporting Rules
            </h4>
            <div className="space-y-3 text-xs leading-relaxed text-stone-300">
              <p>
                🕒 **Morning Aarti Reporting**: 04:30 AM at Kalika Bhawan.
              </p>
              <p>
                🕒 **Evening Aarti Reporting**: 05:30 PM at Kalika Bhawan.
              </p>
            </div>
          </div>

          {/* Note */}
          <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-xs space-y-4">
            <h4 className="text-lg font-bold text-stone-900 font-display">
              Seating Policy
            </h4>
            <div className="space-y-3 text-xs leading-relaxed text-stone-600">
              <p>
                🧘 **Floor Seating**: Seating is strictly on a carpeted floor in cross-legged positions. Elderly pilgrims with severe back issues can consult assistance officers for chair arrangements.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Redirection Action Button */}
      <section className="bg-stone-50 border-t border-stone-200 py-12 text-center w-full">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-xs font-bold text-stone-500 uppercase tracking-widest block">
            Official Booking Gateway Redirect
          </span>
          <h3 className="text-xl md:text-2xl font-bold font-display text-stone-900">
            Book Atka Aarti Slots Online
          </h3>
          <p className="text-xs md:text-sm text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Secure your presence during the divine morning or evening prayers. Book early on the official SMVDSB portal.
          </p>
          <div className="pt-2">
            <a
              href="https://online.maavaishnodevi.org/#/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 bg-crimson-700 hover:bg-crimson-850 text-white text-xs font-bold rounded-full shadow-md hover:scale-[1.02] duration-300 uppercase tracking-wider text-center"
            >
              Book on Official Shrine Board Website{" \u2192"}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
