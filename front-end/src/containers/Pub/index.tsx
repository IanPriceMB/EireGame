import React from 'react';

export const Pub = ():JSX.Element => (
  <div className="Pub">
    {/* menu here */}
    <img src={`${process.env.PUBLIC_URL}/images/city/pub.jpg`} alt="Pub" />
  </div>
);
