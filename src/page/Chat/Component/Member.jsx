import React from 'react';

const Member = ({ name }) => {
  return (
    <div className="rounded-md inline-block w-fit border-2 py-3 px-5 font-semibold bg-white border-componentSky text-componentSky hover:border-pointBlue hover:text-pointBlue dark:border-componentWarm dark:text-componentWarm dark:hover:border-pointWarm dark:hover:text-pointWarm">
      {name}
    </div>
  );
};

export default Member;
