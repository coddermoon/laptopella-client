import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import { Button } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";

const PaymentForm = ({ product }) => {
  const { user } = useContext(AuthContext);

  const [cardError, setCardError] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [success, setSuccess] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const { productInfo } = product;
  const { price } = productInfo;
  const mainPrice = price.resalePrice;

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: productInfo.title,
            email: user.email,
          },
        },
      });
      if (confirmError) {
        setCardError(confirmError.message);
        return
      }
      if(paymentIntent.status === "succeeded"){

       
        setSuccess("Payment success!");
        setTransactionId(paymentIntent.id);

      }
  };

  return (
    <div className="shadow mx-auto d-flex items-center justify-center">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "20px",
                color: "#424770",
                height: "800px",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="text-center">
          <Button
            type="submit"
            disabled={!clientSecret || !stripe}
            className="bg-primary my-6 font-bold text-[#fff] text-center"
          >
            pay
          </Button>
        </div>
      </form>
      <p className="text-red-500">{cardError}</p>
      {
            success && <div>
                <p className='text-green-500'>{success}</p>
                <p>Your transactionId: <span className='font-bold'>{transactionId}</span></p>
            </div>
        }
    </div>
  );
};

export default PaymentForm;
