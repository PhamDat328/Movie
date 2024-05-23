import { TYPE_QUERY_KEYS } from '@/constants/typeQueryKeys';
import movieApi from '@/services/apis/movie';
import { useQuery } from '@tanstack/react-query';
import format from '@/utils/format';
import { useCallback } from 'react';
import { IGetMovieResponse, IMovie } from '@/interfaces/movie';

const useGetMovieBySearch = (query: string) => {
  const { data, ...rest } = useQuery({
    queryKey: [TYPE_QUERY_KEYS.GET_MOVIE_BY_SEARCH, query],
    queryFn: () => movieApi.getMovieBySearch(query),

    select: useCallback((data: IGetMovieResponse) => {
      return {
        page: data.page,
        results: data?.results.map((item: IMovie) => {
          return {
            ...item,
            slug: `${format.convertTitleToSlug(item.title || '')}-${item.id}`,
          };
        }),
        total_pages: data.total_pages,
        total_results: data.total_results,
      };
    }, []),
  });

  return { data, ...rest };
};

export default useGetMovieBySearch;
