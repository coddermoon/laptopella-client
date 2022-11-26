
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../pages/Shared/NavBar';
import SideNav from '../pages/Shared/Sidebar/Sidebar';

const DashboardLayout = () => {
    return (
        <div>
            <NavBar/>
            <div className='flex justify-start'>
            <SideNav/>
            <Outlet/>
            </div>
         

       





            
        </div>
    );
};

export default DashboardLayout;