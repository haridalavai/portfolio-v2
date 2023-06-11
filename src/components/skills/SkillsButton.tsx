import React from 'react';
import GoButton from '../goButton';
import { motion } from 'framer-motion';

const SkillsButton = ({
  route,
  color,
  label,
}: {
  route: string;
  color: string;
  label: string;
}) => {
  return (
    <motion.div
      className={`flex flex-row justify-between items-center py-2 border border-[${color}] rounded-[20px] px-5 hover:scale-125 overflow-hidden`}
      initial={{
        y: 20,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        type: 'spring',
        damping: 12,
        stiffness: 100,
      }}
    >
      <div className='text-sm sm:text-md md:text-xl'>{label}</div>
      <div className='text-sm sm:text-md md:text-xl'>
        <GoButton route={route} color={color} />
      </div>
    </motion.div>
  );
};

export default SkillsButton;
