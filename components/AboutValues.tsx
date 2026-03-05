const values = [
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
          d="M24 8L30 18L40 20L32 28L34 38L24 33L14 38L16 28L8 20L18 18L24 8Z"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Innovation",
    description:
      "We continuously push the boundaries of what's possible in drain solutions, developing new technologies that make installation easier and more reliable.",
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
          d="M24 8C15.1634 8 8 15.1634 8 24C8 32.8366 15.1634 40 24 40C32.8366 40 40 32.8366 40 24C40 15.1634 32.8366 8 24 8Z"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 16V24L28 28"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Quality",
    description:
      "Every product is engineered to the highest standards, ensuring durability, reliability, and performance that exceeds expectations.",
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
          d="M24 8C15.1634 8 8 15.1634 8 24C8 32.8366 15.1634 40 24 40C32.8366 40 40 32.8366 40 24C40 15.1634 32.8366 8 24 8Z"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 24L22 28L30 20"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Reliability",
    description:
      "Our products are trusted by professionals and homeowners alike, with a proven track record of leak-free performance and long-lasting durability.",
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
          d="M24 8L8 16V24C8 32.8366 15.1634 40 24 40C32.8366 40 40 32.8366 40 24V16L24 8Z"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 20V28M24 28L28 32M24 28L20 32"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Customer Focus",
    description:
      "Your success is our success. We design every product with the end user in mind, making complex installations simple and stress-free.",
  },
];

export default function AboutValues() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-black text-4xl lg:text-5xl text-black tracking-[-1.2px] uppercase mb-4">
            Our Values
          </h2>
          <p className="font-light text-xl lg:text-2xl text-[#4a5565] tracking-[0.6px] max-w-3xl mx-auto">
            The principles that guide everything we do.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-[#002D72] to-[#0056FF] rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:shadow-3xl transition-shadow">
                {value.icon}
              </div>
              <h3 className="font-black text-xl lg:text-2xl text-black tracking-[0.6px] uppercase mb-4">
                {value.title}
              </h3>
              <p className="font-medium text-base lg:text-lg text-[#4a5565] leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
