import Header from '@/components/Header'
import AboutStory from '@/components/AboutStory'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#043687]">
      <Header />

      {/* Our Story */}
      <AboutStory />

      {/* Newsletter Section */}
      <Newsletter />

      {/* Footer */}
      <Footer />
    </main>
  )
}

