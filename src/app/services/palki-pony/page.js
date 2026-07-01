import React from "react";
import Link from "next/link";
import Image from "next/image";
import FAQAccordion from "@/components/FAQAccordion";
import NoticeBox from "@/components/NoticeBox";

export const metadata = {
  title: "Palki, Pony, & Porter Services Guide - Shri Mata Vaishno Devi Yatra",
  description: "Official guide on booking registered ponies, manual palki carriers, and porters (pithus). View fixed government rates, registration rules, and support hotlines.",
};

export default function PalkiPonyPage() {
  const faqItems = [
    {
      question: "Are the pony and palki rates fixed?",
      answer: "Yes, the district administration of Reasi and the Shrine Board strictly fix all rates. No porter, pony wallah, or palki carrier is allowed to charge above these pre-announced rates. Receipts showing the fixed fare are issued at the booking counters.",
    },
    {
      question: "Where can I book pony or palki services?",
      answer: "Authorized booking counters are situated at Banganga (start point), Adhkuwari (midpoint), and Bhawan. You pay the fixed fare at the counter, get a booking card, and are assigned a registered helper.",
    },
    {
      question: "What is the weight limit for a pony/porter?",
      answer: "A porter (pithu) is authorized to carry weights up to 20 kg (typically child luggage or backpacks). Ponies have individual load carrying capacities governed by veterinary safety guidelines.",
    },
    {
      question: "How do I report overcharging or bad behavior?",
      answer: "Note down the registration number printed on the brass token/card of the service provider. Report immediately to the nearest Shrine Board Enforcement/Police post, or call the central helpline at +91-1991-234000.",
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-cream-50 animate-fade-in-up">
      {/* Hero Section */}
      <section className="relative h-[25vh] md:h-[35vh] w-full flex items-center overflow-hidden bg-stone-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/shrineservices/travel.jpg"
            alt="Palki & Pony Banner"
            fill
            priority
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left text-white">
          <span className="text-xs font-bold text-saffron-400 tracking-widest uppercase bg-saffron-950/50 px-3 py-1 rounded-md">
            TRACK SERVICES
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight font-display text-gradient-gold mt-2">
            Palki & Pony Services Guide
          </h1>
          <p className="max-w-2xl text-xs md:text-sm text-stone-200 mt-1">
            Complete details, official fixed price rates, helper registration checks, and support guidelines for track services.
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
          <span className="text-stone-800">Palki & Pony</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column - Detailed Content */}
        <div className="lg:col-span-8 space-y-8">
          {/* Summary Table */}
          <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-xs">
            <h3 className="text-lg font-bold text-stone-900 mb-4 font-display">
              Official Rate Specifications (Katra &harr; Bhawan)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs md:text-sm text-stone-600 border-collapse">
                <thead>
                  <tr className="border-b border-stone-200 text-stone-400 font-bold">
                    <th className="py-2">Service Type</th>
                    <th className="py-2">One-Way (Katra-Bhawan)</th>
                    <th className="py-2">Roundtrip (Katra-Bhawan-Katra)</th>
                    <th className="py-2">Load Capacity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 font-semibold text-stone-850">
                  <tr>
                    <td className="py-3 text-stone-900 font-bold">Porter (Pithu)</td>
                    <td className="py-3 text-saffron-700">₹500 - ₹700</td>
                    <td className="py-3 text-saffron-700">₹1,000 - ₹1,200</td>
                    <td className="py-3">Up to 20 kg</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-stone-900 font-bold">Pony (Horse)</td>
                    <td className="py-3 text-saffron-700">₹1,250</td>
                    <td className="py-3 text-saffron-700">₹2,200</td>
                    <td className="py-3">1 Yatri</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-stone-900 font-bold">Palki (Doli - 4 Persons)</td>
                    <td className="py-3 text-saffron-700">₹4,500</td>
                    <td className="py-3 text-saffron-700">₹8,000</td>
                    <td className="py-3">1 Yatri (Up to 70 kg)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Booking Walkthrough */}
          <div className="bg-white border border-stone-200 rounded-3xl p-6 md:p-8 shadow-xs space-y-4">
            <h3 className="text-xl font-bold text-stone-950 font-display border-l-4 border-saffron-500 pl-3">
              How to Avail Services Safely
            </h3>
            <div className="space-y-4 text-stone-650 text-xs sm:text-sm leading-relaxed">
              <p>
                All track service operators are registered with the Shrine Board and carry a unique computerized identity token.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-saffron-100 text-saffron-700 font-bold flex items-center justify-center flex-shrink-0 text-xs mt-0.5">1</div>
                  <div>
                    <strong className="text-stone-900 block mb-0.5">Proceed to Booking Counter</strong>
                    Report to the official Pony/Palki counter at Banganga (base camp checkpost). Inform them of your destination and weight metrics.
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-saffron-100 text-saffron-700 font-bold flex items-center justify-center flex-shrink-0 text-xs mt-0.5">2</div>
                  <div>
                    <strong className="text-stone-900 block mb-0.5">Pay and Collect Booking Card</strong>
                    Pay the official amount, collect the printed card containing operator details, and matching identification token numbers.
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-saffron-100 text-saffron-700 font-bold flex items-center justify-center flex-shrink-0 text-xs mt-0.5">3</div>
                  <div>
                    <strong className="text-stone-900 block mb-0.5">Cross-Check Identity Tokens</strong>
                    Make sure the registration number printed on the helper's brass card matches the number on your printed booking receipt before commencing the climb.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Verification details */}
          <div className="bg-white border border-stone-200 rounded-3xl p-6 md:p-8 shadow-xs space-y-4">
            <h3 className="text-xl font-bold text-stone-950 font-display">
              Verification & Security Protocols
            </h3>
            <p className="text-stone-650 text-xs sm:text-sm leading-relaxed">
              For safety and emergency tracing, every helper is registered with the GRP (Government Railway Police) and local police stations. You must verify that the operator wears their official color-coded jacket showing their badge. Keep your receipt card safely until the journey ends.
            </p>
          </div>

          {/* FAQs */}
          <section className="space-y-6">
            <h3 className="text-xl font-bold font-display text-stone-950 border-l-4 border-crimson-700 pl-3">
              Palki & Pony FAQs
            </h3>
            <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-xs">
              <FAQAccordion items={faqItems} />
            </div>
          </section>
        </div>

        {/* Right Column - Sidebars */}
        <div className="lg:col-span-4 space-y-8">
          {/* Grievance Cell */}
          <div className="bg-stone-900 text-white rounded-3xl p-6 shadow-md space-y-4">
            <h4 className="text-lg font-bold font-display text-gradient-gold">
              Security & Grievances
            </h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              If an operator demands excess charges or leaves you midway:
            </p>
            <div className="space-y-3 text-xs">
              <div className="border-l-2 border-saffron-500 pl-3">
                <strong className="block text-stone-200">Enforcement Post (Banganga)</strong>
                Located near the checkpost gate.
              </div>
              <div className="border-l-2 border-saffron-500 pl-3">
                <strong className="block text-stone-200">Enforcement Post (Bhawan)</strong>
                Located near the locker terminal.
              </div>
            </div>
          </div>

          {/* Tips sidebar */}
          <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-xs space-y-4">
            <h4 className="text-lg font-bold text-stone-900 font-display">
              Helpful Pilgrim Tips
            </h4>
            <div className="space-y-3 text-xs leading-relaxed text-stone-600">
              <p>
                💡 **Verify Weights**: A doli/palki carries up to 70 kg. Heavy individuals may attract extra fixed weight charges based on the official guidelines card.
              </p>
              <p>
                💡 **Avoid Direct Cash Bargains**: Always book at official counters to ensure safety checks and keep records valid.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Redirection Action Button */}
      <section className="bg-stone-50 border-t border-stone-200 py-12 text-center w-full">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-xs font-bold text-stone-500 uppercase tracking-widest block">
            Official rates check redirect
          </span>
          <h3 className="text-xl md:text-2xl font-bold font-display text-stone-900">
            View Official fixed rates sheet
          </h3>
          <p className="text-xs md:text-sm text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Verify fixed rates for ponies, dolis, and porters directly on the official help portal of the Shrine Board before hiring.
          </p>
          <div className="pt-2">
            <a
              href="https://www.maavaishnodevi.org/heip_rates.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 bg-crimson-700 hover:bg-crimson-850 text-white text-xs font-bold rounded-full shadow-md hover:scale-[1.02] duration-300 uppercase tracking-wider text-center"
            >
              View Rates on Official Shrine Board Website{" \u2192"}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
