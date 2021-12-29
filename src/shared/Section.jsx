import React from 'react';

const Section = ({className, children}) => {
    return (
        <div className={className +" rounded-lg bg-section w-1/2 my-10"}>
            {children}
        </div>
    );
};

export default Section;