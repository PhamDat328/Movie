import { FILTER_MOVIE, IParamsMovie } from '@/interfaces/params';

export const GET_POPULAR_PRODUCTS_PARAMS: IParamsMovie = {
  page: 1,
  take: 9,
  filterMovies: FILTER_MOVIE.POPULAR,
};
export const GET_UPCOMING_PRODUCTS_PARAMS: IParamsMovie = {
  page: 1,
  take: 9,
  filterMovies: FILTER_MOVIE.UPCOMING,
};
export const GET_NOW_PLAYING_PRODUCTS_PARAMS: IParamsMovie = {
  page: 1,
  take: 9,
  filterMovies: FILTER_MOVIE.NOW_PLAYING,
};
export const GET_TOP_RATED_PRODUCTS_PARAMS: IParamsMovie = {
  page: 1,
  take: 9,
  filterMovies: FILTER_MOVIE.TOP_RATED,
};

// export const GET_ALL_PRODUCTS_INFINITE_PARAMS: IParamsMovie = {
//   take: 12,
//   filterProducts: FILTER_MOVIE.NEWEST,
//   startPrice: 0,
//   endPrice: 1000,
//   categoryId: '',
//   freeText: '',
//   tagId: '',
// };

// export const GET_PRODUCT_BY_HOT_CATEGORIES_PARAMS = {
//   take: 3,
// };
