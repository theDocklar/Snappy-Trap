"use client";

import Image from "next/image";

type ProductsHeroProps = {
  onNavigate: (section: "Bathroom" | "Kitchen") => void;
};

export default function ProductsHero({ onNavigate }: ProductsHeroProps) {
  return (
    <section className="bg-gradient-to-br from-[#002D72] via-[#003A8C] to-[#0056FF] py-16 sm:py-20 lg:py-28 pt-24 sm:pt-28 lg:pt-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white tracking-[-1.8px] mb-4 sm:mb-6 leading-tight">
            Find the Right Snappy Trap for Your Project
          </h1>
          <p className="font-light text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-100 tracking-[0.75px] mb-8 sm:mb-10 lg:mb-12 px-2">
            Sink Drains Made Easy
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 max-w-lg sm:max-w-none mx-auto px-2">
            <button
              onClick={() => onNavigate("Bathroom")}
              className="backdrop-blur-md rounded-2xl sm:rounded-3xl px-8 sm:px-12 lg:px-16 py-4 sm:py-5 lg:py-6 border-2 border-white bg-white/10 text-white transition-all duration-300 hover:scale-105 w-full sm:w-56 lg:w-72 shadow-2xl hover:bg-white/40 hover:shadow-[0_8px_30px_rgba(255,255,255,0.4)] flex items-center justify-center"
            >
              <span className="font-black text-2xl sm:text-3xl lg:text-4xl tracking-[0.35px] uppercase">
                Bathroom
              </span>
            </button>
            <button
              onClick={() => onNavigate("Kitchen")}
              className="backdrop-blur-md rounded-2xl sm:rounded-3xl px-8 sm:px-12 lg:px-16 py-4 sm:py-5 lg:py-6 border-2 border-white bg-white/10 text-white transition-all duration-300 hover:scale-105 w-full sm:w-56 lg:w-72 shadow-2xl hover:bg-white/40 hover:shadow-[0_8px_30px_rgba(255,255,255,0.4)] flex items-center justify-center"
            >
              <span className="font-black text-2xl sm:text-3xl lg:text-4xl tracking-[0.35px] uppercase">
                Kitchen
              </span>
            </button>
          </div>

          {/* Available Retailers */}
          <div className="mt-10 sm:mt-12 lg:mt-14">
            <p className="font-bold text-sm sm:text-base text-white/90 tracking-wide mb-4 sm:mb-6 uppercase">
              Available at these retailers:
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-10 max-w-4xl mx-auto">
              {[
                {
                  name: "Home Depot",
                  logo: "/images/home-depot-2.jpg",
                  url: "https://www.homedepot.com/s/snappy%2520trap?NCNI-5",
                },
                {
                  name: "Amazon",
                  logo: "/images/amazon-logo.webp",
                  url: "https://www.amazon.com/s?k=snappy+trap",
                },
                {
                  name: "Ace Hardware",
                  logo: "/images/ace-3.png",
                  url: "https://www.acehardware.com/search?query=snappy+trap",
                },
                {
                  name: "Lowes",
                  logo: "/images/lowes-logo-2.png",
                  url: "https://www.lowes.com/search?searchTerm=snappy+trap",
                },
                {
                  name: "Menards",
                  logo: "/images/Menards.jpg",
                  url: "https://www.menards.com/main/search.html?search=snappy+trap",
                },
              ].map((retailer) => (
                <a
                  key={retailer.name}
                  href={retailer.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl sm:rounded-2xl w-24 h-16 sm:w-28 sm:h-18 lg:w-32 lg:h-20 overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl shadow-lg relative cursor-pointer"
                >
                  <Image
                    src={retailer.logo}
                    alt={`${retailer.name} logo`}
                    fill
                    className="object-cover"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
