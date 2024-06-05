import Image from 'next/image';
import React, { createRef, useContext } from 'react';
import BannerImage from '@/assets/images/banner.jpg';
import dynamic from 'next/dynamic';
import SearchContext from '@/contexts/SearchContext';
import { useRouter } from 'next/router';
const SearchBar = dynamic(() => import('@/components/SearchBar'));

const Banner = () => {
  const { handleClose, searchVal, handleSearchVal } = useContext(SearchContext);
  const router = useRouter();
  const formRef = createRef<HTMLFormElement>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/search?query=${searchVal}`);
    handleSearchVal('');
    handleClose();
  };
  return (
    <div className='relative h-[500px] max-w-[1280px] mx-auto text-white'>
      <Image
        src={BannerImage}
        alt='banner'
        priority
        objectFit='cover'
        fill
        sizes='(max-width: 1280px) 100vw, 1280px'
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
      <form
        onSubmit={handleSubmit}
        ref={formRef}
        className='absolute top-[270px] z-[1000] left-0 right-0'
      >
        <SearchBar />
      </form>
    </div>
  );
};

export default Banner;
