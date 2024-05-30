import React from 'react';
import { SmallPrimaryButton } from './Buttons';
import { Ham } from 'lucide-react';

const Navbar = () => {

  return (
    <div className='fixed top-0 left-0 w-full flex h-[110px] pl-4 pr-4 sm:pl-10 sm:pr-10 lg:pl-16 lg:pr-16 justify-between font-dm-sans'>
      <div className='flex my-auto gap-[14px]'>
        <Ham color='#8D8BA7' className=' w-9 h-9 my-auto'></Ham>
        <div className='flex gap-[6px]'>
          <h1 className=' font-lilita font-bold text-4xl text-back-purple'>Food</h1>
          <h1 className=' font-lilita font-bold text-4xl text-custom-p-900'>Scope</h1>
        </div>
      </div>

      <div className='my-auto lg:flex gap-6'>
        <ul className='my-auto lg:flex gap-[33px] text-back-purple'>
          <li>Home</li>
          <li>About</li>
          <li>Resources</li>
          <li>Contact</li>
        </ul>
        <div className=''>
          <SmallPrimaryButton name={'Get Started'}></SmallPrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;