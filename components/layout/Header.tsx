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
      ],
    },
    {
      name: "사업영역",
      href: "/business",
      submenu: [
        { name: "주요사업", href: "/business/services" },
        { name: "진행현장", href: "/business/ongoing" },
        { name: "완료현장", href: "/business/completed" },
      ],
    },
    {
      name: "홍보센터",
      href: "/pr",
      submenu: [
        { name: "수상내역", href: "/pr/awards" },
        { name: "인증서", href: "/pr/certificates" },
        { name: "재무정보", href: "/pr/finance" },
        { name: "시공능력", href: "/pr/capability" },
      ],
    },
    {
      name: "기술품질",
      href: "/technology",
      submenu: [
        { name: "기술자 보유현황", href: "/technology/engineers" },
        { name: "장비 보유현황", href: "/technology/equipment" },
        { name: "특허 및 신기술", href: "/technology/patents" },
        { name: "보유면허", href: "/technology/licenses" },
      ],
    },
    {
      name: "고객센터",
      href: "/customer",
      submenu: [
        { name: "채용정보", href: "/customer/careers" },
        { name: "공지사항", href: "/customer/notices" },
        { name: "찾아오시는 길", href: "/customer/contact" },
      ],
    },
  ];

  return (
    <>
      {/* Utility Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-primary text-white/90">
        <Container>
          <div className="flex items-center justify-end h-9 text-xs tracking-wide gap-6">
            <a href="tel:02-1234-5678" className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              02-1234-5678
            </a>
            <Link href="/customer/careers" className="hover:text-white transition-colors">채용정보</Link>
            <Link href="/customer/contact" className="hover:text-white transition-colors">찾아오시는 길</Link>
          </div>
        </Container>
      </div>

      <header className="fixed top-9 left-0 right-0 z-50 bg-white shadow-[0_1px_0_rgba(0,0,0,0.06)]">
        <Container>
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <img
                  src="/logo.png"
                  alt="JINDUK 로고"
                  className="h-11 md:h-12 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-10">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setOpenSubmenu(item.name)}
                  onMouseLeave={() => setOpenSubmenu(null)}
                >
                  <Link
                    href={item.href}
                    className="relative text-[15px] text-gray-900 font-semibold tracking-wide hover:text-primary transition-colors duration-200 py-2 block after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:bg-primary after:transition-all after:duration-300 after:w-0 group-hover:after:w-full"
                  >
                    {item.name}
                  </Link>

                  {/* Submenu Dropdown */}
                  {item.submenu && openSubmenu === item.name && (
                    <div className="absolute left-0 top-full pt-3 w-52 z-50">
                      <div className="bg-white border-t-2 border-primary shadow-lg overflow-hidden">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-5 py-3 text-sm text-gray-600 hover:bg-primary/5 hover:text-primary transition-colors"
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
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100 max-h-[calc(100vh-5rem)] overflow-y-auto">
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
