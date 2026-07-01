"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

function VideoModal({ videoId, onClose }) {
  // Lock body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-stone-950/80 backdrop-blur-sm"
      style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}
      onClick={onClose}
    >
      {/* Modal box — clicks inside don't close */}
      <div
        className="relative w-full max-w-3xl mx-4 rounded-2xl overflow-hidden shadow-2xl bg-stone-950"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close video"
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-stone-900/80 hover:bg-crimson-700 text-white flex items-center justify-center transition-colors shadow-md"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* YouTube Embed */}
        <div className="aspect-video w-full">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title="Vaishno Devi Yatra Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    </div>,
    document.body
  );
}

export default function YoutubePopup({ thumbnailSrc, videoId, thumbnailAlt = "Video Preview" }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Thumbnail / Play Button */}
      <div className="space-y-3">
        <button
          onClick={() => setOpen(true)}
          aria-label="Play video"
          className="block group relative aspect-video w-full rounded-2xl overflow-hidden bg-stone-950 shadow-sm border border-stone-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-saffron-500"
        >
          <Image
            src={thumbnailSrc}
            alt={thumbnailAlt}
            fill
            className="object-cover opacity-60 transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-crimson-700/90 text-white flex items-center justify-center shadow-lg transition-all group-hover:scale-110 group-hover:bg-saffron-500">
              <svg className="w-6 h-6 fill-current ml-1" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </button>
        <div className="text-center">
          <button
            onClick={() => setOpen(true)}
            className="text-xs font-bold text-stone-850 hover:text-crimson-700 transition-colors uppercase tracking-wider underline decoration-saffron-500 decoration-2 underline-offset-4"
          >
            Watch the Video Here
          </button>
        </div>
      </div>

      {/* Portal Modal — rendered directly into document.body, bypasses all parent transforms */}
      {open && <VideoModal videoId={videoId} onClose={() => setOpen(false)} />}
    </>
  );
}
