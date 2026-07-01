import React from "react";

export default function NoticeBox({ type = "info", title, children }) {
  const styles = {
    info: {
      bg: "bg-saffron-50/80 border-saffron-300 text-saffron-900",
      iconBg: "bg-saffron-100 text-saffron-600",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    warning: {
      bg: "bg-crimson-50/80 border-crimson-300 text-crimson-950",
      iconBg: "bg-crimson-100 text-crimson-700",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
    },
    success: {
      bg: "bg-emerald-50/80 border-emerald-300 text-emerald-950",
      iconBg: "bg-emerald-100 text-emerald-700",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    gold: {
      bg: "bg-gold-50/80 border-gold-300 text-gold-950",
      iconBg: "bg-gold-100 text-gold-700",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    }
  };

  const currentStyle = styles[type] || styles.info;

  return (
    <div className={`flex gap-4 p-5 rounded-2xl border backdrop-blur-md shadow-xs ${currentStyle.bg} transition-all duration-300 hover:shadow-md hover:scale-[1.005] duration-300`}>
      <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${currentStyle.iconBg}`}>
        {currentStyle.icon}
      </div>
      <div className="flex-1">
        {title && <h4 className="font-semibold text-lg mb-1 leading-snug tracking-tight font-display">{title}</h4>}
        <div className="text-sm leading-relaxed opacity-90">{children}</div>
      </div>
    </div>
  );
}
