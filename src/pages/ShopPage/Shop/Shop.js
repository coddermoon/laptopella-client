import React from 'react';
import Products from '../../Shared/Products/Products';
import Searchbox from '../Searchbox/Searchbox';

const Shop = () => {
    return (
        <div>
            <Searchbox/>
            <Products/>
        </div>
    );
};

export default Shop;