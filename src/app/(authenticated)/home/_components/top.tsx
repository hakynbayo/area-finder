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
    <div className='fixed top-20 md:top-24 z-10 flex w-full bg-white md:bg-[#F2F6FD] items-center justify-between px-4 pt-6 sm:pt-10 lg:pt-4 pb-2 md:py-6 backdrop-blur-lg backdrop-filter sm:px-4 lg:px-16 xl:px-28'>
      <div className='w-full h-full flex flex-col gap-4'>
        <div className='flex flex-col md:flex-row justify-between gap-4'>
          <div className='flex flex-col gap-4'>
            <h1 className='text-base md:text-3xl capitalize font-medium text-black'>
              {UrlParams}
            </h1>
            <p className='text-xs md:text-base text-black'>
              {' '}
              <span className='font-semibold'>"450"</span> Reviews{' '}
              <span className='font-normal'>
                (People are raving about the selected location)
              </span>
            </p>
          </div>
          <div className='flex flex-col gap-4'>
            <div
              className='w-[1160px] block md:hidden no-scrollbar overflow-x-auto'
              ref={containerRef}
            >
              <Tags />
            </div>
            <div className='w-full flex md:flex-col lg:flex-row justify-between md:justify-start lg:items-center gap-2 md:gap-4'>
              <div className='w-[50%]'>
                <Button
                  onClick={toggleReviewModal}
                  className='bg-blue py-4 px-10 md:px-6 rounded-md whitespace-nowrap'
                >
                  <span className='text-sm xl:text-base'> Leave Review </span>
                </Button>
                <ReviewModal
                  isOpen={isReviewModalOpen}
                  handleCloseModal={toggleReviewModal}
                />
              </div>
              <div className='w-[50] flex gap-4 sm:gap-2'>
                <Button className='border border-blue py-4 px-6 bg-transparent hover:bg-transparent rounded-md'>
                  <Image
                    src='/svg/icon.svg'
                    className='relative'
                    alt='dele'
                    width={20}
                    height={20}
                  />
                </Button>

                <Button className='border border-blue py-4 px-6 bg-transparent hover:bg-transparent rounded-md'>
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
        </div>

        <div className='relative hidden md:flex justify-between items-center gap-4'>
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
