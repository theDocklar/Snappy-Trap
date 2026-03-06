import Image from "next/image";

export default function Newsletter() {
  return (
    <section className="bg-[#043687] relative overflow-hidden py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[600px]">
              <Image
                src="/images/image9.png"
                alt="Kitchen sink with Snappy Trap installation"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Side - Form Content */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <div>
              <h2 className="font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white tracking-[-1px] uppercase mb-4 sm:mb-6">
                Subscribe to Our Newsletter
              </h2>
              <div className="mb-6 sm:mb-8">
                <p className="font-light text-base sm:text-lg lg:text-xl xl:text-2xl text-blue-100 tracking-[0.6px] space-y-2 mb-4 sm:mb-6">
                  <span className="block">1. Early access to new product.</span>
                  <span className="block">2. Special community discounts.</span>
                  <span className="block">
                    3. Free resources to make your life easier.
                  </span>
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  className="w-full bg-white/90 backdrop-blur-sm border-0 text-black placeholder:text-gray-500 h-12 sm:h-14 text-base sm:text-lg font-medium rounded-xl sm:rounded-2xl px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex-1">
                <input
                  type="email"
                  id="email"
                  placeholder="Email address"
                  className="w-full bg-white/90 backdrop-blur-sm border-0 text-black placeholder:text-gray-500 h-12 sm:h-14 text-base sm:text-lg font-medium rounded-xl sm:rounded-2xl px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className="bg-white hover:bg-blue-50 text-[#002d72] px-8 sm:px-10 h-12 sm:h-14 font-bold text-sm rounded-xl sm:rounded-2xl tracking-[0.45px] uppercase transition-all whitespace-nowrap">
                SUBSCRIBE
              </button>
            </div>

            <p className="font-light text-base sm:text-lg lg:text-xl xl:text-2xl text-blue-100 tracking-[0.6px]">
              Join thousands of professionals and DIY enthusiasts getting
              exclusive deals.
            </p>

            <p className="font-medium text-xs sm:text-sm text-[#bedbff]">
              No spam, unsubscribe anytime. Privacy policy protected.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
