import React from 'react';

const Section = ({className, children}) => {
    return (
        <div className={className +" rounded-lg bg-section w-full max-w-lg my-10"}>
            {children}
        </div>
    );
};

export default Section;