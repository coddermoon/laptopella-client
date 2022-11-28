import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './PaymentForm';
import { useLoaderData, useNavigation } from 'react-router-dom';
import LazyLoading from '../../components/LazyLoading';
import { loadStripe } from '@stripe/stripe-js';
const Payment = () => {
    const product = useLoaderData();
    
    const navigation = useNavigation();
    
    if(navigation.state === "loading"){
        return <LazyLoading/>
    }
    const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PK}`);
    return (
        <div className='container mx-auto'>
            <div>
            <h3 className="text-3xl text-center mt-8">Payment Now for pursucse</h3>
            
         
            <div className='w-1/2 h-[600px] my-12 mx-auto'>
                <Elements stripe={stripePromise}>
                    <PaymentForm
                        product={product}
                    />
                </Elements>
            </div>
        </div>
        </div>
    );
};

export default Payment;