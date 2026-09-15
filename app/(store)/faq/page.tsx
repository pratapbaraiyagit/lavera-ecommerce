"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What is your return policy?",
    answer: "We accept returns within 30 days of delivery for unworn, unwashed items with all original tags attached. Final sale items cannot be returned."
  },
  {
    question: "How long does shipping take?",
    answer: "Standard shipping typically takes 3-5 business days. Expedited shipping is available at checkout for 1-2 business day delivery. International orders may take 7-14 business days depending on the destination."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship to over 50 countries worldwide. International shipping rates and duties are calculated at checkout based on your location."
  },
  {
    question: "How do I care for my silk garments?",
    answer: "We recommend dry cleaning for all our silk pieces to maintain their luster and shape. If hand washing, use cold water and a silk-specific detergent, then lay flat to dry."
  },
  {
    question: "Can I cancel or change my order?",
    answer: "We process orders quickly, but if you contact us within 1 hour of placing your order, we will do our best to accommodate any changes or cancellations."
  }
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24 min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-serif mb-6 text-center">Frequently Asked Questions</h1>
        <p className="text-muted-foreground text-center mb-16">
          Find answers to common questions about our products, shipping, and returns.
        </p>

        <div className="border-t border-border">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                className="w-full text-left py-6 flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-lg pr-8">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center bg-secondary/20 p-8 border border-border">
          <h2 className="text-xl font-serif mb-2">Still need help?</h2>
          <p className="text-muted-foreground mb-6">Our customer care team is here for you.</p>
          <a href="/contact" className="inline-block border border-black px-8 py-3 text-sm font-medium uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}