"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/pagination"

const slides = [
  {
    id: 1,
    title: "BARGAIN BUCKET",
    subtitle: "MENU CAMPAIGN",
    desc: "Original recipe chicken with crispy fries.",
    image: "/kfc-cover.jpg",
  },
  {
    id: 2,
    title: "HOT & SPICY",
    subtitle: "FAMILY DEAL",
    desc: "Spicy bucket with large fries & drink.",
    image: "/kfc-hot-and-spicy-1.jpg",
  },
  {
    id: 3,
    title: "ZINGER SPECIAL",
    subtitle: "LIMITED OFFER",
    desc: "Crispy zinger burger combo meal.",
    image: "/27df3895034859.5e8dbad5aa84e.jpg",
  },
]

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">

      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-screen group">

              {/* 🔥 Background Image Full Screen */}
              <Image
                src={slide.image}
                alt="background"
                fill
                priority
                className="object-cover group-hover:scale-110 transition duration-700 ease-in-out"
              />

              {/* 🔥 Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-red-900/60 to-black/70"></div>

              {/* 🔥 Content */}
              <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
                <div className="text-white max-w-xl space-y-6">

                  <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                    {slide.title} <br />
                    {slide.subtitle}
                  </h1>

                  <p className="text-red-100 text-lg">
                    {slide.desc}
                  </p>

                  {/* ✅ Updated Button */}
                  <button className="px-8 py-3 bg-white text-red-700 font-bold rounded-full shadow-xl border-2 border-transparent transition-all duration-300
                                     hover:bg-transparent hover:text-white hover:border-white">
                    ORDER NOW
                  </button>

                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  )
}