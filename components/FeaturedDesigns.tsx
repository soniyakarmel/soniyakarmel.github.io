import { portfolioAssets } from "@/data/portfolio-assets";

const galleryItems = portfolioAssets.gallery.featured;

export default function FeaturedDesigns() {
  return (
    <section className="section-padding bg-[#f8f4ed]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9a7340]">Portfolio Gallery</p>
            <h2 className="mt-4 text-4xl font-bold text-[#1d1d1d] md:text-5xl">Signature bridal embroidery stories</h2>
          </div>
          <a href="/works" className="inline-flex text-sm font-semibold text-maroon md:inline-flex">
            View all designs →
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {galleryItems.map((design, index) => (
            <article
              key={design.name}
              className={`group relative overflow-hidden rounded-[28px] border border-[#f0e6d8] bg-white shadow-soft ${design.large ? "xl:col-span-2 xl:row-span-2" : ""}`}
            >
              <div className={`relative ${design.large ? "h-[440px]" : "h-72"} overflow-hidden`}>
                {design.image ? (
                  <img src={design.image} alt={design.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                ) : (
                  <div className={`h-full w-full bg-gradient-to-br ${[
                    "from-[#f3d7bb] via-[#d09d70] to-[#7b3f2d]",
                    "from-[#e8d9c4] via-[#d2a676] to-[#5d1d1d]",
                    "from-[#e4d9cc] via-[#a2744c] to-[#42342a]",
                    "from-[#f0d9c0] via-[#c58f63] to-[#4a3328]",
                  ][index]}`} />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1d1d1d]/60 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[#f4d9a8]">{design.tag}</p>
                  <h3 className="mt-3 text-2xl font-semibold">{design.name}</h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
