import React from 'react';

const Button = ({ name = "Button" }) => {
  return (
    <div>
      <button className=''>{name}</button>
    </div>
  );
};

export default Button

export const SmallPrimaryButton = ({ name = "smallButton" }) => {
  return (
    <div>
      <button className=' bg-back-purple text-white px-9 py-6 rounded-full hover:text-back-purple hover:bg-white border-[1px] border-back-purple transition duration-300 font-bold text-sm/[18px] text-nowrap font-dm-sans'>{name}</button>
    </div>
  );
}

export const NormalPrimaryButtonWithIcon = () => {
  return (
    <div>
      <button></button>
    </div>

  );
};