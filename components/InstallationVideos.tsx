"use client";

export default function InstallationVideos() {
  const installationVideos = [
    {
      id: "-MKiK3nnCng",
      title: "Double Sink with Waste Disposal",
      description:
        "How to accommodate the Snappy Trap when installing to a waste disposal.",
    },
    {
      id: "djtcRdJZG2s",
      title: "Double Sink Installation",
      description:
        "Different ways to accommodate the Snappy Trap, save more space under your double sink.",
    },
    {
      id: "yToNfqJpprA",
      title: "All-in-One Drain Kit",
      description:
        "How to install All-in-One Drain Kit for Double Bowl for Kitchen Sinks.",
    },
  ];

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-black text-4xl lg:text-5xl text-[#043687] tracking-[-1.2px] mb-4 uppercase">
            Installation Tips
          </h2>
          <p className="font-light text-xl text-gray-600 max-w-3xl mx-auto">
            Expert guidance to make your installation smooth and hassle-free.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {installationVideos.map((video) => (
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
