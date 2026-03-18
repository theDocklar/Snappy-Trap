import Image from "next/image";

export default function AboutStory() {
  return (
    <section className="bg-[#043687] px-4 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-28 lg:px-8 lg:pb-20 lg:pt-32">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-4xl font-black leading-[1.1] tracking-[-1.4px] text-white sm:mb-10 sm:text-5xl lg:mb-12 lg:text-6xl">
          Snappy Trap - A Coflex Innovation
        </h2>

        <div className="grid items-start gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
          <div className="mt-14 max-w-2xl space-y-5 text-base font-normal leading-relaxed tracking-[-0.2px] text-white sm:text-lg lg:text-2xl">
            <p>
              Since our founding in 1989, Coflex has been a premier manufacturer
              of world-class plumbing products focused on innovation that
              delivers fast, efficient installation and maintenance.
            </p>
            <p>
              More than 15 years ago Snappy Trap All-in-One Drain Kit was
              developed to improve ease-of-installation for all types of sinks.
              That&apos;s why Snappy Trap is known as &ldquo;
              <strong>The Right Fit Drain Kit.</strong>&rdquo;
            </p>
          </div>

          <div className="mx-auto w-full max-w-[480px] lg:mx-0">
            <div className="relative h-[270px] overflow-hidden rounded-[28px] shadow-2xl sm:h-[340px] md:h-[400px] lg:h-[430px]">
              <Image
                src="/images/about-us-1.png"
                alt="Coflex team member"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 92vw, (max-width: 1200px) 45vw, 420px"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 grid items-end gap-8 lg:mt-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div className="mx-auto w-full max-w-[480px] lg:mx-0">
            <div className="relative h-[270px] overflow-hidden rounded-[28px] shadow-2xl sm:h-[340px] md:h-[400px] lg:h-[430px]">
              <Image
                src="/images/about-us-3.png"
                alt="Snappy Trap package"
                fill
                className="object-cover scale-110"
                sizes="(max-width: 768px) 92vw, (max-width: 1200px) 45vw, 420px"
              />
            </div>
          </div>

          <div className="max-w-3xl space-y-5 text-base font-normal leading-[1.55] tracking-[-0.2px] text-white sm:text-lg lg:text-2xl">
            <p>
              Installing a new sink drain can be difficult, time consuming and
              frustrating using traditional tubular pipe components.
            </p>
            <p>
              Snappy Trap has changed all that with its tool-free,
              user-friendly, maintenance-free system for kitchen &amp; bath sink
              drains.
            </p>
            <p>
              The patented flexible hose makes alignments and connections
              simple, easy and secure. And, it&apos;s certified to meet plumbing
              codes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
