'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';

import useMediaQuery from '@/hooks/useMediaQuery';

import Button from '@/components/buttons/Button';
import Logo from '@/components/Logo';
import GenModal from '@/components/modal/Modal';
import ProfileModal from '@/components/profileModal/ProfileModal';

const NavBar = ({ isHome }: { isHome?: boolean }) => {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false); // State for modal

  const toggleProfileModal = () => {
    setIsProfileModalOpen(!isProfileModalOpen);
  };

  const isMobile = useMediaQuery('(max-width: 768px)');
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen((prev) => !prev);
  };

  if (isMobile) {
    return (
      <>
        <div className='pb-6 flex  w-full items-center justify-between px-6'>
          <div className='relative h-[34px] w-[80px]'>
            <Link href='/' className='block w-max py-4 text-2xl px-6'>
              <Logo className='' variant='white' />
            </Link>
          </div>

          <div className='relative'>
            <BiMenuAltRight onClick={toggleModal} size={44} />
          </div>
        </div>
        <GenModal isOpen={open} handleCloseModal={toggleModal}>
          <div className='relative'>
            <Image
              src='/svg/profile.svg'
              className='relative'
              alt='dele'
              width={60}
              height={60}
            />
          </div>
        </GenModal>
      </>
    );
  }

  return (
    <nav className='fixed top-0  z-10 mb-10 flex w-full items-center justify-between bg-white  bg-opacity-30 px-6 py-4 backdrop-blur-lg backdrop-filter sm:px-10 lg:px-16 xl:px-24'>
      <div className='relative h-[56px] w-[131px]'>
        <Link href='/' className='block w-max py-4 text-2xl px-6'>
          <Logo className='' variant='white' />
        </Link>
      </div>
      {isHome && (
        <div className='item-center flex gap-10'>
          <p>Home</p>
        </div>
      )}

      <div className='relative flex items-center gap-4'>
        <p className='text-black text-base font-medium'>Welcome!</p>
        <Button
          onClick={toggleProfileModal}
          className='bg-transparent shadow-none border-none hover:bg-transparent hover:shadow-none hover:border-none'
        >
          <Image
            src='/svg/profile.svg'
            className='relative'
            alt='dele'
            width={60}
            height={60}
          />
        </Button>
      </div>

      <ProfileModal
        isOpen={isProfileModalOpen}
        handleCloseModal={toggleProfileModal}
      />
    </nav>
  );
};

export default NavBar;
