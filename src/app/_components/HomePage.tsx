import Image from 'next/image';
import React from 'react';

import InputSearch from '@/components/input/inputSearch';
import { PaddedContainer } from '@/components/paddedContainer';

const HomePage = () => {
  return (
    <PaddedContainer isScrollable>
      <div className='w-full overflow-hidden h-full sm:h-[550px] md:h-[580px] lg:h-[580px] xl:h-[680px] flex justify-between items-center'>
        <div className='w-full pt-24 sm:pt-2 sm:w-1/2 px-4 flex flex-col gap-8 justify-center'>
          <div className='w-full sm:w-[85%]'>
            <p className='text-4xl sm:text-3xl md:text-4xl lg:text-6xl font-bold sm:leading-[34px] md:leading-[52px] lg:leading-[77px]'>
              Find a place you will love to live!
            </p>
          </div>

          <div className='w-[90%]'>
            <p className='text-sm lg:text-xl xl:text-2xl font-normal'>
              See through the lenses of people who have lived or visited the
              neighbourhood you might have in mind.
            </p>
          </div>

          <div className='w-[95%]'>
            <InputSearch placeholder='Enter an Address' className='py-4' />
          </div>
        </div>

        <div className='relative pt-2 sm:pt-2 lg:pt-20 hidden sm:block'>
          <Image
            src='/svg/overlay.svg'
            className='relative'
            alt='overlay'
            width={380}
            height={360}
          />
        </div>
      </div>
    </PaddedContainer>
  );
};

export default HomePage;
