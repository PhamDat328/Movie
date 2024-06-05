import GridMovieLayout from '@/components/layouts/GridMovieLayout';
import { useGetMovieByCategory } from '@/hooks/apis';
import { useRouter } from 'next/router';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { TYPE_QUERY_KEYS } from '@/constants/typeQueryKeys';
import movieApi from '@/services/apis/movie';
import { getParamsByType } from '@/utils/common';
import useGetDiscoverMovie from '@/hooks/apis/movies/useGetDiscoverMovie';
import MovieDiscoverLayout from '@/components/layouts/MovieDiscoverLayout';
import { Button } from '@material-tailwind/react';
import { useEffect } from 'react';
import { IGetMovieResponse } from '@/interfaces/movie';
import { useInView } from 'react-intersection-observer';
import SEOConfig from '@/utils/NextSeoConfig';
import {
  DEFAULT_SITE_DESCRIPTION,
  DEFAULT_SITE_TITLE,
} from '@/constants/common';

const MovieDetailPage = () => {
  const { inView, ref } = useInView();
  const router = useRouter();
  const {
    slug = '',
    sort_by,
    with_original_language,
    with_genres,
  } = router.query;

  const param = getParamsByType(slug as string);
  const formatSlug =
    slug?.toString().charAt(0).toUpperCase() +
    slug?.toString().slice(1).replace('-', ' ');
  const { data: moviesByCategory, fetchNextPage: fetchNextCategory } =
    useGetMovieByCategory(param);

  const { data: moviesDiscover, fetchNextPage: fetchNextDiscover } =
    useGetDiscoverMovie({
      sortBy: sort_by as string,
      language: with_original_language as string,
      genre: with_genres as string,
    });

  useEffect(() => {
    if (inView) {
      if (sort_by || with_original_language || with_genres) fetchNextDiscover();
      else fetchNextCategory();
    }
  }, [
    inView,
    fetchNextCategory,
    fetchNextDiscover,
    sort_by,
    with_original_language,
    with_genres,
  ]);

  let discoverMovies: IGetMovieResponse[] = [];

  if (sort_by || with_original_language || with_genres)
    discoverMovies = moviesDiscover || [];
  else discoverMovies = moviesByCategory || [];

  return (
    <>
      <SEOConfig
        title={`${formatSlug} Movie | ${DEFAULT_SITE_TITLE}`}
        description={DEFAULT_SITE_DESCRIPTION}
      />
      <MovieDiscoverLayout>
        <GridMovieLayout
          heading={slug as string}
          pages={discoverMovies || []}
        />
        <Button ref={ref} className='mt-8' size='lg' color='green' fullWidth>
          Load More
        </Button>
      </MovieDiscoverLayout>
    </>
  );
};

export const getServerSideProps = async (context: any) => {
  const queryClient = new QueryClient();

  const slug = context.params?.slug;
  const { sort_by, with_original_language, with_genres } = context.query;
  const param = getParamsByType(slug as string);

  const prefetchDiscoverMovie = queryClient.prefetchInfiniteQuery({
    queryKey: [
      TYPE_QUERY_KEYS.GET_DISCOVER_MOVIE,
      {
        sortBy: sort_by,
        language: with_original_language,
        genre: with_genres,
      },
    ],
    queryFn: ({ pageParam }) =>
      movieApi.getDiscoverMovie(
        {
          sortBy: sort_by,
          language: with_original_language,
          genre: with_genres,
        },
        pageParam
      ),
    initialPageParam: 1,
    getNextPageParam: (lastPage: IGetMovieResponse) => lastPage.page + 1,
  });

  const prefetchMovieByCategory = queryClient.prefetchInfiniteQuery({
    queryKey: [TYPE_QUERY_KEYS.GET_MOVIE_BY_CATEGORY, param],
    queryFn: ({ pageParam }) => movieApi.getMovieByCategory(param, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage: IGetMovieResponse) => lastPage.page + 1,
  });

  Promise.all([prefetchDiscoverMovie, prefetchMovieByCategory]);

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};

export default MovieDetailPage;
