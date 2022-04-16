import React from 'react';

export const Shop = ({ type }:{ type: string }):JSX.Element => (
  <div className="shop">
    {/* menu here */}
    <img src={`${process.env.PUBLIC_URL}/images/city/${type}Shop.jpg`} alt={`${type} shop`} />
  </div>
);
