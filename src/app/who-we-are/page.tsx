import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Leaf, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Who We Are | GreenBytes Ghana",
  description:
    "GreenBytes Ghana is a Ghanaian agricultural innovation company focused on sustainable, affordable and accessible livestock feed solutions for rabbit farmers.",
};

const challenges = [
  { title: "Feed Affordability", desc: "We make high-quality rabbit feed accessible at 40% below the cost of imports.", icon: "₵" },
  { title: "Seasonal Availability", desc: "Hydroponic fodder and drought-resistant plants keep our supply chain going year-round.", icon: "☀" },
  { title: "Nutritional Quality", desc: "Organic, locally formulated feed designed for optimal rabbit health and growth.", icon: "🌿" },
  { title: "Rabbit Mortality", desc: "Nutritionally balanced feed designed to reduce the 20–40% mortality rates farmers face.", icon: "🐇" },
  { title: "Farmer Profitability", desc: "Lower feed costs mean more profit per animal — making rabbit farming a viable livelihood.", icon: "📈" },
  { title: "Sustainable Food Production", desc: "Contributing to Ghana's protein security through responsible and climate-smart agriculture.", icon: "🌍" },
];

export default function WhoWeArePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#0f1f15] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 rounded-full border border-white" />
          <div className="absolute bottom-0 left-20 w-48 h-48 rounded-full border border-white" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">Who We Are</span>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mt-4 mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Who We Are
          </h1>
          <p className="text-green-100 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            GreenBytes Ghana is a Ghanaian agricultural innovation company focused on sustainable,
            affordable and accessible livestock feed solutions — starting with climate-smart rabbit feed.
          </p>
        </div>
      </section>

      {/* Identity */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="section-label">Our Identity</span>
            <h2 className="section-title mt-3 mb-6">
              Built in Ghana, for Ghana&apos;s Farmers
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              GreenBytes Ghana was founded with one clear purpose: to solve the feed problem that
              is driving rabbit farmers out of business. We are a Ghanaian company, using Ghanaian
              resources, to build a Ghanaian solution — with ambitions that reach across West Africa.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-16">
            <div className="lg:col-span-2 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100 p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-green-700 rounded-xl flex items-center justify-center">
                  <Leaf size={18} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">What We Do</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                GreenBytes Ghana produces climate-smart rabbit feed formulated from organic grasses,
                hydroponic fodder and drought-resistant local plants. Our feed is nutritionally balanced,
                free from chemicals, and produced locally — making it approximately 40% cheaper than
                imported alternatives.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our current focus is rabbit feed, but our long-term vision is to become West Africa&apos;s
                leading sustainable livestock feed producer — serving rabbit farmers, cooperatives,
                commercial farms, and agricultural businesses across the region.
              </p>
            </div>
            <div className="bg-[#1a4a2e] rounded-2xl p-8 text-white flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center mb-5">
                  <TrendingUp size={18} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Our Vision</h3>
                <p className="text-green-100 text-lg leading-snug font-medium italic">
                  &ldquo;To become West Africa&apos;s leading producer of sustainable livestock feed.&rdquo;
                </p>
              </div>
              <div className="mt-8 border-t border-white/20 pt-6">
                <p className="text-amber-400 text-sm font-semibold">Feeding Ghana Sustainably,</p>
                <p className="text-amber-400 text-sm font-semibold">One Farmer at a Time.</p>
              </div>
            </div>
          </div>

          {/* Challenges we address */}
          <div>
            <div className="text-center mb-10">
              <span className="section-label">What We Solve</span>
              <h2 className="section-title mt-3">
                The Problems We&apos;re Here to Fix
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {challenges.map((c) => (
                <div key={c.title} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 card-hover">
                  <div className="text-3xl mb-4">{c.icon}</div>
                  <div className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{c.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{c.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brand message */}
      <section className="py-16 gradient-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title-white mb-6">Our Brand Message</h2>
          <p className="text-2xl sm:text-3xl font-bold text-amber-300 mb-6 italic">
            &ldquo;Feeding Ghana Sustainably, One Farmer at a Time.&rdquo;
          </p>
          <p className="text-green-100 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            GreenBytes Ghana is not simply selling feed. We are addressing high feed costs,
            seasonal shortages, poor nutrition, rabbit mortality, low farmer profitability and food
            insecurity — with a locally produced, climate-smart solution designed for African realities.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/team" className="btn-primary">
              Meet Our Team <ArrowRight size={16} />
            </Link>
            <Link href="/solution" className="btn-secondary">
              Our Solution
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
