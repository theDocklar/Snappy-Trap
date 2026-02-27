"use client";

import Image from "next/image";

type ProductsHeroProps = {
  activeFilter: "Bathroom" | "Kitchen";
  onFilterChange: (filter: "Bathroom" | "Kitchen") => void;
};

export default function ProductsHero({
  activeFilter,
  onFilterChange,
}: ProductsHeroProps) {
  return (
    <section className="bg-gradient-to-br from-[#002D72] via-[#003A8C] to-[#0056FF] py-20 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="font-black text-5xl lg:text-7xl text-white tracking-[-1.8px] mb-6">
            Find the Right Snappy Trap for your Project
          </h1>
          <p className="font-light text-2xl lg:text-3xl text-blue-100 tracking-[0.75px] mb-12">
            Sink Drains Made Easy
          </p>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4">
            <button
              onClick={() => onFilterChange("Bathroom")}
              className={`backdrop-blur-sm rounded-2xl px-8 py-4 border transition-all ${
                activeFilter === "Bathroom"
                  ? "bg-white/20 border-white/30"
                  : "bg-white/15 border-white/20"
              }`}
            >
              <span className="font-black text-2xl lg:text-3xl text-white tracking-[0.35px] uppercase">
                Bathroom
              </span>
            </button>
            <button
              onClick={() => onFilterChange("Kitchen")}
              className={`backdrop-blur-sm rounded-2xl px-8 py-4 border transition-all ${
                activeFilter === "Kitchen"
                  ? "bg-white/20 border-white/30"
                  : "bg-white/15 border-white/20"
              }`}
            >
              <span className="font-black text-2xl lg:text-3xl text-white tracking-[0.35px] uppercase">
                Kitchen
              </span>
            </button>
          </div>

          {/* Available Retailers */}
          <div className="mt-14">
            <p className="font-bold text-base text-white/90 tracking-wide mb-6 uppercase">
              Available At these retailers:
            </p>
            <div className="flex flex-wrap justify-center items-center gap-10 max-w-4xl mx-auto">
              {[
                { name: "Home Depot", logo: "/images/home-depot-2.jpg" },
                { name: "Amazon", logo: "/images/amazon-logo.webp" },
                { name: "Ace Hardware", logo: "/images/ace-3.png" },
                { name: "Lowes", logo: "/images/lowes-logo-2.png" },
                { name: "Menards", logo: "/images/Menards.jpg" },
              ].map((retailer) => (
                <div
                  key={retailer.name}
                  className="rounded-2xl w-32 h-20 overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl shadow-lg relative"
                >
                  <Image
                    src={retailer.logo}
                    alt={`${retailer.name} logo`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
