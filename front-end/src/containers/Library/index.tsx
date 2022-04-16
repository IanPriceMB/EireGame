import React from 'react';

export const Library = ():JSX.Element => (
  <div className="library">
    {/* menu here */}
    <img src={`${process.env.PUBLIC_URL}/images/city/library.jpg`} alt="Library" />
  </div>
);
