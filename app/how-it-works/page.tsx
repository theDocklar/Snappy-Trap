import Header from '@/components/Header'
import HowItWorksHero from '@/components/HowItWorksHero'
import InstallationSteps from '@/components/InstallationSteps'
import InstallationGuide from '@/components/InstallationGuide'
import FAQ from '@/components/FAQ'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <HowItWorksHero />

      {/* Installation Steps */}
      <InstallationSteps />

      {/* Installation Guide & Benefits */}
      <InstallationGuide />

      {/* FAQ Section */}
      <FAQ />

      {/* Newsletter Section */}
      <Newsletter />

      {/* Footer */}
      <Footer />
    </main>
  )
}

