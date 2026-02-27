"use client"

import { useState } from "react"
import Image from "next/image"

const reviews = [
  {
    id: 1,
    app: "/snapchat-logo.png",
    reviewer: "Ali Tahir",
    text: "Absolutely loved the KFC app! Ordering is super smooth and fast.",
  },
  {
    id: 2,
    app: "/instagram-logo-colored.jpg",
    reviewer: "Iqra Tahir",
    text: "Amazing deals and fast delivery — the interface feels premium.",
  },
  {
    id: 3,
    app: "/Facebook_logo_(square).png",
    reviewer: "Hassan Janjua",
    text: "KFC never disappoints! This app makes it easy to grab favorites.",
  },
  {
    id: 4,
    app: "/new-2023-twitter-logo-x-icon-design_1017-45418.avif",
    reviewer: "Hira Tahir",
    text: "Loved the experience — great offers & smooth checkout!",
  },
]

export default function Review() {
  const [open, setOpen] = useState(false)

  return (
    <section className="relative w-full py-16 sm:py-20 overflow-hidden bg-gradient-to-r from-black via-red-900 to-black px-4 sm:px-6">

      {/* Glow Backgrounds */}
      <div className="absolute top-0 left-0 w-56 h-56 sm:w-72 sm:h-72 bg-red-600/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-56 h-56 sm:w-72 sm:h-72 bg-black/40 blur-3xl rounded-full animate-pulse"></div>

      {/* Section Header */}
      <div className="text-center mb-10 sm:mb-14">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)]">
          <span className="text-red-500">REVIEWS</span>
        </h2>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">

        {/* Left - User Reviews */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-6 sm:gap-8 justify-center lg:justify-start">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="w-full sm:w-[48%] md:w-[45%] relative bg-black/30 p-5 rounded-2xl border border-red-600 shadow-2xl transform transition duration-500 hover:scale-105 hover:-translate-y-2 hover:rotate-1 cursor-pointer hover:shadow-glow"
            >
              {/* App logo */}
              <div className="flex justify-center mb-3 sm:mb-4 relative z-10">
                <Image
                  src={rev.app}
                  alt={`${rev.reviewer} app`}
                  width={60}
                  height={60}
                  className="object-contain rounded-full shadow-md"
                  unoptimized
                />
              </div>

              {/* Reviewer Name */}
              <div className="text-center relative z-10">
                <span className="text-white font-bold text-base sm:text-lg">{rev.reviewer}</span>
              </div>

              {/* Review Text */}
              <p className="text-gray-200 text-sm sm:text-base mt-1 sm:mt-2 text-center relative z-10">
                "{rev.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Right - Video */}
        <div className="flex justify-center lg:justify-end mt-6 lg:mt-0 relative">
          <div
            onClick={() => setOpen(true)}
            className="relative w-full max-w-md sm:max-w-lg h-60 sm:h-72 md:h-[270px] cursor-pointer rounded-3xl overflow-hidden shadow-2xl border-4 border-red-600 transform transition duration-500 hover:scale-105 hover:-translate-y-2 hover:rotate-1"
          >
            {/* Glass/Glow behind video */}
            <div className="absolute inset-0 bg-black/50 rounded-3xl shadow-glow animate-pulse"></div>

            {/* Video Thumbnail */}
            <Image
              src="/KFC-logo.webp"
              alt="KFC Review Video"
              fill
              className="object-cover w-full h-full rounded-3xl"
              unoptimized
            />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-red-500/80 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  strokeWidth={0}
                  className="w-10 h-10 sm:w-12 sm:h-12 ml-1"
                >
                  <path d="M5 3v18l15-9L5 3z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Popup */}
      {open && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center z-50 transition-opacity duration-500">
          <div className="relative w-[90%] sm:w-[80%] md:w-[900px] aspect-video rounded-xl shadow-2xl overflow-hidden animate-scale-in">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/crb-ydXQzj0"
              title="KFC Pakistan Review"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-white text-3xl sm:text-4xl font-bold hover:scale-110 transition-transform duration-300"
          >
            ✕
          </button>
        </div>
      )}

      <style jsx>{`
        @keyframes scale-in {
          0% { transform: scale(0.8); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out forwards;
        }
        .shadow-glow {
          box-shadow: 0 0 40px rgba(255,0,0,0.6);
        }
      `}</style>
    </section>
  )
}