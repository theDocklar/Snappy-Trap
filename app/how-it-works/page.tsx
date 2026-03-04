import Header from "@/components/Header";
import HowItWorksHero from "@/components/HowItWorksHero";
import VideoShowcase from "@/components/VideoShowcase";
import InstallationVideos from "@/components/InstallationVideos";
import CustomerReviews from "@/components/CustomerReviews";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <HowItWorksHero />

      {/* Installation Tips Videos Section */}
      <InstallationVideos />

      {/* Product Videos Section */}
      <VideoShowcase />

      {/* Footer */}
      <Footer />
    </main>
  );
}
