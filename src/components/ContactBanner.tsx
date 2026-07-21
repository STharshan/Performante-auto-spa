/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Phone, MapPin, Clock, Facebook, Instagram } from 'lucide-react';

export default function ContactBanner() {
  return (
    <section className="bg-black border-y border-neutral-900 py-8 text-neutral-300" id="contact-banner">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          {/* Phone Detail */}
          <div className="flex items-start gap-4" id="banner-phone">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-neutral-800 bg-neutral-950 text-white">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <a href="tel:07923448167" className="text-sm font-bold tracking-wider text-white hover:text-neutral-300 transition-colors duration-200 block font-mono">
                07923 448167
              </a>
              <span className="text-xs text-neutral-500 mt-1 block">Call or text us</span>
            </div>
          </div>

          {/* Address Detail */}
          <div className="flex items-start gap-4" id="banner-address">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-neutral-800 bg-neutral-950 text-white">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <span className="text-xs font-bold tracking-wider text-white block font-mono uppercase">
                CLOCKMILL ROAD
              </span>
              <span className="text-xs text-neutral-500 mt-1 block leading-tight">
                DUNSTON, TYNE & WEAR, NE8 2QX
              </span>
            </div>
          </div>

          {/* Availability Detail */}
          <div className="flex items-start gap-4" id="banner-availability">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-neutral-800 bg-neutral-950 text-white">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <span className="text-sm font-bold tracking-wider text-white block uppercase font-mono">
                FLEXIBLE APPOINTMENTS
              </span>
              <span className="text-xs text-neutral-500 mt-1 block">7 days a week</span>
            </div>
          </div>

          {/* Socials & Icons */}
          <div className="flex items-center justify-start lg:justify-end gap-3" id="banner-socials">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-800 bg-neutral-950 text-neutral-400 hover:text-white hover:border-white transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-800 bg-neutral-950 text-neutral-400 hover:text-white hover:border-white transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
