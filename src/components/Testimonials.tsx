"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "./ui/button";

const testimonials = [
  {
    id: 1,
    name: "Ahmed Hassan",
    role: "Homeowner, Bahria Town",
    content: "MK Construction transformed our vision into a stunning reality. Their attention to detail and commitment to quality exceeded our expectations. The team was professional, responsive, and delivered on time.",
    rating: 5,
    project: "4,500 sq ft Villa",
  },
  {
    id: 2,
    name: "Sara Khan",
    role: "Property Developer, DHA",
    content: "Working with MK Construction has been an absolute pleasure. Their expertise in luxury residential projects is unmatched in Lahore. We've completed three projects together and looking forward to more.",
    rating: 5,
    project: "Multiple Residential Units",
  },
  {
    id: 3,
    name: "Imran Malik",
    role: "Homeowner, DHA Phase 6",
    content: "The interior design team at MK Construction is incredibly talented. They created a modern, elegant space that perfectly suits our lifestyle. Highly recommend their services!",
    rating: 5,
    project: "Complete Interior Design",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-[#0B1220] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Don't just take our word for it — hear from our satisfied clients
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-12 h-12 text-[#0A84FF]/20" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FFC107] text-[#FFC107]" />
                ))}
              </div>

              {/* Content */}
              <p className="text-xl text-[#0B1220] mb-8 leading-relaxed italic">
                "{testimonials[currentIndex].content}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between border-t border-[#E6E9EE] pt-6">
                <div>
                  <div className="font-semibold text-[#0B1220] text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-[#475569] text-sm mt-1">
                    {testimonials[currentIndex].role}
                  </div>
                  <div className="text-[#0A84FF] text-sm mt-1">
                    {testimonials[currentIndex].project}
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={previous}
                    className="rounded-full hover:bg-[#F7F7F8]"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={next}
                    className="rounded-full hover:bg-[#F7F7F8]"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-white w-8"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
