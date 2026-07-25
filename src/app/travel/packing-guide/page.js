import Link from "next/link";

export const metadata = {
  title: "Vaishno Devi Yatra Packing Guide — What to Carry & What Not to Carry",
  description:
    "Complete packing checklist for Vaishno Devi Yatra. Know exactly what clothes, medicines, documents, and items to carry — and what is banned inside the shrine premises.",
};

const packingList = [
  {
    category: "👟 Footwear",
    accent: "border-saffron-300 bg-saffron-50/30",
    must: [
      "Good quality trekking shoes with ankle support (most important item)",
      "Extra pair of socks (at least 3 pairs — blisters are common)",
      "Sandals or slippers for temple entry (shoes are not allowed inside)",
      "Waterproof shoe covers if visiting during monsoon",
    ],
    avoid: ["High heels or formal shoes", "New shoes — break them in before the yatra", "Flip-flops for the trek"],
  },
  {
    category: "🧥 Clothing",
    accent: "border-crimson-300 bg-crimson-50/20",
    must: [
      "Comfortable, loose-fitting trekking pants or track pants",
      "Moisture-wicking t-shirts (3–4 pairs for a 2-day trip)",
      "Warm fleece jacket or sweater — temperature drops at Bhawan",
      "Rain poncho or compact windcheater (for monsoon/winter visits)",
      "Thermal inner wear (mandatory for December–February)",
      "Traditional Indian clothes for Darshan (shorts/skirts not allowed)",
    ],
    avoid: ["Jeans — heavy when wet and cause chafing", "Leather jackets/belts (not allowed inside the shrine)", "Shorts or skirts inside temple premises"],
  },
  {
    category: "🎒 Bag & Gear",
    accent: "border-gold-300 bg-gold-50/20",
    must: [
      "Small to medium day pack (15–20 litre) — light is key",
      "Reusable water bottle (1 litre minimum — free water stations on the track)",
      "Trekking pole or walking stick (especially helpful for descent)",
      "Headlamp or torch with extra batteries (for pre-dawn treks)",
      "Padlock for locker at the cloak room near Bhawan",
    ],
    avoid: ["Large heavy suitcases — lockers available at Katra & Bhawan", "Plastic bags (banned on the yatra trail)"],
  },
  {
    category: "📋 Documents",
    accent: "border-stone-300 bg-stone-50/30",
    must: [
      "Original Government Photo ID Card (Aadhaar / Passport / Driving License)",
      "Printed or digital RFID Yatra Slip (generated after online registration)",
      "RFID Card itself (collected at Katra counters)",
      "Helicopter / Room / Aarti booking printouts (if applicable)",
      "Health insurance card or CGHS card (optional but recommended)",
    ],
    avoid: ["Laminated/expired ID cards — RFID counters only accept valid originals"],
  },
  {
    category: "💊 Medical & First Aid",
    accent: "border-crimson-200 bg-crimson-50/20",
    must: [
      "Personal prescription medicines (keep extra doses)",
      "Glucose / ORS sachets for energy on the trek",
      "Antacid tablets (Ayurveda diet change can cause stomach upset)",
      "Moleskin bandages or blister pads (essential for feet)",
      "Paracetamol / Crocin",
      "Muscle relaxant ointment (Moov / Volini) for knee and calf pain",
      "Sunscreen SPF 50+ (UV is intense at altitude)",
    ],
    avoid: ["Carrying too many medicines — medical posts are at every major checkpoint"],
  },
  {
    category: "🍱 Food & Hydration",
    accent: "border-saffron-200 bg-saffron-50/20",
    must: [
      "Energy bars / dry fruits / trail mix (quick energy on trek)",
      "Glucose biscuits",
      "Water (free refill stations at Banganga, Adhkuwari, and Bhawan)",
      "Electrolyte sachets (especially in summer months)",
    ],
    avoid: ["Non-veg food (strictly prohibited on the Yatra trail)", "Alcohol (prohibited on the entire yatra route)", "Glass containers (not allowed on the trail)"],
  },
  {
    category: "📵 Restricted Items",
    accent: "border-crimson-400 bg-crimson-50/40",
    must: [],
    avoid: [
      "Mobile phones (not allowed inside the Holy Cave — deposit at cloak rooms)",
      "Leather wallets, belts, shoes (not allowed inside any temple area)",
      "Camera or video recording devices (inside the cave area)",
      "Firearms or sharp objects",
      "Pets of any kind",
      "Plastic carry bags (banned on entire yatra trail — fine up to ₹500)",
    ],
  },
];

const tipsChecklist = [
  { tip: "Book your RFID Yatra Slip online before reaching Katra to skip long counter queues.", link: "/services/yatra-registration" },
  { tip: "Deposit heavy luggage in Katra's paid locker facility before starting the trek.", link: null },
  { tip: "Start your trek at night (11 PM – 3 AM) to avoid daytime heat and reach Bhawan by morning.", link: null },
  { tip: "Free water, langar meals, and medical aid are available throughout the trek.", link: null },
  { tip: "Wear shoes 3–4 days before the yatra to break them in. New shoes cause severe blisters.", link: null },
  { tip: "Children under 12 and senior citizens above 65 get priority access at various checkpoints.", link: null },
];

export default function PackingGuidePage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-cream-50 animate-fade-in-up">
      {/* Hero */}
      <section className="relative bg-stone-900 overflow-hidden">
        <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-gold-500/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-56 h-56 rounded-full bg-saffron-500/15 blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <span className="inline-block text-xs font-bold text-saffron-400 tracking-widest uppercase bg-saffron-950/50 px-4 py-1.5 rounded-full mb-4">
            Travel Info
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-display text-white leading-tight">
            Packing Guide
          </h1>
          <p className="mt-4 text-stone-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            A complete, category-wise checklist of everything to carry — and what to leave at home — for a comfortable, stress-free Vaishno Devi Yatra.
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
          <span className="text-stone-800">Packing Guide</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 w-full space-y-14">

        {/* Golden rule notice */}
        <div className="bg-stone-900 text-white rounded-2xl px-6 py-5 flex gap-4 items-center">
          <span className="text-3xl flex-shrink-0">🎯</span>
          <div>
            <p className="text-sm font-bold text-saffron-400 mb-1">The Golden Rule: Pack Light</p>
            <p className="text-xs text-stone-300 leading-relaxed">
              The Yatra involves 12 km of mountain trekking (24 km roundtrip). Every extra kilogram in your bag will double your fatigue on the ascent and put stress on your knees during descent. Pack only what is absolutely necessary.
            </p>
          </div>
        </div>

        {/* Packing Category Cards */}
        <div className="space-y-6">
          <div className="text-center">
            <span className="text-xs font-bold text-saffron-600 tracking-widest uppercase bg-saffron-50 px-3.5 py-1.5 rounded-full">
              Category-wise Checklist
            </span>
            <h2 className="text-2xl md:text-3xl font-bold font-display text-stone-900 mt-3">
              What to Carry & What to Avoid
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {packingList.map((cat) => (
              <div key={cat.category} className={`bg-white border-2 ${cat.accent} rounded-3xl overflow-hidden shadow-xs`}>
                <div className="px-6 pt-5 pb-3">
                  <h3 className="text-base font-bold text-stone-900 font-display">{cat.category}</h3>
                </div>

                {cat.must.length > 0 && (
                  <div className="px-6 pb-3">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-saffron-600 mb-2">✓ Carry These</p>
                    <ul className="space-y-1.5">
                      {cat.must.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-saffron-500 mt-1.5 flex-shrink-0" />
                          <span className="text-xs text-stone-700 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {cat.avoid.length > 0 && (
                  <div className="px-6 pb-5">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-crimson-700 mb-2 mt-3">✕ Avoid / Prohibited</p>
                    <ul className="space-y-1.5">
                      {cat.avoid.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-crimson-500 mt-1.5 flex-shrink-0" />
                          <span className="text-xs text-stone-600 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Pro Tips Strip */}
        <div className="space-y-4">
          <div className="text-center">
            <span className="text-xs font-bold text-saffron-600 tracking-widest uppercase bg-saffron-50 px-3.5 py-1.5 rounded-full">
              Pilgrim Pro Tips
            </span>
            <h2 className="text-2xl font-bold font-display text-stone-900 mt-3">Before You Leave Home</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tipsChecklist.map((item, i) => (
              <div key={i} className="bg-white border border-stone-200 rounded-2xl p-4 flex gap-3 items-start shadow-xs hover:shadow-md hover:border-saffron-300 transition-all duration-300">
                <div className="w-7 h-7 rounded-full bg-saffron-100 text-saffron-700 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <div>
                  <p className="text-xs text-stone-700 leading-relaxed">{item.tip}</p>
                  {item.link && (
                    <Link href={item.link} className="text-[10px] font-bold text-saffron-600 hover:underline mt-1 block">
                      Read Guide →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weight Recommendation */}
        <div className="bg-white border border-stone-200 rounded-3xl p-8 shadow-xs">
          <h2 className="text-lg font-bold text-stone-900 font-display mb-6 flex items-center gap-2">
            ⚖️ Ideal Bag Weight Guide
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { type: "Day Trip (1 day)", weight: "4–6 kg", color: "bg-saffron-50 border-saffron-200 text-saffron-800" },
              { type: "Overnight (2 days)", weight: "7–10 kg", color: "bg-gold-50 border-gold-200 text-gold-800" },
              { type: "Extended Stay (3+ days)", weight: "Max 12 kg", color: "bg-crimson-50 border-crimson-200 text-crimson-800" },
            ].map((w) => (
              <div key={w.type} className={`border rounded-2xl p-5 text-center ${w.color}`}>
                <p className="text-xs font-bold uppercase tracking-widest mb-2">{w.type}</p>
                <p className="text-2xl font-extrabold font-display">{w.weight}</p>
                <p className="text-[10px] mt-1 opacity-70">Recommended bag weight</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-stone-500 mt-4 text-center">
            💡 Porters (Pithus) are available on the track to carry bags up to 20 kg if needed.{" "}
            <Link href="/services/palki-pony" className="text-saffron-600 font-bold hover:underline">
              See Palki & Pony Guide →
            </Link>
          </p>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4 pt-2">
          <p className="text-xs text-stone-500 font-semibold">All set to pack? Check the other travel guides:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/travel/how-to-reach" className="inline-block px-6 py-2.5 bg-white border border-stone-200 hover:border-saffron-400 text-stone-700 hover:text-saffron-600 text-xs font-bold rounded-full shadow-xs transition-all duration-300">
              🚂 How to Reach →
            </Link>
            <Link href="/travel/weather" className="inline-block px-6 py-2.5 bg-white border border-stone-200 hover:border-saffron-400 text-stone-700 hover:text-saffron-600 text-xs font-bold rounded-full shadow-xs transition-all duration-300">
              🌤️ Weather Guide →
            </Link>
            <Link href="/services/yatra-registration" className="inline-block px-6 py-2.5 bg-crimson-700 hover:bg-crimson-800 text-white text-xs font-bold rounded-full shadow-md transition-all duration-300">
              Register for Yatra →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
