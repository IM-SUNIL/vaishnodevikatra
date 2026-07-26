import React from "react";
import Image from "next/image";
import Link from "next/link";
import NoticeBox from "@/components/NoticeBox";
import Timeline from "@/components/Timeline";
import HeroSlider from "@/components/HeroSlider";
import YoutubePopup from "@/components/YoutubePopup";
import fs from "fs";
import path from "path";

export const metadata = {
  title: "Vaishno Devi Yatra Guide — Katra, Mausam, Height, Trek Distance & Parchi",
  description:
    "Shri Mata Vaishno Devi Yatra complete guide. Vaishno Devi ki chadhai 12 km, height 5200 ft (1584 m) from sea level. Check Katra ka mausam, get yatra parchi (RFID), helicopter booking, train, room booking, trek route. Mandir location: Katra, Reasi, J&K.",
  keywords: [
    "vaishno devi", "vaishno", "mata vaishno devi", "man vaishno devi", "vaishno mata",
    "vaishno devi yatra", "vaishno devi ki chadhai kitne kilometre hai",
    "vaishno devi height from sea level", "vaishno devi altitude", "vaishno devi height",
    "vaishno devi ka mausam", "vaishno devi ka temperature", "katra weather",
    "vaishno devi mandir kahan hai", "vaishno devi katra", "shri mata vaishno devi katra",
    "vaishno devi yatra parchi", "yatra parchi vaishno devi", "vaishno devi yatra update",
    "vaishno devi distance", "vaishno devi train", "delhi to vaishno devi",
    "वैष्णो देवी", "माता वैष्णो देवी", "वैष्णो देवी मंदिर",
  ],
  openGraph: {
    title: "Vaishno Devi Yatra Guide — Katra, Mausam, Height, Distance, Parchi",
    description: "Complete Vaishno Devi guide. 12 km trek, 5200 ft height, katra mausam, yatra parchi (RFID), helicopter booking and more.",
    type: "website",
  },
};

export default function Home() {
  // Read slider images from public/heroslider directory
  const heroSliderDir = path.join(process.cwd(), "public", "heroslider");
  let sliderImages = [];
  try {
    if (fs.existsSync(heroSliderDir)) {
      const files = fs.readdirSync(heroSliderDir);
      sliderImages = files
        .filter((file) => /\.(png|jpe?g|webp|gif|svg)$/i.test(file))
        .map((file) => `/heroslider/${file}`);
    }
  } catch (err) {
    console.error("Error reading heroslider directory:", err);
  }

  // Fallback if empty
  if (sliderImages.length === 0) {
    sliderImages = ["/vaishnodevi_hero_bg.png"];
  }

  const serviceCards = [
    {
      title: "Yatra RFID Registration",
      desc: "RFID cards are strictly mandatory for all pilgrims. Registration is free and must be done online or at Katra counters.",
      link: "/services/yatra-registration",
      icon: (
        <svg className="w-6 h-6 text-saffron-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.333 0 4 .667 4 2v1H5v-1c0-1.333 2.667-2 4-2z" />
        </svg>
      ),
      badge: "Mandatory",
    },
    {
      title: "Accommodation Guide",
      desc: "Comprehensive details on room bookings, dormitories, and cottages managed by the Shrine Board across Katra, Adhkuwari, and Bhawan.",
      link: "/services/room-booking",
      icon: (
        <svg className="w-6 h-6 text-saffron-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      badge: "Rooms & Beds",
    },
    {
      title: "Helicopter Booking",
      desc: "Fly from Katra to Sanjichhat in under 10 minutes. Review schedules, baggage allowances, pricing, and ticket collection procedures.",
      link: "/services/helicopter",
      icon: (
        <svg className="w-6 h-6 text-saffron-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
      badge: "Pre-book Online",
    },
    {
      title: "Bhawan Ropeway Guide",
      desc: "Saves a steep 1.5 km climb from Bhawan to Bhairon Ghati. Check ticket prices, timings, wait times, and operations.",
      link: "/services/ropeway",
      icon: (
        <svg className="w-6 h-6 text-saffron-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      badge: "Bhawan Counter Only",
    },
    {
      title: "Battery Car Guide",
      desc: "Battery-operated vehicles running between Adhkuwari and Bhawan. Perfect for elderly pilgrims and children.",
      link: "/services/battery-car",
      icon: (
        <svg className="w-6 h-6 text-saffron-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      badge: "Priority Booking",
    },
    {
      title: "Palki & Pony Guide",
      desc: "Porter services, doli/palki carriers, and ponies for climbing the hill. Learn about fixed official rates and how to book.",
      link: "/services/palki-pony",
      icon: (
        <svg className="w-6 h-6 text-saffron-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      badge: "Track Service",
    },
    {
      title: "Prasad Seva Guide",
      desc: "Information on official gold-sealed Vaishno Devi Prasad packets, pricing, home delivery options, and bhandara bookings.",
      link: "/services/prasad",
      icon: (
        <svg className="w-6 h-6 text-saffron-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      badge: "Mata Prasad",
    },
    {
      title: "Atka Aarti Tickets",
      desc: "Guidelines on attending the sacred Morning/Evening Atka Aarti in the direct presence of the holy cave. Booking process details.",
      link: "/services/atka-aarti",
      icon: (
        <svg className="w-6 h-6 text-saffron-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707" />
        </svg>
      ),
      badge: "Divine Rituals",
    },
    {
      title: "Shrine Board Donations",
      desc: "Contribute to the upkeep of facilities, free food (bhandara), and medical aid. Understand tax exemptions and direct portal links.",
      link: "/services/donation",
      icon: (
        <svg className="w-6 h-6 text-saffron-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      badge: "Welfare & Seva",
    },
  ];

  const yatraRoute = [
    {
      title: "Katra (The Base Camp)",
      distance: "0.0 km (Start)",
      altitude: "2,500 ft",
      tag: "Starting Point",
      description: "Collect your mandatory RFID card at the railway station or central bus stand counters before proceeding. Pack light, leave heavy bags at your Katra hotel lockers, and wear comfortable walking shoes.",
      highlights: ["RFID Counter Verification", "Free Clockrooms", "Local Markets & Hotels"],
    },
    {
      title: "Banganga Checkpost",
      distance: "1.5 km from Katra",
      altitude: "2,800 ft",
      tag: "RFID Verification Gate",
      description: "Named after the river Ganges which Mata created with an arrow. All yatris take a holy dip here before crossing the initial security scanners. RFID cards are scanned at this entrance.",
      highlights: ["First Security Gate", "Holy Bathing Ghat", "Luggage Scanners"],
    },
    {
      title: "Charan Paduka Temple",
      distance: "2.5 km from Katra",
      altitude: "3,380 ft",
      tag: "Spiritual Milestone",
      description: "Houses the footprints of the Goddess on a rock slab, where she turned back to watch Bhairon Nath. Yatris pay obeisance here and take a short break.",
      highlights: ["Mata Footprints", "Medical First-Aid Post", "Refreshment Outlets"],
    },
    {
      title: "Adhkuwari Temple (Halfway)",
      distance: "6.0 km from Katra",
      altitude: "4,800 ft",
      tag: "Midpoint Hub",
      description: "The famous Garbh Joon cave where Mata meditated for nine months. This is a massive resting area. Get your ticket number early as wait times for the cave can stretch to 12-24 hours.",
      highlights: ["Garbh Joon Cave", "Battery Car Station", "Shanti Bhawan Dormitories"],
    },
    {
      title: "Sanjichhat Plateau",
      distance: "9.5 km from Katra",
      altitude: "6,200 ft",
      tag: "Highest Peak of Track",
      description: "The highest plateau along the yatra trail, offering magnificent views of the snow-clad Himalayas. This is where the official Helipad is located, alongside a fully equipped 24/7 medical ICU.",
      highlights: ["Helipad Terminal", "24-Hour Hospital", "Scenic Resting Shelters"],
    },
    {
      title: "The Holy Bhawan",
      distance: "12.0 km from Katra",
      altitude: "5,200 ft",
      tag: "Sanctum Sanctorum",
      description: "The ultimate destination. The holy natural cave containing the swayambhu Pindies representing Kali, Lakshmi, and Saraswati. Mobile phones, leather items, and bags must be deposited at free cloakrooms.",
      highlights: ["Holy Pindies Darshan", "Free Lockers & Bathrooms", "Atka Aarti Area", "Ropeway Counter"],
    },
    {
      title: "Bhairon Nath Temple",
      distance: "13.5 km from Katra",
      altitude: "6,600 ft",
      tag: "Final Blessing",
      description: "Pilgrimage is considered incomplete without seeking blessings at Bhairon Nath's temple. Located at a steep climb from Bhawan, connected via a scenic 3-minute passenger ropeway.",
      highlights: ["Bhairon Nath Mandir", "3-Minute Passenger Ropeway", "Stunning Mountain View"],
    },
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-cream-50 animate-fade-in-up">
      {/* 1. Dynamic Hero Image Slider Section */}
      <HeroSlider images={sliderImages}>
        <div className="space-y-6">
          <span className="inline-block bg-crimson-800 text-yellow-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-md border border-crimson-600/30 shadow-md">
            जय माता दी
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-display text-white drop-shadow-md leading-tight">
            Shri Mata Vaishno Devi Shrine Help Guide
          </h1>
          <p className="max-w-2xl text-sm md:text-base text-stone-200 leading-relaxed drop-shadow-sm font-medium font-sans">
            The journey to the Holy Shrine of Mata Vaishno Devi is an enchanting journey of the places where Mata Vaishnavi had spent some time while observing various spiritual disciplines and penances. The culmination of this journey is at the Holy Cave where She merged Her Human form with the astral form of Her creators, the three Supreme Energies.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <Link
              href="#guides"
              className="px-8 py-3.5 bg-gradient-saffron hover:bg-gradient-gold text-white text-sm font-bold rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-center"
            >
              Explore Yatra Guides
            </Link>
            <a
              href="https://www.maavaishnodevi.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white text-sm font-bold rounded-full backdrop-blur-md shadow-xs hover:shadow-md transition-all duration-300 text-center"
            >
              Book on Official Shrine Board Website &rarr;
            </a>
          </div>
        </div>
      </HeroSlider>

      {/* 2. Live Alerts / Notice Block */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 flex flex-col gap-4">
        <Link href="/blogs/yatra-resume" className="block w-full cursor-pointer hover:opacity-95 transition-opacity">
          <NoticeBox type="success" title="🟢 LATEST NEWS: Mata Vaishno Devi Yatra Resumed">
            The Yatra has officially resumed after temporary suspension due to bad weather. Click here to read full updates, current weather conditions, and travel guidelines for pilgrims.
          </NoticeBox>
        </Link>
        <NoticeBox type="warning" title="Mandatory RFID Card Guidelines">
          RFID Access Cards are now strictly mandatory for all pilgrims crossing the Banganga Gate. All yatris must get their RFID cards printed at the railway station or bus stand counters in Katra immediately upon arrival. Running without a valid RFID card is a punishable offense.
        </NoticeBox>
      </section>

      {/* 3. Quick Stats Bar */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white border border-stone-150 p-6 md:p-8 rounded-3xl shadow-xs">
          <div className="text-center border-r border-stone-100 last:border-0">
            <span className="block text-3xl md:text-4xl font-extrabold text-saffron-600 font-display">12 km</span>
            <span className="text-xs md:text-sm font-bold text-stone-550 uppercase tracking-wider mt-1 block">Yatra Track Length</span>
          </div>
          <div className="text-center border-r border-stone-100 last:border-0">
            <span className="block text-3xl md:text-4xl font-extrabold text-crimson-700 font-display">5,200 ft</span>
            <span className="text-xs md:text-sm font-bold text-stone-550 uppercase tracking-wider mt-1 block">Bhawan Altitude</span>
          </div>
          <div className="text-center border-r border-stone-100 last:border-0">
            <span className="block text-3xl md:text-4xl font-extrabold text-saffron-600 font-display">6,600 ft</span>
            <span className="text-xs md:text-sm font-bold text-stone-550 uppercase tracking-wider mt-1 block">Bhairon Temple Peak</span>
          </div>
          <div className="text-center last:border-0">
            <span className="block text-3xl md:text-4xl font-extrabold text-crimson-700 font-display">Free</span>
            <span className="text-xs md:text-sm font-bold text-stone-550 uppercase tracking-wider mt-1 block">RFID Registration</span>
          </div>
        </div>
      </section>

      {/* SEO Quick Answers — targets featured snippets for top searched queries */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white border border-stone-200 rounded-2xl p-4 shadow-xs hover:border-saffron-300 transition-colors">
            <p className="text-[10px] font-bold uppercase tracking-widest text-saffron-600 mb-1">Vaishno Devi ki Chadhai</p>
            <p className="text-sm font-bold text-stone-900 mb-1">Katra to Bhawan: <span className="text-crimson-700">12 km</span></p>
            <p className="text-xs text-stone-500 leading-relaxed">Total trek distance from Banganga, Katra to the Holy Bhawan is <strong>12 km</strong> (one way). Including Bhairon Temple it is 13.5 km.</p>
            <Link href="/trek" className="text-[10px] font-bold text-saffron-600 hover:underline mt-2 block">Full Trek Guide →</Link>
          </div>
          <div className="bg-white border border-stone-200 rounded-2xl p-4 shadow-xs hover:border-saffron-300 transition-colors">
            <p className="text-[10px] font-bold uppercase tracking-widest text-crimson-600 mb-1">Vaishno Devi Height / Altitude</p>
            <p className="text-sm font-bold text-stone-900 mb-1">Bhawan: <span className="text-crimson-700">5,200 ft (1,584 m)</span></p>
            <p className="text-xs text-stone-500 leading-relaxed">Bhawan altitude is <strong>1,584 metres (5,200 ft)</strong> above sea level. Bhairon Nath Temple is at 2,010 m (6,600 ft) — the highest point of the yatra.</p>
            <Link href="/trek" className="text-[10px] font-bold text-saffron-600 hover:underline mt-2 block">Height Details →</Link>
          </div>
          <div className="bg-white border border-stone-200 rounded-2xl p-4 shadow-xs hover:border-saffron-300 transition-colors">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gold-600 mb-1">Katra ka Mausam / Weather</p>
            <p className="text-sm font-bold text-stone-900 mb-1">Best time: <span className="text-saffron-600">Mar–May &amp; Sep–Nov</span></p>
            <p className="text-xs text-stone-500 leading-relaxed">Katra temperature ranges from <strong>12°C–36°C</strong> (summer) to <strong>5°C–18°C</strong> (winter). Bhawan is 10–15°C colder. Best months: March–May &amp; September–November.</p>
            <Link href="/travel/weather" className="text-[10px] font-bold text-saffron-600 hover:underline mt-2 block">Full Weather Guide →</Link>
          </div>
          <div className="bg-white border border-stone-200 rounded-2xl p-4 shadow-xs hover:border-saffron-300 transition-colors">
            <p className="text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-1">Yatra Parchi / RFID</p>
            <p className="text-sm font-bold text-stone-900 mb-1">Registration: <span className="text-saffron-600">Free &amp; Mandatory</span></p>
            <p className="text-xs text-stone-500 leading-relaxed">Vaishno Devi yatra parchi (RFID card) is <strong>free</strong> and mandatory for all pilgrims. Register online or collect at Katra counters before the trek starts.</p>
            <Link href="/services/yatra-registration" className="text-[10px] font-bold text-saffron-600 hover:underline mt-2 block">Get Yatra Parchi →</Link>
          </div>
        </div>
      </section>

      {/* 3.5 Langar, Donations, Prasad Cards & About Shrine Section */}
      <section className="pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Three Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Card 1: Langar Seva */}
          <div className="bg-white border border-stone-200/80 p-8 rounded-3xl shadow-xs hover:shadow-md hover:border-saffron-400/60 transition-all duration-300 flex flex-col justify-between items-center text-center group">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-saffron-50 flex items-center justify-center mb-6 border border-saffron-100 group-hover:scale-105 transition-transform duration-300">
                <svg className="w-8 h-8 text-saffron-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3 font-display">Langar Seva</h3>
              <p className="text-stone-605 text-sm leading-relaxed mb-6">
                The Board operates free Langar at Tarakote, Sanjichhat and Bhairon ji for pilgrims round the clock.
              </p>
            </div>
            <a
              href="https://online.maavaishnodevi.org/#/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-extrabold text-crimson-700 hover:text-saffron-600 uppercase tracking-wider transition-colors"
            >
              Organise Langar
            </a>
          </div>

          {/* Card 2: Donations */}
          <div className="bg-white border border-stone-200/80 p-8 rounded-3xl shadow-xs hover:shadow-md hover:border-saffron-400/60 transition-all duration-300 flex flex-col justify-between items-center text-center group">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-crimson-50 flex items-center justify-center mb-6 border border-crimson-100 group-hover:scale-105 transition-transform duration-300">
                <svg className="w-8 h-8 text-crimson-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3 font-display">Donations</h3>
              <p className="text-stone-605 text-sm leading-relaxed mb-6">
                Donations are the mainstay of Income to provide facilities for Pilgrims and support Welfare Initiatives.
              </p>
            </div>
            <a
              href="https://www.maavaishnodevi.org/donations.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-extrabold text-crimson-700 hover:text-saffron-600 uppercase tracking-wider transition-colors"
            >
              Donate Now
            </a>
          </div>

          {/* Card 3: Prasad */}
          <div className="bg-white border border-stone-200/80 p-8 rounded-3xl shadow-xs hover:shadow-md hover:border-saffron-400/60 transition-all duration-300 flex flex-col justify-between items-center text-center group">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gold-50 flex items-center justify-center mb-6 border border-gold-100 group-hover:scale-105 transition-transform duration-300">
                <svg className="w-8 h-8 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253M12 6.253C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3 font-display">Prasad</h3>
              <p className="text-stone-605 text-sm leading-relaxed mb-6">
                Panchmeva & Box Prasad can be booked online for door step delivery all over India.
              </p>
            </div>
            <a
              href="https://online.maavaishnodevi.org/#/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-extrabold text-crimson-700 hover:text-saffron-600 uppercase tracking-wider transition-colors"
            >
              Buy Now
            </a>
          </div>
        </div>

        {/* Redesigned About Shrine Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start bg-white border border-stone-200/80 p-8 md:p-12 rounded-3xl shadow-xs">
          {/* Left Side text content (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl font-bold font-display text-stone-900 tracking-tight leading-tight border-l-4 border-saffron-500 pl-4 animate-pulse-subtle">
              About Shrine
            </h2>
            <p className="text-stone-650 text-sm leading-relaxed">
              The management of the Yatra and the governance and administration of the Shrine is looked after by the Shri Mata Vaishno Devi Shrine Board, popularly called the Shrine Board. The Board was set up in August 1986 under the provisions of The Jammu and Kashmir Shri Mata Vaishno Devi Shrine Act, 1988. The main objective of the Act was to provide for better management and governance of the Holy Shrine of Shri Mata Vaishno Devi Ji and its endowments including the appurtenant lands and buildings.
            </p>
            <p className="text-stone-900 font-extrabold text-sm border-l-2 border-stone-200 pl-3.5 italic bg-stone-50 py-2 rounded-r-md">
              The Board comprises of a Chairman & not more than 10 members.
            </p>
            <p className="text-stone-650 text-sm leading-relaxed">
              The Lt. Governor of the UT of Jammu and Kashmir by virtue of his office is the ex-officio Chairman of the Board. He nominates nine members in the Board at the policy making level. The Board discharge its duty through a Chief Executive Officer who is assisted by Officers deputed from Government of J&K and various Area Heads and Functional Heads.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-block px-6 py-3 bg-crimson-700 hover:bg-crimson-850 text-white text-xs font-bold rounded-full shadow-xs hover:shadow-md transition-all duration-300 text-center uppercase tracking-widest"
              >
                Read More
              </Link>
            </div>
          </div>

          {/* Right Side visual content (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center h-full">
            {/* Video Card - opens YouTube popup on click */}
            <YoutubePopup
              thumbnailSrc="/vaishnodevi_hero_bg.png"
              videoId="g49_D2Jh78k"
              thumbnailAlt="Mata Vaishno Devi Yatra Video Preview"
            />
          </div>
        </div>
      </section>

      {/* 4. Service Guides Grid */}
      <section id="guides" className="py-16 bg-white border-y border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-saffron-600 tracking-widest uppercase bg-saffron-50 px-3.5 py-1.5 rounded-full">
              GUIDANCE PORTAL SERVICES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-stone-900 mt-4 tracking-tight">
              Yatra Service Planning Guides
            </h2>
            <p className="text-stone-600 text-sm md:text-base mt-3 leading-relaxed">
              Step-by-step guides covering online reservations, rates, timings, locations, and procedures for booking official services.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-cream-50 border border-stone-200/60 p-6 rounded-2xl shadow-xs transition-all duration-300 hover:shadow-md hover:border-saffron-400 hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-white rounded-xl border border-stone-150 flex items-center justify-center shadow-xs transition-all group-hover:bg-saffron-500 group-hover:text-white">
                      {card.icon}
                    </div>
                    <span className="text-[10px] font-bold text-saffron-600 bg-saffron-100 px-2 py-0.5 rounded-full uppercase tracking-wider">
                      {card.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-stone-900 mb-2 font-display">
                    {card.title}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-6">
                    {card.desc}
                  </p>
                </div>

                <Link
                  href={card.link}
                  className="inline-flex items-center text-xs font-bold text-saffron-600 hover:text-crimson-700 transition-colors uppercase tracking-wider group-hover:translate-x-1 duration-200"
                >
                  Read Booking Guide &rarr;
                </Link>
              </div>
            ))}
          </div>

          {/* View All Services Button */}
          <div className="flex justify-center mt-12">
            <Link
              href="/services"
              className="px-8 py-3.5 bg-gradient-saffron hover:bg-gradient-gold text-white text-sm font-bold rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-center uppercase tracking-wider font-sans"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Yatra Route Timeline */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-crimson-600 tracking-widest uppercase bg-crimson-50 px-3.5 py-1.5 rounded-full">
            YATRA PROCESS TIMELINE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-stone-900 mt-4 tracking-tight">
            Katra to Bhawan Track Milestones
          </h2>
          <p className="text-stone-600 text-sm md:text-base mt-3 leading-relaxed">
            Follow the physical and spiritual path. Understanding these distances, altitudes, and facilities helps plan your resting strategy.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Timeline steps={yatraRoute} />
        </div>
      </section>

      {/* 6. Rules and Guidelines (Do's and Don'ts) */}
      <section className="py-16 bg-stone-900 text-stone-300 border-y border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-saffron-500 tracking-widest uppercase bg-saffron-950/50 border border-saffron-900/30 px-3.5 py-1.5 rounded-full">
              GUIDELINES FOR YATRIS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mt-4 tracking-tight">
              Yatri Rules & Guidelines
            </h2>
            <p className="text-stone-400 text-sm md:text-base mt-3 leading-relaxed">
              Read these critical regulations to ensure a smooth pilgrimage without facing penalties or security hassles.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Do's */}
            <div className="bg-stone-950 p-8 rounded-3xl border border-stone-850/50 shadow-md">
              <h3 className="text-lg font-bold text-emerald-400 font-display flex items-center gap-2 mb-6">
                <span className="text-2xl">✓</span> DO'S (Recommended Actions)
              </h3>
              <ul className="space-y-4 text-sm leading-relaxed text-stone-300">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 font-bold mt-0.5">✔</span>
                  <span>Obtain your free RFID card at Katra counter and wear it visibly throughout the yatra.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 font-bold mt-0.5">✔</span>
                  <span>Pre-book your Room and Helicopter rides 60 days in advance via the official site.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 font-bold mt-0.5">✔</span>
                  <span>Carry a small medical first-aid kit containing pain relievers and muscle sprays.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 font-bold mt-0.5">✔</span>
                  <span>Keep your luggage light; use the free cloakrooms at Katra or Bhawan for valuables.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 font-bold mt-0.5">✔</span>
                  <span>Respect fellow pilgrims and stand in designated queues for cave entry.</span>
                </li>
              </ul>
            </div>

            {/* Don'ts */}
            <div className="bg-stone-950 p-8 rounded-3xl border border-stone-850/50 shadow-md">
              <h3 className="text-lg font-bold text-crimson-400 font-display flex items-center gap-2 mb-6">
                <span className="text-2xl">✗</span> DON'TS (Strictly Banned)
              </h3>
              <ul className="space-y-4 text-sm leading-relaxed text-stone-300">
                <li className="flex items-start gap-3">
                  <span className="text-crimson-500 font-bold mt-0.5">✘</span>
                  <span>Do not bring leather items (wallets, belts), cameras, or electronic devices inside the Holy Cave.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-crimson-500 font-bold mt-0.5">✘</span>
                  <span>Photography and videography are strictly prohibited anywhere near the Bhawan area.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-crimson-500 font-bold mt-0.5">✘</span>
                  <span>Plastic carry bags and non-biodegradable items are banned on the entire track.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-crimson-500 font-bold mt-0.5">✘</span>
                  <span>Avoid purchasing tickets or bookings from local unauthorized agents or unknown web links.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-crimson-500 font-bold mt-0.5">✘</span>
                  <span>Do not smoke, consume alcohol, or carry non-vegetarian food on the yatra track.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Call to Action (Official Redirect Portal Booking) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-gradient-saffron text-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 border border-orange-500/20">
          <div className="absolute inset-0 bg-stone-950/10 pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="inline-block bg-crimson-800 text-white text-[10px] uppercase font-extrabold px-3 py-1 rounded-md tracking-wider">
              ⚠️ Official Booking Warning
            </span>
            <h2 className="text-2xl md:text-4xl font-bold font-display tracking-tight text-white leading-tight">
              Ready to Book Your Official Tickets?
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
              className="w-full lg:w-auto inline-flex items-center justify-center bg-white text-saffron-700 hover:bg-gold-50 text-sm md:text-base font-extrabold px-8 py-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-[1.02] duration-300 transition-all uppercase tracking-wider text-center"
            >
              Book on Official Shrine Board Website &rarr;
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
