'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const Pagination = ({
  currentPage,
  hasNext,
  hasPrev,
}: {
  currentPage: number;
  hasNext: boolean;
  hasPrev: boolean;
}) => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const cratePageUrl = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    replace(`${pathName}?${params.toString()}`);
  };
  return (
    <div className="mt-12 flex justify-between w-full">
      <button
        className="rounded-md bg-girishred text-white p-2 text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-pink-200"
        disabled={!hasPrev}
        onClick={() => cratePageUrl(currentPage - 1)}
      >
        Previous
      </button>
      <button
        className="rounded-md bg-girishred text-white p-2 text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-pink-200"
        disabled={!hasNext}
        onClick={() => cratePageUrl(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
