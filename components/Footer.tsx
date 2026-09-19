import Link from "next/link";
import { SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="mt-20 bg-[#6d071a] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <h3 className="mb-4 text-xl font-bold">Aari Work Blouse Studio</h3>
          <p className="text-sm text-white/80">
            Luxury handcrafted Aari embroidery blouse designs for bridal and special occasions.
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-semibold">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm text-white/80">
            <Link href="/">Home</Link>
            <Link href="/works">Types of Work</Link>
            <Link href="/book">Book Service</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h4 className="mb-4 font-semibold">Categories</h4>
          <div className="flex flex-col gap-2 text-sm text-white/80">
            <span>Bridal Design</span>
            <span>Hand Work</span>
            <span>Medium Work</span>
            <span>Blouse Stitching</span>
          </div>
        </div>

        <div>
          <h4 className="mb-4 font-semibold">Contact</h4>
          <div className="flex flex-col gap-2 text-sm text-white/80">
            <span>{SITE.phone}</span>
            <span>{SITE.email}</span>
            <span>{SITE.address}</span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 py-5 text-center text-sm text-white/75">
        © 2026 Aari Work Blouse Studio
      </div>
    </footer>
  );
}
