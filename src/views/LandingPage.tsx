import React from 'react';
import kitchen from '../assets/Kitchen.svg';

const LandingPage = () => {
  return (
    <div className='flex min-h-screen bg-white justify-center items-center'>

      <div className='lg:flex w-full lg:mt-[110px] mt-[70px]'>

        <div className='lg:content-center lg:w-1/2 border-black border-2'>

          <h1 className=' font-dm-sans text-back-purple text-5xl font-bold flex justify-center mb-6 lg:w-1/2 mx-auto border-red-400 border-2'>What's in the fridge ?<br/>That is the question ...</h1>
          <h2 className=' font-dm-sans text-grey-purple text-lg font-extralight mx-auto lg:max-w-1/2 border-green-400 border-2'>
            Don't tell me you've never wondered what's in your fridge. Whether it's just to know what you can cook or to find out how long that cream has been open and, by the way, when does it expire ? Should I throw it away ?
          </h2>
        </div>

        <div className='w-1/2'>
          <div className=' flex w-full content-center justify-center'>
            <img src={kitchen} alt='kitchen logo' className=' h-[560px] w-[560px]'></img>
          </div>
        </div>

        <div>
          
        </div>

      </div>

    </div>
  );
};

export default LandingPage;