/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { HERO_IMAGE } from '../data';

interface HeroProps {
  onBookClick: () => void;
}

export default function Hero({ onBookClick }: HeroProps) {
  const handleScrollToPackages = () => {
    const el = document.querySelector('#packages');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-start overflow-hidden bg-black text-white">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Premium black Porsche in detailing studio"
          className="h-full w-full object-cover object-right lg:object-center transform scale-105"
          referrerPolicy="no-referrer"
          id="hero-bg-image"
        />
        {/* Gradients for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent md:block hidden" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30 md:hidden block" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-32 md:py-48">
        <div className="max-w-xl md:max-w-2xl text-left">
          {/* Tagline */}
          <div
            data-aos="fade-down"
            data-aos-delay="100"
            className="inline-flex items-center gap-2 rounded border border-neutral-800 bg-neutral-950/80 px-3.5 py-1 text-[10px] font-bold tracking-[0.3em] uppercase text-neutral-400 mb-6"
            id="hero-tagline-badge"
          >
            <Sparkles className="h-3 w-3 text-white" />
            CAR & BIKE DETAILING SPA
          </div>

          {/* Heading */}
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] text-white uppercase font-sans mb-6"
            id="hero-main-title"
          >
            ENHANCED <br className="hidden sm:inline" />
            BEYOND <br />
            <span className="text-neutral-400 font-mono italic">EXPECTATION.</span>
          </h1>

          {/* Description */}
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-lg mb-10 font-sans"
            id="hero-subtext"
          >
            Premium detailing and auto spa treatments that restore, protect, and elevate your vehicle to absolute showroom perfection.
          </p>

          {/* Call to Actions */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-col sm:flex-row gap-4 sm:items-center"
            id="hero-cta-buttons"
          >
            <button
              onClick={onBookClick}
              className="group flex items-center justify-center gap-3.5 rounded bg-white hover:bg-neutral-200 text-black px-8 py-4 text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-xl cursor-pointer"
              id="hero-book-now-btn"
            >
              Book a Detail
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              onClick={handleScrollToPackages}
              className="group flex items-center justify-center gap-3.5 rounded border border-neutral-700 bg-black/35 hover:bg-neutral-900 hover:border-white text-white px-8 py-4 text-xs font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer"
              id="hero-packages-btn"
            >
              Our Packages
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute right-12 bottom-12 z-10 hidden xl:flex flex-col items-center gap-4">
        <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-neutral-500 origin-center rotate-90 mb-12">
          SCROLL DOWN
        </span>
        <div className="h-24 w-[1px] bg-gradient-to-b from-neutral-500 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
