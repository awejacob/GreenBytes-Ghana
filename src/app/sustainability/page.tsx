import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Sustainability & Growth Roadmap | GreenBytes Ghana",
  description:
    "GreenBytes Ghana's sustainability strategy, environmental impact, growth roadmap and 5-year business projections for sustainable rabbit feed production in Ghana and West Africa.",
};

const phases = [
  {
    phase: "Phase 1",
    title: "Awareness",
    period: "2024 Q4 – 2025 Q1",
    status: "completed",
    statusLabel: "In Progress / Completed",
    color: "bg-green-700",
    borderColor: "border-green-200",
    bg: "bg-green-50",
    activities: [
      "Farmer testimonials and word-of-mouth campaigns",
      "WhatsApp and social media outreach",
      "Radio and community outreach programs",
      "Demonstrations at MoFA offices",
    ],
  },
  {
    phase: "Phase 2",
    title: "Distribution",
    period: "2025 Q1 – Q2",
    status: "active",
    statusLabel: "Current / Upcoming",
    color: "bg-amber-600",
    borderColor: "border-amber-200",
    bg: "bg-amber-50",
    activities: [
      "Cooperatives and farmers' associations",
      "Agricultural shops in Cape Coast and Accra",
      "Free sample distribution to new customers",
      "Agent network establishment",
    ],
  },
  {
    phase: "Phase 3",
    title: "Scale",
    period: "Q3 2026 onward",
    status: "future",
    statusLabel: "Future / Planned",
    color: "bg-blue-700",
    borderColor: "border-blue-200",
    bg: "bg-blue-50",
    activities: [
      "Serve 200+ farmers monthly",
      "Secure commercial farm contracts",
      "West Africa regional expansion",
      "New product line launches",
    ],
  },
];

const projections = [
  { year: 2025, revenue: "GHS 8K", bags: "25", desc: "Pilot scale", current: true },
  { year: 2026, revenue: "GHS 2.3M", bags: "7,200", desc: "Regional penetration", current: false },
  { year: 2027, revenue: "GHS 4.6M", bags: "14,400", desc: "National expansion", current: false },
  { year: 2028, revenue: "GHS 7.6M", bags: "24,000", desc: "West African exports", current: false },
  { year: 2029, revenue: "GHS 11.4M", bags: "36,000", desc: "Market leader", current: false },
];

export default function SustainabilityPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#0f1f15] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 rounded-full border border-white" />
          <div className="absolute bottom-0 left-10 w-64 h-64 rounded-full border border-white" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">Sustainability & Growth</span>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mt-4 mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Sustainability &amp; Our
            <span className="block text-amber-400">Growth Roadmap</span>
          </h1>
          <p className="text-green-100 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            GreenBytes Ghana is building a sustainable business and sustainable agriculture —
            for the long-term benefit of Ghana&apos;s farming communities and environment.
          </p>
        </div>
      </section>

      {/* Growth Roadmap */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="section-label">Roadmap</span>
            <h2 className="section-title mt-3 mb-4">Our Growth Journey</h2>
            <p className="text-gray-600 text-lg">
              Three clear phases guide GreenBytes Ghana from awareness to scale.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {phases.map((phase) => (
              <div key={phase.phase} className={`rounded-2xl border ${phase.borderColor} ${phase.bg} p-7 relative overflow-hidden card-hover`}>
                <div className="flex items-start justify-between mb-5">
                  <div className={`${phase.color} text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider`}>
                    {phase.phase}
                  </div>
                  <div className="flex items-center gap-1.5">
                    {phase.status === "completed" && (
                      <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
                        <CheckCircle size={10} /> {phase.statusLabel}
                      </span>
                    )}
                    {phase.status === "active" && (
                      <span className="bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
                        <Clock size={10} /> {phase.statusLabel}
                      </span>
                    )}
                    {phase.status === "future" && (
                      <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
                        <ArrowRight size={10} /> {phase.statusLabel}
                      </span>
                    )}
                  </div>
                </div>
                <h3
                  className="text-2xl font-black text-gray-900 mb-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {phase.title}
                </h3>
                <p className="text-sm text-gray-500 font-semibold mb-5">{phase.period}</p>
                <ul className="space-y-2.5">
                  {phase.activities.map((activity) => (
                    <li key={activity} className="flex items-start gap-2.5">
                      <div className={`w-2 h-2 rounded-full ${phase.color} mt-1.5 flex-shrink-0`} />
                      <span className="text-sm text-gray-700">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Year Projections */}
      <section className="py-20" style={{ background: "linear-gradient(180deg, #f5f0e8 0%, #faf8f4 100%)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-6">
            <span className="section-label">Business Projections</span>
            <h2 className="section-title mt-3 mb-4">Our Growth Projections</h2>
            <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-200 rounded-full px-4 py-2">
              <span className="text-amber-700 text-xs font-bold uppercase tracking-wider">
                ⚠️ These are business projections, not guaranteed results
              </span>
            </div>
          </div>
          <div className="mt-10">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-green-200">
                    <th className="text-left py-4 px-4 text-sm font-bold text-gray-600 uppercase tracking-wide">Year</th>
                    <th className="text-left py-4 px-4 text-sm font-bold text-gray-600 uppercase tracking-wide">Revenue</th>
                    <th className="text-left py-4 px-4 text-sm font-bold text-gray-600 uppercase tracking-wide">Bags Sold</th>
                    <th className="text-left py-4 px-4 text-sm font-bold text-gray-600 uppercase tracking-wide">Stage</th>
                  </tr>
                </thead>
                <tbody>
                  {projections.map((p, i) => (
                    <tr
                      key={p.year}
                      className={`border-b border-gray-100 transition-colors ${
                        p.current ? "bg-green-50" : i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                      }`}
                    >
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <span className="font-black text-xl text-gray-900">{p.year}</span>
                          {p.current && (
                            <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">Current</span>
                          )}
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className="font-black text-xl text-green-800">{p.revenue}</span>
                      </td>
                      <td className="py-4 px-4">
                        <span className="font-bold text-gray-700">{p.bags}</span>
                      </td>
                      <td className="py-4 px-4">
                        <span className="text-gray-600 text-sm">{p.desc}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <div className="text-xs text-green-600 font-bold uppercase tracking-wide mb-1">Break-Even Point</div>
                <div className="text-2xl font-black text-green-800">Month 8 (2025)</div>
                <div className="text-sm text-green-600 mt-1">Projected break-even timeline</div>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <div className="text-xs text-amber-600 font-bold uppercase tracking-wide mb-1">EBITDA-Positive</div>
                <div className="text-2xl font-black text-amber-800">Q4 2025</div>
                <div className="text-sm text-amber-600 mt-1">Projected earnings milestone</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title-white mb-4">Be Part of the Growth Story</h2>
          <p className="text-green-100 text-lg mb-8 leading-relaxed max-w-xl mx-auto">
            GreenBytes Ghana is at an exciting stage — growing demand, strong unit economics
            and a clear roadmap. Join us as a partner, distributor or investor.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/growth" className="btn-primary text-base px-8 py-4">
              View Growth &amp; Opportunity <ArrowRight size={18} />
            </Link>
            <Link href="/contact?type=investor" className="btn-secondary text-base px-8 py-4">
              Investor Enquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
