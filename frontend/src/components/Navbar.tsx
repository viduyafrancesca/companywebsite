'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-[#ffac3a] backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2">
            <Image
              src="/images/beantalks-logo-transparent.png"
              alt="Beantalks Coffee Logo"
              width={48}
              height={48}
              className="object-contain"
            />
            <span className="text-xl font-bold text-gray-900">Beantalks Coffee</span>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-amber-600">
              Home
            </Link>
            {/* <Link href="/#menu" className="text-gray-600 hover:text-amber-600">
              Menu
            </Link> */}
            <Link href="/#about" className="text-gray-600 hover:text-amber-600">
              About
            </Link>
            <Link href="/#contact" className="text-gray-600 hover:text-amber-600">
              Contact
            </Link>
            <Link href="full-menu">
              <button className="px-6 py-3 rounded-lg bg-[#ffd159] text-gray-700 font-semibold hover:bg-[#ffbd59]">
                Menu & Services
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-600"
              onClick={toggleMobileMenu}
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
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#ffac3a] py-4 space-y-4 text-center">
          <Link
            href="/"
            className="block text-gray-900 hover:text-amber-600 text-lg font-semibold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/#menu"
            className="block text-gray-900 hover:text-amber-600 text-lg font-semibold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Menu
          </Link>
          <Link
            href="/#about"
            className="block text-gray-900 hover:text-amber-600 text-lg font-semibold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/#contact"
            className="block text-gray-900 hover:text-amber-600 text-lg font-semibold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
