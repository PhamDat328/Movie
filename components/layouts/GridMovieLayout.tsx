import { IMovie } from '@/interfaces/movie';

import React from 'react';
import MovieCard from '../Movie/MovieCard';

const GridMovieLayout = ({
  movies,
  heading,
}: {
  movies: IMovie[];
  heading: string;
}) => {
  const headingFormatted = heading?.replace('-', ' ');
  return (
    <div className='max-w-[1280px] mx-auto'>
      <h2 className='font-bold text-2xl mb-2 capitalize'>{headingFormatted}</h2>

      <div className='flex flex-wrap justify-center gap-4'>
        {movies.map((movie) => (
          <div className='cursor-pointer' key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridMovieLayout;
