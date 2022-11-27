import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../Contexts/AuthProvider';
import ProductTable from './ProductTable';

const SellerProducts = () => {
    const {user}= useContext(AuthContext)

    const {data:products=[]}= useQuery({
        queryKey: ['accountType'],
        queryFn: () => fetch(`http://localhost:5000/seller/product/${user.email}`)
        .then(res=>res.json())
    })


    return (
       
        <ProductTable
        products={products}
        />
    );
};

export default SellerProducts;