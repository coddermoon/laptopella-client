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
<span className='text-primary font-semibold text-2xl'>4500 $</span>

<span className='ml-3 line-through font-bold'>2547 $</span>
</div>
<p>brand : HP</p>
<p>condition:used</p>
<h2 className='font-bold '>Description</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates et incidunt neque quisquam deleniti numquam tempore, nemo odio laborum at sint, ex atque cupiditate. Distinctio tempora nostrum error mollitia voluptate illum dolorum ducimus! At quos ducimus quidem, rerum quisquam odio deserunt quae! Aliquid, qui. Distinctio temporibus, eaque culpa aut quis modi fugit delectus eum facilis pariatur in, eos voluptatibus ullam atque, possimus at accusamus quidem iusto alias sint! Debitis dolore quas, sit voluptatum provident ab nam ullam cumque nulla sint quidem dolorum, eaque aliquid voluptates minus, corporis eligendi adipisci? Nulla, officiis labore! Illum debitis quisquam iste ut dolor ullam illo!</p>

<button className='bg-primary py-2 font-bold text-[#fff]'>Checkout</button>


            </Card>
        </div>
    );
};

export default ProductDetails;