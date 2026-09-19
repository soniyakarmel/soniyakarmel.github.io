"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/constants";
import { buildBookingMessage } from "@/lib/whatsapp";

type FormState = {
  name: string;
  mobile: string;
  address: string;
  design: string;
  date: string;
  time: string;
  notes: string;
};

const initialState: FormState = {
  name: "",
  mobile: "",
  address: "",
  design: "",
  date: "",
  time: "",
  notes: "",
};

export default function BookingForm({ initialDesign = "" }: { initialDesign?: string }) {
  const [form, setForm] = useState<FormState>({ ...initialState, design: initialDesign });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setForm((prev) => ({ ...prev, design: prev.design || initialDesign }));
  }, [initialDesign]);

  const updateField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "booking" }),
      });

      const message = buildBookingMessage(form);
      const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;

      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      setSubmitted(true);
      setForm({ ...initialState, design: initialDesign });
    } catch (error) {
      console.error(error);
      alert("There was a problem sending your booking request. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-[28px] border border-[#f0e6d8] bg-white p-6 shadow-soft">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-[#1d1d1d]">
          <span>Name</span>
          <input required value={form.name} onChange={(e) => updateField("name", e.target.value)} className="w-full rounded-xl border border-[#eadcc0] px-4 py-3 outline-none ring-0 focus:border-[#6d071a]" placeholder="Your full name" />
        </label>

        <label className="space-y-2 text-sm font-medium text-[#1d1d1d]">
          <span>Mobile</span>
          <input required value={form.mobile} onChange={(e) => updateField("mobile", e.target.value)} className="w-full rounded-xl border border-[#eadcc0] px-4 py-3 outline-none ring-0 focus:border-[#6d071a]" placeholder="Your mobile number" />
        </label>
      </div>

      <label className="block space-y-2 text-sm font-medium text-[#1d1d1d]">
        <span>Address</span>
        <input required value={form.address} onChange={(e) => updateField("address", e.target.value)} className="w-full rounded-xl border border-[#eadcc0] px-4 py-3 outline-none ring-0 focus:border-[#6d071a]" placeholder="Your residential address" />
      </label>

      <label className="block space-y-2 text-sm font-medium text-[#1d1d1d]">
        <span>Design interest</span>
        <input required value={form.design} onChange={(e) => updateField("design", e.target.value)} className="w-full rounded-xl border border-[#eadcc0] px-4 py-3 outline-none ring-0 focus:border-[#6d071a]" placeholder="Bridal blouse, floral handwork, etc." />
      </label>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-[#1d1d1d]">
          <span>Preferred date</span>
          <input type="date" value={form.date} onChange={(e) => updateField("date", e.target.value)} className="w-full rounded-xl border border-[#eadcc0] px-4 py-3 outline-none ring-0 focus:border-[#6d071a]" />
        </label>

        <label className="space-y-2 text-sm font-medium text-[#1d1d1d]">
          <span>Preferred time</span>
          <input type="time" value={form.time} onChange={(e) => updateField("time", e.target.value)} className="w-full rounded-xl border border-[#eadcc0] px-4 py-3 outline-none ring-0 focus:border-[#6d071a]" />
        </label>
      </div>

      <label className="block space-y-2 text-sm font-medium text-[#1d1d1d]">
        <span>Notes</span>
        <textarea rows={5} value={form.notes} onChange={(e) => updateField("notes", e.target.value)} className="w-full rounded-xl border border-[#eadcc0] px-4 py-3 outline-none ring-0 focus:border-[#6d071a]" placeholder="Tell us about your preferred style or fitting notes" />
      </label>

      <button type="submit" disabled={loading} className="w-full rounded-full bg-maroon px-6 py-3 text-base font-semibold text-white transition hover:bg-[#4a0812] disabled:cursor-not-allowed disabled:opacity-70">
        {loading ? "Sending request..." : "Request booking"}
      </button>

      {submitted && <p className="text-sm font-medium text-[#1d1d1d]">Your booking request has been submitted successfully.</p>}
    </form>
  );
}
