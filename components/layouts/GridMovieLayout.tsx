import { IGetMovieResponse, IMovie } from '@/interfaces/movie';

import React from 'react';
import MovieCard from '@/components/Movie/MovieCard';

type Props = {
  pages: IGetMovieResponse[] | [];
  heading: string;
};

const GridMovieLayout = ({ pages, heading }: Props) => {
  const headingFormatted = heading?.replace('-', ' ');
  return (
    <div className=''>
      <h2 className='font-bold text-2xl mb-2 capitalize ml-6'>
        {headingFormatted}
      </h2>
      <div className='flex flex-wrap gap-4 justify-center'>
        {pages.map((page) =>
          page.results.map((movie) => (
            <div className='cursor-pointer mb-4' key={movie.id}>
              <MovieCard movie={movie} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default GridMovieLayout;
