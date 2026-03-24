import Image from "next/image";

export default function CofflexStory() {
  return (
    <section className="bg-[#043687] px-4 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-28 lg:px-8 lg:pb-20 lg:pt-32">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-4xl text-center font-black text- leading-[1.1] tracking-[-1.4px] text-white sm:mb-10 sm:text-5xl lg:mb-12 lg:text-6xl">
          Coflex - Leading Plumbing Innovation
        </h1>

        <div className="mt-12">
          <div className="mb-10 relative w-full overflow-hidden rounded-[28px] shadow-2xl">
            <Image
              src="/images/coflex-factory.jpg"
              alt="Coflex Factory"
              width={1200}
              height={500}
              className="w-full h-auto object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1000px"
            />
          </div>
        </div>

        <div className="space-y-8 w-full">
          <div className="space-y-8 text-justify text-lg font-normal leading-loose tracking-[-0.2px] text-white sm:text-xl lg:text-2xl">
            <p>
              Founded in 1989 with a vision for plumbing product innovation that
              has propelled us to a position of industry leadership both
              nationally and internationally. Based in Monterrey Mexico, Coflex
              is the largest manufacturer of plumbing accessories in the
              Americas and exports to over 20 countries. In total, we sell more
              than 1,000 products under the Coflex, Coflex Pro, Coflex Home and
              ACQUAPUR Coflex brands.
            </p>

            <p>
              We are committed to continual advancement of our manufacturing
              processes, quality systems and technologies which are enabled by
              our world class team of people. Our products are developed,
              manufactured and sold under international certifications such as
              ISO-9001, SICAL, IAMPO, NSF, ICONTEC.
            </p>

            <p>
              For both professionals and do-it-yourself consumers, Coflex offers
              efficiency, reliability and confidence for every project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
