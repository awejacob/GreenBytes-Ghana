"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  {
    label: "About",
    children: [
      { href: "/about", label: "About GreenBytes" },
      { href: "/who-we-are", label: "Who We Are" },
      { href: "/team", label: "Our Team" },
    ],
  },
  {
    label: "Our Solution",
    children: [
      { href: "/solution", label: "Rabbit Feed" },
      { href: "/how-it-works", label: "How It Works" },
    ],
  },
  { href: "/services", label: "Services" },
  {
    label: "Impact",
    children: [
      { href: "/impact", label: "Our Impact" },
      { href: "/sustainability", label: "Sustainability" },
    ],
  },
  { href: "/growth", label: "Growth & Opportunity" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/98 backdrop-blur-md shadow-lg border-b border-green-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="relative w-12 h-12">
              <Image
                src="/greenbytes-white.jpg"
                alt="GreenBytes Ghana logo"
                fill
                className={`object-contain transition-opacity duration-300 ${scrolled ? "opacity-0" : "opacity-100"}`}
              />
              <Image
                src="/greenbytes-black.jpg"
                alt="GreenBytes Ghana logo"
                fill
                className={`object-contain transition-opacity duration-300 ${scrolled ? "opacity-100" : "opacity-0"}`}
              />
            </div>
            <div>
              <span
                className={`font-extrabold text-lg leading-tight tracking-tight transition-colors duration-300 ${
                  scrolled ? "text-green-900" : "text-white"
                }`}
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                GreenBytes
              </span>
              <span
                className={`block text-xs font-semibold tracking-widest uppercase transition-colors duration-300 ${
                  scrolled ? "text-amber-600" : "text-amber-400"
                }`}
              >
                Ghana
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-600 transition-all duration-200 nav-link ${
                      scrolled
                        ? "text-gray-700 hover:text-green-800 hover:bg-green-50"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                    style={{ fontWeight: 600 }}
                  >
                    {link.label}
                    <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === link.label ? "rotate-180" : ""}`} />
                  </button>
                  {activeDropdown === link.label && (
                    <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-800 transition-colors font-medium"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  className={`px-3 py-2 rounded-lg text-sm transition-all duration-200 nav-link ${
                    scrolled
                      ? "text-gray-700 hover:text-green-800 hover:bg-green-50"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                  style={{ fontWeight: 600 }}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/contact"
              className="ml-3 btn-primary text-sm"
            >
              Get Our Feed
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-2xl max-h-screen overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <button
                    className="w-full flex items-center justify-between px-4 py-3 text-gray-700 font-semibold rounded-lg hover:bg-green-50 hover:text-green-800 transition-colors"
                    onClick={() =>
                      setMobileExpanded(
                        mobileExpanded === link.label ? null : link.label
                      )
                    }
                  >
                    {link.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        mobileExpanded === link.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileExpanded === link.label && (
                    <div className="ml-4 mt-1 space-y-1 border-l-2 border-green-200 pl-4">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-3 py-2.5 text-sm text-gray-600 hover:text-green-800 hover:bg-green-50 rounded-lg transition-colors font-medium"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  className="block px-4 py-3 text-gray-700 font-semibold rounded-lg hover:bg-green-50 hover:text-green-800 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-3 border-t border-gray-100">
              <Link
                href="/contact"
                className="btn-primary w-full justify-center"
                onClick={() => setIsOpen(false)}
              >
                Get Our Feed
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
