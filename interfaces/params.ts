export enum FILTER_MOVIE {
  POPULAR = 'popular',
  NOW_PLAYING = 'now_playing',
  TOP_RATED = 'top_rated',
  UPCOMING = 'upcoming',
}

export interface IParamsMovieByCategory {
  page?: number;
  take?: number;
  filterMovies?: FILTER_MOVIE;
  category?: string[];
}

export interface IParamsMovie {
  page?: number;
  take?: number;
  filterMovies?: FILTER_MOVIE;
  categoryId?: string;
  tagId?: string;
  freeText?: string;
  startPrice?: number;
  endPrice?: number;
}

// export interface IParams {
//   page?: number;
//   take?: number;
// }

// export interface IParamsBlog {
//   page?: number;
//   take?: number;
//   preSkip: number;
//   exceptBlogId?: string;
// }

// export interface IParamsTag {
//   page?: number;
//   take?: number;
// }

// export interface IParamReview {
//   productId?: string | undefined | string[];
//   page?: number;
//   take?: number;
// }

// export interface IParamsOrder {
//   page?: number;
//   take?: number;
//   orderStatus?: string;
// }

// export interface IParamsSettings {
//   type?: string;
// }

// export interface IParamsBanner {
//   page?: number;
//   take?: number;
//   pageType?: string;
// }
