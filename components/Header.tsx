import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/logo.png" 
              alt="Snappy Trap" 
              width={316} 
              height={52}
              className="h-12 w-auto"
            />
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="font-medium text-sm text-[#002d72] tracking-[0.35px] uppercase hover:text-[#0056FF] transition-colors">
              Home
            </Link>
            <Link href="/products" className="font-medium text-sm text-[#002d72] tracking-[0.35px] uppercase hover:text-[#0056FF] transition-colors">
              Products
            </Link>
            <Link href="/how-it-works" className="font-medium text-sm text-[#002d72] tracking-[0.35px] uppercase hover:text-[#0056FF] transition-colors">
              How it Works
            </Link>
            <Link href="#" className="font-medium text-sm text-[#002d72] tracking-[0.35px] uppercase hover:text-[#0056FF] transition-colors">
              For Pros
            </Link>
            <Link href="/about" className="font-medium text-sm text-[#002d72] tracking-[0.35px] uppercase hover:text-[#0056FF] transition-colors">
              About us
            </Link>
            <Link href="/contact" className="font-medium text-sm text-[#002d72] tracking-[0.35px] uppercase hover:text-[#0056FF] transition-colors">
              Contact Us
            </Link>
            <Link href="/coflex" className="font-medium text-sm text-[#002d72] tracking-[0.35px] uppercase hidden lg:block">
              Coflex
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            
            <button className="border-2 border-[#002D72] text-[#002D72] hover:bg-[#002D72] hover:text-white bg-transparent px-4 py-2 font-bold text-sm rounded-lg tracking-wide uppercase transition-all">
              EN | ES
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

