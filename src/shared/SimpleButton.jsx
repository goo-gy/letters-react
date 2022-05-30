import React from 'react';

const SimpleButton = ({ text, func }) => {
  return (
    <button
      className="rounded-md border-2 py-3 px-5 font-semibold bg-white border-componentSky text-componentSky hover:border-pointBlue hover:text-pointBlue dark:border-componentWarm dark:text-componentWarm dark:hover:border-pointWarm dark:hover:text-pointWarm"
      onClick={func}
    >
      {text}
    </button>
  );
};

export default SimpleButton;
