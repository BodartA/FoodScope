import React from 'react';
import { useRouteError } from "react-router-dom";
import errorImage from '../assets/ErrorImage.svg'
import Navbar from '../components/Navbar';

interface RouteError {
  data: string;
  error: {
    columnNumber: number;
    fileName: string;
    lineNumber: number;
    message: string;
    stack: string;
  };
  internal: boolean;
  status: number;
  statusText: string;
}

const ErrorPage = () => {

  const error = useRouteError() as RouteError;
  console.error(error);

  return (
    <>
      <Navbar />
      <div className='flex min-h-screen items-center justify-center mx-2'>
        <div className='text-center justify-center font-dm-sans lg:mt-[110px] mt-[70px]'>
          <h1 className=' text-5xl font-bold mb-4 text-back-purple'>Oops !</h1>
          <p className=' text-2xl font-semibold text-custom-p-900'>Sorry, an unexpected error has occurred.</p>
          <img src={errorImage} alt="ErrorImage" className=' max-w-[382px] max-h-[382px] mx-auto'></img>
          <p className=' text-xl text-custom-p-900'>
            <i>{error.statusText || error.error.message}</i>
          </p>
        </div>
      </div>
    </>

  );
};

export default ErrorPage;