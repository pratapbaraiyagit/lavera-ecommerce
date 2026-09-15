"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=2000&q=90",
    title: "Designed for your everyday confidence.",
    subtitle: "Contemporary pieces designed to make every moment feel effortlessly yours.",
    cta1: { text: "Shop New Arrivals", link: "/new-arrivals" },
    cta2: { text: "Discover Collections", link: "/categories" }
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1515347619252-1662998a44c9?w=2000&q=90",
    title: "The Summer Edit",
    subtitle: "Breezy fabrics, modern cuts, and effortless styling for the warmer days.",
    cta1: { text: "Explore the Edit", link: "/categories" },
    cta2: { text: "Shop Dresses", link: "/shop?category=Dresses" }
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=2000&q=90",
    title: "Timeless Essentials",
    subtitle: "Build your perfect wardrobe with our premium signature pieces.",
    cta1: { text: "Shop Best Sellers", link: "/best-sellers" },
    cta2: null
  }
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))

  return (
    <section className="relative h-[100dvh] min-h-[600px] w-full overflow-hidden group">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            fill
            priority={currentSlide === 0}
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-6 tracking-wide drop-shadow-md">
              {slides[currentSlide].title}
            </h1>
            <p className="text-sm md:text-base mb-10 max-w-lg font-light tracking-wide opacity-90 drop-shadow-sm">
              {slides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {slides[currentSlide].cta1 && (
                <Link
                  href={slides[currentSlide].cta1.link}
                  className="bg-white text-black px-8 py-3 text-sm font-medium tracking-widest uppercase hover:bg-white/90 transition-colors"
                >
                  {slides[currentSlide].cta1.text}
                </Link>
              )}
              {slides[currentSlide].cta2 && (
                <Link
                  href={slides[currentSlide].cta2.link}
                  className="bg-transparent border border-white text-white px-8 py-3 text-sm font-medium tracking-widest uppercase hover:bg-white hover:text-black transition-colors"
                >
                  {slides[currentSlide].cta2.text}
                </Link>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full border border-white/30 text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:text-black"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full border border-white/30 text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:text-black"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentSlide === idx ? "bg-white w-8" : "bg-white/50 hover:bg-white/80"}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
