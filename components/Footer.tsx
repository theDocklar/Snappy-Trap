import SocialIcons from "./SocialIcons";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#043687] pt-6 pb-12 sm:pt-10 sm:pb-14 lg:pt-12 lg:pb-16 xl:pt-16 xl:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-14 lg:mb-16">
          {/* Company Info */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-black text-2xl sm:text-3xl lg:text-[30px] leading-tight text-white tracking-[0.75px] italic">
              Snappy Trap
            </h3>
            <p className="font-medium text-base sm:text-lg lg:text-xl text-blue-100 leading-relaxed">
              The leader in tool-free, leak-free drain solutions for over 15
              years.
            </p>
          </div>

          {/* Products */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-black text-lg sm:text-xl lg:text-2xl text-white tracking-[0.5px] uppercase">
              Products
            </h4>
            <div className="space-y-2 sm:space-y-3 font-medium text-sm sm:text-base lg:text-lg text-[#bedbff]">
              <Link
                href={"/products"}
                className="cursor-pointer block hover:text-white transition-colors py-1"
              >
                <p>Bathroom Kits</p>
              </Link>
              <Link
                href="/products"
                className="cursor-pointer block hover:text-white transition-colors py-1"
              >
                <p>Kitchen Kits</p>
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-black text-lg sm:text-xl lg:text-2xl text-white tracking-[0.5px] uppercase">
              Support
            </h4>
            <div className="space-y-2 sm:space-y-3 font-medium text-sm sm:text-base lg:text-lg text-[#bedbff]">
              <p className="hover:text-white transition-colors cursor-pointer py-1">
                Installation Guide
              </p>
              <a
                href="/blogs/blog1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-block"
              >
                <p className="hover:text-white transition-colors cursor-pointer py-1">
                  Blogs
                </p>
              </a>

              <p className="hover:text-white transition-colors cursor-pointer py-1">
                FAQ
              </p>
              <p className="hover:text-white transition-colors cursor-pointer py-1">
                Warranty
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-black text-lg sm:text-xl lg:text-2xl text-white tracking-[0.5px] uppercase">
              Contact
            </h4>
            <div className="space-y-3 sm:space-y-4 text-[#bedbff]">
              <a
                href="mailto:support@snappytrap.com"
                className="font-bold text-sm sm:text-base lg:text-lg hover:text-white transition-colors block"
              >
                support@snappytrap.com
              </a>
              <div className="font-bold text-sm sm:text-base lg:text-lg leading-relaxed">
                <p>CFX Plumbing, </p>
                <p>700 N St Mary's Street,</p>
                <p>Suite 1400, San Antonio, </p>
                <p>TX, 78205</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-400/30 pt-8 sm:pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
            <p className="font-bold text-xs sm:text-sm text-[#bedbff] text-center md:text-left">
              © 2024 SnappyTrap. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm font-bold text-[#bedbff]">
              <a href="#" className="hover:text-white transition-colors py-1">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors py-1">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors py-1">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
