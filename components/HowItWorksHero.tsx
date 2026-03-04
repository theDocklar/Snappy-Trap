export default function HowItWorksHero() {
  return (
    <section className="bg-gradient-to-br from-[#002D72] via-[#003A8C] to-[#0056FF] py-20 lg:py-24 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="font-black text-5xl lg:text-6xl text-white tracking-[-1.8px] mb-6 animate-fade-in">
            How It Works
          </h1>
          <p
            className="font-medium text-base lg:text-lg text-white/90 max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Watch our step-by-step videos to see how easy it is to install
            Snappy Trap and get expert tips for a perfect installation every
            time.
          </p>
        </div>
      </div>
    </section>
  );
}
