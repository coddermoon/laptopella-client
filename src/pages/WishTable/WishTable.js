import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import ProductsCard from '../Shared/ProductsCard/ProductsCard';


const WishTable = () => {
    const {user}= useContext(AuthContext)
    const [data,setData]= useState([])
    useEffect(()=>{
        fetch(`https://laptopella.vercel.app/wishlist?email=${user?.email}`)
           .then(res => res.json())
           .then(data => setData(data) )
    },[user?.email])

    
    return (
        <div>
        <h2 className='text-center text-4xl font-bold my-5'>Featured Product</h2>
        <p className='w-2/3 mx-auto  mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-center'>You Also saved As Wishlist</p>
        <div className='grid gap-4 xm:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mx-auto items-center justify-center'>
        {
           data.map(product=> <ProductsCard
           product={product}
           key={product._id}
           />) 
        }


        </div>

       
    </div>
    );
};

export default WishTable;