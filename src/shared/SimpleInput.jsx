import React from 'react';

const SimpleInput = (props) => {
  return (
    <input
      {...props}
      className="rounded border-2 bg-white border-componentSky text-componentSky hover:border-pointBlue hover:text-pointBlue dark:border-componentWarm dark:text-componentWarm dark:hover:border-pointWarm dark:hover:text-pointWarm"
    />
  );
};

export default SimpleInput;
