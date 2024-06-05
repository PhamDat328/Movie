import React, { ReactNode } from 'react';
import FilterBar from '@/components/Movie/FilterBar';
import SortMenu from '@/components/Movie/SortMenu';
import { FilterDrawer } from '../Movie/FilterDrawer';

const MovieDiscoverLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='grid grid-cols-10 lg:mt-10 mt-4  px-4'>
      <div className='lg:col-span-3 xl:col-span-2 col-span-10 mb-2 w-full flex lg:flex-col items-center'>
        <FilterDrawer />
        <SortMenu />
        <FilterBar />
      </div>
      <div className='lg:col-span-7 xl:col-span-8 sm:col-span-10 col-span-10'>
        {children}
      </div>
    </div>
  );
};

export default MovieDiscoverLayout;
