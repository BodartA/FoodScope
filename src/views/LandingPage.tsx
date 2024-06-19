import React from 'react';
import kitchen from '../assets/Kitchen.svg';
import { DefaultPrimaryButtonArrowResp } from '../components/Buttons';

const LandingPage = () => {
  return (
    <div className='flex min-h-screen bg-white justify-center lg:items-center'>

      <div className='lg:flex w-full lg:mt-[110px] mt-[70px]'>

        <div className='lg:content-center lg:w-1/2 mx-2'>

          <h1 className='font-dm-sans text-back-purple lg:text-5xl/[66px] text-4xl text-center font-bold flex lg:mb-4 mt-6 mb-3 lg:max-w-[574px] lg:max-h-[132px] max-w-[375px] max-h-[150px] mx-auto'>What's in the fridge ? That is the question ...</h1>
          <h2 className=' font-dm-sans text-grey-purple lg:text-lg/[30px] text-base text-center font-extralight mx-auto mb-10 lg:max-w-[574px] lg:max-h-[60px] max-w-[375px] max-h-[48px]'>
            Don't tell me you've never wondered what's in your fridge ? How long has this cheese been open ? When does it expire ? ...
          </h2>
          <div className='lg:mb-0 mb-10 text-center'>
            <DefaultPrimaryButtonArrowResp name='Get Started' />
          </div>
        </div>

        <div className='lg:w-1/2'>
          <div className=' flex w-full content-center justify-center'>
            <img src={kitchen} alt='kitchen logo' className=' lg:max-h-[560px] lg:max-w-[560px] max-h-[382px] max-w-[382px]'></img>
          </div>
        </div>

      </div>

    </div>
  );
};

export default LandingPage;