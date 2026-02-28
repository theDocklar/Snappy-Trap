"use client";

import { useState } from "react";
import Header from "@/components/Header";
import ProductsHero from "@/components/ProductsHero";
import ProductGrid from "@/components/ProductGrid";
import RetailerButtons from "@/components/RetailerButtons";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

// Product data - these would typically come from a CMS or API
const bathroomProducts = [
  {
    id: "1",
    name: "Bathroom Sink Drain Kit",
    image: "/images/image13.png",
    itemNumber: "DK-105",
    productLink: "/products/dk-105",
  },
];

const kitchenProducts = [
  {
    id: "2",
    name: "Single bowl Kitchen Sink",
    image: "/images/image19.png",
    itemNumber: "DK-100",
    productLink: "/products/dk-100",
  },
  {
    id: "3",
    name: "Double bowl Kitchen Sink",
    image: "/images/image9.png",
    itemNumber: "DK-110",
    productLink: "/products/dk-110",
  },
  {
    id: "4",
    name: "Double Bowl Kitchen Sink",
    image: "/images/image9.png",
    itemNumber: "DK-120",
    productLink: "/products/dk-120",
  },
];

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState<"Bathroom" | "Kitchen">(
    "Bathroom",
  );

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section with Filters */}
      <ProductsHero
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      {/* Show products based on active filter */}
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

      {/* FAQ Section */}
      <FAQ />

      {/* Newsletter Section */}
      {/* <Newsletter /> */}

      {/* Footer */}
      <Footer />
    </main>
  );
}
