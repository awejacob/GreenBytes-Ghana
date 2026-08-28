import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Users, Heart, TrendingUp, Shield, Leaf, Globe, RefreshCw, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Impact | GreenBytes Ghana Social & Environmental Impact",
  description:
    "GreenBytes Ghana creates social and environmental impact: 50+ jobs, 100+ women & youth empowered, 20% farmer income increase, 40% reduction in rabbit mortality. Aligned with 5 UN SDGs.",
};

const socialImpact = [
  {
    value: "50+",
    label: "Direct Jobs Created",
    desc: "GreenBytes Ghana aims to create 50+ direct jobs through feed production, distribution and farm operations.",
    icon: Users,
    color: "text-green-700",
    bg: "bg-green-50",
    iconBg: "bg-green-100",
  },
  {
    value: "100+",
    label: "Women & Youth Empowered",
    desc: "We are committed to making rabbit farming accessible and profitable for women and young people across Ghana.",
    icon: Heart,
    color: "text-amber-600",
    bg: "bg-amber-50",
    iconBg: "bg-amber-100",
  },
  {
    value: "20%",
    label: "Farmer Income Increase",
    desc: "Lower feed costs translate directly into higher net income for rabbit farmers — improving livelihoods and household food security.",
    icon: TrendingUp,
    color: "text-green-700",
    bg: "bg-green-50",
    iconBg: "bg-green-100",
  },
  {
    value: "40%",
    label: "Reduction in Rabbit Mortality",
    desc: "Nutritionally balanced, high-quality feed addresses the deficiencies that cause 20–40% rabbit mortality rates under conventional feeding.",
    icon: Shield,
    color: "text-amber-600",
    bg: "bg-amber-50",
    iconBg: "bg-amber-100",
  },
];

const environmentalImpact = [
  {
    icon: RefreshCw,
    title: "Circular Agriculture",
    subtitle: "Waste → Fertilizer → Grass → Feed",
    desc: "GreenBytes Ghana promotes a circular agricultural model where organic waste from the farming process is converted into fertilizer, which grows the grass that feeds our production cycle.",
    color: "bg-green-50 border-green-200",
    iconColor: "text-green-700",
    iconBg: "bg-green-100",
  },
  {
    icon: Globe,
    title: "Lower Carbon Footprint",
    subtitle: "Local production reduces import reliance",
    desc: "By producing feed locally in Ghana, GreenBytes Ghana eliminates the carbon emissions associated with importing feed from abroad — reducing transportation and packaging waste.",
    color: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-700",
    iconBg: "bg-blue-100",
  },
  {
    icon: Zap,
    title: "Climate Adaptation",
    subtitle: "Designed for Ghana's climate realities",
    desc: "Hydroponic fodder systems and drought-resistant local plants allow GreenBytes Ghana to maintain feed production even during dry seasons when conventional grass supply fails.",
    color: "bg-amber-50 border-amber-200",
    iconColor: "text-amber-700",
    iconBg: "bg-amber-100",
  },
  {
    icon: Leaf,
    title: "Sustainable Production",
    subtitle: "Zero chemicals. Organic formulation.",
    desc: "GreenBytes Ghana develops livestock feed solutions that are both affordable and environmentally responsible — reducing the chemical inputs that degrade Ghanaian agricultural land.",
    color: "bg-emerald-50 border-emerald-200",
    iconColor: "text-emerald-700",
    iconBg: "bg-emerald-100",
  },
];

const sdgs = [
  {
    number: "1",
    title: "No Poverty",
    color: "bg-red-500",
    desc: "By reducing feed costs and increasing farmer profitability, GreenBytes Ghana helps lift rabbit farming households out of economic hardship.",
  },
  {
    number: "2",
    title: "Zero Hunger",
    color: "bg-yellow-500",
    desc: "More profitable rabbit farming means more sustainable protein production for Ghana's growing population and food security goals.",
  },
  {
    number: "8",
    title: "Decent Work & Economic Growth",
    color: "bg-red-600",
    desc: "GreenBytes Ghana creates agricultural jobs, empowers women and youth, and supports the growth of a sustainable Ghanaian agribusiness sector.",
  },
  {
    number: "12",
    title: "Responsible Production & Consumption",
    color: "bg-amber-600",
    desc: "Our circular agriculture model and organic production methods promote sustainable, responsible consumption patterns in the agricultural sector.",
  },
  {
    number: "13",
    title: "Climate Action",
    color: "bg-green-600",
    desc: "Climate-smart agricultural solutions that help Ghanaian farmers adapt to seasonal variability, drought and the impacts of climate change.",
  },
];

export default function ImpactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 gradient-green text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 rounded-full border border-white" />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full border border-white translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">Social & Environmental Impact</span>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mt-4 mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Impact
          </h1>
          <p className="text-green-100 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            Growing Farmers. Creating Opportunities. Strengthening Food Security.
          </p>
        </div>
      </section>

      {/* Social Impact */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="section-label">Social Impact</span>
            <h2 className="section-title mt-3 mb-4">
              Changing Lives Across Ghana&apos;s Farming Communities
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              GreenBytes Ghana aims to make rabbit farming more profitable and accessible while
              contributing to Ghana&apos;s food security and rural economic development.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {socialImpact.map((s) => (
              <div key={s.label} className={`rounded-2xl ${s.bg} border border-white p-8 text-center card-hover shadow-sm`}>
                <div className={`w-14 h-14 ${s.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-5`}>
                  <s.icon size={26} className={s.color} />
                </div>
                <div className={`text-5xl font-black ${s.color} mb-3`}>{s.value}</div>
                <div className="font-bold text-gray-900 mb-3 text-sm">{s.label}</div>
                <p className="text-xs text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Narrative */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-[#1a4a2e] rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">The Bigger Picture</h3>
              <p className="text-green-100 leading-relaxed mb-4">
                GreenBytes Ghana is not simply a feed company. We are part of a larger movement
                to make Ghanaian agriculture more productive, more profitable and more resilient.
              </p>
              <p className="text-green-100 leading-relaxed">
                By lowering feed costs, we increase farmer profitability. By improving nutritional
                quality, we reduce rabbit mortality. By maintaining year-round supply, we remove
                a critical barrier that has driven 70% of rabbit farmers out of the industry.
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Who We Empower</h3>
              <div className="space-y-3">
                {[
                  { emoji: "👩🏽‍🌾", label: "Women farmers entering agricultural entrepreneurship" },
                  { emoji: "👨🏽‍🎓", label: "Youth building livelihoods through rabbit farming" },
                  { emoji: "🏘️", label: "Smallholder farmers improving household food security" },
                  { emoji: "🤝", label: "Cooperatives gaining access to affordable, quality feed" },
                  { emoji: "🏭", label: "Commercial farms reducing production costs" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <span className="text-xl">{item.emoji}</span>
                    <span className="text-sm text-gray-700">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-20" style={{ background: "linear-gradient(180deg, #f5f0e8 0%, #faf8f4 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="section-label">Environmental Impact</span>
            <h2 className="section-title mt-3 mb-4">
              Agriculture That Works With the Climate
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              GreenBytes Ghana is building an agricultural model that is not only productive
              but genuinely sustainable — reducing environmental pressure while improving farmer outcomes.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {environmentalImpact.map((e) => (
              <div key={e.title} className={`rounded-2xl border p-7 ${e.color} card-hover`}>
                <div className={`w-12 h-12 ${e.iconBg} rounded-xl flex items-center justify-center mb-5`}>
                  <e.icon size={22} className={e.iconColor} />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-1">{e.title}</h3>
                <p className="text-sm font-semibold text-gray-500 mb-4">{e.subtitle}</p>
                <p className="text-gray-600 leading-relaxed text-sm">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDGs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="section-label">UN SDG Alignment</span>
            <h2 className="section-title mt-3 mb-4">
              Aligned with Global Sustainability Goals
            </h2>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto">
              GreenBytes Ghana&apos;s work aligns with the following United Nations Sustainable
              Development Goals. This does not represent an official UN certification or partnership.
            </p>
          </div>
          <div className="space-y-4 max-w-4xl mx-auto">
            {sdgs.map((sdg) => (
              <div key={sdg.number} className="flex gap-6 items-start bg-gray-50 rounded-2xl border border-gray-100 p-6 card-hover">
                <div className={`${sdg.color} w-16 h-16 rounded-xl flex flex-col items-center justify-center text-white flex-shrink-0`}>
                  <span className="text-xs font-bold">SDG</span>
                  <span className="text-2xl font-black">{sdg.number}</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">SDG {sdg.number}: {sdg.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{sdg.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0f1f15] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title-white mb-4">Join the Movement</h2>
          <p className="text-green-100 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
            Whether you want to buy feed, become a distribution partner or invest in
            Ghana&apos;s sustainable agricultural future — GreenBytes Ghana welcomes you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact?type=partner" className="btn-primary text-base px-8 py-4">
              Partner With Us <ArrowRight size={18} />
            </Link>
            <Link href="/sustainability" className="btn-secondary text-base px-8 py-4">
              Our Sustainability Story
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
