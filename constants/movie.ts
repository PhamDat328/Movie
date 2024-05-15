import { GET_POPULAR_PRODUCTS_PARAMS } from './defaultParam/movie';

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
  { name: 'Popular trends', params: GET_POPULAR_PRODUCTS_PARAMS },
];

export const MAX_PRICE = 1000;
export const STEP_PRICE = 50;
