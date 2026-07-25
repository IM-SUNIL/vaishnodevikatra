import Link from "next/link";

export const metadata = {
  title: "Vaishno Devi Ka Mausam & Katra Weather — Temperature Guide 2025",
  description:
    "Check Vaishno Devi ka mausam (weather) and Katra temperature today. Complete seasonal guide: vaishno devi ka temperature, katra weather, best time to visit vaishno devi, snowfall months, and monthly temperature table from Katra to Bhawan altitude.",
  keywords: [
    "vaishno devi weather", "weather vaishno devi", "vaishno devi temperature",
    "vaishno devi ka temperature", "vaishno devi ka mausam", "katra weather",
    "vaishno devi katra weather", "katra vaishno devi weather", "weather katra vaishno devi",
    "vaishnodevi weather", "vaishno devi best time to visit", "best time to visit vaishno devi",
    "katra ka mausam", "vaishno devi mausam", "katra temperature",
  ],
  openGraph: {
    title: "Vaishno Devi Ka Mausam & Katra Weather Guide",
    description: "Vaishno Devi weather, katra mausam, temperature, best time to visit — complete seasonal guide.",
    type: "article",
  },
};

const seasons = [
  {
    name: "Spring",
    months: "March – May",
    emoji: "🌸",
    rating: 5,
    tag: "Best Season",
    tagColor: "bg-saffron-500 text-white",
    accent: "border-saffron-300 bg-saffron-50/30",
    katTemp: "12°C – 28°C",
    bhawanTemp: "5°C – 18°C",
    crowd: "Moderate",
    highlights: [
      "Pleasant cool weather ideal for the 12 km trek",
      "Flowers bloom along the trail — Trikuta mountain is stunning",
      "Navratri (March/April) brings massive pilgrim surge",
      "Snow melts at higher altitudes — trail fully open",
    ],
    warnings: ["Navratri brings extreme crowds — book accommodation weeks in advance"],
  },
  {
    name: "Summer",
    months: "June – August",
    emoji: "☀️",
    rating: 3,
    tag: "Hot in Katra",
    tagColor: "bg-gold-600 text-white",
    accent: "border-gold-300 bg-gold-50/20",
    katTemp: "28°C – 42°C",
    bhawanTemp: "15°C – 25°C",
    crowd: "High",
    highlights: [
      "Katra is hot but Bhawan altitude stays pleasantly cool",
      "No risk of snow on the trail",
      "Good for early morning or night treks to beat the heat",
      "Schools are on break — family pilgrim groups peak",
    ],
    warnings: [
      "Monsoon rains (July–August) can make the trail slippery",
      "Carry rain ponchos — sudden downpours are common",
      "Bhairon Nath ropeway may stop during heavy rain",
    ],
  },
  {
    name: "Autumn",
    months: "September – November",
    emoji: "🍂",
    rating: 5,
    tag: "Best Season",
    tagColor: "bg-saffron-500 text-white",
    accent: "border-crimson-300 bg-crimson-50/20",
    katTemp: "15°C – 30°C",
    bhawanTemp: "5°C – 15°C",
    crowd: "Very High",
    highlights: [
      "Post-monsoon clarity — crystal clear mountain views",
      "Navratri (October) — most auspicious time for Yatra",
      "Cool pleasant temperatures throughout the trek",
      "Ideal for photography — sky is clearest in October",
    ],
    warnings: [
      "October Navratri is the single busiest period — 1 lakh+ pilgrims per day",
      "Darshan wait times can stretch 8–12 hours — book Atka Aarti in advance",
    ],
  },
  {
    name: "Winter",
    months: "December – February",
    emoji: "❄️",
    rating: 2,
    tag: "Challenging",
    tagColor: "bg-stone-600 text-white",
    accent: "border-stone-300 bg-stone-50/30",
    katTemp: "5°C – 18°C",
    bhawanTemp: "-8°C – 5°C",
    crowd: "Low",
    highlights: [
      "Lowest crowds — minimal wait times for Darshan",
      "Snow-covered trail offers a rare, divine experience",
      "Helicopter services may be the only option to upper sections",
      "Budget accommodation easily available",
    ],
    warnings: [
      "Heavy snowfall may close the trek trail temporarily",
      "Bhairon Nath ropeway often suspended in December–January",
      "Mandatory to carry thermal layers, gloves, and waterproof shoes",
      "Check trail status on the official website before departure",
    ],
  },
];

const tempTable = [
  { month: "January", katra: "5°C – 18°C", bhawan: "-8°C – 2°C", snow: "Heavy", crowd: "Low" },
  { month: "February", katra: "7°C – 20°C", bhawan: "-5°C – 4°C", snow: "Moderate", crowd: "Low" },
  { month: "March", katra: "12°C – 26°C", bhawan: "0°C – 10°C", snow: "Light", crowd: "Moderate" },
  { month: "April", katra: "16°C – 30°C", bhawan: "5°C – 15°C", snow: "None", crowd: "Very High (Navratri)" },
  { month: "May", katra: "22°C – 36°C", bhawan: "8°C – 18°C", snow: "None", crowd: "High" },
  { month: "June", katra: "26°C – 40°C", bhawan: "12°C – 22°C", snow: "None", crowd: "High" },
  { month: "July", katra: "28°C – 38°C", bhawan: "14°C – 22°C", snow: "None", crowd: "High" },
  { month: "August", katra: "26°C – 36°C", bhawan: "13°C – 21°C", snow: "None", crowd: "High" },
  { month: "September", katra: "22°C – 32°C", bhawan: "8°C – 18°C", snow: "None", crowd: "Moderate" },
  { month: "October", katra: "16°C – 28°C", bhawan: "4°C – 14°C", snow: "None", crowd: "Very High (Navratri)" },
  { month: "November", katra: "10°C – 22°C", bhawan: "-2°C – 8°C", snow: "Light", crowd: "Moderate" },
  { month: "December", katra: "6°C – 18°C", bhawan: "-6°C – 2°C", snow: "Heavy", crowd: "Low" },
];

function StarRating({ count }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} className={`w-3.5 h-3.5 ${i <= count ? "text-saffron-500" : "text-stone-200"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function WeatherPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-cream-50 animate-fade-in-up">
      {/* Hero */}
      <section className="relative bg-stone-900 overflow-hidden">
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-saffron-500/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-56 h-56 rounded-full bg-crimson-700/15 blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <span className="inline-block text-xs font-bold text-saffron-400 tracking-widest uppercase bg-saffron-950/50 px-4 py-1.5 rounded-full mb-4">
            Travel Info
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-display text-white leading-tight">
            Weather & Best Time to Visit
          </h1>
          <p className="mt-4 text-stone-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Know the climate at Katra and Bhawan altitude for every season — so you can plan the perfect Yatra.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-cream-100/50 border-b border-stone-200/50 py-3 text-xs font-semibold text-stone-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
          <Link href="/" className="hover:text-saffron-600 transition-colors">Home</Link>
          <span className="text-stone-400">/</span>
          <span className="text-stone-500">Travel Info</span>
          <span className="text-stone-400">/</span>
          <span className="text-stone-800">Weather Guide</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 w-full space-y-14">

        {/* Altitude notice */}
        <div className="bg-saffron-50 border border-saffron-200 rounded-2xl px-6 py-4 flex gap-3 items-start">
          <span className="text-xl flex-shrink-0">⛰️</span>
          <div>
            <p className="text-xs font-bold text-saffron-800 mb-1">Two Different Climates on the Same Trek</p>
            <p className="text-xs text-saffron-700 leading-relaxed">
              Katra base camp sits at ~910 m (2,990 ft) while Bhawan is at ~1,584 m (5,200 ft) and Bhairon Nath Temple at ~2,010 m (6,600 ft). The temperature difference between Katra and Bhawan can be <strong>10–15°C colder</strong>. Always carry warm layers even in summer.
            </p>
          </div>
        </div>

        {/* Season Cards */}
        <div className="space-y-6">
          <div className="text-center">
            <span className="text-xs font-bold text-saffron-600 tracking-widest uppercase bg-saffron-50 px-3.5 py-1.5 rounded-full">
              Seasonal Breakdown
            </span>
            <h2 className="text-2xl md:text-3xl font-bold font-display text-stone-900 mt-3">
              Season-by-Season Guide
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {seasons.map((s) => (
              <div key={s.name} className={`bg-white border-2 ${s.accent} rounded-3xl overflow-hidden shadow-xs`}>
                <div className="px-6 pt-6 pb-3 flex items-start justify-between gap-3">
                  <div>
                    <div className="text-3xl mb-1">{s.emoji}</div>
                    <h3 className="text-lg font-bold text-stone-900 font-display">{s.name}</h3>
                    <p className="text-xs text-stone-500 font-semibold">{s.months}</p>
                    <StarRating count={s.rating} />
                  </div>
                  <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest flex-shrink-0 ${s.tagColor}`}>
                    {s.tag}
                  </span>
                </div>

                <div className="px-6 pb-2 grid grid-cols-3 gap-2">
                  <div className="bg-stone-50 rounded-xl p-2 text-center">
                    <p className="text-[9px] text-stone-400 font-bold uppercase tracking-widest">Katra Temp</p>
                    <p className="text-xs font-bold text-stone-800 mt-0.5">{s.katTemp}</p>
                  </div>
                  <div className="bg-stone-50 rounded-xl p-2 text-center">
                    <p className="text-[9px] text-stone-400 font-bold uppercase tracking-widest">Bhawan Temp</p>
                    <p className="text-xs font-bold text-stone-800 mt-0.5">{s.bhawanTemp}</p>
                  </div>
                  <div className="bg-stone-50 rounded-xl p-2 text-center">
                    <p className="text-[9px] text-stone-400 font-bold uppercase tracking-widest">Crowd</p>
                    <p className="text-xs font-bold text-stone-800 mt-0.5">{s.crowd}</p>
                  </div>
                </div>

                <div className="px-6 py-3 space-y-1.5">
                  {s.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-saffron-500 font-bold text-xs mt-0.5 flex-shrink-0">✓</span>
                      <p className="text-xs text-stone-650 leading-relaxed">{h}</p>
                    </div>
                  ))}
                </div>

                {s.warnings.length > 0 && (
                  <div className="mx-6 mb-5 bg-crimson-50 border border-crimson-100 rounded-xl p-3 space-y-1">
                    {s.warnings.map((w, i) => (
                      <p key={i} className="text-[11px] text-crimson-700 leading-relaxed">⚠️ {w}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Temp Table */}
        <div className="bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-xs">
          <div className="px-6 py-4 border-b border-stone-100">
            <h2 className="text-lg font-bold text-stone-900 font-display">Monthly Temperature Reference</h2>
            <p className="text-xs text-stone-500 mt-0.5">Typical temperature ranges at Katra and Bhawan across the year</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="bg-stone-50 border-b border-stone-100">
                  <th className="px-5 py-3 font-bold text-stone-500 uppercase tracking-widest">Month</th>
                  <th className="px-5 py-3 font-bold text-stone-500 uppercase tracking-widest">Katra (910m)</th>
                  <th className="px-5 py-3 font-bold text-stone-500 uppercase tracking-widest">Bhawan (1584m)</th>
                  <th className="px-5 py-3 font-bold text-stone-500 uppercase tracking-widest">Snowfall</th>
                  <th className="px-5 py-3 font-bold text-stone-500 uppercase tracking-widest">Crowd Level</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {tempTable.map((row) => (
                  <tr key={row.month} className="hover:bg-saffron-50/30 transition-colors">
                    <td className="px-5 py-3 font-bold text-stone-900">{row.month}</td>
                    <td className="px-5 py-3 text-stone-600">{row.katra}</td>
                    <td className="px-5 py-3 text-stone-600">{row.bhawan}</td>
                    <td className="px-5 py-3">
                      <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        row.snow === "Heavy" ? "bg-stone-200 text-stone-700" :
                        row.snow === "Moderate" ? "bg-stone-100 text-stone-600" :
                        row.snow === "Light" ? "bg-blue-50 text-blue-700" :
                        "bg-saffron-50 text-saffron-700"
                      }`}>
                        {row.snow}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-stone-600">{row.crowd}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Dark CTA Strip */}
        <div className="bg-stone-900 text-white rounded-3xl p-8 text-center space-y-4">
          <h3 className="text-xl font-bold font-display">🌤️ Best Months to Visit</h3>
          <p className="text-stone-300 text-sm max-w-lg mx-auto leading-relaxed">
            <strong className="text-saffron-400">March–May</strong> and <strong className="text-saffron-400">September–November</strong> offer the most comfortable trekking conditions. If you want lowest crowds, visit in <strong className="text-gold-400">January or February</strong>.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link href="/travel/packing-guide" className="inline-block px-6 py-2.5 bg-saffron-500 hover:bg-saffron-600 text-white text-xs font-bold rounded-full shadow-md transition-all duration-300">
              🎒 Packing Guide →
            </Link>
            <Link href="/travel/how-to-reach" className="inline-block px-6 py-2.5 bg-white/10 border border-white/20 hover:bg-white/20 text-white text-xs font-bold rounded-full transition-all duration-300">
              How to Reach Katra →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
