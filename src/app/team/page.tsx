import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, User, Briefcase, FlaskConical, Megaphone } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Team | GreenBytes Ghana",
  description:
    "Meet the people behind GreenBytes Ghana — Helena Acquah (CEO & Marketing Lead), Sharon Naa Adams (Research & Innovation Lead),Rafik Abubakar Tech and Media Lead and Awe Jacob (Operations & Business Lead).",
};

const team = [
  {
    name: "Helena Acquah",
    role: "CEO & Marketing Lead",
    experience: "3 years' experience marketing agricultural products",
    bio: "Helena leads GreenBytes Ghana's team coordination and marketing strategy. With 3 years of experience managing a startup and marketing agricultural products, She drives community outreach, farmer engagement and brand awareness across GreenBytes Ghana's target markets.",
    icon: Megaphone,
    photo: "/helena.jpg",
    color: "bg-green-50 border-green-200",
    iconBg: "bg-green-100",
    iconColor: "text-green-700",
    accent: "#1a4a2e",
  },
  {
    name: "Sharon Naa Adams",
    role: "Research & Innovation Lead",
    experience: "4 years' research experience",
    bio: "Sharon leads GreenBytes Ghana's research and product development. With 4 years of research experience, She is responsible for the formulation and development of our climate-smart rabbit feed — ensuring it meets the nutritional and sustainability standards that set GreenBytes Ghana apart.",
    icon: FlaskConical,
    photo: "/sharon.jpg",
    color: "bg-amber-50 border-amber-200",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-700",
    accent: "#c9a227",
  },
  {
    name: "Rafik Abubakar",
    role: "Tech and Media Lead",
    experience: "7 years' App development experience",
    bio: "Rafik leads GreenBytes Ghana's online social presence and brand development team. With 7 years of research experience, he is responsible for the design and development of the company's mobile app, brand guides and social media campaigns.",
    icon: FlaskConical,
    photo: "/rafik.jpg",
    color: "bg-amber-50 border-amber-200",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-700",
    accent: "#c9a227",
  },
  {
    name: "Awe Jacob",
    role: "Operations & Business Lead",
    experience: "3 years' business management experience; and fish farmer",
    bio: "Awe leads GreenBytes Ghana's business operations and supply chain management. With 3 years of business management experience and hands-on experience as a fish farmer, he brings both operational expertise and genuine farmer insight to everything GreenBytes Ghana does.",
    icon: Briefcase,
    photo: "/papajh.jpg",
    color: "bg-teal-50 border-teal-200",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-700",
    accent: "#2d6a4f",
  },
];

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#0f1f15] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 rounded-full border border-white" />
          <div className="absolute bottom-0 left-10 w-96 h-96 rounded-full border border-white" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">The Team</span>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mt-4 mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            The People Behind
            <span className="block text-amber-400">GreenBytes Ghana</span>
          </h1>
          <p className="text-green-100 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            A dedicated team combining agricultural research, marketing and business
            operations experience — united by a shared mission to transform rabbit farming in Ghana.
          </p>
        </div>
      </section>

      {/* Team Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className={`rounded-2xl border ${member.color} overflow-hidden card-hover`}
              >
              {/* Team Member Photo */}
                 <div
                   className="relative h-64 flex items-center justify-center overflow-hidden"
                   style={{
                   background: `linear-gradient(135deg, ${member.accent}22 0%, ${member.accent}44 100%)`
                   }}
                   >
                   <img
                   src={member.photo}
                   alt={member.name}
  className="w-full h-full object-cover object-[center_20%]"
                   />
                  </div>

                {/* Info */}
                <div className="p-7">
                  <div className={`w-10 h-10 ${member.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                    <member.icon size={18} className={member.iconColor} />
                  </div>
                  <h2
                    className="text-xl font-black text-gray-900 mb-1"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {member.name}
                  </h2>
                  <p className={`font-bold text-sm mb-2 ${member.iconColor}`}>{member.role}</p>
                  <p className="text-xs text-gray-400 font-medium mb-4 italic">{member.experience}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Team ethos */}
          <div className="mt-14 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100 p-10 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Shared Mission</h2>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto text-lg mb-6">
              The GreenBytes Ghana team combines agricultural research, marketing and business
              operations with authentic farming experience. We are not just building a company —
              we are building a solution we believe in, for farmers we understand.
            </p>
            <p className="text-green-700 font-bold italic text-xl">
              &ldquo;Feeding Ghana Sustainably, One Farmer at a Time.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-16" style={{ background: "linear-gradient(180deg, #f5f0e8 0%, #faf8f4 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Work With Our Team</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Have a question? Want to partner with GreenBytes Ghana? Our team is ready
                to talk to farmers, distributors, investors and organizational partners.
              </p>
              <Link href="/contact" className="btn-primary">
                Contact the Team <ArrowRight size={16} />
              </Link>
            </div>
            <div className="bg-[#1a4a2e] rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-3">Our Vision</h3>
              <p className="text-green-100 text-sm leading-relaxed mb-4">
                &ldquo;To become West Africa&apos;s leading producer of sustainable livestock feed.&rdquo;
              </p>
              <p className="text-green-200 text-sm leading-relaxed">
                A team with deep agricultural roots, building a company with regional ambitions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
