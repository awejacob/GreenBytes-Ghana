import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Leaf, Package, Sun, Heart, Globe, BarChart3, TrendingDown } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Rabbit Feed | GreenBytes Ghana Climate-Smart Feed",
  description:
    "GreenBytes Ghana's climate-smart rabbit feed: organic, locally produced, 40% cheaper than imports. GHS 320 per 50kg. Formulated from organic grasses, hydroponic fodder and drought-resistant plants.",
};

const benefits = [
  { icon: TrendingDown, title: "40% Cheaper Than Imports", desc: "At GHS 320 per 50kg, our feed is approximately 40% cheaper than imported alternatives — making profitable rabbit farming genuinely accessible.", color: "bg-green-50 border-green-200 text-green-700", iconBg: "bg-green-100" },
  { icon: Sun, title: "Climate-Resilient", desc: "Hydroponic fodder and drought-resistant plants ensure our feed formulation remains available and effective even during dry seasons.", color: "bg-amber-50 border-amber-200 text-amber-700", iconBg: "bg-amber-100" },
  { icon: Package, title: "Year-Round Availability", desc: "Unlike conventional grass-based feed that fails in the dry season, GreenBytes Ghana feed is designed for year-round supply.", color: "bg-blue-50 border-blue-200 text-blue-700", iconBg: "bg-blue-100" },
  { icon: CheckCircle, title: "Nutritionally Balanced", desc: "Formulated to meet the complete nutritional requirements of rabbits at all growth stages, reducing deficiency-related health problems.", color: "bg-emerald-50 border-emerald-200 text-emerald-700", iconBg: "bg-emerald-100" },
  { icon: Heart, title: "Reduces Mortality", desc: "Designed specifically to address the 20–40% rabbit mortality rates caused by nutritional deficiencies in conventional feed.", color: "bg-rose-50 border-rose-200 text-rose-700", iconBg: "bg-rose-100" },
  { icon: Globe, title: "Locally Produced", desc: "Every ingredient is locally sourced, reducing dependence on foreign supply chains and supporting Ghana's agricultural economy.", color: "bg-teal-50 border-teal-200 text-teal-700", iconBg: "bg-teal-100" },
  { icon: Leaf, title: "Zero Chemicals", desc: "100% organic — no chemicals, no artificial additives. Just organic grasses, hydroponic fodder and drought-resistant local plants.", color: "bg-lime-50 border-lime-200 text-lime-700", iconBg: "bg-lime-100" },
];

export default function SolutionPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 gradient-green text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 rounded-full border border-white" />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full border border-white translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">Our Product</span>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mt-4 mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Rabbit Feed
          </h1>
          <p className="text-green-100 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            Organic • Affordable • Climate-Smart
          </p>
        </div>
      </section>

      {/* Product Card */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src="/bag2.jpg"
                  alt="GreenBytes Ghana organic climate-smart rabbit feed pellets"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-amber-500 rounded-xl px-5 py-3 text-white font-bold shadow-lg">
                Currently Available
              </div>
            </div>
            <div>
              <span className="section-label">Core Offering</span>
              <h2
                className="section-title mt-3 mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Climate-Smart Rabbit Feed
              </h2>
              <p className="text-amber-600 font-bold text-lg mb-5">Organic • Locally Produced • Year-Round</p>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                GreenBytes Ghana produces locally sourced rabbit feed designed around Ghanaian
                environmental and farming conditions. Our feed is formulated for the realities
                of Ghanaian rabbit farming — not imported from another country and another climate.
              </p>

              {/* Ingredients */}
              <div className="bg-green-50 rounded-xl border border-green-100 p-6 mb-8">
                <h3 className="font-bold text-green-900 mb-4 flex items-center gap-2">
                  <Leaf size={18} className="text-green-600" />
                  What Our Feed Is Made From
                </h3>
                <div className="grid sm:grid-cols-3 gap-3">
                  {[
                    { label: "Organic Grasses", emoji: "🌾" },
                    { label: "Hydroponic Fodder", emoji: "💧" },
                    { label: "Drought-Resistant Local Plants", emoji: "🌿" },
                  ].map((ing) => (
                    <div key={ing.label} className="bg-white rounded-lg p-3 text-center border border-green-100">
                      <div className="text-2xl mb-2">{ing.emoji}</div>
                      <div className="text-sm font-semibold text-green-800">{ing.label}</div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-green-700 mt-3 font-medium">Zero chemicals. 100% organic.</p>
              </div>

              {/* Pricing */}
              <div className="bg-[#1a4a2e] rounded-xl p-6 text-white">
                <h3 className="font-bold text-amber-400 mb-4 text-sm uppercase tracking-widest">Pricing</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-xs text-green-400 mb-1 uppercase tracking-wide">Pack Size</div>
                    <div className="text-2xl font-black">50kg</div>
                  </div>
                  <div>
                    <div className="text-xs text-green-400 mb-1 uppercase tracking-wide">Selling Price</div>
                    <div className="text-2xl font-black text-amber-400">GHS 320</div>
                  </div>
                  <div>
                    <div className="text-xs text-green-400 mb-1 uppercase tracking-wide">Cost/Bag</div>
                    <div className="text-2xl font-black">GHS 240</div>
                  </div>
                  <div>
                    <div className="text-xs text-green-400 mb-1 uppercase tracking-wide">Gross Margin</div>
                    <div className="text-2xl font-black text-amber-400">33–40%</div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/20 text-center">
                  <span className="text-green-300 text-sm">Approximately </span>
                  <span className="text-amber-400 font-bold">40% cheaper</span>
                  <span className="text-green-300 text-sm"> than imported rabbit feed alternatives</span>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Grid */}
          <div>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="section-label">Key Benefits</span>
              <h2 className="section-title mt-3 mb-4">
                Why GreenBytes Ghana Feed Works
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className={`rounded-xl border p-6 ${b.color} card-hover`}
                >
                  <div className={`w-10 h-10 ${b.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                    <b.icon size={18} className={b.color.split(" ")[2]} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm">{b.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Unit Economics */}
      <section className="py-16" style={{ background: "linear-gradient(180deg, #f5f0e8 0%, #faf8f4 100%)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label">Business Economics</span>
            <h2 className="section-title mt-3 mb-4">Strong Unit Economics</h2>
            <p className="text-gray-600 text-lg">A sustainable business model for farmers and GreenBytes Ghana alike.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Selling Price per 50kg", value: "GHS 320", icon: Package, color: "text-green-700", bg: "bg-green-50 border-green-200" },
              { label: "Cost per 50kg", value: "GHS 240", icon: BarChart3, color: "text-blue-700", bg: "bg-blue-50 border-blue-200" },
              { label: "Profit per Bag", value: "GHS 80", icon: TrendingDown, color: "text-amber-700", bg: "bg-amber-50 border-amber-200" },
              { label: "Gross Margin", value: "33–40%", icon: CheckCircle, color: "text-emerald-700", bg: "bg-emerald-50 border-emerald-200" },
            ].map((item) => (
              <div key={item.label} className={`rounded-xl border p-6 text-center ${item.bg} card-hover`}>
                <item.icon size={24} className={`${item.color} mx-auto mb-3`} />
                <div className={`text-3xl font-black ${item.color} mb-2`}>{item.value}</div>
                <div className="text-xs text-gray-600 font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title mb-4">Ready to Try GreenBytes Ghana Feed?</h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
            Join the growing community of rabbit farmers choosing sustainable, affordable and
            climate-smart feed. Contact us today to place your order or request more information.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact?type=buy" className="btn-primary text-base px-8 py-4">
              Get Our Feed <ArrowRight size={18} />
            </Link>
            <Link href="/how-it-works" className="btn-outline-green text-base px-8 py-4">
              See How It&apos;s Made
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
