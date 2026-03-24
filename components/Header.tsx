"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 lg:h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/snappy-header.png"
              alt="Snappy Trap"
              width={316}
              height={52}
              className="h-8 sm:h-10 lg:h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <Link
              href="/"
              className="font-medium text-sm text-[#002d72] tracking-[0.35px] uppercase hover:text-[#0056FF] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="font-medium text-sm text-[#002d72] tracking-[0.35px] uppercase hover:text-[#0056FF] transition-colors"
            >
              Products
            </Link>
            <Link
              href="/how-it-works"
              className="font-medium text-sm text-[#002d72] tracking-[0.35px] uppercase hover:text-[#0056FF] transition-colors"
            >
              How it Works
            </Link>

            <Link
              href="/about"
              className="font-medium text-sm text-[#002d72] tracking-[0.35px] uppercase hover:text-[#0056FF] transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="font-medium text-sm text-[#002d72] tracking-[0.35px] uppercase hover:text-[#0056FF] transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/coflex"
              className="font-medium text-sm text-[#002d72] tracking-[0.35px] uppercase hidden lg:block"
            >
              Coflex
            </Link>
          </nav>

          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 bg-[#002D72] transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-[#002D72] transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-[#002D72] transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-14 sm:top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? "max-h-screen opacity-100 visible"
            : "max-h-0 opacity-0 invisible overflow-hidden"
        }`}
      >
        <nav className="px-4 py-4 space-y-1 max-w-7xl mx-auto">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-medium text-base text-[#002d72] tracking-[0.35px] uppercase hover:text-[#0056FF] hover:bg-blue-50 transition-colors py-3 px-4 rounded-lg"
          >
            Home
          </Link>
          <Link
            href="/products"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-medium text-base text-[#002d72] tracking-[0.35px] uppercase hover:text-[#0056FF] hover:bg-blue-50 transition-colors py-3 px-4 rounded-lg"
          >
            Products
          </Link>
          <Link
            href="/how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-medium text-base text-[#002d72] tracking-[0.35px] uppercase hover:text-[#0056FF] hover:bg-blue-50 transition-colors py-3 px-4 rounded-lg"
          >
            How it Works
          </Link>
          <Link
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-medium text-base text-[#002d72] tracking-[0.35px] uppercase hover:text-[#0056FF] hover:bg-blue-50 transition-colors py-3 px-4 rounded-lg"
          >
            For Pros
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-medium text-base text-[#002d72] tracking-[0.35px] uppercase hover:text-[#0056FF] hover:bg-blue-50 transition-colors py-3 px-4 rounded-lg"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-medium text-base text-[#002d72] tracking-[0.35px] uppercase hover:text-[#0056FF] hover:bg-blue-50 transition-colors py-3 px-4 rounded-lg"
          >
            Contact Us
          </Link>
          <Link
            href="/coflex"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-medium text-base text-[#002d72] tracking-[0.35px] uppercase hover:text-[#0056FF] hover:bg-blue-50 transition-colors py-3 px-4 rounded-lg"
          >
            Coflex
          </Link>
        </nav>
      </div>
    </header>
  );
}
