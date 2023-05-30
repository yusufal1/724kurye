import { useState } from 'react'
import { PayPalButtons } from "@paypal/react-paypal-js";

const PaypalCheckoutButton = (props) => {
    const { product } = props;

    const [paidFor, setPaidFor] = useState(false)
    const [error, setError] = useState(null)

    const handleApprove = (orderId) => {
        // Call backend function to fulfill order

        // if response is success
        setPaidFor(true);
        // Refresh user's account or subscription status

        // if the response is error
        // setError("Your payment was processed successfully. However, we are unable to fulfill your purchase. Please contact us at support@724kurye.com")
    }  

    if(paidFor) {
        // Display success message, modal or redirect user to success page
        alert("Thank you for your purchase!")
    }

    if(error) {
        // Display error message, modal or redirect user to error page
        alert(error)
    }

    return <PayPalButtons 
        createOrder={(data, actions) => {
            return actions.order.create({
                purchase_units: [
                    {
                        description: product.description,
                        amount: {
                            value: product.price
                        }
                    }
                ]
            })
        }}
        onApprove={async(data, actions) => {
            const order = await actions.order.capture();
            console.log("order", order);

            handleApprove(data.orderID)
        }}
        onCancel={() => {
            // Display cancel message, modal or redirect user to cancel page or back to cart
        }}
        onError={(err) => {
            setError(err)
            console.error("Paypal Checkout onError", err);
        }}
    />
}

export default PaypalCheckoutButton;