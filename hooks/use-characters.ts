import { useQuery } from "@tanstack/react-query";

import { queryKeys } from "@/constants/query-keys";
import type { Character } from "@/types/api";

export function useCharacters(swornMemberUrl: string[]) {
  const charactersQuery = useQuery<Character[]>({
    queryKey: [queryKeys.characters, swornMemberUrl],
    queryFn: async ({ signal }) => {
      const query = await Promise.all(
        swornMemberUrl.map((url) =>
          fetch(url, {
            signal,
          }).then((res) => res.json()),
        ),
      );

      return query;
    },
  });

  return charactersQuery;
}
