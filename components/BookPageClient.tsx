"use client";

import { useSearchParams } from "next/navigation";
import BookingForm from "@/components/BookingForm";

export default function BookPageClient() {
  const searchParams = useSearchParams();
  const designValue = searchParams.get("design") ?? "";

  return (
    <main className="section-padding bg-[#fffdf7]">
      <div className="mx-auto max-w-3xl">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.28em] text-[#9a7340]">Book a Design</p>
        <h1 className="mt-4 text-center text-5xl font-bold text-[#1d1d1d]">Request Your Custom Blouse</h1>
        <p className="mt-4 text-center text-lg text-[#4d4d4d]">Share your preferences and we will reach out with the right design plan.</p>
        <div className="mt-10">
          <BookingForm initialDesign={designValue} />
        </div>
      </div>
    </main>
  );
}
