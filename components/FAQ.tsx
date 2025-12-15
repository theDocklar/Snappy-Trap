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

        <div className="space-y-4 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#002D72] to-[#0056FF] rounded-3xl shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <p className="font-extrabold text-2xl lg:text-3xl text-white flex-1">
                  {faq.question}
                </p>
                <div className="ml-4 flex-shrink-0">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transform transition-transform ${
                      openIndex === index ? 'rotate-45' : ''
                    }`}
                  >
                    <path
                      d="M12 5V19M5 12H19"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
              {openIndex === index && faq.answer && (
                <div className="px-6 pb-6">
                  <p className="font-medium text-lg text-blue-100">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

