import { Suspense } from "react";
import BookPageClient from "@/components/BookPageClient";

export default function BookPage() {
  return (
    <Suspense fallback={<main className="section-padding bg-[#fffdf7]"><div className="mx-auto max-w-3xl"><div className="rounded-[28px] border border-[#f0e6d8] bg-white p-6 shadow-soft">Loading...</div></div></main>}>
      <BookPageClient />
    </Suspense>
  );
}
