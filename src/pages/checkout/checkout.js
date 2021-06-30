import React from 'react';

import './checkout.scss';
import {connect} from 'react-redux';

import { createStructuredSelector } from 'reselect';

import StripeCheckOutButton from '../../compononets/stripe-button/stripe-button';

import CheckoutItem from '../../compononets/checkout-item/checkout-item';

import { selectCartItems , selectCartTotal , selectCartItemsCount } from '../../redux/cart/cart-selectors';

const CheckOutPage = ({ cartItems, total , total_products }) => (

  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span> Product </span>
     </div>
     <div className='header-block'>
        <span> Description </span>
     </div>
     <div className='header-block'>
        <span> Quantity </span>
     </div>
     <div className='header-block'>
        <span> Price  </span>
     </div>
   
     <div className='header-block'>
        <span> Remove </span>
     </div>
    </div> 
 
  
  { 
    cartItems.map( cartItem => 
      <CheckoutItem  key = {cartItem.id} cartItem={cartItem}/> 
      )
  } 
    <div className='total_products'>
      <span>Total Products : {total_products} </span> 
   
   <div className='total'> 
      <span> Total : $ {total} </span>
      <br/>
    </div>
      <div className='test-warning'>
        -Please use the following test credit cart for payment. 
        <br/>
        4242 4242 4242 4242 -Exp : 01/20 -CVV : 123 
      </div>
    
    </div>
      <div className='stripe-button'> 
      <StripeCheckOutButton price={ total }/> 
      </div> 
</div>

);
 
const mapStateToProps = createStructuredSelector ({
  cartItems: selectCartItems,
  total: selectCartTotal,
  total_products: selectCartItemsCount
});

export default connect(mapStateToProps)(CheckOutPage);