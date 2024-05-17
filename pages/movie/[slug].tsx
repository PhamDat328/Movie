import GridMovieLayout from '@/components/layouts/GridMovieLayout';
import {
  GET_NOW_PLAYING_MOVIES_PARAMS,
  GET_POPULAR_MOVIES_PARAMS,
  GET_TOP_RATED_MOVIES_PARAMS,
  GET_UPCOMING_MOVIES_PARAMS,
} from '@/constants/defaultParam/movie';
import { useGetMovieByCategory } from '@/hooks/apis';
import { useRouter } from 'next/router';

import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { TYPE_QUERY_KEYS } from '@/constants/typeQueryKeys';
import movieApi from '@/services/apis/movie';

const MovieDetailPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  let param: any;
  switch (slug) {
    case 'popular':
      param = GET_POPULAR_MOVIES_PARAMS;
      break;
    case 'top-rated':
      param = GET_TOP_RATED_MOVIES_PARAMS;
      break;
    case 'upcoming':
      param = GET_UPCOMING_MOVIES_PARAMS;
      break;
    case 'now-playing':
      param = GET_NOW_PLAYING_MOVIES_PARAMS;
      break;
  }
  const { data: movies } = useGetMovieByCategory(param);
  //   console.log('slug: ' + slug, 'Id: ' + id);

  return (
    <div>
      <GridMovieLayout heading={slug as string} movies={movies || []} />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    return {
      paths: [
        { params: { slug: 'popular' } },
        { params: { slug: 'top-rated' } },
        { params: { slug: 'upcoming' } },
        { params: { slug: 'now-playing' } },
      ],
      fallback: 'blocking',
    };
  } catch (error) {
    return {
      paths: [],
      fallback: 'blocking',
    };
  }
};

export const getStaticProps: GetStaticProps = async (context) => {
  const queryClient = new QueryClient();
  const slug = context.params?.slug;

  let param: any;
  let key = '';
  switch (slug) {
    case 'popular':
      param = GET_POPULAR_MOVIES_PARAMS;
      key = TYPE_QUERY_KEYS.GET_POPULAR;
      break;
    case 'top-rated':
      param = GET_TOP_RATED_MOVIES_PARAMS;
      key = TYPE_QUERY_KEYS.GET_TOP_RATED;
      break;
    case 'upcoming':
      param = GET_UPCOMING_MOVIES_PARAMS;
      key = TYPE_QUERY_KEYS.GET_UPCOMING;
      break;
    case 'now-playing':
      param = GET_NOW_PLAYING_MOVIES_PARAMS;
      key = TYPE_QUERY_KEYS.GET_NOW_PLAYING;
      break;
  }

  const prefetchMovieByCategory = queryClient.prefetchQuery({
    queryKey: [key, param],
    queryFn: () => movieApi.getMovieByCategory(param),
  });

  await Promise.all([prefetchMovieByCategory]);

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
    revalidate: 30,
  };
};

export default MovieDetailPage;
