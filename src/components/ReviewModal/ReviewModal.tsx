import React, { useState } from 'react';
import { PiStarFill } from 'react-icons/pi';
import Modal from 'react-modal';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import Amenities from '@/components/amenities/amenities';
import Button from '@/components/buttons/Button';
import Checkbox from '@/components/input/checkbox';

import { ResponseProps } from './type';

const Review: React.FC<ResponseProps> = ({ handleCloseModal, isOpen }) => {
  const [rating, setRating] = useState<number>(0);
  const [reviewText, setReviewText] = useState<string>('');
  const [anonymousChecked, setAnonymousChecked] = useState<boolean>(false);

  const handleClick = (index: number) => {
    setRating(index + 1);
  };

  const handleAnonymousCheck = () => {
    setAnonymousChecked(!anonymousChecked);
  };

  const handleSubmit = () => {
    // Handle submit logic here
    // For demonstration, we'll just show a toast message
    toast.success('Review Submitted', {
      style: {
        color: '#28a745',
        border: '1px solid #28a745',
        padding: '1px 8px',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    });
    handleCloseModal();
  };

  const address =
    typeof window !== 'undefined' ? window.location.search.split('=')[1] : '';
  const UrlParams = new URLSearchParams(address);

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        shouldCloseOnEsc
        style={{
          overlay: {
            backgroundColor: '#1D3045',
            zIndex: 100,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'auto',
          },
          content: {
            outline: 'none',
          },
        }}
        shouldCloseOnOverlayClick={true}
        shouldReturnFocusAfterClose={true}
        ariaHideApp={false}
        className='h-max w-[90%] flex-shrink-0 rounded-md bg-[#FAFCFD] border-light-blue border drop-shadow-2xl md:h-max lg:w-[695px]'
      >
        <div className='w-full rounded-xl py-4 px-8 flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-center text-lg font-medium'>Review Location</h1>
            <h3 className='text-xl font-medium'>{UrlParams}</h3>
          </div>

          <div>
            <Amenities />
          </div>

          <div className='flex flex-col gap-2'>
            <p className='text-sm font-medium'>Rate Location</p>
            <div className='flex gap-3 items-center'>
              {[...Array(5)].map((_, index) => (
                <PiStarFill
                  key={index}
                  size={20}
                  onClick={() => handleClick(index)}
                  color={index < rating ? '#FFC70066' : '#E5E7EB'}
                  className='cursor-pointer'
                />
              ))}
            </div>
          </div>

          <div className='w-full flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
              <label htmlFor='review' className='text-sm font-medium'>
                Write Review
              </label>
              <textarea
                id='review'
                placeholder='Write your review'
                className='border h-[120px] border-light-blue rounded-md p-2 text-sm'
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
              />
            </div>
          </div>

          <div className='flex items-center text-sm font-[500]'>
            <Checkbox
              id='check'
              className='mt-4 h-3 w-3 cursor-pointer border rounded-sm border-[#484C4A] accent-black outline-none focus:outline-none focus:ring-0'
              checked={anonymousChecked}
              onChange={handleAnonymousCheck}
            />
            <label
              htmlFor='checkbox'
              className='mr-16 mt-2 text-sm text-[#484851]'
            >
              Post as Anonymous
            </label>
          </div>

          <div className='w-full flex gap-4 mb-2'>
            <Button
              className={`w-1/2 bg-blue py-4 px-8 flex justify-center items-center rounded-md text-base text-white ${
                rating === 0 && 'opacity-30 pointer-events-none' // Apply reduced opacity and disable pointer events if button is disabled
              }`}
              onClick={handleSubmit}
              disabled={rating === 0}
            >
              Submit
            </Button>

            <Button
              className='w-1/2 bg-transparent border-blue text-base text-blue py-4 flex justify-center items-center px-8 rounded-md hover:bg-transparent hover:text-blue'
              onClick={handleCloseModal}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
      <ToastContainer
        position='top-center'
        autoClose={3000} // Duration for which the toast message will be displayed
        hideProgressBar={true} // Show or hide the progress bar
        newestOnTop={false} // Display newest toast messages on top
        closeOnClick // Close toast message on click
        rtl={false} // Set to true for languages that are read right-to-left
        pauseOnFocusLoss // Pause toast timer when the window loses focus
        draggable // Allow users to drag the toast message
        pauseOnHover // Pause toast timer when hovered
      />
    </div>
  );
};

export default Review;
