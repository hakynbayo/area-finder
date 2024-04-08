import { motion } from 'framer-motion';
import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const amenities = [
  'Parking Lot',
  'Free Wifi',
  'Parking Lot',
  'Free Wifi',
  'Parking Lot',
  'Night Life',
  'Pet Store',
  'Night Life',
  'Pet Store',
  'Night Life',
  'Hospitals',
  'Childcare',
  'Hospitals',
  'Childcare',
  'Hospitals',
  'Adult Home',
  'Gym',
  'Adult Home',
  'Gym',
  'Adult Home',
  'Schools',
  'Security',
  'Schools',
  'Security',
  'Schools',
];

const Card = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [checkedItems, setCheckedItems] = useState<boolean[]>(
    new Array(amenities.length).fill(false),
  );

  const handleCheckboxChange = (index: number) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  const toggleAccordion = () => {
    setIsExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div className='w-full'>
      <div
        className='flex cursor-pointer justify-between rounded-md bg-[#F3F7FE] p-2'
        onClick={toggleAccordion}
      >
        <div>
          <p>Select Amenities</p>
        </div>
        <div>
          <motion.div
            initial={false}
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <IoIosArrowDown />
          </motion.div>
        </div>
      </div>
      {/* Hide the div below when not expanded */}
      {isExpanded && (
        <div className='lg:w-[630px] sm:w-full w-full h-[120px] md:h-[210px] relative bg-[#F3F7FE] border rounded-md lg:absolute sm:flex-row p-4 overflow-y-auto'>
          <div className='grid grid-cols-1 sm:grid-cols-5 gap-4'>
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className='flex items-center text-xs sm:text-sm whitespace-nowrap'
              >
                <input
                  type='checkbox'
                  id={`item-${index}`}
                  checked={checkedItems[index]}
                  onChange={() => handleCheckboxChange(index)}
                  className='h-4 w-4 border border-gray-300 bg-[#F3F7FE] rounded-sm focus:ring-[#F3F7FE]'
                />
                <label htmlFor={`item-${index}`} className='ml-2'>
                  {amenity}
                </label>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
