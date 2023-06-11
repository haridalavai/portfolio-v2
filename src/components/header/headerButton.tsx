import Image from 'next/image';
import React from 'react';

export interface HeaderButtonProps {
  img_url: string;
  url: string;
}
const HeaderButton: React.FC<HeaderButtonProps> = ({ img_url, url }) => {
  return (
    <button
      className='border border-white p-2 md:p-3  rounded-full mx-1'
      onClick={() => {
        window.open(url, '_blank', 'noopener,noreferrer');
      }}
    >
      <img src={img_url} alt='github' className={`w-4 md:w-5`} />
    </button>
  );
};

export default HeaderButton;
