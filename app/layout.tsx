import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Snappy Trap - Leak-Free Drain Solutions',
  description: 'The leader in tool-free, leak-free drain solutions for over 15 years.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="font-sans">
      <body className="font-sans">{children}</body>
    </html>
  )
}
