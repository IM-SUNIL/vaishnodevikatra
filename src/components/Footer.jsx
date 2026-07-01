import React from "react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-300 border-t-4 border-saffron-600 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Info & Disclaimer */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-saffron-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L9.5 7h5L12 2zm-5 7l2 11h6l2-11H7z" />
              </svg>
              <span className="font-bold text-white text-lg font-display tracking-tight">
                MATA VAISHNO DEVI
              </span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              This independent platform provides step-by-step guidance, logistical instructions, and tips for pilgrims planning their holy yatra to Katra.
            </p>
            <div className="p-4 rounded-xl bg-stone-950 border border-stone-850/50">
              <span className="block text-[10px] font-extrabold text-saffron-500 uppercase tracking-widest mb-1.5">
                Important Disclaimer
              </span>
              <p className="text-[10px] text-stone-450 leading-relaxed">
                This is a private, non-commercial guide. **We do NOT provide bookings.** All links redirect to the official Shri Mata Vaishno Devi Shrine Board portal (`maavaishnodevi.org`) for direct reservations.
              </p>
            </div>
          </div>

          {/* Column 2: Informational Pages */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5 border-l-2 border-saffron-500 pl-3 font-display">
              Useful Pages
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              <li>
                <Link href="/" className="hover:text-saffron-400 transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-saffron-500"></span> Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-saffron-400 transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-saffron-500"></span> About Yatra
                </Link>
              </li>
              <li>
                <Link href="/travel/how-to-reach" className="hover:text-saffron-400 transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-saffron-500"></span> How to Reach Katra
                </Link>
              </li>
              <li>
                <Link href="/travel/weather" className="hover:text-saffron-400 transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-saffron-500"></span> Weather Information
                </Link>
              </li>
              <li>
                <Link href="/travel/packing-guide" className="hover:text-saffron-400 transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-saffron-500"></span> Packing Checklists
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-saffron-400 transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-saffron-500"></span> Yatra FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Guided Procedures */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5 border-l-2 border-saffron-500 pl-3 font-display">
              Booking Guides
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              <li>
                <Link href="/guides/yatra-registration" className="hover:text-saffron-400 transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-saffron-500"></span> RFID Card Registration
                </Link>
              </li>
              <li>
                <Link href="/guides/room-booking" className="hover:text-saffron-400 transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-saffron-500"></span> Accommodation Guide
                </Link>
              </li>
              <li>
                <Link href="/guides/helicopter" className="hover:text-saffron-400 transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-saffron-500"></span> Helicopter Reservation
                </Link>
              </li>
              <li>
                <Link href="/guides/ropeway" className="hover:text-saffron-400 transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-saffron-500"></span> Bhawan-Bhairon Ropeway
                </Link>
              </li>
              <li>
                <Link href="/guides/battery-car" className="hover:text-saffron-400 transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-saffron-500"></span> Battery Car System
                </Link>
              </li>
              <li>
                <Link href="/guides/donation" className="hover:text-saffron-400 transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-saffron-500"></span> Donation Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Official Contact References */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5 border-l-2 border-saffron-500 pl-3 font-display">
              Official Helpline Details
            </h4>
            <div className="space-y-3 text-xs leading-relaxed text-stone-400">
              <p className="flex items-start gap-2.5">
                <span className="text-saffron-500 mt-0.5">📍</span>
                <span>
                  <strong>SMVDSB Central Office:</strong><br />
                  Shri Mata Vaishno Devi Shrine Board,<br />
                  Katra, Reasi, Jammu & Kashmir - 182301
                </span>
              </p>
              <p className="flex items-center gap-2.5">
                <span className="text-saffron-500">📞</span>
                <span>
                  <strong>Enquiry Counter:</strong><br />
                  +91-1991-234000, 232002
                </span>
              </p>
              <p className="flex items-center gap-2.5">
                <span className="text-saffron-500">✉️</span>
                <span>
                  <strong>Official Email Address:</strong><br />
                  <a href="mailto:dyceo@maavaishnodevi.net" className="hover:text-saffron-400 transition-colors underline">
                    dyceo@maavaishnodevi.net
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-stone-800 my-8"></div>

        {/* Bottom copyright & actions */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            &copy; {currentYear} Mata Vaishno Devi Pilgrim Guide. Developed as a public guidance resource.
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://www.maavaishnodevi.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-saffron-500 font-bold hover:underline flex items-center gap-1.5 border border-saffron-500/20 px-3 py-1.5 rounded-lg bg-stone-950/40 hover:bg-saffron-500 hover:text-white transition-all duration-300"
            >
              Go to Official SMVDSB Booking Portal
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
