import React from 'react';
import Experience from './Experience';
import Skills from './Skills';

const SkillsSection = () => {
  return (
    <div className='flex flex-col flex-wrap md:flex-row mx-5 my-5'>
      <div className='basis-2/3'>
        <Experience />
      </div>
      <div className='basis-1/3'>
        <Skills />
      </div>
    </div>
  );
};

export default SkillsSection;
