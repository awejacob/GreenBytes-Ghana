import type { Metadata } from "next";
import { Mail, Phone, Leaf, MessageSquare } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | GreenBytes Ghana",
  description:
    "Contact GreenBytes Ghana — whether you're a farmer, distributor, commercial farm, partner or investor. Email: green.bytes.feed@gmail.com. Phone: 0558487942, 0549826870, 0270661478.",
};

const enquiryTypes = [
  "I want to buy feed",
  "I am a farmer",
  "I want to become a distributor",
  "Partnership",
  "Commercial farm enquiry",
  "Investment enquiry",
  "Other",
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 gradient-green text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 rounded-full border border-white" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border border-white translate-y-1/2" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">Get in Touch</span>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mt-4 mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Let&apos;s Grow Together
          </h1>
          <p className="text-green-100 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            Whether you&apos;re a farmer, distributor, commercial farm, partner or potential investor,
            we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left: Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <span className="section-label">Contact Information</span>
                <h2 className="section-title mt-3 mb-4 text-2xl">
                  Talk to GreenBytes Ghana
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  We are here to answer any questions about our feed, partnerships,
                  distribution or investment opportunities. Reach out through any of the
                  channels below.
                </p>
              </div>

              {/* Email */}
              <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-700 rounded-xl flex items-center justify-center">
                    <Mail size={18} className="text-white" />
                  </div>
                  <span className="font-bold text-gray-900">Email Us</span>
                </div>
                <a
                  href="mailto:green.bytes.feed@gmail.com"
                  className="text-green-700 font-semibold hover:text-green-900 transition-colors break-all"
                >
                  green.bytes.feed@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-amber-600 rounded-xl flex items-center justify-center">
                    <Phone size={18} className="text-white" />
                  </div>
                  <span className="font-bold text-gray-900">Call Us</span>
                </div>
                <div className="space-y-3">
                  {[
                    { number: "0558 487 942", href: "tel:+233558487942" },
                    { number: "0549 826 870", href: "tel:+233549826870" },
                    { number: "0270 661 478", href: "tel:+233270661478" },
                  ].map((phone) => (
                    <a
                      key={phone.number}
                      href={phone.href}
                      className="flex items-center gap-3 text-amber-700 hover:text-amber-900 transition-colors font-semibold text-lg"
                    >
                      <Phone size={14} className="flex-shrink-0" />
                      {phone.number}
                    </a>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="bg-[#0f1f15] rounded-2xl p-6 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center">
                    <MessageSquare size={18} className="text-white" />
                  </div>
                  <span className="font-bold">WhatsApp / Message</span>
                </div>
                <p className="text-green-200 text-sm leading-relaxed mb-3">
                  You can also reach us via WhatsApp on any of the numbers above for
                  quick enquiries and order placement.
                </p>
                <a
                  href="https://wa.me/233558487942"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm"
                >
                  WhatsApp Us
                </a>
              </div>

              {/* Enquiry Types */}
              <div>
                <p className="text-sm font-bold text-gray-700 mb-3">We welcome enquiries from:</p>
                <div className="flex flex-wrap gap-2">
                  {["Farmers", "Cooperatives", "Distributors", "Commercial Farms", "Partners", "Investors"].map((type) => (
                    <span
                      key={type}
                      className="bg-green-50 border border-green-200 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>

              {/* Brand message */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
                <Leaf size={20} className="text-green-700 mb-3" />
                <p className="text-green-800 font-semibold italic text-sm">
                  &ldquo;Feeding Ghana Sustainably, One Farmer at a Time.&rdquo;
                </p>
                <p className="text-green-600 text-xs mt-2">— GreenBytes Ghana</p>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <div className="bg-white border border-gray-100 rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Us an Enquiry</h2>
                <p className="text-gray-500 text-sm mb-8">
                  Fill in the form below and we&apos;ll get back to you as soon as possible.
                </p>
                <ContactForm enquiryTypes={enquiryTypes} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12" style={{ background: "linear-gradient(180deg, #f5f0e8 0%, #faf8f4 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 text-lg font-medium">
            Ready to get started?{" "}
            <a
              href="mailto:green.bytes.feed@gmail.com"
              className="text-green-700 font-bold hover:underline"
            >
              Email us directly
            </a>{" "}
            or call{" "}
            <a href="tel:+233558487942" className="text-green-700 font-bold hover:underline">
              0558 487 942
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
