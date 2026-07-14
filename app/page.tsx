import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhySnappyTrap from "@/components/WhySnappyTrap";
import ProductCard from "@/components/ProductCard";
import TrustedBy from "@/components/TrustedBy";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Why SnappyTrap Works Better */}
      <WhySnappyTrap />

      {/* Product Selection Section */}
      <section
        id="shop"
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#043687]"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center font-black text-3xl sm:text-4xl md:text-5xl lg:text-[50px] text-white tracking-[-3.5px] uppercase mb-10 sm:mb-12 lg:mb-16 leading-tight">
            Choose your Sink Drain Project
          </h2>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <ProductCard
              title="Bathrooms"
              productName="Bathroom Sink KIT"
              sku="DK-105"
              image="/images/bathroom.jpg"
              imageAlt="Bathroom sink with cabinet"
              productLink="/products"
              titleColor="bathroom"
            />
            <ProductCard
              title="Kitchens"
              productName="Kitchen Sink KITs"
              sku="DK-100"
              image="/images/kitchen.jpg"
              imageAlt="Kitchen sink with drain"
              productLink="/products"
              titleColor="kitchen"
            />
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <TrustedBy />

      {/* FAQ — preview 3, expand in place */}
      <FAQ previewCount={3} />

      {/* Footer */}
      <Footer />
    </main>
  );
}
