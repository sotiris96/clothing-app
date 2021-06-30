import React ,{ useEffect }  from 'react';
import {Route, Switch, Redirect } from 'react-router-dom';

import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from './redux/user/user-selectors';
import { selectCollectionsForPreview } from './redux/shop/shop-selectors';

import { checkUserSession } from './redux/user/user-actions';

import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import Header from './compononets/header/header';
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up';
import CheckOutPage from './pages/checkout/checkout' ;

import {connect} from 'react-redux';


import './App.css';
 /* stin periptosi opou kapoios sindethi me to account tou google na aposindethoi   unsubscribeFromAuth = null;*/ 

 
/* stin periptosi opou kapoios sindethi
tote pernei ta dedomena meso tis leitourgia snapshot  componentDidMount
*/ 
  

  /* stin periptosi opoy kapoios vgei na min meine mesa*/

const App =({ checkUserSession , currentUser }) =>  {
 

  useEffect(() =>  {
    /* on component did mount () */
    checkUserSession()

  },[checkUserSession]);

 
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckOutPage} />
          <Route
            exact
            path='/signin'
            render={  () =>
                currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  
}

const mapStateToProps = createStructuredSelector({
  //name metavlitis : selector
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview
});

const mapDispatchToProps = dispatch =>  ({
  checkUserSession  : () => dispatch (checkUserSession())
});


export default connect(mapStateToProps, mapDispatchToProps)(App);