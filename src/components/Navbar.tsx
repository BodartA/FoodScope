import React, { useState } from 'react';
import { SmallPrimaryButton } from './Buttons';
import { Ham } from 'lucide-react';
import { X } from 'lucide-react';
import { AlignRight } from 'lucide-react';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className='fixed top-0 left-0 w-full flex lg:h-[110px] h-[70px] pl-4 pr-4 sm:pl-10 sm:pr-10 lg:pl-16 lg:pr-16 justify-between font-dm-sans items-center shadow-sm bg-white'>

      <div className='flex lg:gap-[14px] gap-[7px] items-center'>
        <Ham color='#8D8BA7' className=' lg:w-9 lg:h-9 w-[22px] h-[22px]'></Ham>
        <div className='flex lg:gap-[6px] gap-[3px]'>
          <h1 className=' font-lilita font-bold lg:text-4xl text-lg text-md text-back-purple'>Food</h1>
          <h1 className=' font-lilita font-bold lg:text-4xl text-lg text-custom-p-900'>Scope</h1>
        </div>
      </div>

      <button onClick={handleClick} className={`lg:hidden items-center`}>
        {isOpen ? <X className=' stroke-back-purple h-7 w-7' /> : <AlignRight className=' stroke-back-purple h-6 w-6' />}
      </button>

      <div className={`${isOpen ? ' transition-transform -translate-x-full' : ' transition-transform translate-x-5'} 
      lg:transition-none lg:transform-none lg:items-center lg:flex gap-6 lg:static absolute top-full left-full leading-8 h-screen lg:w-auto lg:bg-inherit lg:h-auto mt-[1px] bg-custom-p-200 w-[264px] lg:p-0 lg:shadow-none shadow-l-sm`}>
        <ul className='lg:flex gap-[33px] text-back-purple pt-6 pb-4 lg:p-0'>
          <li><a href='/' className=' flex justify-center py-1'>Home</a></li>
          <li><a href='/about' className=' flex justify-center py-1'>About</a></li>
          <li><a href='/resources' className=' flex justify-center py-1'>Resources</a></li>
          <li><a href='/contact ' className=' flex justify-center py-1'>Contact</a></li>
        </ul>
        <div className=' flex justify-center'>
          <SmallPrimaryButton name={'Get Started'}></SmallPrimaryButton>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;