import React from 'react';
import Navbar from '../components/Navbar';

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className='flex min-h-screen items-center justify-center'>
        <div className=' flex font-dm-sans lg:mt-[110px] mt-[70px]'>
          <h1>Hello, my name is ...</h1>
        </div>
      </div>
    </>
  );
};

export default AboutPage;