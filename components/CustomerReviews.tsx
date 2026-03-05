const reviews = [
  {
    quote:
      "Installed in under 5 minutes with no tools. This product is a game-changer for DIY projects!",
    author: "SARAH M., HOMEOWNER",
    rating: 5,
  },
  {
    quote:
      "Zero callbacks since switching to Snappy Trap. Quality and reliability you can count on.",
    author: "JENNIFER L., GENERAL CONTRACTOR",
    rating: 5,
  },
  {
    quote:
      "Game changer for my business. Customers love the quick installation and I love the reliability.",
    author: "MIKE P., PROFESSIONAL PLUMBER",
    rating: 5,
  },
  {
    quote:
      "Perfect fit for my kitchen sink. The flexible design made installation so easy!",
    author: "DAVID R., HOMEOWNER",
    rating: 5,
  },
];

export default function CustomerReviews() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center font-black text-4xl lg:text-5xl text-black tracking-[-1.2px] uppercase mb-16">
          Customer Reviews
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
            >
              <div className="flex items-start gap-4">
                {/* Avatar Placeholder */}
                <div className="w-16 h-16 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center">
                  {/* Placeholder circle */}
                </div>

                {/* Review Content */}
                <div className="flex-1">
                  {/* Stars */}
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.683-1.532 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.777.565-1.832-.197-1.532-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote Icon */}
                  <div className="relative mb-3">
                    <span className="text-5xl text-[#BEDBFF] font-light leading-none absolute -left-2 -top-2">
                      "
                    </span>
                    <p className="font-bold text-lg text-black pl-6 leading-relaxed">
                      {review.quote}
                    </p>
                  </div>

                  {/* Author */}
                  <p className="text-sm text-[#4a5565] tracking-[0.35px] uppercase font-bold">
                    — {review.author}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Link */}
        <div className="text-center">
          <a
            href="#"
            className="font-medium text-lg text-black hover:underline"
          >
            View more
          </a>
        </div>
      </div>
    </section>
  );
}
