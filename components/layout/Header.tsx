"use client";

import React, { useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "회사소개", href: "/about" },
    { name: "사업분야", href: "/business" },
    { name: "지속가능경영", href: "/sustainability" },
    { name: "IR", href: "/ir" },
    { name: "홍보센터", href: "/media" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <Container>
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <img 
                  src="/logo.png" 
                  alt="JINDUK" 
                  className="h-12 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                className="p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <nav className="flex flex-col space-y-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-primary transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </Container>
      </header>
    </>
  );
}
