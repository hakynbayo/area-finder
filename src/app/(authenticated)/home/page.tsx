'use client';

import React, { Suspense } from 'react';

import ReviewImages from '@/app/(authenticated)/home/_components/ReviewImages';
import Reviews from '@/app/(authenticated)/home/_components/Reviews';
import Top from '@/app/(authenticated)/home/_components/top';
import Loading from '@/app/(authenticated)/loading';

const Page = () => {
  return (
    <div className='w-full pt-[290px] sm:pt-[250px] md:pt-[320px] lg:pt-[280px] flex flex-col gap-2 sm:gap-16 md:gap-2'>
      <div>
        <Suspense
          fallback={
            <div>
              <Loading />
            </div>
          }
        >
          <Top />
        </Suspense>
      </div>
      <div className='flex flex-col-reverse md:flex-row gap-4 w-full px-4 md:px-8 lg:px-28'>
        <div className='flex w-full md:w-[75%] '>
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <Reviews />
          </Suspense>
        </div>
        <div className='w-full md:w-[40%]'>
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <ReviewImages />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Page;
