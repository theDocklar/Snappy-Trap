import Image from "next/image";

export default function AboutStory() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#043687] pt-24 sm:pt-28 lg:pt-32">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-black text-4xl sm:text-3xl md:text-6xl lg:text-5xl text-white tracking-[-1.8px] leading-[1.1] mb-6 sm:mb-8 lg:mb-10">
          Snappy Trap - A Coflex Innovation
        </h2>
        <div className="relative h-[280px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full rounded-[20px] sm:rounded-[35px] lg:rounded-[55px] mx-auto lg:mx-0 mb-8 sm:mb-10 lg:mb-12 overflow-hidden shadow-xl">
          <Image
            src="/images/about-us-1.png"
            alt="Our Story"
            fill
            className="object-cover"
          />
        </div>
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
          {/* Left Side - Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-5 lg:space-y-6 font-normal text-base sm:text-lg md:text-xl lg:text-[20px] text-white tracking-[-0.5px] sm:tracking-[-0.8px] lg:tracking-[-1.2px] leading-[1.6] sm:leading-[1.55] lg:leading-[1.5]">
              <p>
                At SnappyTrap, we believe installing a kitchen sink drain should
                be quick, clean, and frustration-free. That's why we engineered
                an innovative universal drain kit that takes the guesswork out
                of plumbing — no cutting, gluing, or special tools required.
              </p>
              <p>
                Born from real-world experience and a passion for smart home
                solutions, SnappyTrap is designed to simplify sink installations
                for homeowners, DIYers, and professionals alike. Our system
                ensures a perfect, leak-free fit every time, saving you time,
                effort, and costly callbacks.
              </p>
              <p>
                With precision engineering, durable materials, and eco-conscious
                design, SnappyTrap continues to redefine convenience in home
                plumbing. We're here to make your projects smoother — one snap
                at a time.
              </p>
            </div>
          </div>

          {/* Right Side - Image Placeholder */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative h-[280px] sm:h-[380px] md:h-[480px] lg:h-[600px] w-full max-w-[670px] rounded-[20px] sm:rounded-[35px] lg:rounded-[55px] mx-auto lg:mx-0 overflow-hidden shadow-xl">
              <Image
                src="/images/about-us-2.png"
                alt="About Us"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
