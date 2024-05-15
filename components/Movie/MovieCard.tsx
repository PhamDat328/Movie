import { IMovie } from '@/interfaces/movie';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from '@material-tailwind/react';
import Image from 'next/image';
import React from 'react';

const MovieCard = ({ movie }: { movie: IMovie }) => {
  return (
    <Card className='mt-6 w-96'>
      <CardHeader color='blue-gray' className='relative h-56'>
        <Image
          width={400}
          height={400}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt='card-image'
        />
      </CardHeader>
      <CardBody className='h-[200px]'>
        <Typography variant='h5' color='blue-gray' className='mb-2'>
          {movie.title}
        </Typography>
        <Typography>
          {movie.overview.length > 150
            ? `${movie.overview.slice(0, 150)}...`
            : movie.overview}
          {movie.overview.length === 0 &&
            'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to &quot;Naviglio&quot; where you can enjoy the main night life in Barcelona.'}
        </Typography>
      </CardBody>
      <CardFooter className='pt-0'>
        <Button>Read More</Button>
      </CardFooter>
    </Card>
  );
};

export default MovieCard;
