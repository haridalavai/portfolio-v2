import React from 'react';
import { motion } from 'framer-motion';

export interface PillComponentProps {
  title: string;
  color: string;
  style?: React.CSSProperties;
}

const PillComponent: React.FC<PillComponentProps> = ({
  title,
  color,
  style,
}) => {
  const pillVariants = {
    hidden: {
      opacity: 0,
      y: 10,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };
  return (
    <motion.div
      className={`flex flex-row text-sm justify-center items-center border rounded-full border-[${color}] py-1 px-5 overflow-hidden hover:cursor-pointer`}
      style={style}
      initial={pillVariants.hidden}
      whileInView={pillVariants.visible}
      viewport={{
        once: true,
      }}
    >
      <div className='hover:scale-105'>{title}</div>
    </motion.div>
  );
};

export default PillComponent;
