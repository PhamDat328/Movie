import { TYPE_QUERY_KEYS } from '@/constants/typeQueryKeys';
import movieApi from '@/services/apis/movie';
import { useQuery } from '@tanstack/react-query';

export const useGetGenres = () => {
  const { data, ...res } = useQuery({
    queryKey: [TYPE_QUERY_KEYS.GET_GENRES],
    queryFn: () => movieApi.getGenres(),
  });

  return { data, ...res };
};
