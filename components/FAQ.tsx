"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer?: string;
};

const faqs: FAQItem[] = [
  {
    question: "How do I select the right SnappyTrap™ kit for my sink?",
    answer:
      "On both our website and packaging we detail which kits apply to different types of sinks. For kitchen sinks there are two choices. Use item DK-110 for double bowl sinks and item DK-100 for single bowl sinks. DK-100 also applies to kitchen prep sinks, wet bar sinks and laundry tubs. For all bathroom sinks use item DK-105.",
  },
  {
    question:
      "What makes SnappyTrap™ different from traditional sink drain parts?",
    answer:
      'Traditional sink drain systems use rigid plastic parts. Achieving perfect alignment between the sink strainer (vertical pipe) and wall drain (horizontal pipe) can require extra parts like a 45 degree elbow. This means more parts, more connections and more potential leak points. Plus, additional cost. SnappyTrap™ is the "Right Fit Drain Kit" with a patented flexible hose for perfect alignment every time. Fast, Flexible, Flawless Installation!',
  },
  {
    question: "How does SnappyTrap™ compare to traditional sink drain parts?",
    answer:
      "Traditional plastic tubular drain parts need to be measured, cut, and in some cases glued together with specialized solvent cements. SnappyTrap™ comes pre-assembled and can be installed manually, usually without the use of any tools.",
  },
  {
    question: "Does SnappyTrap™ comply with plumbing codes and standards?",
    answer:
      "Yes, SnappyTrap™ model numbers DK-110 and DK-100 are certified by the International Association of Plumbing and Mechanical Officials (IAPMO) to meet the Uniform Plumbing Code (UPC). The UPC certification is valid in all US 50 states and Canada. Model numbers DK-110 and DK-100 comply with IGC 301. Model numbers DK-105 and DK-120 are listed with IAPMO to meet the criteria of IGC 328.",
  },
  {
    question: "Does drain waste build up in the SnappyTrap™ hoses?",
    answer:
      'No, the smooth hose interior is a patented feature of SnappyTrap™ and is "self-scouring" and maintenance free. Old-style corrugated hoses cause build-up and odors. They must be disconnected and cleaned out periodically.',
  },
  {
    question: "How flexible are the SnappyTrap™ hoses?",
    answer:
      "The SnappyTrap™ hoses are made from Flexible PVC material. The patented hose will easily adapt to offset pipe angles, yet is sturdy enough not to sag, and will function maintenance free for many years.",
  },
  {
    question: "How much wall drain offset can SnappyTrap™ accommodate?",
    answer:
      'SnappyTrap™ adapts to wall drain pipes with 10"-12" horizontal distance from the vertical sink strainer pipe location.',
  },
  {
    question: "Can the SnappyTrap™ be installed to a floor drain?",
    answer:
      "Yes, it can. Depending on the preparation of the floor drain pipe, additional components may be needed. For a bare drain pipe coming from the floor, a 90 degree elbow with a marvel adapter will need to be installed to the drain pipe first.",
  },
  {
    question: "What are the lengths of the SnappyTrap™ flexible hoses?",
    answer:
      'Double kitchen sinks drain kit, hose length: 13". Single kitchen sinks drain kit, hose length: 9". All bathroom sinks drain kit, hose length: 9".',
  },
  {
    question: "What is SnappyTrap™ high temperature specification?",
    answer:
      "It is safe to pour liquids down the drain up to the boiling point (212° F / 100° C).",
  },
  {
    question: "Can the length of the SnappyTrap™ hoses be cut?",
    answer:
      'Yes, however in most cases the hose flexibility accommodates the required spacing. For tight space clearance issues, go to the "How it Works" section of our website for tips. If cutting is ultimately required, the videos will walk you through the easy steps.',
  },
  {
    question: "Will SnappyTrap™ fit where there is limited vertical space?",
    answer:
      'If you have less than 4" of vertical space from sink drain to wall drain pipe, we offer our DK-120 SnappyTrap Special Kit for double bowl kitchen sinks.',
  },
  {
    question:
      'Does the "Y" fitting connecting the double kitchen sink hoses have a diverter?',
    answer:
      'Yes, the "Y" fitting that connects the two flexible hoses has a "diverter" feature to make sure the draining water from one hose does not backup into the other connecting hose.',
  },
  {
    question: "Can I re-use SnappyTrap?",
    answer:
      "We do not recommend re-using and/or re-installing the SnappyTrap. Each new sink installation should be completed using a new kit.",
  },
  {
    question: "What should I do if I need help during installation?",
    answer:
      'Please visit our "How it Works" page for instruction sheets and videos that address the most common installation issues. You can also visit our "Contact Us" page to get in touch directly.',
  },
  {
    question: "Where can I buy a SnappyTrap™?",
    answer:
      "SnappyTrap™ is available at all Home Depot, Lowe's and Menards stores, plus many ACE Hardware locations. Find us online at homedepot.com, amazon.com, lowes.com, menards.com, and acehardware.com.",
  },
];

type FAQProps = {
  /** When set, only this many questions show until “View more” is clicked */
  previewCount?: number;
};

export default function FAQ({ previewCount }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [expanded, setExpanded] = useState(false);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const visibleFaqs =
    previewCount && !expanded ? faqs.slice(0, previewCount) : faqs;
  const hasMore = Boolean(previewCount && faqs.length > previewCount);

  return (
    <section
      id="faq"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#043687]"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-[-1.2px] uppercase text-center mb-10 sm:mb-12 lg:mb-16">
          FAQ
        </h2>

        <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
          {visibleFaqs.map((faq, index) => (
            <div
              key={faq.question}
              className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 text-left"
              >
                <p className="font-black text-base sm:text-lg lg:text-xl text-black flex-1 pr-3">
                  {faq.question}
                </p>
                <div className="ml-2 sm:ml-4 flex-shrink-0">
                  <span className="text-2xl sm:text-3xl font-light text-black">
                    {openIndex === index ? "−" : "+"}
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

        {hasMore && (
          <div className="mt-8 sm:mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => {
                setExpanded((prev) => !prev);
                setOpenIndex(null);
              }}
              className="bg-white hover:bg-blue-50 text-[#043687] px-8 sm:px-10 py-3 sm:py-4 font-bold text-base sm:text-lg rounded-xl sm:rounded-2xl uppercase tracking-wide shadow-lg hover:shadow-xl transition-all"
            >
              {expanded ? "Show less" : "View more"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
