import React from 'react';
import GoButton from '../goButton';
import PillComponent from '../pill';
import { motion } from 'framer-motion';
import AnimatedText from '../animationComponents/AnimatedText';

const Hero = () => {
  return (
    <motion.div
      className='bg-[#5865F2] mx-5 my-5 flex flex-col justify-b rounded-[20px]  md:pb-10'
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
      <div className='flex justify-end mr-5 mt-5'>
        <GoButton route='about' color='white' />
      </div>
      <div className='flex flex-col-reverse justify-between px-5 md:px-20 my-1 md:my-4 items-start md:flex-row md:items-center'>
        <div className='flex flex-col justify-start items-start '>
          <div className='md:mb-3'>
            <AnimatedText text='Srihari Dalavai ~' />
          </div>
          <div className='flex flex-row flex-wrap mt-3 md:mt-0'>
            <PillComponent
              title='Full stack developer'
              color='white'
              style={{
                marginRight: '10px',
                marginBottom: '5px',
              }}
            />
            <PillComponent
              title='Illustrator'
              color='white'
              style={{
                marginRight: '10px',
                marginBottom: '5px',
              }}
            />
            <PillComponent
              title='Designer'
              color='white'
              style={{
                marginRight: '10px',
                marginBottom: '5px',
              }}
            />
          </div>
        </div>
        <motion.img
          src='hari.jpg'
          alt='hari'
          className='w-20 h-20 mb-3  md:mb-0 md:w-40 md:h-40 rounded-full object-cover'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{
            once: true,
          }}
        />
      </div>
    </motion.div>
  );
};

export default Hero;
