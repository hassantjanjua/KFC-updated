"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { name: "Home", href: "#" },
    { name: "Menu", href: "#" },
    { name: "Deals", href: "#" },
    { name: "Contact", href: "#" },
  ]

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full px-6">
      <nav className="max-w-6xl mx-auto 
                      bg-gradient-to-r from-black/80 via-red-900/80 to-black/80
                      backdrop-blur-lg
                      border border-red-500/20
                      rounded-full
                      px-6 sm:px-10 py-4
                      flex items-center justify-between
                      shadow-[0_20px_50px_rgba(0,0,0,0.6)]">

        {/* Logo */}
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 -mt-10 rounded-full overflow-hidden border-2 border-white shadow-lg flex-shrink-0">
          <Image
            src="/KFC_logo.svg.png"
            alt="Logo"
            fill
            className="object-cover"
          />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 text-white font-medium">
          {links.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="relative group transition">
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <button className="hidden md:block px-6 py-2 bg-white text-black rounded-full font-semibold 
                           hover:bg-transparent hover:text-white hover:border hover:border-white transition-all duration-300">
          Order Now
        </button>

        {/* Mobile Animated Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setOpen(!open)}
            className="relative w-10 h-10 flex items-center justify-center group"
          >
            {/* Glow background */}
            <span className="absolute inset-0 rounded-full bg-red-600/10 blur-md opacity-0 group-hover:opacity-100 transition duration-300"></span>

            <div className="relative w-7 h-7 flex items-center justify-center">
              {/* Top Line */}
              <span
                className={`absolute h-[2px] w-7 bg-white rounded transition-all duration-300 ease-in-out
                ${open ? "rotate-45" : "-translate-y-2"}`}
              ></span>

              {/* Middle Line */}
              <span
                className={`absolute h-[2px] w-7 bg-white rounded transition-all duration-300 ease-in-out
                ${open ? "opacity-0" : ""}`}
              ></span>

              {/* Bottom Line */}
              <span
                className={`absolute h-[2px] w-7 bg-white rounded transition-all duration-300 ease-in-out
                ${open ? "-rotate-45" : "translate-y-2"}`}
              ></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out
                    ${open ? "max-h-[500px] py-6" : "max-h-0 py-0"}`}
      >
        <div className="relative bg-gradient-to-r from-black/90 via-red-900/90 to-black/90 border-t border-red-500/20 rounded-b-xl shadow-lg">
          {/* Glow Effects */}
          <div className="absolute top-0 left-0 w-48 h-48 bg-red-600/10 blur-3xl rounded-full -z-10"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-red-800/10 blur-3xl rounded-full -z-10"></div>

          <ul className="flex flex-col gap-6 px-6 text-white text-center font-medium relative z-10">
            {links.map((link) => (
              <li key={link.name} className="relative group">
                <Link href={link.href} className="block py-2 text-lg">
                  {link.name}
                  <span className="absolute left-1/2 -bottom-1 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-1/2 -translate-x-1/2"></span>
                </Link>
              </li>
            ))}
            {/* Mobile CTA */}
            <li>
              <button className="w-full px-6 py-3 bg-white text-black rounded-full font-semibold 
                                 hover:bg-transparent hover:text-white hover:border hover:border-white transition-all duration-300">
                Order Now
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}