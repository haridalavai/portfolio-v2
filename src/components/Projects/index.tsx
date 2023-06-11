import React from 'react';
import GoButton from '../goButton';
import PillComponent from '../pill';
import Blog from './Blog';
import Illustrations from './Illustrations';
import Projects from './Projects';

const ProjectSection = () => {
  return (
    <div className='flex flex-col flex-wrap md:flex-row mx-5 my-5'>
      <div className='basis-2/4'>
        <Projects />
        <Blog />
      </div>
      <div className='basis-2/4'>
        <Illustrations />
      </div>
    </div>
  );
};

export default ProjectSection;
