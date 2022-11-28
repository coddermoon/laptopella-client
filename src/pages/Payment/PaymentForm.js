import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import { Button } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";

const PaymentForm = ({ product }) => {
  const { user } = useContext(AuthContext);
const [processing,setProcessing]= useState(false)
  const [cardError, setCardError] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [success, setSuccess] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const { productInfo, _id } = product;

  const { price,title } = productInfo;
  const mainPrice = price.resalePrice;

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://laptopella.vercel.app/create-payment-intent", {
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
    setProcessing(true);
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
      return;
    }
    if (paymentIntent.status === "succeeded") {
      const payment = {
        name:title,
        price: mainPrice,
        product_id: _id,
        email: user.email,
        transactionId: paymentIntent.id,
        
      };
      // post information in  database
      fetch("https://laptopella.vercel.app/payments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payment)
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
           
            
            setSuccess("Payment success!");
            setTransactionId(paymentIntent.id);
          }
        });
    }
    setProcessing(false);
  };

  return (
    <div className="shadow mx-auto mt-20 my-2 ">
      <form onSubmit={handleSubmit} className="my-5 h-[300px] shadow-2xl pt-20 px-10 " >
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
            disabled={!clientSecret || !stripe  || processing}
            className="bg-primary my-6 font-bold text-[#fff] text-center"
          >
            pay
          </Button>
        </div>
      </form>
      <p className="text-red-500">{cardError}</p>
      {success && (
        <div>
          <p className="text-green-500">{success}</p>
          <p>
            Your transactionId:{" "}
            <span className="font-bold">{transactionId}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default PaymentForm;
