import React from 'react';
import GoButton from '../goButton';

const Hero = () => {
  return (
    <div className='bg-[#5865F2] mx-5 my-5 flex flex-col justify-start rounded-[20px] h-[250px]'>
      <div className='flex justify-end mr-5 mt-5'>
        <GoButton route='about' />
      </div>
    </div>
  );
};

export default Hero;
