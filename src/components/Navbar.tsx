/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Sparkles, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onBookClick: () => void;
}

export default function Navbar({ onBookClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'HOME', href: '#home' },
    {
      name: 'SERVICES',
      href: '#services',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Exterior Detailing', href: '#services' },
        { name: 'Interior Detailing', href: '#services' },
        { name: 'Ceramic Coating', href: '#services' },
        { name: 'Bike Spa Detailing', href: '#services' },
      ],
    },
    { name: 'PACKAGES', href: '#packages' },
    { name: 'GALLERY', href: '#gallery' },
    { name: 'ABOUT US', href: '#footer' },
    { name: 'CONTACT', href: '#footer' },
  ];

  const handleScrollToSection = (href: string) => {
    setIsOpen(false);
    setShowServicesDropdown(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/95 border-b border-neutral-900 py-3 shadow-lg backdrop-blur-md'
            : 'bg-gradient-to-b from-black/80 to-transparent py-5'
        }`}
        id="app-header"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection('#home');
              }}
              className="flex items-center gap-3 group"
              id="header-logo"
            >
              <div className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-700 bg-neutral-950 text-white font-mono font-black text-xl transition-all duration-300 group-hover:border-white">
                P
                <div className="absolute inset-0 rounded-lg border border-white/10 scale-95 transition-transform duration-300 group-hover:scale-100" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-[0.2em] leading-none text-white font-mono">
                  PERFORMANTE
                </span>
                <span className="text-[10px] font-semibold tracking-[0.4em] text-neutral-400 mt-1 uppercase">
                  AUTO SPA
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8" id="desktop-nav">
              {menuItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setShowServicesDropdown(true)}
                  onMouseLeave={() => item.hasDropdown && setShowServicesDropdown(false)}
                >
                  <button
                    onClick={() => handleScrollToSection(item.href)}
                    className="flex items-center gap-1 text-xs font-semibold tracking-widest text-neutral-300 hover:text-white transition-colors duration-200 cursor-pointer py-2"
                    id={`nav-link-${item.name.toLowerCase()}`}
                  >
                    {item.name}
                    {item.hasDropdown && <ChevronDown className="h-3 w-3 text-neutral-500" />}
                  </button>

                  {/* Dropdown menu */}
                  {item.hasDropdown && (
                    <AnimatePresence>
                      {showServicesDropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-0 mt-1 w-52 rounded-lg border border-neutral-800 bg-neutral-950 p-2 shadow-2xl"
                          id="nav-services-dropdown"
                        >
                          {item.dropdownItems?.map((subItem) => (
                            <button
                              key={subItem.name}
                              onClick={() => handleScrollToSection(subItem.href)}
                              className="w-full text-left rounded px-3 py-2 text-xs font-medium text-neutral-400 hover:text-white hover:bg-neutral-900 transition-colors duration-150"
                            >
                              {subItem.name}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={onBookClick}
                className="group flex items-center gap-2 rounded border border-neutral-700 bg-transparent hover:bg-white hover:text-black hover:border-white px-5 py-2 text-xs font-semibold tracking-widest text-white transition-all duration-300 uppercase cursor-pointer"
                id="header-book-btn"
              >
                Book a Detail
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-neutral-400 hover:text-white transition-colors duration-200 p-2"
                aria-label="Toggle Menu"
                id="mobile-menu-toggle-btn"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/90 backdrop-blur-md lg:hidden"
            />

            {/* Sidebar content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', ease: 'easeOut', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-neutral-950 p-6 shadow-2xl border-l border-neutral-900 lg:hidden flex flex-col justify-between"
              id="mobile-drawer-container"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-sm font-black tracking-widest text-white font-mono uppercase">
                    Performante
                  </span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-neutral-400 hover:text-white"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <nav className="flex flex-col gap-5">
                  {menuItems.map((item) => (
                    <div key={item.name} className="flex flex-col">
                      <button
                        onClick={() => handleScrollToSection(item.href)}
                        className="text-left text-sm font-bold tracking-widest text-neutral-300 hover:text-white transition-colors duration-200 py-2 border-b border-neutral-900/40"
                      >
                        {item.name}
                      </button>
                      {item.hasDropdown && (
                        <div className="pl-4 mt-1 flex flex-col gap-2">
                          {item.dropdownItems?.map((subItem) => (
                            <button
                              key={subItem.name}
                              onClick={() => handleScrollToSection(subItem.href)}
                              className="text-left py-1.5 text-xs text-neutral-500 hover:text-white"
                            >
                              {subItem.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </div>

              <div className="pt-6 border-t border-neutral-900">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onBookClick();
                  }}
                  className="w-full flex items-center justify-center gap-2 rounded bg-white py-3.5 text-xs font-bold tracking-widest text-black transition-colors duration-200 uppercase"
                  id="mobile-book-btn"
                >
                  Book a Detail
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
