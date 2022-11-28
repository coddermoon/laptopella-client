import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useContext } from "react";
import toast from "react-hot-toast";

import { Link, Navigate} from "react-router-dom";
import logo from '../../assets/image/logo.png'
import { AuthContext } from "../../Contexts/AuthProvider";

const NavBar = () => {
 const {logOut,user}= useContext(AuthContext)
 console.log(user)



 const handleSignOut = ()=>{
  logOut()
  .then(res=>{
    toast.success('logout successFull')
    Navigate('/login')
  })
  .catch(err=>{
    console.error(err.message)
  })
 }

  const navLinks = [
    { id:1, name: "Home", path: "/" },
    { id:2, name: "Products", path: "/shop" },
    { id:3, name: "My orders", path: "/orders" },
    { id:4, name: "whislist", path: "/wishlist" },
  ];
  const profileLinks = [
    { id:1, name: "Dashboard", path: "/dashboard" },

  ];

  return (
    <div className="bg-primary">
      <Navbar  className="container mx-auto bg-white" fluid={true} rounded={true} >
      <Navbar.Brand href="https://flowbite.com/">
        <img
          src={logo}
          className="mr-3 h-6 sm:h-9"
          alt="Laptop Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        Laptopella
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 items-center">
        {
          user?.uid ?
          
           <Dropdown className="bg-[#fff]"
           arrowIcon={false}
           inline={true}
           label={
             <Avatar
               alt="User settings"
               img={user?.photoURL}
               rounded={true}
             />
           }
         >
           <Dropdown.Header >
             <span className="block text-sm">{user?.displayName}</span>
             <span className="block truncate text-sm font-medium">
             {user?.email}
             </span>
           </Dropdown.Header>
           <hr />
           {
             profileLinks.map(link=> <Dropdown.Item key={link.id} ><Link to={link.path}>{link.name}</Link></Dropdown.Item>)
           }
           
          <hr />
       
           <Dropdown.Item onClick={handleSignOut}>Sign out</Dropdown.Item>
         </Dropdown>
         :
         <Link className="text-[#fff]" to='/login'>Login</Link>
         
           
        }
       
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>

       {
         navLinks.map(navlink=> 
         
         <Link className="text-[#fff]" key={navlink.id} to={navlink.path}>{navlink.name}</Link> )
       }
       
       
        
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
};

export default NavBar;
