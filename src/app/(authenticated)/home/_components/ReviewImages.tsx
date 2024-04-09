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
    <div className='w-full overflow-x-scroll flex md:grid md:grid-cols-2 md:grid-rows-2'>
      {images.map((imageUrl, index) => (
        <div key={index} className='flex-shrink-0 pr-2'>
          <Image
            src={imageUrl}
            alt={`Image ${index + 1}`}
            width={240}
            height={240}
            className={`relative cursor-pointer transition-transform duration-300 transform ${
              hoveredImage === index ? 'scale-110 z-0' : 'scale-95'
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
