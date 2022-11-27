
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import MainLayout from "../Layout/MainLayout";
import Admin from "../pages/Dashboard/Admin/Admin";
import AllUsers from "../pages/Dashboard/Admin/AllUsers";
import Seller from "../pages/Dashboard/Seller/Seller/Seller";
import Home from "../pages/Homepage/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp";
import MyOrder from "../pages/Orders/MyOrders/MyOrder";
import Payment from "../pages/Payment/Payment";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import NotFound from "../pages/Shared/NotFound";
import Shop from "../pages/ShopPage/Shop/Shop";
import PrivateRoute from "./PrivetRoute";

const routes = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout/>,
        children:[
            {
                path: '/',
                element:<Home/>

            },{
                path:'/shop',
                element:<Shop/>
            }
            ,{
                path:'/orders',
                loader:()=> fetch('http://localhost:5000/orders'),
                element:<MyOrder/>
            }
            ,{
                path:'/shop/:id',
               loader:({params})=> fetch(`https://laptopella.vercel.app/products/${params.id}`),
                element:<PrivateRoute><ProductDetails/></PrivateRoute>
            },{
                path:'/payment/:id',
                element:<PrivateRoute><Payment/></PrivateRoute>,
                loader: ({params}) => fetch(`https://laptopella.vercel.app/products/${params.id}`)
            }
        ]

    },{
        path: '/login',
        element: <Login/>

    },{
        path: '/signup',
        
        element:<SignUp/>
    },{
        path:'*',
        element:<NotFound/>
    },{
        path:'/dashboard',
        element:<DashboardLayout/>,
        children:[
{
            path:'/dashboard/seller',
            element:<Seller/>
},
{
            path:'/dashboard/admin',
            element:<Admin/>
},
{
    path:'/dashboard/admin/seller',
  
    element:<AllUsers/>
},
{
    path:'/dashboard/admin/users',
    loader:()=> fetch(`http://localhost:5000/allUsers?AccountType=Buyer`),
    element:<AllUsers/>
}
        ]
    }
])

export default routes;
