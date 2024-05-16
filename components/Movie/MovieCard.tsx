import { IMovie } from '@/interfaces/movie';
import Image from 'next/image';
import React from 'react';

const MovieCard = ({ movie }: { movie: IMovie }) => {
  return (
    <div className='w-[150px] relative'>
      <div color='blue-gray' className='relative h-56 p-0 m-0 mb-4'>
        <Image
          width={150}
          height={225}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt='card-image'
          className='rounded-lg'
        />
      </div>
      <div
        className={`ring-2 ring-offset-1 absolute bottom-[80px] left-[10px] w-[35px] h-[35px] rounded-full bg-[#113b11] text-sm flex justify-center items-center text-white font-medium ${
          movie.vote_average > 7
            ? 'ring-green-700'
            : movie.vote_average > 5
              ? 'ring-yellow-500'
              : 'ring-red-500'
        }`}
      >
        <span>{Math.floor(movie.vote_average * 10) + '%'}</span>
      </div>
      <div className='h-[80px]'>
        <p className='font-semibold h-[50px] overflow-ellipsis'>
          {movie.title}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
