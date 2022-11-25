
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ProductsCategory = () => {
    const [categoty,setCategory]= useState([])

    useEffect(()=>{
        axios.get('https://laptopella.vercel.app/category')
        .then(res=>setCategory(res.data))
    },[])
  
    return (
        
<div className='text-center'>
<div className="inline-flex rounded-md shadow-sm text-center" role="group">

    <button className='bg-primary px-3 py-1 text-[#fff] m-2 shadow-lg'>All</button>
    
    {
        categoty.map((item, index)=> <button
        key={index}
        className='bg-primary px-3 py-1 text-[#fff] m-2 shadow-lg'>{item}</button>
            
       )
    }
 



 
 
</div>
</div>

    );
};

export default ProductsCategory;