import React from 'react';
import HeaderButton from './headerButton';
import { headerLinks } from './headerConfig';

const Header = () => {
  return (
    <div className='flex justify-end items-center my-5 mr-5'>
      <div className='flex justify-center flex-row'>
        {headerLinks.map((link) => {
          return (
            <HeaderButton
              key={link.url}
              img_url={link.img_url}
              url={link.url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Header;
