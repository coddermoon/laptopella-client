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
            <h3 className="text-3xl text-center">Payment</h3>
            <h3 className="text-3xl text-center">title</h3>
            <p className="text-xl">Please pay <strong>$price</strong> to persuce</p>
            <div className='w-96 my-12 mx-auto'>
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