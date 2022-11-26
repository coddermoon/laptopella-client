import React, { useContext, useState } from 'react';
import './sidebar.css'
import { FaBars, FaTh,  FaUserAlt } from 'react-icons/fa'
import { NavLink } from 'react-router-dom';
import useAdmin from '../../../hooks/useAdmin';
import { AuthContext } from '../../../Contexts/AuthProvider';

const SideNav = ({children}) => {
    const { user } = useContext(AuthContext);
    const [userType] = useAdmin(user?.email)
    


    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);

    return (
        <div>
        <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
            <div className="top_section flex items-left justify-between text-right">
                {/* <h1 style={{display: isOpen ? "block" : "none"}} className="logo">La</h1> */}
                <div style={{marginLeft: isOpen ? "0px" : "0px"}} className="bars">
                    <FaBars onClick={toggle}/>
                </div>
            </div>

           
                    <NavLink to='/dashboard'  className="link" >
                        <div className="icon"><FaTh/></div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">Dashboard</div>
                    </NavLink>

                    {
                userType === "admin" && 

              <div>
                  <NavLink to='/dashboard/admin'  className="link" >
                <div className="icon"><FaUserAlt/></div>
                <div style={{display: isOpen ? "block" : "none"}} className="link_text">Admin</div>
            </NavLink>
                <NavLink to='/dashboard/admin/seller'  className="link" >
                <div className="icon"><FaUserAlt/></div>
                <div style={{display: isOpen ? "block" : "none"}} className="link_text">sellers</div>
            </NavLink>
                <NavLink to='/dashboard/reports'  className="link" >
                <div className="icon"><FaUserAlt/></div>
                <div style={{display: isOpen ? "block" : "none"}} className="link_text">Reports</div>
            </NavLink>
              </div>
            }
           
           {

            userType === "Seller" && 
            
            <NavLink to='/dashboard/seller'  className="link">
            <div className="icon"><FaUserAlt/></div>
            <div style={{display: isOpen ? "block" : "none"}} className="link_text">Resaler</div>
        </NavLink>

           }
           {

            userType === "Buyer" && 
            <NavLink to='/dashboard/user'  className="link" >
            <div className="icon"><FaUserAlt/></div>
            <div style={{display: isOpen ? "block" : "none"}} className="link_text">User</div>
        </NavLink>
  
           }
                   
                   
                    
           
        </div>
        <main>{children}</main>
     </div>
    );
};

export default SideNav;