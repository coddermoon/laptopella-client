import React, { useState } from 'react';
import './sidebar.css'
import { FaBars,FaRegChartBar, FaTh,  FaUserAlt } from 'react-icons/fa'
import { NavLink } from 'react-router-dom';

const SideNav = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);

    const menuItem=[
        {
            path:"/dashboard",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/dashboard/admin",
            name:"Admin",
            icon:<FaUserAlt/>
        },
        {
            path:"/dashboard/users",
            name:"Users",
            icon:<FaUserAlt/>
        },
        {
            path:"/dashboard/seller",
            name:"Seller",
            icon:<FaRegChartBar/>
        },
        
       
    ]
    return (
        <div className="container">
        <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
            <div className="top_section flex items-left justify-between text-right">
                {/* <h1 style={{display: isOpen ? "block" : "none"}} className="logo">La</h1> */}
                <div style={{marginLeft: isOpen ? "0px" : "0px"}} className="bars">
                    <FaBars onClick={toggle}/>
                </div>
            </div>
            {
                menuItem.map((item, index)=>(
                    <NavLink to={item.path} key={index} className="link" activeclassName="active">
                        <div className="icon">{item.icon}</div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                    </NavLink>
                ))
            }
        </div>
        <main>{children}</main>
     </div>
    );
};

export default SideNav;