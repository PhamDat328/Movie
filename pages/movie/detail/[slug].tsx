import { useRouter } from 'next/router';
import format from '../../../utils/format';
import React, { useContext } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { TYPE_QUERY_KEYS } from '@/constants/typeQueryKeys';
import movieApi from '@/services/apis/movie';
import MovieDetailLayout from '@/components/layouts/MovieDetailLayout';
import useGetDetailMovie from '@/hooks/apis/movies/useGetDetailMovie';
import { IMovie } from '@/interfaces/movie';
import { PARAMS_BY_CATEGORY } from '@/constants/movie';
import MovieContext from '@/contexts/MovieContext';

const MovieDetailPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const id = Number(format.getIdFromSlug(slug?.toString() || ''));

  const { data: movieDetail } = useGetDetailMovie(id.toString());
  const context = useContext(MovieContext);
  if (movieDetail) context.setMovie(movieDetail);
  return (
    <div>{movieDetail ? <MovieDetailLayout /> : <div>No data found</div>}</div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const movies = PARAMS_BY_CATEGORY.map(
    async (item) =>
      await movieApi.getMovieByCategory(item.params).then((res) => res.results)
  );
  const paths = await Promise.all(movies).then((processedMovies) => {
    return processedMovies
      .flat()
      .map((movie: IMovie) => ({ params: { slug: movie?.id?.toString() } }));
  });
  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const queryClient = new QueryClient();
  const slug = context.params?.slug;
  const id = Number(format.getIdFromSlug(slug?.toString() || ''));

  await queryClient.prefetchQuery({
    queryKey: [TYPE_QUERY_KEYS.GET_DETAIL_MOVIE, id.toString()],
    queryFn: () => movieApi.getMovieDetail(id.toString()),
  });

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
    revalidate: 30,
  };
};

export default MovieDetailPage;
