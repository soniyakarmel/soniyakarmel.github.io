"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/works", label: "Types of Work" },
  { href: "/book", label: "Book Service" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#f0e6d8] bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/logo-primary.svg"
            alt="Aari Work Blouse Studio logo"
            className="h-11 w-11 rounded-full border border-[#eadcc0] bg-[#fffaf3] p-1 shadow-sm"
          />
          <div>
            <div className="text-lg font-bold tracking-[0.16em] text-maroon uppercase">Aari Studio</div>
            <div className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#5f4d3f]">Blouse couture</div>
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-[#2c2c2c] transition hover:text-maroon">
              {item.label}
            </Link>
          ))}
        </div>

        <button
          aria-label="Toggle menu"
          className="rounded-full border border-[#eadcc0] p-2 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-[#f0e6d8] bg-white px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-base font-medium text-[#2c2c2c]" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
