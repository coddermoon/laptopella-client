
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Homepage/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import NotFound from "../pages/Shared/NotFound";
import Shop from "../pages/ShopPage/Shop/Shop";

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
                path:'/shop/:id',
               
                element:<ProductDetails/>
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
    }
])

export default routes;
