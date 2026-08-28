"use client";

import { useState } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";

interface ContactFormProps {
  enquiryTypes: string[];
}

export default function ContactForm({ enquiryTypes }: ContactFormProps) {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    organization: "",
    enquiryType: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({
          fullName: "",
          phone: "",
          email: "",
          organization: "",
          enquiryType: "",
          message: "",
        });
      } else {
        const data = await res.json();
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={40} className="text-green-700" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">Enquiry Sent!</h3>
        <p className="text-gray-600 max-w-md mx-auto mb-6 leading-relaxed">
          Thank you for reaching out to GreenBytes Ghana. We have received your enquiry and
          will get back to you as soon as possible.
        </p>
        <p className="text-sm text-gray-500 mb-6">
          You can also reach us directly at{" "}
          <a href="mailto:green.bytes.feed@gmail.com" className="text-green-700 font-semibold hover:underline">
            green.bytes.feed@gmail.com
          </a>
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="btn-outline-green"
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Row 1: Name & Phone */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            value={form.fullName}
            onChange={handleChange}
            placeholder="Your full name"
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all placeholder-gray-400"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="e.g. 0558 487 942"
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all placeholder-gray-400"
          />
        </div>
      </div>

      {/* Row 2: Email & Organization */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all placeholder-gray-400"
          />
        </div>
        <div>
          <label htmlFor="organization" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Farmer / Organization Name
          </label>
          <input
            id="organization"
            name="organization"
            type="text"
            value={form.organization}
            onChange={handleChange}
            placeholder="Your farm or organization"
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all placeholder-gray-400"
          />
        </div>
      </div>

      {/* Enquiry Type */}
      <div>
        <label htmlFor="enquiryType" className="block text-sm font-semibold text-gray-700 mb-1.5">
          Enquiry Type <span className="text-red-500">*</span>
        </label>
        <select
          id="enquiryType"
          name="enquiryType"
          required
          value={form.enquiryType}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-white"
        >
          <option value="">Select enquiry type...</option>
          {enquiryTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="Tell us about your farm, your needs, or your enquiry..."
          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all placeholder-gray-400 resize-none"
        />
      </div>

      {/* Error */}
      {status === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-sm">
          {errorMsg}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary w-full justify-center text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Sending Enquiry...
          </>
        ) : (
          <>
            <Send size={18} />
            Send Enquiry
          </>
        )}
      </button>

      <p className="text-xs text-gray-400 text-center">
        By submitting this form, you agree that GreenBytes Ghana may contact you regarding your enquiry.
      </p>
    </form>
  );
}
