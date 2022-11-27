import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import LazyLoading from '../components/LazyLoading';
import { AuthContext } from '../Contexts/AuthProvider';
import UseSeller from '../hooks/UseSeller';

const SellerRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = UseSeller(user?.email);
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <LazyLoading/>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;