"use client";

import React, { useState } from "react";

export default function FAQAccordion({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!items || items.length === 0) return null;

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`border rounded-2xl overflow-hidden transition-all duration-300 bg-white ${
              isOpen
                ? "border-saffron-500 shadow-md ring-1 ring-saffron-100"
                : "border-stone-200 shadow-xs hover:border-saffron-300 hover:shadow-xs"
            }`}
          >
            {/* Accordion Trigger */}
            <button
              onClick={() => toggleIndex(index)}
              className="w-full flex items-center justify-between p-5 text-left font-medium transition-colors"
              aria-expanded={isOpen}
            >
              <span className={`text-base md:text-lg font-semibold leading-snug transition-colors duration-200 ${
                isOpen ? "text-saffron-600 font-display" : "text-stone-800"
              }`}>
                {item.question}
              </span>
              <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                isOpen ? "bg-saffron-100 text-saffron-600 rotate-180" : "bg-stone-50 text-stone-500"
              }`}>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>

            {/* Accordion Content Container with smooth height animation */}
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="p-5 pt-0 text-stone-600 text-sm md:text-base leading-relaxed border-t border-stone-50">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
