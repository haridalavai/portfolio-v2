import React from 'react';
import GoButton from '../goButton';
import PillComponent from '../pill';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <motion.div
      initial={{
        y: 20,
      }}
      whileInView={{
        y: 0,
      }}
      transition={{
        type: 'spring',
        damping: 12,
        stiffness: 100,
      }}
      viewport={{
        once: true,
      }}
      className='flex flex-col justify-between border border-white rounded-[20px] bg-transparent md:mr-5 px-5 py-4 h-[140px]  md:h-[155px] mb-5 md:mb-0'
    >
      <div className='flex flex-row justify-between items-end mb-2'>
        <PillComponent title='Experience' color='white' />
        <GoButton route='experience' color='white' />
      </div>
      <motion.div
        className='mb-3'
        initial={{
          y: 20,
        }}
        whileInView={{
          y: 0,
        }}
        transition={{
          type: 'spring',
          damping: 12,
          stiffness: 100,
        }}
        viewport={{
          once: true,
        }}
      >
        <hr />
        <div className='flex flex-row justify-between items-start py-1'>
          <div className='text-sm md:text-lg lg:text-xl'>Software Engineer</div>
          <div className='text-sm md:text-lg lg:text-xl'>2 years</div>
        </div>
        <hr />
      </motion.div>
    </motion.div>
  );
};

export default Experience;
