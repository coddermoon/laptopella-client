import React from 'react';
import { useLoaderData } from 'react-router-dom';
import UserTable from './UserTable';

const AllUsers = () => {
    const users = useLoaderData()
    
    return (
       <UserTable
       users={users}
       />
    );
};

export default AllUsers;