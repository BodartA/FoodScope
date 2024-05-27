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
      <button className=' bg-purple-400 border-2 border-black'>{name}</button>
    </div>
  );
};