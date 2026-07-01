import React from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Official Pilgrim Services & Facilities - Shri Mata Vaishno Devi Yatra",
  description: "Comprehensive directory of pilgrim services, rates, timings, and procedures managed by the Shrine Board. Get information on RFID cards, rooms, helicopter flights, battery cars, ropeways, and pujas.",
};

export default function ServicesPage() {
  const allServices = [
    {
      title: "Yatra RFID Registration",
      desc: "Mandatory RFID based access cards required for crossing the Banganga check post. Issued free of cost.",
      rates: "Free of Cost",
      timings: "24/7 Counters",
      image: "/shrineservices/yatraregistration.jpg",
      guideUrl: "/services/yatra-registration",
      actionText: "Register Online",
      actionUrl: "https://online.maavaishnodevi.org/#/login",
      icon: (
        <svg className="w-5 h-5 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.333 0 4 .667 4 2v1H5v-1c0-1.333 2.667-2 4-2z" />
        </svg>
      )
    },
    {
      title: "Rooms & Accommodations",
      desc: "Shrine Board offers budget-friendly rooms, suites, and free dormitories at Katra, Jammu, Adhkuwari, Sanjichhat, and Bhawan.",
      rates: "₹150 - ₹2,500 / night",
      timings: "Check-in: 10:00 AM",
      image: "/shrineservices/accomodation.jpg",
      guideUrl: "/services/room-booking",
      actionText: "Reserve Rooms",
      actionUrl: "https://online.maavaishnodevi.org/#/login",
      icon: (
        <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Helicopter Booking",
      desc: "A scenic 8-minute flight connecting Katra (Neechli Kheli) to Sanjichhat Plateux. Booking opens 60 days in advance.",
      rates: "₹2,100 (One-way) / Yatri",
      timings: "08:00 AM - 05:00 PM",
      image: "/shrineservices/travel.jpg",
      guideUrl: "/services/helicopter",
      actionText: "Book Flights",
      actionUrl: "https://online.maavaishnodevi.org/#/login",
      icon: (
        <svg className="w-5 h-5 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      )
    },
    {
      title: "Battery Car Service",
      desc: "Eco-friendly battery cars running on the clean track between Adhkuwari and Bhawan for elderly, child, and disabled pilgrims.",
      rates: "₹354 (Katra to Bhawan) / Yatri",
      timings: "24/7 Operations",
      image: "/shrineservices/travel.jpg",
      guideUrl: "/services/battery-car",
      actionText: "Reserve Seats",
      actionUrl: "https://online.maavaishnodevi.org/#/login",
      icon: (
        <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Bhawan-Bhairo Passenger Ropeway",
      desc: "Aerial cable car connecting the main Bhawan area to the high Bhairon Temple in just 3 minutes, bypassing the steep climb.",
      rates: "₹100 (Roundtrip) / Yatri",
      timings: "09:00 AM - 05:00 PM",
      image: "/shrineservices/ropeway.jpg",
      guideUrl: "/services/ropeway",
      actionText: "Counter Bookings Only",
      actionUrl: "#",
      icon: (
        <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    {
      title: "Attka Aarti Seva",
      desc: "Special booking to attend the morning or evening live Aarti ritual performed by priests in front of the Holy Cave.",
      rates: "₹1,000 onwards / person",
      timings: "Morning & Evening Slots",
      image: "/shrineservices/aarti.jpg",
      guideUrl: "/services/atka-aarti",
      actionText: "Book Aarti Slots",
      actionUrl: "https://online.maavaishnodevi.org/#/login",
      icon: (
        <svg className="w-5 h-5 text-saffron-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707" />
        </svg>
      )
    },
    {
      title: "Poojan Seva (Havan)",
      desc: "Participate in Vedic chanting, Havans, and special individual pujas held daily inside the Yagyashala.",
      rates: "Slot bookings open",
      timings: "Daily Slots",
      image: "/shrineservices/poojan.jpg",
      guideUrl: "/services/donation",
      actionText: "Book Pujas",
      actionUrl: "https://online.maavaishnodevi.org/#/login",
      icon: (
        <svg className="w-5 h-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Prasad Seva (Online Delivery)",
      desc: "Purchase and pre-book official Panchmeva and Box Prasad packages to be delivered directly to your doorstep across India.",
      rates: "₹250 onwards / box",
      timings: "Doorstep delivery",
      image: "/shrineservices/poojan.jpg",
      guideUrl: "/services/prasad",
      actionText: "Buy Prasad Box",
      actionUrl: "https://online.maavaishnodevi.org/#/login",
      icon: (
        <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="9" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
        </svg>
      )
    },
    {
      title: "Palki & Pony Services",
      desc: "Authorized horses, ponies, palkis, and manual porters available at Katra, Adhkuwari, and Bhawan for assisted climbing.",
      rates: "Govt Appr. fixed rates",
      timings: "24/7 Availability",
      image: "/shrineservices/travel.jpg",
      guideUrl: "/services/palki-pony",
      actionText: "Official Rate Sheet",
      actionUrl: "https://www.maavaishnodevi.org/heip_rates.aspx",
      icon: (
        <svg className="w-5 h-5 text-stone-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      title: "Pilgrim Donations",
      desc: "Donate online to help fund community free kitchens (Langar Seva) and supporting general welfare infrastructures.",
      rates: "Any voluntary amount",
      timings: "Online Gateway",
      image: "/shrineservices/navratra.jpg",
      guideUrl: "/services/donation",
      actionText: "Donate Now",
      actionUrl: "https://www.maavaishnodevi.org/donations.aspx",
      icon: (
        <svg className="w-5 h-5 text-crimson-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-cream-50 animate-fade-in-up">
      {/* 1. Hero Section */}
      <section className="relative h-[30vh] md:h-[40vh] w-full flex items-center overflow-hidden bg-stone-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/vaishnodevi_hero_bg.png"
            alt="Holy Shrine Trikuta Mountains"
            fill
            priority
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left text-white">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight font-display text-gradient-gold drop-shadow-sm">
            Pilgrim Services & Facilities
          </h1>
          <p className="max-w-2xl text-xs md:text-base text-stone-200 mt-2 font-medium">
            Discover rates, timings, and reservation details for all official facilities managed by the Shrine Board.
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
          <span className="text-stone-800">Services</span>
        </div>
      </div>

      {/* 3. Services Directory Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-4">
          <span className="text-xs font-bold text-saffron-600 tracking-widest uppercase bg-saffron-50 px-3.5 py-1.5 rounded-full">
            FACILITIES DIRECTORY
          </span>
          <h2 className="text-2xl md:text-3xl font-bold font-display text-stone-900 tracking-tight">
            Official Shrine Board Services
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
            All prices and timings listed here are sourced directly from the Shrine Board directives and represent official government-approved parameters.
          </p>
        </div>

        {/* 10 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-stone-200 rounded-3xl p-6 shadow-xs flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-saffron-400 group"
            >
              <div>
                {/* Header Image Banner with Floating Badges */}
                <div className="h-40 w-full rounded-2xl relative overflow-hidden mb-5 border border-stone-150/70 shadow-xs">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 350px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/45 via-transparent to-stone-900/5"></div>
                  
                  {/* Floating Price Badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-0.5 bg-white/90 backdrop-blur-xs rounded text-[9px] font-extrabold text-stone-700 tracking-wider shadow-sm uppercase">
                    {service.rates}
                  </div>

                  {/* Floating Icon Badge */}
                  <div className="absolute bottom-3 left-3 w-8 h-8 rounded-lg bg-white/95 backdrop-blur-xs flex items-center justify-center shadow-md">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2 font-display">
                  {service.title}
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4 min-h-[48px]">
                  {service.desc}
                </p>

                {/* Schedule details */}
                <div className="bg-stone-50 border border-stone-100 rounded-xl p-3 mb-6 space-y-1.5 text-xs text-stone-600 font-medium">
                  <div className="flex justify-between">
                    <span>Timings / Limit:</span>
                    <span className="text-stone-850 font-bold">{service.timings}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Official Rates:</span>
                    <span className="text-saffron-700 font-bold">{service.rates}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <Link
                  href={service.guideUrl}
                  className="py-2.5 px-3 bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold rounded-xl transition-all text-center"
                >
                  View Guide
                </Link>
                {service.actionUrl !== "#" ? (
                  <a
                    href={service.actionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 bg-gradient-saffron hover:bg-gradient-gold text-white text-xs font-bold rounded-xl transition-all text-center shadow-xs"
                  >
                    {service.actionText}
                  </a>
                ) : (
                  <span className="py-2.5 px-3 bg-stone-50 text-stone-400 text-[10px] font-bold rounded-xl text-center border border-dashed border-stone-200 flex items-center justify-center">
                    Offline Counter Only
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 4. Call to Action Banner (Official Redirect) */}
        <section className="bg-gradient-saffron text-white rounded-3xl p-8 md:p-12 shadow-lg relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 mt-12">
          <div className="absolute inset-0 bg-stone-950/10 pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl space-y-3">
            <span className="inline-block bg-crimson-800 text-white text-[10px] uppercase font-extrabold px-3 py-1 rounded-md tracking-wider">
              ⚠️ Official Booking Gateway Warning
            </span>
            <h2 className="text-2xl md:text-3xl font-bold font-display tracking-tight text-white leading-tight">
              Ready to Book Your Official Services?
            </h2>
            <p className="text-stone-100 text-xs md:text-sm leading-relaxed font-medium">
              We are a private informational resource and **do not support online bookings**. All reservations (Helicopter tickets, Room accommodations, Battery cars, and Puja slots) must be completed exclusively on the official portal of the Shrine Board to prevent fraudulent ticketing.
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
      </div>
    </div>
  );
}
