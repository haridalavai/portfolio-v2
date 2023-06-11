import React from 'react';
import GoButton from '../goButton';
import PillComponent from '../pill';
import { motion } from 'framer-motion';

const Blog = () => {
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
      className='flex flex-col justify-between rounded-[20px] bg-[#57F287] md:mr-5 text-black px-5 py-4 h-[100px]  md:h-[150px] mb-5'
    >
      <div className='flex flex-row justify-between items-end'>
        <PillComponent
          title='Blog'
          color='black'
          style={{
            borderColor: 'black',
          }}
        />
        <GoButton route='#' color='black' />
      </div>
      <div className='mb-3'>
        <div className='flex flex-row justify-between items-start py-1'>
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
            className='text-md sm:text-xl md:text-2xl'
          >
            Coming Soon!
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Blog;
