"use client"

import Image from "next/image"
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Phone,
  Clock,
} from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full 
                       bg-gradient-to-r from-black via-red-900 to-black
                       border-t border-red-500/20
                       text-white relative overflow-hidden">

      {/* 🔥 Background Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-600/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-800/10 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto px-6 py-16 sm:py-24 relative z-10 min-h-[70vh] sm:min-h-[80vh] flex flex-col justify-between">

        {/* 🔝 Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-10 mb-14 sm:mb-20 text-center md:text-left">

          {/* 🖼 Brand Logo */}
          <div className="relative group flex justify-center md:justify-start">
            <div className="absolute -inset-4 bg-red-600/20 blur-xl rounded-full opacity-70 group-hover:opacity-100 transition-all duration-500"></div>

            <Image
              src="/KFC_logo.svg (1).png"
              alt="Brand Logo"
              width={130}
              height={130}
              className="relative object-contain drop-shadow-[0_10px_40px_rgba(255,0,0,0.4)]"
            />
          </div>

          {/* Contact */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-10 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>444 3 555</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>0320 744 91 92</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 sm:gap-5">
            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
              <div
                key={i}
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center
                           rounded-full
                           border border-red-500/30
                           bg-black/60
                           hover:bg-red-600
                           hover:scale-110
                           transition-all duration-300
                           cursor-pointer
                           shadow-[0_0_20px_rgba(255,0,0,0.2)]"
              >
                <Icon size={18} className="text-white" />
              </div>
            ))}
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-red-500/20 mb-12 sm:mb-16"></div>

        {/* 🔗 Links Grid - 4 Columns Even on Mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-14 text-xs sm:text-sm text-center sm:text-left">

          {[
            {
              title: "About",
              links: ["Company", "Careers", "Franchise", "Press"],
            },
            {
              title: "Menu",
              links: ["Chicken", "Burgers", "Meals", "Drinks"],
            },
            {
              title: "Support",
              links: ["Contact", "Privacy Policy", "Terms", "Help"],
            },
            {
              title: "Location",
              links: ["Lahore, Pakistan", "Open 10AM - 2AM"],
            },
          ].map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4 sm:mb-8 text-sm sm:text-lg tracking-wide">
                {section.title}
              </h3>

              <ul className="space-y-3 sm:space-y-5 text-gray-400">
                {section.links.map((link, i) => (
                  <li key={i} className="relative group w-fit mx-auto sm:mx-0 cursor-pointer">
                    {link}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom */}
        <div className="mt-14 sm:mt-20 border-t border-red-500/20 pt-6 sm:pt-8 text-center text-gray-500 text-xs sm:text-sm">
          © 2026 KGF. All rights reserved.
        </div>

      </div>
    </footer>
  )
}