import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JTnIJSBPR5FWwKEhWxcZtxpVScYsi3cTvVgM4xh8QL31MUNLw5ZMNQJhsVcsTGxjhOqtn0JrHzpJNpXI9ngeSaX00kX0De9qK";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful!");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="ECOMM Ltd."
      billingAddress
      shippingAddress
      description={`Your total amount is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
