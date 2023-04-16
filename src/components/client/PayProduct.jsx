import React, { useState, useEffect, useContext } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";
import "./../../assets/css/App.css";
import { baseURL } from "../libs/baseURL";
import { GeneralContext } from "../context/GeneralStatus";
import { Link } from "react-router-dom";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe("pk_test_51Mx30TGYrEPF3syusmeR61WQSeoxr2c4z92hlgIUzjtL8Jjfr451jr0VV2tLOTzSRPxoKzpTFpDD0PgBjxRs1ull00UBesUb8x");

export default function App() {
  const [clientSecret, setClientSecret] = useState("");
  const { totalProductos, totalPagar } = useContext(GeneralContext)

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    let b = 0;
    let c = 0;
    JSON.parse(localStorage.getItem("shoppingCart") || "[]") ?.map(p => {
      b+=Number(p.cantidadTotal)
      c+=Number(p.precioTotalProducto)
    })

    baseURL.post("/create-payment-intent",JSON.stringify({ amount: String(c.toFixed(2)).replace(/[.]/g, ""), products: Math.round(b) }) , {
      headers: { "Content-Type": "application/json" }
    })
      .then((res) => res.data)
      .then((data) => setClientSecret(data.clientSecret))
      .catch((err) => {console.log(err);});
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
      <div className='w-full py-4 sticky top-0 mb-7 rounded-lg bg-white flex justify-center shadow-md lg:relative lg:w-5/12 lg:max-w-lg items-center'>
          <div className='w-10/12 relative flex flex-col items-start'>
            <h1 className='font-dosis font-bold mb-2' >Resumen de la orden</h1>
            <div className='w-full flex justify-between'>
              <p className='font-dosis'>Total de productos:</p>
              <p className='font-dosis'>{totalProductos}</p>
            </div>
            <div className='w-full flex justify-between'>
              <p className='font-dosis'>Total a pagar:</p>
              <p className='font-dosis'>{"S/ "+Number(totalPagar).toFixed(2)}</p>
            </div>
        </div>
      </div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}