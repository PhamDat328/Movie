import { TYPE_QUERY_KEYS } from '@/constants/typeQueryKeys';
import { IFilterType, IGetMovieResponse, IMovie } from '@/interfaces/movie';
import movieApi from '@/services/apis/movie';
import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';
import format from '@/utils/format';
import { useCallback, useMemo } from 'react';

const useGetDiscoverMovie = (param: IFilterType) => {
  const { data, ...rest } = useInfiniteQuery({
    queryKey: [TYPE_QUERY_KEYS.GET_DISCOVER_MOVIE, param],
    queryFn: ({ pageParam }) => movieApi.getDiscoverMovie(param, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage: IGetMovieResponse) => lastPage.page + 1,
    // select:
  });

  const flattedData = useMemo(() => {
    return data?.pages
      ?.flatMap((page) => page)
      .map((item: IGetMovieResponse) => {
        return {
          page: item.page,
          results: item?.results.map((movie: IMovie) => {
            return {
              ...movie,
              slug: `${format.convertTitleToSlug(movie.title || '')}-${movie.id}`,
            };
          }),
          total_pages: item.total_pages,
          total_results: item.total_results,
        };
      });
  }, [data?.pages]);

  return { data: flattedData, ...rest };
};

export default useGetDiscoverMovie;
