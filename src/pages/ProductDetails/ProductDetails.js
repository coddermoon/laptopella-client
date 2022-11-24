import { Card } from 'flowbite-react';
import React from 'react';

const ProductDetails = () => {
    return (
        <div className='w-3/4 mx-auto my-10 shadow bg-[#fff]'>
            <Card className='border-none'>
                
    <h2>কফি টেবিল সহ সোফা সেট পাচ্ছেন অফার প্রাইসে</h2>

<span><small>Posted on 18 Nov 1:41 pm, Gulshan, Dhaka</small></span>

<div className='grid grid-cols-6 gap-2'>

    
    <div class="col-span-4">
        <button className='bg-[#E7EDEE] py-12 px-5'>
        <img src="https://i.bikroy-st.com/kphi-ttebil-sh-sophaa-sett-paacchen-aphaar-praaise-for-sale-dhaka/cb9fbedc-0f34-487a-8825-a8980d7a711e/620/466/fitted.jpg" alt="" />
        </button>
     
    </div>
    <div className='col-span-2'>
    <div className='flex gap-2 items-center'>
        <div className="profile">
            <img src="https://i.bikroy-st.com/u/sapnobilashfurniture/7a95dc37-8941-4b20-8c94-fef144898e5b/72/54/cropped.jpg" alt="" />
        </div>
        <div className="info">
            <h4 className='font-bold text-lg'>Mahamodul Hasan Moon</h4>
            <span className=' text-primary px-1 py-1 mt-3'>verified member</span>
            <p>+8801771517322</p>
          
        </div>

    </div>
    

    </div>
  
</div>
            </Card>
        </div>
    );
};

export default ProductDetails;