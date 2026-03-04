import Image from "next/image";

type Retailer = {
  name: string;
  logo: string;
  url: string;
  bgColor: string;
  hoverColor: string;
};

type RetailerButtonsProps = {
  retailers?: Retailer[];
  className?: string;
  layout?: "grid" | "horizontal";
  showTitle?: boolean;
};

const defaultRetailers: Retailer[] = [
  {
    name: "Home Depot",
    logo: "/images/home-depot.jpg",
    url: "https://www.homedepot.com/s/snappy%2520trap?NCNI-5",
    bgColor: "bg-[#F96302]",
    hoverColor: "hover:bg-[#E05500]",
  },
  {
    name: "Lowes",
    logo: "/images/lowes-logo.png",
    url: "https://www.lowes.com/search?searchTerm=snappy+trap",
    bgColor: "bg-[#004990]",
    hoverColor: "hover:bg-[#003670]",
  },
  {
    name: "Amazon",
    logo: "/images/amazon-logo.png",
    url: "https://www.amazon.com/s?k=snappy+trap",
    bgColor: "bg-[#232F3E]",
    hoverColor: "hover:bg-[#131921]",
  },
  {
    name: "Ace Hardware",
    logo: "/images/ace-hardware-logo.png",
    url: "https://www.acehardware.com/search?query=snappy+trap",
    bgColor: "bg-[#CE0E2D]",
    hoverColor: "hover:bg-[#A00B24]",
  },
  {
    name: "Menards",
    logo: "/images/mernards-logo.png",
    url: "#",
    bgColor: "bg-[#1D4F91]",
    hoverColor: "hover:bg-[#163A6D]",
  },
];

export default function RetailerButtons({
  retailers = defaultRetailers,
  className = "",
  layout = "grid",
  showTitle = true,
}: RetailerButtonsProps) {
  const gridClass =
    layout === "horizontal"
      ? "grid grid-cols-2 md:grid-cols-5 gap-3"
      : "grid grid-cols-2 gap-3";

  return (
    <div className={`${className}`}>
      {showTitle && (
        <p className="font-bold text-sm text-gray-700 uppercase tracking-wide mb-4">
          Available At:
        </p>
      )}
      <div className={gridClass}>
        {retailers.map((retailer) => (
          <a
            key={retailer.name}
            href={retailer.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${retailer.bgColor} ${retailer.hoverColor} rounded-lg px-6 py-4 h-16 flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg`}
          >
            <span className="text-white font-semibold text-xs uppercase mr-2 whitespace-nowrap">
              Buy now on
            </span>
            <div className="relative h-8 w-24 flex items-center justify-center">
              <Image
                src={retailer.logo}
                alt={`${retailer.name} logo`}
                width={96}
                height={32}
                className="object-contain max-h-8"
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
