"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function VisitShrine() {
  const scrollContainerRef = useRef(null);

  const shrineItems = [
    {
      title: "Accommodation",
      desc: "Shrine Board offers Rooms & Dormitories at Jammu, Katra, Bhawan, Adhkuwari and Sanjichhat.",
      actionText: "Reserve Accommodation",
      actionUrl: "https://online.maavaishnodevi.org/#/login",
      guideUrl: "/guides/room-booking",
      statusText: "Active Occupancy",
      statusVal: 85,
      priceRange: "₹150 - ₹2,500",
      image: "/shrineservices/accomodation.jpg",
      icon: (
        <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Yatra Registration",
      desc: "A pilgrim has to get registered for the Yatra & collect RFID based Yatra Access Card.",
      actionText: "Register Online",
      actionUrl: "https://online.maavaishnodevi.org/#/login",
      guideUrl: "/guides/yatra-registration",
      statusText: "RFID Mandate",
      statusVal: 100,
      priceRange: "Free of Cost",
      image: "/shrineservices/yatraregistration.jpg",
      icon: (
        <svg className="w-6 h-6 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.333 0 4 .667 4 2v1H5v-1c0-1.333 2.667-2 4-2z" />
        </svg>
      )
    },
    {
      title: "Travel Services",
      desc: "Pilgrims can travel from Katra to Bhawan or can use facilities of Helicopter or Battery Cars.",
      actionText: "Book Tickets",
      actionUrl: "https://online.maavaishnodevi.org/#/login",
      guideUrl: "/travel/how-to-reach",
      statusText: "Operational Speed",
      statusVal: 75,
      priceRange: "Govt Appr. Rates",
      image: "/shrineservices/travel.jpg",
      icon: (
        <svg className="w-6 h-6 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Poojan Seva",
      desc: "Havan/Poojan is performed daily by the Priests in the Yagyashala with chanting of Mantras.",
      actionText: "Participate in Havan",
      actionUrl: "https://online.maavaishnodevi.org/#/login",
      guideUrl: "/guides/donation",
      statusText: "Daily Rituals",
      statusVal: 90,
      priceRange: "Slot bookings open",
      image: "/shrineservices/poojan.jpg",
      icon: (
        <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Attka Aarti",
      desc: "Aarti is performed twice a day once in the morning and again in the evening in front of the Holy Cave.",
      actionText: "Book Attka Aarti",
      actionUrl: "https://online.maavaishnodevi.org/#/login",
      guideUrl: "/guides/atka-aarti",
      statusText: "Daily Attendance",
      statusVal: 95,
      priceRange: "₹1,000 onwards",
      image: "/shrineservices/aarti.jpg",
      icon: (
        <svg className="w-6 h-6 text-saffron-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707" />
        </svg>
      )
    },
    {
      title: "Bhawan-Bhairo Ropeway",
      desc: "The aerial passenger ropeway from the Bhawan to Bhairon ji temple is fully operational between 9 am to 5 pm.",
      actionText: "Ropeway Tickets",
      actionUrl: "#",
      guideUrl: "/guides/ropeway",
      statusText: "Counter Status",
      statusVal: 100,
      priceRange: "₹100 (Roundtrip)",
      image: "/shrineservices/ropeway.jpg",
      icon: (
        <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    {
      title: "Shardiya Navratra",
      desc: "Shardiya Navaratri is celebrated at the holy cave with majestic flower decorations and direct prayers.",
      actionText: "Festival Schedule",
      actionUrl: "https://www.maavaishnodevi.org/",
      guideUrl: "/about",
      statusText: "Festival Period",
      statusVal: 100,
      priceRange: "Seasonal Darshan",
      image: "/shrineservices/navratra.jpg",
      icon: (
        <svg className="w-6 h-6 text-crimson-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      )
    }
  ];

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth > 768 ? clientWidth / 2.5 : clientWidth * 0.8;
      const scrollTo = direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-stone-50 border-t border-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold text-saffron-600 tracking-widest uppercase bg-saffron-50 px-3.5 py-1.5 rounded-full">
              SHRINE CAUSES & SERVICES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-stone-900 mt-4 tracking-tight">
              Visit Shrine Services
            </h2>
            <p className="text-stone-600 text-sm md:text-base mt-2 max-w-2xl leading-relaxed">
              Explore essential facilities, online portals, and religious services provided by the Board for a comfortable pilgrimage.
            </p>
          </div>

          {/* Slider Arrows */}
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-stone-200 bg-white text-stone-600 flex items-center justify-center hover:bg-saffron-500 hover:text-white hover:border-saffron-500 transition-colors shadow-xs"
              aria-label="Slide Left"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-stone-200 bg-white text-stone-600 flex items-center justify-center hover:bg-saffron-500 hover:text-white hover:border-saffron-500 transition-colors shadow-xs"
              aria-label="Slide Right"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Horizontal Scrolling Slides Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-none pb-6 pt-2"
        >
          {shrineItems.map((item, index) => (
            <div
              key={index}
              className="w-[280px] sm:w-[350px] flex-shrink-0 snap-start bg-white border border-stone-200 rounded-3xl p-6 shadow-xs flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-saffron-400 group"
            >
              <div>
                {/* Header Image Banner with Floating Badges */}
                <div className="h-40 w-full rounded-2xl relative overflow-hidden mb-5 border border-stone-150/70 shadow-xs">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 350px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/45 via-transparent to-stone-900/5"></div>
                  
                  {/* Floating Price Badge */}
                  <div className="absolute top-3 right-3 px-2 py-0.5 bg-white/90 backdrop-blur-xs rounded text-[9px] font-extrabold text-stone-700 tracking-wider shadow-sm uppercase">
                    {item.priceRange}
                  </div>

                  {/* Floating Icon Badge */}
                  <div className="absolute bottom-3 left-3 w-8 h-8 rounded-lg bg-white/95 backdrop-blur-xs flex items-center justify-center shadow-md">
                    {React.cloneElement(item.icon, { 
                      className: "w-4 h-4 " + item.icon.props.className.split(" ").filter(c => !c.startsWith("w-") && !c.startsWith("h-")).join(" ") 
                    })}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-stone-900 mb-2 font-display">
                  {item.title}
                </h3>
                <p className="text-stone-650 text-xs sm:text-sm leading-relaxed mb-4 min-h-[48px]">
                  {item.desc}
                </p>

                {/* Reserve / Booking Text Action */}
                <div className="mb-4">
                  <a
                    href={item.actionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-crimson-700 hover:text-saffron-600 underline tracking-wide uppercase transition-colors"
                  >
                    {item.actionText}{" \u2192"}
                  </a>
                </div>

                {/* Progress status bar */}
                <div className="my-4 pt-2 border-t border-stone-50">
                  <div className="flex justify-between text-[10px] font-bold text-stone-400 mb-1">
                    <span>{item.statusText}</span>
                    <span className="text-saffron-600">{item.statusVal}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-stone-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-saffron-500 rounded-full transition-all duration-500"
                      style={{ width: `${item.statusVal}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Bottom buttons */}
              <div className="grid grid-cols-2 gap-3 mt-4 pt-2">
                <a
                  href="https://www.maavaishnodevi.org/donations.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold rounded-xl transition-all text-center"
                >
                  Donate
                </a>
                <Link
                  href={item.guideUrl}
                  className="py-2.5 px-3 bg-gradient-saffron hover:bg-gradient-gold text-white text-xs font-bold rounded-xl transition-all text-center shadow-xs"
                >
                  View Guide
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
