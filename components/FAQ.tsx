"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer?: string;
};

const faqs: FAQItem[] = [
  {
    question: "What is the length of the Snappy Trap™ hoses?",
    answer:
      'Double kitchen sinks drain kit, hose length: 13". Single kitchen sinks drain kit, hose length: 9". All bathroom sinks drain kit, hose length: 9".',
  },
  {
    question: "How resistant is Snappy Trap™ to high temperature?",
    answer: `It's safe to pour liquids down the drain up to boiling point (212° F / 100° C).`,
  },
  {
    question: "Can the Snappy Trap™ be installed to a floor drain?",
    answer:
      "Yes, it can. Depending on the preparation of the floor drain pipe, additional components may be needed. For a bare drain pipe coming from the floor, a 90 degree elbow with a marvel adapter will need to be installed to the drain pipe first.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#043687]">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-[-1.2px] uppercase text-center mb-10 sm:mb-12 lg:mb-16">
          FAQ
        </h2>

        <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 text-left"
              >
                <p className="font-black text-base sm:text-lg lg:text-xl xl:text-2xl text-black uppercase flex-1 pr-3">
                  {faq.question}
                </p>
                <div className="ml-2 sm:ml-4 flex-shrink-0">
                  <span className="text-2xl sm:text-3xl font-light text-black">
                    {openIndex === index ? "-" : "+"}
                  </span>
                </div>
              </button>
              {openIndex === index && faq.answer && (
                <div className="px-4 sm:px-6 pb-3 sm:pb-4 pt-2">
                  <p className="font-medium text-sm sm:text-base lg:text-lg text-[#4a5565] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
