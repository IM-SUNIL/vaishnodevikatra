import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Mata Vaishno Devi Yatra Resumed Today - Latest News & Updates",
  description: "Mata Vaishno Devi Yatra has officially resumed today after weather clearance. Read the latest updates, Katra weather news, helicopter status, and guidelines for pilgrims.",
  keywords: [
    "vaishno devi yatra update today",
    "mata vaishno devi yatra resume",
    "katra weather news",
    "vaishno devi helicopter status today",
    "vaishno devi latest news",
    "yatra resume status vaishno devi",
    "vaishno devi live update"
  ],
  openGraph: {
    title: "Mata Vaishno Devi Yatra Resumes After Weather Clearance",
    description: "Good news for pilgrims! The holy Yatra has resumed. Check current weather, battery car status, and helicopter updates here.",
    type: "article",
  },
};

export default function YatraResumeBlog() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-cream-50 animate-fade-in-up">
      {/* Hero Section */}
      <section className="relative bg-stone-900 overflow-hidden h-[40vh] md:h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/vaishnodevi_hero_bg.png"
            alt="Mata Vaishno Devi Yatra Resumed"
            fill
            priority
            className="object-cover opacity-40 mix-blend-overlay"
          />
        </div>
        <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-bold text-emerald-400 tracking-widest uppercase bg-emerald-950/50 border border-emerald-500/30 px-4 py-1.5 rounded-full mb-4">
            Breaking News Alert
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight font-display text-white leading-tight mt-2">
            Mata Vaishno Devi Yatra Resumed
          </h1>
          <p className="mt-4 text-stone-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            The holy pilgrimage to the Bhawan has officially restarted following clearance from the weather department.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-cream-100/50 border-b border-stone-200/50 py-3 text-xs font-semibold text-stone-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
          <Link href="/" className="hover:text-saffron-600 transition-colors">Home</Link>
          <span className="text-stone-400">/</span>
          <span className="text-stone-800">News & Updates</span>
          <span className="text-stone-400">/</span>
          <span className="text-stone-800 truncate">Yatra Resumed</span>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <article className="bg-white border border-stone-200/80 rounded-3xl p-6 md:p-10 shadow-xs">
          
          <div className="flex items-center gap-4 text-xs font-bold text-stone-500 uppercase tracking-widest mb-8 border-b border-stone-100 pb-4">
            <span>Posted: Today</span>
            <span className="w-1.5 h-1.5 rounded-full bg-saffron-400"></span>
            <span>Official Update</span>
          </div>

          <div className="max-w-none text-stone-700">
            <p className="text-lg md:text-xl font-medium text-stone-700 leading-relaxed mb-6">
              <strong>Jai Mata Di!</strong> We are pleased to inform all devotees that the Shri Mata Vaishno Devi Yatra has officially resumed from Katra base camp. The yatra was temporarily paused due to adverse weather conditions, but following clearance, pilgrims are now allowed to proceed towards the Holy Bhawan.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4 border-l-4 border-emerald-500 pl-4">Current Weather & Route Status</h2>
            <p className="mb-6">
              The weather in Katra and at the Bhawan is currently stable. The sun is out, and the tracking path has been cleared of any minor disruptions. The Shrine Board has deployed extra staff to ensure the safety and comfort of all yatris.
            </p>
            
            <ul className="space-y-3 my-6 bg-stone-50 p-6 rounded-2xl border border-stone-100 list-none pl-0">
              <li className="flex items-center gap-3">
                <span className="text-emerald-500 font-bold text-lg">✔</span>
                <span className="text-stone-700"><strong>Trek Route (Tarakote Marg & Banganga):</strong> Fully Open and Operational.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-emerald-500 font-bold text-lg">✔</span>
                <span className="text-stone-700"><strong>Helicopter Services:</strong> Resumed (Subject to visibility and wind speeds).</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-emerald-500 font-bold text-lg">✔</span>
                <span className="text-stone-700"><strong>Battery Car Services:</strong> Operating normally on the Adhkuwari to Bhawan route.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-emerald-500 font-bold text-lg">✔</span>
                <span className="text-stone-700"><strong>Passenger Ropeway:</strong> Running smoothly between Bhawan and Bhairon Temple.</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4 border-l-4 border-saffron-500 pl-4">Important Guidelines for Pilgrims</h2>
            <p className="mb-6">
              While the yatra has resumed, pilgrims are advised to follow these strict guidelines to ensure a safe journey:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="bg-white border border-stone-200 p-5 rounded-2xl shadow-xs">
                <h3 className="text-sm font-bold text-crimson-700 uppercase tracking-widest mb-2 m-0">RFID Mandatory</h3>
                <p className="text-sm text-stone-600 m-0">All pilgrims must carry their valid RFID Yatra Parchi. Do not start the trek without registering at Katra counters.</p>
              </div>
              <div className="bg-white border border-stone-200 p-5 rounded-2xl shadow-xs">
                <h3 className="text-sm font-bold text-saffron-700 uppercase tracking-widest mb-2 m-0">Warm Clothing</h3>
                <p className="text-sm text-stone-600 m-0">Temperatures drop significantly at the Bhawan and Sanjichhat. Please carry heavy woolens, especially if traveling with children or elderly.</p>
              </div>
            </div>

            <p className="mt-8">
              The Shrine Board is continuously monitoring the situation. Free Langar facilities at Tarakote Marg, Sanjichhat, and Bhairon Ji are fully functional round the clock to serve hot meals to devotees. Medical units at all major stops are also on high alert.
            </p>

            <div className="mt-10 p-8 bg-crimson-50 border border-crimson-100 rounded-3xl text-center">
              <h3 className="text-xl font-bold text-crimson-900 mb-2 mt-0">Ready to start your journey?</h3>
              <p className="text-sm text-crimson-700 mb-6">Make sure you are prepared before heading out.</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/services/yatra-registration" className="px-6 py-3 bg-crimson-700 hover:bg-crimson-800 text-white text-xs font-bold rounded-full shadow-md transition-all no-underline uppercase tracking-wider">
                  Get Yatra Parchi
                </Link>
                <Link href="/travel/weather" className="px-6 py-3 bg-white border border-crimson-200 hover:border-crimson-400 text-crimson-800 text-xs font-bold rounded-full shadow-xs transition-all no-underline uppercase tracking-wider">
                  Check Current Weather
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
