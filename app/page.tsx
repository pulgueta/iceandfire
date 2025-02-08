"use client";

import { parseAsInteger, useQueryState } from "nuqs";

import { HouseCard } from "@/components/house-card";
import { PaginationControls } from "@/components/pagination-controls";
import { ThemeToggle } from "@/components/theme-toggle";
import { Heading, Paragraph } from "@/components/ui/typography";
import { paramKeys } from "@/constants/query-keys";
import { useHouses } from "@/hooks/use-houses";
import { Loader2 } from "lucide-react";

const Page = () => {
  const [page] = useQueryState(paramKeys.page, parseAsInteger.withDefault(1));

  const { data, isLoading } = useHouses({ page });

  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-2 bg-muted-foreground p-4">
      <header className="flex w-full max-w-xl items-center justify-between gap-4">
        <div className="flex flex-col items-center">
          <Heading as="h2" center className="text-primary-foreground">
            A Song of Ice and Fire tracker
          </Heading>
          <Paragraph center weight="medium">
            Track which of the characters are alive or dead in the series.
          </Paragraph>
        </div>

        <div>
          <ThemeToggle />
        </div>
      </header>

      {isLoading && <Loader2 className="mt-8 animate-spin" aria-label="Loading" />}
      <section className="mt-4 grid min-h-96 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data?.houses &&
          !isLoading &&
          data.houses.map((house) => <HouseCard key={house.url} house={house} />)}
      </section>

      <PaginationControls hasNextPage={data?.hasNextPage} page={page} />
    </main>
  );
};

export default Page;
