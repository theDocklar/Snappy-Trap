import Image from 'next/image'

type Product = {
  id: string
  name: string
  description: string[]
  price: string
  reviews: string
  image: string
  itemNumber: string
}

type ProductGridProps = {
  title: string
  products: Product[]
}

export default function ProductGrid({ title, products }: ProductGridProps) {
  // Use single column for bathroom (1 product), 3 columns for kitchen (3 products)
  const gridCols = products.length === 1 ? 'md:grid-cols-1 max-w-2xl mx-auto' : 'md:grid-cols-2 lg:grid-cols-3'
  
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-black text-4xl lg:text-5xl text-black tracking-[-1.2px] uppercase mb-16">
          {title}
        </h2>
        
        <div className={`grid ${gridCols} gap-8`}>
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-[55px] p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative h-[400px] mb-6 flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="object-contain w-full h-full"
                />
              </div>

              {/* Product Info */}
              <div className="space-y-4">
                <div>
                  {product.description.map((line, index) => (
                    <p
                      key={index}
                      className={`text-lg ${
                        index === 0 ? 'font-black text-black' : 'font-light text-[#4a5565]'
                      }`}
                    >
                      {line}
                    </p>
                  ))}
                  <p className="font-light text-lg text-[#4a5565] mt-2">
                    {product.itemNumber}
                  </p>
                </div>

                {/* Reviews */}
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(4)].map((_, i) => (
                      <svg
                        key={i}
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.80808 1.04903C9.84936 0.984264 9.91314 0.929745 9.9922 0.891628C10.0713 0.853511 10.1625 0.833313 10.2556 0.833313C10.3486 0.833313 10.4398 0.853511 10.5189 0.891628C10.598 0.929745 10.6617 0.984264 10.703 1.04903L12.8792 4.47178C13.0225 4.69706 13.2342 4.89196 13.4959 5.03976C13.7576 5.18756 14.0616 5.28384 14.3818 5.32033L19.2484 5.87336C19.3406 5.88373 19.4273 5.91393 19.4985 5.96055C19.5698 6.00717 19.6228 6.06834 19.6516 6.13714C19.6804 6.20595 19.6839 6.27964 19.6616 6.34989C19.6393 6.42014 19.5921 6.48413 19.5254 6.53464L16.0059 9.19588C15.7737 9.37152 15.6001 9.58833 15.4998 9.82764C15.3995 10.067 15.3757 10.3216 15.4303 10.5697L16.2612 14.3296C16.2774 14.4012 16.2675 14.4749 16.2324 14.5423C16.1974 14.6097 16.1386 14.668 16.0629 14.7108C15.9872 14.7535 15.8975 14.7788 15.8041 14.7838C15.7108 14.7889 15.6174 14.7734 15.5348 14.7393L11.1844 12.9632C10.8978 12.8463 10.5788 12.7852 10.2551 12.7852C9.93132 12.7852 9.6124 12.8463 9.32574 12.9632L4.97628 14.7393C4.89369 14.7732 4.80049 14.7885 4.70728 14.7834C4.61406 14.7782 4.52458 14.7529 4.44901 14.7102C4.37343 14.6675 4.3148 14.6092 4.27978 14.5419C4.24476 14.4747 4.23475 14.4011 4.2509 14.3296L5.08085 10.5704C5.13567 10.3222 5.11192 10.0674 5.01164 9.82794C4.91136 9.58848 4.73757 9.37156 4.50525 9.19588L0.985737 6.53537C0.918469 6.48492 0.8708 6.42082 0.848162 6.35036C0.825523 6.27989 0.828826 6.20591 0.857692 6.13684C0.886558 6.06776 0.939828 6.00637 1.01143 5.95966C1.08304 5.91295 1.1701 5.88279 1.2627 5.87262L6.12841 5.32033C6.44895 5.28412 6.75336 5.18797 7.01544 5.04015C7.27751 4.89234 7.4894 4.69728 7.63287 4.47178L9.80808 1.04903Z"
                          fill="#FCC800"
                          stroke="#FCC800"
                          strokeWidth="1.66667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ))}
                  </div>
                  <p className="font-light text-2xl lg:text-3xl text-black tracking-[0.75px]">
                    {product.reviews}
                  </p>
                </div>

                {/* Price */}
                <p className="font-light text-3xl text-black tracking-[0.75px]">
                  {product.price}
                </p>

                {/* CTA Buttons */}
                <div className="flex gap-4 pt-4">
                  <button className="flex-1 bg-[#043687] hover:bg-[#0056FF] text-white px-6 py-3 h-14 font-medium text-md rounded-2xl transition-all">
                    View Product
                  </button>
                  <button className="flex-1 bg-[#043687] hover:bg-[#0056FF] text-white px-6 py-3 h-14 font-black text-md rounded-2xl tracking-[-1.2px] uppercase transition-all">
                    SHOP now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

