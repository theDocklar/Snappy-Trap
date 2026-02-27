import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#002D72] via-[#003A8C] to-[#0056FF] pt-32 pb-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="font-black text-5xl lg:text-6xl text-white tracking-[-2px] uppercase mb-6">
            Contact Us
          </h1>
          <p className="font-light text-xl lg:text-2xl text-blue-100 tracking-[0.6px] max-w-3xl mx-auto">
            We're here to help with any questions about Snappy Trap products,
            installation, or support
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </main>
  );
}
