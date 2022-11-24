import React from 'react';
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
            <Subscription/>
        </main>
    );
};

export default Home;