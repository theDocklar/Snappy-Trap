import Image from "next/image";

type Product = {
  id: string;
  name: string;
  image: string;
  itemNumber: string;
  productLink?: string;
};

type ProductGridProps = {
  title: string;
  products: Product[];
};

export default function ProductGrid({ title, products }: ProductGridProps) {
  // Use single column for bathroom (1 product), 3 columns for kitchen (3 products)
  const gridCols =
    products.length === 1
      ? "md:grid-cols-1 max-w-2xl mx-auto"
      : "md:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-black text-3xl sm:text-4xl lg:text-5xl text-black tracking-[-1.2px] uppercase mb-10 sm:mb-12 lg:mb-16">
          {title}
        </h2>

        <div className={`grid ${gridCols} gap-6 sm:gap-8`}>
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-[25px] sm:rounded-[35px] lg:rounded-[55px] p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative h-[280px] sm:h-[350px] lg:h-[400px] mb-5 sm:mb-6 flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="object-contain w-full h-full"
                />
              </div>

              {/* Product Info */}
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <p className="font-black text-base sm:text-lg text-black">
                    {product.name}
                  </p>
                  <p className="font-light text-sm sm:text-base lg:text-lg text-[#4a5565] mt-2">
                    SKU: {product.itemNumber}
                  </p>
                </div>

                {/* CTA Button */}
                <div className="pt-3 sm:pt-4">
                  <a
                    href={product.productLink || "#"}
                    className="block w-full bg-[#043687] hover:bg-[#0056FF] text-white px-5 sm:px-6 py-3 h-12 sm:h-14 font-black text-sm sm:text-base lg:text-md rounded-xl sm:rounded-2xl tracking-[-1.2px] uppercase transition-all text-center leading-[2.2rem] sm:leading-[2.5rem]"
                  >
                    SHOP NOW
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
