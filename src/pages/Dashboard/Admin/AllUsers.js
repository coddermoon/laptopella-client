import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllUsers = () => {
    const users = useLoaderData()
    console.log(users)
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
                    Email
                </th>
                <th scope="col" class="py-3 px-6 text-center">
                    Account type
                </th>
                <th scope="col" class="py-3 px-6 text-center">
                    user ID
                </th>
            </tr>
        </thead>
        <tbody>
        {
            users.map(user =>     <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <img className='w-16 h-16 rounded-full' src={user.photoURL} alt="" />
            </th>
            <td class="py-4 px-6">
               {user.displayName}
            </td>
            <td class="py-4 px-6">
               {user.email}
            </td>
            <td class="py-4 px-6">
                {user.accountType}

            </td>
            <td class="py-4 px-6">
               {user._id}
            </td>
        </tr>
              
                    
       
            )    
        }
         
           
        </tbody>
    </table>
</div>

        </div>
    );
};

export default AllUsers;