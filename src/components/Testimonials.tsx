/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../data';
import { motion, AnimatePresence } from 'motion/react';

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="bg-neutral-950 text-white py-24 border-t border-neutral-900 scroll-mt-16" id="testimonials">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title / Section Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <span className="text-xs font-bold tracking-[0.3em] text-neutral-500 uppercase block mb-3 font-mono">
            TESTIMONIALS
          </span>
          <h2 className="text-2xl sm:text-3xl font-black tracking-wider uppercase text-white font-sans">
            TRUSTED BY ENTHUSIASTS
          </h2>
          <div className="h-[2px] w-12 bg-white/10 mx-auto mt-6" />
        </div>

        {/* Desktop Layout - 3 Cards Side-by-Side */}
        <div className="hidden md:grid grid-cols-3 gap-6 mb-12">
          {TESTIMONIALS.map((item, index) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="flex flex-col justify-between rounded-xl border border-neutral-900 bg-neutral-950 p-8 shadow-lg transition-transform duration-300 hover:border-neutral-800"
              id={`testimonial-card-${item.id}`}
            >
              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 mb-6 text-white" id={`testimonial-stars-${item.id}`}>
                  {[...Array(item.stars)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-white text-white" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-neutral-300 text-sm leading-relaxed italic mb-8 font-serif">
                  {item.text}
                </p>
              </div>

              {/* Author */}
              <span className="text-xs font-bold tracking-widest uppercase text-neutral-400 font-mono">
                {item.author}
              </span>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet Layout - Single Card Carousel */}
        <div className="block md:hidden relative px-4 mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="rounded-xl border border-neutral-900 bg-neutral-950 p-8 shadow-lg text-center min-h-[220px] flex flex-col justify-between"
              id="mobile-testimonial-card"
            >
              <div>
                {/* Stars */}
                <div className="flex items-center justify-center gap-1 mb-5 text-white">
                  {[...Array(TESTIMONIALS[activeIdx].stars)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-white text-white" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed italic mb-6 font-serif">
                  {TESTIMONIALS[activeIdx].text}
                </p>
              </div>

              {/* Author */}
              <span className="text-xs font-bold tracking-widest uppercase text-neutral-400 font-mono">
                {TESTIMONIALS[activeIdx].author}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots (Universal controls) */}
        <div className="flex items-center justify-center gap-2.5" id="testimonial-dots-nav">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIdx(index)}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                activeIdx === index
                  ? 'bg-white scale-125'
                  : 'bg-neutral-800 hover:bg-neutral-600'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
