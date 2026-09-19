import { portfolioAssets } from "@/data/portfolio-assets";

const categories = portfolioAssets.gallery.categories.map((item) => ({
  ...item,
  accent: [
    "from-[#7f1d1d] via-[#a7393d] to-[#c8a95b]",
    "from-[#a17d46] via-[#d9b57a] to-[#f7e8d2]",
    "from-[#403025] via-[#7a5a3d] to-[#d9b57a]",
    "from-[#2d1f1c] via-[#5d3e35] to-[#b48a68]",
  ][portfolioAssets.gallery.categories.indexOf(item)],
}));

export default function CategoryCards() {
  return (
    <section className="section-padding bg-[#fffdf7]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9a7340]">Our Signature</p>
          <h2 className="mt-4 text-4xl font-bold text-[#1d1d1d] md:text-5xl">Crafted for the moments that matter most</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((item) => (
            <div key={item.title} className="group overflow-hidden rounded-[28px] border border-[#f0e6d8] bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-52 overflow-hidden">
                {item.image ? (
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                ) : (
                  <div className={`h-full w-full bg-gradient-to-br ${item.accent}`} />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/30 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#1c1c1c]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#4d4d4d]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
