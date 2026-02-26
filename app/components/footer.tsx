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
                       bg-gradient-to-b from-black via-red-950 to-black
                       border-t border-red-500/20
                       text-white relative overflow-hidden">

      {/* 🔥 Background Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-600/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-800/10 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto px-6 py-24 relative z-10 min-h-[80vh] flex flex-col justify-between">

        {/* 🔝 Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-20">

          {/* 🖼 Brand Logo Image (Replace KGF Text) */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-red-600/20 blur-xl rounded-full opacity-70 group-hover:opacity-100 transition-all duration-500"></div>

            <Image
              src="/KFC_logo.svg (1).png"   // <-- apni logo image yahan rakho public folder me
              alt="Brand Logo"
              width={150}
              height={150}
              className="relative object-contain drop-shadow-[0_10px_40px_rgba(255,0,0,0.4)]"
            />
          </div>

          {/* Contact */}
          <div className="flex items-center gap-10 text-sm">
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>444 3 555</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={18} />
              <span>0320 744 91 92</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5">
            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
              <div
                key={i}
                className="w-12 h-12 flex items-center justify-center
                           rounded-full
                           border border-red-500/30
                           bg-black/60
                           hover:bg-red-600
                           hover:scale-110
                           transition-all duration-300
                           cursor-pointer
                           shadow-[0_0_20px_rgba(255,0,0,0.2)]"
              >
                <Icon size={20} className="text-white" />
              </div>
            ))}
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-red-500/20 mb-16"></div>

        {/* 🔗 Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-14 text-sm">

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
              <h3 className="font-semibold mb-8 text-lg tracking-wide">
                {section.title}
              </h3>

              <ul className="space-y-5 text-gray-400">
                {section.links.map((link, i) => (
                  <li key={i} className="relative group w-fit cursor-pointer">
                    {link}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom */}
        <div className="mt-20 border-t border-red-500/20 pt-8 text-center text-gray-500 text-sm">
          © 2026 KGF. All rights reserved.
        </div>

      </div>
    </footer>
  )
}