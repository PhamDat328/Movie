import { Banner } from '@/components/Home';
import ListMovieLayout from '@/components/layouts/ListMovieLayout';
import { GET_POPULAR_PRODUCTS_PARAMS } from '@/constants/defaultParam/movie';
import { useGetPopularMovies } from '@/hooks/apis';

export default function Home() {
  const { data: popularMovies } = useGetPopularMovies(
    GET_POPULAR_PRODUCTS_PARAMS
  );
  console.log(popularMovies);

  return (
    <>
      <Banner />

      <ListMovieLayout
        heading='Popular Movie'
        // layout='CAROUSEL_GRID'
        movies={popularMovies?.results || []}
      />
    </>
  );
}
