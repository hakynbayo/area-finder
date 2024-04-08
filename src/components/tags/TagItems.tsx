import React from 'react';

interface TagItemProps {
  text: string;
}

const TagItem: React.FC<TagItemProps> = ({ text }) => {
  return (
    <div className='border bg-white px-2 rounded-md text-sm text-black whitespace-nowrap'>
      {text}
    </div>
  );
};

export default TagItem;
