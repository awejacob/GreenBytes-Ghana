import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0f1f15] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12">
                <Image
                  src="/logo-white.png"
                  alt="GreenBytes Ghana logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span
                  className="font-extrabold text-xl text-white leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  GreenBytes
                </span>
                <span className="block text-xs font-semibold tracking-widest uppercase text-amber-400">
                  Ghana
                </span>
              </div>
            </div>
            <p className="text-green-200 text-sm leading-relaxed mb-6">
              Climate-Smart Rabbit Feed for a Sustainable Protein Future.
              Feeding Ghana Sustainably, One Farmer at a Time.
            </p>
            <div className="flex items-center gap-2 text-green-300 text-sm mb-2">
              <Leaf size={14} className="text-amber-400 flex-shrink-0" />
              <span>Sustainable • Affordable • Accessible</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-5 text-sm uppercase tracking-widest text-amber-400">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/who-we-are", label: "Who We Are" },
                { href: "/solution", label: "Our Solution" },
                { href: "/services", label: "Services" },
                { href: "/how-it-works", label: "How It Works" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-green-300 hover:text-amber-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="font-bold text-white mb-5 text-sm uppercase tracking-widest text-amber-400">
              Company
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/impact", label: "Our Impact" },
                { href: "/sustainability", label: "Sustainability" },
                { href: "/growth", label: "Growth & Opportunity" },
                { href: "/team", label: "Our Team" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-green-300 hover:text-amber-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-5 text-sm uppercase tracking-widest text-amber-400">
              Contact Us
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:green.bytes.feed@gmail.com"
                className="flex items-start gap-3 text-green-300 hover:text-amber-400 transition-colors group"
              >
                <Mail size={16} className="mt-0.5 flex-shrink-0 group-hover:text-amber-400" />
                <span className="text-sm">green.bytes.feed@gmail.com</span>
              </a>
              <div className="flex items-start gap-3">
                <Phone size={16} className="mt-1 flex-shrink-0 text-amber-400" />
                <div className="space-y-1">
                  <a
                    href="tel:+233558487942"
                    className="block text-sm text-green-300 hover:text-amber-400 transition-colors"
                  >
                    0558 487 942
                  </a>
                  <a
                    href="tel:+233549826870"
                    className="block text-sm text-green-300 hover:text-amber-400 transition-colors"
                  >
                    0549 826 870
                  </a>
                  <a
                    href="tel:+233270661478"
                    className="block text-sm text-green-300 hover:text-amber-400 transition-colors"
                  >
                    0270 661 478
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <Link href="/contact" className="btn-primary text-sm">
                Send an Enquiry
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-green-400 text-sm">
            © {new Date().getFullYear()} GreenBytes Ghana. All rights reserved.
          </p>
          <p className="text-green-500 text-xs">
            Climate-Smart Rabbit Feed for a Sustainable Protein Future
          </p>
        </div>
      </div>
    </footer>
  );
}
