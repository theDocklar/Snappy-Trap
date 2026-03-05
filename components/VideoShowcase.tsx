"use client";

export default function VideoShowcase() {
  const videos = [
    {
      id: "YoCLO3j2h_U",
      title: "How to Cut a Long Wall Drain Pipe",
      description:
        "Properly install the Snappy Trap when the wall drain pipe is sticking out too far from the wall.",
    },
    {
      id: "341SdheqFw4",
      title: "How to Cut the Length of the Snappy Trap Hoses",
      description: "Simple way to cut the length of the hoses.",
    },
  ];

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-black text-4xl lg:text-5xl text-[#043687] tracking-[-1.2px] mb-4 uppercase">
            How to Cut the Hose
          </h2>
          <p className="font-light text-xl text-gray-600 max-w-3xl mx-auto">
            Watch our demonstration videos.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 duration-300"
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
              <div className="p-6">
                <h3 className="font-bold text-2xl text-[#043687] mb-2">
                  {video.title}
                </h3>
                <p className="text-gray-600 text-lg">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
