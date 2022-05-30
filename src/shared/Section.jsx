import React from 'react';

const Section = ({ className, children }) => {
  return (
    <div
      className={
        className + ' rounded-lg bg-section w-full max-w-4xl my-10 p-5 m-auto'
      }
    >
      {children}
    </div>
  );
};

export default Section;
