import React from 'react';

const Button = ( {name = "Button"} ) => {
  return (
    <div>
      <button className=''>{name}</button>
    </div>
  );
};

export default Button;