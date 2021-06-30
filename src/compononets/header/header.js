import React from 'react';


import {auth} from '../../firebase/firebase.utils';

import CartIcon  from '../cart-icon/cart-icon';
import CartDropDown from '../cart-dropdown/cart-dropdown';

import {OptionLink, OptionsContainer, HeaderContainer,
LogoContainer } from './headerstyle'

import { ReactComponent as Logo } from '../../assets/crown.svg';

import { signOutStart } from '../../redux/user/user-actions';

import { connect } from 'react-redux';

import './header.scss'

/* ensomatosi tis katastasis tou xristi */ 
const Header = ({currentUser , hidden, signOutStart }) => (

   <HeaderContainer> 
    <LogoContainer to="/">
      <Logo className='logo'/>
    </LogoContainer>
      <OptionsContainer>
      <OptionLink to='/shop'>
        SHOP
      </OptionLink>
      <OptionLink to='/shop'>
        CONTACT
      </OptionLink>
      {
        /* an o xristis exi sindethi na vgei i etiketa sign out   */ 
        currentUser ? (
  
        <OptionLink as='div' onClick= { signOutStart }> 
  
        SIGN OUT
        </OptionLink>
       ) 
       : (
          /* an o xristis den einai mesa na mporei na sindethoi */
        <OptionLink to='/signin'> 
          SIGN IN 
        </OptionLink>
      )
    }
  
      <CartIcon />
    </OptionsContainer>

    { hidden ? null : <CartDropDown/> }

      </HeaderContainer>
  
  );

  const mapDispatchToProps  = (dispatch) => ({

    signOutStart:  () => dispatch(signOutStart())

  });
  
  const mapStateToProps = ( { user : {currentUser }, cart : { hidden}} ) => ({
  
    currentUser,
    hidden
  
  });
  
  
  export default  connect(mapStateToProps, mapDispatchToProps)(Header);