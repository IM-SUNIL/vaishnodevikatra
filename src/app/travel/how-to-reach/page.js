import Link from "next/link";

export const metadata = {
  title: "How to Reach Vaishno Devi Katra — Train, Flight, Road & Distance Guide",
  description:
    "How to reach Vaishno Devi Katra by train, flight, or road. Delhi to Vaishno Devi distance: 700 km. Jaipur to Vaishno Devi: 730 km. Nearest railway station: SVDK (Katra). Nearest airport: Jammu (IXJ). Vaishno Devi train ticket booking guide.",
  keywords: [
    "how to reach vaishno devi", "vaishno devi train", "vaishno devi train ticket",
    "delhi to vaishno devi", "jaipur to vaishno devi distance", "katra to vaishno devi",
    "vaishno devi distance", "vaishno devi katra", "katra vaishno devi",
    "vaishno devi by train", "vaishno devi by road", "vaishno devi by air",
    "SVDK railway station", "jammu to katra",
  ],
  openGraph: {
    title: "How to Reach Vaishno Devi Katra — Train, Flight, Road Distance",
    description: "Delhi to Vaishno Devi 700 km, Jaipur 730 km. Train, flight and road route complete guide.",
    type: "article",
  },
};

const routeCards = [
  {
    mode: "By Air ✈️",
    accent: "border-saffron-400 bg-saffron-50/40",
    tag: "Fastest",
    tagColor: "bg-saffron-500 text-white",
    steps: [
      {
        title: "Nearest Airport — Jammu Airport (IXJ)",
        desc: "Jammu Airport (Satwari) is the nearest airport to Katra, approximately 50 km away. Direct flights operate from Delhi, Mumbai, Chandigarh, Srinagar, and other major cities daily.",
      },
      {
        title: "Airport to Katra",
        desc: "From Jammu Airport take a pre-paid taxi (₹900–₹1,200) or book JKSRTC / private buses from the Jammu Bus Stand (6 km from the airport). Journey time is approximately 1.5–2 hours.",
      },
      {
        title: "Alternative — Amritsar Airport (ATQ)",
        desc: "Amritsar International Airport is ~220 km from Katra. Taxis and direct JKRTC buses connect Amritsar to Katra in ~5–6 hours.",
      },
    ],
    tips: ["Book flights 2–3 weeks in advance during Navratri", "Pre-book airport taxis online to avoid surge pricing"],
  },
  {
    mode: "By Train 🚂",
    accent: "border-crimson-400 bg-crimson-50/30",
    tag: "Recommended",
    tagColor: "bg-crimson-700 text-white",
    steps: [
      {
        title: "Nearest Railway Station — Katra (SVDK)",
        desc: "Shri Mata Vaishno Devi Katra Railway Station is the direct railhead, just 2 km from the Yatra Registration counters. Trains run directly from Delhi, Mumbai, Amritsar, Chandigarh, Kolkata, Chennai, and many other cities.",
      },
      {
        title: "Key Express Trains",
        desc: "Vande Bharat Express (Delhi–Katra), Shri Mata Vaishno Devi Katra Express, Uttar Sampark Kranti Express, Jammu Rajdhani. Check IRCTC for current schedules.",
      },
      {
        title: "Via Jammu Tawi Station (JAT)",
        desc: "If your train terminates at Jammu Tawi (a larger junction), take a local shared taxi or government bus to Katra Bus Stand — journey is approximately 50 km / 1.5 hours.",
      },
    ],
    tips: [
      "Book Tatkal quota if travelling during peak season",
      "SVDK station is much closer — always prefer trains terminating here",
    ],
  },
  {
    mode: "By Road 🚌",
    accent: "border-gold-400 bg-gold-50/30",
    tag: "Budget Option",
    tagColor: "bg-gold-600 text-white",
    steps: [
      {
        title: "From Delhi (~700 km)",
        desc: "Take NH-44 via Jalandhar–Jammu–Katra. JKRTC and private Volvo buses depart from Delhi ISBT Kashmere Gate daily overnight. Journey: ~12–14 hours. Private taxi: ₹5,000–₹8,000.",
      },
      {
        title: "From Jammu (~50 km)",
        desc: "Shared taxis (₹150–₹200 per seat) and JKRTC buses depart frequently from Jammu Bus Stand throughout the day. Journey takes 1–1.5 hours on the mountain highway.",
      },
      {
        title: "From Amritsar (~220 km)",
        desc: "Direct JKRTC buses from Amritsar ISBT. Private taxis available. Journey ~5 hours via NH-44.",
      },
      {
        title: "From Chandigarh (~380 km)",
        desc: "Overnight HRTC and JKRTC deluxe buses from Sector-43 Bus Stand. Journey ~7 hours.",
      },
    ],
    tips: [
      "Own vehicles can be parked at the Shrine Board's designated parking lot in Katra (paid)",
      "Traffic is very heavy during Navratri — start journey at night to avoid jams",
    ],
  },
];

const distanceTable = [
  { city: "Delhi", distance: "700 km", trainTime: "10–12 hrs", roadTime: "12–14 hrs", airTime: "1 hr (to Jammu)" },
  { city: "Jaipur", distance: "730 km", trainTime: "12–14 hrs", roadTime: "13–15 hrs", airTime: "1.5 hrs (via Delhi)" },
  { city: "Jammu", distance: "50 km", trainTime: "1 hr", roadTime: "1.5 hrs", airTime: "—" },
  { city: "Amritsar", distance: "220 km", trainTime: "4 hrs", roadTime: "5 hrs", airTime: "1 hr (to Jammu)" },
  { city: "Chandigarh", distance: "380 km", trainTime: "6 hrs", roadTime: "7 hrs", airTime: "—" },
  { city: "Mumbai", distance: "1,900 km", trainTime: "36+ hrs", roadTime: "—", airTime: "1.5 hrs (to Jammu)" },
  { city: "Ludhiana", distance: "270 km", trainTime: "5 hrs", roadTime: "5.5 hrs", airTime: "—" },
];

export default function HowToReachPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-cream-50 animate-fade-in-up">
      {/* Hero */}
      <section className="relative bg-stone-900 overflow-hidden">
        <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-saffron-500/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-56 h-56 rounded-full bg-crimson-700/15 blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <span className="inline-block text-xs font-bold text-saffron-400 tracking-widest uppercase bg-saffron-950/50 px-4 py-1.5 rounded-full mb-4">
            Travel Info
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-display text-white leading-tight">
            How to Reach Katra
          </h1>
          <p className="mt-4 text-stone-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Complete guide to reaching the base camp of Mata Vaishno Devi — Katra — by air, train, and road from major Indian cities.
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
          <span className="text-stone-800">How to Reach</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 w-full space-y-14">

        {/* Quick Info Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Base Camp", value: "Katra, Reasi", icon: "📍" },
            { label: "Nearest Airport", value: "Jammu (IXJ)", icon: "✈️" },
            { label: "Nearest Railway", value: "Katra (SVDK)", icon: "🚂" },
            { label: "Distance from Delhi", value: "~700 km", icon: "🛣️" },
          ].map((item) => (
            <div key={item.label} className="bg-white border border-stone-200 rounded-2xl p-4 text-center shadow-xs">
              <div className="text-2xl mb-1">{item.icon}</div>
              <div className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">{item.label}</div>
              <div className="text-sm font-extrabold text-stone-900">{item.value}</div>
            </div>
          ))}
        </div>

        {/* Route Cards */}
        <div className="space-y-8">
          <div className="text-center">
            <span className="text-xs font-bold text-saffron-600 tracking-widest uppercase bg-saffron-50 px-3.5 py-1.5 rounded-full">
              Routes to Katra
            </span>
            <h2 className="text-2xl md:text-3xl font-bold font-display text-stone-900 mt-3">
              Choose Your Mode of Travel
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {routeCards.map((card) => (
              <div key={card.mode} className={`bg-white border-2 ${card.accent} rounded-3xl overflow-hidden shadow-xs flex flex-col`}>
                <div className="px-6 pt-6 pb-4 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-stone-900 font-display">{card.mode}</h3>
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest ${card.tagColor}`}>
                    {card.tag}
                  </span>
                </div>
                <div className="px-6 pb-4 flex-1 space-y-4">
                  {card.steps.map((step, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-stone-100 text-stone-600 text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-stone-900 mb-0.5">{step.title}</p>
                        <p className="text-xs text-stone-550 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {card.tips.length > 0 && (
                  <div className="mx-6 mb-6 bg-stone-50 border border-stone-100 rounded-xl p-3 space-y-1">
                    {card.tips.map((tip, i) => (
                      <p key={i} className="text-[11px] text-stone-600 leading-relaxed">
                        💡 {tip}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Distance Table */}
        <div className="bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-xs">
          <div className="px-6 py-4 border-b border-stone-100">
            <h2 className="text-lg font-bold text-stone-900 font-display">Distance & Travel Time Reference</h2>
            <p className="text-xs text-stone-500 mt-0.5">Approximate travel times from major cities to Katra</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="bg-stone-50 border-b border-stone-100">
                  <th className="px-6 py-3 font-bold text-stone-500 uppercase tracking-widest">City</th>
                  <th className="px-6 py-3 font-bold text-stone-500 uppercase tracking-widest">Distance</th>
                  <th className="px-6 py-3 font-bold text-stone-500 uppercase tracking-widest">🚂 Train</th>
                  <th className="px-6 py-3 font-bold text-stone-500 uppercase tracking-widest">🚌 Road</th>
                  <th className="px-6 py-3 font-bold text-stone-500 uppercase tracking-widest">✈️ Air</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {distanceTable.map((row) => (
                  <tr key={row.city} className="hover:bg-saffron-50/30 transition-colors">
                    <td className="px-6 py-3 font-bold text-stone-900">{row.city}</td>
                    <td className="px-6 py-3 text-stone-600">{row.distance}</td>
                    <td className="px-6 py-3 text-stone-600">{row.trainTime}</td>
                    <td className="px-6 py-3 text-stone-600">{row.roadTime}</td>
                    <td className="px-6 py-3 text-stone-600">{row.airTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Local transport at Katra */}
        <div className="bg-stone-900 text-white rounded-3xl p-8 md:p-10">
          <h2 className="text-xl font-bold font-display mb-2">🚖 At Katra — Local Transport</h2>
          <p className="text-stone-300 text-xs mb-6 leading-relaxed">Once you arrive at Katra, the Yatra starts from Banganga checkpost (~2 km from Katra Bus Stand). Here are your options to reach the starting point.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "Auto-Rickshaws", desc: "₹30–₹50 per person. Widely available from Katra Bus Stand to Banganga gate." },
              { title: "Shared Taxis", desc: "₹40–₹60 per seat. Faster than autos, available near the railway station exit." },
              { title: "On Foot", desc: "The walk from Katra market to Banganga is ~1.5 km. Recommended for fit pilgrims with light bags." },
            ].map((item) => (
              <div key={item.title} className="bg-white/10 border border-white/10 rounded-2xl p-4">
                <h4 className="text-sm font-bold text-saffron-300 mb-1">{item.title}</h4>
                <p className="text-xs text-stone-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4 pt-4">
          <p className="text-xs text-stone-500 font-semibold">Ready to plan your Yatra? Check the other travel guides:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/travel/weather" className="inline-block px-6 py-2.5 bg-white border border-stone-200 hover:border-saffron-400 text-stone-700 hover:text-saffron-600 text-xs font-bold rounded-full shadow-xs transition-all duration-300">
              🌤️ Weather Guide →
            </Link>
            <Link href="/travel/packing-guide" className="inline-block px-6 py-2.5 bg-white border border-stone-200 hover:border-saffron-400 text-stone-700 hover:text-saffron-600 text-xs font-bold rounded-full shadow-xs transition-all duration-300">
              🎒 Packing Guide →
            </Link>
            <Link href="/services" className="inline-block px-6 py-2.5 bg-crimson-700 hover:bg-crimson-800 text-white text-xs font-bold rounded-full shadow-md transition-all duration-300">
              Book Services →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
