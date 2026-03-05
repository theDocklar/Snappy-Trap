export default function HowItWorksProduct() {
  const thumbnails = [
    { src: "/images/image12.png", alt: "Bathroom kit" },
    { src: "/images/image9.png", alt: "Kitchen kit" },
    { src: "/images/image13.png", alt: "Bathroom drain kit" },
  ];

  return (
    <section className="bg-[#043687] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Product Image */}
          <div className="space-y-4">
            {/* Main Product Image */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="relative w-full h-[500px] lg:h-[600px] overflow-hidden rounded-xl">
                <img
                  src="/images/image9.png"
                  alt="Snappy Trap Universal Kitchen Drain Kit"
                  className="object-contain w-full h-full"
                />
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-3 gap-4">
              {thumbnails.map((thumb, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 shadow-md">
                  <div className="relative w-full h-[120px] rounded-lg overflow-hidden">
                    <img
                      src={thumb.src}
                      alt={thumb.alt}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Product Details */}
          <div className="space-y-6 text-white">
            {/* Product Title */}
            <h1 className="font-black text-4xl lg:text-5xl text-white tracking-[-1.2px] uppercase">
              Snappy Trap Universal Kitchen Drain Kit for Your Project
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.683-1.532 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.777.565-1.832-.197-1.532-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="font-light text-lg text-white">(1234 Reviews)</p>
            </div>

            {/* Price */}
            <p className="font-black text-5xl lg:text-6xl text-white">$29.9</p>

            {/* Features/Benefits */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <p className="font-medium text-lg text-white">
                  Universal fit with quick, one-step install
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <p className="font-medium text-lg text-white">
                  Tool-free DIY setup, no cutting or measuring
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <p className="font-medium text-lg text-white">
                  Compact, flexible design saves under-sink space
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <p className="font-medium text-lg text-white">
                  Smooth hose prevents clogs, odors & buildup
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <p className="font-medium text-lg text-white">
                  Premium seals ensure durable, leak-free joints
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <p className="font-medium text-lg text-white">
                  30-day money back guarantee
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-white hover:bg-blue-50 text-[#043687] px-8 py-4 font-bold text-lg rounded-2xl uppercase transition-all">
                WATCH DEMO
              </button>
              <button className="bg-[#002D72] hover:bg-[#001d52] text-white px-8 py-4 font-bold text-lg rounded-2xl uppercase transition-all border-2 border-white">
                GUIDE TO INSTALL
              </button>
            </div>

            {/* Payment/Shipping Icons */}
            <div className="pt-6 space-y-4">
              {/* Payment Icons */}
              <div className="flex gap-4">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div
                    key={item}
                    className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center"
                  >
                    {/* Placeholder for payment icon */}
                  </div>
                ))}
              </div>

              {/* Shipping Info */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    {/* Truck icon placeholder */}
                  </div>
                  <p className="font-medium text-sm text-white text-center">
                    FREE SHIPPING
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    {/* Truck icon placeholder */}
                  </div>
                  <p className="font-medium text-sm text-white text-center">
                    FAST DELIVERY
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    {/* Truck icon placeholder */}
                  </div>
                  <p className="font-medium text-sm text-white text-center">
                    EASY RETURNS
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    {/* Truck icon placeholder */}
                  </div>
                  <p className="font-medium text-sm text-white text-center">
                    SECURE PAYMENT
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
