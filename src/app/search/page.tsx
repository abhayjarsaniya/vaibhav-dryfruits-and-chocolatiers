import type { Metadata } from "next";
import { Suspense } from "react";
import { SearchResults } from "@/components/search-results";
import { BRAND } from "@/data/site";

export const metadata: Metadata = {
  title: "Search",
  description: `Search ${BRAND} dry fruits, handcrafted chocolates, coffee and tea.`,
};

export default function Page() {
  return (
    <Suspense fallback={<div className="px-5 py-20 text-stone-500">Searching…</div>}>
      <SearchResults />
    </Suspense>
  );
}
