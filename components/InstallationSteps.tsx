import Image from "next/image";

type Step = {
  number: string;
  title: string;
  description: string;
  image?: string;
};

const steps: Step[] = [
  {
    number: "01",
    title: "Remove Old Drain",
    description:
      "Remove your existing drain assembly. Clean the sink opening to ensure a smooth surface for installation.",
  },
  {
    number: "02",
    title: "Install Drain Flange",
    description:
      "Place the drain flange into the sink opening from the top. The flexible design ensures a perfect fit for any sink type.",
  },
  {
    number: "03",
    title: "Connect Flexible Pipe",
    description:
      "Attach the flexible pipe to the drain flange. The flexible design allows for easy positioning without perfect alignment.",
  },
  {
    number: "04",
    title: "Connect to Wall Outlet",
    description:
      "Connect the flexible pipe to your wall outlet. The secure connection system ensures a leak-free seal every time.",
  },
  {
    number: "05",
    title: "Test & Enjoy",
    description:
      "Run water to test the installation. Enjoy your leak-free, maintenance-free drain system that requires no tools!",
  },
];

export default function InstallationSteps() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-black text-4xl lg:text-5xl text-black tracking-[-1.2px] uppercase mb-4">
            Installation in 5 Simple Steps
          </h2>
          <p className="font-light text-xl lg:text-2xl text-[#4a5565] tracking-[0.6px] max-w-3xl mx-auto">
            Our tool-free design makes installation quick and easy for anyone.
          </p>
        </div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-12`}
            >
              {/* Step Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#002D72] to-[#0056FF] rounded-full flex items-center justify-center">
                    <span className="font-black text-3xl text-white">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-black text-3xl lg:text-4xl text-black tracking-[-1.2px] uppercase">
                    {step.title}
                  </h3>
                </div>
                <p className="font-medium text-lg lg:text-xl text-[#4a5565] leading-relaxed max-w-2xl">
                  {step.description}
                </p>
              </div>

              {/* Step Image Placeholder */}
              <div className="flex-1">
                <div className="relative w-full h-[400px] bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl flex items-center justify-center">
                  {step.image ? (
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={600}
                      height={400}
                      className="object-contain rounded-3xl"
                    />
                  ) : (
                    <div className="text-center">
                      <div className="w-32 h-32 bg-gradient-to-br from-[#002D72] to-[#0056FF] rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="font-black text-4xl text-white">
                          {step.number}
                        </span>
                      </div>
                      <p className="font-medium text-lg text-[#4a5565]">
                        Step {step.number}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
