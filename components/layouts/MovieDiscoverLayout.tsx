import React, { ReactNode } from 'react';
import FilterBar from '@/components/Movie/FilterBar';
import SortMenu from '@/components/Movie/SortMenu';

const MovieDiscoverLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='grid grid-cols-10 mt-10'>
      <div className='col-span-2 w-full flex flex-col items-center'>
        <SortMenu />
        <FilterBar />
      </div>
      <div className='col-span-8'>{children}</div>
    </div>
  );
};

export default MovieDiscoverLayout;
