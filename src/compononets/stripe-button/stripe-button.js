import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckOutButton = ({ price }) => {

  const priceForStripe = price * 100 ;
  const publishableKey = 'pk_test_51J57l3BOUbUOmklBhlL1K9yH0JQYl84SPp8ZVcqa9F1O5KgGXlxWAlGW7KHfpajTmJjIZLaLvDxpIOQXJfqB5Zie00pirETzyz';

  const onToken = token => {

    console.log(token);
    alert(' Payment Succesfull');
  }



  return (

    <StripeCheckout
      label=' Pay Now '
      name= 'CRWN Clothing Ltd. '
      billingAddress 
      shippingAddress 
      image = 'https://svgshare.com/i/CUz.svg'
      description = {` Your total is : $ ${price}`}
      amount = {priceForStripe}
      panelLabel= 'Pay Now '
      token = { onToken }
      stripeKey= { publishableKey }
    
    /> 

  );

};

export default StripeCheckOutButton;
