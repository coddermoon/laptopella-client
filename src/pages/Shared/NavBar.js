import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import logo from '../../assets/image/logo.png'
const NavBar = () => {
  const navLinks = [
    { id:1, name: "Home", path: "/" },
    { id:2, name: "Products", path: "/shop" },
    { id:3, name: "cart", path: "/" },
    { id:4, name: "whislist", path: "/blog" },
  ];
  const profileLinks = [
    { id:1, name: "Home", path: "/" },
    { id:2, name: "Products", path: "/" },
    { id:3, name: "cart", path: "/" },
    { id:4, name: "whislist", path: "/blog" },
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
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline={true}
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded={true}
            />
          }
        >
          <Dropdown.Header className="bg-[#fff]">
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          {
            profileLinks.map(link=> <Dropdown.Item key={link.id} ><Link to={link.path}>{link.name}</Link></Dropdown.Item>)
          }
          
         
      
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
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
