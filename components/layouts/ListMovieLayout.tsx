import { IGetMovieResponse, IMovie } from '@/interfaces/movie';
import React from 'react';
import MovieCard from '@/components/Movie/MovieCard';
type PropsType = {
  movies: IGetMovieResponse[] | [];
  heading: string;
};
const ListMovieLayout = ({ movies, heading }: PropsType) => {
  return (
    <div className='mt-10 max-w-[1280px] mx-auto'>
      <h2 className='font-bold text-2xl mb-2'>{heading}</h2>

      {movies.map((page) => (
        <div
          key={page.page}
          className='flex overflow-x-scroll gap-4 overflow-y-hidden '
        >
          {page.results.map((movie) => (
            <div className='cursor-pointer mb-6' key={movie.id}>
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ListMovieLayout;
