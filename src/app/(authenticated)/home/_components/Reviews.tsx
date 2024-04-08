import React from 'react';

import ReviewItem from '@/components/ReviewItem/ReviewItem';

const Reviews: React.FC = () => {
  const reviews = [
    {
      author: 'John Doe',
      date: '5 months ago',
      rating: 4.5,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      author: 'Taiwo O. (Admin)',
      date: '5 months ago',
      rating: 4.5,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      author: 'John Doe',
      date: '5 months ago',
      rating: 4.5,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      author: 'John Doe',
      date: '5 months ago',
      rating: 4.5,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      author: 'John Doe',
      date: '5 months ago',
      rating: 4.5,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    // Add more review objects as needed
  ];

  return (
    <div>
      {reviews.map((review, index) => (
        <ReviewItem key={index} {...review} />
      ))}
    </div>
  );
};

export default Reviews;
