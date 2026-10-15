import { useState } from 'react'
import { Plus } from 'lucide-react'
import Button from '../ui/Button.jsx'
import SectionTag from '../ui/SectionTag.jsx'
import { FAQS } from '../../data/content.js'

function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <li className="overflow-hidden rounded-lg bg-forest-50/70">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium text-forest-900 transition-colors hover:bg-forest-100/70"
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        {faq.question}
        <Plus
          className={`h-4 w-4 shrink-0 text-forest-800 transition-transform duration-200 ${
            isOpen ? 'rotate-45' : ''
          }`}
          aria-hidden="true"
        />
      </button>
      {isOpen && (
        <p className="px-5 pb-4 text-sm leading-relaxed text-forest-700">
          {faq.answer}
        </p>
      )}
    </li>
  )
}

/**
 * FAQ section with accordion interaction.
 */
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="bg-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-20 xl:px-8">
        <div>
          <SectionTag>Frequently Asked Questions</SectionTag>
          <h2 className="font-serif text-3xl font-bold text-forest-900 sm:text-4xl">
            Have Questions?
            <span className="block">We&rsquo;ve Got Answers.</span>
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-forest-700">
            Find quick answers to common questions about our meal plans,
            delivery, and more.
          </p>
          <Button href="#cta" variant="primary" className="mt-8">
            View All FAQs
            <span aria-hidden="true">&rarr;</span>
          </Button>
        </div>

        <ul className="space-y-3">
          {FAQS.map((faq, i) => (
            <FaqItem
              key={faq.question}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}
