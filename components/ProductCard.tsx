import Image from "next/image";

type ProductCardProps = {
  title: string;
  productName: string;
  sku: string;
  image: string;
  imageAlt: string;
  productLink?: string;
};

export default function ProductCard({
  title,
  productName,
  image,
  imageAlt,
  productLink = "#",
}: ProductCardProps) {
  return (
    <div className="bg-white overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 sm:hover:-translate-y-4 group border-0 flex flex-col h-full min-h-[600px] sm:min-h-[750px] lg:min-h-[874px]">
      <div className="p-5 sm:p-6 lg:p-8 flex flex-col flex-1">
        <h2 className="font-black text-3xl sm:text-4xl lg:text-5xl text-black tracking-[0.6px] uppercase mb-4 sm:mb-6 text-center">
          {title}
        </h2>
        <div className="relative flex-1 min-h-[300px] sm:min-h-[400px] lg:min-h-[476px] mb-5 sm:mb-6 flex items-center justify-center">
          <div className="relative w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[609px] aspect-square rounded-2xl overflow-hidden">
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-contain scale-100"
            />
          </div>
        </div>
        <div className="mt-auto">
          <h3 className="font-black text-lg sm:text-xl lg:text-2xl text-black tracking-[0.6px] uppercase mb-4 sm:mb-6">
            {productName}
          </h3>

          <a
            href={productLink}
            className="block w-full bg-gradient-to-r from-[#0056FF] to-[#002D72] hover:from-[#0066FF] hover:to-[#003A8C] text-white font-bold text-base sm:text-lg py-3 sm:py-4 rounded-xl sm:rounded-2xl tracking-wide uppercase text-center transition-all"
          >
            view more
          </a>
        </div>
      </div>
    </div>
  );
}
