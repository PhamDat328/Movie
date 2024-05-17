import { useRouter } from 'next/router';
import format from '../../../utils/format';
import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { TYPE_QUERY_KEYS } from '@/constants/typeQueryKeys';
import movieApi from '@/services/apis/movie';
import MovieDetailLayout from '@/components/layouts/MovieDetailLayout';
import useGetDetailMovie from '@/hooks/apis/movies/useGetDetailMovie';
import {
  GET_NOW_PLAYING_MOVIES_PARAMS,
  GET_POPULAR_MOVIES_PARAMS,
  GET_TOP_RATED_MOVIES_PARAMS,
  GET_UPCOMING_MOVIES_PARAMS,
} from '@/constants/defaultParam/movie';
import { IMovie } from '@/interfaces/movie';

const MovieDetailPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const id = Number(format.getIdFromSlug(slug?.toString() || ''));

  const { data: movieDetail } = useGetDetailMovie(id.toString());
  // console.log(movieDetail);

  return (
    <div>
      {movieDetail ? (
        <MovieDetailLayout movie={movieDetail} />
      ) : (
        <div>No data found</div>
      )}
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const upcomingMovies = await movieApi.getMovieByCategory(
    GET_UPCOMING_MOVIES_PARAMS
  );
  const nowPlayingMovies = await movieApi.getMovieByCategory(
    GET_NOW_PLAYING_MOVIES_PARAMS
  );
  const popularMovies = await movieApi.getMovieByCategory(
    GET_POPULAR_MOVIES_PARAMS
  );
  const topRatedMovies = await movieApi.getMovieByCategory(
    GET_TOP_RATED_MOVIES_PARAMS
  );

  const upcomingPaths = upcomingMovies?.results.map((movie: IMovie) => ({
    params: { slug: movie.id.toString() },
  }));

  const popularPaths = popularMovies?.results.map((movie: IMovie) => ({
    params: { slug: movie.id.toString() },
  }));

  const topRatedPaths = topRatedMovies?.results.map((movie: IMovie) => ({
    params: { slug: movie.id.toString() },
  }));

  const nowPlayingPaths = nowPlayingMovies?.results.map((movie: IMovie) => ({
    params: { slug: movie.id.toString() },
  }));

  const paths = [
    ...upcomingPaths,
    ...popularPaths,
    ...topRatedPaths,
    ...nowPlayingPaths,
  ];

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const queryClient = new QueryClient();
  const slug = context.params?.slug;
  const id = Number(format.getIdFromSlug(slug?.toString() || ''));

  const prefetchDetailMovie = queryClient.prefetchQuery({
    queryKey: [TYPE_QUERY_KEYS.GET_DETAIL_MOVIE, id.toString()],
    queryFn: () => movieApi.getMovieDetail(id.toString()),
  });
  await Promise.all([prefetchDetailMovie]);

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
    revalidate: 30,
  };
};

export default MovieDetailPage;
