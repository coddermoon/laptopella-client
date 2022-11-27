import React from 'react';

const ProductTable = ({products}) => {
console.log(products)

    const handleDeleteUser=()=>{

    }

    return (
        <div className='container mx-auto'>
           
        <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="py-3 px-6 text-center">
                            image
                        </th>
                        <th scope="col" class="py-3 px-6 text-center">
                            name
                        </th>
                        <th scope="col" class="py-3 px-6 text-center">
                            price
                        </th>
                        <th scope="col" class="py-3 px-6 text-center">
                            Location
                        </th>
                        <th scope="col" class="py-3 px-6 text-center">
                            status
                        </th>
                       
                        <th scope="col" class="py-3 px-6 text-center">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>

                    {
                        products.map(product=>{
                            
                            const {productInfo, sellerInfo,sellStatus}= product
                            const {location}= sellerInfo
                            const {title,imageUrl,price}= productInfo
                            
                            return <>
                        
                        <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <img className='w-16 h-16 rounded-full' src={imageUrl} alt="" />
            </th>
            <td class="py-4 px-6">
               {title}
            </td>
            <td class="py-4 px-6">
               {price.resalePrice}
            </td>
            <td class="py-4 px-6">
                {location}

            </td>
            <td class="py-4 px-6">
               {sellStatus}
            </td>
            <td class="py-4 px-6">
              <button onClick={()=>handleDeleteUser()} className='bg-[#ff0000] text-[#fff] py-1 px-2'>delete</button>
            </td>
        </tr>
                        
                        </>})
                    }
                
                   
               
                      
                            
               
                      
                
                 
                   
                </tbody>
            </table>
        </div>
        
                </div>
    );
};

export default ProductTable;