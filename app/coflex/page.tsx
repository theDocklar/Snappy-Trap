import Header from "@/components/Header";
import CofflexStory from "@/components/CofflexStory";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function CofflexPage() {
  return (
    <main className="min-h-screen bg-[#043687]">
      <Header />

      {/* Coflex Story */}
      <CofflexStory />

      {/* Footer */}
      <Footer />
    </main>
  );
}
