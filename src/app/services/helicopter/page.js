import React from "react";
import Link from "next/link";
import Image from "next/image";
import FAQAccordion from "@/components/FAQAccordion";
import NoticeBox from "@/components/NoticeBox";

export const metadata = {
  title: "Helicopter Ticket Booking Guide - Shri Mata Vaishno Devi Yatra",
  description: "Official guide on booking helicopter services between Katra and Sanjichhat. Learn about ticket rates, schedules, luggage restrictions, weather delay refund rules, and boarding passes.",
};

export default function HelicopterBookingPage() {
  const faqItems = [
    {
      question: "What happens if my flight is cancelled due to bad weather?",
      answer: "In case of flight cancellation due to poor visibility, high winds, or rain, the operators will stamp your ticket as 'Cancelled due to Weather'. You will receive a 100% full refund automatically back to the original online booking account. No transaction fee is deducted for weather cancellations.",
    },
    {
      question: "Are child ticket rates different?",
      answer: "Infants under the age of 2 years are carried free of cost but must sit on an adult's lap. Children aged 2 years and above are charged at full adult rates and receive an individual seat.",
    },
    {
      question: "What is the baggage limit for helicopter travel?",
      answer: "Pilgrims are permitted only one piece of hand baggage weighing up to 5 kg per passenger. Large suitcases or heavy packages are strictly prohibited inside the cabin due to safety limits.",
    },
    {
      question: "Can I book a one-way ticket online?",
      answer: "Yes, you can book either one-way tickets (Katra to Sanjichhat OR Sanjichhat to Katra) or a roundtrip ticket online, depending on slot availability.",
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-cream-50 animate-fade-in-up">
      {/* Hero Section */}
      <section className="relative h-[25vh] md:h-[35vh] w-full flex items-center overflow-hidden bg-stone-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/shrineservices/travel.jpg"
            alt="Helicopter Booking Banner"
            fill
            priority
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left text-white">
          <span className="text-xs font-bold text-saffron-400 tracking-widest uppercase bg-saffron-950/50 px-3 py-1 rounded-md">
            KATRA - SANJICHHAT ROUTE
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight font-display text-gradient-gold mt-2">
            Helicopter Booking Guide
          </h1>
          <p className="max-w-2xl text-xs md:text-sm text-stone-200 mt-1">
            Official guidelines, pricing structure, weather policies, and walkthrough for Katra-Sanjichhat helicopter flights.
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
          <span className="text-stone-800">Helicopter Booking</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column - Detailed Content */}
        <div className="lg:col-span-8 space-y-8">
          {/* Summary Table */}
          <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-xs">
            <h3 className="text-lg font-bold text-stone-900 mb-4 font-display">
              Flight Details & Pricing
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs md:text-sm">
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-100">
                <span className="block text-stone-400 font-bold mb-1">One-Way Rate</span>
                <span className="font-extrabold text-stone-850 text-saffron-700">₹2,100 / Yatri</span>
              </div>
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-100">
                <span className="block text-stone-400 font-bold mb-1">Roundtrip Rate</span>
                <span className="font-extrabold text-stone-850 text-saffron-700">₹4,200 / Yatri</span>
              </div>
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-100">
                <span className="block text-stone-400 font-bold mb-1">Flight Duration</span>
                <span className="font-extrabold text-stone-850">8 Minutes approx.</span>
              </div>
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-100">
                <span className="block text-stone-400 font-bold mb-1">Advance Booking</span>
                <span className="font-extrabold text-stone-850">60 Days Advance</span>
              </div>
            </div>
          </div>

          {/* Booking Walkthrough */}
          <div className="bg-white border border-stone-200 rounded-3xl p-6 md:p-8 shadow-xs space-y-4">
            <h3 className="text-xl font-bold text-stone-950 font-display border-l-4 border-saffron-500 pl-3">
              How to Secure Helicopter Tickets
            </h3>
            <div className="space-y-4 text-stone-650 text-xs sm:text-sm leading-relaxed">
              <p>
                Two authorized helicopter operators (Global Vectra and Himalayan Heli) manage services on behalf of the Shrine Board. Online tickets open exactly 60 days in advance at 12:00 AM IST.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-saffron-100 text-saffron-700 font-bold flex items-center justify-center flex-shrink-0 text-xs mt-0.5">1</div>
                  <div>
                    <strong className="text-stone-900 block mb-0.5">Log in and Reserve Slots</strong>
                    Access the portal, click "Helicopter Service", select flight direction (Katra-Sanjichhat or Roundtrip), enter names, choose your preferred timing slot, and submit details.
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-saffron-100 text-saffron-700 font-bold flex items-center justify-center flex-shrink-0 text-xs mt-0.5">2</div>
                  <div>
                    <strong className="text-stone-900 block mb-0.5">Print Booking Receipt</strong>
                    Download the confirmation ticket showing the timing slot, reporting heliport, and transaction ID.
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-saffron-100 text-saffron-700 font-bold flex items-center justify-center flex-shrink-0 text-xs mt-0.5">3</div>
                  <div>
                    <strong className="text-stone-900 block mb-0.5">Collect Boarding Pass</strong>
                    Report to the Katra Helipad (located on Udhampur road, 2 km from Katra bus stand) exactly **1 hour prior** to your flight. Submit your receipt, original ID, and undergo weight check to collect your boarding card.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Verification details */}
          <div className="bg-white border border-stone-200 rounded-3xl p-6 md:p-8 shadow-xs space-y-4">
            <h3 className="text-xl font-bold text-stone-950 font-display">
              Required Boarding Documents
            </h3>
            <ul className="list-disc list-inside text-stone-650 text-xs sm:text-sm space-y-2 leading-relaxed">
              <li>Printout of the online helicopter booking ticket voucher.</li>
              <li>**Original Government Photo ID Proof** (Aadhaar Card, Passport, etc.) for each traveler.</li>
              <li>Credit Card / Debit Card copy used for making the payment (as a security check).</li>
              <li>Matching RFID Yatra Card (collected at Katra base checkposts).</li>
            </ul>
          </div>

          {/* Weather Warning */}
          <NoticeBox type="red" title="Weather Cancellation & Priority Rules">
            <p className="text-xs leading-relaxed">
              Helicopter operations are highly dependent on Trikuta mountain weather parameters. If flights are cancelled due to low visibility, passengers are **not shifted to next-day lists**. You must travel by track, and a 100% refund is initiated online. The Shrine Board provides priority VIP entry slips (Darshan passes) at Bhawan for cancelled chopper passengers, helping them bypass general queues.
            </p>
          </NoticeBox>

          {/* Cancellation policy */}
          <div className="bg-white border border-stone-200 rounded-3xl p-6 md:p-8 shadow-xs space-y-4">
            <h3 className="text-xl font-bold text-stone-950 font-display">
              Voluntary Cancellation Policy
            </h3>
            <p className="text-stone-650 text-xs sm:text-sm leading-relaxed">
              Voluntary cancellations done online up to **24 hours prior** to flight timing are refunded after a deduction fee of **50%**. No refunds are permitted within 24 hours of the flight timing.
            </p>
          </div>

          {/* FAQs */}
          <section className="space-y-6">
            <h3 className="text-xl font-bold font-display text-stone-950 border-l-4 border-crimson-700 pl-3">
              Helicopter Booking FAQs
            </h3>
            <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-xs">
              <FAQAccordion items={faqItems} />
            </div>
          </section>
        </div>

        {/* Right Column - Sidebars */}
        <div className="lg:col-span-4 space-y-8">
          {/* Quick Specifications */}
          <div className="bg-stone-900 text-white rounded-3xl p-6 shadow-md space-y-4">
            <h4 className="text-lg font-bold font-display text-gradient-gold">
              Heliport Locations
            </h4>
            <div className="space-y-3 text-xs">
              <div className="border-l-2 border-saffron-500 pl-3">
                <strong className="block text-stone-200">Katra Helipad</strong>
                Near Katra town on Udhampur road. 2 km from base camp.
              </div>
              <div className="border-l-2 border-saffron-500 pl-3">
                <strong className="block text-stone-200">Sanjichhat Helipad</strong>
                At the mountain peak plateau. 2.5 km flat walk to Bhawan.
              </div>
            </div>
          </div>

          {/* Guidelines */}
          <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-xs space-y-4">
            <h4 className="text-lg font-bold text-stone-900 font-display">
              Weight & Luggage Rules
            </h4>
            <div className="space-y-3 text-xs leading-relaxed text-stone-600">
              <p>
                ⚖️ **Individual Weight Limit**: Maximum weight per passenger is capped. Heavy individuals (above 85-90 kg) may be subject to additional weight surcharges or requirements to purchase an extra seat if carrying heavy luggage.
              </p>
              <p>
                ⚖️ **Hand Baggage**: Keep electronics and absolute essentials in a small backpack. No hard cases are permitted.
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
            Book Helicopter Tickets Online
          </h3>
          <p className="text-xs md:text-sm text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Reserve your seats in advance. Make sure to complete the booking only on the official SMVDSB portal.
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
