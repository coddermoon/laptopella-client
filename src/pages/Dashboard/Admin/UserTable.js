

import React from 'react';
import toast from 'react-hot-toast';

const UserTable = ({users}) => {
  
    const handleDeleteUser = (email)=>{



    fetch(`http://localhost:5000/dashboard/user/delete/${email}`,{
        method:'DELETE',
    })
    .then(res=>res.json())
    .then(result=>{
        toast.success("delete successfully")
    })
    .catch(err=>console.error(err.message))




        

       
        
       
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
                    Email
                </th>
                <th scope="col" class="py-3 px-6 text-center">
                    Account type
                </th>
                <th scope="col" class="py-3 px-6 text-center">
                    user ID
                </th>
                <th scope="col" class="py-3 px-6 text-center">
                    Action
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
            <td class="py-4 px-6">
              <button onClick={()=>handleDeleteUser(user.email,user.uid)} className='bg-[#ff0000] text-[#fff] py-1 px-2'>delete</button>
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

export default UserTable;