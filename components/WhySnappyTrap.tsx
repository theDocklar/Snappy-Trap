import Image from "next/image";

const features = [
  {
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12"
      >
        <path
          d="M18.1675 8.33332C18.5481 10.2011 18.2769 12.1428 17.3991 13.8348C16.5213 15.5268 15.0899 16.8667 13.3438 17.6311C11.5976 18.3955 9.64221 18.5381 7.8036 18.0353C5.965 17.5325 4.35435 16.4145 3.24025 14.8678C2.12616 13.3212 1.57596 11.4394 1.68141 9.53615C1.78686 7.63294 2.54159 5.8234 3.81973 4.4093C5.09787 2.9952 6.82217 2.06202 8.70508 1.76537C10.588 1.46872 12.5157 1.82654 14.1667 2.77916"
          stroke="white"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.5 9.16668L10 11.6667L18.3333 3.33334"
          stroke="white"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "No Buildup",
    description: "Everything you need Sink to Wall",
  },
  {
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12"
      >
        <path
          d="M29.4 12.6C29.0335 12.9738 28.8282 13.4765 28.8282 14C28.8282 14.5235 29.0335 15.0261 29.4 15.4L32.6 18.6C32.9738 18.9664 33.4764 19.1717 34 19.1717C34.5235 19.1717 35.0261 18.9664 35.4 18.6L42.94 11.06C43.9456 13.2823 44.2501 15.7584 43.8129 18.1583C43.3756 20.5581 42.2174 22.7676 40.4925 24.4925C38.7676 26.2174 36.5581 27.3756 34.1582 27.8129C31.7584 28.2501 29.2823 27.9456 27.06 26.94L13.24 40.76C12.4443 41.5556 11.3652 42.0026 10.24 42.0026C9.11474 42.0026 8.0356 41.5556 7.23995 40.76C6.44431 39.9643 5.99731 38.8852 5.99731 37.76C5.99731 36.6347 6.44431 35.5556 7.23995 34.76L21.06 20.94C20.0543 18.7176 19.7498 16.2415 20.187 13.8417C20.6243 11.4418 21.7825 9.23227 23.5074 7.5074C25.2323 5.78253 27.4418 4.6243 29.8417 4.18704C32.2415 3.74979 34.7176 4.05429 36.94 5.05996L29.42 12.58L29.4 12.6Z"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "No Odor",
    description: "tool free for maximum ease of installation",
  },
  {
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12"
      >
        <path
          d="M29.4 12.6C29.0335 12.9738 28.8282 13.4765 28.8282 14C28.8282 14.5235 29.0335 15.0261 29.4 15.4L32.6 18.6C32.9738 18.9664 33.4764 19.1717 34 19.1717C34.5235 19.1717 35.0261 18.9664 35.4 18.6L42.94 11.06C43.9456 13.2823 44.2501 15.7584 43.8129 18.1583C43.3756 20.5581 42.2174 22.7676 40.4925 24.4925C38.7676 26.2174 36.5581 27.3756 34.1582 27.8129C31.7584 28.2501 29.2823 27.9456 27.06 26.94L13.24 40.76C12.4443 41.5556 11.3652 42.0026 10.24 42.0026C9.11474 42.0026 8.0356 41.5556 7.23995 40.76C6.44431 39.9643 5.99731 38.8852 5.99731 37.76C5.99731 36.6347 6.44431 35.5556 7.23995 34.76L21.06 20.94C20.0543 18.7176 19.7498 16.2415 20.187 13.8417C20.6243 11.4418 21.7825 9.23227 23.5074 7.5074C25.2323 5.78253 27.4418 4.6243 29.8417 4.18704C32.2415 3.74979 34.7176 4.05429 36.94 5.05996L29.42 12.58L29.4 12.6Z"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "No Cleaning",
    description:
      "Flexibility for any space , no matter how tight. Handles off set connection with ease",
  },
];

export default function WhySnappyTrap() {
  return (
    <section className="py-20 bg-white relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-black text-4xl lg:text-5xl text-black tracking-[-1.2px] uppercase mb-4">
            Why Snappy Trap Works Better
          </h2>
          <p className="font-light text-xl lg:text-2xl text-[#4a5565] tracking-[0.6px] max-w-3xl mx-auto">
            Experience the difference with our patented technology and
            innovative design
          </p>
        </div>

        <div className="w-20 h-20 mx-auto mb-8 rounded-full overflow-hidden flex items-center justify-center">
          <Image
            src="/images/feature-icon-2.png"
            alt="Feature icon"
            width={80}
            height={80}
            className="object-contain"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-110 transition-all duration-500"
            >
              {/* <div className="w-24 h-24 bg-gradient-to-br from-[#002D72] to-[#0056FF] rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:shadow-3xl transition-shadow">
                {feature.icon}
              </div> */}
              <h3 className="font-black text-2xl text-black tracking-[0.6px] uppercase mb-4">
                {feature.title}
              </h3>
              {/* <p className="font-medium text-lg text-[#4a5565] leading-relaxed">
                {feature.description}
              </p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
