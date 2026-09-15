"use client"

import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">About LAVÉRA</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Redefining modern elegance for the contemporary woman. Our mission is to create pieces that empower, inspire, and endure beyond fleeting trends.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center mb-24">
          <div className="relative aspect-[4/5] w-full">
            <Image 
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80" 
              alt="LAVÉRA Studio" 
              fill 
              className="object-cover" 
            />
          </div>
          <div>
            <h2 className="text-3xl font-serif mb-6">Our Philosophy</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Founded on the principle that true style is effortless, LAVÉRA bridges the gap between high fashion and everyday wearability. Every garment is meticulously crafted with an obsessive attention to detail, cut, and fabric.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We believe in a considered approach to design—creating versatile capsules that work together harmoniously, allowing you to build a wardrobe that reflects your innate confidence.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}