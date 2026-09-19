import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function FloatingWhatsapp() {
  return (
    <Link
      href={`https://wa.me/${SITE.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={26} />
    </Link>
  );
}
