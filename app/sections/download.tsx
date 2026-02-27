"use client"

import Image from "next/image"

export default function Download() {
  return (
    <section className="w-full py-24 bg-gradient-to-r from-black via-red-900 to-black px-6 overflow-hidden">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">

        {/* LEFT SIDE - APP IMAGE */}
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-black/40 border border-red-600 rounded-3xl shadow-2xl flex items-center justify-center">

          {/* Image Wrapper (overflow outside effect) */}
          <div className="absolute -top-8 -right-8 w-[115%] h-[115%] transition duration-500 hover:scale-105 hover:-translate-y-3">

            <Image
              src="/kfc-cover.jpg"
              alt="App Preview"
              fill
              className="object-cover rounded-3xl shadow-2xl transition duration-500"
              priority
            />

          </div>
        </div>

        {/* RIGHT SIDE - Text & Buttons */}
        <div className="text-center md:text-left max-w-xl flex flex-col items-center md:items-start gap-6">

          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Now With Your Favorite{" "}
            <span className="text-red-500">Mobile Application</span> In Your Pocket
          </h2>

          <p className="text-gray-300 text-base sm:text-lg md:text-lg">
            Download our app and enjoy <span className="text-red-500 font-semibold">fast ordering</span>, exclusive deals, 
            and a <span className="text-red-500 font-semibold">smooth experience</span> anytime.
          </p>

          {/* Download Buttons */}
          <div className="flex gap-4 sm:gap-6 flex-wrap justify-center md:justify-start">
            <a
              href="https://apps.apple.com/pk/app/kfc-pakistan/id1480491422"
              target="_blank"
              className="hover:scale-105 transition duration-300"
            >
              <Image
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                width={160}
                height={50}
              />
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=io.bramerz.kfc"
              target="_blank"
              className="hover:scale-105 transition duration-300"
            >
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                width={180}
                height={50}
              />
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}