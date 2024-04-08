import React, { PropsWithChildren } from 'react';

import NavBar from '@/app/(authenticated)/home/_components/NavBar';

const UnAuthenticationLayout = async ({ children }: PropsWithChildren) => {
  return (
    <div className='layout_container'>
      <div className='layout_container_width grid grid-cols-1 grid-rows-[auto_1fr]'>
        <div className=''>
          <NavBar />
        </div>
        <section className='no-scrollbar grid h-full w-full place-items-center overflow-y-auto '>
          {children}
        </section>
      </div>
    </div>
  );
};

export default UnAuthenticationLayout;
