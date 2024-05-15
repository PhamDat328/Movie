import { IMovie } from '@/interfaces/movie';
import Image from 'next/image';
import React from 'react';
import MovieCard from '../Movie/MovieCard';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
const ListMovieLayout = ({
  movies,
  heading,
}: {
  movies: IMovie[];
  heading: string;
}) => {
  return (
    <div className='mt-10 flex'>
      <Swiper
        spaceBetween={100}
        slidesPerView={4}
        loop={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {movies.map((movie) => (
          <SwiperSlide className='cursor-pointer' key={movie.id}>
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ListMovieLayout;
