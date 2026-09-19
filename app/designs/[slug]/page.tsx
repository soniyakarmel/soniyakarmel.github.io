import designs from "@/data/designs.json";
import Link from "next/link";

export function generateStaticParams() {
  return designs.map((design: any) => ({ slug: design.slug }));
}

export default function DesignDetailPage({ params }: { params: { slug: string } }) {
  const design = designs.find((item: any) => item.slug === params.slug);

  if (!design) {
    return (
      <main className="section-padding">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold text-[#1d1d1d]">Design not found</h1>
          <Link href="/works" className="mt-6 inline-block rounded-full bg-maroon px-6 py-3 text-white">
            Back to all designs
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="section-padding bg-[#fffdf7]">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            <div className="overflow-hidden rounded-[32px] border border-[#f0e6d8] bg-white p-4 shadow-soft">
              <img src={design.images[0]} alt={design.designName} className="h-[520px] w-full rounded-[24px] object-cover" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {design.images.slice(1).map((image: string, idx: number) => (
                <div key={`${design.slug}-${idx}`} className="overflow-hidden rounded-[24px] border border-[#f0e6d8] bg-white p-3 shadow-soft">
                  <img src={image} alt={`${design.designName} detail ${idx + 1}`} className="h-52 w-full rounded-[18px] object-cover" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9a7340]">{design.category}</p>
            <h1 className="mt-4 text-5xl font-bold text-[#1d1d1d]">{design.designName}</h1>
            <p className="mt-5 text-lg leading-8 text-[#4d4d4d]">{design.description}</p>

            <div className="mt-6 space-y-3 text-base text-[#1d1d1d]">
              <p><strong>Price:</strong> {design.priceRange}</p>
              <p><strong>Lead time:</strong> {design.leadTime}</p>
              <p><strong>Fabric:</strong> {design.fabricType}</p>
              <p><strong>Sleeve:</strong> {design.sleeveType}</p>
              <p><strong>Embellishment:</strong> {design.embellishmentType}</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {design.tags.map((tag: string) => (
                <span key={tag} className="rounded-full bg-[#f7efe2] px-3 py-1 text-xs font-medium text-[#6b4d35]">{tag}</span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href={`/book?design=${encodeURIComponent(design.designName)}`} className="inline-block rounded-full bg-maroon px-6 py-3 text-base font-semibold text-white">
                Book this design
              </Link>
              <Link href="/works" className="inline-block rounded-full border border-[#eadcc0] bg-white px-6 py-3 text-base font-semibold text-[#1d1d1d]">
                View all designs
              </Link>
            </div>

            <div className="mt-10 rounded-[24px] border border-[#f0e6d8] bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-semibold text-[#1d1d1d]">Why customers choose this style</h2>
              <ul className="mt-4 space-y-3 text-[#4d4d4d]">
                <li>• Premium handcrafted embroidery with couture finishing</li>
                <li>• Tailored fit for bridal and festive occasions</li>
                <li>• Custom consultation for fabric, sleeve, and motif preferences</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
