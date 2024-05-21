import {
  GET_NOW_PLAYING_MOVIES_PARAMS,
  GET_POPULAR_MOVIES_PARAMS,
  GET_TOP_RATED_MOVIES_PARAMS,
  GET_UPCOMING_MOVIES_PARAMS,
} from './defaultParam/movie';

export const FILTER_KEY = {
  LAYOUT: 'layout',
};
export const LAYOUT_TYPE = {
  GRID: 'grid',
  LIST: 'list',
};

export const layoutOptions = [
  { value: LAYOUT_TYPE.GRID, title: 'Grid' },
  { value: LAYOUT_TYPE.LIST, title: 'List' },
];

export const productTypes = [
  { name: 'Popular trends', params: GET_POPULAR_MOVIES_PARAMS },
];

export const MAX_PRICE = 1000;
export const STEP_PRICE = 50;

export const PARAMS_BY_CATEGORY = [
  {
    category: 'popular',
    params: GET_POPULAR_MOVIES_PARAMS,
  },
  {
    category: 'top-rated',
    params: GET_TOP_RATED_MOVIES_PARAMS,
  },
  {
    category: 'upcoming',
    params: GET_UPCOMING_MOVIES_PARAMS,
  },
  {
    category: 'now-playing',
    params: GET_NOW_PLAYING_MOVIES_PARAMS,
  },
];
