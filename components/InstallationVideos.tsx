"use client";

export default function InstallationVideos() {
  const installationVideos = [
    // {
    //   id: "-MKiK3nnCng",
    //   type: "youtube",
    //   title: "Double Sink with Waste Disposal",
    //   description:
    //     "How to accommodate the Snappy Trap when installing to a waste disposal.",
    // },
    {
      id: "djtcRdJZG2s",
      type: "youtube",
      title: "Double Sink Installation",
      description:
        "Different ways to accommodate the Snappy Trap, save more space under your double sink.",
    },
    {
      id: "yToNfqJpprA",
      type: "youtube",
      title: "All-in-One Drain Kit",
      description:
        "How to install All-in-One Drain Kit for Double Bowl for Kitchen Sinks.",
    },
    {
      id: "0",
      type: "dropbox",
      url: "https://www.dropbox.com/scl/fo/sahy8zp4okcf6cdddxzqf/AKYEH7DF4o1go4W0o494-8s/Snappy%20Trap%20Kits%20D2.mp4?rlkey=wy2wmxm9o0lw5peb97prt55d1&st=hognav9f&raw=1",
      title: "Snappy Trap Kits",
      description: "The right fit drain kit",
    },

    {
      id: "1",
      type: "dropbox",
      url: "https://www.dropbox.com/scl/fo/sahy8zp4okcf6cdddxzqf/AA_l5EdrapIbq5SZW7hIiIY/How%20To%20Install%20All-In-One%20Drain%20Kit%20For%20Double%20Bowl%20For%20Kitchen%20D2.mp4?rlkey=wy2wmxm9o0lw5peb97prt55d1&st=8rxkytdo&raw=1",
      title: "All-in-One Drain Kit",
      description:
        "How to install All-in-One Drain Kit for Double Bowl for Kitchen",
    },
    {
      id: "2",
      type: "dropbox",
      url: "https://www.dropbox.com/scl/fo/sahy8zp4okcf6cdddxzqf/AGa6kanfZogDxUrfDU12mHI/Tips%20For%20Double%20Sink%20Installation%20with%20the%20Snappy%20Trap%20D2.mp4?rlkey=wy2wmxm9o0lw5peb97prt55d1&st=hfrw39fk&raw=1",
      title: "Double Sink Installation",
      description: "Tips For Double Sink Installation with the Snappy Trap",
    },
    {
      id: "3",
      type: "dropbox",
      url: "https://www.dropbox.com/scl/fo/sahy8zp4okcf6cdddxzqf/ADEwsCOVAnu3D0z2_b06kkw/Tips%20For%20Double%20Sink%20With%20Disposal%20and%20the%20Snappy%20Trap%20D2.mp4?rlkey=wy2wmxm9o0lw5peb97prt55d1&st=vcg2h82p&raw=1",
      title: "Double Sink with Waste Disposal",
      description:
        "How to accommodate the Snappy Trap when installing to a waste disposal",
    },
    {
      id: "4",
      type: "dropbox",
      url: "https://www.dropbox.com/scl/fo/sahy8zp4okcf6cdddxzqf/ABNfvhOn83auwP8SSkByjWM/Snappy%20Trap%20Bathroom%20Sink%20D2.mp4?rlkey=wy2wmxm9o0lw5peb97prt55d1&st=46f44iym&raw=1",
      title: "Snappy Trap Bathroom Sink",
      description: "How to install Snappy Trap bathroom sink",
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="font-black text-3xl sm:text-4xl lg:text-5xl text-[#043687] tracking-[-1.2px] mb-3 sm:mb-4 uppercase">
            Installation Tips
          </h2>
          <p className="font-light text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Expert guidance to make your installation smooth and hassle-free.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {installationVideos.map((video) => (
            <div
              key={video.id}
              className="bg-gray-50 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 sm:hover:-translate-y-2 duration-300"
            >
              {/* Video Container */}
              <div className="relative w-full aspect-video">
                {video.type === "youtube" ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  ></iframe>
                ) : (
                  <iframe
                    src={video.url}
                    title={video.title}
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  ></iframe>
                )}
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
