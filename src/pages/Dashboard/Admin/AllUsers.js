import { useQuery } from '@tanstack/react-query';

import React from 'react';

import UserTable from './UserTable';


const AllUsers = () => {
    const accountType = "Seller"
    const {data:users=[]}= useQuery({
        queryKey: ['accountType',accountType],
        queryFn: () => fetch(`https://laptopella.vercel.app/allUsers?AccountType=${accountType}`)
        .then(res=>res.json())
    })
   
  

    
    return (
       <UserTable
       users={users}
       />
    );
};

export default AllUsers;