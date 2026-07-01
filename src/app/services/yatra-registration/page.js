import React from "react";
import Link from "next/link";
import Image from "next/image";
import FAQAccordion from "@/components/FAQAccordion";
import NoticeBox from "@/components/NoticeBox";

export const metadata = {
  title: "Yatra RFID Registration Guide - Shri Mata Vaishno Devi Yatra",
  description: "Official guide on securing the mandatory RFID Yatra Access Card for Shri Mata Vaishno Devi Yatra. Learn about online bookings, offline counter locations in Katra, rules, and timings.",
};

export default function YatraRegistrationPage() {
  const faqItems = [
    {
      question: "Is the RFID card mandatory for children?",
      answer: "Yes, every single pilgrim, including children of all age groups, must register and obtain an individual RFID access card. You cannot cross the security gate at Banganga base camp without it.",
    },
    {
      question: "Can I use a screenshot of the online registration slip as an RFID card?",
      answer: "No. The online registration slip is only a booking confirmation. You must physically present this slip (either printed or on your phone) along with valid government ID proofs at one of the Katra counters to collect your physical RFID card.",
    },
    {
      question: "What should I do if I lose my RFID card during the climb?",
      answer: "If you lose your RFID card on the track, you must immediately report to the nearest Shrine Board assistance booth or police post (located at Banganga, Adhkuwari, Sanjichhat, or Bhawan). A replacement card will be issued after identity verification.",
    },
    {
      question: "Is there any fee for registering offline at Katra counters?",
      answer: "No, RFID registration and card issuance are 100% free of cost, whether you book online in advance or register directly at the offline counters in Katra.",
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-cream-50 animate-fade-in-up">
      {/* Hero Section */}
      <section className="relative h-[25vh] md:h-[35vh] w-full flex items-center overflow-hidden bg-stone-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/shrineservices/yatraregistration.jpg"
            alt="RFID Registration Banner"
            fill
            priority
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left text-white">
          <span className="text-xs font-bold text-saffron-400 tracking-widest uppercase bg-saffron-950/50 px-3 py-1 rounded-md">
            MANDATORY ACCESS PERMIT
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight font-display text-gradient-gold mt-2">
            Yatra RFID Registration Guide
          </h1>
          <p className="max-w-2xl text-xs md:text-sm text-stone-200 mt-1">
            Complete playbook on securing your mandatory physical RFID access card for the Shri Mata Vaishno Devi pilgrimage.
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
          <span className="text-stone-800">Yatra Registration</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column - Detailed Content */}
        <div className="lg:col-span-8 space-y-8">
          {/* Summary Table */}
          <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-xs">
            <h3 className="text-lg font-bold text-stone-900 mb-4 font-display">
              Service Overview & Specifications
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs md:text-sm">
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-100">
                <span className="block text-stone-400 font-bold mb-1">Official Fee</span>
                <span className="font-extrabold text-stone-850 uppercase text-emerald-600">Free of Cost</span>
              </div>
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-100">
                <span className="block text-stone-400 font-bold mb-1">Card Type</span>
                <span className="font-extrabold text-stone-850">Physical RFID Tag</span>
              </div>
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-100">
                <span className="block text-stone-400 font-bold mb-1">Validity</span>
                <span className="font-extrabold text-stone-850">Single Yatra Loop</span>
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
              Step-by-Step Registration Process
            </h3>
            <div className="space-y-4 text-stone-650 text-xs sm:text-sm leading-relaxed">
              <p>
                To control the crowd density on the 12 km track and ensure the safety of all pilgrims, the Shri Mata Vaishno Devi Shrine Board has mandated **RFID (Radio Frequency Identification) cards** in place of the old paper slips.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-saffron-100 text-saffron-700 font-bold flex items-center justify-center flex-shrink-0 text-xs mt-0.5">1</div>
                  <div>
                    <strong className="text-stone-900 block mb-0.5">Online Pre-Registration</strong>
                    Log in to the official Shrine Board booking portal. Navigate to "Yatra Registration", choose your date, enter pilgrim details (Name, Age, Address, Photo ID details), and download the Registration Slip.
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-saffron-100 text-saffron-700 font-bold flex items-center justify-center flex-shrink-0 text-xs mt-0.5">2</div>
                  <div>
                    <strong className="text-stone-900 block mb-0.5">Katra Counter Collection</strong>
                    Upon reaching Katra, proceed to one of the RFID counters. Present your printed/digital online slip along with original photo ID cards. The counter officer will scan your slip and hand over your physical RFID card.
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-saffron-100 text-saffron-700 font-bold flex items-center justify-center flex-shrink-0 text-xs mt-0.5">3</div>
                  <div>
                    <strong className="text-stone-900 block mb-0.5">Check-in at Banganga</strong>
                    The card has an embedded chip. Walk through the automated scanner gates at the Banganga checkpoint to log your yatra commencement.
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
              <li>**Original Photo ID Card** (Aadhaar Card, Voter ID, Passport, Driving License, or Pan Card) for every registering pilgrim.</li>
              <li>A printout or digital screenshot of the online booking reservation voucher.</li>
              <li>For foreign nationals: Valid Passport and visa documents are strictly required.</li>
            </ul>
          </div>

          {/* Rules & Warnings */}
          <NoticeBox type="red" title="Critical Rules and Return Mandate">
            <p className="text-xs leading-relaxed">
              The RFID card is Shrine Board property and **MUST be returned at the checkout counters** (located at the Katra Railway Station, Katra Bus Stand, or Banganga checkpost) immediately upon completion of your descend. Failure to return the card or losing it without notice may attract fines. The card must be worn around the neck at all times.
            </p>
          </NoticeBox>

          {/* FAQs */}
          <section className="space-y-6">
            <h3 className="text-xl font-bold font-display text-stone-950 border-l-4 border-crimson-700 pl-3">
              Yatra Registration FAQs
            </h3>
            <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-xs">
              <FAQAccordion items={faqItems} />
            </div>
          </section>
        </div>

        {/* Right Column - Sidebars */}
        <div className="lg:col-span-4 space-y-8">
          {/* Quick Counter Info */}
          <div className="bg-stone-900 text-white rounded-3xl p-6 shadow-md space-y-4">
            <h4 className="text-lg font-bold font-display text-gradient-gold">
              Offline Counter Locations
            </h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              If you did not book online, you can get registered directly in Katra at:
            </p>
            <div className="space-y-3 text-xs">
              <div className="border-l-2 border-saffron-500 pl-3">
                <strong className="block text-stone-200">Katra Railway Station</strong>
                Open 24 hours. Located at the main lobby area.
              </div>
              <div className="border-l-2 border-saffron-500 pl-3">
                <strong className="block text-stone-200">Central Bus Stand, Katra</strong>
                Open from 05:00 AM to 10:00 PM. Counters 1-4.
              </div>
              <div className="border-l-2 border-saffron-500 pl-3">
                <strong className="block text-stone-200">Niharika Complex</strong>
                Near the main Shrine Board head office.
              </div>
            </div>
          </div>

          {/* Tips sidebar */}
          <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-xs space-y-4">
            <h4 className="text-lg font-bold text-stone-900 font-display">
              Pilgrim Guidelines & Tips
            </h4>
            <div className="space-y-3 text-xs leading-relaxed text-stone-600">
              <p>
                💡 **Register Early**: The online slot allocation opens exactly 60 days in advance. Registering online saves you hours standing in queues at the Katra Railway station.
              </p>
              <p>
                💡 **Wear it Visibly**: Keep the RFID card outside your jacket/apparel so that it can be automatically scanned by track checkpoints.
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
            Book Your Yatra Registration Slot Online
          </h3>
          <p className="text-xs md:text-sm text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Avoid long queues at Katra bus and railway stations. Get registered for free on the official Shrine Board portal.
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
