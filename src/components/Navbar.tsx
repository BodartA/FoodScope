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
    <nav className='fixed top-0 left-0 w-full flex h-[110px] pl-4 pr-4 sm:pl-10 sm:pr-10 lg:pl-16 lg:pr-16 justify-between font-dm-sans items-center shadow-sm bg-white'>

      <div className='flex gap-[14px]'>
        <Ham color='#8D8BA7' className=' w-9 h-9 my-auto'></Ham>
        <div className='flex gap-[6px]'>
          <h1 className=' font-lilita font-bold text-4xl text-back-purple'>Food</h1>
          <h1 className=' font-lilita font-bold text-4xl text-custom-p-900'>Scope</h1>
        </div>
      </div>

      <button onClick={handleClick} className={`lg:hidden items-center`}>
        {isOpen ? <X className=' stroke-back-purple h-8 w-8' /> : <AlignRight className=' stroke-back-purple h-7 w-7' />}
      </button>

      <div className={`${isOpen ? ' transition-transform -translate-x-full' : ' transition-transform translate-x-5'} lg:transition-none lg:transform-none lg:items-center lg:flex gap-6 lg:static absolute top-full left-full leading-8 h-screen lg:h-auto mt-[2px] bg-white z-40`}>
        <ul className='lg:flex gap-[33px] text-back-purple'>
          <li>Home</li>
          <li>About</li>
          <li>Resources</li>
          <li>Contact</li>
        </ul>
        <SmallPrimaryButton name={'Get Started'}></SmallPrimaryButton>
      </div>

    </nav>
  );
};

export default Navbar;