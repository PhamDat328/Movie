import { useRouter } from 'next/router';
import format from '@/utils/format';
import React, { useContext, useEffect } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { TYPE_QUERY_KEYS } from '@/constants/typeQueryKeys';
import movieApi from '@/services/apis/movie';
import MovieDetailHeader from '@/components/Movie/MovieDetailHeader';
import MovieDetailInfo from '@/components/Movie/MovieDetailInfo';
import useGetDetailMovie from '@/hooks/apis/movies/useGetDetailMovie';
import MovieContext from '@/contexts/MovieContext';

const MovieDetailPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const id = format.getIdFromSlug(slug?.toString() || '');

  const { data: movieDetail } = useGetDetailMovie(id || '');
  const context = useContext(MovieContext);

  useEffect(() => {
    if (movieDetail) context.setMovie(movieDetail);
  }, [movieDetail, context]);

  return (
    <>
      <MovieDetailHeader />
      <MovieDetailInfo />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const queryClient = new QueryClient();
  const slug = context.params?.slug;
  const id = format.getIdFromSlug(slug?.toString() || '');

  await queryClient.prefetchQuery({
    queryKey: [TYPE_QUERY_KEYS.GET_DETAIL_MOVIE, id],
    queryFn: () => movieApi.getMovieDetail(id || ''),
  });

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
    revalidate: 30,
  };
};

export default MovieDetailPage;
