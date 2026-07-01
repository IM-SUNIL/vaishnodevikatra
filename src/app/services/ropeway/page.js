import React from "react";
import Link from "next/link";
import Image from "next/image";
import FAQAccordion from "@/components/FAQAccordion";
import NoticeBox from "@/components/NoticeBox";

export const metadata = {
  title: "Bhawan-Bhairon Passenger Ropeway Guide - Shri Mata Vaishno Devi Yatra",
  description: "Official guide on utilizing the Bhawan-Bhairon Ghati passenger ropeway. Learn about ticket prices, hours of operations, offline ticket counters, safety rules, and boarding times.",
};

export default function RopewayBookingPage() {
  const faqItems = [
    {
      question: "Can I book ropeway tickets online in advance?",
      answer: "No, online booking is NOT available for the passenger ropeway. Tickets can only be purchased in person at the offline computerized ticketing counters located inside the Bhawan ropeway building.",
    },
    {
      question: "What is the ticket validity duration?",
      answer: "A ropeway ticket is valid only for a single roundtrip (Bhawan to Bhairon Ghati and back) and must be utilized within 2 hours from the exact timestamp printed on the ticket receipt.",
    },
    {
      question: "Are there any concessions or child discounts?",
      answer: "Children under the height of 3 feet can travel free of cost when accompanied by parents. All other passengers are charged at the flat rate of ₹100 per person.",
    },
    {
      question: "Is the ropeway operating during rain or bad weather?",
      answer: "Ropeway operations are suspended temporarily during high-speed winds, heavy storms, power disruptions, or path blocks. Service resumes immediately once safety parameters are restored.",
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-cream-50 animate-fade-in-up">
      {/* Hero Section */}
      <section className="relative h-[25vh] md:h-[35vh] w-full flex items-center overflow-hidden bg-stone-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/shrineservices/ropeway.jpg"
            alt="Ropeway Banner"
            fill
            priority
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left text-white">
          <span className="text-xs font-bold text-saffron-400 tracking-widest uppercase bg-saffron-950/50 px-3 py-1 rounded-md">
            BHAWAN - BHAIRON GHATI
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight font-display text-gradient-gold mt-2">
            Bhawan-Bhairon Ropeway Guide
          </h1>
          <p className="max-w-2xl text-xs md:text-sm text-stone-200 mt-1">
            Complete guidelines, ticket rates, computerized counters, and safety specifications for the passenger ropeway.
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
          <span className="text-stone-800">Bhawan-Bhairon Ropeway</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column - Detailed Content */}
        <div className="lg:col-span-8 space-y-8">
          {/* Summary Table */}
          <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-xs">
            <h3 className="text-lg font-bold text-stone-900 mb-4 font-display">
              Ropeway Technical Specifications & Pricing
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs md:text-sm">
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-100">
                <span className="block text-stone-400 font-bold mb-1">Official Fee</span>
                <span className="font-extrabold text-stone-850 text-saffron-700">₹100 (Roundtrip)</span>
              </div>
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-100">
                <span className="block text-stone-400 font-bold mb-1">Ride Duration</span>
                <span className="font-extrabold text-stone-850">3 Minutes</span>
              </div>
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-100">
                <span className="block text-stone-400 font-bold mb-1">Altitude Difference</span>
                <span className="font-extrabold text-stone-850">1,400 ft Gain</span>
              </div>
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-100">
                <span className="block text-stone-400 font-bold mb-1">Cabin Capacity</span>
                <span className="font-extrabold text-stone-850">40 Passengers</span>
              </div>
            </div>
          </div>

          {/* Booking Walkthrough */}
          <div className="bg-white border border-stone-200 rounded-3xl p-6 md:p-8 shadow-xs space-y-4">
            <h3 className="text-xl font-bold text-stone-950 font-display border-l-4 border-saffron-500 pl-3">
              How to Avail the Ropeway Service
            </h3>
            <div className="space-y-4 text-stone-650 text-xs sm:text-sm leading-relaxed">
              <p>
                The passenger ropeway links the main temple area at Bhawan to Bhairon Temple peak. Bypassing the steep 1.5 km climb, it reduces the strenuous 1-hour walk to a comfortable 3-minute ride.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-saffron-100 text-saffron-700 font-bold flex items-center justify-center flex-shrink-0 text-xs mt-0.5">1</div>
                  <div>
                    <strong className="text-stone-900 block mb-0.5">Purchase Tickets in Bhawan</strong>
                    Proceed to the computerized ticket booths located at the Bhawan Ropeway Building (near the queue lines). Pay ₹100 cash or card per person to collect the thermal ticket.
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-saffron-100 text-saffron-700 font-bold flex items-center justify-center flex-shrink-0 text-xs mt-0.5">2</div>
                  <div>
                    <strong className="text-stone-900 block mb-0.5">Queue and Security Checks</strong>
                    Enter the waiting lounge area and undergo scanning before boarding the cabin.
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-saffron-100 text-saffron-700 font-bold flex items-center justify-center flex-shrink-0 text-xs mt-0.5">3</div>
                  <div>
                    <strong className="text-stone-900 block mb-0.5">Bhairon Ghati Arrival</strong>
                    Alight at Bhairon Ghati, pay respects at the Bhairon temple, and return to the boarding terminal within 2 hours to catch your return trip flight back to Bhawan.
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
            <p className="text-stone-650 text-xs sm:text-sm leading-relaxed">
              No photo IDs are required to purchase ropeway tickets. You only need to present your physical **RFID card** (mandatory access tag issued in Katra base) for entry.
            </p>
          </div>

          {/* Safety Warning */}
          <NoticeBox type="gold" title="Locker rules at Bhawan Terminal">
            <p className="text-[11px] leading-relaxed">
              Please note that leather items, mobile phones, and cameras are allowed at Bhairon Temple, but **prohibited inside the main Bhawan Cave**. If you plan to return from Bhairon temple to Katra directly without entering the main Bhawan temple again, you can carry your items. Otherwise, deposit them in lockers before leaving Bhawan.
            </p>
          </NoticeBox>

          {/* FAQs */}
          <section className="space-y-6">
            <h3 className="text-xl font-bold font-display text-stone-950 border-l-4 border-crimson-700 pl-3">
              Ropeway FAQs
            </h3>
            <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-xs">
              <FAQAccordion items={faqItems} />
            </div>
          </section>
        </div>

        {/* Right Column - Sidebars */}
        <div className="lg:col-span-4 space-y-8">
          {/* Operations timing */}
          <div className="bg-stone-900 text-white rounded-3xl p-6 shadow-md space-y-4">
            <h4 className="text-lg font-bold font-display text-gradient-gold">
              Operational Hours
            </h4>
            <div className="space-y-3 text-xs leading-relaxed text-stone-300">
              <p>
                🕒 **Hours**: Daily from **09:00 AM to 05:00 PM**.
              </p>
              <p>
                🕒 **Ticket Sales**: Counters open from 08:30 AM and close by 04:30 PM (or when capacity limits are hit).
              </p>
            </div>
          </div>

          {/* Safety warnings */}
          <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-xs space-y-4">
            <h4 className="text-lg font-bold text-stone-900 font-display">
              Ropeway Safety Rules
            </h4>
            <div className="space-y-3 text-xs leading-relaxed text-stone-600">
              <p>
                ⚠️ **Wait Times**: High demand can result in queue wait times of 45-90 minutes at Bhawan terminal.
              </p>
              <p>
                ⚠️ **Seat limits**: Cabins carry up to 40 standing passengers. Please cooperate with security marshals.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Redirection Action Button */}
      <section className="bg-stone-50 border-t border-stone-200 py-12 text-center w-full">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-xs font-bold text-stone-500 uppercase tracking-widest block">
            Official Portal Redirect
          </span>
          <h3 className="text-xl md:text-2xl font-bold font-display text-stone-900">
            Check Ropeway Guidelines Online
          </h3>
          <p className="text-xs md:text-sm text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Verify counter statuses and general updates regarding ropeway maintenance on the official Shrine Board portal.
          </p>
          <div className="pt-2">
            <a
              href="https://www.maavaishnodevi.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 bg-crimson-700 hover:bg-crimson-850 text-white text-xs font-bold rounded-full shadow-md hover:scale-[1.02] duration-300 uppercase tracking-wider text-center"
            >
              Check on Official Shrine Board Website{" \u2192"}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
