'use client';

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import Image from 'next/image';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Add transparent effect when scrolled more than 50px
      } else {
        setIsScrolled(false); // Reset the transparency when scrolled back to top
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full transition-all duration-300 z-50 ${isScrolled ? 'bg-[#ffbd59] bg-opacity-50' : 'bg-[#ffbd59]'}`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Left Side - Home, Menu */}
          <div className="flex space-x-8 text-lg font-semibold text-gray-900">
            <a href="#" className="hover:text-amber-600">Home</a>
            <a href="#menu" className="hover:text-amber-600">Menu</a>
          </div>

          {/* Centered Logo */}
          <div className="flex justify-center items-center w-full relative">
            <Image
              src="/images/beantalks-logo-transparent.png"
              alt="Beantalks Coffee Logo"
              width={100}
              height={100}
              className="absolute left-1/2 transform -translate-x-1/2 translate-y-1/4"
            />
          </div>

          {/* Right Side - About, Contact */}
          <div className="flex space-x-8 text-lg font-semibold text-gray-900">
            <a href="#about" className="hover:text-amber-600">About</a>
            <a href="#contact" className="hover:text-amber-600">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden absolute right-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
              className="text-gray-900 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-16 6h16"}
                />
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#ffac3a] py-4 space-y-4 text-center">
            <a href="#" className="block text-gray-900 hover:text-amber-600 text-lg font-semibold">Home</a>
            <a href="#menu" className="block text-gray-900 hover:text-amber-600 text-lg font-semibold">Menu</a>
            <a href="#about" className="block text-gray-900 hover:text-amber-600 text-lg font-semibold">About</a>
            <a href="#contact" className="block text-gray-900 hover:text-amber-600 text-lg font-semibold">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
