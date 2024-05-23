import { IMovieDetail } from '@/interfaces/movie';
import { ReactNode, createContext, useState } from 'react';

const MovieContext = createContext({
  movie: {},
  setMovie: (_movie: IMovieDetail) => {},
});

export const MovieProvider = ({ children }: { children: ReactNode }) => {
  const [movie, setMovie] = useState<IMovieDetail | {}>({});

  return (
    <MovieContext.Provider
      value={{
        movie,
        setMovie,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
