import Image from "next/image";

const features = [
  {
    icon: (
      <Image
        src="/images/no-buildup.png"
        alt="No odor icon"
        width={130}
        height={130}
        className="object-cover"
      />
    ),
    title: "No residue build-up",
    description:
      "The smooth walls of the hose won’t trap waste particles. It’s a “self-scouring” sink drain system.",
  },
  {
    icon: (
      <Image
        src="/images/no-odor.png"
        alt="No odor icon"
        width={130}
        height={130}
        className="object-contain"
      />
    ),
    title: "No odor problem",
    description:
      "No residue means no odor! Other flexible hoses can be corrugated, causing residue and odor over time.",
  },
  {
    icon: (
      <Image
        src="/images/no-cleaning.png"
        alt="No cleaning icon"
        width={130}
        height={130}
        className="object-contain"
      />
    ),
    title: "No Cleaning",
    description:
      "Traditional corrugated hoses require periodic residue clean-out. SnappyTrap is maintenance free!",
  },
];

export default function WhySnappyTrap() {
  return (
    <section className="py-20 bg-white relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-black text-4xl lg:text-5xl text-black tracking-[-1.2px] uppercase mb-4">
            Why SnappyTrap Works Better
          </h2>
          <p className="font-light text-xl lg:text-2xl text-[#4a5565] tracking-[0.6px] max-w-3xl mx-auto">
            Experience the difference with our patented technology and
            innovative design.
          </p>
        </div>

        <div className="w-[600px] h-[450px] mx-auto mb-8 rounded-full overflow-hidden flex items-center justify-center">
          <Image
            src="/images/flexible-hose.png"
            alt="flexible hose"
            width={600}
            height={450}
            className="object-contain"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-110 transition-all duration-500"
            >
              <div className=" w-32 h-32  overflow-hidden flex items-center justify-center mx-auto mt-5 mb-8">
                {feature.icon}
              </div>
              <h3 className="font-black text-2xl text-black tracking-[0.6px] uppercase mb-4">
                {feature.title}
              </h3>
              <p className="font-medium text-lg text-[#4a5565] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
