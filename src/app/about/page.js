import React from "react";
import Link from "next/link";
import Image from "next/image";
import NoticeBox from "@/components/NoticeBox";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata = {
  title: "Vaishno Devi Mandir Kahan Hai — Location, History & Holy Cave Guide",
  description:
    "Vaishno Devi mandir kahan hai? Shri Mata Vaishno Devi temple is located in Trikuta Mountains, Katra, Reasi, Jammu & Kashmir. Learn the complete history, sacred legends of mata vaishno devi, the three Pindies, and the Holy Cave at Bhawan.",
  keywords: [
    "vaishno devi mandir kahan hai", "vaishno devi kahan hai", "vaishno devi mandir kahan per hai",
    "vaishno devi mandir", "vaishno devi temple jammu kashmir", "vaishno devi temple",
    "mata vaishno devi shrine", "shri mata vaishno devi katra", "vaishno devi bhawan",
    "vaishno devi history", "vaishno devi cave", "vaishno devi pindies",
    "vaishno mata mandir", "vaishno devi shrine board", "मंदिर वैष्णो देवी",
  ],
  openGraph: {
    title: "Vaishno Devi Mandir — Location, History & Holy Cave",
    description: "Where is Vaishno Devi mandir? Located in Trikuta Hills, Katra, J&K. History, legends, and complete shrine guide.",
    type: "article",
  },
};

export default function AboutPage() {
  const pindiDetails = [
    {
      title: "Mata Maha Kali",
      position: "Right Position",
      color: "Blackish-Red",
      attribute: "Strength, Time & Destruction of Ego",
      desc: "Representing the Tam Guna (quality of darkness and strength). Mata Maha Kali is worshipped for overcoming obstacles, removing evil influences, and gaining spiritual and physical energy. She represents the source of divine power that dissolves all negative forces.",
      accent: "border-stone-800 bg-stone-50/50",
      tagColor: "bg-stone-900 text-white"
    },
    {
      title: "Mata Maha Lakshmi",
      position: "Middle Position",
      color: "Yellowish-Gold",
      attribute: "Wealth, Sustenance & Prosperity",
      desc: "Representing the Raj Guna (quality of activity, passion, and sustenance). Mata Maha Lakshmi is the goddess of abundance, beauty, and well-being. She sustains life and provides the resources necessary for both material and spiritual growth.",
      accent: "border-gold-500 bg-gold-50/20",
      tagColor: "bg-gold-600 text-white"
    },
    {
      title: "Mata Maha Saraswati",
      position: "Left Position",
      color: "Whitish-Yellow",
      attribute: "Knowledge, Wisdom & Art",
      desc: "Representing the Sat Guna (quality of purity, light, and wisdom). Mata Maha Saraswati governs intellect, truth, and fine arts. She is worshipped to attain clear thinking, self-realization, and wisdom to distinguish right from wrong.",
      accent: "border-saffron-500 bg-saffron-50/20",
      tagColor: "bg-saffron-600 text-white"
    }
  ];

  const historyFaqs = [
    {
      question: "How old is the Holy Shrine of Mata Vaishno Devi?",
      answer: "While scientific estimates of the geological formations inside the natural cave date back millions of years, the exact historical origin of the yatra remains ancient and undocumented. References to the Goddess Vaishnavi can be found in the Mahabharata. Local belief states that the pilgrimage has been active for several thousand years.",
    },
    {
      question: "What are the dimensions of the natural Holy Cave?",
      answer: "The original natural cave of Shri Mata Vaishno Devi is about 98 feet long. It is a narrow crawl-through cave, though two artificial tunnel exits were constructed in 1977 and 2002 to allow a smooth flow of pilgrims during peak times. The natural flow of cold spring water (known as Charan Ganga) still runs through the natural path.",
    },
    {
      question: "Why are there no traditional idols in the cave?",
      answer: "At the end of the Holy Cave, there are no traditional man-made marble or metal statues. Instead, the Goddess manifests in the form of three natural rock structures called Pindies. These rock formations share a single pedestal but show distinct colors and shapes, representing the three cosmic energies.",
    },
    {
      question: "What is the legend of the Charan Paduka milestone?",
      answer: "Legend says that when Mata was escaping from the pursuit of Bhairon Nath, she stopped at Charan Paduka (2.5 km from Katra) to turn back and look at him. The rock she stood upon captured her footprints, which are still preserved and worshipped inside the temple at that location.",
    }
  ];

  const relatedGuides = [
    {
      title: "RFID Registration",
      desc: "Understand the mandatory RFID access card collection process.",
      url: "/services/yatra-registration"
    },
    {
      title: "Accommodation Booking",
      desc: "Learn how to reserve Shrine Board rooms and dorms.",
      url: "/services/room-booking"
    },
    {
      title: "Helicopter Booking",
      desc: "Review price lists, schedules, and heli flight reservations.",
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
            alt="Holy Trikuta Mountains Backdrop"
            fill
            priority
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left text-white">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight font-display text-gradient-gold drop-shadow-sm">
            About Shri Mata Vaishno Devi
          </h1>
          <p className="max-w-2xl text-xs md:text-base text-stone-200 mt-2 font-medium">
            Discover the history, sacred legends, and spiritual significance of the holy pilgrimage to the Trikuta Mountains.
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
          <span className="text-stone-800">About Yatra</span>
        </div>
      </div>

      {/* 3. Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full space-y-16">
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold text-saffron-600 tracking-widest uppercase bg-saffron-50 px-3 py-1 rounded-full">
              SPIRITUAL FOUNDATION
            </span>
            <h2 className="text-2xl md:text-3xl font-bold font-display text-stone-900 tracking-tight leading-tight">
              The Divine Manifestation of Mata Vaishnavi
            </h2>
            <p className="text-stone-650 text-sm md:text-base leading-relaxed">
              Mata Vaishno Devi is considered a combined manifestation of the three Supreme Energies (Mata Maha Kali, Mata Maha Lakshmi, and Mata Maha Saraswati). According to spiritual scriptures, the Goddess manifested in the Treta Yuga as a young girl named Vaishnavi, to observe spiritual penance, guide humanity, and destroy evil forces on Earth.
            </p>
            <p className="text-stone-650 text-sm md:text-base leading-relaxed">
              Her holy abode is situated inside a natural cave on the sacred Trikuta Mountain in Jammu and Kashmir. The cave rests at an altitude of 5,200 feet, where the Mother Goddess merged her human avatar back into her creators, leaving behind three natural rock formations (Pindies) that have been worshipped for millennia.
            </p>
          </div>
          <div className="lg:col-span-5 bg-white border border-stone-200 p-8 rounded-3xl shadow-xs">
            <h3 className="text-lg font-bold text-stone-950 mb-4 border-b border-stone-100 pb-3 font-display">
              Key Facts about the Shrine
            </h3>
            <ul className="space-y-4 text-xs sm:text-sm text-stone-650 font-medium">
              <li className="flex items-center gap-3">
                <span className="text-saffron-600 text-lg">📍</span>
                <span>Located in Reasi District, J&K (12 km from Katra base)</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-saffron-600 text-lg">⛰️</span>
                <span>Situated in Trikuta Hills (meaning 'Three-Peaked Hills')</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-saffron-600 text-lg">🐚</span>
                <span>Sanctum forms: Natural Pindies (No physical statues)</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-saffron-600 text-lg">👣</span>
                <span>Original trek length: 12 km (to Bhawan) + 1.5 km (to Bhairon)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 4. The Three Pindies Section */}
        <section className="bg-white border border-stone-200 p-8 md:p-12 rounded-3xl shadow-xs space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold text-crimson-600 tracking-widest uppercase bg-crimson-50 px-3 py-1 rounded-full">
              THE HOLY SANCTUM SANCTORUM
            </span>
            <h2 className="text-2xl md:text-3xl font-bold font-display text-stone-900 mt-4">
              Understanding the Three Sacred Pindies
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-2">
              Unlike traditional Hindu temples, the sanctum sanctorum houses three natural stone formations (Pindies) representing the different aspects of the Mother Goddess.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            {pindiDetails.map((pindi, idx) => (
              <div
                key={idx}
                className={`border rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-md ${pindi.accent}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${pindi.tagColor}`}>
                      {pindi.position}
                    </span>
                    <span className="text-xs font-bold text-stone-400">
                      Color: {pindi.color}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-2 font-display">
                    {pindi.title}
                  </h3>
                  <div className="text-xs font-extrabold text-saffron-700 uppercase tracking-wide mb-3">
                    {pindi.attribute}
                  </div>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                    {pindi.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Legends & History Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-bold font-display text-stone-950 border-l-4 border-crimson-700 pl-4">
              The Legend of Pandit Sridhar
            </h3>
            <p className="text-stone-650 text-sm leading-relaxed">
              Pandit Sridhar was a poor Brahmin priest who lived in Hansali village near Katra. He was a devout worshipper of the Mother Goddess but had no resources to host a community meal (Bhandara) as guided in a vision. The Goddess appeared as a young girl (Vaishnavi) and organized a grand feast where all local villagers, including the sage Gorakhnath and his disciple Bhairon Nath, were miraculously fed from a small pot.
            </p>
            <p className="text-stone-650 text-sm leading-relaxed">
              Following this, the young girl vanished to escape Bhairon's pursuit. Pandit Sridhar, filled with grief, began a deep fast. Mata appeared in his dreams and guided him to the cave in the Trikuta Hills, showing him the natural entrance and the three Pindies. Pandit Sridhar's descendants have served as priests in the cave for generations.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-bold font-display text-stone-950 border-l-4 border-crimson-700 pl-4">
              The Redemption of Bhairon Nath
            </h3>
            <p className="text-stone-650 text-sm leading-relaxed">
              Bhairon Nath, a powerful tantric yogi, chased Vaishnavi up the hills. To escape him, the Goddess paused at Banganga, Charan Paduka, and the Garbh Joon cave at Adhkuwari, where she observed nine months of meditation. When Bhairon discovered her location, the Goddess took the form of Maha Kali and decapitated him at the entrance of the Holy Cave.
            </p>
            <p className="text-stone-650 text-sm leading-relaxed">
              Upon dying, Bhairon realized her divinity and begged for forgiveness. The compassionate Mother Goddess forgave him and blessed him, decreeing that no pilgrim's journey would be considered complete without paying respects at the Bhairon Nath Temple, situated at the peak (6,600 ft) directly above the Holy Cave.
            </p>
          </div>
        </div>

        {/* 6. Notices & Guidelines */}
        <NoticeBox type="gold" title="Pilgrim Code of Conduct inside the Holy Cave">
          Photography, videography, and carrying electronic items (mobile phones, smart watches, cameras) are strictly prohibited inside the cave. Leather items (wallets, belts) must be deposited in the free cloakroom lockers at Bhawan. Pilgrims are requested to maintain traditional decorum and follow directions from security and Shrine Board volunteers.
        </NoticeBox>

        {/* 7. FAQ Section */}
        <section className="space-y-8">
          <h3 className="text-2xl font-bold font-display text-stone-950 text-center">
            Frequently Asked Historical Inquiries
          </h3>
          <div className="max-w-4xl mx-auto">
            <FAQAccordion items={historyFaqs} />
          </div>
        </section>

        {/* 8. Call to Action (Official Redirection) */}
        <section className="bg-gradient-saffron text-white rounded-3xl p-8 md:p-12 shadow-lg relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="absolute inset-0 bg-stone-950/10 pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl space-y-3">
            <span className="inline-block bg-crimson-800 text-white text-[10px] uppercase font-extrabold px-3 py-1 rounded-md tracking-wider">
              ⚠️ Official Booking Gateway
            </span>
            <h2 className="text-2xl md:text-3xl font-bold font-display tracking-tight text-white leading-tight">
              Book Official Puja & Seva Slots
            </h2>
            <p className="text-stone-100 text-xs md:text-sm leading-relaxed font-medium">
              Daily Havan, Atka Aarti reservations, and special Individual Poojan slots must be booked exclusively through the official Shri Mata Vaishno Devi Shrine Board gateway. We are an informational directory and do not process ticket payments.
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

        {/* 9. Related Guides Section */}
        <section className="border-t border-stone-250/50 pt-16">
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
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4">
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
