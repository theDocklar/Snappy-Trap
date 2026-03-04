import Header from "@/components/Header";
import ProductDetail from "@/components/ProductDetail";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { getProductById, products } from "@/lib/products";
import { notFound } from "next/navigation";

// Generate static params for all products
export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const product = getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Product Detail Section */}
      <ProductDetail product={product} />

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <Footer />
    </main>
  );
}
