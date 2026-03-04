import Image from 'next/image'

type ProductCardProps = {
  title: string;
  productName: string;
  sku: string;
  image: string;
  imageAlt: string;
  productLink?: string;
};

export default function ProductCard({ title, productName, sku, image, imageAlt, productLink = "#" }: ProductCardProps) {
  return (
    <div className="bg-white overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 group border-0 flex flex-col h-full min-h-[874px]">
      <div className="p-8 flex flex-col flex-1">
        <h2 className="font-black text-[50px] text-black tracking-[0.6px] uppercase mb-6 text-center">
          {title}
        </h2>
        <div className="relative flex-1 min-h-[476px] mb-6 flex items-center justify-center">
          <div className="relative w-full max-w-[609px] aspect-square rounded-full overflow-hidden">
            <Image 
              src={image} 
              alt={imageAlt}
              fill
              className="object-contain scale-100"
            />
          </div>
        </div>
        <div className="mt-auto">
          <h3 className="font-black text-2xl text-black tracking-[0.6px] uppercase mb-6">
            {productName}
          </h3>
          
          <a 
            href={productLink}
            className="block w-full bg-gradient-to-r from-[#0056FF] to-[#002D72] hover:from-[#0066FF] hover:to-[#003A8C] text-white font-bold text-lg py-4 rounded-2xl tracking-wide uppercase text-center transition-all"
          >
            view more
          </a>
        </div>
      </div>
    </div>
  );
}

