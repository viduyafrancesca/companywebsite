import React from 'react';
import { Button } from "@/components/ui/button";
import { Coffee } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
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
            <a href="#" className="text-gray-600 hover:text-amber-600">Home</a>
            <a href="#menu" className="text-gray-600 hover:text-amber-600">Menu</a>
            <a href="#about" className="text-gray-600 hover:text-amber-600">About</a>
            <a href="#contact" className="text-gray-600 hover:text-amber-600">Contact</a>
            <Button className="text-gray-600 bg-[#ffd159] hover:bg-[#ffbd59]">Order Now</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" className="text-gray-600">
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
                  d="M4 6h16M4 12h16m-16 6h16"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;