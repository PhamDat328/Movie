import { Banner } from '@/components/Home';
import ListMovieLayout from '@/components/layouts/ListMovieLayout';
import {
  GET_NOW_PLAYING_PRODUCTS_PARAMS,
  GET_POPULAR_PRODUCTS_PARAMS,
  GET_TOP_RATED_PRODUCTS_PARAMS,
  GET_UPCOMING_PRODUCTS_PARAMS,
} from '@/constants/defaultParam/movie';
import { TYPE_QUERY_KEYS } from '@/constants/typeQueryKeys';
import { useGetPopularMovies } from '@/hooks/apis';
import { FILTER_MOVIE } from '@/interfaces/params';
import movieApi from '@/services/apis/movie';
import { QueryClient, dehydrate, useQueryClient } from '@tanstack/react-query';
import { GetStaticProps } from 'next';
import { queryClient } from './_app';

export default function Home() {
  const { data: popularMovies } = useGetPopularMovies(
    GET_POPULAR_PRODUCTS_PARAMS
  );
  console.log(popularMovies);

  const { data: nowPlayingMovies } = useGetPopularMovies(
    GET_NOW_PLAYING_PRODUCTS_PARAMS
  );
  const { data: topRatedMovies } = useGetPopularMovies(
    GET_TOP_RATED_PRODUCTS_PARAMS
  );
  const { data: upComingMovies } = useGetPopularMovies(
    GET_UPCOMING_PRODUCTS_PARAMS
  );

  return (
    <>
      <Banner />
      <ListMovieLayout heading='Popular Movies' movies={popularMovies || []} />
      <ListMovieLayout
        heading='Now Playing Movies'
        movies={nowPlayingMovies || []}
      />
      <ListMovieLayout
        heading='Top Rated Movie'
        movies={topRatedMovies || []}
      />
      <ListMovieLayout heading='Upcoming Movie' movies={upComingMovies || []} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  console.log(TYPE_QUERY_KEYS.GET_POPULAR, GET_POPULAR_PRODUCTS_PARAMS);

  const prefetchPopularMovies = queryClient.prefetchQuery({
    queryKey: [TYPE_QUERY_KEYS.GET_POPULAR, GET_POPULAR_PRODUCTS_PARAMS],
    queryFn: () => movieApi.getPopular(GET_POPULAR_PRODUCTS_PARAMS),
  });
  const prefetchNowPlayingMovies = queryClient.prefetchQuery({
    queryKey: [
      TYPE_QUERY_KEYS.GET_NOW_PLAYING,
      GET_NOW_PLAYING_PRODUCTS_PARAMS,
    ],
    queryFn: () => movieApi.getPopular(GET_NOW_PLAYING_PRODUCTS_PARAMS),
  });
  const prefetchTopRatedMovies = queryClient.prefetchQuery({
    queryKey: [TYPE_QUERY_KEYS.GET_TOP_RATED, GET_TOP_RATED_PRODUCTS_PARAMS],
    queryFn: () => movieApi.getPopular(GET_TOP_RATED_PRODUCTS_PARAMS),
  });
  const prefetchUpcomingMovies = queryClient.prefetchQuery({
    queryKey: [TYPE_QUERY_KEYS.GET_UPCOMING, GET_UPCOMING_PRODUCTS_PARAMS],
    queryFn: () => movieApi.getPopular(GET_UPCOMING_PRODUCTS_PARAMS),
  });

  await Promise.all([
    prefetchPopularMovies,
    prefetchNowPlayingMovies,
    prefetchTopRatedMovies,
    prefetchUpcomingMovies,
  ]);

  // console.log(JSON.parse(JSON.stringify(dehydrate(queryClient))));

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
    revalidate: 5,
  };
};
