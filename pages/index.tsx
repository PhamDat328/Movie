import { Banner } from '@/components/Home';
import ListMovieLayout from '@/components/layouts/ListMovieLayout';
import {
  GET_NOW_PLAYING_MOVIES_PARAMS,
  GET_POPULAR_MOVIES_PARAMS,
  GET_TOP_RATED_MOVIES_PARAMS,
  GET_UPCOMING_MOVIES_PARAMS,
} from '@/constants/defaultParam/movie';
import { TYPE_QUERY_KEYS } from '@/constants/typeQueryKeys';
import { useGetMovieByCategory } from '@/hooks/apis';
import movieApi from '@/services/apis/movie';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { GetStaticProps } from 'next';

export default function Home() {
  const { data: popularMovies } = useGetMovieByCategory(
    GET_POPULAR_MOVIES_PARAMS
  );

  const { data: nowPlayingMovies } = useGetMovieByCategory(
    GET_NOW_PLAYING_MOVIES_PARAMS
  );
  const { data: topRatedMovies } = useGetMovieByCategory(
    GET_TOP_RATED_MOVIES_PARAMS
  );
  const { data: upComingMovies } = useGetMovieByCategory(
    GET_UPCOMING_MOVIES_PARAMS
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
  const queryClient = new QueryClient();
  const prefetchPopularMovies = queryClient.prefetchQuery({
    queryKey: [
      TYPE_QUERY_KEYS.GET_MOVIE_BY_CATEGORY,
      GET_POPULAR_MOVIES_PARAMS,
    ],
    queryFn: () => movieApi.getMovieByCategory(GET_POPULAR_MOVIES_PARAMS),
  });
  const prefetchNowPlayingMovies = queryClient.prefetchQuery({
    queryKey: [
      TYPE_QUERY_KEYS.GET_MOVIE_BY_CATEGORY,
      GET_NOW_PLAYING_MOVIES_PARAMS,
    ],
    queryFn: () => movieApi.getMovieByCategory(GET_NOW_PLAYING_MOVIES_PARAMS),
  });
  const prefetchTopRatedMovies = queryClient.prefetchQuery({
    queryKey: [
      TYPE_QUERY_KEYS.GET_MOVIE_BY_CATEGORY,
      GET_TOP_RATED_MOVIES_PARAMS,
    ],
    queryFn: () => movieApi.getMovieByCategory(GET_TOP_RATED_MOVIES_PARAMS),
  });
  const prefetchUpcomingMovies = queryClient.prefetchQuery({
    queryKey: [
      TYPE_QUERY_KEYS.GET_MOVIE_BY_CATEGORY,
      GET_UPCOMING_MOVIES_PARAMS,
    ],
    queryFn: () => movieApi.getMovieByCategory(GET_UPCOMING_MOVIES_PARAMS),
  });

  await Promise.all([
    prefetchPopularMovies,
    prefetchNowPlayingMovies,
    prefetchTopRatedMovies,
    prefetchUpcomingMovies,
  ]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 5,
  };
};
