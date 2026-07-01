import React from "react";
import Link from "next/link";
import Image from "next/image";
import FAQAccordion from "@/components/FAQAccordion";
import NoticeBox from "@/components/NoticeBox";

export const metadata = {
  title: "Room & Accommodation Booking Guide - Shri Mata Vaishno Devi Yatra",
  description: "Official guide on booking rooms, guest houses, and free dormitories managed by the Shrine Board at Katra, Adhkuwari, Sanjichhat, and Bhawan.",
};

export default function RoomBookingPage() {
  const faqItems = [
    {
      question: "Are lockers/cloakrooms available in Shrine Board rooms?",
      answer: "No lockers are inside the dormitories, but standard guest rooms have lock systems. For luggage storage, the Shrine Board provides dedicated free cloakrooms at all main stations.",
    },
    {
      question: "Can I book a room on arrival (spot booking)?",
      answer: "Yes, spot/offline booking is subject to availability and can be checked at the Niharika Complex (Katra) or the Enquiry counters at Adhkuwari and Bhawan. However, rooms are almost always sold out during peak seasons, so online booking is strongly advised.",
    },
    {
      question: "Is blankets and drinking water provided in dormitories?",
      answer: "Yes, the Shrine Board provides clean blankets, mattresses, and purified drinking water facilities free of cost to all dormitory occupants.",
    },
    {
      question: "Can unmarried couples book a room together?",
      answer: "Shrine Board rules permit families and married couples. Proof of marriage or family relationship may be requested at check-in counters.",
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-cream-50 animate-fade-in-up">
      {/* Hero Section */}
      <section className="relative h-[25vh] md:h-[35vh] w-full flex items-center overflow-hidden bg-stone-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/shrineservices/accomodation.jpg"
            alt="Room Booking Banner"
            fill
            priority
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left text-white">
          <span className="text-xs font-bold text-saffron-400 tracking-widest uppercase bg-saffron-950/50 px-3 py-1 rounded-md">
            GUEST HOUSES & DORMITORIES
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight font-display text-gradient-gold mt-2">
            Room Booking Guide
          </h1>
          <p className="max-w-2xl text-xs md:text-sm text-stone-200 mt-1">
            Complete guide to securing clean, budget guest houses and dormitories managed by the Shrine Board.
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
          <span className="text-stone-800">Room Booking</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column - Detailed Content */}
        <div className="lg:col-span-8 space-y-8">
          {/* Summary Table */}
          <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-xs">
            <h3 className="text-lg font-bold text-stone-900 mb-4 font-display">
              Accommodation Rates & Categories
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs md:text-sm text-stone-600 border-collapse">
                <thead>
                  <tr className="border-b border-stone-200 text-stone-400 font-bold">
                    <th className="py-2">Location</th>
                    <th className="py-2">Type</th>
                    <th className="py-2">Price Range</th>
                    <th className="py-2">Locker / Bath</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 font-semibold text-stone-850">
                  <tr>
                    <td className="py-3 text-stone-900 font-bold">Katra Base Camp</td>
                    <td className="py-3">Dormitories / AC Rooms / Suites</td>
                    <td className="py-3 text-saffron-700">₹150 - ₹2,000</td>
                    <td className="py-3">Shared / Private</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-stone-900 font-bold">Adhkuwari (Midpoint)</td>
                    <td className="py-3">Dormitories & Double Rooms</td>
                    <td className="py-3 text-saffron-700">₹150 - ₹1,000</td>
                    <td className="py-3">Shared / Private</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-stone-900 font-bold">Sanjichhat</td>
                    <td className="py-3">Dormitory Beds & Double Rooms</td>
                    <td className="py-3 text-saffron-700">₹150 - ₹800</td>
                    <td className="py-3">Shared</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-stone-900 font-bold">Bhawan (Main Shrine)</td>
                    <td className="py-3">Rooms, Suites, Free Hall Shelter</td>
                    <td className="py-3 text-saffron-700">Free - ₹2,500</td>
                    <td className="py-3">Shared / Private</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Booking Walkthrough */}
          <div className="bg-white border border-stone-200 rounded-3xl p-6 md:p-8 shadow-xs space-y-4">
            <h3 className="text-xl font-bold text-stone-950 font-display border-l-4 border-saffron-500 pl-3">
              How to Book Rooms Online
            </h3>
            <div className="space-y-4 text-stone-650 text-xs sm:text-sm leading-relaxed">
              <p>
                Online accommodation can be booked exactly **60 days in advance** at midnight (12:00 AM IST) on the official Shrine Board portal.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-saffron-100 text-saffron-700 font-bold flex items-center justify-center flex-shrink-0 text-xs mt-0.5">1</div>
                  <div>
                    <strong className="text-stone-900 block mb-0.5">Log In to Portal</strong>
                    Access the official portal and log in using your registered credentials.
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-saffron-100 text-saffron-700 font-bold flex items-center justify-center flex-shrink-0 text-xs mt-0.5">2</div>
                  <div>
                    <strong className="text-stone-900 block mb-0.5">Choose Location & Date</strong>
                    Navigate to "Accommodation", select the location (Katra, Adhkuwari, or Bhawan), select your date, and select the room type.
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-saffron-100 text-saffron-700 font-bold flex items-center justify-center flex-shrink-0 text-xs mt-0.5">3</div>
                  <div>
                    <strong className="text-stone-900 block mb-0.5">Complete Payment & Print Slip</strong>
                    Verify names, make the payment, and print the confirmation voucher. Keep it ready along with the matching ID proofs for check-in.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Verification details */}
          <div className="bg-white border border-stone-200 rounded-3xl p-6 md:p-8 shadow-xs space-y-4">
            <h3 className="text-xl font-bold text-stone-950 font-display">
              Check-In Guidelines & Documents
            </h3>
            <ul className="list-disc list-inside text-stone-650 text-xs sm:text-sm space-y-2 leading-relaxed">
              <li>Printout of the Accommodation Booking Voucher.</li>
              <li>**Matching Original Photo ID Proof** used during the booking (Aadhaar Card, Passport, etc.).</li>
              <li>Check-in is permitted only for the pilgrims whose names are printed on the slip.</li>
            </ul>
          </div>

          {/* Cancellation policy */}
          <div className="bg-white border border-stone-200 rounded-3xl p-6 md:p-8 shadow-xs space-y-4">
            <h3 className="text-xl font-bold text-stone-950 font-display">
              Cancellation & Refund Policy
            </h3>
            <p className="text-stone-650 text-xs sm:text-sm leading-relaxed">
              You can cancel room bookings online up to **48 hours prior** to the check-in time. A cancellation fee of **33%** is deducted. No refund is issued if cancelled within 48 hours of check-in, or in case of a no-show. Refunds are processed back to the original source in 7-10 days.
            </p>
          </div>

          {/* FAQs */}
          <section className="space-y-6">
            <h3 className="text-xl font-bold font-display text-stone-950 border-l-4 border-crimson-700 pl-3">
              Accommodation FAQs
            </h3>
            <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-xs">
              <FAQAccordion items={faqItems} />
            </div>
          </section>
        </div>

        {/* Right Column - Sidebars */}
        <div className="lg:col-span-4 space-y-8">
          {/* Main Guest Houses list */}
          <div className="bg-stone-900 text-white rounded-3xl p-6 shadow-md space-y-4">
            <h4 className="text-lg font-bold font-display text-gradient-gold">
              Popular Guest Houses
            </h4>
            <div className="space-y-3 text-xs">
              <div className="border-l-2 border-saffron-500 pl-3">
                <strong className="block text-stone-200">Niharika Complex (Katra)</strong>
                Budget double rooms, deluxe suites, and dormitories. Near bus stand.
              </div>
              <div className="border-l-2 border-saffron-500 pl-3">
                <strong className="block text-stone-200">Shakti Bhawan (Bhawan)</strong>
                Located near the main temple exit gate. Double rooms.
              </div>
              <div className="border-l-2 border-saffron-500 pl-3">
                <strong className="block text-stone-200">Saraswati Dham (Jammu)</strong>
                Convenient transit lodging near Jammu railway station.
              </div>
            </div>
          </div>

          {/* Note */}
          <NoticeBox type="gold" title="Free Accommodations">
            <p className="text-[11px] leading-relaxed">
              For pilgrims on a budget, the Shrine Board provides free spacious halls at Bhawan and Adhkuwari where you can rest. Clean toilets and free blanket counters are located adjacent to these halls.
            </p>
          </NoticeBox>
        </div>
      </div>

      {/* Redirection Action Button */}
      <section className="bg-stone-50 border-t border-stone-200 py-12 text-center w-full">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-xs font-bold text-stone-500 uppercase tracking-widest block">
            Official Booking Gateway Redirect
          </span>
          <h3 className="text-xl md:text-2xl font-bold font-display text-stone-900">
            Book Guest Rooms & Dormitories Online
          </h3>
          <p className="text-xs md:text-sm text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Ensure a peaceful night's rest at Katra, Adhkuwari, or the Holy Bhawan. Advance online booking is highly recommended.
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
