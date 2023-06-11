import { useRouter } from 'next/router';
import React from 'react';

const GoButton = ({ route, color }: { route: string; color: string }) => {
  const router = useRouter();
  return (
    <button
      className=''
      onClick={() => {
        router.push(route);
      }}
    >
      <div
        className='text-2xl md:text-4xl group w-fit grid'
        style={{ clipPath: 'inset(0 0 0 0 )' }}
      >
        <div
          className={`[grid-area:1/1] text-[${color}]  flex items-center justify-center h-10 w-10 transition ease-in-out group-hover:delay-100 translate-y-10 -translate-x-10 group-hover:translate-y-0 group-hover:translate-x-0`}
        >
          ↗
        </div>
        <div
          className={`[grid-area:1/1] text-[${color}]  flex items-center justify-center h-10 w-10 transition ease-in-out delay-100 group-hover:delay-[0s] duration-300 group-hover:-translate-y-10 group-hover:translate-x-10`}
        >
          ↗
        </div>
      </div>
    </button>
  );
};

export default GoButton;
