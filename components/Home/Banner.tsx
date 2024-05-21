import Image from 'next/image';
import React from 'react';
import BannerImage from '@/assets/images/banner.jpg';
import dynamic from 'next/dynamic';
const SearchBar = dynamic(() => import('@/components/SearchBar'));

const Banner = () => {
  return (
    <div className='relative h-[500px] max-w-[1280px] mx-auto text-white'>
      <Image
        src={BannerImage}
        alt='banner'
        priority
        style={{ objectFit: 'cover' }}
        fill
        sizes='100vw'
        className='brightness-[0.6]'
      />
      <div className='z-10 absolute left-[50px] top-[20%] flex flex-col gap-2 '>
        <h1 className='z-10 text-4xl font-bold shadow-md tracking-wider'>
          Welcome
        </h1>
        <p className='text-2xl text-pretty font-semibold tracking-wider'>
          Millions of movies, TV shows and people to discover. Explore now.
        </p>
      </div>
      <SearchBar />
    </div>
  );
};

export default Banner;
