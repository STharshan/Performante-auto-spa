/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowRight, Sparkles, Shield, Droplet, Bike, X, Check } from 'lucide-react';
import { SERVICES } from '../data';
import { motion, AnimatePresence } from 'motion/react';

interface ServicesProps {
  onBookClick: (serviceId: string) => void;
}

// Map string icon name to Lucide components
const IconMap: Record<string, React.ComponentType<any>> = {
  Sparkles,
  Shield,
  Droplet,
  Bike,
};

export default function Services({ onBookClick }: ServicesProps) {
  const [selectedDetailService, setSelectedDetailService] = useState<string | null>(null);

  const getServiceDetails = (id: string) => {
    switch (id) {
      case 'exterior':
        return {
          bullets: [
            'Safe multi-stage hand wash and dry',
            'Full chemical decontamination (tar & iron removal)',
            'Clay bar treatment for glassy smooth finish',
            'Single-stage machine polish to enhance gloss',
            'Premium protective sealant or hybrid ceramic wax',
            'Exterior window clean, trim dressing & tire shine',
          ],
        };
      case 'interior':
        return {
          bullets: [
            'Deep extraction vacuum of seats, mats, and carpet',
            'Steam cleaning and disinfection of surfaces',
            'Leather deep clean & nourishing condition treatment',
            'Instrument panel, console & door card detail',
            'Glass cleaning inside-out for streak-free view',
            'Premium cabin deodorizing treatment',
          ],
        };
      case 'ceramic':
        return {
          bullets: [
            'Multi-stage paint correction to remove 85%+ swirls',
            'Premium multi-year 9H ceramic coating application',
            'Exceptional depth, extreme high-gloss shine',
            'Superior hydrophobic protection (water sheeting)',
            'Chemical and UV radiation paint protection',
            'Self-cleaning properties keeping car cleaner longer',
          ],
        };
      case 'bike':
        return {
          bullets: [
            'Degrease chain, engine, and drive components',
            'Ph-neutral hand foam bath & gentle agitation',
            'Safe low-pressure rinse and warm air blowout dry',
            'Polishing of paintwork, chrome, and metal bits',
            'Hydrophobic protective sealant application',
            'Leather seat trim conditioning & tire clean',
          ],
        };
      default:
        return { bullets: [] };
    }
  };

  const activeService = SERVICES.find((s) => s.id === selectedDetailService);
  const activeServiceDetails = activeService ? getServiceDetails(activeService.id) : null;

  return (
    <section id="services" className="bg-white text-black py-24 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Title block */}
          <div className="lg:col-span-4" data-aos="fade-right">
            <span className="text-xs font-bold tracking-[0.3em] text-neutral-400 uppercase block mb-3 font-mono">
              OUR SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight uppercase mb-6 text-black font-sans">
              A LUXURY SPA EXPERIENCE FOR YOUR VEHICLE.
            </h2>
            <div className="h-[2px] w-12 bg-neutral-900 mb-6" />
            <p className="text-neutral-600 text-sm leading-relaxed mb-8 max-w-md">
              From deep cleans to long-lasting protection, our expert treatments are tailored to bring out the absolute best in every car and bike.
            </p>
            <button
              onClick={() => {
                const el = document.querySelector('#packages');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group inline-flex items-center gap-3.5 rounded bg-black hover:bg-neutral-800 text-white px-6 py-3.5 text-xs font-semibold tracking-widest uppercase transition-colors duration-200 cursor-pointer"
              id="services-view-all-btn"
            >
              View All Services
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Right Services Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SERVICES.map((srv, index) => {
              const Icon = IconMap[srv.iconName] || Sparkles;
              return (
                <div
                  key={srv.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="group flex flex-col rounded-lg border border-neutral-100 bg-white overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-neutral-200"
                  id={`service-card-${srv.id}`}
                >
                  {/* Card Image */}
                  <div className="relative h-48 overflow-hidden bg-neutral-100">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 h-10 w-10 flex items-center justify-center rounded-full bg-black/85 text-white shadow-md">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="text-sm font-black tracking-wider uppercase text-black font-sans mb-3">
                        {srv.title}
                      </h3>
                      <p className="text-neutral-500 text-xs leading-relaxed mb-6">
                        {srv.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-neutral-50/50">
                      <button
                        onClick={() => setSelectedDetailService(srv.id)}
                        className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase text-neutral-800 hover:text-black hover:underline transition-all duration-200"
                        id={`service-learn-more-${srv.id}`}
                      >
                        Learn More <ArrowRight className="h-3 w-3" />
                      </button>
                      <button
                        onClick={() => onBookClick(srv.id)}
                        className="text-[10px] font-bold tracking-widest uppercase text-neutral-400 hover:text-black transition-colors duration-200"
                        id={`service-book-${srv.id}`}
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Service Details Modal */}
      <AnimatePresence>
        {selectedDetailService && activeService && activeServiceDetails && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDetailService(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative z-10 w-full max-w-xl rounded-xl border border-neutral-100 bg-white p-6 sm:p-8 text-black shadow-2xl overflow-hidden"
              id="service-modal-container"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedDetailService(null)}
                className="absolute top-4 right-4 text-neutral-400 hover:text-black transition-colors duration-200"
                id="close-service-modal-btn"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-lg bg-neutral-900 text-white">
                  {React.createElement(IconMap[activeService.iconName] || Sparkles, { className: 'h-6 w-6' })}
                </div>
                <h3 className="text-lg font-black tracking-wider uppercase text-black font-sans">
                  {activeService.title}
                </h3>
              </div>

              <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed mb-6">
                {activeService.description} Our professional service is meticulously executed to meet the highest standards of automotive craftsmanship.
              </p>

              <h4 className="text-xs font-bold tracking-widest uppercase text-neutral-400 mb-4 font-mono">
                What's Included:
              </h4>

              <ul className="space-y-3 mb-8">
                {activeServiceDetails.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-700">
                    <div className="rounded-full bg-emerald-50 p-0.5 text-emerald-600 mt-0.5">
                      <Check className="h-4 w-4 shrink-0" />
                    </div>
                    {b}
                  </li>
                ))}
              </ul>

              <div className="flex gap-4">
                <button
                  onClick={() => {
                    const serviceId = selectedDetailService;
                    setSelectedDetailService(null);
                    onBookClick(serviceId);
                  }}
                  className="flex-1 rounded bg-black hover:bg-neutral-800 text-white font-semibold text-xs tracking-widest uppercase py-3.5 text-center transition-colors duration-200"
                  id="modal-book-service-btn"
                >
                  Book Appointment
                </button>
                <button
                  onClick={() => setSelectedDetailService(null)}
                  className="flex-1 rounded border border-neutral-200 hover:bg-neutral-50 text-neutral-800 font-semibold text-xs tracking-widest uppercase py-3.5 text-center transition-colors duration-200"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
