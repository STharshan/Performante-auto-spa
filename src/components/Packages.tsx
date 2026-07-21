/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { PACKAGES } from '../data';

interface PackagesProps {
  onBookClick: (packageId: string) => void;
}

export default function Packages({ onBookClick }: PackagesProps) {
  return (
    <section id="packages" className="bg-black text-white py-24 border-t border-neutral-900 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Title block */}
          <div className="lg:col-span-4" data-aos="fade-right">
            <span className="text-xs font-bold tracking-[0.3em] text-neutral-500 uppercase block mb-3 font-mono">
              OUR PACKAGES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight uppercase mb-6 text-white font-sans">
              DETAILING PACKAGES TO SUIT EVERY NEED.
            </h2>
            <div className="h-[2px] w-12 bg-white/20 mb-6" />
            <p className="text-neutral-400 text-sm leading-relaxed mb-8 max-w-md">
              Choose the perfect professional package for your vehicle and enjoy the ultimate auto spa care.
            </p>
            <button
              onClick={() => {
                const el = document.querySelector('#gallery');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group inline-flex items-center gap-3.5 rounded border border-neutral-800 bg-neutral-950 hover:bg-neutral-900 hover:border-neutral-500 text-white px-6 py-3.5 text-xs font-semibold tracking-widest uppercase transition-colors duration-200 cursor-pointer"
              id="packages-view-gallery-btn"
            >
              View Our Work
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Right Side: Packages Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {PACKAGES.map((pkg, index) => (
              <div
                key={pkg.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className={`relative flex flex-col justify-between rounded-xl p-6 sm:p-8 transition-all duration-300 border ${
                  pkg.isPopular
                    ? 'border-white bg-neutral-900/60 shadow-2xl scale-100 lg:scale-[1.03] z-10'
                    : 'border-neutral-900 bg-neutral-950/40 hover:border-neutral-800'
                }`}
                id={`package-card-${pkg.id}`}
              >
                {/* Most Popular Badge */}
                {pkg.isPopular && (
                  <div className="absolute -top-3.5 left-6 rounded bg-white px-3 py-1 text-[9px] font-bold tracking-[0.15em] uppercase text-black font-mono shadow" id="popular-badge">
                    MOST POPULAR
                  </div>
                )}

                <div>
                  {/* Card Header */}
                  <div className="mb-8">
                    <span className="text-lg font-black tracking-wider text-neutral-400 block font-sans">
                      {pkg.name}
                    </span>
                    <span className="text-xs font-bold tracking-[0.25em] text-neutral-500 block uppercase font-mono mt-1">
                      {pkg.subtitle}
                    </span>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-4 mb-8" id={`package-features-${pkg.id}`}>
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-xs text-neutral-200">
                        <Check className="h-4 w-4 text-neutral-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer & Price */}
                <div className="pt-6 border-t border-neutral-900/40 mt-auto">
                  <div className="flex flex-col mb-6">
                    <span className="text-[10px] font-bold tracking-widest text-neutral-500 uppercase font-mono">
                      FROM
                    </span>
                    <span className="text-2xl sm:text-3xl font-black text-white font-mono mt-1">
                      {pkg.price.replace('FROM ', '')}
                    </span>
                  </div>

                  <button
                    onClick={() => onBookClick(pkg.id)}
                    className={`w-full py-3 px-4 rounded text-center text-xs font-bold tracking-widest uppercase transition-all duration-200 cursor-pointer ${
                      pkg.isPopular
                        ? 'bg-white text-black hover:bg-neutral-200'
                        : 'border border-neutral-800 text-white hover:border-neutral-500 hover:bg-neutral-900'
                    }`}
                    id={`package-select-btn-${pkg.id}`}
                  >
                    SELECT PACKAGE
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
