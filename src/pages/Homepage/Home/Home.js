import React from 'react';
import { Link } from 'react-router-dom';
import UseTitle from '../../../hooks/UseTitle';


import Wishlist from '../../Wishlist/Wistlist/Wishlist';
import Brands from '../Brands/Brands';
import Hero from '../Hero/Hero';
import Subscription from '../Subscription/Subscription';

const Home = () => {
    UseTitle('Home')
    return (
        <main >
            <Hero/>
            <Brands/>
            <Wishlist/>
          <div className='text-center mt-20'>
          <Link to='/shop' className='bg-primary px-8 py-3 text-[#fff] font-semibold  hover:bg-gray-700' >Show All Product</Link>
          </div>
            <Subscription/>
        </main>
    );
};

export default Home;