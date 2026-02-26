"use client"

import Image from "next/image"

const foods = [
  { id: 1, image: "/frontal-shot-kfc-bucket-full-600nw-2593577711.webp", name: "Bargain Bucket" },
  { id: 2, image: "/1a19c595034859.5e8dbad5ab0c2.jpg", name: "Zinger" },
  { id: 3, image: "/849a2d6561194b8c9675371cac8bac4e.jpg", name: "Fries" },
  { id: 4, image: "/homemade-fried-chicken-wings-kfc-style-recipe-1024x683.png", name: "Wings" },
  { id: 5, image: "/kfc-ultimate-bbq-burger-662f766162beb.avif", name: "Burger" },
]

const banners = [
  { id: 1, image: "/kfc-chicken-burger-poster-260nw-2591814119.webp", title: "Combo Deals" },
  { id: 2, image: "/kyiv-ukraine-05-fabruary-2021-260nw-1947569377.webp", title: "New Arrivals" },
  { id: 3, image: "/KFC_X_Chrissy_Teigen_Mothers_Day_Menu.jpg", title: "Family Meals" },
  { id: 4, image: "/delicious-food-menu-restaurant-web-banner-template_683133-1145.avif", title: "Snacks & Sides" },
  { id: 5, image: "/kwench.webp", title: "Beverages" },
  { id: 6, image: "/KFC-Desserts-menu-768x512.webp", title: "Desserts" },
]

export default function FoodMarqueeAndBanners() {
  return (
    <section className="relative w-full py-16 overflow-hidden bg-gradient-to-r from-black via-red-900 to-black px-6">

      {/* Glow Backgrounds */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-red-600/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-black/40 blur-3xl rounded-full animate-pulse"></div>

      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)]">
          MORE <span className="text-red-500">OFFERS</span>
        </h2>
      </div>

      {/* Food Marquee */}
      <div className="relative mb-12 overflow-hidden perspective-1000">
        <div className="marquee flex gap-16 items-center">
          {[...foods, ...foods].map((food, index) => (
            <div
              key={index}
              className="group relative flex-shrink-0 flex flex-col items-center transition-transform duration-500 hover:scale-110 hover:-translate-y-2 hover:rotate-3"
            >
              <div className="w-36 h-36 overflow-hidden rounded-full border-2 border-red-600 shadow-2xl bg-black/20 flex items-center justify-center">
                {/* Glow behind image */}
                <div className="absolute w-36 h-36 rounded-full bg-red-500/20 blur-2xl -z-10 animate-pulse"></div>
                <Image
                  src={food.image}
                  alt={food.name}
                  width={144}
                  height={144}
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="mt-2 text-white font-bold text-center text-lg md:text-xl drop-shadow-md">
                {food.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Banner Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {banners.map((banner) => (
          <div
            key={banner.id}
            className="relative group h-48 overflow-hidden rounded-xl cursor-pointer shadow-2xl transition-transform duration-500 hover:scale-105 hover:-translate-y-1 hover:rotate-1"
          >
            <Image
              src={banner.image}
              alt={banner.title}
              fill
              className="object-cover w-full h-full transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10 flex items-end justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg md:text-xl font-extrabold drop-shadow-lg">
                {banner.title}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Animation Style */}
      <style jsx>{`
        .marquee {
          animation: scroll 20s linear infinite;
        }

        .marquee:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Perspective effect for marquee */
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  )
}