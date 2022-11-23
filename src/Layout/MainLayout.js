import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer';
import NavBar from '../pages/Shared/NavBar';

const MainLayout = () => {
    return (
        <main className='bg-[#E7EDEE]' >
            <NavBar/>
            <div className='min-h-[50vh]'>
                <Outlet />

            </div>
        
            <Footer/>
        </main>
    );
};

export default MainLayout;