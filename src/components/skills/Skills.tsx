import React from 'react';
import SkillsButton from './SkillsButton';

const Skills = () => {
  return (
    <div className='flex flex-col justify-around h-full overflow-hidden'>
      <SkillsButton route='skills' color='white' label='Skills' />
      <SkillsButton route='resume' color='white' label='Resume' />
    </div>
  );
};

export default Skills;
