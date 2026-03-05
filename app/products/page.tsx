"use client";

import { useState, useRef } from "react";
import Header from "@/components/Header";
import ProductsHero from "@/components/ProductsHero";
import ProductGrid from "@/components/ProductGrid";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { getProductsByCategory } from "@/lib/products";

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState<"Bathroom" | "Kitchen">(
    "Bathroom",
  );
  const productsRef = useRef<HTMLDivElement>(null);

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

  const handleFilterChange = (filter: "Bathroom" | "Kitchen") => {
    setActiveFilter(filter);
    // Scroll to products section after a brief delay to ensure DOM is updated
    setTimeout(() => {
      if (productsRef.current) {
        productsRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section with Filters */}
      <ProductsHero
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
      />

      {/* Show products based on active filter */}
      <div ref={productsRef}>
        {activeFilter === "Bathroom" && (
          <ProductGrid
            title="Bathroom Sink Drain Kits"
            products={bathroomProducts}
          />
        )}

        {activeFilter === "Kitchen" && (
          <ProductGrid
            title="Kitchen Sink Drain Kits"
            products={kitchenProducts}
          />
        )}
      </div>

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <Footer />
    </main>
  );
}
