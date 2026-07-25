import Link from "next/link";

export const metadata = {
  title: "Vaishno Devi Trek Distance & Height — Complete Track Guide (12 km Route)",
  description:
    "Vaishno Devi ki chadhai kitne kilometre hai? Trek distance from Katra to Bhawan is 12 km. Vaishno Devi height from sea level: 5,200 ft (1,584 m). Complete trek route guide covering all stops: Banganga, Charan Paduka, Adhkuwari, Sanjichhat, Bhawan, Bhairon Temple.",
  keywords: [
    "vaishno devi trek", "vaishno devi track", "vaishno devi ki chadhai kitne kilometre hai",
    "vaishno devi ki chadhai kitni hai", "vaishno devi ki chadhai kitne kilometre ki hai",
    "vaishno devi distance", "vaishno devi distance walk from katra", "katra to vaishno devi distance",
    "vaishno devi height from sea level", "vaishno devi altitude", "vaishno devi height",
    "katra to vaishno devi", "vaishno devi bhawan", "vaishno devi route",
    "vaishno devi trek distance", "vaishno devi track length",
  ],
  openGraph: {
    title: "Vaishno Devi Trek Guide — 12 km Route, Height & Altitude Details",
    description: "Complete trek guide: Katra to Bhawan 12 km, height 5200 ft. All stops, distances, timings, and tips.",
    type: "article",
  },
};

/* Trek stops data */
const trekStops = [
  {
    name: "Katra (Base Camp)",
    altitude: "910 m (2,990 ft)",
    distFromKatra: "0 km",
    cumulativeDistance: "0 km",
    timeFromPrev: "Start",
    description:
      "The starting point and base camp for all Vaishno Devi pilgrims. Collect your RFID Yatra Parchi here from the counters at Katra Railway Station or Bus Stand before beginning the trek.",
    facilities: ["RFID Counters", "Hotels & Dharamshalas", "Bus Stand & Railway Station", "Medical Centre", "Luggage Lockers"],
    accent: "border-stone-400 bg-stone-50",
    num: "00",
  },
  {
    name: "Banganga (Security Gate)",
    altitude: "930 m (3,050 ft)",
    distFromKatra: "2 km",
    cumulativeDistance: "2 km",
    timeFromPrev: "30–40 min walk",
    description:
      "The official Yatra begins here. RFID card mandatory check-in. The holy Banganga stream flows here — pilgrims traditionally take a dip in the sacred water before proceeding. Route splits: Tarakote Marg (shorter, steeper) and Himkoti Marg (longer, gradual).",
    facilities: ["RFID Checkpoint", "Free Water Station", "Toilet Blocks", "Medical Aid Post", "Banganga Kund (Sacred Pool)"],
    accent: "border-saffron-300 bg-saffron-50/30",
    num: "01",
  },
  {
    name: "Charan Paduka",
    altitude: "1,140 m (3,740 ft)",
    distFromKatra: "4.5 km",
    cumulativeDistance: "4.5 km",
    timeFromPrev: "1–1.5 hrs from Banganga",
    description:
      "A small shrine containing rock footprints of Mata Vaishno Devi. Legend says Mata rested here during her escape from Bhairon Nath and her footprints were imprinted on the rock. A significant spiritual stop on the Yatra route.",
    facilities: ["Small Temple", "Rest Area", "Refreshment Stalls", "Toilet Blocks"],
    accent: "border-saffron-400 bg-saffron-50/40",
    num: "02",
  },
  {
    name: "Adhkuwari (Half Way Cave)",
    altitude: "1,308 m (4,290 ft)",
    distFromKatra: "6 km",
    cumulativeDistance: "6 km",
    timeFromPrev: "1–1.5 hrs from Charan Paduka",
    description:
      "The midpoint of the Yatra. Name means 'half way'. Mata Vaishno Devi meditated in the Garbh Joon Cave here for 9 months. A 33-feet long natural cave that pilgrims crawl through as a spiritual exercise. Battery Car terminal is located here.",
    facilities: ["Garbh Joon Cave Temple", "Battery Car Terminal", "Shrine Board Rest Rooms", "Medical Centre", "Bhojnalaya (Free Langgar)", "Cloak Room"],
    accent: "border-gold-400 bg-gold-50/30",
    num: "03",
  },
  {
    name: "Sanjichhat (Helicopter Landing)",
    altitude: "1,463 m (4,800 ft)",
    distFromKatra: "9 km",
    cumulativeDistance: "9 km",
    timeFromPrev: "1.5–2 hrs from Adhkuwari",
    description:
      "The helicopter landing pad is located here. Pilgrims arriving by helicopter land at Sanjichhat and then walk the remaining 2.5 km uphill to Bhawan. Also accessible by Battery Cars from Adhkuwari.",
    facilities: ["Helicopter Pad", "Battery Car Terminal", "Rest Area", "Refreshment Stalls", "Toilet Blocks"],
    accent: "border-crimson-300 bg-crimson-50/20",
    num: "04",
  },
  {
    name: "Holy Bhawan (Main Shrine)",
    altitude: "1,584 m (5,200 ft)",
    distFromKatra: "12 km",
    cumulativeDistance: "12 km",
    timeFromPrev: "45 min–1 hr from Sanjichhat",
    description:
      "The final destination — the Holy Cave Shrine of Shri Mata Vaishno Devi. The three natural rock formations (Pindies) of Maha Kali, Maha Lakshmi, and Maha Saraswati are enshrined here. Darshan happens inside the natural cave. Cloakroom mandatory before entering the cave.",
    facilities: ["Holy Cave Temple", "Cloak Rooms (Mandatory)", "Shrine Board Bhojnalaya", "Prasad Counter", "Medical Centre", "Atka Aarti Hall", "Free Langgar"],
    accent: "border-crimson-500 bg-crimson-50/30",
    num: "05",
  },
  {
    name: "Bhairon Nath Temple",
    altitude: "2,010 m (6,600 ft)",
    distFromKatra: "13.5 km",
    cumulativeDistance: "13.5 km",
    timeFromPrev: "45–60 min from Bhawan (steep 1.5 km climb)",
    description:
      "The highest point of the Yatra at 6,600 ft. According to legend, the Yatra is considered incomplete without visiting the Bhairon Nath Temple. Bhairon Nath's head fell here after he was slain by Mata Vaishno Devi. Panoramic views of the Trikuta mountain range.",
    facilities: ["Bhairon Nath Temple", "Rest Area", "Refreshment Stalls"],
    accent: "border-stone-700 bg-stone-50",
    num: "06",
  },
];

const altitudeData = [
  { stop: "Katra", altitude: "910 m", ft: "2,990 ft", bar: 14 },
  { stop: "Banganga", altitude: "930 m", ft: "3,050 ft", bar: 15 },
  { stop: "Charan Paduka", altitude: "1,140 m", ft: "3,740 ft", bar: 42 },
  { stop: "Adhkuwari", altitude: "1,308 m", ft: "4,290 ft", bar: 59 },
  { stop: "Sanjichhat", altitude: "1,463 m", ft: "4,800 ft", bar: 73 },
  { stop: "Bhawan", altitude: "1,584 m", ft: "5,200 ft", bar: 85 },
  { stop: "Bhairon Temple", altitude: "2,010 m", ft: "6,600 ft", bar: 100 },
];

const trailFaqs = [
  {
    q: "Vaishno Devi ki chadhai kitne kilometre hai?",
    a: "Katra se Bhawan tak ki chadhai 12 kilometre hai (ek taraf). Bhairon Nath Temple tak 13.5 km hai. Aane-jaane ka total distance 27 km hai.",
  },
  {
    q: "Vaishno Devi height from sea level kitni hai?",
    a: "Vaishno Devi Bhawan ki height 1,584 metres (5,200 feet) hai sea level se. Bhairon Nath Temple 2,010 metres (6,600 feet) par hai — yatra ka sabse uchha point.",
  },
  {
    q: "Vaishno Devi ki chadhai mein kitna time lagta hai?",
    a: "Ek healthy adult ke liye Katra se Bhawan tak 4 se 6 ghante lagte hain. Bhairon Temple tak 5 se 7.5 ghante. Wapsi mein 3-4 ghante lagte hain.",
  },
  {
    q: "Which route is better — Tarakote Marg or Himkoti Marg?",
    a: "Tarakote Marg is the traditional route (12 km) — shorter and well-paved. Himkoti Marg (via Himkoti) is 14.5 km but gentler gradient. Tarakote is recommended for first-timers.",
  },
  {
    q: "What is the route after Bhawan?",
    a: "After Bhawan Darshan, the yatra continues to Bhairon Nath Temple — 1.5 km further uphill at a steep gradient. Most pilgrims visit Bhairon Temple before descending back to Katra.",
  },
];

export default function TrekPage() {
  const trekSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": "Vaishno Devi Trek — Katra to Bhawan",
    "description": "12 km holy trekking route from Katra (Banganga) to Bhawan Shrine of Mata Vaishno Devi, ascending from 910 m to 1584 m above sea level.",
    "touristType": "Pilgrim",
    "itinerary": {
      "@type": "ItemList",
      "itemListElement": trekStops.map((stop, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": stop.name,
        "description": stop.description,
      })),
    },
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-cream-50 animate-fade-in-up">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(trekSchema) }}
      />

      {/* Hero */}
      <section className="relative bg-stone-900 overflow-hidden">
        <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-saffron-500/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-56 h-56 rounded-full bg-crimson-700/15 blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <span className="inline-block text-xs font-bold text-saffron-400 tracking-widest uppercase bg-saffron-950/50 px-4 py-1.5 rounded-full mb-4">
            Trek Guide
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-display text-white leading-tight">
            Vaishno Devi Trek Route
          </h1>
          <p className="mt-4 text-stone-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Complete guide to the <strong className="text-saffron-400">12 km trek</strong> from Katra to Bhawan —{" "}
            altitude, distance, stops, facilities and timings for every checkpoint.
          </p>
          {/* Quick answer box targeting featured snippet */}
          <div className="mt-8 inline-block bg-white/10 border border-white/20 rounded-2xl px-8 py-4 backdrop-blur-sm text-left">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              {[
                { label: "Trek Distance", value: "12 km", sub: "(Katra to Bhawan)" },
                { label: "Bhawan Height", value: "5,200 ft", sub: "(1,584 m) sea level" },
                { label: "Bhairon Peak", value: "6,600 ft", sub: "(2,010 m) highest point" },
                { label: "Trek Duration", value: "4–6 hrs", sub: "for healthy adults" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-[10px] text-stone-400 uppercase tracking-widest font-bold">{item.label}</p>
                  <p className="text-2xl font-extrabold text-saffron-400 font-display">{item.value}</p>
                  <p className="text-[10px] text-stone-400">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-cream-100/50 border-b border-stone-200/50 py-3 text-xs font-semibold text-stone-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
          <Link href="/" className="hover:text-saffron-600 transition-colors">Home</Link>
          <span className="text-stone-400">/</span>
          <span className="text-stone-800">Trek Guide</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 w-full space-y-14">

        {/* Altitude Chart */}
        <div className="bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-xs">
          <div className="px-6 py-4 border-b border-stone-100">
            <h2 className="text-lg font-bold text-stone-900 font-display">⛰️ Altitude Profile — Katra to Bhairon Temple</h2>
            <p className="text-xs text-stone-500 mt-0.5">Height above sea level at each major stop</p>
          </div>
          <div className="px-6 py-5 space-y-3">
            {altitudeData.map((item) => (
              <div key={item.stop} className="flex items-center gap-4">
                <div className="w-28 text-xs font-bold text-stone-700 text-right flex-shrink-0">{item.stop}</div>
                <div className="flex-1 bg-stone-100 rounded-full h-5 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-saffron-400 to-crimson-600 flex items-center justify-end pr-2 transition-all duration-500"
                    style={{ width: `${item.bar}%` }}
                  >
                    <span className="text-[9px] font-bold text-white whitespace-nowrap">{item.ft}</span>
                  </div>
                </div>
                <div className="w-16 text-xs text-stone-500 flex-shrink-0">{item.altitude}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Trek Stops */}
        <div className="space-y-6">
          <div className="text-center">
            <span className="text-xs font-bold text-saffron-600 tracking-widest uppercase bg-saffron-50 px-3.5 py-1.5 rounded-full">
              Route Breakdown
            </span>
            <h2 className="text-2xl md:text-3xl font-bold font-display text-stone-900 mt-3">
              All Trek Stops — Distance & Facilities
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-7 top-10 bottom-10 w-0.5 bg-gradient-to-b from-saffron-200 via-gold-300 to-crimson-300 hidden md:block" />

            <div className="space-y-5">
              {trekStops.map((stop, i) => (
                <div key={stop.name} className="relative flex gap-5">
                  {/* Step number bubble */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-stone-900 text-white font-extrabold text-lg flex items-center justify-center font-display shadow-md z-10">
                    {stop.num}
                  </div>
                  <div className={`flex-1 bg-white border-2 ${stop.accent} rounded-2xl p-5 shadow-xs`}>
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <h3 className="text-base font-bold text-stone-900 font-display">{stop.name}</h3>
                      <div className="flex gap-2 flex-wrap">
                        <span className="bg-saffron-100 text-saffron-700 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest">
                          {stop.distFromKatra} from Katra
                        </span>
                        <span className="bg-stone-100 text-stone-600 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest">
                          {stop.altitude}
                        </span>
                        {i > 0 && (
                          <span className="bg-crimson-50 text-crimson-700 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest">
                            {stop.timeFromPrev}
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed mb-3">{stop.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {stop.facilities.map((f) => (
                        <span key={f} className="bg-stone-50 border border-stone-150 text-stone-600 text-[10px] font-semibold px-2 py-0.5 rounded-md">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Route Summary Table */}
        <div className="bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-xs">
          <div className="px-6 py-4 border-b border-stone-100">
            <h2 className="text-lg font-bold text-stone-900 font-display">📏 Trek Distance Summary</h2>
            <p className="text-xs text-stone-500 mt-0.5">Vaishno Devi ki chadhai — complete distance chart</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="bg-stone-50 border-b border-stone-100">
                  <th className="px-5 py-3 font-bold text-stone-500 uppercase tracking-widest">Stop</th>
                  <th className="px-5 py-3 font-bold text-stone-500 uppercase tracking-widest">Distance from Katra</th>
                  <th className="px-5 py-3 font-bold text-stone-500 uppercase tracking-widest">Altitude (m)</th>
                  <th className="px-5 py-3 font-bold text-stone-500 uppercase tracking-widest">Altitude (ft)</th>
                  <th className="px-5 py-3 font-bold text-stone-500 uppercase tracking-widest">Est. Time from Prev</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {trekStops.map((stop) => (
                  <tr key={stop.name} className="hover:bg-saffron-50/30 transition-colors">
                    <td className="px-5 py-3 font-bold text-stone-900">{stop.name}</td>
                    <td className="px-5 py-3 text-stone-600">{stop.distFromKatra}</td>
                    <td className="px-5 py-3 text-stone-600">{altitudeData.find(a => a.stop === stop.name.split(" (")[0])?.altitude ?? stop.altitude.split(" ")[0]}</td>
                    <td className="px-5 py-3 font-semibold text-crimson-700">{altitudeData.find(a => a.stop === stop.name.split(" (")[0])?.ft ?? "—"}</td>
                    <td className="px-5 py-3 text-stone-600">{stop.timeFromPrev}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ section in Hindi + English targeting search queries */}
        <div className="space-y-4">
          <div className="text-center">
            <span className="text-xs font-bold text-saffron-600 tracking-widest uppercase bg-saffron-50 px-3.5 py-1.5 rounded-full">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl font-bold font-display text-stone-900 mt-3">Trek Distance & Height — FAQs</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {trailFaqs.map((faq, i) => (
              <div key={i} className="bg-white border border-stone-200 rounded-2xl p-5 shadow-xs hover:border-saffron-300 transition-colors">
                <p className="text-xs font-bold text-saffron-700 mb-2">Q: {faq.q}</p>
                <p className="text-xs text-stone-600 leading-relaxed">A: {faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trek Tips */}
        <div className="bg-stone-900 text-white rounded-3xl p-8 md:p-10">
          <h2 className="text-xl font-bold font-display mb-6">🥾 Trek Tips for a Comfortable Yatra</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { tip: "Start the trek at night (10 PM–2 AM) to avoid daytime heat and reach Bhawan by morning Aarti." },
              { tip: "Wear well-broken trekking shoes with ankle support. New shoes cause blisters on the 12 km trail." },
              { tip: "Carry at least 1 litre of water. Free refill stations are at Banganga, Adhkuwari, and Bhawan." },
              { tip: "Bhawan is 10–15°C colder than Katra. Always carry a fleece jacket regardless of season." },
              { tip: "Deposit heavy luggage at Katra lockers. Carry only essentials — every extra kg doubles fatigue." },
              { tip: "The descent is harder on knees than the ascent. Use a trekking pole and take your time coming down." },
            ].map((item, i) => (
              <div key={i} className="bg-white/10 border border-white/10 rounded-2xl p-4 flex gap-3">
                <span className="text-saffron-400 font-extrabold text-sm flex-shrink-0 mt-0.5">{i + 1}.</span>
                <p className="text-xs text-stone-300 leading-relaxed">{item.tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4 pt-2">
          <p className="text-xs text-stone-500 font-semibold">Ready for your Yatra? Start here:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/services/yatra-registration" className="inline-block px-6 py-2.5 bg-crimson-700 hover:bg-crimson-800 text-white text-xs font-bold rounded-full shadow-md transition-all duration-300">
              Get Yatra Parchi (RFID) →
            </Link>
            <Link href="/travel/how-to-reach" className="inline-block px-6 py-2.5 bg-white border border-stone-200 hover:border-saffron-400 text-stone-700 hover:text-saffron-600 text-xs font-bold rounded-full shadow-xs transition-all duration-300">
              🚂 How to Reach Katra
            </Link>
            <Link href="/travel/packing-guide" className="inline-block px-6 py-2.5 bg-white border border-stone-200 hover:border-saffron-400 text-stone-700 hover:text-saffron-600 text-xs font-bold rounded-full shadow-xs transition-all duration-300">
              🎒 Packing Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
