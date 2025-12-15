'use client'

import { useState } from 'react'

type FAQItem = {
  question: string
  answer?: string
}

const faqs: FAQItem[] = [
  {
    question: 'Will Snappy Trap fit my Sink?',
  },
  {
    question: 'Optional orientation of trap and flex pipe',
  },
  {
    question: 'Is it high quality and will it meet plumbing codes',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#043687]">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-black text-4xl lg:text-5xl text-white tracking-[-1.2px] uppercase text-center mb-16">
          FAQ
        </h2>

        <div className="space-y-6 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
              >
                <p className="font-black text-xl lg:text-2xl text-black uppercase flex-1">
                  {faq.question}
                </p>
                <div className="ml-4 flex-shrink-0">
                  <span className="text-3xl font-light text-black">
                    {openIndex === index ? '-' : '+'}
                  </span>
                </div>
              </button>
              {openIndex === index && faq.answer && (
                <div className="px-6 pb-4 pt-2">
                  <p className="font-medium text-lg text-[#4a5565] leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

