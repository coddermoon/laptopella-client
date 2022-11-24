import React from 'react';

const PrimaryButton = ({children,classes,handler}) => {
    return (
        <button
      onClick={handler}
      className={`hover:text-gray-100 bg-primary text-white ${classes}`}
    >
      {children}
    </button>

    );
};

export default PrimaryButton;