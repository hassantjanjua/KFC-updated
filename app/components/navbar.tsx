"use client"

import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full px-6">

      {/* Floating Curved Navbar */}
      <nav className="max-w-6xl mx-auto 
                      bg-gradient-to-r from-black/80 via-red-900/80 to-black/80
                      backdrop-blur-lg
                      border border-red-500/20
                      rounded-full
                      px-10 py-4
                      flex items-center justify-between
                      shadow-[0_20px_50px_rgba(0,0,0,0.6)]">

        {/* Logo */}
        <div className="relative w-20 h-20 -mt-10 rounded-full overflow-hidden border-2 border-white shadow-lg">
          <Image
            src="/KFC_logo.svg.png"      // <-- Replace this with your logo path
            alt="Logo"
            fill
            className="object-cover"
          />
        </div>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-8 text-white font-medium">

          <li>
            <Link
              href="#"
              className="relative group transition"
            >
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>

          <li>
            <Link
              href="#"
              className="relative group transition"
            >
              Menu
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>

          <li>
            <Link
              href="#"
              className="relative group transition"
            >
              Deals
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>

          <li>
            <Link
              href="#"
              className="relative group transition"
            >
              Contact
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>

        </ul>

        {/* CTA Button */}
        <button className="hidden md:block px-6 py-2 bg-white text-black rounded-full font-semibold 
                           hover:bg-transparent hover:text-white hover:border hover:border-white transition-all duration-300">
          Order Now
        </button>

      </nav>
    </header>
  )
}