"use client";

import React, { useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";

type MenuItem = {
  name: string;
  href: string;
  submenu?: { name: string; href: string }[];
};

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const navigation = [
    { 
      name: "회사소개", 
      href: "/company",
      submenu: [
        { name: "CEO 인사말", href: "/company/ceo" },
        { name: "경영이념", href: "/company/philosophy" },
        { name: "연혁", href: "/company/history" },
        { name: "조직도", href: "/company/organization" },
        { name: "안전보건방침", href: "/company/safety" },
        { name: "관계회사", href: "/company/partners" },
      ]
    },
    { 
      name: "사업영역", 
      href: "/business",
      submenu: [
        { name: "주요사업", href: "/business/services" },
        { name: "진행현장", href: "/business/ongoing" },
        { name: "완료현장", href: "/business/completed" },
      ]
    },
    { 
      name: "홍보센터", 
      href: "/pr",
      submenu: [
        { name: "수상내역", href: "/pr/awards" },
        { name: "인증서", href: "/pr/certificates" },
        { name: "재무정보", href: "/pr/finance" },
        { name: "시공능력", href: "/pr/capability" },
      ]
    },
    { 
      name: "기술품질", 
      href: "/technology",
      submenu: [
        { name: "기술자 보유현황", href: "/technology/engineers" },
        { name: "장비 보유현황", href: "/technology/equipment" },
        { name: "특허 및 신기술", href: "/technology/patents" },
        { name: "보유면허", href: "/technology/licenses" },
      ]
    },
    { 
      name: "고객센터", 
      href: "/customer",
      submenu: [
        { name: "채용정보", href: "/customer/careers" },
        { name: "공지사항", href: "/customer/notices" },
        { name: "찾아오시는 길", href: "/customer/contact" },
      ]
    },
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
                <div 
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setOpenSubmenu(item.name)}
                  onMouseLeave={() => setOpenSubmenu(null)}
                >
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-primary transition-colors duration-200 py-2 block"
                  >
                    {item.name}
                  </Link>
                  
                  {/* Submenu Dropdown */}
                  {item.submenu && openSubmenu === item.name && (
                    <div className="absolute left-0 top-full pt-2 w-48 z-50">
                      <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
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
              <nav className="flex flex-col space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-primary transition-colors py-2 block font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="text-sm text-gray-600 hover:text-primary transition-colors py-1.5 block"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          )}
        </Container>
      </header>
    </>
  );
}
