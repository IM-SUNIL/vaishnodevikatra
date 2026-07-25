"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [guidesDropdownOpen, setGuidesDropdownOpen] = useState(false);
  const [bookingDropdownOpen, setBookingDropdownOpen] = useState(false);
  const [travelDropdownOpen, setTravelDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll events to make navbar sticky and stylish
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on page change
  useEffect(() => {
    setMobileMenuOpen(false);
    setGuidesDropdownOpen(false);
    setBookingDropdownOpen(false);
    setTravelDropdownOpen(false);
  }, [pathname]);

  const guidesLinks = [
    { name: "Trek Distance & Route Guide", href: "/trek" },
    { name: "Yatra Registration Guide", href: "/services/yatra-registration" },
    { name: "Room Booking Guide", href: "/services/room-booking" },
    { name: "Helicopter Booking Guide", href: "/services/helicopter" },
    { name: "Battery Car Guide", href: "/services/battery-car" },
    { name: "Ropeway Guide", href: "/services/ropeway" },
    { name: "Palki / Pony Guide", href: "/services/palki-pony" },
    { name: "Prasad Guide", href: "/services/prasad" },
    { name: "Atka Aarti Guide", href: "/services/atka-aarti" },
    { name: "Donation Guide", href: "/services/donation" },
  ];

  const travelLinks = [
    { name: "How to Reach", href: "/travel/how-to-reach" },
    { name: "Weather Guide", href: "/travel/weather" },
    { name: "Packing Guide", href: "/travel/packing-guide" },
  ];

  const bookingLinks = [
    { name: "Battery Car Booking", href: "/services/battery-car" },
    { name: "Ropeway Booking", href: "/services/ropeway" },
    { name: "Helicopter Booking", href: "/services/helicopter" },
  ];

  return (
    <header className="w-full z-50 flex flex-col">
      {/* Top Utility Bar (Styled like Official Board Website) */}
      <div className="bg-crimson-700 text-white py-2.5 px-4 text-xs font-semibold border-b border-crimson-800/40 shadow-inner z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Left Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.maavaishnodevi.org/suggestions.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-crimson-800 hover:bg-crimson-900 px-3 py-1 rounded text-[10px] uppercase tracking-wider text-white transition-colors border border-crimson-600/30"
            >
              Suggestions
            </a>
            <a
              href="https://www.maavaishnodevi.org/LiveDarshan.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-crimson-800 hover:bg-crimson-900 px-3 py-1 rounded text-[10px] uppercase tracking-wider text-white transition-colors border border-crimson-600/30"
            >
              Live Arti/Darshan
            </a>
          </div>

          {/* Center Text (Jai Mata Di) */}
          <div className="text-yellow-300 font-extrabold text-sm md:text-base tracking-widest drop-shadow-xs font-display">
            जय माता दी
          </div>

          {/* Right Helplines */}
          <div className="flex items-center gap-4 text-[10px] uppercase tracking-wider">
            <a
              href="https://www.maavaishnodevi.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline hover:underline"
            >
              Chat With Us
            </a>
            <a
              href="tel:9906019494"
              className="bg-crimson-900 hover:bg-crimson-950 px-3 py-1 rounded font-bold hover:underline flex items-center gap-1.5 border border-crimson-850/50"
            >
              <span className="text-xs">📞</span> 9906019494
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "sticky top-0 bg-white/95 backdrop-blur-md shadow-md py-3"
            : "bg-white py-5"
        } border-b border-stone-100`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Branding */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Custom Spiritual Logo */}
            <div className="w-12 h-12 relative overflow-hidden rounded-full border border-stone-200/60 bg-white transition-transform duration-300 group-hover:scale-105 shadow-xs flex-shrink-0">
              <Image
                src="/finallogo.png"
                alt="Mata Vaishno Devi Shrine Logo"
                fill
                sizes="48px"
                className="object-contain p-1"
                priority
              />
            </div>
            <div>
              <div className="text-lg md:text-xl font-bold tracking-tight text-gradient-saffron font-display leading-tight">
                MATA VAISHNO DEVI
              </div>
              <div className="text-[10px] md:text-xs text-stone-500 uppercase tracking-widest font-semibold leading-none">
                Official Pilgrim Guide
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                pathname === "/"
                  ? "text-saffron-600 bg-saffron-50/50"
                  : "text-stone-700 hover:text-saffron-600 hover:bg-stone-50"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                pathname === "/about"
                  ? "text-saffron-600 bg-saffron-50/50"
                  : "text-stone-700 hover:text-saffron-600 hover:bg-stone-50"
              }`}
            >
              About Yatra
            </Link>

            {/* Guides Dropdown Menu */}
            <div
              className="relative"
              onMouseEnter={() => setGuidesDropdownOpen(true)}
              onMouseLeave={() => setGuidesDropdownOpen(false)}
            >
              <button
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-1 ${
                  pathname.startsWith("/services") && pathname !== "/services"
                    ? "text-saffron-600 bg-saffron-50/50"
                    : "text-stone-700 hover:text-saffron-600 hover:bg-stone-50"
                }`}
                aria-haspopup="true"
                aria-expanded={guidesDropdownOpen}
              >
                Yatra Guides
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    guidesDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Guides Dropdown Menu Panel */}
              <div
                className={`absolute left-0 mt-1 w-64 bg-white border border-stone-150 rounded-2xl shadow-xl py-3 z-50 transition-all duration-250 ${
                  guidesDropdownOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-2 pointer-events-none"
                }`}
              >
                <div className="px-4 py-1.5 border-b border-stone-50 mb-1.5">
                  <span className="text-[10px] font-bold tracking-widest text-stone-400 uppercase">
                    Yatra Milestones & Services
                  </span>
                </div>
                {guidesLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-2 text-xs font-semibold transition-all hover:bg-saffron-50/60 ${
                      pathname === link.href ? "text-saffron-600 bg-saffron-50/40" : "text-stone-700 hover:text-saffron-700"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Online Booking Dropdown Menu */}
            <div
              className="relative"
              onMouseEnter={() => setBookingDropdownOpen(true)}
              onMouseLeave={() => setBookingDropdownOpen(false)}
            >
              <button
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-1 ${
                  pathname.startsWith("/services/battery-car") || pathname.startsWith("/services/ropeway") || pathname.startsWith("/services/helicopter")
                    ? "text-saffron-600 bg-saffron-50/50"
                    : "text-stone-700 hover:text-saffron-600 hover:bg-stone-50"
                }`}
                aria-haspopup="true"
                aria-expanded={bookingDropdownOpen}
              >
                Online Booking
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    bookingDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Online Booking Panel */}
              <div
                className={`absolute left-0 mt-1 w-56 bg-white border border-stone-150 rounded-2xl shadow-xl py-3 z-50 transition-all duration-250 ${
                  bookingDropdownOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-2 pointer-events-none"
                }`}
              >
                <div className="px-4 py-1.5 border-b border-stone-50 mb-1.5">
                  <span className="text-[10px] font-bold tracking-widest text-stone-400 uppercase">
                    Direct Services
                  </span>
                </div>
                {bookingLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-2 text-xs font-semibold transition-all hover:bg-saffron-50/60 ${
                      pathname === link.href ? "text-saffron-600 bg-saffron-50/40" : "text-stone-700 hover:text-saffron-700"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Travel Info Dropdown Menu */}
            <div
              className="relative"
              onMouseEnter={() => setTravelDropdownOpen(true)}
              onMouseLeave={() => setTravelDropdownOpen(false)}
            >
              <button
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-1 ${
                  pathname.startsWith("/travel")
                    ? "text-saffron-600 bg-saffron-50/50"
                    : "text-stone-700 hover:text-saffron-600 hover:bg-stone-50"
                }`}
                aria-haspopup="true"
                aria-expanded={travelDropdownOpen}
              >
                Travel Info
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    travelDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Travel Info Panel */}
              <div
                className={`absolute left-0 mt-1 w-56 bg-white border border-stone-150 rounded-2xl shadow-xl py-3 z-50 transition-all duration-250 ${
                  travelDropdownOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-2 pointer-events-none"
                }`}
              >
                <div className="px-4 py-1.5 border-b border-stone-50 mb-1.5">
                  <span className="text-[10px] font-bold tracking-widest text-stone-400 uppercase">
                    Logistics & Prep
                  </span>
                </div>
                {travelLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-2 text-xs font-semibold transition-all hover:bg-saffron-50/60 ${
                      pathname === link.href ? "text-saffron-600 bg-saffron-50/40" : "text-stone-700 hover:text-saffron-700"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/faq"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                pathname === "/faq"
                  ? "text-saffron-600 bg-saffron-50/50"
                  : "text-stone-700 hover:text-saffron-600 hover:bg-stone-50"
              }`}
            >
              FAQ
            </Link>

            <Link
              href="/contact"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                pathname === "/contact"
                  ? "text-saffron-600 bg-saffron-50/50"
                  : "text-stone-700 hover:text-saffron-600 hover:bg-stone-50"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Quick Action Book Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="https://www.maavaishnodevi.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-saffron hover:bg-gradient-gold text-white text-xs font-bold px-4 py-2.5 rounded-full shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
            >
              Official Shrine Board Site
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-stone-700 p-2 rounded-lg hover:bg-stone-100 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Scrolling Advisory Bar (Styled below main Nav) */}
      <div className="bg-gold-500 text-stone-900 py-1.5 px-4 text-xs font-bold overflow-hidden border-b border-gold-600/10 shadow-xs relative">
        <div className="max-w-7xl mx-auto flex items-center">
          <span className="bg-crimson-700 text-white text-[9px] uppercase font-extrabold px-1.5 py-0.5 rounded-xs animate-pulse flex-shrink-0 mr-4 shadow-sm">
            LATEST ADVISORY
          </span>
          <div className="w-full overflow-hidden whitespace-nowrap">
            <div className="inline-block animate-marquee hover:[animation-play-state:paused] cursor-pointer">
              📢 RFID Cards are MANDATORY for all Yatris. Collect your card immediately upon arrival at Katra. • Online registration is highly recommended to avoid counter queues. • Helicopter & Room bookings should only be done via the official website. • Heavy rain may affect ropeway services, please check status beforehand.
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-stone-900/40 backdrop-blur-xs transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`fixed right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl py-6 px-6 overflow-y-auto z-50 transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-stone-100">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 relative overflow-hidden rounded-full border border-stone-200 bg-white flex-shrink-0">
                <Image
                  src="/finallogo.png"
                  alt="Mata Vaishno Devi Shrine Logo"
                  fill
                  sizes="24px"
                  className="object-contain p-0.5"
                />
              </div>
              <span className="font-bold text-gradient-saffron font-display">MENU</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-stone-500 hover:text-stone-800 p-1 rounded-full hover:bg-stone-50"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-4">
            <Link
              href="/"
              className={`block py-2 text-base font-bold rounded-lg px-3 transition-colors ${
                pathname === "/" ? "bg-saffron-50 text-saffron-600" : "text-stone-700 hover:bg-stone-50"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`block py-2 text-base font-bold rounded-lg px-3 transition-colors ${
                pathname === "/about" ? "bg-saffron-50 text-saffron-600" : "text-stone-700 hover:bg-stone-50"
              }`}
            >
              About Yatra
            </Link>

            {/* Guides Section Mobile Accordion */}
            <div className="border-t border-stone-50 pt-2">
              <button
                onClick={() => setGuidesDropdownOpen(!guidesDropdownOpen)}
                className="w-full flex items-center justify-between py-2 text-base font-bold text-stone-700 px-3 rounded-lg hover:bg-stone-50"
              >
                <span>Yatra Guides</span>
                <svg
                  className={`w-4 h-4 text-stone-400 transition-transform ${
                    guidesDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`pl-4 mt-1 border-l border-saffron-100 overflow-hidden transition-all duration-300 ${
                  guidesDropdownOpen ? "max-h-[500px] opacity-100 py-1" : "max-h-0 opacity-0"
                }`}
              >
                {guidesLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block py-2 px-3 text-sm font-semibold rounded-md transition-colors ${
                      pathname === link.href ? "text-saffron-600 bg-saffron-50/50" : "text-stone-600 hover:bg-stone-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Online Booking Section Mobile Accordion */}
            <div className="border-t border-stone-50 pt-2">
              <button
                onClick={() => setBookingDropdownOpen(!bookingDropdownOpen)}
                className="w-full flex items-center justify-between py-2 text-base font-bold text-stone-700 px-3 rounded-lg hover:bg-stone-50"
              >
                <span>Online Booking</span>
                <svg
                  className={`w-4 h-4 text-stone-400 transition-transform ${
                    bookingDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`pl-4 mt-1 border-l border-saffron-100 overflow-hidden transition-all duration-300 ${
                  bookingDropdownOpen ? "max-h-40 opacity-100 py-1" : "max-h-0 opacity-0"
                }`}
              >
                {bookingLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block py-2 px-3 text-sm font-semibold rounded-md transition-colors ${
                      pathname === link.href ? "text-saffron-600 bg-saffron-50/50" : "text-stone-600 hover:bg-stone-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Travel Info Mobile Accordion */}
            <div className="border-t border-stone-50 pt-2">
              <button
                onClick={() => setTravelDropdownOpen(!travelDropdownOpen)}
                className="w-full flex items-center justify-between py-2 text-base font-bold text-stone-700 px-3 rounded-lg hover:bg-stone-50"
              >
                <span>Travel Info</span>
                <svg
                  className={`w-4 h-4 text-stone-400 transition-transform ${
                    travelDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`pl-4 mt-1 border-l border-saffron-100 overflow-hidden transition-all duration-300 ${
                  travelDropdownOpen ? "max-h-40 opacity-100 py-1" : "max-h-0 opacity-0"
                }`}
              >
                {travelLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block py-2 px-3 text-sm font-semibold rounded-md transition-colors ${
                      pathname === link.href ? "text-saffron-600 bg-saffron-50/50" : "text-stone-600 hover:bg-stone-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/faq"
              className={`block py-2 text-base font-bold rounded-lg px-3 transition-colors ${
                pathname === "/faq" ? "bg-saffron-50 text-saffron-600" : "text-stone-700 hover:bg-stone-50"
              }`}
            >
              FAQ
            </Link>

            <Link
              href="/contact"
              className={`block py-2 text-base font-bold rounded-lg px-3 transition-colors ${
                pathname === "/contact" ? "bg-saffron-50 text-saffron-600" : "text-stone-700 hover:bg-stone-50"
              }`}
            >
              Contact
            </Link>

            <div className="pt-6 mt-6 border-t border-stone-100">
              <a
                href="https://www.maavaishnodevi.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center bg-gradient-saffron text-white text-sm font-bold py-3 rounded-full shadow-md hover:bg-saffron-700 transition-colors"
              >
                Official Shrine Board Site
              </a>
              <div className="mt-4 text-center">
                <a href="tel:01991234000" className="text-xs font-semibold text-stone-500 hover:text-stone-800">
                  📞 Help: +91-1991-234000
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
