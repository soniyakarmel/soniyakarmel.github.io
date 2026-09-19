export default function AboutPreview() {
  return (
    <section className="section-padding bg-[#fffdf7]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-[32px] border border-[#f0e6d8] bg-gradient-to-br from-[#f3e8d5] via-[#e9d5ae] to-[#b88f5a] p-8 shadow-soft">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.7),_transparent_40%)]" />
          <div className="relative h-[420px] overflow-hidden rounded-[24px] border border-white/40 bg-[linear-gradient(135deg,#3b1d1e,#8c5f39,#d7b88d)] shadow-soft">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.28),_transparent_60%)]" />
            <div className="absolute inset-x-8 bottom-8 rounded-[20px] border border-white/30 bg-white/10 p-5 backdrop-blur-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.26em] text-[#f2e1bf]">Luxury bridal studio</div>
              <div className="mt-3 text-2xl font-semibold text-white">Made to feel extraordinary</div>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9a7340]">Our Story</p>
          <h2 className="mt-4 text-4xl font-bold text-[#1d1d1d] md:text-5xl">Crafted with patience, precision, and tradition</h2>
          <p className="mt-6 text-lg leading-8 text-[#4d4d4d]">
            Every blouse is thoughtfully designed and stitched by hand with detail-rich Aari embroidery that reflects elegance, comfort, and personal style.
          </p>
          <p className="mt-4 text-lg leading-8 text-[#4d4d4d]">
            From bridal fits to festive statement pieces, we bring heritage artistry into modern silhouettes that feel special on every occasion.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-sm font-medium text-[#1d1d1d]">
            <span className="rounded-full border border-[#eadcc0] bg-white px-4 py-2 shadow-sm">Handcrafted embroidery</span>
            <span className="rounded-full border border-[#eadcc0] bg-white px-4 py-2 shadow-sm">Custom blouse fits</span>
            <span className="rounded-full border border-[#eadcc0] bg-white px-4 py-2 shadow-sm">Bridal focus</span>
          </div>
        </div>
      </div>
    </section>
  );
}
