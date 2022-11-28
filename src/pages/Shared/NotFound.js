import React from 'react';
import { Link } from 'react-router-dom';


const NotFound = () => {
    return (
       
<div>
<div className='h-screen flex flex-col items-center justify-center'>
  <h2 className='text-center text-8xl font-semibold'>N<span className='text-primary'>
    
  o
    </span>t F<span className='text-primary'>
    
    o
      </span>und</h2>
<button  className="py-2 px-4 mt-20 bg-primary font-bold text-[#fff]"><Link to='/'>Back to Home</Link></button>

</div>

</div>
    );
};

export default NotFound;