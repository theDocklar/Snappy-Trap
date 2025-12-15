import Header from '@/components/Header'
import HowItWorksProduct from '@/components/HowItWorksProduct'
import CustomerReviews from '@/components/CustomerReviews'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Product Section */}
      <HowItWorksProduct />

      {/* Customer Reviews Section */}
      <CustomerReviews />

  

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <Newsletter />
      <Footer />
    </main>
  )
}

