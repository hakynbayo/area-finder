'use client';

import Image from 'next/image';
import React, { useState } from 'react';

const images = [
  '/svg/image1.svg',
  '/svg/image2.svg',
  '/svg/image3.svg',
  '/svg/image4.svg',
];

const ReviewImages: React.FC = () => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredImage(index);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  return (
    <div className='w-full flex sm:grid sm:grid-cols-2 grid-rows-2 gap-2 sm:gap-4'>
      {images.map((imageUrl, index) => (
        <div key={index}>
          <Image
            src={imageUrl}
            alt={`Image ${index + 1}`}
            width={240}
            height={240}
            className={`relative cursor-pointer transition-transform duration-300 transform ${
              hoveredImage === index ? 'scale-75 z-10' : 'scale-100'
            }`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      ))}
    </div>
  );
};

export default ReviewImages;
