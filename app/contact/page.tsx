import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/constants";

export default function ContactPage() {
  return (
    <main className="section-padding bg-[#fffdf7]">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9a7340]">Get in touch</p>
          <h1 className="mt-4 text-5xl font-bold text-[#1d1d1d]">Let’s create your perfect design</h1>
          <p className="mt-5 text-lg leading-8 text-[#4d4d4d]">
            Whether you’re planning a bridal look or a festive statement blouse, our team can guide you through fabric, fit, and embroidery ideas.
          </p>

          <div className="mt-8 space-y-3 text-base text-[#1d1d1d]">
            <p><strong>Phone:</strong> {SITE.phone}</p>
            <p><strong>Email:</strong> {SITE.email}</p>
            <p><strong>Location:</strong> {SITE.address}</p>
          </div>
        </div>

        <ContactForm />
      </div>
    </main>
  );
}
