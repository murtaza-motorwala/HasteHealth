import classNames from "classnames";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";

export interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPagination: (page: number) => void;
}

// Show 5 pages at a time with the current page in the middle
function paginationWindow(
  totalPages: number,
  currentPage: number,
  window: number = 5,
) {
  const half = Math.floor(window / 2);
  const start = Math.max(1, currentPage - half);
  const end = Math.min(totalPages, start + window - 1);

  // Array of pages
  const pages = Array.from({ length: end - start + 1 }, (_, i) => start + i);

  return pages;
}

interface PaginationItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  children: React.ReactNode;
  active?: boolean;
}

const PaginationItem = ({
  active,
  children,
  ...liProps
}: PaginationItemProps) => {
  return (
    <li {...liProps}>
      <button
        type="button"
        aria-current={active ? "page" : undefined}
        className={classNames(
          "cursor-pointer flex items-center justify-center px-2.5 h-6 leading-tight font-mono text-xs rounded-none transition-colors",
          {
            "text-white border border-[var(--ci-signal)] bg-[var(--ci-signal)] font-semibold":
              active,

            "text-[var(--ci-muted)] border border-[var(--ci-line)] bg-[var(--ci-surface)] hover:bg-[var(--ci-surface-raised)] hover:text-[var(--ci-ink)]":
              !active,
          },
        )}
      >
        {children}
      </button>
    </li>
  );
};

export const Pagination = (props: PaginationProps) => {
  const window = paginationWindow(props.totalPages, props.currentPage);

  return (
    <nav>
      <ul className="inline-flex items-center -space-x-px text-xs h-10 ">
        <PaginationItem
          onClick={(e) => {
            props.onPagination(Math.max(props.currentPage - 1, 1));
          }}
        >
          Previous
        </PaginationItem>
        {window.map((page) => {
          return (
            <PaginationItem
              key={page}
              active={page === props.currentPage}
              onClick={(_e) => {
                props.onPagination(page);
              }}
            >
              {page}
            </PaginationItem>
          );
        })}
        <PaginationItem
          onClick={(_e) => {
            props.onPagination(
              Math.min(props.currentPage + 1, props.totalPages),
            );
          }}
        >
          Next
        </PaginationItem>
      </ul>
    </nav>
  );
};
