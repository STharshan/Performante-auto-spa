/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowRight, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';
import { motion, AnimatePresence } from 'motion/react';

export default function Gallery() {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => (prev! + 1) % GALLERY_ITEMS.length);
    }
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => (prev! - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    }
  };

  return (
    <section id="gallery" className="bg-black text-white py-24 border-t border-neutral-900 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div data-aos="fade-right">
            <span className="text-xs font-bold tracking-[0.3em] text-neutral-500 uppercase block mb-3 font-mono">
              OUR WORK
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-none uppercase text-white font-sans">
              SEE THE DIFFERENCE.
            </h2>
          </div>

          <div data-aos="fade-left">
            <button
              onClick={() => setActiveLightboxIndex(0)}
              className="group flex items-center gap-3.5 rounded border border-neutral-800 bg-neutral-950/80 hover:bg-neutral-900 hover:border-neutral-500 px-6 py-3.5 text-xs font-semibold tracking-widest uppercase text-white transition-colors duration-200 cursor-pointer"
              id="gallery-view-btn"
            >
              View Gallery
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onClick={() => setActiveLightboxIndex(index)}
              className="group relative h-72 rounded-xl overflow-hidden cursor-pointer border border-neutral-900 bg-neutral-950 shadow-lg"
              id={`gallery-item-${item.id}`}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase font-mono mb-2">
                  {item.category}
                </span>
                <h3 className="text-sm font-bold tracking-wide uppercase text-white font-sans flex items-center justify-between">
                  {item.title}
                  <Maximize2 className="h-4 w-4 text-neutral-400" />
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {activeLightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-8">
            {/* Backdrop Close Click */}
            <div className="absolute inset-0" onClick={() => setActiveLightboxIndex(null)} />

            {/* Close Button */}
            <button
              onClick={() => setActiveLightboxIndex(null)}
              className="absolute top-6 right-6 z-10 text-neutral-400 hover:text-white transition-colors p-2"
              id="close-lightbox-btn"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-8 z-10 rounded-full border border-neutral-800 bg-neutral-950/80 p-3 text-white hover:border-white transition-colors duration-200"
              id="lightbox-prev-btn"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Image Container */}
            <motion.div
              key={activeLightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-5xl max-h-[80vh] z-10 flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={GALLERY_ITEMS[activeLightboxIndex].image}
                alt={GALLERY_ITEMS[activeLightboxIndex].title}
                className="max-w-full max-h-[70vh] rounded-lg object-contain shadow-2xl border border-neutral-900"
                referrerPolicy="no-referrer"
              />
              <div className="text-center mt-6">
                <span className="text-[10px] font-semibold tracking-widest text-neutral-500 uppercase font-mono block mb-2">
                  {GALLERY_ITEMS[activeLightboxIndex].category}
                </span>
                <h4 className="text-sm font-bold tracking-wide uppercase text-white font-sans">
                  {GALLERY_ITEMS[activeLightboxIndex].title}
                </h4>
              </div>
            </motion.div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 md:right-8 z-10 rounded-full border border-neutral-800 bg-neutral-950/80 p-3 text-white hover:border-white transition-colors duration-200"
              id="lightbox-next-btn"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
