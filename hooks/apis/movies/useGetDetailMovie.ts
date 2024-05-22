import { TYPE_QUERY_KEYS } from '@/constants/typeQueryKeys';
import movieApi from '@/services/apis/movie';
import { useQuery } from '@tanstack/react-query';

const useGetDetailMovie = (id: string) => {
  const { data, ...rest } = useQuery({
    queryKey: [TYPE_QUERY_KEYS.GET_DETAIL_MOVIE, id],
    queryFn: () => movieApi.getMovieDetail(id),
  });

  return { data, ...rest };
};

export default useGetDetailMovie;
