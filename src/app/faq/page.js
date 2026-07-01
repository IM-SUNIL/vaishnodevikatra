import React from "react";
import Link from "next/link";
import Image from "next/image";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata = {
  title: "Frequently Asked Questions (FAQ) - Shri Mata Vaishno Devi Yatra",
  description: "Get answers to all your queries regarding the Shri Mata Vaishno Devi Yatra. Learn about RFID cards, helicopter ticket bookings, room reservations, locker systems, and code of conduct rules.",
};

export default function FAQPage() {
  const generalFaqs = [
    {
      question: "Is the RFID card mandatory, and where can I collect it?",
      answer: "Yes, the RFID card is 150% mandatory for all pilgrims and must be carried visibly around the neck at all times. It is issued free of cost at the Katra Railway Station, Katra Bus Stand, and other designated counters. You cannot cross the security checkpoints at Banganga without it.",
    },
    {
      question: "What is the best time of year to visit the Shrine?",
      answer: "The temple is open 24/7 year-round. However, the best months are from March to July (pleasant weather) and September to November (autumn and festive Navratri seasons). Winter months (December to February) can be very cold, with occasional snowfall at the peak.",
    },
    {
      question: "How long does it take to climb the yatra track?",
      answer: "The 12 km walk from Katra to Bhawan usually takes between 4 to 6 hours for a healthy adult. If you continue up the steep 1.5 km track to the Bhairon temple, it adds another 45 to 60 minutes. Porters, horses, palkis, and helicopters are available to reduce travel time.",
    }
  ];

  const bookingFaqs = [
    {
      question: "Can I book helicopter or room tickets directly on this website?",
      answer: "No, this website is strictly informational. We do not support online bookings, transactions, or reservation desks. All bookings (Helicopter tickets, Room accommodations, Battery cars, and Puja slots) must be completed exclusively on the official Shri Mata Vaishno Devi Shrine Board portal (maavaishnodevi.org).",
    },
    {
      question: "How many days in advance should I book room and helicopter slots?",
      answer: "Online booking windows open exactly 60 days in advance at midnight on the official Shrine Board portal. Due to heavy demand, helicopter tickets, Atka Aarti slots, and room bookings across Katra and Bhawan sell out almost immediately. It is highly recommended to log in and book early.",
    },
    {
      question: "What is the cancellation policy for official bookings?",
      answer: "Shrine Board rules permit cancellations up to 48 hours before the scheduled booking time. A deduction fee (usually 30%) is applied, and the remaining amount is refunded to the original payment source within 7-10 working days.",
    }
  ];

  const facilitiesFaqs = [
    {
      question: "Are there free locker/cloakroom facilities available at Bhawan?",
      answer: "Yes, the Shrine Board provides free cloakrooms/locker facilities at Bhawan, Adhkuwari, and Katra. You must deposit your leather items, belts, mobile phones, cameras, and bags, which are strictly prohibited inside the Holy Cave. Keep your locker key safely attached to your wrist.",
    },
    {
      question: "Who is eligible to use the Battery Car service?",
      answer: "The battery-operated vehicles run between Adhkuwari and Bhawan (and vice-versa). Priority is given to elderly, disabled, and child pilgrims. Online tickets are limited; counter bookings are available at Adhkuwari subject to availability.",
    },
    {
      question: "Are there food and medical facilities along the track?",
      answer: "Yes, the Shrine Board runs multiple non-profit Bhojnalayas (eateries) serving pure vegetarian food at nominal rates, alongside private refreshment stalls. There are also fully staffed medical first-aid centers at Banganga, Adhkuwari, Sanjichhat, and Bhawan operating 24/7.",
    }
  ];

  const rulesFaqs = [
    {
      question: "Is there a formal dress code for entering the Holy Cave?",
      answer: "While there is no formal uniform, pilgrims are expected to dress modestly and respectfully in traditional Indian attire (sarees, suits, kurtas). Western clothes like shorts, tank tops, or revealing outfits are strictly prohibited inside the sanctum sanctorum.",
    },
    {
      question: "Can I bring my mobile phone inside the temple?",
      answer: "You can carry your phone up to the Bhawan area, but you cannot bring it inside the Holy Cave or the temple queue lines. All phones, cameras, smartwatches, and leather goods must be deposited in the cloakroom lockers before entering the queue.",
    },
    {
      question: "Is alcohol or non-vegetarian food allowed in Katra or on the track?",
      answer: "No, Katra is a holy town. Possession, consumption, or sale of alcohol, tobacco, and non-vegetarian food (including onions and garlic in most areas) is strictly banned by law in Katra, on the entire yatra track, and around the Bhawan.",
    }
  ];

  const relatedGuides = [
    {
      title: "RFID Registration",
      desc: "Get details on where and how to collect your mandatory RFID card.",
      url: "/services/yatra-registration"
    },
    {
      title: "Accommodation Booking",
      desc: "Learn about the rooms and dormitories available along the yatra route.",
      url: "/services/room-booking"
    },
    {
      title: "Helicopter Booking",
      desc: "Learn about chopper ticket pricing, rules, and flight schedules.",
      url: "/services/helicopter"
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-cream-50 animate-fade-in-up">
      {/* 1. Hero Section */}
      <section className="relative h-[30vh] md:h-[40vh] w-full flex items-center overflow-hidden bg-stone-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/vaishnodevi_hero_bg.png"
            alt="Holy Trikuta Hills"
            fill
            priority
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left text-white">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight font-display text-gradient-gold drop-shadow-sm">
            Yatra Help & FAQ Center
          </h1>
          <p className="max-w-2xl text-xs md:text-base text-stone-200 mt-2 font-medium">
            Clear, detailed answers regarding RFID cards, online bookings, schedules, and pilgrim guidelines.
          </p>
        </div>
      </section>

      {/* 2. Breadcrumbs */}
      <div className="bg-cream-100/50 border-b border-stone-200/50 py-3 text-xs md:text-sm font-semibold text-stone-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
          <Link href="/" className="hover:text-saffron-600 transition-colors">
            Home
          </Link>
          <span className="text-stone-400">/</span>
          <span className="text-stone-800">FAQ</span>
        </div>
      </div>

      {/* 3. FAQ Content Area */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full space-y-12">
        {/* Category 1: General Yatra Queries */}
        <section className="space-y-6">
          <h2 className="text-xl md:text-2xl font-bold font-display text-stone-900 border-l-4 border-saffron-500 pl-4">
            General Yatra Inquiries
          </h2>
          <FAQAccordion items={generalFaqs} />
        </section>

        {/* Category 2: Reservation & Booking Queries */}
        <section className="space-y-6">
          <h2 className="text-xl md:text-2xl font-bold font-display text-stone-900 border-l-4 border-saffron-500 pl-4">
            Online Bookings & Reservations
          </h2>
          <FAQAccordion items={bookingFaqs} />
        </section>

        {/* Category 3: Facilities & Amenities */}
        <section className="space-y-6">
          <h2 className="text-xl md:text-2xl font-bold font-display text-stone-900 border-l-4 border-saffron-500 pl-4">
            Track Facilities & Logistics
          </h2>
          <FAQAccordion items={facilitiesFaqs} />
        </section>

        {/* Category 4: Rules & Regulations */}
        <section className="space-y-6">
          <h2 className="text-xl md:text-2xl font-bold font-display text-stone-900 border-l-4 border-saffron-500 pl-4">
            Temple Rules & Code of Conduct
          </h2>
          <FAQAccordion items={rulesFaqs} />
        </section>

        {/* Call to Action (Official Redirection) */}
        <section className="bg-gradient-saffron text-white rounded-3xl p-8 md:p-12 shadow-lg relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 mt-12">
          <div className="absolute inset-0 bg-stone-950/10 pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl space-y-3">
            <span className="inline-block bg-crimson-800 text-white text-[10px] uppercase font-extrabold px-3 py-1 rounded-md tracking-wider">
              ⚠️ Official Booking Gateway Warning
            </span>
            <h2 className="text-2xl md:text-3xl font-bold font-display tracking-tight text-white leading-tight">
              Avoid Ticket Fraud & Scams
            </h2>
            <p className="text-stone-100 text-xs md:text-sm leading-relaxed font-medium">
              Always book helicopter flights, battery car passes, Atka Aarti seats, and rooms strictly through the official Shrine Board portals. Never purchase tickets from unofficial agents or random website links.
            </p>
          </div>

          <div className="relative z-10 w-full lg:w-auto flex-shrink-0">
            <a
              href="https://www.maavaishnodevi.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full lg:w-auto inline-flex items-center justify-center bg-white text-saffron-700 hover:bg-gold-50 text-xs md:text-sm font-extrabold px-6 py-3.5 rounded-full shadow-md hover:scale-[1.02] duration-300 transition-all uppercase tracking-wider text-center"
            >
              Book on Official Shrine Board Website{" \u2192"}
            </a>
          </div>
        </section>

        {/* Related Guides Section */}
        <section className="border-t border-stone-250/50 pt-16 mt-16">
          <h3 className="text-lg font-bold text-stone-900 mb-8 font-display">
            Plan Your Journey: Essential Guides
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedGuides.map((guide, idx) => (
              <div
                key={idx}
                className="bg-white border border-stone-200 p-6 rounded-2xl shadow-xs flex flex-col justify-between hover:border-saffron-400 transition-all group"
              >
                <div>
                  <h4 className="text-lg font-bold text-stone-900 mb-2 font-display">
                    {guide.title}
                  </h4>
                  <p className="text-stone-650 text-xs sm:text-sm leading-relaxed mb-4">
                    {guide.desc}
                  </p>
                </div>
                <Link
                  href={guide.url}
                  className="text-xs font-bold text-saffron-600 group-hover:text-crimson-700 transition-colors uppercase tracking-wider flex items-center gap-1"
                >
                  Read Guide{" \u2192"}
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
