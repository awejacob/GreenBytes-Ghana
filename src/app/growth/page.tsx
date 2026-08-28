import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Shield, TrendingUp, Globe, Users, Leaf, Package, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Growth & Investment Opportunity | GreenBytes Ghana",
  description:
    "GreenBytes Ghana investment opportunity: GHS 300,000 funding requirement, strong gross margins of 33-40%, $6.4M West Africa market, proven product-market fit. Sustainable agricultural investment in Ghana.",
};

const fundingUses = [
  {
    amount: "GHS 150,000",
    label: "Production Equipment",
    desc: "Pelletizer, blender, grinder, mixer, pellet cooler and packaging machine to scale production capacity.",
    icon: Package,
    color: "bg-green-50 border-green-200 text-green-700",
    iconBg: "bg-green-100",
  },
  {
    amount: "GHS 50,000",
    label: "Land",
    desc: "Acquisition of suitable land for expanded feed production facilities.",
    icon: Globe,
    color: "bg-amber-50 border-amber-200 text-amber-700",
    iconBg: "bg-amber-100",
  },
  {
    amount: "GHS 50,000",
    label: "Warehouse Construction",
    desc: "Construction of storage and warehouse facilities to support growing production volumes.",
    icon: Shield,
    color: "bg-blue-50 border-blue-200 text-blue-700",
    iconBg: "bg-blue-100",
  },
  {
    amount: "GHS 50,000",
    label: "Working Capital",
    desc: "Grass supply, labor and transportation costs to maintain and scale ongoing production operations.",
    icon: TrendingUp,
    color: "bg-emerald-50 border-emerald-200 text-emerald-700",
    iconBg: "bg-emerald-100",
  },
];

const milestones = [
  { month: "Month 3", goal: "Full production capacity operational", icon: "⚙️" },
  { month: "Month 6", goal: "Serving 500+ active farmer customers", icon: "👨🏽‍🌾" },
  { month: "Month 12", goal: "Expanded presence in 5 Ghana regions", icon: "🗺️" },
  { month: "Month 18", goal: "Launch of new product lines", icon: "🚀" },
];

const risks = [
  {
    risk: "Climate / Seasonal Shortages",
    mitigation: "Hydroponics + year-round sourcing network",
    icon: "☀️",
  },
  {
    risk: "Competition",
    mitigation: "Lower cost + better quality + local sourcing advantage",
    icon: "🏆",
  },
  {
    risk: "Raw Material Scarcity",
    mitigation: "20+ supplier contracts securing diverse supply",
    icon: "🌾",
  },
  {
    risk: "Farmer Adoption",
    mitigation: "Free trials + demonstrations + community partnerships",
    icon: "🤝",
  },
  {
    risk: "Disease Outbreaks",
    mitigation: "Nutritional formulation + farmer training programs",
    icon: "🛡️",
  },
];

const businessModel = [
  {
    label: "Primary Revenue",
    value: "Feed Sales",
    sub: "Core current business",
    icon: Package,
    current: true,
  },
  {
    label: "Future Stream",
    value: "Organic Fertilizer",
    sub: "From circular agriculture waste",
    icon: Leaf,
    current: false,
  },
  {
    label: "Future Stream",
    value: "Training & Consultancy",
    sub: "For farmers and cooperatives",
    icon: Users,
    current: false,
  },
  {
    label: "Future Stream",
    value: "Contract Manufacturing",
    sub: "For large commercial farms",
    icon: BarChart3,
    current: false,
  },
];

export default function GrowthPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 gradient-green text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 rounded-full border border-white" />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full border border-white translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">Investment & Growth</span>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mt-4 mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Growth &amp;
            <span className="block text-amber-400">Opportunity</span>
          </h1>
          <p className="text-green-100 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            GreenBytes Ghana is at an exciting growth stage — proven product-market fit,
            strong unit economics and a massive untapped market in Ghana and West Africa.
          </p>
        </div>
      </section>

      {/* Why Invest */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="section-label">Investment Case</span>
            <h2 className="section-title mt-3 mb-4">Why GreenBytes Ghana?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
            {[
              { icon: CheckCircle, title: "Proven Product-Market Fit", desc: "Tested with 15 farmers who provided highly positive feedback. Demand is already exceeding current production capacity.", color: "text-green-700", bg: "bg-green-50 border-green-200" },
              { icon: TrendingUp, title: "Strong Gross Margins", desc: "33–40% gross margin per bag. At GHS 80 profit per 50kg bag, the unit economics are compelling and scalable.", color: "text-amber-700", bg: "bg-amber-50 border-amber-200" },
              { icon: Globe, title: "Massive Market Potential", desc: "$6.4M West Africa rabbit feed market with 8,000+ farmers in Ghana alone. Our SOM is $500K in Greater Accra and Cape Coast.", color: "text-blue-700", bg: "bg-blue-50 border-blue-200" },
              { icon: Leaf, title: "Strong Social & Environmental Impact", desc: "SDG-aligned business creating jobs, empowering women and youth, and building climate resilience in Ghana's agriculture.", color: "text-emerald-700", bg: "bg-emerald-50 border-emerald-200" },
              { icon: Shield, title: "Climate-Smart & Resilient", desc: "Hydroponic and drought-resistant formulation means our supply chain works even when conventional grass fails during dry seasons.", color: "text-teal-700", bg: "bg-teal-50 border-teal-200" },
              { icon: Users, title: "Experienced Team", desc: "A team combining agricultural research, marketing and business operations experience — with deep roots in the farming community.", color: "text-purple-700", bg: "bg-purple-50 border-purple-200" },
            ].map((item) => (
              <div key={item.title} className={`rounded-xl border p-6 ${item.bg} card-hover`}>
                <item.icon size={22} className={`${item.color} mb-4`} />
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Business Model */}
          <div className="mb-14">
            <div className="text-center mb-10">
              <span className="section-label">Business Model</span>
              <h2 className="section-title mt-3">A Sustainable Business Model</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {businessModel.map((b) => (
                <div
                  key={b.value}
                  className={`rounded-xl p-6 border text-center ${
                    b.current
                      ? "bg-green-700 border-green-700 text-white"
                      : "bg-gray-50 border-gray-200"
                  } card-hover`}
                >
                  <b.icon size={24} className={`mx-auto mb-3 ${b.current ? "text-amber-400" : "text-gray-500"}`} />
                  <div className={`text-xs font-bold uppercase tracking-widest mb-2 ${b.current ? "text-green-300" : "text-gray-400"}`}>
                    {b.label}
                  </div>
                  <div className={`font-black text-lg mb-1 ${b.current ? "text-white" : "text-gray-800"}`}>
                    {b.value}
                  </div>
                  <div className={`text-xs ${b.current ? "text-green-200" : "text-gray-500"}`}>{b.sub}</div>
                  {!b.current && (
                    <div className="mt-3 text-xs bg-amber-100 text-amber-700 rounded-full px-2 py-1 font-semibold">
                      Future Stream
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Funding */}
      <section className="py-20" style={{ background: "linear-gradient(180deg, #f5f0e8 0%, #faf8f4 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="section-label">Funding Requirement</span>
            <h2 className="section-title mt-3 mb-4">Our Funding Requirement</h2>
            <div className="text-5xl font-black text-green-800 my-4">GHS 300,000</div>
            <p className="text-gray-600 text-lg">
              GreenBytes Ghana is seeking GHS 300,000 in funding to scale production and
              reach its first major growth milestones. Below is the proposed use of funds.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 mb-14">
            {fundingUses.map((f) => (
              <div key={f.label} className={`rounded-2xl border p-6 ${f.color} card-hover`}>
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 ${f.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <f.icon size={20} className={f.color.split(" ")[2]} />
                  </div>
                  <div className="flex-1">
                    <div className={`text-2xl font-black mb-1 ${f.color.split(" ")[2]}`}>{f.amount}</div>
                    <div className="font-bold text-gray-900 mb-2">{f.label}</div>
                    <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Milestones */}
          <div className="bg-[#0f1f15] rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 rounded-full px-4 py-2 mb-4">
                <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Planned Milestones</span>
              </div>
              <h3 className="text-2xl font-bold">Planned Post-Funding Milestones</h3>
              <p className="text-green-300 text-sm mt-2">These are planned milestones subject to funding and execution.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {milestones.map((m) => (
                <div key={m.month} className="bg-white/10 rounded-xl p-5 text-center border border-white/10">
                  <div className="text-3xl mb-3">{m.icon}</div>
                  <div className="text-amber-400 font-bold text-sm mb-2">{m.month}</div>
                  <p className="text-green-100 text-sm leading-relaxed">{m.goal}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Risk Management */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="section-label">Risk Management</span>
            <h2 className="section-title mt-3 mb-4">
              Built for Real-World Agricultural Challenges
            </h2>
            <p className="text-gray-600 text-lg">
              GreenBytes Ghana has identified the key risks in our operating environment
              and developed clear mitigation strategies for each.
            </p>
          </div>
          <div className="space-y-4">
            {risks.map((r) => (
              <div key={r.risk} className="bg-gray-50 border border-gray-100 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 card-hover">
                <div className="text-3xl flex-shrink-0">{r.icon}</div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-1">{r.risk}</h3>
                </div>
                <div className="flex items-center gap-3 sm:flex-row flex-col sm:text-right text-left min-w-[220px]">
                  <div className="sm:text-right">
                    <div className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">Mitigation Strategy</div>
                    <div className="text-sm font-semibold text-green-700">{r.mitigation}</div>
                  </div>
                  <CheckCircle size={18} className="text-green-600 flex-shrink-0" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title-white mb-4">Interested in Partnering or Investing?</h2>
          <p className="text-green-100 text-lg mb-8 leading-relaxed max-w-xl mx-auto">
            Whether you are a potential investor, business partner, commercial farm or distributor,
            GreenBytes Ghana would love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact?type=investor" className="btn-primary text-base px-8 py-4">
              Investment Enquiry <ArrowRight size={18} />
            </Link>
            <Link href="/contact?type=partner" className="btn-secondary text-base px-8 py-4">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
