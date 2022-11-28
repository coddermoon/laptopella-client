import { Card } from 'flowbite-react';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const data = useLoaderData()
    const {productInfo,sellerInfo,_id}= data
    const {name,email,phone,location,isVerified}=sellerInfo

    const {title,imageUrl,description,price,brand,condition}= productInfo
    console.log(data)
    return (
        <div className='w-3/4 mx-auto my-10 shadow bg-[#fff]'>
            <Card className='border-none'>
                
    <h2 className='text-2xl font-semibold'>{title}</h2>

<span><small>Posted on 18 Nov 1:41 pm, Gulshan, Dhaka</small></span>

<div className='grid grid-cols-6 gap-2'>

    
    <div className="col-span-4">
        <button className='bg-[#E7EDEE] py-12 px-5'>
        <img src={imageUrl} alt="" />
        </button>
     
    </div>
    <div className='col-span-2'>
    <div className='flex gap-2 items-center'>
        <div className="profile">
            <img src="https://i.bikroy-st.com/u/sapnobilashfurniture/7a95dc37-8941-4b20-8c94-fef144898e5b/72/54/cropped.jpg" alt="" />
        </div>
        <div className="info">
            <h4 className='font-bold text-lg'>{name}</h4>
            <span className=' text-primary px-1 py-1 mt-3'>{
                isVerified ? 'verifird' : 'unverifird' 
            }</span>
           
            <p className='m-2'>{email}</p>
            <p>{phone}</p>
            <p className='text-primary font-semibold'>Location : {location}</p>
          
        </div>

    </div>

    <div className="box border border-primary rounded mt-6">
        <div className="content p-5">
            <h2 className='font-semibold mb-4'>safety Tips</h2>
            <ol className='p-4'>
                <li className='list-disc'>Meet in a safe & public place</li>
                <li className='list-disc'>Don’t pay in advance</li>
            </ol>
        </div>
    </div>
    

    </div>
  
</div>

{/* start description code */}

<div className='flex items-end '>
<span className='text-primary font-semibold text-2xl'>{price.resalePrice} $</span>

<span className='ml-3 line-through font-bold'>{price.mainPrice} $</span>
</div>
<p>brand : {brand}</p>
<p>condition:{condition}</p>
<h2 className='font-bold '>Description</h2>
<p>{description}</p>

<Link to={`/payment/${_id}`} className='bg-primary py-2 font-bold text-[#fff] text-center'>Checkout</Link>


            </Card>
        </div>
    );
};

export default ProductDetails;