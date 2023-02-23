import { useRouter } from 'next/router';
import React from 'react';

const GoButton = ({ route }: { route: string }) => {
  const router = useRouter();
  return (
    <button
      className='bg-white rounded-full'
      onClick={() => {
        router.push(route);
      }}
    >
      <img src='arrow-black.svg' alt='arrow' className='rotate-90 w-10 ' />
    </button>
  );
};

export default GoButton;
