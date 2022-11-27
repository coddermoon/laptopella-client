
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import MainLayout from "../Layout/MainLayout";
import Admin from "../pages/Dashboard/Admin/Admin";
import AllUsers from "../pages/Dashboard/Admin/AllUsers";

import Home from "../pages/Homepage/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp";
import MyOrder from "../pages/Orders/MyOrders/MyOrder";
import Payment from "../pages/Payment/Payment";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import NotFound from "../pages/Shared/NotFound";
import Shop from "../pages/ShopPage/Shop/Shop";
import PrivateRoute from "./PrivetRoute";
import Buyer from '../pages/Dashboard/Buyer/Buyer'

import SellerProducts from "../pages/Dashboard/Seller/Products/SellerProducts";
import AddProduct from "../pages/Dashboard/Seller/AddProduct/AddProduct";
import AdminRoute from "./AdminRoute";
import CommingSoon from "../pages/Shared/Comming/CommingSoon";

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
               
                element:<PrivateRoute><MyOrder/></PrivateRoute>
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
        element: <AdminRoute><DashboardLayout/></AdminRoute>,
        children:[

{
            path:'/dashboard/admin',
            element:<AdminRoute><CommingSoon/></AdminRoute>
},
{
            path:'/dashboard',
            element:<CommingSoon/>
},
{
    path:'/dashboard/admin/seller',
    loader:()=> fetch(`https://laptopella.vercel.app/allUsers?AccountType=Seller`),
    element:<AdminRoute><AllUsers/></AdminRoute>
},
{
    path:'/dashboard/admin/users',
    
    element: <Buyer/>
},{
    path:'/dashboard/seller/products',
    element:<AdminRoute><SellerProducts/></AdminRoute>
},
{
    path:'/dashboard/seller/addProduct',
    element:<AdminRoute> <AddProduct/></AdminRoute>
},
{
    path:'/dashboard/user',
    element: <MyOrder/>
}
        ]
    }
])

export default routes;
