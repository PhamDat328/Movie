import React, { useState } from 'react';
import { Button, IconButton } from '@material-tailwind/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import { useRouter } from 'next/router';

type PaginationProps = {
  page: number;
  totalPage: number;
};

export function Pagination({ page: currentPage, totalPage }: PaginationProps) {
  const pageNumbers: string[] = [];
  let MAX_VISIBLE_PAGES = 5;

  const leftEllipsisNeeded: boolean =
    +currentPage > Math.ceil(MAX_VISIBLE_PAGES! / 2);

  const rightEllipsisNeeded: boolean =
    +currentPage < totalPage - Math.floor(MAX_VISIBLE_PAGES! / 2);

  // Handle left side with ellipsis (if needed)
  if (leftEllipsisNeeded) {
    pageNumbers.push('1');
    pageNumbers.push('...');
  }

  //   Generate middle visible pages
  const startIndex = Math.max(
    Math.ceil(+currentPage - (MAX_VISIBLE_PAGES! - 1) / 2),
    leftEllipsisNeeded ? 2 : 1
  );
  const endIndex = Math.min(
    Math.floor(+currentPage + (MAX_VISIBLE_PAGES! - 1) / 2),
    totalPage - (rightEllipsisNeeded ? 1 : 0)
  );

  for (let i = startIndex; i <= endIndex; i++) {
    pageNumbers.push(i.toString());
  }

  //   Handle right side with ellipsis (if need)
  if (rightEllipsisNeeded) {
    pageNumbers.push('...');
    pageNumbers.push(totalPage.toString());
  }

  const router = useRouter();

  const [active, setActive] = useState(1);

  const getItemProps = (index: string) =>
    ({
      variant: active.toString() === index ? 'filled' : 'text',
      color: 'gray',
      onClick: () => setActive(+index),
    }) as any;

  const next = () => {
    if (active === totalPage) return;

    setActive(active + 1);
    router.push(`/search/?query=${router.query.query}&page=${active + 1}`);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
    router.push(`/search/?query=${router.query.query}&page=${active - 1}`);
  };

  const handlePageChange = (page: string) => {
    setActive(+page);
    router.push(`/search/?query=${router.query.query}&page=${page}`);
  };

  return (
    <div className='flex items-center gap-4 mt-10'>
      <Button
        variant='text'
        className='flex items-center gap-2'
        onClick={prev}
        disabled={active === 1}
      >
        <FaArrowLeft strokeWidth={2} className='h-4 w-4' />
      </Button>
      <div className='flex items-center gap-2'>
        {pageNumbers.map((page) => (
          <button
            disabled={page === '...'}
            key={page}
            onClick={() => handlePageChange(page.toString())}
          >
            <IconButton {...getItemProps(page)} key={page}>
              {page}
            </IconButton>
          </button>
        ))}
      </div>
      <Button
        variant='text'
        className='flex items-center gap-2'
        onClick={next}
        disabled={active === 5}
      >
        <FaArrowRight strokeWidth={2} className='h-4 w-4' />
      </Button>
    </div>
  );
}
