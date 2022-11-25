import axios from 'axios';
import React, { useEffect, useState } from 'react';

import ProductsCard from '../ProductsCard/ProductsCard';
import ProductsCategory from '../ProductsCategory/ProductsCategory';

const Products = () => {
    const [products,setProducts]= useState([])

    useEffect(()=>{
        axios.get('http://localhost:5000/products')
        .then((res)=>setProducts(res.data))
        .catch(err=>console.error(err)
       
        )
    },[])
    return (
        <div className='container mx-auto my-12'>
           <div>
                <h2 className='text-center text-4xl font-bold my-5'>Our Brands</h2>
                <p className='w-2/3 mx-auto  mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatum laboriosam eum veritatis magnam eius exercitationem eligendi consequuntur nemo quidem!</p>
            </div>
            {/* products Options */}
            <ProductsCategory/>
            <div >
                <div className='grid gap-4 xm:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mx-auto items-center justify-center'>
               
               {
                products.map(product=>  <ProductsCard
                    key={product._id}
                    product={product}
                />)
               }
               
               

              

                </div>
               <div className="cta-btn my-6 text-center">
              
               </div>

            </div>

        </div>
    );
};

export default Products;