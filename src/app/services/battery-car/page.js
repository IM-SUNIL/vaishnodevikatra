import React from "react";
import Link from "next/link";
import Image from "next/image";
import FAQAccordion from "@/components/FAQAccordion";
import NoticeBox from "@/components/NoticeBox";

export const metadata = {
  title: "Battery Car Booking & Rates Guide - Shri Mata Vaishno Devi Yatra",
  description: "Official guide on booking battery-operated vehicles running between Adhkuwari and Bhawan. Learn about ticket rates, schedules, eligibility, and advance reservations.",
};

export default function BatteryCarPage() {
  const faqItems = [
    {
      question: "Are child tickets required for the battery car?",
      answer: "Children up to the age of 5 years can travel free of cost but must sit on the parent's lap. Children above 5 years require an individual full-fare ticket.",
    },
    {
      question: "Where is the physical booking counter located for spot bookings?",
      answer: "The offline spot booking counters are located at Adhkuwari (near the passenger line entrance) and at Bhawan (near the passenger exit area). Spot tickets are subject to vehicle seat availability.",
    },
    {
      question: "Is the battery car service running during the night?",
      answer: "Yes, the battery car service operates 24 hours a day, 7 days a week, except during heavy rainfall, track maintenance, or path blocks.",
    },
    {
      question: "Can I book tickets online on the spot?",
      answer: "No. Online booking closes 4 days prior to the travel date. On the day of travel, you can only purchase tickets at the offline counters at Adhkuwari or Bhawan.",
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-cream-50 animate-fade-in-up">
      {/* Hero Section */}
      <section className="relative h-[25vh] md:h-[35vh] w-full flex items-center overflow-hidden bg-stone-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/shrineservices/travel.jpg"
            alt="Battery Car Banner"
            fill
            priority
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left text-white">
          <span className="text-xs font-bold text-saffron-400 tracking-widest uppercase bg-saffron-950/50 px-3 py-1 rounded-md">
            ADHKUWARI - BHAWAN TRACK
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight font-display text-gradient-gold mt-2">
            Battery Car Booking Guide
          </h1>
          <p className="max-w-2xl text-xs md:text-sm text-stone-200 mt-1">
            Complete guide to booking eco-friendly battery cars operating on the clean track section of the Vaishno Devi route.
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
          <span className="text-stone-800">Battery Car</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column - Detailed Content */}
        <div className="lg:col-span-8 space-y-8">
          {/* Summary Table */}
          <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-xs">
            <h3 className="text-lg font-bold text-stone-900 mb-4 font-display">
              Route Parameters & Pricing
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs md:text-sm">
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-100">
                <span className="block text-stone-400 font-bold mb-1">Adhkuwari to Bhawan</span>
                <span className="font-extrabold text-stone-850 text-saffron-700">₹354 / Yatri</span>
              </div>
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-100">
                <span className="block text-stone-400 font-bold mb-1">Bhawan to Adhkuwari</span>
                <span className="font-extrabold text-stone-850 text-saffron-700">₹236 / Yatri</span>
              </div>
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-100">
                <span className="block text-stone-400 font-bold mb-1">Distance / Duration</span>
                <span className="font-extrabold text-stone-850">5.5 km / 25 Mins</span>
              </div>
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-100">
                <span className="block text-stone-400 font-bold mb-1">Advance Window</span>
                <span className="font-extrabold text-stone-850">60 Days Advance</span>
              </div>
            </div>
          </div>

          {/* Booking Walkthrough */}
          <div className="bg-white border border-stone-200 rounded-3xl p-6 md:p-8 shadow-xs space-y-4">
            <h3 className="text-xl font-bold text-stone-950 font-display border-l-4 border-saffron-500 pl-3">
              How to Secure Battery Car Tickets
            </h3>
            <div className="space-y-4 text-stone-650 text-xs sm:text-sm leading-relaxed">
              <p>
                Battery cars are operated by the Shrine Board to assist physical climbing. Online tickets are limited and open 60 days in advance.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-saffron-100 text-saffron-700 font-bold flex items-center justify-center flex-shrink-0 text-xs mt-0.5">1</div>
                  <div>
                    <strong className="text-stone-900 block mb-0.5">Online Slots Reservation</strong>
                    Log in to the official portal, click "Battery Car", select date, timing slot, and enter names.
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-saffron-100 text-saffron-700 font-bold flex items-center justify-center flex-shrink-0 text-xs mt-0.5">2</div>
                  <div>
                    <strong className="text-stone-900 block mb-0.5">Offline Quota Check</strong>
                    If online tickets are sold out, a limited spot quota is sold at Adhkuwari or Bhawan counters, issued on a first-come, first-served basis.
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-saffron-100 text-saffron-700 font-bold flex items-center justify-center flex-shrink-0 text-xs mt-0.5">3</div>
                  <div>
                    <strong className="text-stone-900 block mb-0.5">Reporting</strong>
                    Report to the Battery Car boarding point near Adhkuwari temple exit at least **30 minutes prior** to the timing slot printed on the ticket.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Verification details */}
          <div className="bg-white border border-stone-200 rounded-3xl p-6 md:p-8 shadow-xs space-y-4">
            <h3 className="text-xl font-bold text-stone-950 font-display">
              Required Documents
            </h3>
            <ul className="list-disc list-inside text-stone-650 text-xs sm:text-sm space-y-2 leading-relaxed">
              <li>Printout of the online Battery Car reservation receipt.</li>
              <li>**Original Government Photo ID Proof** matching the names on the ticket.</li>
              <li>A matching RFID card collected at Katra checkpoint gates.</li>
            </ul>
          </div>

          {/* Cancellation policy */}
          <div className="bg-white border border-stone-200 rounded-3xl p-6 md:p-8 shadow-xs space-y-4">
            <h3 className="text-xl font-bold text-stone-950 font-display">
              Cancellation & Refund Rules
            </h3>
            <p className="text-stone-650 text-xs sm:text-sm leading-relaxed">
              Cancellations done online up to **48 hours prior** to travel date receive a **70%** refund. No refunds are permitted within 48 hours of travel time. Weather cancellations or technical failures receive a full 100% refund.
            </p>
          </div>

          {/* FAQs */}
          <section className="space-y-6">
            <h3 className="text-xl font-bold font-display text-stone-950 border-l-4 border-crimson-700 pl-3">
              Battery Car FAQs
            </h3>
            <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-xs">
              <FAQAccordion items={faqItems} />
            </div>
          </section>
        </div>

        {/* Right Column - Sidebars */}
        <div className="lg:col-span-4 space-y-8">
          {/* Note */}
          <NoticeBox type="gold" title="Senior Citizen Priority">
            <p className="text-[11px] leading-relaxed">
              Elderly pilgrims (aged 60 and above) are given priority offline counters at Adhkuwari. Please carry a valid age-proof ID card (Aadhaar or Passport) to secure priority boarding spot passes.
            </p>
          </NoticeBox>

          {/* Warnings sidebar */}
          <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-xs space-y-4">
            <h4 className="text-lg font-bold text-stone-900 font-display">
              Important Route Rules
            </h4>
            <div className="space-y-3 text-xs leading-relaxed text-stone-600">
              <p>
                ⚠️ **Route Restriction**: Battery cars operate strictly on the new track (Adhkuwari - Himkoti - Bhawan). They do not run on the old track (via Sanjichhat).
              </p>
              <p>
                ⚠️ **Strict Timings**: Missed time-slots are not adjusted. Please calculate walking times from Katra base (approx. 3-4 hours to Adhkuwari) to arrive on time.
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
            Book Battery Car Tickets Online
          </h3>
          <p className="text-xs md:text-sm text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Avoid strain on the climb. Complete your reservations on the official SMVDSB booking portal.
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
