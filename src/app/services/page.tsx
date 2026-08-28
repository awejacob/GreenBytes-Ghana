import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Package, Users, BookOpen, Factory, CheckCircle, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | GreenBytes Ghana",
  description:
    "GreenBytes Ghana services: climate-smart rabbit feed supply, farmer support and demonstrations. Future services include training & consultancy and contract manufacturing.",
};

const futureServices = [
  {
    icon: BookOpen,
    title: "Training & Consultancy",
    desc: "Planned future service: expert training sessions for rabbit farmers covering best practices in nutrition, farm management, disease prevention and sustainable rabbit production.",
    status: "Future / Planned",
    color: "bg-purple-50 border-purple-200",
    iconColor: "text-purple-600",
    iconBg: "bg-purple-100",
  },
  {
    icon: Factory,
    title: "Contract Manufacturing",
    desc: "Planned future opportunity: custom feed production for large commercial rabbit farms that require specific nutritional formulations or large-volume supply agreements.",
    status: "Future Opportunity",
    color: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 gradient-green text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 rounded-full border border-white" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border border-white translate-y-1/2" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">What We Offer</span>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mt-4 mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Services
          </h1>
          <p className="text-green-100 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            GreenBytes Ghana currently focuses on supplying climate-smart rabbit feed while
            building the farmer support infrastructure for long-term agricultural success.
          </p>
        </div>
      </section>

      {/* Current Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="section-label">Current Offerings</span>
            <h2 className="section-title mt-3 mb-4">What We Offer Today</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Core: Feed Supply */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200 p-8 card-hover">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-green-700 rounded-2xl flex items-center justify-center">
                  <Package size={26} className="text-white" />
                </div>
                <span className="bg-green-700 text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                  Available Now
                </span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Rabbit Feed Supply</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our core service is the supply of GreenBytes Ghana climate-smart rabbit feed.
                We produce and deliver locally sourced, organic and nutritionally balanced rabbit
                feed at a price 40% below imported alternatives.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "50kg bags at GHS 320 per bag",
                  "Organic, zero-chemical formulation",
                  "Available for individual farmers and cooperatives",
                  "Delivery to Greater Accra and Cape Coast regions",
                  "Bulk orders for commercial farms welcome",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact?type=buy" className="btn-primary">
                Order Feed Now <ArrowRight size={16} />
              </Link>
            </div>

            {/* Farmer Support */}
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl border border-amber-200 p-8 card-hover">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-amber-600 rounded-2xl flex items-center justify-center">
                  <Users size={26} className="text-white" />
                </div>
                <span className="bg-amber-600 text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                  Available Now
                </span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Farmer Support</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                GreenBytes Ghana is committed to supporting farmers beyond just supplying feed.
                We offer demonstrations, feed adoption support and farmer engagement designed to
                help rabbit farmers get the best results from our climate-smart feed.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Feed introduction and adoption demonstrations",
                  "Farmer engagement and guidance sessions",
                  "Community farmer partnerships",
                  "Cooperative group supply programs",
                  "Direct farmer-to-team communication",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-amber-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact?type=farmer" className="btn-outline-green">
                Talk to Our Team <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Distribution & Wholesale */}
          <div className="bg-[#0f1f15] rounded-2xl p-8 text-white mb-8">
            <div className="grid sm:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">For Distributors & Shops</span>
                <h2 className="text-2xl font-bold mt-3 mb-4">Become a GreenBytes Ghana Distributor</h2>
                <p className="text-green-100 leading-relaxed mb-6">
                  GreenBytes Ghana is building its distribution network across Greater Accra and
                  Cape Coast. We welcome partnerships with agricultural shops, cooperatives and
                  individual agents who want to distribute our climate-smart rabbit feed.
                </p>
                <Link href="/contact?type=distributor" className="btn-primary">
                  Become a Distributor <ArrowRight size={16} />
                </Link>
              </div>
              <div className="space-y-4">
                {[
                  { icon: "🏪", title: "Agricultural Shops", desc: "Stock GreenBytes Ghana feed for your farming customers." },
                  { icon: "🤝", title: "Cooperatives", desc: "Bulk supply for farmer cooperative groups at competitive rates." },
                  { icon: "👤", title: "Independent Agents", desc: "Join our growing network of community feed agents." },
                ].map((d) => (
                  <div key={d.title} className="bg-white/10 rounded-xl p-4 flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">{d.icon}</span>
                    <div>
                      <div className="font-semibold text-white text-sm">{d.title}</div>
                      <div className="text-green-300 text-xs mt-0.5">{d.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Services */}
      <section className="py-16" style={{ background: "linear-gradient(180deg, #f5f0e8 0%, #faf8f4 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-200 rounded-full px-4 py-2 mb-6">
              <Clock size={14} className="text-amber-600" />
              <span className="text-amber-700 text-xs font-bold uppercase tracking-wider">Coming in the Future</span>
            </div>
            <span className="section-label">Future Services</span>
            <h2 className="section-title mt-3 mb-4">Where We Are Headed</h2>
            <p className="text-gray-600 text-lg">
              These services are planned future revenue streams and are not currently operational.
              As GreenBytes Ghana grows, we will expand our service offering to support the full
              lifecycle of rabbit farming in Ghana.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {futureServices.map((s) => (
              <div key={s.title} className={`rounded-2xl border p-7 ${s.color} relative overflow-hidden`}>
                <div className="absolute top-4 right-4">
                  <span className="bg-white border border-gray-200 text-gray-500 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {s.status}
                  </span>
                </div>
                <div className={`w-12 h-12 ${s.iconBg} rounded-xl flex items-center justify-center mb-5`}>
                  <s.icon size={22} className={s.iconColor} />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title mb-4">Ready to Work With GreenBytes Ghana?</h2>
          <p className="text-gray-600 text-lg mb-8">
            Contact us today about feed orders, distribution partnerships or any other enquiry.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Send an Enquiry <ArrowRight size={18} />
            </Link>
            <Link href="/solution" className="btn-outline-green text-base px-8 py-4">
              Learn About Our Feed
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
