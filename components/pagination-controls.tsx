import { useEffect, useState } from "react";

import { parseAsInteger, useQueryState } from "nuqs";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { paramKeys } from "@/constants/query-keys";
import type { BaseComponent } from "@/types";

interface PaginationControlsProps {
  page: number;
  hasNextPage: boolean | undefined;
}

export const PaginationControls: BaseComponent<PaginationControlsProps> = ({
  hasNextPage,
  page,
}) => {
  const [maxVisitedPage, setMaxVisitedPage] = useState(page);

  const [_, setPage] = useQueryState(paramKeys.page, parseAsInteger.withDefault(1));

  useEffect(() => {
    if (page > maxVisitedPage) {
      setMaxVisitedPage(page);
    }
  }, [page, maxVisitedPage]);

  const isPrevDisabled = page === 1;
  const isNextDisabled = !hasNextPage;

  const handlePrevClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (!isPrevDisabled) {
      setPage(page - 1);
    }
  };

  const handleNextClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (hasNextPage) {
      setPage(page + 1);
    }
  };

  const handlePageClick = (p: number) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setPage(p);
  };

  const getPageNumbers = () => {
    const totalPages = Math.max(maxVisitedPage, page);
    const pages: (number | "ellipsis")[] = [];

    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    pages.push(1);

    switch (true) {
      case page <= 3:
        pages.push(2, 3);
        if (totalPages > 4) pages.push("ellipsis");

        break;

      case page >= totalPages - 2:
        pages.push("ellipsis");
        pages.push(totalPages - 2, totalPages - 1);

        break;

      default:
        pages.push("ellipsis");
        pages.push(page - 1, page, page + 1);
        if (page + 2 < totalPages) pages.push("ellipsis");

        break;
    }

    if (pages[pages.length - 1] !== totalPages) {
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <Pagination className="mt-4">
      <PaginationContent>
        <PaginationItem>
          {isPrevDisabled ? (
            <span className="pointer-events-none opacity-50">
              <PaginationPrevious href="#" />
            </span>
          ) : (
            <PaginationPrevious href="#" onClick={handlePrevClick} />
          )}
        </PaginationItem>

        {getPageNumbers().map((pageNum, idx) => (
          <PaginationItem key={`${pageNum}-${idx}`}>
            {pageNum === "ellipsis" ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink
                href="#"
                onClick={handlePageClick(pageNum)}
                isActive={pageNum === page}
              >
                {pageNum}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}

        <PaginationItem>
          {isNextDisabled ? (
            <span className="pointer-events-none opacity-50">
              <PaginationNext href="#" />
            </span>
          ) : (
            <PaginationNext href="#" onClick={handleNextClick} />
          )}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
