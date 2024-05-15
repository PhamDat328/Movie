import Image from 'next/image';
import React from 'react';
import BannerImage from '../../assets/images/banner.jpg';
import { SearchBar } from '../layouts/Header/components';

const Banner = () => {
  return (
    <div className='relative h-[500px] max-w-[1280px] mx-auto text-white'>
      <Image
        src={BannerImage}
        alt='banner'
        objectFit='cover'
        fill
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
