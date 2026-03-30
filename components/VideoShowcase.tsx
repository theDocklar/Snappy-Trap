"use client";

export default function VideoShowcase() {
  const videos = [
    {
      id: "nHNFFfehByI",
      title: "How to Cut a Long Wall Drain Pipe",
      description:
        "Properly install the Snappy Trap when the wall drain pipe is sticking out too far from the wall.",
    },
    {
      id: "-LKtsGZvJdA",
      title: "How to Cut the Length of the Snappy Trap Hoses",
      description: "Simple way to cut the length of the hoses.",
    },
    {
      id: "pU6sPbw5D3s",
      title: "Cut the hose of the Universal Drain Kit for Bathroom Sinks",
      description: "how to cut the flexible hose and re-attach the fitting.",
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="font-black text-3xl sm:text-4xl lg:text-5xl text-[#043687] tracking-[-1.2px] mb-3 sm:mb-4 uppercase">
            How to Cut the Hose
          </h2>
          <p className="font-light text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Watch our demonstration videos.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-gray-50 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 sm:hover:-translate-y-2 duration-300"
            >
              {/* Video Container */}
              <div className="relative w-full aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                ></iframe>
              </div>

              {/* Video Info */}
              <div className="p-4 sm:p-5 lg:p-6">
                <h3 className="font-bold text-lg sm:text-xl lg:text-2xl text-[#043687] mb-2">
                  {video.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
