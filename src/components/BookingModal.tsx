/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, Calendar, CheckCircle2, Car, Bike, ShieldCheck, Mail, Phone, User, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PACKAGES, SERVICES } from '../data';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPackageId?: string;
  initialServiceId?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  initialPackageId = '',
  initialServiceId = '',
}: BookingModalProps) {
  const [vehicleType, setVehicleType] = useState<'car' | 'bike'>('car');
  const [selectedService, setSelectedService] = useState(initialServiceId || 'exterior');
  const [selectedPackage, setSelectedPackage] = useState(initialPackageId || 'silver');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !email || !date) {
      alert('Please fill out all required fields.');
      return;
    }
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const resetForm = () => {
    setName('');
    setPhone('');
    setEmail('');
    setDate('');
    setMessage('');
    setIsSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal content */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="relative z-10 w-full max-w-2xl overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 text-white shadow-2xl"
          id="booking-modal-container"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-neutral-900 px-6 py-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-neutral-400" />
              <h3 className="text-xl font-bold tracking-wider uppercase text-white font-mono">
                Book a Premium Detail
              </h3>
            </div>
            <button
              onClick={onClose}
              className="text-neutral-400 hover:text-white transition-colors duration-200"
              aria-label="Close modal"
              id="close-booking-modal-btn"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="p-6 max-h-[80vh] overflow-y-auto">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6" id="booking-form">
                {/* Vehicle Selector */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2 font-mono">
                    Vehicle Type
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setVehicleType('car')}
                      className={`flex items-center justify-center gap-3 rounded-lg border py-3 px-4 text-sm font-medium transition-all duration-200 ${
                        vehicleType === 'car'
                          ? 'border-white bg-white text-black'
                          : 'border-neutral-800 bg-neutral-900/50 text-neutral-400 hover:border-neutral-700'
                      }`}
                      id="vehicle-car-btn"
                    >
                      <Car className="h-5 w-5" />
                      Car Detailing
                    </button>
                    <button
                      type="button"
                      onClick={() => setVehicleType('bike')}
                      className={`flex items-center justify-center gap-3 rounded-lg border py-3 px-4 text-sm font-medium transition-all duration-200 ${
                        vehicleType === 'bike'
                          ? 'border-white bg-white text-black'
                          : 'border-neutral-800 bg-neutral-900/50 text-neutral-400 hover:border-neutral-700'
                      }`}
                      id="vehicle-bike-btn"
                    >
                      <Bike className="h-5 w-5" />
                      Bike Spa
                    </button>
                  </div>
                </div>

                {/* Service type & package selectors */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2 font-mono">
                      Service Category
                    </label>
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-3 text-sm text-white focus:border-white focus:outline-none focus:ring-1 focus:ring-white transition-colors duration-200"
                      id="service-select"
                    >
                      {SERVICES.map((srv) => (
                        <option key={srv.id} value={srv.id}>
                          {srv.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2 font-mono">
                      Detailing Package
                    </label>
                    <select
                      value={selectedPackage}
                      onChange={(e) => setSelectedPackage(e.target.value)}
                      className="w-full rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-3 text-sm text-white focus:border-white focus:outline-none focus:ring-1 focus:ring-white transition-colors duration-200"
                      id="package-select"
                    >
                      <option value="">Custom Detailing Needs</option>
                      {PACKAGES.map((pkg) => (
                        <option key={pkg.id} value={pkg.id}>
                          {pkg.name} {pkg.subtitle} ({pkg.price})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="border-t border-neutral-900 my-4" />

                {/* Personal Information */}
                <div className="space-y-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 font-mono">
                    Contact & Schedule
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-500">
                        <User className="h-4 w-4" />
                      </span>
                      <input
                        type="text"
                        required
                        placeholder="Full Name *"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-lg border border-neutral-800 bg-neutral-900 pl-10 pr-4 py-3 text-sm text-white placeholder-neutral-500 focus:border-white focus:outline-none focus:ring-1 focus:ring-white transition-colors duration-200"
                        id="form-name-input"
                      />
                    </div>

                    {/* Phone */}
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-500">
                        <Phone className="h-4 w-4" />
                      </span>
                      <input
                        type="tel"
                        required
                        placeholder="Phone Number *"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full rounded-lg border border-neutral-800 bg-neutral-900 pl-10 pr-4 py-3 text-sm text-white placeholder-neutral-500 focus:border-white focus:outline-none focus:ring-1 focus:ring-white transition-colors duration-200"
                        id="form-phone-input"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Email */}
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-500">
                        <Mail className="h-4 w-4" />
                      </span>
                      <input
                        type="email"
                        required
                        placeholder="Email Address *"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-lg border border-neutral-800 bg-neutral-900 pl-10 pr-4 py-3 text-sm text-white placeholder-neutral-500 focus:border-white focus:outline-none focus:ring-1 focus:ring-white transition-colors duration-200"
                        id="form-email-input"
                      />
                    </div>

                    {/* Date */}
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-500">
                        <Calendar className="h-4 w-4" />
                      </span>
                      <input
                        type="date"
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full rounded-lg border border-neutral-800 bg-neutral-900 pl-10 pr-4 py-3 text-sm text-white placeholder-neutral-500 focus:border-white focus:outline-none focus:ring-1 focus:ring-white transition-colors duration-200"
                        id="form-date-input"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <textarea
                      rows={3}
                      placeholder="Special requirements or vehicle details (e.g., make, model, paint condition)..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:border-white focus:outline-none focus:ring-1 focus:ring-white transition-colors duration-200 resize-none"
                      id="form-message-input"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 rounded-lg bg-white py-3.5 px-4 text-sm font-semibold text-black transition-transform duration-150 active:scale-[0.98] hover:bg-neutral-200 disabled:opacity-50 cursor-pointer"
                  id="booking-submit-btn"
                >
                  {isSubmitting ? 'Processing Details...' : 'Request Booking Appointment'}
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center py-12 text-center"
                id="booking-success-message"
              >
                <div className="mb-6 rounded-full bg-emerald-500/10 p-4 text-emerald-500">
                  <CheckCircle2 className="h-16 w-16" />
                </div>
                <h4 className="text-2xl font-bold tracking-wide uppercase text-white font-mono mb-2">
                  Booking Request Sent!
                </h4>
                <p className="max-w-md text-sm text-neutral-400 mb-8 leading-relaxed">
                  Thank you, <strong className="text-white">{name}</strong>. Our detailing specialist will review your{' '}
                  <span className="text-white font-semibold uppercase">{vehicleType}</span> {selectedPackage ? `${selectedPackage} Package` : 'custom'} booking for{' '}
                  <strong className="text-white">{date}</strong> and call/text you back on{' '}
                  <strong className="text-white">{phone}</strong> within 2 hours.
                </p>
                <button
                  onClick={resetForm}
                  className="rounded-lg border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 hover:border-neutral-700 px-6 py-2.5 text-sm font-medium text-white transition-colors duration-200"
                  id="booking-success-close-btn"
                >
                  Done
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
