import React from 'react';
import Products from '../../Shared/Products/Products';
import Brands from '../Brands/Brands';
import Hero from '../Hero/Hero';

const Home = () => {
    return (
        <main >
            <Hero/>
            <Brands/>
            <Products/>
        </main>
    );
};

export default Home;