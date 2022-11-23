import React from 'react';

const LazyLoading = () => {
    return (
        <div className="bg-gray-300 rounded-md shadow-md px-8 py-8 flex space-x-4 cursor-pointer items-center flex-col text-center space-y-4 lg:flex-row lg:text-left lg:space-y-0 animate-pulse">
        <div className="ring rounded-full h-24 w-24 lg:h-16 lg:w-16 bg-gray-300 animate-pulse"></div>
        <div>
          <div className="font-regular text-xl mb-2 lg:w-60 h-4 bg-gray-400 animate-pulse"></div>
          <div className="font-regular text-xl mb-2 lg:w-24 h-4 bg-gray-400 animate-pulse"></div>
          <div className="font-regular text-xl mb-2 lg:w-36 h-4 bg-gray-400 animate-pulse"></div>
          <p className="underline text-blue-500 font-medium"></p>
          <p className="font-medium"></p>
        </div>
      </div>
    );
};

export default LazyLoading;