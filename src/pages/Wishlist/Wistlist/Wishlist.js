import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import ProductsCard from '../../Shared/ProductsCard/ProductsCard';

const Wishlist = () => {
    const {user}= useContext(AuthContext)
    const [data,setData]= useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/wishlist?email=${user?.email}`)
           .then(res => res.json())
           .then(data => setData(data) )
    },[user?.email])

    
    return (
        <div>
        <h2 className='text-center text-4xl font-bold my-5'>Featured Product</h2>
        <p className='w-2/3 mx-auto  mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-center'>You Also saved As Wishlist</p>

        {
           data.map(product=> <ProductsCard
           product={product}
           key={product._id}
           />) 
        }
    </div>
    );
};

export default Wishlist;