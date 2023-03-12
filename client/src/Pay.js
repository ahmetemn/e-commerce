
import React, { useState, useEffect } from 'react'
import axios from "axios"
import StripeCheckout from "react-stripe-checkout"
const Pay = () => {

    const [stripeToken, setStripeToken] = useState(null)
    const KEY = "pk_test_51Mks6REhkz3xfScYcsBeNUpzn7QQTl2jBVALUgiBpmyNApHDpjyG9KabivZ1msytBqVnrkFOLfmIJYfEyuCcLamW008fBcA4wW"

    const onToken = (token) => {
        setStripeToken(token)
    }

    useEffect(() => {

        const makeRequest = async () => {
            try {

                const resToken = await axios.post("http://localhost:2800/api/stripe/payment", {
                   
                    
                        tokenId: stripeToken.tokenId,
                        amount: 2000,

                    }
                    
                );
                console.log(resToken.data)
            } catch (error) {
                console.log(error)
            }
        };

        stripeToken && makeRequest()

    }, [stripeToken])
    return (
        <div style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}>


            <StripeCheckout name='Ahmet Shop' image="https://thumbs.dreamstime.com/b/lets-shopping-logo-design-template-cart-icon-designs-134743663.jpg" billingAddress shippingAddress description='your total is $20' amount={2000} token={onToken} stripeKey={KEY} >
                <button style={{
                    border: "none",
                    width: 120,
                    borderRadius: 5,
                    padding: "20px",
                    backgroundColor: "black",
                    color: "white",
                    fontWeight: "600",
                    cursor: "pointer"
                }}>

                    Pay Now
                </button>

            </StripeCheckout>
        </div>
    )
}

export default Pay