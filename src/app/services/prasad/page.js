import React from "react";
import Link from "next/link";
import Image from "next/image";
import FAQAccordion from "@/components/FAQAccordion";
import NoticeBox from "@/components/NoticeBox";

export const metadata = {
  title: "Official Prasad Seva Booking Guide - Shri Mata Vaishno Devi Yatra",
  description: "Official guide on booking Vaishno Devi Prasad boxes online. Learn about box categories, pricing, India Post delivery timelines, and counter collections.",
};

export default function PrasadPage() {
  const faqItems = [
    {
      question: "How long does online Prasad delivery take?",
      answer: "The Shrine Board packages and dispatches the Prasad through India Post Speed Post. Delivery generally takes 5 to 7 working days to major cities across India, depending on postal logistics.",
    },
    {
      question: "What are the ingredients inside the official Prasad box?",
      answer: "A standard box contains dry sweets (Panchmeva/Mishri), sacred thread (Mauli), a small silver coin, a picture card of the Pindies, and a packet of herbal incense.",
    },
    {
      question: "Can I collect the booked Prasad directly at Bhawan?",
      answer: "Yes, you can choose the 'Counter Collection' option during online checkout. Present your digital slip at the Prasad distribution center at Bhawan (near the entry queue lobby) to collect your freshly packed box.",
    },
    {
      question: "Can I get home delivery outside India?",
      answer: "Currently, online doorstep delivery is restricted to pin codes within India only. International pilgrims can collect their Prasad at the Bhawan distribution counters.",
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-cream-50 animate-fade-in-up">
      {/* Hero Section */}
      <section className="relative h-[25vh] md:h-[35vh] w-full flex items-center overflow-hidden bg-stone-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/shrineservices/poojan.jpg"
            alt="Prasad Seva Banner"
            fill
            priority
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left text-white">
          <span className="text-xs font-bold text-saffron-400 tracking-widest uppercase bg-saffron-950/50 px-3 py-1 rounded-md">
            MATA PRASAD SEVA
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight font-display text-gradient-gold mt-2">
            Prasad Seva Guide
          </h1>
          <p className="max-w-2xl text-xs md:text-sm text-stone-200 mt-1">
            Official guide on ordering Vaishno Devi gold-sealed box Prasad and setting up online home delivery.
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
          <span className="text-stone-800">Prasad Seva</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column - Detailed Content */}
        <div className="lg:col-span-8 space-y-8">
          {/* Summary Table */}
          <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-xs">
            <h3 className="text-lg font-bold text-stone-900 mb-4 font-display">
              Prasad Box Categories & Rates
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs md:text-sm text-stone-600 border-collapse">
                <thead>
                  <tr className="border-b border-stone-200 text-stone-400 font-bold">
                    <th className="py-2">Box Category</th>
                    <th className="py-2">Online Rates</th>
                    <th className="py-2">Delivery Mode</th>
                    <th className="py-2">Major Contents</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 font-semibold text-stone-850">
                  <tr>
                    <td className="py-3 text-stone-900 font-bold">Standard Box (Category A)</td>
                    <td className="py-3 text-saffron-700">₹250</td>
                    <td className="py-3">India Post / Counter</td>
                    <td className="py-3">Panchmeva, Incense, Incantation Card</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-stone-900 font-bold">Premium Box (Category B)</td>
                    <td className="py-3 text-saffron-700">₹500</td>
                    <td className="py-3">India Post / Counter</td>
                    <td className="py-3">Panchmeva, Silver Coin, Incense, Incantation Card</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-stone-900 font-bold">Deluxe Box (Category C)</td>
                    <td className="py-3 text-saffron-700">₹1,000</td>
                    <td className="py-3">India Post / Counter</td>
                    <td className="py-3">Detailed Puja Thali contents, Gold-wash coin, Panchmeva</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Booking Walkthrough */}
          <div className="bg-white border border-stone-200 rounded-3xl p-6 md:p-8 shadow-xs space-y-4">
            <h3 className="text-xl font-bold text-stone-950 font-display border-l-4 border-saffron-500 pl-3">
              How to Order Prasad Online
            </h3>
            <div className="space-y-4 text-stone-650 text-xs sm:text-sm leading-relaxed">
              <p>
                The Shrine Board dispatches freshly prepared dry Prasad box packages directly from Katra.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-saffron-100 text-saffron-700 font-bold flex items-center justify-center flex-shrink-0 text-xs mt-0.5">1</div>
                  <div>
                    <strong className="text-stone-900 block mb-0.5">Navigate to Prasad Booking</strong>
                    Log in to the official portal, click "Prasad Booking", and choose your preferred box category (A, B, or C).
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-saffron-100 text-saffron-700 font-bold flex items-center justify-center flex-shrink-0 text-xs mt-0.5">2</div>
                  <div>
                    <strong className="text-stone-900 block mb-0.5">Enter Shipping Address</strong>
                    Provide complete delivery addresses within India, including matching pin codes and contact phone numbers.
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-saffron-100 text-saffron-700 font-bold flex items-center justify-center flex-shrink-0 text-xs mt-0.5">3</div>
                  <div>
                    <strong className="text-stone-900 block mb-0.5">Dispatch Tracking</strong>
                    Once the payment is completed, you will receive a tracking link via SMS. The shipment typically leaves Katra within 48 hours.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cancellation policy */}
          <div className="bg-white border border-stone-200 rounded-3xl p-6 md:p-8 shadow-xs space-y-4">
            <h3 className="text-xl font-bold text-stone-950 font-display">
              Cancellation & Return Rules
            </h3>
            <p className="text-stone-650 text-xs sm:text-sm leading-relaxed">
              Due to religious custom and hygiene parameters, online Prasad orders **cannot be cancelled or returned** once the payment transaction is completed. In case of postal transit damages, pilgrims can file a complaint with proof to secure a replacement.
            </p>
          </div>

          {/* FAQs */}
          <section className="space-y-6">
            <h3 className="text-xl font-bold font-display text-stone-950 border-l-4 border-crimson-700 pl-3">
              Prasad Seva FAQs
            </h3>
            <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-xs">
              <FAQAccordion items={faqItems} />
            </div>
          </section>
        </div>

        {/* Right Column - Sidebars */}
        <div className="lg:col-span-4 space-y-8">
          {/* Note */}
          <NoticeBox type="gold" title="Purity Guarantee">
            <p className="text-[11px] leading-relaxed">
              Official Prasad boxes are prepared in sterile, automated facilities under strictly monitored hygiene parameters using high-quality ingredients sourced by the Board. All packages are vacuum-sealed to prevent transit leaks.
            </p>
          </NoticeBox>

          {/* Warnings sidebar */}
          <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-xs space-y-4">
            <h4 className="text-lg font-bold text-stone-900 font-display">
              Warning against Fake Portals
            </h4>
            <div className="space-y-3 text-xs leading-relaxed text-stone-600">
              <p>
                ⚠️ **Beware of Scams**: Several fake websites claim to sell official Vaishno Devi Prasad at double rates. Always confirm the portal URL before ordering.
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
            Order Prasad Online for Home Delivery
          </h3>
          <p className="text-xs md:text-sm text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Get the holy blessings delivered to your doorstep. Make your purchases only on the official Shrine Board portal.
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
