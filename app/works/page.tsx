import categories from "@/data/categories.json";
import designs from "@/data/designs.json";
import DesignCard from "@/components/DesignCard";

export default function WorksPage() {
  return (
    <main className="section-padding bg-[#fffdf7]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9a7340]">Our Craft</p>
          <h1 className="mt-4 text-5xl font-bold text-[#1d1d1d]">Types of Work</h1>
        </div>

        <div className="mb-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category: any) => (
            <div key={category.id} className="rounded-[28px] border border-[#f0e6d8] bg-white p-6 shadow-soft">
              <div className={`mb-4 h-24 rounded-2xl bg-gradient-to-br ${category.accent}`} />
              <h2 className="text-2xl font-semibold text-[#1d1d1d]">{category.name}</h2>
              <p className="mt-3 text-sm leading-6 text-[#4d4d4d]">{category.description}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {designs.map((design: any) => (
            <DesignCard key={design.id} design={design} />
          ))}
        </div>
      </div>
    </main>
  );
}
