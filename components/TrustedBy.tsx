import Image from 'next/image'

const testimonials = [
  {
    quote: "Zero callbacks since switching to Snappy Trap. Quality and reliability you can count on.",
    author: "Jennifer L., General Contractor",
    rating: 5
  },
  {
    quote: "Game changer for my business. Customers love the quick installation and I love the reliability.",
    author: "Mike P., Professional Plumber",
    rating: 5
  },
  {
    quote: "Installed in under 5 minutes with no tools. This product is a game-changer for DIY projects!",
    author: "Sarah M., Homeowner",
    rating: 5
  }
];

const benefits = [
  { title: "Complete Kits", subtitle: "EVERYTHING INCLUDED" },
  { title: "Faster installs", subtitle: "FLEXIBLE PIPE" },
  { title: "Secure Connections", subtitle: "NO TOOL REQUIRED" },
  { title: "5 year", subtitle: "LIMITED WARRANTY" }
];

export default function TrustedBy() {
  return (
    <section className=" py-20 bg-[#043687] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Left Side - Takes 2/3 of width */}
          <div className="lg:col-span-2">
            <h2 className="font-black text-4xl lg:text-5xl text-white tracking-[-1.2px] uppercase mb-8">
              TRUSTED BY HOMEOWNERS & PROFESSIONALS FOR OVER 15 YEARS
            </h2>
            
            <p className="font-medium text-lg lg:text-xl text-blue-100 tracking-[0.6px] mb-8 leading-relaxed">
              Snappy Trap All-In-One Drain Kits have been making sink drain installations faster, easier and more secure for over 15 years. Patented flexible, smooth-interior pipe and tool-free design. Kits for any type of sink. Accommodates multiple wall connection types.
            </p>

            <div className="mb-8 ml-60">
              <div className="mb-4">
                <Image 
                  src="/images/logo.png" 
                  alt="Snappy Trap" 
                  width={580} 
                  height={95}
                  className="h-20 w-auto"
                />
              </div>
              <p className="font-light text-2xl text-blue-100 tracking-[0.75px] mb-4 ml-40">
                The Right Fit Drain Kit
              </p>
              <div className="flex items-center space-x-4 ml-60">
                <p className="font-bold text-xl text-blue-100">by</p>
                <Image 
                  src="/images/coflex-logo.png" 
                  alt="Coflex" 
                  width={230} 
                  height={82}
                  className="h-12 w-auto"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Benefits in 2x2 Grid */}
          <div className="grid grid-cols-2 gap-6 lg:col-span-1">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="aspect-square bg-white/15 backdrop-blur-sm rounded-2xl hover:bg-white/25 transition-colors border border-white/20 flex flex-col items-center justify-center p-6"
              >
                <h3 className="font-black text-2xl text-white mb-2 text-center">
                  {benefit.title}
                </h3>
                <p className="font-bold text-sm text-[#bedbff] tracking-[0.35px] uppercase text-center">
                  {benefit.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials - Cascading/Overlapping Style */}
        <div className="relative ">
          <div className="relative min-h-[500px] md:min-h-[400px]">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`bg-white/95 backdrop-blur-sm shadow-2xl border-0 transform hover:scale-105 transition-all duration-300 rounded-2xl p-6 absolute ${
                  index === 0 
                    ? 'w-full md:w-[45%] left-0 top-0 z-[30]' : 
                  index === 1 
                    ? 'w-full md:w-[42%] left-0 md:left-[38%] top-[140px] md:top-[100px] z-[40]' : 
                    'w-full md:w-[38%] left-0 md:left-[65%] top-[280px] md:top-[200px] z-[50]'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-[#043687] shadow-lg flex-shrink-0 flex items-center justify-center">
                    {/* Empty circle for avatar placeholder */}
                  </div>
                  <div className="flex-1">
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                          <path d="M9.80808 1.04903C9.84936 0.984264 9.91314 0.929745 9.9922 0.891628C10.0713 0.853511 10.1625 0.833313 10.2556 0.833313C10.3486 0.833313 10.4398 0.853511 10.5189 0.891628C10.598 0.929745 10.6617 0.984264 10.703 1.04903L12.8792 4.47178C13.0225 4.69706 13.2342 4.89196 13.4959 5.03976C13.7576 5.18756 14.0616 5.28384 14.3818 5.32033L19.2484 5.87336C19.3406 5.88373 19.4273 5.91393 19.4985 5.96055C19.5698 6.00717 19.6228 6.06834 19.6516 6.13714C19.6804 6.20595 19.6839 6.27964 19.6616 6.34989C19.6393 6.42014 19.5921 6.48413 19.5254 6.53464L16.0059 9.19588C15.7737 9.37152 15.6001 9.58833 15.4998 9.82764C15.3995 10.067 15.3757 10.3216 15.4303 10.5697L16.2612 14.3296C16.2774 14.4012 16.2675 14.4749 16.2324 14.5423C16.1974 14.6097 16.1386 14.668 16.0629 14.7108C15.9872 14.7535 15.8975 14.7788 15.8041 14.7838C15.7108 14.7889 15.6174 14.7734 15.5348 14.7393L11.1844 12.9632C10.8978 12.8463 10.5788 12.7852 10.2551 12.7852C9.93132 12.7852 9.6124 12.8463 9.32574 12.9632L4.97628 14.7393C4.89369 14.7732 4.80049 14.7885 4.70728 14.7834C4.61406 14.7782 4.52458 14.7529 4.44901 14.7102C4.37343 14.6675 4.3148 14.6092 4.27978 14.5419C4.24476 14.4747 4.23475 14.4011 4.2509 14.3296L5.08085 10.5704C5.13567 10.3222 5.11192 10.0674 5.01164 9.82794C4.91136 9.58848 4.73757 9.37156 4.50525 9.19588L0.985737 6.53537C0.918469 6.48492 0.8708 6.42082 0.848162 6.35036C0.825523 6.27989 0.828826 6.20591 0.857692 6.13684C0.886558 6.06776 0.939828 6.00637 1.01143 5.95966C1.08304 5.91295 1.1701 5.88279 1.2627 5.87262L6.12841 5.32033C6.44895 5.28412 6.75336 5.18797 7.01544 5.04015C7.27751 4.89234 7.4894 4.69728 7.63287 4.47178L9.80808 1.04903Z" fill="#FCC800" stroke="#FCC800" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      ))}
                    </div>
                    <div className="relative mb-3">
                      <span className="text-6xl text-[#BEDBFF] font-light leading-none absolute -left-2 -top-2">"</span>
                      <p className="font-bold text-lg text-black pl-6">
                        {testimonial.quote}
                      </p>
                    </div>
                    <p className="text-sm text-[#4a5565] tracking-[0.35px] uppercase font-bold">
                      — {testimonial.author.toUpperCase()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

