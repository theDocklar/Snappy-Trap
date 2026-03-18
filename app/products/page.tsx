"use client";

import { useRef } from "react";
import Header from "@/components/Header";
import ProductsHero from "@/components/ProductsHero";
import ProductGrid from "@/components/ProductGrid";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { getProductsByCategory } from "@/lib/products";

export default function ProductsPage() {
  const bathroomRef = useRef<HTMLDivElement>(null);
  const kitchenRef = useRef<HTMLDivElement>(null);

  // Get products from centralized data source
  const bathroomProducts = getProductsByCategory("Bathroom").map((p) => ({
    id: p.id,
    name: p.productTitle,
    image: p.mainImage,
    itemNumber: p.modelNumber,
    productLink: p.productLink,
  }));

  const kitchenProducts = getProductsByCategory("Kitchen").map((p) => ({
    id: p.id,
    name: p.productTitle,
    image: p.mainImage,
    itemNumber: p.modelNumber,
    productLink: p.productLink,
  }));

  const handleScroll = (section: "Bathroom" | "Kitchen") => {
    if (section === "Bathroom" && bathroomRef.current) {
      bathroomRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (section === "Kitchen" && kitchenRef.current) {
      kitchenRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section with Navigation Buttons */}
      <ProductsHero onNavigate={handleScroll} />

      {/* Bathroom Section */}
      <div ref={bathroomRef}>
        <ProductGrid
          title="Bathroom Sink Drain Kits"
          products={bathroomProducts}
        />
      </div>

      {/* Kitchen Section */}
      <div ref={kitchenRef}>
        <ProductGrid
          title="Kitchen Sink Drain Kits"
          products={kitchenProducts}
        />
      </div>

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <Footer />
    </main>
  );
}
