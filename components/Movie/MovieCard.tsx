import RoutesConfig from '@/constants/url';
import { IMovie } from '@/interfaces/movie';
import { voteColor } from '@/utils/common';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MovieCard = ({ movie }: { movie: IMovie }) => {
  const { slug, poster_path: poster, vote_average: vote, title } = movie;
  return (
    <Link href={`${RoutesConfig.movieDetail}/${slug}`}>
      <div className='w-[150px] relative'>
        <div color='blue-gray' className='p-0 m-0 mb-4'>
          <Image
            width={150}
            height={225}
            src={`${RoutesConfig.poster}${poster}`}
            alt='card-image'
            className='rounded-lg'
          />
        </div>
        <div
          className={`ring-2 ring-offset-1 absolute bottom-[80px] left-[10px] w-[35px] h-[35px] rounded-full bg-[#113b11] text-sm flex justify-center items-center text-white font-medium ${voteColor(
            vote
          )}`}
        >
          <span>{Math.floor(vote * 10) + '%'}</span>
        </div>
        <div className='h-[80px]'>
          <p className='font-semibold h-[50px] overflow-ellipsis'>{title}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
