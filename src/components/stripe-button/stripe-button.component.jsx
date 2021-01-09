import StripeCheckout from "react-stripe-checkout";
import { PUBLISHABLE_KEY } from "./stripe.config";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = PUBLISHABLE_KEY;  
  
  const onToken = token => {
      console.log(token);
      alert('Payment successful')
  }

  return (
      <StripeCheckout 
        label="Pay Now"
        panelLabel="Pay Now"
        name="Super Company"
        billingAddress
        shippingAddress
        image="https://sendeyo.com/up/d/f3eb2117da"
        description={`Your total price is $${price}`}
        amount={priceForStripe}
        stripeKey={publishableKey}
        token={onToken}
      />
  );
};

export default StripeButton;
