import React from 'react';

import  { Link } from 'react-router-dom';

import {auth} from '../../firebase/firebase.utils';

import CartIcon  from '../cart-icon/cart-icon';
import CartDropDown from '../cart-dropdown/cart-dropdown';

import { ReactComponent as Logo } from '../../assets/crown.svg';


import { connect } from 'react-redux';

import './header.scss'

/* ensomatosi tis katastasis tou xristi */ 
const Header = ({currentUser , hidden}) => (

<div className='header'>
  <Link className='logo-container' to="/">
    <Logo className='logo'/>
  </Link>
  <div className='options'>
    <Link className='options' to='/shop'>
      SHOP
    </Link>
    <Link className='options'to='/shop'>
      CONTACT
    </Link>
    {
      /* an o xristis exi sindethi na vgei i etiketa sign out*/ 
      currentUser ?

      <div className='options' onClick={() => 
      auth.signOut()
      }> 

      SIGN OUT
      </div>
      :
        /* an o xristis den einai mesa na mporei na sindethoi */
      <Link className='options' to='/signin'> 
        SIGN IN 
      </Link>
    }

    <CartIcon />

  </div>
  { hidden ? null : <CartDropDown/> }
</div>

);

const mapStateToProps = ( { user : {currentUser }, cart : { hidden}} ) => ({

  currentUser,
  hidden

});


export default  connect(mapStateToProps)(Header);