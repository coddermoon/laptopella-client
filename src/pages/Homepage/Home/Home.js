import React from 'react';
import { Link } from 'react-router-dom';

import Products from '../../Shared/Products/Products';
import Brands from '../Brands/Brands';
import Hero from '../Hero/Hero';
import Subscription from '../Subscription/Subscription';

const Home = () => {
    return (
        <main >
            <Hero/>
            <Brands/>
            <Products/>
          <div className='text-center'>
          <Link to='/shop' className='bg-primary px-8 py-3 text-[#fff] font-semibold  hover:bg-gray-700' >Show All Product</Link>
          </div>
            <Subscription/>
        </main>
    );
};

export default Home;