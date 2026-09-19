import Link from "next/link";

type Design = {
  id: string;
  category: string;
  designName: string;
  slug: string;
  description: string;
  priceRange: string;
  leadTime: string;
  fabricType: string;
  sleeveType: string;
  embellishmentType: string;
  tags: string[];
  images: string[];
};

export default function DesignCard({ design }: { design: Design }) {
  return (
    <article className="overflow-hidden rounded-[28px] border border-[#f0e6d8] bg-white shadow-soft">
      <div className="h-64 overflow-hidden">
        <img
          src={design.images[0]}
          alt={design.designName}
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9a7340]">{design.category}</p>
        <h3 className="mt-3 text-2xl font-semibold text-[#1d1d1d]">{design.designName}</h3>
        <p className="mt-3 text-sm leading-6 text-[#4d4d4d]">{design.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {design.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-[#f7efe2] px-3 py-1 text-xs font-medium text-[#6b4d35]">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between text-sm text-[#1d1d1d]">
          <span className="font-semibold">{design.priceRange}</span>
          <span>{design.leadTime}</span>
        </div>

        <Link href={`/designs/${design.slug}`} className="mt-6 inline-block rounded-full bg-maroon px-5 py-3 text-sm font-semibold text-white">
          View details
        </Link>
      </div>
    </article>
  );
}
