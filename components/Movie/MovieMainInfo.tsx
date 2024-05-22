import { TabsData } from '@/constants/movie';
import RoutesConfig from '@/constants/url';
import MovieContext from '@/contexts/MovieContext';
import { IMovieDetail } from '@/interfaces/movie';
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from '@material-tailwind/react';
import dayjs from 'dayjs';
import Image from 'next/image';
import React, { useContext } from 'react';
import { FaStar } from 'react-icons/fa';

const MovieMainInfo = () => {
  const [activeTab, setActiveTab] = React.useState('poster');

  const context = useContext(MovieContext);
  const { reviews, credits, images, videos }: IMovieDetail = context.movie;

  const { posters, backdrops } = images || {};

  TabsData[0].desc = posters || [];
  TabsData[1].desc = backdrops || [];

  const tabsData = TabsData;

  return (
    <div className='w-[80%]'>
      <h3 className='font-semibold text-2xl tracking-wide'>Top Billed Cast</h3>

      <div className='flex relative gap-4 mt-4 overflow-x-scroll '>
        {credits?.cast?.slice(0, 10).map((cast, index) => (
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
          <span className='text-[#6c6c6c]'>{reviews?.results?.length}</span>
        </h3>
        {reviews?.results?.slice(0, 1).map((review) => (
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
          {tabsData.map(({ label, value }) => (
            <Tab
              key={value}
              value={value || ''}
              onClick={() => setActiveTab(value || '')}
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
          {tabsData.map(({ value, desc, url, width, height }) => (
            <TabPanel
              className='flex overflow-x-scroll'
              key={value}
              value={value || ''}
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
              }) || <p>No data</p>}
            </TabPanel>
          ))}

          <TabPanel
            className='flex overflow-x-scroll'
            key={'video'}
            value={'video'}
          >
            {videos?.results?.slice(0, 10).map((item) => {
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
    </div>
  );
};

export default MovieMainInfo;
