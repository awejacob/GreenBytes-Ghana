import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "How It Works | GreenBytes Ghana Feed Production Process",
  description:
    "Discover how GreenBytes Ghana produces climate-smart rabbit feed — from local sourcing to delivery. A 7-step production process designed for quality and sustainability.",
};

const steps = [
  {
    step: 1,
    title: "Sourcing",
    icon: "🌾",
    desc: "We source organic grasses, hydroponic fodder and drought-resistant local plants from trusted community suppliers and our own growing network. Local sourcing keeps costs low and supply reliable.",
    color: "bg-green-50 border-green-200",
    badge: "bg-green-700",
  },
  {
    step: 2,
    title: "Sorting",
    icon: "🔍",
    desc: "All raw materials are carefully sorted to remove impurities and ensure only the highest quality organic inputs enter the production process. Quality control starts here.",
    color: "bg-emerald-50 border-emerald-200",
    badge: "bg-emerald-700",
  },
  {
    step: 3,
    title: "Drying",
    icon: "☀️",
    desc: "Grasses and organic materials are dried to the correct moisture content. Proper drying ensures the feed is safe, shelf-stable and nutritionally preserved for maximum value.",
    color: "bg-amber-50 border-amber-200",
    badge: "bg-amber-700",
  },
  {
    step: 4,
    title: "Crushing",
    icon: "⚙️",
    desc: "Dried materials are crushed and ground to a consistent particle size. This step prepares the organic ingredients for blending and ensures a uniform and balanced nutritional profile.",
    color: "bg-yellow-50 border-yellow-200",
    badge: "bg-yellow-700",
  },
  {
    step: 5,
    title: "Pelleting",
    icon: "🟢",
    desc: "The blended ingredients are compressed into pellets. Pelleting improves feed efficiency, reduces waste and makes the feed easier for rabbits to consume — improving nutrition uptake.",
    color: "bg-lime-50 border-lime-200",
    badge: "bg-lime-700",
  },
  {
    step: 6,
    title: "Packaging",
    icon: "📦",
    desc: "GreenBytes Ghana feed is packaged in 50kg bags designed to protect quality during storage and transportation. Each bag is weighed and sealed to our quality standard.",
    color: "bg-teal-50 border-teal-200",
    badge: "bg-teal-700",
  },
  {
    step: 7,
    title: "Delivery",
    icon: "🚚",
    desc: "Feed is delivered directly to farmers, agricultural shops and cooperatives. We are building our distribution network across Greater Accra and Cape Coast to reach more farmers.",
    color: "bg-green-50 border-green-200",
    badge: "bg-green-800",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#0f1f15] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 rounded-full border border-white" />
          <div className="absolute bottom-0 left-10 w-96 h-96 rounded-full border border-white" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">Production Process</span>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mt-4 mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            From Local Resources
            <span className="block text-amber-400">to Quality Feed</span>
          </h1>
          <p className="text-green-100 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            Our 7-step production process transforms locally sourced organic materials into
            high-quality, climate-smart rabbit feed — designed for Ghanaian farming realities.
          </p>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-2">
            {steps.map((s, i) => (
              <div key={s.step} className="flex items-center gap-2">
                <div className={`${s.badge} text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm`}>
                  {s.step}
                </div>
                <span className="font-semibold text-gray-700 text-sm">{s.title}</span>
                {i < steps.length - 1 && (
                  <ArrowRight size={14} className="text-gray-400 mx-1" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Steps */}
      <section className="py-20" style={{ background: "linear-gradient(180deg, #f5f0e8 0%, #faf8f4 100%)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-700 via-amber-500 to-green-700 hidden sm:block" />

            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.step} className="relative flex gap-6 sm:gap-10">
                  {/* Step circle */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className={`w-16 h-16 ${step.badge} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <span className="text-2xl">{step.icon}</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center">
                      <span className="text-xs font-bold text-gray-600">{step.step}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`flex-1 rounded-2xl border p-6 ${step.color} card-hover mb-2`}>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Step {step.step}</span>
                        <h3
                          className="text-xl font-bold text-gray-900 mt-1"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label">Our Production Principles</span>
            <h2 className="section-title mt-3">Built for Quality at Every Step</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { emoji: "🌿", title: "Organic Only", desc: "No chemicals enter our production process at any stage. Every ingredient is natural and organic." },
              { emoji: "🔬", title: "Quality Controlled", desc: "Each step of our production process is monitored to ensure consistency and nutritional integrity." },
              { emoji: "💧", title: "Climate-Smart", desc: "Hydroponic fodder and drought-resistant inputs ensure production continuity through dry seasons." },
            ].map((p) => (
              <div key={p.title} className="text-center p-6 rounded-2xl bg-green-50 border border-green-100">
                <div className="text-4xl mb-4">{p.emoji}</div>
                <h3 className="font-bold text-gray-900 mb-3">{p.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title-white mb-4">Ready to Experience the Difference?</h2>
          <p className="text-green-100 text-lg mb-8 leading-relaxed max-w-xl mx-auto">
            Now that you know how our feed is made, take the next step and get GreenBytes Ghana
            climate-smart rabbit feed for your farm.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact?type=buy" className="btn-primary text-base px-8 py-4">
              Get Our Feed <ArrowRight size={18} />
            </Link>
            <Link href="/solution" className="btn-secondary text-base px-8 py-4">
              Explore Our Solution
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
