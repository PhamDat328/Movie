import GridMovieLayout from '@/components/layouts/GridMovieLayout';
import { GET_POPULAR_MOVIES_PARAMS } from '@/constants/defaultParam/movie';
import { useGetMovieByCategory } from '@/hooks/apis';
import { useRouter } from 'next/router';
import React from 'react';

const MoviePage = () => {
  const { data: movies } = useGetMovieByCategory(GET_POPULAR_MOVIES_PARAMS);
  return (
    <div>
      <GridMovieLayout heading='Popular Movies' movies={movies || []} />
    </div>
  );
};

export default MoviePage;
