import RoutesConfig from '@/constants/url';
import { IMovieDetail } from '@/interfaces/movie';
import {
  Button,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from '@material-tailwind/react';
import dayjs from 'dayjs';
import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const MovieMainInfo = ({ movie }: { movie: IMovieDetail }) => {
  const [activeTab, setActiveTab] = React.useState('poster');
  const {
    reviews,
    credits,
    images,
    belongs_to_collection: belongsToCollection,
    videos,
  } = movie;

  const { posters, backdrops } = images;
  const data = [
    {
      key: 'poster',
      label: 'Poster',
      value: 'poster',
      url: RoutesConfig.posterList,
      width: 220,
      height: 330,
      desc: posters,
    },
    {
      key: 'backdrop',
      label: 'Backdrop',
      value: 'backdrop',
      width: 533,
      height: 300,
      url: RoutesConfig.backdropList,
      desc: backdrops,
    },
  ];
  return (
    <div className='w-[80%]'>
      <h3 className='font-semibold text-2xl tracking-wide'>Top Billed Cast</h3>

      <div className='flex relative gap-4 mt-4 overflow-x-scroll '>
        {credits.cast.slice(0, 10).map((cast, index) => (
          <div
            key={cast.id + index.toString()}
            className='flex flex-col items-center shadow-md mb-4 rounded-lg'
          >
            <div className='h-[175px] w-[138px]'>
              <Image
                src={`${RoutesConfig.face}${cast.profile_path}`}
                alt={cast.name}
                width={138}
                height={175}
              />
            </div>
            <div>
              <p className='mt-2 font-semibold'>{cast.name}</p>
              <p className='text-[#737272]'>{cast.character}</p>
            </div>
          </div>
        ))}

        <div
          className='absolute top-0 right-0 h-[100%] pointer-events-none w-[60px]'
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255, 255, 255, 0) 0, #fff 100%)',
          }}
        />
      </div>

      <p className='text-xl font-semibold my-4 cursor-pointer w-fit hover:text-[#9b9a9a]'>
        Full Cast & Crew
      </p>
      <hr />

      <div className='flex mt-4 flex-col gap-4'>
        <h3 className='text-xl font-semibold'>
          Reviews{' '}
          <span className='text-[#6c6c6c]'>{reviews.results.length}</span>
        </h3>
        {reviews?.results.slice(0, 1).map((review) => (
          <div
            key={review.id}
            className='flex flex-col gap-4 border border-[#bebebe] p-4 rounded-md'
          >
            <div className='flex gap-8'>
              <div className='w-[50px] h-[50px] rounded-full bg-[#27550e] flex items-center justify-center'>
                <span className='font-medium text-white text-3xl'>
                  {review.author.split(' ').map((word) => word[0])}
                </span>
              </div>
              <div>
                <p className='font-semibold text-xl'>
                  A review by {review.author}
                </p>
                <div className='flex gap-2'>
                  <div className='bg-[#27550e] px-2 text-white flex items-center justify-center gap-2 rounded-sm'>
                    <FaStar />
                    <span>{review.author_details.rating * 10}%</span>
                  </div>
                  <p>
                    Written by <b>{review.author}</b> on{' '}
                    <b>{dayjs(review.created_at).format('DD/MM/YYYY')}</b>
                  </p>
                </div>
              </div>
            </div>

            <p className=' line-clamp-3'>{review.content}</p>
            {review.content.length > 500 ? (
              <button className='text-[#cdae3d]'>Read more</button>
            ) : null}
          </div>
        ))}
        <p className='text-xl font-semibold my-2 cursor-pointer w-fit hover:text-[#9b9a9a]'>
          Read All Reviews
        </p>
        <hr />
      </div>

      <Tabs value={activeTab}>
        <TabsHeader
          className='rounded-none border-b border-blue-gray-50 bg-transparent p-0'
          indicatorProps={{
            className:
              'bg-transparent border-b-2 border-gray-900 shadow-none rounded-none',
          }}
        >
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={activeTab === value ? 'text-gray-900' : ''}
            >
              {label}
            </Tab>
          ))}
          <Tab
            key={'video'}
            value={'video'}
            onClick={() => setActiveTab('video')}
            className={activeTab === 'video' ? 'text-gray-900' : ''}
          >
            {'Video'}
          </Tab>
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc, url, width, height }) => (
            <TabPanel
              className='flex overflow-x-scroll'
              key={value}
              value={value}
            >
              {desc?.slice(0, 10).map((item) => {
                return (
                  <div key={item.file_path}>
                    <Image
                      style={{ maxWidth: 'unset', maxHeight: 'unset' }}
                      src={`${url}${item.file_path}`}
                      alt={item.file_path}
                      width={width}
                      height={height}
                      className='rounded-lg'
                    />
                  </div>
                );
              })}
            </TabPanel>
          ))}
          <TabPanel
            className='flex overflow-x-scroll'
            key={'video'}
            value={'video'}
          >
            {videos.results?.slice(0, 10).map((item) => {
              return (
                <iframe
                  key={item.key}
                  width='853'
                  height='400'
                  src={`https://www.youtube.com/embed/${item.key}`}
                  allowFullScreen
                  title='MADAME WEB - Behind-the-Scenes Gag Reel'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                ></iframe>
              );
            })}
          </TabPanel>
        </TabsBody>
      </Tabs>

      <div className='relative rounded-md mt-10'>
        <Image
          width={1280}
          height={400}
          alt='collection'
          src={`${RoutesConfig.backdropCollection}${belongsToCollection?.backdrop_path}`}
        />
        <div
          style={{
            position: 'absolute',
            height: '100%',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 10,
            backgroundImage:
              'linear-gradient(to right, rgba(52.5, 31.5, 31.5, 1) calc((50vw - 170px) - 340px), rgba(52.5, 31.5, 31.5, 0.84) 50%, rgba(52.5, 31.5, 31.5, 0.84) 100%)',
          }}
        ></div>

        <div className='left-[32px] absolute z-[200] top-[50%] text-white translate-y-[-50%]'>
          <p className='font-semibold text-2xl'>
            Part of the {belongsToCollection?.name}
          </p>
          <p>Includes ....</p>
          <Button>VIEW THE COLLECTION</Button>
        </div>
      </div>
    </div>
  );
};

export default MovieMainInfo;
