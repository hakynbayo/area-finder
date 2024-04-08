'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { PiArrowRight } from 'react-icons/pi';

import Button from '@/components/buttons/Button';
import ReviewModal from '@/components/ReviewModal/ReviewModal';
import Tags from '@/components/tags/tags';

const Top = () => {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  const toggleReviewModal = () => {
    setIsReviewModalOpen(!isReviewModalOpen);
  };

  useEffect(() => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setScrollPosition(scrollLeft);
      setContainerWidth(scrollWidth - clientWidth);
    }
  }, []);

  const handleScrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -100, // Adjust scroll amount as needed
        behavior: 'smooth',
      });
    }
  };

  const handleScrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 100, // Adjust scroll amount as needed
        behavior: 'smooth',
      });
    }
  };

  // Access location parameter on client-side only
  const address = window.location.search.split('=')[1];
  const UrlParams = new URLSearchParams(address);

  return (
    <div className='fixed top-10 md:top-24 z-10 mb-10 flex w-full items-center justify-between bg-[#F2F6FD] px-6 py-4 backdrop-blur-lg backdrop-filter sm:px-10 lg:px-16 xl:px-28'>
      <div className='w-full h-full flex flex-col gap-4'>
        <div className='flex flex-col lg:flex-row justify-between gap-4'>
          <div>
            <h1 className='text-xl md:text-3xl capitalize font-medium text-black'>
              {UrlParams}
            </h1>
            <p className='text-sm md:text-base text-black'>
              {' '}
              <span className='font-semibold'>"450"</span> Reviews{' '}
              <span className='font-normal'>
                (People are raving about the selected location)
              </span>
            </p>
          </div>
          <div className=' flex justify-between lg:justify-start lg:items-center gap-4'>
            <div>
              <Button
                onClick={toggleReviewModal}
                className='bg-blue py-4 px-8 rounded-md'
              >
                <span className='text-sm xl:text-base'> Leave Review </span>
              </Button>
              <ReviewModal
                isOpen={isReviewModalOpen}
                handleCloseModal={toggleReviewModal}
              />
            </div>
            <div className='flex gap-2'>
              <Button className='border border-blue p-4 bg-transparent hover:bg-transparent rounded-md'>
                <Image
                  src='/svg/icon.svg'
                  className='relative'
                  alt='dele'
                  width={20}
                  height={20}
                />
              </Button>

              <Button className='border border-blue p-4 bg-transparent hover:bg-transparent rounded-md'>
                <Image
                  src='/svg/share.svg'
                  className='relative'
                  alt='dele'
                  width={20}
                  height={20}
                />
              </Button>
            </div>
          </div>
        </div>

        <div className='relative flex justify-between items-center gap-4'>
          {scrollPosition > 0 && (
            <Button
              onClick={handleScrollLeft}
              className='absolute left-0 top-0 bottom-0 bg-white text-black border-0 hover:bg-white-50 hover:text-black hover:opacity-100 rounded-l-md z-10'
            >
              {'<'}
            </Button>
          )}
          <div
            className='w-[1160px] no-scrollbar overflow-x-auto'
            ref={containerRef}
          >
            <Tags />
          </div>
          {scrollPosition < containerWidth && (
            <Button
              onClick={handleScrollRight}
              className='absolute right-0 top-0 bottom-0 bg-white text-black border-0 hover:text-black hover:bg-white-50 hover:opacity-100 rounded-r-md z-10'
            >
              <PiArrowRight />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Top;
