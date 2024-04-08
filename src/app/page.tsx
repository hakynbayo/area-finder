'use client';

import { Suspense } from 'react';

import HomePage from '@/app/_components/HomePage';
import NavBar from '@/app/_components/NavBar';

const Page = () => {
  return (
    <div className='w-full flex flex-col gap-2 lg:gap-16'>
      <Suspense fallback={<div>Loading...</div>}>
        <NavBar />
        <HomePage />
      </Suspense>
    </div>
  );
};

export default Page;
