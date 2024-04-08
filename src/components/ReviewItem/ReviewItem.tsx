'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { PiChat, PiStarFill, PiThumbsDown, PiThumbsUp } from 'react-icons/pi';

import Button from '@/components/buttons/Button';
import Input from '@/components/input/input';

const Reviews: React.FC = () => {
  const [thumbsUpCount, setThumbsUpCount] = useState(0);
  const [thumbsDownCount, setThumbsDownCount] = useState(0);
  const [isCommentVisible, setIsCommentVisible] = useState(false);

  const toggleCommentVisibility = () => {
    setIsCommentVisible(!isCommentVisible);
  };

  const handleThumbsUpClick = (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>,
  ) => {
    event.stopPropagation();
    setThumbsUpCount(thumbsUpCount + 1);
  };

  const handleThumbsDownClick = (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>,
  ) => {
    event.stopPropagation();
    setThumbsDownCount(thumbsDownCount + 1);
  };

  const handleInputClick = (event: React.MouseEvent<HTMLInputElement>) => {
    event.stopPropagation(); // Stop click event propagation to prevent toggling the comment visibility
  };

  return (
    <div
      className='w-full mb-6 flex flex-col bg-white h-max px-4  gap-2 cursor-pointer'
      onClick={toggleCommentVisibility}
    >
      <div className='flex justify-between items-center'>
        <div className='flex gap-2'>
          <Image
            src='/svg/james.svg'
            className='relative'
            alt='dele'
            width={20}
            height={20}
          />
          <p className='text-sm font-normal'>James T.</p>
          <p className='text-light-black text-sm font-normal'>5 months ago</p>
        </div>

        <div className='flex items-center gap-2'>
          <PiStarFill color='#FFD700' size={12} />
          <p className='text-sm font-normal'>4.0</p>
        </div>
      </div>

      <div className='cursor-pointer' onClick={toggleCommentVisibility}>
        <p className='text-base font-normal text-[#18181B]'>
          There is no stable electricity. The roads are fairly good and there is
          a sense of community. The drainage system is poor and most residents
          litter their surroundings. There are several grocery stores and
          Supermarkets.
        </p>
      </div>

      <div className='flex items-center gap-6 border-b pb-4'>
        <div className='flex items-center gap-1 text-[#0D2159]'>
          <PiThumbsUp
            size={20}
            className='cursor-pointer'
            color='#0D2159'
            onClick={handleThumbsUpClick}
          />
          <p className='text-sm'>{thumbsUpCount}</p>
        </div>

        <div className='flex items-center gap-1 text-[#0D2159]'>
          <PiThumbsDown
            size={20}
            className='cursor-pointer'
            color='#0D2159'
            onClick={handleThumbsDownClick}
          />
          <p className='text-sm'>{thumbsDownCount}</p>
        </div>

        <div className='flex items-center ml-8 gap-1 text-[#0D2159]'>
          <PiChat size={20} />
          <p className='text-sm'>24</p>
        </div>
      </div>

      {isCommentVisible && (
        <div className='flex justify-between items-center border-b'>
          <Input
            placeholder='Add a comment'
            id='text'
            type='text'
            className='py-1'
            onClick={handleInputClick} // Add click event handler to prevent propagation
          />
          <Button className='bg-blue py-0 rounded-md'>Post</Button>
        </div>
      )}
    </div>
  );
};

export default Reviews;
