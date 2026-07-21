/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Phone, ArrowRight, Facebook, Instagram, Mail, MapPin, Clock } from 'lucide-react';
import { HERO_IMAGE } from '../data';

interface FooterProps {
  onBookClick: () => void;
}

export default function Footer({ onBookClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleScrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-black text-white" id="footer">
      {/* 1. CTA Banner Section */}
      <div className="relative py-24 px-4 sm:px-6 lg:px-8 border-b border-neutral-900 overflow-hidden bg-neutral-950">
        {/* Background Glowing Image */}
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src={HERO_IMAGE}
            alt="Car headlight background"
            className="w-full h-full object-cover object-bottom filter blur-sm scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-8 text-left">
          <div data-aos="fade-right">
            <h2 className="text-2xl sm:text-3xl font-black tracking-wider uppercase mb-3 font-sans" id="cta-heading">
              READY TO GIVE YOUR VEHICLE THE ULTIMATE CARE?
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm max-w-xl">
              Book your detail today and experience the absolute Performante Auto Spa difference.
            </p>
          </div>

          <div
            data-aos="fade-left"
            className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center w-full lg:w-auto shrink-0"
            id="cta-buttons"
          >
            <a
              href="tel:07923448167"
              className="flex items-center justify-center gap-3 rounded border border-neutral-700 bg-black/45 hover:bg-neutral-900 hover:border-white px-6 py-4 text-xs font-bold tracking-widest uppercase transition-colors duration-200"
              id="cta-phone-btn"
            >
              <Phone className="h-4 w-4" />
              07923 448167
            </a>

            <button
              onClick={onBookClick}
              className="group flex items-center justify-center gap-3.5 rounded bg-white hover:bg-neutral-200 text-black px-8 py-4 text-xs font-bold tracking-widest uppercase transition-colors duration-200 shadow-xl cursor-pointer"
              id="cta-book-btn"
            >
              Book a Detail
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* 2. Directory Footer Links */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Logo & Info */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-950 font-mono font-black text-white text-lg">
                P
              </div>
              <div className="flex flex-col">
                <span className="text-base font-black tracking-widest text-white font-mono">
                  PERFORMANTE
                </span>
                <span className="text-[9px] font-semibold tracking-widest text-neutral-500 uppercase">
                  AUTO SPA
                </span>
              </div>
            </div>

            <p className="text-neutral-500 text-xs leading-relaxed max-w-xs">
              Premium detailing and auto spa treatments for cars and bikes. Designed to restore, protect, and elevate your vehicle to absolute showroom perfection.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-800 bg-neutral-950 text-neutral-400 hover:text-white hover:border-white transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-800 bg-neutral-950 text-neutral-400 hover:text-white hover:border-white transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xs font-black tracking-widest uppercase text-neutral-300 mb-6 font-mono">
              QUICK LINKS
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Services', href: '#services' },
                { name: 'Packages', href: '#packages' },
                { name: 'Gallery', href: '#gallery' },
                { name: 'About Us', href: '#why-choose-us' },
                { name: 'Contact', href: '#footer' },
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleScrollToSection(link.href)}
                    className="text-neutral-500 hover:text-white text-xs transition-colors duration-200 cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services Directory */}
          <div>
            <h3 className="text-xs font-black tracking-widest uppercase text-neutral-300 mb-6 font-mono">
              SERVICES
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Exterior Detailing', href: '#services' },
                { name: 'Interior Detailing', href: '#services' },
                { name: 'Ceramic Coating', href: '#services' },
                { name: 'Bike Spa Detailing', href: '#services' },
                { name: 'Maintenance Wash', href: '#services' },
              ].map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleScrollToSection(item.href)}
                    className="text-neutral-500 hover:text-white text-xs transition-colors duration-200 text-left"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Opening hours */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-xs font-black tracking-widest uppercase text-neutral-300 mb-6 font-mono">
                CONTACT
              </h3>
              <ul className="space-y-3 text-xs text-neutral-500">
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-neutral-400 shrink-0" />
                  <a href="tel:07923448167" className="hover:text-white transition-colors font-mono">
                    07923 448167
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-neutral-400 shrink-0 mt-0.5" />
                  <span>Clockmill Road, Dunston, Tyne & Wear, NE8 2QX</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-neutral-400 shrink-0" />
                  <a href="mailto:info@performanteautospa.co.uk" className="hover:text-white transition-colors">
                    info@performanteautospa.co.uk
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[10px] font-black tracking-widest uppercase text-neutral-300 mb-2 font-mono">
                OPENING HOURS
              </h3>
              <div className="flex items-center gap-2 text-xs text-neutral-500">
                <Clock className="h-4 w-4 text-neutral-400 shrink-0" />
                <span>Monday - Sunday: Open by appointment</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Copyright / Terms */}
        <div className="mt-16 pt-8 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <span id="copyright-text">
            © {currentYear} Performante Auto Spa. All rights reserved.
          </span>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span className="text-neutral-800">|</span>
            <a href="#terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
