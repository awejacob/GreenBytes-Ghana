import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Leaf, Target, Heart, Globe, Lightbulb, Users, Shield, Sprout } from "lucide-react";

export const metadata: Metadata = {
  title: "About GreenBytes Ghana | Our Story & Mission",
  description:
    "Learn about GreenBytes Ghana — a Ghanaian agricultural innovation company developing affordable, organic and climate-smart rabbit feed solutions for farmers across Ghana.",
};

const values = [
  { icon: Leaf, title: "Sustainability", desc: "We build feed solutions that work with the environment, not against it.", color: "bg-green-100 text-green-700" },
  { icon: Target, title: "Affordability", desc: "Lowering costs is central to making rabbit farming viable for Ghanaian farmers.", color: "bg-amber-100 text-amber-700" },
  { icon: Globe, title: "Accessibility", desc: "Our feed should reach every farmer who needs it — urban, peri-urban and rural.", color: "bg-blue-100 text-blue-700" },
  { icon: Lightbulb, title: "Innovation", desc: "We combine local knowledge with modern techniques like hydroponics and organic formulation.", color: "bg-purple-100 text-purple-700" },
  { icon: Heart, title: "Local Production", desc: "Using Ghanaian resources to produce Ghanaian solutions — reducing foreign dependency.", color: "bg-rose-100 text-rose-700" },
  { icon: Users, title: "Farmer Empowerment", desc: "Our success is measured by the success and profitability of the farmers we serve.", color: "bg-teal-100 text-teal-700" },
  { icon: Shield, title: "Climate Resilience", desc: "Drought-resistant and hydroponic-based ingredients ensure year-round availability.", color: "bg-emerald-100 text-emerald-700" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 gradient-green text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 rounded-full border border-white" />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full border border-white translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">About Us</span>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mt-4 mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            About GreenBytes Ghana
          </h1>
          <p className="text-green-100 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            A Ghanaian agricultural innovation company building a more affordable, sustainable
            and climate-resilient future for rabbit farming in Ghana and West Africa.
          </p>
        </div>
      </section>

      {/* Story Blocks */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src="/images/hero-rabbits.jpg"
                  alt="Healthy rabbits on a Ghanaian farm"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-[#1a4a2e] rounded-xl p-6 text-white max-w-[180px]">
                <div className="text-2xl font-black mb-1">West Africa</div>
                <div className="text-sm text-green-200">Our ambition for sustainable feed leadership</div>
              </div>
            </div>
            <div>
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                      <Target size={16} className="text-red-600" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">The Challenge</h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed pl-11">
                    Rabbit farmers across Ghana struggle with high feed costs, seasonal shortages
                    and imported feed that is not tailored to Ghanaian conditions. Feed costs increased
                    by over 300% between 2017 and 2023, and 70% of rabbit farmers have exited the
                    industry (B&FT 2024). This is the crisis GreenBytes Ghana was built to address.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <Sprout size={16} className="text-green-600" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">Our Response</h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed pl-11">
                    GreenBytes Ghana developed a locally sourced, organic and climate-smart rabbit feed
                    solution. By combining organic grasses, hydroponic fodder and drought-resistant local
                    plants, we produce a nutritionally balanced feed that is approximately 40% cheaper than
                    imported alternatives and available year-round.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                      <Lightbulb size={16} className="text-amber-600" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">Our Approach</h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed pl-11">
                    We combine organic grasses, hydroponic fodder and drought-resistant local plants to
                    create a feed formulation that works with Ghana&apos;s climate rather than against it.
                    Our approach prioritizes what works for Ghanaian farming realities — not what works
                    on another continent.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Ambition & Vision */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-[#1a4a2e] rounded-2xl p-10 text-white">
              <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center mb-6">
                <Globe size={24} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Ambition</h2>
              <p className="text-green-100 leading-relaxed mb-6">
                GreenBytes Ghana is building beyond a single product. Our ambition is to grow from
                a Ghanaian solution into a leading sustainable livestock feed producer across West
                Africa — becoming the partner of choice for rabbit farmers, cooperatives, commercial
                farms and agricultural businesses across the region.
              </p>
              <div className="border-t border-white/20 pt-6">
                <p className="text-amber-400 font-bold text-sm uppercase tracking-widest mb-2">Our Vision</p>
                <p className="text-white text-xl font-bold leading-snug">
                  &ldquo;To become West Africa&apos;s leading producer of sustainable livestock feed.&rdquo;
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl min-h-[300px]">
              <Image
                src="/images/hydroponic.jpg"
                alt="Hydroponic fodder production for climate-smart rabbit feed"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-white font-bold text-xl mb-2">Climate-Smart Innovation</h3>
                <p className="text-green-200 text-sm">
                  Hydroponic fodder and drought-resistant plants ensure our feed is available all year — even during dry seasons.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20" style={{ background: "linear-gradient(180deg, #f5f0e8 0%, #faf8f4 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="section-label">Our Values</span>
            <h2 className="section-title mt-3 mb-4">
              What We Stand For
            </h2>
            <p className="text-gray-600 text-lg">
              These values guide every decision we make at GreenBytes Ghana.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm card-hover">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${v.color}`}>
                  <v.icon size={20} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title mb-4">Ready to Work With Us?</h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Whether you&apos;re a farmer looking for better feed, a business seeking to partner, or
            an investor interested in Ghana&apos;s agribusiness growth story — we&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Contact GreenBytes Ghana <ArrowRight size={18} />
            </Link>
            <Link href="/solution" className="btn-outline-green text-base px-8 py-4">
              Explore Our Feed
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
