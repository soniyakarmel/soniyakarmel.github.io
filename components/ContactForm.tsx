"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const payload = {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
        source: "contact",
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Submission failed");
      }

      setSubmitted(true);
      e.currentTarget.reset();
    } catch (error) {
      console.error(error);
      alert("There was a problem sending your message. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-[28px] border border-[#f0e6d8] bg-white p-6 shadow-soft">
      <label className="block space-y-2 text-sm font-medium text-[#1d1d1d]">
        <span>Name</span>
        <input name="name" required className="w-full rounded-xl border border-[#eadcc0] px-4 py-3 outline-none focus:border-[#6d071a]" placeholder="Your name" />
      </label>

      <label className="block space-y-2 text-sm font-medium text-[#1d1d1d]">
        <span>Email</span>
        <input type="email" name="email" required className="w-full rounded-xl border border-[#eadcc0] px-4 py-3 outline-none focus:border-[#6d071a]" placeholder="Your email" />
      </label>

      <label className="block space-y-2 text-sm font-medium text-[#1d1d1d]">
        <span>Message</span>
        <textarea name="message" rows={5} required className="w-full rounded-xl border border-[#eadcc0] px-4 py-3 outline-none focus:border-[#6d071a]" placeholder="Tell us about your design idea" />
      </label>

      <button type="submit" disabled={loading} className="w-full rounded-full bg-maroon px-6 py-3 text-base font-semibold text-white transition hover:bg-[#4a0812] disabled:cursor-not-allowed disabled:opacity-70">
        {loading ? "Sending..." : "Send message"}
      </button>

      {submitted && <p className="text-sm font-medium text-[#1d1d1d]">Your message has been sent successfully.</p>}
    </form>
  );
}
