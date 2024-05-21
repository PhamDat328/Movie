import GridMovieLayout from '@/components/layouts/GridMovieLayout';
import { useGetMovieByCategory } from '@/hooks/apis';
import { useRouter } from 'next/router';

import React, { useEffect } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { TYPE_QUERY_KEYS } from '@/constants/typeQueryKeys';
import movieApi from '@/services/apis/movie';
import { getParamsByType } from '@/utils/common';
import { IMovie, MovieCategory } from '@/interfaces/movie';
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from '@material-tailwind/react';
import { sortParams } from '@/constants/defaultParam/sort';
import useGetDiscoverMovie from '@/hooks/apis/movies/useGetDiscoverMovie';
import MovieDiscoverLayout from '@/components/layouts/MovieDiscoverLayout';

const MovieByCategoryPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const param = getParamsByType(slug as string);
  const { data: movies } = useGetMovieByCategory(param);

  const [sortType, setSortType] = React.useState<string>('');
  const handleSortChange = (param: string) => {
    setSortType(param);
  };

  const { data: discoverMovies } = useGetDiscoverMovie(sortType);

  if (sortType !== '' && discoverMovies?.results) {
    return (
      <MovieDiscoverLayout handleChangeSortParam={handleSortChange}>
        <GridMovieLayout
          heading={slug as string}
          movies={discoverMovies.results}
        />
      </MovieDiscoverLayout>
    );
  }

  return (
    <MovieDiscoverLayout handleChangeSortParam={handleSortChange}>
      <GridMovieLayout heading={slug as string} movies={movies || []} />
    </MovieDiscoverLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.values(MovieCategory).map((category: string) => ({
    params: { slug: category },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  console.log('movie by category page');

  const queryClient = new QueryClient();
  const slug = context.params?.slug;

  const param = getParamsByType(slug as string);

  await queryClient.prefetchQuery({
    queryKey: [TYPE_QUERY_KEYS.GET_MOVIE_BY_CATEGORY, param],
    queryFn: () => movieApi.getMovieByCategory(param),
  });

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
    revalidate: 30,
  };
};

export default MovieByCategoryPage;
