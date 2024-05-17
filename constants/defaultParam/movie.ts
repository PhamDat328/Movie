import { FILTER_MOVIE, IParamsMovie } from '@/interfaces/params';

export const GET_POPULAR_MOVIES_PARAMS: IParamsMovie = {
  page: 1,
  take: 9,
  filterMovies: FILTER_MOVIE.POPULAR,
};
export const GET_UPCOMING_MOVIES_PARAMS: IParamsMovie = {
  page: 1,
  take: 9,
  filterMovies: FILTER_MOVIE.UPCOMING,
};
export const GET_NOW_PLAYING_MOVIES_PARAMS: IParamsMovie = {
  page: 1,
  take: 9,
  filterMovies: FILTER_MOVIE.NOW_PLAYING,
};
export const GET_TOP_RATED_MOVIES_PARAMS: IParamsMovie = {
  page: 1,
  take: 9,
  filterMovies: FILTER_MOVIE.TOP_RATED,
};
