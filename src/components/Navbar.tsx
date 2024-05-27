import React from 'react';
import { SmallPrimaryButton } from './Buttons';
import groceryImg from '../assets/grocery-shelf.png';
import Button from './Buttons';

const Navbar = () => {

  return (
    <div className='flex h-[110px] pl-[110px] pr-[110px] justify-between'>
      <div className='flex my-auto'>
        <img className=' h-8 w-8' src={groceryImg}></img>
        <h1 className=''>FoodScope</h1>
      </div>

      <div className='my-auto md:flex gap-6'>
        <ul className='flex gap-[33px]'>
          <li>Home</li>
          <li>About</li>
          <li>Resources</li>
          <li>Contact</li>
        </ul>
        <SmallPrimaryButton name='Get Started'></SmallPrimaryButton>
      </div>
    </div>
  );
};

export default Navbar;