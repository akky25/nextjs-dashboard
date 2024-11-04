import { fetchInvoicesPages } from "@/app/lib/data";
import Pagination from "./pagination";
import { unstable_cache } from "next/cache";

const fetchCacheInvoicesPages = unstable_cache(async (query: string) =>
  fetchInvoicesPages(query)
);

export default async function PaginationWrap({ query }: { query: string }) {
  const totalPages = await fetchCacheInvoicesPages(query);

  return <Pagination totalPages={totalPages} />;
}
