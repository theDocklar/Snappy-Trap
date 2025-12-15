import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#002D72] via-[#003A8C] to-[#0056FF] pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        {/* Decorative background elements */}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Image */}
          <div className="relative order-1 lg:order-1">
            <div className="relative rounded-[65px] overflow-hidden">
              <Image 
                src="/images/hero-image.png" 
                alt="Professional installing Snappy Trap" 
                width={701} 
                height={701}
                className="w-full h-auto object-cover"
              />
              
              {/* Circular Badge Overlay - Bottom Left */}
              <div className="absolute bottom-4 left-4 flex items-center gap-4 z-10">
         
                <Image src="/images/feature-icon-2.png" alt="shield" width={64} height={64} className="w-32 h-32" />
       
                <div className="text-white space-y-1 px-3 py-2">
                  <p className="text-sm font-bold">No Build up</p>
                  <p className="text-sm font-bold">No Odor</p>
                  <p className="text-sm font-bold">No Cleaning</p>
                </div>
              </div>
            </div>
             {/* Brand Slogan - Bottom Center */}
        <div className="mt-4 text-center">
          <div className="flex  gap-4 mb-4">
            <Image 
              src="/images/logo.png" 
              alt="Snappy Trap" 
              width={316} 
              height={52}
              className="h-16 w-auto"
            />
          </div>
          <p className="font-light text-2xl text-blue-100 tracking-[0.75px] mb-4">
            All-In-One Drain Kits
          </p>
          <div className="flex items-center justify-center space-x-4">
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
          

          {/* Right Side - Content */}
          <div className="order-2 lg:order-2 space-y-6">
            <div className="space-y-4">
              <h1 className="font-black text-5xl lg:text-7xl text-white tracking-[-1.8px] leading-tight">
                Fast, Flexible,
                <br />
                Flawless,
                <br />
                Installation
              </h1>
              <p className="font-light text-2xl lg:text-3xl text-blue-100 tracking-[0.75px]">
                Sink Drains Made Easy
              </p>
            </div>

            {/* Feature Pills - 2x2 Grid */}
            <div className="grid grid-cols-2 gap-4 max-w-md">
              <div className="flex items-start space-x-2 bg-white/15 backdrop-blur-sm rounded-2xl px-4 py-3 border border-white/20">
                <div className="w-8 h-8 bg-gradient-to-r from-[#0056FF] to-[#002D72] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.1675 8.33332C18.5481 10.2011 18.2769 12.1428 17.3991 13.8348C16.5213 15.5268 15.0899 16.8667 13.3438 17.6311C11.5976 18.3955 9.64221 18.5381 7.8036 18.0353C5.965 17.5325 4.35435 16.4145 3.24025 14.8678C2.12616 13.3212 1.57596 11.4394 1.68141 9.53615C1.78686 7.63294 2.54159 5.8234 3.81973 4.4093C5.09787 2.9952 6.82217 2.06202 8.70508 1.76537C10.588 1.46872 12.5157 1.82654 14.1667 2.77916" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.5 9.16668L10 11.6667L18.3333 3.33334" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="font-bold text-sm text-white tracking-[0.35px] uppercase">Complete kits</span>
              </div>
              <div className="flex items-start space-x-2 bg-white/15 backdrop-blur-sm rounded-2xl px-4 py-3 border border-white/20">
              <div className="w-8 h-8 bg-gradient-to-r from-[#0056FF] to-[#002D72] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.1675 8.33332C18.5481 10.2011 18.2769 12.1428 17.3991 13.8348C16.5213 15.5268 15.0899 16.8667 13.3438 17.6311C11.5976 18.3955 9.64221 18.5381 7.8036 18.0353C5.965 17.5325 4.35435 16.4145 3.24025 14.8678C2.12616 13.3212 1.57596 11.4394 1.68141 9.53615C1.78686 7.63294 2.54159 5.8234 3.81973 4.4093C5.09787 2.9952 6.82217 2.06202 8.70508 1.76537C10.588 1.46872 12.5157 1.82654 14.1667 2.77916" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.5 9.16668L10 11.6667L18.3333 3.33334" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="font-bold text-sm text-white tracking-[0.35px] uppercase">no tools</span>
              </div>
              <div className="flex items-start space-x-2 bg-white/15 backdrop-blur-sm rounded-2xl px-4 py-3 border border-white/20">
              <div className="w-8 h-8 bg-gradient-to-r from-[#0056FF] to-[#002D72] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.1675 8.33332C18.5481 10.2011 18.2769 12.1428 17.3991 13.8348C16.5213 15.5268 15.0899 16.8667 13.3438 17.6311C11.5976 18.3955 9.64221 18.5381 7.8036 18.0353C5.965 17.5325 4.35435 16.4145 3.24025 14.8678C2.12616 13.3212 1.57596 11.4394 1.68141 9.53615C1.78686 7.63294 2.54159 5.8234 3.81973 4.4093C5.09787 2.9952 6.82217 2.06202 8.70508 1.76537C10.588 1.46872 12.5157 1.82654 14.1667 2.77916" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.5 9.16668L10 11.6667L18.3333 3.33334" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="font-bold text-sm text-white tracking-[0.35px] uppercase">Fits any space</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/15 backdrop-blur-sm rounded-2xl px-4 py-3 border border-white/20">
              <div className="w-8 h-8 bg-gradient-to-r from-[#0056FF] to-[#002D72] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.1675 8.33332C18.5481 10.2011 18.2769 12.1428 17.3991 13.8348C16.5213 15.5268 15.0899 16.8667 13.3438 17.6311C11.5976 18.3955 9.64221 18.5381 7.8036 18.0353C5.965 17.5325 4.35435 16.4145 3.24025 14.8678C2.12616 13.3212 1.57596 11.4394 1.68141 9.53615C1.78686 7.63294 2.54159 5.8234 3.81973 4.4093C5.09787 2.9952 6.82217 2.06202 8.70508 1.76537C10.588 1.46872 12.5157 1.82654 14.1667 2.77916" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.5 9.16668L10 11.6667L18.3333 3.33334" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="font-bold text-sm text-white tracking-[0.35px] uppercase">secure connections</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a 
                href="#installation" 
                className="bg-gradient-to-r from-[#FF0004] to-[#002D72] hover:from-[#FF2024] hover:to-[#003A8C] text-white px-10 py-6 text-xl font-bold shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 rounded-2xl tracking-wide uppercase"
              >
                Installation Help
              </a>
              <a 
                href="#shop" 
                className="bg-[#043687] hover:bg-[#0056FF] text-white px-10 py-6 text-xl font-black shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 rounded-2xl tracking-wide uppercase"
              >
                SHOP now
              </a>
            </div>

            {/* Reviews & Warranty */}
            <div className="flex items-center space-x-8 text-blue-100">
              <div className="flex items-center space-x-2">
                <svg width="122" height="16" viewBox="0 0 122 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4">
                  <path d="M9.80808 1.04903C9.84936 0.984264 9.91314 0.929745 9.9922 0.891628C10.0713 0.853511 10.1625 0.833313 10.2556 0.833313C10.3486 0.833313 10.4398 0.853511 10.5189 0.891628C10.598 0.929745 10.6617 0.984264 10.703 1.04903L12.8792 4.47178C13.0225 4.69706 13.2342 4.89196 13.4959 5.03976C13.7576 5.18756 14.0616 5.28384 14.3818 5.32033L19.2484 5.87336C19.3406 5.88373 19.4273 5.91393 19.4985 5.96055C19.5698 6.00717 19.6228 6.06834 19.6516 6.13714C19.6804 6.20595 19.6839 6.27964 19.6616 6.34989C19.6393 6.42014 19.5921 6.48413 19.5254 6.53464L16.0059 9.19588C15.7737 9.37152 15.6001 9.58833 15.4998 9.82764C15.3995 10.067 15.3757 10.3216 15.4303 10.5697L16.2612 14.3296C16.2774 14.4012 16.2675 14.4749 16.2324 14.5423C16.1974 14.6097 16.1386 14.668 16.0629 14.7108C15.9872 14.7535 15.8975 14.7788 15.8041 14.7838C15.7108 14.7889 15.6174 14.7734 15.5348 14.7393L11.1844 12.9632C10.8978 12.8463 10.5788 12.7852 10.2551 12.7852C9.93132 12.7852 9.6124 12.8463 9.32574 12.9632L4.97628 14.7393C4.89369 14.7732 4.80049 14.7885 4.70728 14.7834C4.61406 14.7782 4.52458 14.7529 4.44901 14.7102C4.37343 14.6675 4.3148 14.6092 4.27978 14.5419C4.24476 14.4747 4.23475 14.4011 4.2509 14.3296L5.08085 10.5704C5.13567 10.3222 5.11192 10.0674 5.01164 9.82794C4.91136 9.58848 4.73757 9.37156 4.50525 9.19588L0.985737 6.53537C0.918469 6.48492 0.8708 6.42082 0.848162 6.35036C0.825523 6.27989 0.828826 6.20591 0.857692 6.13684C0.886558 6.06776 0.939828 6.00637 1.01143 5.95966C1.08304 5.91295 1.1701 5.88279 1.2627 5.87262L6.12841 5.32033C6.44895 5.28412 6.75336 5.18797 7.01544 5.04015C7.27751 4.89234 7.4894 4.69728 7.63287 4.47178L9.80808 1.04903Z" fill="#FCC800" stroke="#FCC800" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M44.8524 1.04903C44.8937 0.984264 44.9575 0.929745 45.0366 0.891628C45.1156 0.853511 45.2069 0.833313 45.2999 0.833313C45.393 0.833313 45.4842 0.853511 45.5633 0.891628C45.6423 0.929745 45.7061 0.984264 45.7474 1.04903L47.9235 4.47178C48.0669 4.69706 48.2785 4.89196 48.5402 5.03976C48.802 5.18756 49.1059 5.28384 49.4261 5.32033L54.2928 5.87336C54.385 5.88373 54.4716 5.91393 54.5429 5.96055C54.6141 6.00717 54.6672 6.06834 54.696 6.13714C54.7248 6.20595 54.7283 6.27964 54.7059 6.34989C54.6836 6.42014 54.6365 6.48413 54.5697 6.53464L51.0502 9.19588C50.8181 9.37152 50.6445 9.58833 50.5442 9.82764C50.4439 10.067 50.42 10.3216 50.4746 10.5697L51.3055 14.3296C51.3218 14.4012 51.3118 14.4749 51.2768 14.5423C51.2417 14.6097 51.183 14.668 51.1073 14.7108C51.0315 14.7535 50.9419 14.7788 50.8485 14.7838C50.7551 14.7889 50.6618 14.7734 50.5792 14.7393L46.2288 12.9632C45.9421 12.8463 45.6232 12.7852 45.2995 12.7852C44.9757 12.7852 44.6568 12.8463 44.3701 12.9632L40.0207 14.7393C39.9381 14.7732 39.8449 14.7885 39.7516 14.7834C39.6584 14.7782 39.569 14.7529 39.4934 14.7102C39.4178 14.6675 39.3592 14.6092 39.3242 14.5419C39.2891 14.4747 39.2791 14.4011 39.2953 14.3296L40.1252 10.5704C40.18 10.3222 40.1563 10.0674 40.056 9.82794C39.9557 9.58848 39.7819 9.37156 39.5496 9.19588L36.0301 6.53537C35.9628 6.48492 35.9152 6.42082 35.8925 6.35036C35.8699 6.27989 35.8732 6.20591 35.9021 6.13684C35.9309 6.06776 35.9842 6.00637 36.0558 5.95966C36.1274 5.91295 36.2145 5.88279 36.3071 5.87262L41.1728 5.32033C41.4933 5.28412 41.7977 5.18797 42.0598 5.04015C42.3219 4.89234 42.5338 4.69728 42.6772 4.47178L44.8524 1.04903Z" fill="#FCC800" stroke="#FCC800" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M79.8969 1.04903C79.9382 0.984264 80.0019 0.929745 80.081 0.891628C80.1601 0.853511 80.2513 0.833313 80.3444 0.833313C80.4374 0.833313 80.5286 0.853511 80.6077 0.891628C80.6868 0.929745 80.7506 0.984264 80.7918 1.04903L82.968 4.47178C83.1113 4.69706 83.323 4.89196 83.5847 5.03976C83.8464 5.18756 84.1504 5.28384 84.4706 5.32033L89.3372 5.87336C89.4294 5.88373 89.5161 5.91393 89.5873 5.96055C89.6586 6.00717 89.7116 6.06834 89.7404 6.13714C89.7692 6.20595 89.7727 6.27964 89.7504 6.34989C89.7281 6.42014 89.6809 6.48413 89.6142 6.53464L86.0947 9.19588C85.8626 9.37152 85.6889 9.58833 85.5886 9.82764C85.4884 10.067 85.4645 10.3216 85.5191 10.5697L86.35 14.3296C86.3662 14.4012 86.3563 14.4749 86.3212 14.5423C86.2862 14.6097 86.2274 14.668 86.1517 14.7108C86.076 14.7535 85.9863 14.7788 85.8929 14.7838C85.7996 14.7889 85.7062 14.7734 85.6236 14.7393L81.2732 12.9632C80.9866 12.8463 80.6677 12.7852 80.3439 12.7852C80.0201 12.7852 79.7012 12.8463 79.4146 12.9632L75.0651 14.7393C74.9825 14.7732 74.8893 14.7885 74.7961 14.7834C74.7029 14.7782 74.6134 14.7529 74.5378 14.7102C74.4622 14.6675 74.4036 14.6092 74.3686 14.5419C74.3336 14.4747 74.3236 14.4011 74.3397 14.3296L75.1697 10.5704C75.2245 10.3222 75.2007 10.0674 75.1004 9.82794C75.0002 9.58848 74.8264 9.37156 74.5941 9.19588L71.0745 6.53537C71.0073 6.48492 70.9596 6.42082 70.937 6.35036C70.9143 6.27989 70.9176 6.20591 70.9465 6.13684C70.9754 6.06776 71.0286 6.00637 71.1002 5.95966C71.1718 5.91295 71.2589 5.88279 71.3515 5.87262L76.2172 5.32033C76.5378 5.28412 76.8422 5.18797 77.1042 5.04015C77.3663 4.89234 77.5782 4.69728 77.7217 4.47178L79.8969 1.04903Z" fill="#FCC800" stroke="#FCC800" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M110.419 1.04903C110.461 0.984264 110.525 0.929745 110.604 0.891628C110.683 0.853511 110.774 0.833313 110.867 0.833313C110.96 0.833313 111.051 0.853511 111.13 0.891628C111.209 0.929745 111.273 0.984264 111.314 1.04903L113.491 4.47178C113.634 4.69706 113.846 4.89196 114.107 5.03976C114.369 5.18756 114.673 5.28384 114.993 5.32033L119.86 5.87336C119.952 5.88373 120.039 5.91393 120.11 5.96055C120.181 6.00717 120.234 6.06834 120.263 6.13714C120.292 6.20595 120.295 6.27964 120.273 6.34989C120.251 6.42014 120.203 6.48413 120.137 6.53464L116.617 9.19588C116.385 9.37152 116.211 9.58833 116.111 9.82764C116.011 10.067 115.987 10.3216 116.042 10.5697L116.873 14.3296C116.889 14.4012 116.879 14.4749 116.844 14.5423C116.809 14.6097 116.75 14.668 116.674 14.7108C116.599 14.7535 116.509 14.7788 116.416 14.7838C116.322 14.7889 116.229 14.7734 116.146 14.7393L111.796 12.9632C111.509 12.8463 111.19 12.7852 110.866 12.7852C110.543 12.7852 110.224 12.8463 109.937 12.9632L105.588 14.7393C105.505 14.7732 105.412 14.7885 105.319 14.7834C105.225 14.7782 105.136 14.7529 105.06 14.7102C104.985 14.6675 104.926 14.6092 104.891 14.5419C104.856 14.4747 104.846 14.4011 104.862 14.3296L105.692 10.5704C105.747 10.3222 105.723 10.0674 105.623 9.82794C105.523 9.58848 105.349 9.37156 105.117 9.19588L101.597 6.53537C101.53 6.48492 101.482 6.42082 101.46 6.35036C101.437 6.27989 101.44 6.20591 101.469 6.13684C101.498 6.06776 101.551 6.00637 101.623 5.95966C101.694 5.91295 101.781 5.88279 101.874 5.87262L106.74 5.32033C107.06 5.28412 107.365 5.18797 107.627 5.04015C107.889 4.89234 108.101 4.69728 108.244 4.47178L110.419 1.04903Z" fill="#FCC800" stroke="#FCC800" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="font-bold text-2xl">Reviews</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg width="48" height="42" viewBox="0 0 48 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-7">
                  <path d="M34.6908 22.6468C34.6908 30.8178 28.2696 34.9033 20.6377 37.2728C20.238 37.3935 19.8039 37.3877 19.4085 37.2565C11.7582 34.9033 5.33704 30.8178 5.33704 22.6468V11.2074C5.33704 10.774 5.53032 10.3584 5.87438 10.0519C6.21844 9.74541 6.68508 9.57324 7.17164 9.57324C10.8409 9.57324 15.4274 7.61221 18.6196 5.12823C19.0083 4.83244 19.5027 4.66992 20.0139 4.66992C20.5251 4.66992 21.0195 4.83244 21.4082 5.12823C24.6188 7.62855 29.1869 9.57324 32.8561 9.57324C33.3427 9.57324 33.8094 9.74541 34.1534 10.0519C34.4975 10.3584 34.6908 10.774 34.6908 11.2074V22.6468Z" stroke="#BEDBFF" strokeWidth="1.49896" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="font-bold text-2xl">5 year Limited warranty</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

