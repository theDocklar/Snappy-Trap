import SocialIcons from "./SocialIcons";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#043687] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-black text-[30px] leading-[36px] text-white tracking-[0.75px] italic">
              SnappyTrap
            </h3>
            <p className="font-medium text-lg text-blue-100 leading-[29.25px]">
              The leader in tool-free, leak-free drain solutions for over 15
              years.
            </p>
          </div>

          {/* Products */}
          <div className="space-y-3">
            <h4 className="font-black text-xl text-white tracking-[0.5px] uppercase">
              Products
            </h4>
            <div className="space-y-3 font-medium text-base text-[#bedbff]">
              <Link href={"/products"} className="cursor-pointer">
                <p>Bathroom Kits</p>
              </Link>
              <Link href={"/products"} className="cursor-pointer">
                <p>Kitchen Kits</p>
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-3">
            <h4 className="font-black text-xl text-white tracking-[0.5px] uppercase">
              Support
            </h4>
            <div className="space-y-3 font-medium text-base text-[#bedbff]">
              <p>Installation Guide</p>
              <Link href={"/about"} className="cursor-pointer">
                <p>Blogs</p>
              </Link>

              <p>FAQ</p>
              <p>Warranty</p>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-black text-xl text-white tracking-[0.5px] uppercase">
              Contact
            </h4>
            <div className="space-y-4 text-[#bedbff]">
              <p className="font-bold text-base">support@snappytrap.com</p>
              <div className="font-bold text-base">
                <p>CFX Plumbing, </p>
                <p>700 N St Mary's Street,</p>
                <p>Suite 1400, San Antonio, </p>
                <p>TX, 78205</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-400/30 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-bold text-sm text-[#bedbff] mb-4 md:mb-0">
              © 2024 SnappyTrap. All rights reserved.
            </p>
            <div className="flex space-x-8 text-sm font-bold text-[#bedbff]">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
              <a href="#" className="hover:underline">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
