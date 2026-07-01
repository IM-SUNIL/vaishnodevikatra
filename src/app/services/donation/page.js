import React from "react";
import Link from "next/link";
import Image from "next/image";
import FAQAccordion from "@/components/FAQAccordion";
import NoticeBox from "@/components/NoticeBox";

export const metadata = {
  title: "Official Pilgrim Donation & Pujas Guide - Shri Mata Vaishno Devi Yatra",
  description: "Official guide on booking daily pujas, havans, and donating to general welfare, medical funds, or Langar Seva managed by the Shrine Board. Learn about 80G tax exemptions.",
};

export default function DonationPage() {
  const faqItems = [
    {
      question: "Are donations made to the Shrine Board tax-exempt?",
      answer: "Yes, all donations made to the Shri Mata Vaishno Devi Shrine Board are 100% tax-exempt under Section 80G of the Indian Income Tax Act. A formal tax receipt is generated and emailed immediately after transaction clearance.",
    },
    {
      question: "Can I sponsor a full day of Langar (free kitchen)?",
      answer: "Yes, the Shrine Board permits pilgrims to sponsor Langar Seva (community free kitchens) at Katra, Adhkuwari, Sanjichhat, and Bhawan. You can select specific dates online to sponsor breakfast, lunch, dinner, or a full day's menu.",
    },
    {
      question: "What is the procedure to book an Individual Poojan?",
      answer: "Individual Poojan (Puja performed in the name of a specific pilgrim/family by priests) can be booked online. The Prasad and incantation items are mailed to the pilgrim's home if they cannot attend in person.",
    },
    {
      question: "Can I donate physical materials (grain, blankets, gold)?",
      answer: "Yes, physical donations (like wheat, rice, ghee, clean blankets, or gold/silver ornaments) are accepted at the designated donation counters at Niharika Complex (Katra) and Bhawan. A formal physical valuation receipt is handed over.",
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-cream-50 animate-fade-in-up">
      {/* Hero Section */}
      <section className="relative h-[25vh] md:h-[35vh] w-full flex items-center overflow-hidden bg-stone-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/shrineservices/navratra.jpg"
            alt="Donations Banner"
            fill
            priority
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left text-white">
          <span className="text-xs font-bold text-saffron-400 tracking-widest uppercase bg-saffron-950/50 px-3 py-1 rounded-md">
            CHARITY, HAVAN & PUJA
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight font-display text-gradient-gold mt-2">
            Donation & Poojan Guide
          </h1>
          <p className="max-w-2xl text-xs md:text-sm text-stone-200 mt-1">
            Complete playbook on sponsoring Langar Seva, booking Havans, donating to infrastructure, and claiming 80G tax exemptions.
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
          <span className="text-stone-800">Donation & Pujas</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column - Detailed Content */}
        <div className="lg:col-span-8 space-y-8">
          {/* Summary Table */}
          <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-xs">
            <h3 className="text-lg font-bold text-stone-900 mb-4 font-display">
              Donation & Puja Schemes
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs md:text-sm text-stone-600 border-collapse">
                <thead>
                  <tr className="border-b border-stone-200 text-stone-400 font-bold">
                    <th className="py-2">Scheme Name</th>
                    <th className="py-2">Minimum Contribution</th>
                    <th className="py-2">Tax Exemption</th>
                    <th className="py-2">Pilgrim Benefits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 font-semibold text-stone-850">
                  <tr>
                    <td className="py-3 text-stone-900 font-bold">Langar Seva Sponsorship</td>
                    <td className="py-3 text-saffron-700">₹11,000 onwards</td>
                    <td className="py-3">100% (80G)</td>
                    <td className="py-3">Name displayed on Board during meal service</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-stone-900 font-bold">Daily Havan Poojan Seva</td>
                    <td className="py-3 text-saffron-700">₹2,100 / family</td>
                    <td className="py-3">No (Religious puja)</td>
                    <td className="py-3">Havan entry pass, direct seating, boxed Prasad</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-stone-900 font-bold">General Development Fund</td>
                    <td className="py-3 text-saffron-700">Any Amount (Voluntary)</td>
                    <td className="py-3">100% (80G)</td>
                    <td className="py-3">Direct receipt, contributing to track sanitation</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Booking Walkthrough */}
          <div className="bg-white border border-stone-200 rounded-3xl p-6 md:p-8 shadow-xs space-y-4">
            <h3 className="text-xl font-bold text-stone-950 font-display border-l-4 border-saffron-500 pl-3">
              How to Book Pujas & Donate Online
            </h3>
            <div className="space-y-4 text-stone-650 text-xs sm:text-sm leading-relaxed">
              <p>
                All puja slots and Langar sponsorships are managed directly by the accounts division of the Shrine Board.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-saffron-100 text-saffron-700 font-bold flex items-center justify-center flex-shrink-0 text-xs mt-0.5">1</div>
                  <div>
                    <strong className="text-stone-900 block mb-0.5">Choose Contribution Path</strong>
                    Log in to the official portal. Click "Poojan/Donations". Select either Puja Booking (Havan slots) or Welfare Donations (Langar, General Funds).
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-saffron-100 text-saffron-700 font-bold flex items-center justify-center flex-shrink-0 text-xs mt-0.5">2</div>
                  <div>
                    <strong className="text-stone-900 block mb-0.5">Enter Donor Details</strong>
                    Provide PAN details (mandatory for claiming 80G tax exemptions), donor names, addresses, and select dates.
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-saffron-100 text-saffron-700 font-bold flex items-center justify-center flex-shrink-0 text-xs mt-0.5">3</div>
                  <div>
                    <strong className="text-stone-900 block mb-0.5">Download Receipts</strong>
                    Once the payment succeeds, download your formal 80G certificate receipt or Puja attendance passes.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Verification details */}
          <div className="bg-white border border-stone-200 rounded-3xl p-6 md:p-8 shadow-xs space-y-4">
            <h3 className="text-xl font-bold text-stone-950 font-display">
              Reporting Rules for Poojan Seva
            </h3>
            <p className="text-stone-650 text-xs sm:text-sm leading-relaxed">
              If attending the Havan/Poojan physically at Bhawan, report to the Yagyashala office (near the main entry lobby) at least **1 hour prior** to the assigned slot timing. Pilgrims must wear modest traditional Indian clothes. Leather items are prohibited inside the Yagyashala temple.
            </p>
          </div>

          {/* FAQs */}
          <section className="space-y-6">
            <h3 className="text-xl font-bold font-display text-stone-950 border-l-4 border-crimson-700 pl-3">
              Donation & Pujas FAQs
            </h3>
            <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-xs">
              <FAQAccordion items={faqItems} />
            </div>
          </section>
        </div>

        {/* Right Column - Sidebars */}
        <div className="lg:col-span-4 space-y-8">
          {/* Main accounts details */}
          <div className="bg-stone-900 text-white rounded-3xl p-6 shadow-md space-y-4">
            <h4 className="text-lg font-bold font-display text-gradient-gold">
              Tax Exemption Status
            </h4>
            <div className="space-y-3 text-xs leading-relaxed text-stone-300 border-l-2 border-saffron-500 pl-3">
              <p>
                <strong>Income Tax Act Section 80G</strong>
                All donations to the Shri Mata Vaishno Devi Shrine Board are 100% exempt from income tax deductions. PAN verification is strictly required during the online transaction.
              </p>
            </div>
          </div>

          {/* Guidelines */}
          <NoticeBox type="gold" title="General Charity Funds">
            <p className="text-[11px] leading-relaxed">
              Charity funds are used by the Shrine Board to run medical dispensaries, free transit shelters, clean track drinking water networks, and higher educational colleges (SMVD University) in Katra.
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
            Book Pujas & Donate Online
          </h3>
          <p className="text-xs md:text-sm text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Sponsor Langar Seva, book daily Havan slots, or contribute to pilgrim welfare infrastructures on the official SMVDSB portal.
          </p>
          <div className="pt-2">
            <a
              href="https://www.maavaishnodevi.org/donations.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 bg-crimson-700 hover:bg-crimson-850 text-white text-xs font-bold rounded-full shadow-md hover:scale-[1.02] duration-300 uppercase tracking-wider text-center"
            >
              Donate on Official Shrine Board Website{" \u2192"}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
