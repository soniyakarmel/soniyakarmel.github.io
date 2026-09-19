const testimonials = [
  { quote: "The detailing was breathtaking and perfectly suited for my wedding. Every guest asked where the blouse was stitched.", name: "Keerthi R." },
  { quote: "The craftsmanship feels premium and the fit was comfortable throughout the function. Highly recommended.", name: "Anisha M." },
  { quote: "My blouse looked elegant, modern, and traditional at the same time. The finishing was excellent.", name: "Sathya P." },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-[#f5efe7]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9a7340]">Client Love</p>
          <h2 className="mt-4 text-4xl font-bold text-[#1d1d1d]">What customers say</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-[28px] border border-[#f0e6d8] bg-white p-7 shadow-soft">
              <div className="mb-4 text-[#c8a95b] text-3xl">“</div>
              <p className="text-lg leading-8 text-[#3d3d3d]">{item.quote}</p>
              <div className="mt-6 border-t border-[#f0e6d8] pt-4 text-sm font-semibold uppercase tracking-[0.15em] text-[#7a4f2e]">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
