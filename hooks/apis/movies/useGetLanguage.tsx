import { TYPE_QUERY_KEYS } from '@/constants/typeQueryKeys';
import movieApi from '@/services/apis/movie';
import { useQuery } from '@tanstack/react-query';

export const useGetLanguage = () => {
  const { data, ...res } = useQuery({
    queryKey: [TYPE_QUERY_KEYS.GET_LANGUAGES],
    queryFn: () => movieApi.getLanguages(),
  });

  return { data, ...res };
};
