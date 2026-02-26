"use client"

import Image from "next/image"

export default function Download() {

  return (
    <section className="w-full py-24 bg-gradient-to-r from-black via-red-900 to-black px-6 overflow-hidden">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">

        {/* LEFT SIDE - APP IMAGE */}
        <div className="relative w-80 h-80 bg-black/40 border border-red-600 rounded-3xl shadow-2xl flex items-center justify-center">

          {/* Image Wrapper (overflow outside effect) */}
          <div className="absolute -top-10 -right-10 w-[115%] h-[115%] transition duration-500 hover:scale-105 hover:-translate-y-3">

            <Image
              src="/kfc-cover.jpg"
              alt="App Preview"
              fill
              className="object-cover rounded-3xl shadow-2xl transition duration-500"
              priority
            />

          </div>

        </div>

        <div className="text-center md:text-left max-w-xl">

          <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-6">
            Now With Your Favorite{" "}
            <span className="text-red-500">Mobile Application</span> In Your Pocket
          </h2>

          <p className="text-gray-300 mb-10">
            Download our app and enjoy fast ordering, exclusive deals and a smooth experience anytime.
          </p>

          <div className="flex gap-6 flex-wrap justify-center md:justify-start">

            <a
              href="https://apps.apple.com/pk/app/kfc-pakistan/id1480491422"
              target="_blank"
              className="hover:scale-105 transition duration-300"
            >
              <Image
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                width={170}
                height={55}
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
                width={190}
                height={55}
              />
            </a>

          </div>

        </div>

      </div>

    </section>
  )
}