import Image from "next/image";

export default function AboutStory() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#043687] pt-32">
      <div className="max-w-7xl mx-auto">
      <h2 className="font-black text-5xl sm:text-6xl lg:text-[79px] text-white tracking-[-1.8px] leading-[1.2] mb-10">
              Our Story
            </h2>
      <div className="relative h-[400px] sm:h-[600px] lg:h-[700px] w-full rounded-[55px] mx-auto lg:mx-0 mb-10 overflow-hidden">
              <Image
                src="/images/about-us-1.png"
                alt="Our Story"
                fill
                className="object-cover"
              />
            </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - Content */}
          <div className="space-y-8">
           
            <div className="space-y-6 font-normal text-lg sm:text-2xl lg:text-[20px] text-white lowercase tracking-[-1.2px] leading-[1.5]">
              <p>
                At SnappyTrap, we believe installing a kitchen sink drain should be quick, clean, and frustration-free. That's why we engineered an innovative universal drain kit that takes the guesswork out of plumbing no cutting, gluing, or special tools required.
              </p>
              <p>
                Born from real-world experience and a passion for smart home solutions, SnappyTrap is designed to simplify sink installations for homeowners, DIYers, and professionals alike. Our system ensures a perfect, leak-free fit every time, saving you time, effort, and costly callbacks.
              </p>
              <p>
                With precision engineering, durable materials, and eco-conscious design, SnappyTrap continues to redefine convenience in home plumbing. We're here to make your projects smoother — one snap at a time
              </p>
            </div>
          </div>

          {/* Right Side - Image Placeholder */}
          <div className="relative">
            <div className="relative h-[400px] sm:h-[600px] lg:h-[600px] w-full max-w-[670px] rounded-[55px] mx-auto lg:mx-0 overflow-hidden">
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
  )
}

