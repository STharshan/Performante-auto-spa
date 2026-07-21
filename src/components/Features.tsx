/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Gem, ShieldCheck, Droplet, CalendarCheck, Award } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Gem,
      title: 'PREMIUM RESULTS',
      desc: 'High-end finishes using industry-leading premium detailing products.',
    },
    {
      icon: ShieldCheck,
      title: 'PROFESSIONAL CARE',
      desc: 'Experienced auto detailers with an absolute passion for vehicle perfection.',
    },
    {
      icon: Droplet,
      title: 'SAFE & EFFECTIVE',
      desc: 'pH-neutral, coating-safe cleaners and advanced decontamination methods.',
    },
    {
      icon: CalendarCheck,
      title: 'FLEXIBLE BOOKING',
      desc: 'Appointments scheduled and tailored to suit your busy weekly timetable.',
    },
    {
      icon: Award,
      title: 'SATISFACTION GUARANTEED',
      desc: 'We take immense pride in every single car and bike detail we finish.',
    },
  ];

  return (
    <section className="bg-neutral-50 text-black py-20 border-y border-neutral-100" id="why-choose-us">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Title */}
        <h2
          data-aos="fade-down"
          className="text-2xl sm:text-3xl font-black tracking-wider uppercase mb-16 text-black font-sans"
          id="features-title"
        >
          WHY CHOOSE PERFORMANTE AUTO SPA?
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 items-stretch">
          {features.map((feat, index) => {
            const IconComponent = feat.icon;
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="flex flex-col items-center p-4 text-center group"
                id={`feature-item-${index}`}
              >
                {/* Icon Container */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-neutral-200 bg-white text-black transition-all duration-300 group-hover:bg-black group-hover:text-white group-hover:border-black shadow-sm">
                  <IconComponent className="h-6 w-6" />
                </div>

                {/* Feature Title */}
                <h3 className="text-xs font-black tracking-widest uppercase mb-3 font-mono text-black leading-snug">
                  {feat.title}
                </h3>

                {/* Separator on desktop */}
                <div className="h-[1px] w-8 bg-neutral-200 mb-4 transition-all duration-300 group-hover:w-12 group-hover:bg-neutral-800" />

                {/* Description */}
                <p className="text-neutral-500 text-xs leading-relaxed max-w-[200px] md:max-w-none">
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
