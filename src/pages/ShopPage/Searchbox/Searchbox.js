import React from 'react';

const Searchbox = () => {
    return (
       
<div className='my-10 container mx-auto w-1/3'>
    <h2 className='text-primary text-center my-4'>Search in your product</h2>
<form>   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-primary dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border  rounded-lg  focus:outline-none border-primary" placeholder="Search Mockups, Logos..." required/>
        <button type="submit" className="text-[#fff] absolute right-2.5 bottom-2.5 bg-primary hover:bg-blue-800  focus:outline-none font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>
</div>

    );
};

export default Searchbox;