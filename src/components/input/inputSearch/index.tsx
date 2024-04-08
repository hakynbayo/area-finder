import { useFormik } from 'formik';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { ImSpinner2 } from 'react-icons/im';

import { cn } from '@/lib/utils';

import Button from '@/components/buttons/Button';

import { initialValues, validationSchema } from './validation';

export interface InputSearchProp
  extends React.InputHTMLAttributes<HTMLInputElement> {
  isLoading?: boolean;
  variant?: 'primary' | 'secondary';
  touched?: boolean;
  error?: string;
  inputClassName?: string;
  containerClassName?: string;
  updateQuery?: boolean;
}

const InputSearch = ({
  isLoading,
  disabled,
  variant = 'primary',
  touched,
  error,
  className,
  inputClassName,
  containerClassName,
  updateQuery,
  ...rest
}: InputSearchProp) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const formik = useFormik({
    initialValues: {
      ...initialValues,
      search: searchParams.get('search') || '',
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true);

      if (updateQuery) {
        const params = new URLSearchParams(searchParams);
        if (values.search) {
          params.set('search', values.search);
        } else {
          params.delete('search');
        }

        router.replace(`?${params.toString()}`, { scroll: false });
        setIsSubmitting(false);
        return;
      }

      const params = new URLSearchParams();
      if (values.search) {
        params.set('search', values.search);
      } else {
        params.delete('search');
      }

      await router.push(`/home?${params.toString()}`);
      setIsSubmitting(false);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className={cn(
        'flex w-full flex-col gap-4 rounded-md text-xs transition-all duration-300 ease-linear md:text-sm lg:text-base',
        [
          variant === 'primary' && 'border-secondary-grey bg-white',
          variant === 'secondary' && 'bg-secondary-grey',
        ],
        [touched && error && 'bg-primary-red/10'],
        [containerClassName && containerClassName],
      )}
    >
      <input
        type='text'
        inputMode='search'
        id='search'
        onChange={formik.handleChange}
        className={cn(
          'border border-light-blue text-secondary-black w-full rounded-lg bg-[#3366FF] bg-[url(https://api.iconify.design/uil/search.svg)] bg-[top_50%_left_1rem] bg-no-repeat px-2 py-2 pl-10 text-xs shadow-none outline-none ring-0  placeholder:text-xs placeholder:text-[#484851] focus:ring-0 sm:pl-[3.5rem] md:px-4 md:pl-12 md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base',
          [className && className],
          [inputClassName && inputClassName],
        )}
        disabled={disabled || isLoading}
        value={formik.values.search}
        {...rest}
      />

      {isLoading && (
        <div className='text-blue bg-light-blue absolute right-6 top-1/2 -translate-y-1/2'>
          <ImSpinner2 className='animate-spin' />
        </div>
      )}

      <Button
        type='submit'
        className='w-[30%] flex justify-center items-center px-4 py-4 text-base font-medium text-white bg-blue rounded-lg hover:bg-blue/80 disabled:bg-gray-200 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue/50'
        disabled={disabled || isSubmitting}
      >
        {isSubmitting ? <ImSpinner2 className='animate-spin mr-2' /> : null}
        Search
      </Button>
    </form>
  );
};

export default InputSearch;
