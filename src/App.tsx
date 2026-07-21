/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Component imports
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContactBanner from './components/ContactBanner';
import Services from './components/Services';
import Packages from './components/Packages';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preSelectedPackage, setPreSelectedPackage] = useState('');
  const [preSelectedService, setPreSelectedService] = useState('');

  // Initialize Animate On Scroll (AOS)
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
      offset: 120,
    });
  }, []);

  const handleOpenBooking = (packageId = '', serviceId = '') => {
    setPreSelectedPackage(packageId);
    setPreSelectedService(serviceId);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setPreSelectedPackage('');
    setPreSelectedService('');
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black antialiased overflow-x-hidden">
      {/* 1. Header & Navigation */}
      <Navbar onBookClick={() => handleOpenBooking()} />

      {/* 2. Main Hero Section */}
      <Hero onBookClick={() => handleOpenBooking()} />

      {/* 3. High-level Contact and Location Coordinates */}
      <ContactBanner />

      {/* 4. Luxury Services Grid */}
      <Services onBookClick={(serviceId) => handleOpenBooking('', serviceId)} />

      {/* 5. Custom Detailing Packages */}
      <Packages onBookClick={(packageId) => handleOpenBooking(packageId, '')} />

      {/* 6. Why Choose Us Value Proposition */}
      <Features />

      {/* 7. Gallery Portfolio */}
      <Gallery />

      {/* 8. Verified Testimonials */}
      <Testimonials />

      {/* 9. Contact CTA and Directory Footer */}
      <Footer onBookClick={() => handleOpenBooking()} />

      {/* 10. Floating / Interactive Booking Reservation Engine */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialPackageId={preSelectedPackage}
        initialServiceId={preSelectedService}
      />
    </div>
  );
}
