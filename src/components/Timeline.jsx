import React from "react";

export default function Timeline({ steps = [] }) {
  if (!steps || steps.length === 0) return null;

  return (
    <div className="relative border-l-2 border-dashed border-saffron-300 ml-4 md:ml-8 my-8 pl-8 md:pl-12 space-y-12">
      {steps.map((step, index) => (
        <div key={index} className="relative group">
          {/* Milestone Circle Marker */}
          <span className="absolute -left-[45px] md:-left-[61px] top-1.5 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border-4 border-cream-50 bg-saffron-500 text-white font-bold text-sm shadow-md transition-all duration-300 group-hover:bg-crimson-600 group-hover:scale-110">
            {index + 1}
          </span>

          {/* Timeline Card */}
          <div className="bg-white border border-stone-150 p-6 rounded-2xl shadow-xs transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
              <div>
                <span className="text-xs font-semibold tracking-wider text-saffron-600 bg-saffron-50 px-2.5 py-1 rounded-full uppercase">
                  {step.tag || "Milestone"}
                </span>
                <h3 className="text-xl font-bold text-stone-900 mt-2 font-display">
                  {step.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 text-xs md:text-sm text-stone-600">
                {step.distance && (
                  <span className="flex items-center gap-1 bg-stone-100 px-3 py-1 rounded-md">
                    <svg className="w-4 h-4 text-saffron-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    {step.distance}
                  </span>
                )}
                {step.altitude && (
                  <span className="flex items-center gap-1 bg-stone-100 px-3 py-1 rounded-md">
                    <svg className="w-4 h-4 text-crimson-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    {step.altitude}
                  </span>
                )}
              </div>
            </div>

            <p className="text-stone-600 text-sm md:text-base leading-relaxed mb-4">
              {step.description}
            </p>

            {/* Sub-features/tips for each point */}
            {step.highlights && step.highlights.length > 0 && (
              <div className="border-t border-stone-50 pt-3 flex flex-wrap gap-x-6 gap-y-2">
                {step.highlights.map((highlight, hIndex) => (
                  <span key={hIndex} className="flex items-center text-xs text-stone-500 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mr-2"></span>
                    {highlight}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
