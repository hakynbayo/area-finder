import React from 'react';

import TagItem from './TagItems';

const Tags: React.FC = () => {
  const tags = [
    'Schools',
    'Hospitals',
    'Resorts Park',
    'Shopping mall',
    'Airports',
    'Train stations',
    'Nightlife',
    'Public Wifi',
    'Parking Lot',
    'Security',
    'Public Transport',
    'Bus Station',
    'Quiet',
    'Temples',
    'Synagogues',
    'Stadiums',
    'Zoos',
    'Aquariums',
    'Amusement parks',
  ];

  return (
    <div className='flex gap-2'>
      {tags.map((tag, index) => (
        <TagItem key={index} text={tag} />
      ))}
    </div>
  );
};

export default Tags;
