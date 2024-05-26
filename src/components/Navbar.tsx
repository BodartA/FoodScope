import React from 'react';
import Button from './Button';

const Navbar = () => {

  return (
    <div className='flex min-w-full h-110'>
      <div>
        <img></img>
        
        
        <h1>FoodScope</h1>
      </div>

      <div className='flex gap-6'>
        <ul className='flex gap-[33px]'>
          <li>Home</li>
          <li>About</li>
          <li>Resources</li>
          <li>Contact</li>
        </ul>
        <Button name={"toto"}/>
      </div>
    </div>
  );
};

export default Navbar;