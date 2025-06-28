"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "Gallery", href: "/gallery" },
    { name: "Our Process", href: "/process" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="relative w-full bg-black shadow-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-30 lg:h-15">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 flex-grow justify-center">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-gray-300 font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}

          {/* Mobile menu button */}
          <div className="md:hidden relative">
            <button
              className="rounded-lg p-2 text-white hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-black"
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {!isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>

            {/* Mobile menu dropdown */}
            {isMounted && isOpen && (
              <>
                {/* Backdrop */}
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={closeMenu}></div>

                {/* Menu */}
                <div className="fixed top-16 right-4 w-72 max-w-[calc(100vw-2rem)] rounded-xl shadow-2xl bg-white border border-gray-200 z-50 transform transition-all duration-200">
                  <div className="py-3">
                    {/* Mobile Menu Header */}
                    <div className="px-6 py-4 border-b border-gray-200">
                      <div className="flex items-center gap-3">
                        <Image
                          src="/made-in-seconds.png"
                          alt="Made in Seconds Logo"
                          width={32}
                          height={32}
                          className="w-8 h-8"
                        />
                        <span className="text-xl font-bold text-gray-900">Made in Seconds</span>
                      </div>
                    </div>

                    {/* Navigation Items */}
                    {navigationItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={closeMenu}
                        className="block px-6 py-4 text-lg font-medium text-gray-900 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    ))}

                    {/* Mobile CTA */}
                    <div className="border-t border-gray-200 mt-2 pt-4 px-6 pb-4">
                      <Link
                        href="/contact"
                        onClick={closeMenu}
                        className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
