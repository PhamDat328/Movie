import RoutesConfig from '@/constants/url';
import { IMovie } from '@/interfaces/movie';
import { voteColor } from '@/utils/common';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MovieCard = ({ movie }: { movie: IMovie }) => {
  const { slug, poster_path: poster, vote_average: voteAverage, title } = movie;
  return (
    <Link href={`${RoutesConfig.movieDetail}/${slug}`} className='relative'>
      <div className='relative'>
        <Image
          width={150}
          height={225}
          src={`${RoutesConfig.poster}${poster}`}
          alt='card-image'
          className='rounded-lg'
        />
      </div>

      <div
        className={`ring-2 ring-offset-1 absolute bottom-[28px] left-[10px] w-[35px] h-[35px] rounded-full bg-[#113b11] text-sm flex justify-center items-center text-white font-medium 
        ${voteAverage && voteAverage >= 7.5 ? 'ring-green-500' : voteAverage && voteAverage > 5 ? 'ring-[#f9cd3c]' : 'ring-red-500'}`}
      >
        <span>{Math.floor((voteAverage || 0) * 10) + '%'}</span>
      </div>

      <p className='font-semibold w-[150px] line-clamp-1 mt-4'>{title}</p>
    </Link>
  );
};

export default MovieCard;
