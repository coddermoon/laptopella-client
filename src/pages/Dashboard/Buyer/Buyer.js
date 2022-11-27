import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UserTable from '../Admin/UserTable';

const Buyer = () => {
    const accountType = "Buyer"
    const {data:users=[]}= useQuery({
        queryKey: ['accountType',accountType],
        queryFn: () => fetch(`http://localhost:5000/allUsers?AccountType=${accountType}`)
        .then(res=>res.json())
    })
   
  

    
    return (
       <UserTable
       users={users}
       />
    );
};

export default Buyer;