import { PARAMS_BY_CATEGORY } from '@/constants/movie';

export const getParamsByType = (slug: string) => {
  return (
    PARAMS_BY_CATEGORY.find((item) => item.category === slug)?.params || {}
  );
};

export const voteColor = (vote: number) => {
  if (vote > 7) return 'ring-[#44ff00]';
  if (vote > 5) return 'ring-yellow-700';
  return 'ring-red-700';
};
