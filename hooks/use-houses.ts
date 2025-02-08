import { useQuery } from "@tanstack/react-query";

import { queryKeys } from "@/constants/query-keys";
import { BASE_URL } from "@/lib/api";
import type { House } from "@/types/api";

interface UseHouseProps {
  page?: Readonly<number>;
}

interface UseHouseReturn {
  houses: House[];
  hasNextPage: boolean;
}

export function useHouses({ page = 1 }: UseHouseProps) {
  const housesQuery = useQuery<UseHouseReturn>({
    queryKey: [queryKeys.houses, page],
    queryFn: async ({ signal }) => {
      const query = await fetch(`${BASE_URL}/houses?page=${page}`, {
        signal,
      });

      const hasNextPage = query.headers.get("link")?.includes('rel="next"') ?? false;

      if (!query.ok) throw new Error("Failed to fetch");

      const res = await query.json();

      return { houses: res, hasNextPage };
    },
  });

  return housesQuery;
}
