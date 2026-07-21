/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  iconName: string;
}

export interface DetailPackage {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export interface Testimonial {
  id: string;
  stars: number;
  text: string;
  author: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface Booking {
  name: string;
  phone: string;
  email: string;
  vehicleType: 'car' | 'bike';
  serviceType: string;
  preferredDate: string;
  message?: string;
}
