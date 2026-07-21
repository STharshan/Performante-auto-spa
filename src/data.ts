/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, DetailPackage, Testimonial, GalleryItem } from './types';

// Image paths matching generated assets
export const HERO_IMAGE = '/src/assets/images/hero_porsche_black_1784657182672.jpg';
export const EXTERIOR_IMAGE = '/src/assets/images/exterior_detailing_1784657199028.jpg';
export const INTERIOR_IMAGE = '/src/assets/images/interior_detailing_1784657213638.jpg';
export const CERAMIC_IMAGE = '/src/assets/images/ceramic_coating_1784657229030.jpg';
export const BIKE_IMAGE = '/src/assets/images/bike_detailing_1784657245014.jpg';
export const ALLOY_IMAGE = '/src/assets/images/alloy_wheel_1784657263278.jpg';

// Reusing generated images for the gallery to maintain maximum quality and styling consistency
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Porsche Front Headlight detailing',
    category: 'Paint Protection',
    image: HERO_IMAGE
  },
  {
    id: 'g2',
    title: 'Immaculate leather detailing',
    category: 'Interior Detailing',
    image: INTERIOR_IMAGE
  },
  {
    id: 'g3',
    title: 'Glossy multi-spoke wheel & brake caliper',
    category: 'Wheel Detailing',
    image: ALLOY_IMAGE
  },
  {
    id: 'g4',
    title: 'Ceramic coated superbike',
    category: 'Bike Spa',
    image: BIKE_IMAGE
  }
];

export const SERVICES: Service[] = [
  {
    id: 'exterior',
    title: 'EXTERIOR DETAILING',
    description: 'Deep clean, decontamination and protection to enhance shine and durability.',
    image: EXTERIOR_IMAGE,
    iconName: 'Sparkles'
  },
  {
    id: 'interior',
    title: 'INTERIOR DETAILING',
    description: 'Thorough cleaning and conditioning for a fresh, pristine cabin.',
    image: INTERIOR_IMAGE,
    iconName: 'Shield'
  },
  {
    id: 'ceramic',
    title: 'CERAMIC COATING',
    description: 'Long-lasting protection with hydrophobic technology.',
    image: CERAMIC_IMAGE,
    iconName: 'Droplet'
  },
  {
    id: 'bike',
    title: 'BIKE SPA DETAILING',
    description: 'Specialist care for bikes, restoring and protecting every detail.',
    image: BIKE_IMAGE,
    iconName: 'Bike'
  }
];

export const PACKAGES: DetailPackage[] = [
  {
    id: 'bronze',
    name: 'BRONZE',
    subtitle: 'REFRESH',
    price: 'FROM £60',
    features: [
      'Exterior Wash & Dry',
      'Wheel Clean',
      'Interior Vacuum',
      'Dashboard Wipe Down'
    ]
  },
  {
    id: 'silver',
    name: 'SILVER',
    subtitle: 'TRANSFORM',
    price: 'FROM £100',
    features: [
      'Exterior Hand Wash',
      'Interior Deep Clean',
      'Paint Decontamination',
      'Protective Wax'
    ],
    isPopular: true
  },
  {
    id: 'gold',
    name: 'GOLD',
    subtitle: 'ULTIMATE',
    price: 'FROM £130',
    features: [
      'Full Exterior Detail',
      'Full Interior Detail',
      'Paint Enhancement',
      'Premium Ceramic Sealant'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    stars: 5,
    text: '"My car has never looked better. The attention to detail is second to none. Highly recommend!"',
    author: 'Michael, Newcastle'
  },
  {
    id: 't2',
    stars: 5,
    text: '"Incredible service and such friendly staff. My bike came back spotless!"',
    author: 'Liam, Gateshead'
  },
  {
    id: 't3',
    stars: 5,
    text: '"Professional, reliable and the results speak for themselves."',
    author: 'Sarah, Tyne & Wear'
  }
];
