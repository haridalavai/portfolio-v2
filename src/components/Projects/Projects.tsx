import React from 'react';
import GoButton from '../goButton';
import PillComponent from '../pill';
import { motion } from 'framer-motion';
import AnimatedTextCharacter from '../animationComponents/AnimatedText';

const Projects = () => {
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
      className='flex flex-col justify-between rounded-[20px] bg-[#FEE75C] md:mr-5 text-black px-5 py-4 h-[155px]  md:h-[175px] mb-5'
    >
      <div className='flex flex-row justify-between items-end'>
        <PillComponent
          title='Personal Projects'
          color='black'
          style={{
            borderColor: 'black',
          }}
        />
        <GoButton route='projects' color='black' />
      </div>
      <div className='mb-3'>
        <div className='flex flex-row justify-between items-start py-1'>
          <div className='text-md sm:text-xl md:text-2xl'>
            you can find my personal projects here!
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
