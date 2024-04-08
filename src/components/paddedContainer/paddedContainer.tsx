import { PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

interface PaddedContainerProps extends PropsWithChildren {
  className?: string;
  isScrollable?: boolean;
}

const PaddedContainer = ({
  children,
  className,
  isScrollable = false,
}: PaddedContainerProps) => {
  return (
    <div
      className={cn(
        'px-4 pt-2 md:pt-12 md:px-16 xl:px-28',
        [isScrollable && 'h-full w-full overflow-y-auto overflow-x-hidden'],
        [className && className],
      )}
    >
      {children}
    </div>
  );
};

export default PaddedContainer;
