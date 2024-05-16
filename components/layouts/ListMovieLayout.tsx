import { IMovie } from '@/interfaces/movie';
import Image from 'next/image';
import React from 'react';
import MovieCard from '../Movie/MovieCard';

const ListMovieLayout = ({
  movies,
  heading,
}: {
  movies: IMovie[];
  heading: string;
}) => {
  return (
    <div className='mt-10 max-w-[1280px] mx-auto'>
      <h2 className='font-bold text-2xl mb-2'>{heading}</h2>

      <div className='flex overflow-x-scroll gap-4 overflow-y-hidden'>
        {movies.map((movie) => (
          <div className='cursor-pointer' key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListMovieLayout;
