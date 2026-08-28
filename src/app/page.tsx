import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Leaf,
  TrendingDown,
  Sun,
  ShieldCheck,
  Users,
  Globe,
  CheckCircle,
  BarChart3,
  Heart,
  Sprout,
  Zap,
  Package,
  Star,
} from "lucide-react";

export const metadata: Metadata = {
  title: "GreenBytes Ghana | Climate-Smart Rabbit Feed for Ghana's Farmers",
  description:
    "GreenBytes Ghana produces affordable, locally sourced, organic and climate-smart rabbit feed. 40% cheaper than imports. Year-round availability for Ghanaian rabbit farmers.",
};

const problems = [
  {
    stat: "70%",
    label: "Farmer Exit Rate",
    desc: "70% of rabbit farmers have exited the industry due to unsustainable feed costs (B&FT 2024).",
    icon: TrendingDown,
    color: "from-red-50 to-red-100",
    statColor: "text-red-600",
    iconColor: "text-red-500",
  },
  {
    stat: "60–80%",
    label: "Earnings Spent on Feed",
    desc: "Rabbit farmers can spend 60–80% of their daily earnings buying feed alone.",
    icon: BarChart3,
    color: "from-orange-50 to-orange-100",
    statColor: "text-orange-600",
    iconColor: "text-orange-500",
  },
  {
    stat: "300%",
    label: "Feed Cost Increase",
    desc: "Feed costs increased by over 300% between 2017 and 2023, making farming unviable.",
    icon: TrendingDown,
    color: "from-amber-50 to-amber-100",
    statColor: "text-amber-600",
    iconColor: "text-amber-500",
  },
  {
    stat: "20–40%",
    label: "Rabbit Mortality Rate",
    desc: "Farmers can lose 20–40% of their rabbits due to nutritional deficiencies from poor feed.",
    icon: Heart,
    color: "from-rose-50 to-rose-100",
    statColor: "text-rose-600",
    iconColor: "text-rose-500",
  },
  {
    stat: "Seasonal",
    label: "Grass Shortages",
    desc: "Severe grass shortages occur every dry season, leaving farmers with no affordable feed options.",
    icon: Sun,
    color: "from-yellow-50 to-yellow-100",
    statColor: "text-yellow-700",
    iconColor: "text-yellow-600",
  },
  {
    stat: "Crisis",
    label: "Imported Feed Reliance",
    desc: "Expensive imported feed is not tailored to Ghana's dry-season conditions and farming realities.",
    icon: Globe,
    color: "from-blue-50 to-blue-100",
    statColor: "text-blue-600",
    iconColor: "text-blue-500",
  },
];

const benefits = [
  { icon: TrendingDown, label: "40% Cheaper than imports", color: "text-green-700" },
  { icon: Sun, label: "Climate-resilient formulation", color: "text-amber-600" },
  { icon: Package, label: "Available year-round", color: "text-green-700" },
  { icon: CheckCircle, label: "Nutritionally balanced", color: "text-amber-600" },
  { icon: Heart, label: "Designed to reduce mortality", color: "text-green-700" },
  { icon: Leaf, label: "Zero chemicals — 100% organic", color: "text-amber-600" },
  { icon: Globe, label: "Locally produced in Ghana", color: "text-green-700" },
];

const advantages = [
  {
    icon: TrendingDown,
    title: "Affordable",
    desc: "Our climate-smart rabbit feed is approximately 40% cheaper than imported alternatives, making profitable rabbit farming genuinely accessible to Ghanaian farmers.",
    color: "bg-green-50 border-green-200",
    iconBg: "bg-green-100",
    iconColor: "text-green-700",
  },
  {
    icon: Sun,
    title: "Climate-Smart",
    desc: "Designed to remain available and effective despite seasonal challenges and dry-season grass shortages that cripple conventional feed supply chains.",
    color: "bg-amber-50 border-amber-200",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-700",
  },
  {
    icon: Globe,
    title: "Locally Produced",
    desc: "GreenBytes Ghana uses locally sourced materials, reducing dependence on foreign supply chains and supporting Ghana's agricultural economy.",
    color: "bg-emerald-50 border-emerald-200",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-700",
  },
  {
    icon: Leaf,
    title: "Organic",
    desc: "Formulated from organic grasses, hydroponic fodder and drought-resistant local plants with zero chemicals — safe, clean, and natural.",
    color: "bg-lime-50 border-lime-200",
    iconBg: "bg-lime-100",
    iconColor: "text-lime-700",
  },
  {
    icon: Users,
    title: "Farmer-Focused",
    desc: "Built around the real challenges facing Ghanaian rabbit farmers — affordability, availability, and nutritional quality designed for local realities.",
    color: "bg-teal-50 border-teal-200",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-700",
  },
  {
    icon: Sprout,
    title: "Sustainable",
    desc: "GreenBytes Ghana promotes circular agriculture and climate adaptation, contributing to a more sustainable and resilient Ghanaian food system.",
    color: "bg-green-50 border-green-200",
    iconBg: "bg-green-100",
    iconColor: "text-green-700",
  },
];

const impactStats = [
  { value: "50+", label: "Direct Jobs Created", icon: Users, color: "text-green-700" },
  { value: "100+", label: "Women & Youth Empowered", icon: Heart, color: "text-amber-600" },
  { value: "20%", label: "Farmer Income Increase", icon: TrendingDown, color: "text-green-700" },
  { value: "40%", label: "Reduction in Rabbit Mortality", icon: ShieldCheck, color: "text-amber-600" },
];

const sdgs = [
  { number: "1", title: "No Poverty", color: "bg-red-500", desc: "Improving farmer incomes and livelihoods" },
  { number: "2", title: "Zero Hunger", color: "bg-yellow-500", desc: "Boosting sustainable protein production" },
  { number: "8", title: "Decent Work", color: "bg-red-600", desc: "Creating agricultural employment" },
  { number: "12", title: "Responsible Production", color: "bg-amber-600", desc: "Sustainable livestock feed production" },
  { number: "13", title: "Climate Action", color: "bg-green-600", desc: "Climate-smart agricultural solutions" },
];

const marketData = [
  { label: "TAM", value: "$6.4M", desc: "West Africa Rabbit Feed Market" },
  { label: "SAM", value: "$1M", desc: "Ghana Rabbit Feed Market" },
  { label: "SOM", value: "$500K", desc: "Greater Accra & Cape Coast" },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-rabbits.jpg"
            alt="Healthy rabbits on a sustainable farm in Ghana"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f1f15]/90 via-[#1a4a2e]/80 to-[#2d6a4f]/70" />
        </div>

        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full border border-white" />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full border border-white" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8">
            <Leaf size={14} className="text-amber-400" />
            <span className="text-amber-300 text-sm font-semibold tracking-wide uppercase">
              Ghanaian Agricultural Innovation
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Climate-Smart Rabbit Feed
            <span className="block text-amber-400">for a Sustainable</span>
            <span className="block">Protein Future</span>
          </h1>

          <p className="text-lg sm:text-xl text-green-100 max-w-2xl mx-auto mb-4 leading-relaxed">
            Affordable, locally produced and climate-smart rabbit feed designed for Ghanaian farmers.
          </p>
          <p className="text-base text-green-200/80 max-w-xl mx-auto mb-10">
            Sustainable • Affordable • Accessible Livestock Feed for Ghana&apos;s Protein Market
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact?type=buy" className="btn-primary text-base px-8 py-4">
              Get Our Feed <ArrowRight size={18} />
            </Link>
            <Link href="/contact?type=partner" className="btn-secondary text-base px-8 py-4">
              Partner With Us
            </Link>
          </div>

          {/* Quick stats */}
          <div className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-black text-amber-400">300kg</div>
              <div className="text-xs text-green-300 mt-1">Feed Produced</div>
            </div>
            <div className="text-center border-x border-white/20">
              <div className="text-2xl sm:text-3xl font-black text-amber-400">15+</div>
              <div className="text-xs text-green-300 mt-1">Farmers Tested</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-black text-amber-400">40%</div>
              <div className="text-xs text-green-300 mt-1">Cheaper than Imports</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label">Who We Are</span>
              <h2 className="section-title mt-3 mb-6">
                A Ghanaian Agricultural Company Solving Real Farmer Problems
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                GreenBytes Ghana is a Ghanaian agricultural innovation company focused on producing
                sustainable, affordable and accessible livestock feed solutions. Our current focus
                is climate-smart rabbit feed designed around the realities of Ghanaian farmers.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We are addressing the critical challenges facing Ghana&apos;s rabbit farming sector
                — building a more affordable, sustainable and climate-resilient future, one farmer
                at a time.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  "High feed costs",
                  "Seasonal shortages",
                  "Expensive imported feed",
                  "Nutritional deficiencies",
                  "Rabbit mortality",
                  "Low farmer profitability",
                ].map((challenge) => (
                  <div key={challenge} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                    <span className="text-sm text-gray-600 font-medium">{challenge}</span>
                  </div>
                ))}
              </div>
              <Link href="/about" className="btn-outline-green">
                Learn More About Us <ArrowRight size={16} />
              </Link>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src="/images/farmer.jpg"
                  alt="Ghanaian farmer with healthy rabbits"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-5 border border-green-100 max-w-[200px]">
                <div className="text-3xl font-black text-green-800 mb-1">8,000+</div>
                <div className="text-sm text-gray-600">Rabbit farmers in Ghana need better feed solutions</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-amber-500 rounded-xl shadow-xl p-5 max-w-[180px]">
                <div className="text-2xl font-black text-white mb-1">GHS 320</div>
                <div className="text-sm text-white/90">Per 50kg bag — 40% less than imports</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE PROBLEM ── */}
      <section className="py-20" style={{ background: "linear-gradient(180deg, #f5f0e8 0%, #faf8f4 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="section-label">The Challenge</span>
            <h2 className="section-title mt-3 mb-4">
              Why Rabbit Farmers Cannot Scale
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Ghana&apos;s rabbit farming sector is facing a deep crisis. The data tells a stark story
              — and GreenBytes Ghana was built to change it.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem) => (
              <div
                key={problem.label}
                className={`rounded-2xl bg-gradient-to-br ${problem.color} border border-white p-6 card-hover`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`text-4xl font-black ${problem.statColor}`}>{problem.stat}</div>
                  <problem.icon size={24} className={problem.iconColor} />
                </div>
                <div className="font-bold text-gray-800 mb-2">{problem.label}</div>
                <p className="text-sm text-gray-600 leading-relaxed">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR SOLUTION ── */}
      <section className="py-20 gradient-green text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full border-2 border-white -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border-2 border-white translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">Our Solution</span>
              <h2 className="section-title-white mt-3 mb-4">
                The GreenBytes Ghana Solution
              </h2>
              <p className="text-2xl font-bold text-amber-300 mb-6">
                Organic • Affordable • Climate-Smart Rabbit Feed
              </p>
              <p className="text-green-100 leading-relaxed mb-6 text-lg">
                GreenBytes Ghana produces locally sourced rabbit feed designed around Ghanaian
                environmental and farming conditions — solving the exact problems that are driving
                farmers out of the industry.
              </p>
              <div className="mb-6">
                <p className="text-green-300 text-sm font-semibold uppercase tracking-wide mb-3">
                  Formulated From:
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Organic Grasses", "Hydroponic Fodder", "Drought-Resistant Plants", "Zero Chemicals"].map((item) => (
                    <span
                      key={item}
                      className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-green-100 font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {benefits.map((b) => (
                  <div key={b.label} className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-amber-400 flex-shrink-0" />
                    <span className="text-sm text-green-100">{b.label}</span>
                  </div>
                ))}
              </div>
              <Link href="/solution" className="btn-primary">
                Explore Our Solution <ArrowRight size={16} />
              </Link>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src="/images/rabbit-feed.jpg"
                  alt="GreenBytes Ghana organic rabbit feed pellets"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 left-4 right-4 bg-white rounded-xl p-5 shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">Price per 50kg</div>
                    <div className="text-3xl font-black text-green-800">GHS 320</div>
                    <div className="text-xs text-amber-600 font-semibold mt-0.5">40% cheaper than imports</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">Gross Margin</div>
                    <div className="text-3xl font-black text-amber-600">33–40%</div>
                    <div className="text-xs text-gray-500 font-semibold mt-0.5">Farmer profitability</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY GREENBYTES GHANA ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="section-label">Why Choose Us</span>
            <h2 className="section-title mt-3 mb-4">
              What Makes GreenBytes Ghana Different
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We are not simply selling feed. We are building a more resilient future for rabbit
              farming in Ghana.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv) => (
              <div
                key={adv.title}
                className={`rounded-2xl border ${adv.color} p-7 card-hover`}
              >
                <div className={`w-12 h-12 ${adv.iconBg} rounded-xl flex items-center justify-center mb-5`}>
                  <adv.icon size={22} className={adv.iconColor} />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-3">{adv.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRACTION ── */}
      <section className="py-20" style={{ background: "linear-gradient(180deg, #f5f0e8 0%, #faf8f4 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="section-label">Our Traction</span>
            <h2 className="section-title mt-3 mb-4">
              What We&apos;ve Achieved So Far
            </h2>
            <p className="text-gray-600 text-lg">
              GreenBytes Ghana is already making an impact — and the demand is growing.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <div className="stat-card">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Package size={24} className="text-green-700" />
              </div>
              <div className="text-4xl font-black text-green-800 mb-2">300kg</div>
              <div className="font-bold text-gray-800 mb-2">Feed Produced</div>
              <p className="text-sm text-gray-500">Initial production completed and delivered to test farmers</p>
            </div>
            <div className="stat-card">
              <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users size={24} className="text-amber-700" />
              </div>
              <div className="text-4xl font-black text-amber-700 mb-2">15</div>
              <div className="font-bold text-gray-800 mb-2">Farmers Tested</div>
              <p className="text-sm text-gray-500">Feed tested with farmers who provided highly positive feedback</p>
            </div>
            <div className="stat-card">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap size={24} className="text-green-700" />
              </div>
              <div className="text-4xl font-black text-green-800 mb-2">Growing</div>
              <div className="font-bold text-gray-800 mb-2">Demand</div>
              <p className="text-sm text-gray-500">Early demand is already exceeding our current production capacity</p>
            </div>
          </div>

          {/* Additional traction points */}
          <div className="bg-white rounded-2xl border border-green-100 p-8 mb-10 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle size={18} className="text-green-700" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Community Partnerships</h3>
                  <p className="text-sm text-gray-600">Active partnerships with community farmers and cooperative groups across our operating regions.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Star size={18} className="text-amber-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Positive Farmer Feedback</h3>
                  <p className="text-sm text-gray-600 italic">Farmer testimonials coming soon. Our test farmers have provided highly positive responses to GreenBytes Ghana feed.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/contact?type=farmer" className="btn-primary text-base px-8 py-4">
              Become a GreenBytes Ghana Farmer Customer <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── MARKET OPPORTUNITY ── */}
      <section className="py-20 bg-[#0f1f15] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 rounded-full border border-white" />
          <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full border border-white" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">Market Potential</span>
            <h2 className="section-title-white mt-3 mb-4">
              A Growing Opportunity in Sustainable Livestock Feed
            </h2>
            <p className="text-green-200 text-lg leading-relaxed">
              The market for rabbit feed in Ghana and West Africa represents a significant and
              largely untapped opportunity.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
            {marketData.map((m, i) => (
              <div
                key={m.label}
                className={`rounded-2xl p-8 text-center ${
                  i === 1
                    ? "bg-amber-500 shadow-2xl scale-105"
                    : "bg-white/10 border border-white/20"
                }`}
              >
                <div className={`text-sm font-bold uppercase tracking-widest mb-4 ${i === 1 ? "text-amber-900" : "text-amber-400"}`}>
                  {m.label}
                </div>
                <div className={`text-5xl font-black mb-3 ${i === 1 ? "text-white" : "text-white"}`}>
                  {m.value}
                </div>
                <div className={`text-sm font-medium ${i === 1 ? "text-amber-900" : "text-green-300"}`}>
                  {m.desc}
                </div>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "9–13kg", label: "Ghana meat consumption per capita vs 40kg+ global average", icon: Globe },
              { value: "8,000+", label: "Rabbit farmers nationwide (unofficial estimate)", icon: Users },
              { value: "40+", label: "Offspring per female rabbit yearly", icon: Leaf },
              { value: "Rising", label: "Middle-class growth & urbanization driving demand", icon: TrendingDown },
            ].map((d) => (
              <div key={d.label} className="bg-white/10 border border-white/20 rounded-xl p-5 text-center">
                <d.icon size={20} className="text-amber-400 mx-auto mb-3" />
                <div className="text-2xl font-black text-white mb-2">{d.value}</div>
                <div className="text-xs text-green-300 leading-relaxed">{d.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMPACT ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="section-label">Our Impact</span>
            <h2 className="section-title mt-3 mb-4">
              Growing Farmers. Creating Opportunities. Strengthening Food Security.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              GreenBytes Ghana aims to make rabbit farming more profitable and accessible
              while contributing to Ghana&apos;s food security.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {impactStats.map((s) => (
              <div key={s.label} className="stat-card">
                <s.icon size={28} className={`${s.color} mx-auto mb-4`} />
                <div className={`text-4xl font-black ${s.color} mb-2`}>{s.value}</div>
                <div className="text-sm font-semibold text-gray-700">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SDGs ── */}
      <section className="py-16" style={{ background: "linear-gradient(180deg, #f5f0e8 0%, #faf8f4 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label">SDG Alignment</span>
            <h2 className="section-title mt-3 mb-4">Aligned with the UN Sustainable Development Goals</h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              GreenBytes Ghana&apos;s work aligns with these global sustainable development goals.
              (This does not represent an official UN certification or partnership.)
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {sdgs.map((sdg) => (
              <div key={sdg.number} className="flex items-center gap-3 bg-white rounded-xl border border-gray-100 shadow-sm px-5 py-4 max-w-[220px] card-hover">
                <div className={`${sdg.color} w-12 h-12 rounded-xl flex items-center justify-center text-white font-black text-lg flex-shrink-0`}>
                  {sdg.number}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">SDG {sdg.number}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{sdg.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERSHIP CTA ── */}
      <section className="py-20 gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: "url('/images/hydroponic.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">Partner With Us</span>
          <h2 className="section-title-white mt-4 mb-6">
            Let&apos;s Build a Sustainable Protein Future Together
          </h2>
          <p className="text-green-100 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Whether you are a farmer, cooperative, agricultural shop, distributor, business partner
            or potential investor — GreenBytes Ghana welcomes you to join our mission.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {["Farmer Cooperatives", "Agricultural Shops", "Commercial Farms", "Distributors", "Business Partners", "Investors"].map((p) => (
              <span key={p} className="bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm text-green-100 font-medium">
                {p}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact?type=partner" className="btn-primary text-base px-8 py-4">
              Partner With GreenBytes Ghana <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="btn-secondary text-base px-8 py-4">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
