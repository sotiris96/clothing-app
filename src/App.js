import React from 'react';
import {Route, Switch, Redirect } from 'react-router-dom';

import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import Header from './compononets/header/header';
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up';
import CheckOutPage from './pages/checkout/checkout' ;

import { createUserProfileDocument} from './firebase/firebase.utils'
import {auth} from './firebase/firebase.utils';

import {connect} from 'react-redux';
import { setCurrentUser } from './redux/user/user-actions';

import './App.css';


class App extends React.Component {

/* stin periptosi opou kapoios sindethi me to account tou google na aposindethoi */ 
unsubscribeFromAuth=null

/* stin periptosi opou kapoios sindethi
tote pernei ta dedomena meso tis leitourgia snapshot 
*/ 

componentDidMount(){

  const {setCurrentUser}= this.props;

  this.unsubscribeFromAuth= auth.onAuthStateChanged (async  userAuth => {

 if (userAuth){

   const userRef = await createUserProfileDocument(userAuth);

   userRef.onSnapshot ( snapShot => {

    setCurrentUser({
        id:snapShot.id,
        ...snapShot.data()
      });
    } );
   
    
 }
setCurrentUser( userAuth);
  });
}
/* stin periptosi opoy kapoios vgei na min meine mesa*/ 
componentWillUnmount(){
  this.unsubscribeFromAuth();
}

  render(){
    return (
      <div>
        {/* enimerosi tis kefalidas i katastasi tou xristi*/ }
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route  exact path='/checkout' component={CheckOutPage} /> 
          <Route exact  path='/signin'  render= { () => this.props.currentUser ?
          (<Redirect to='/'/>)
          :
          (<SignInAndSignUpPage/> )  
          }/>
        </Switch>
      </div>
    );
  }

}
const mapStateToProps = ({user}) => ({
  currentUser : user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch (setCurrentUser(user))

});

export default  connect (mapStateToProps,mapDispatchToProps)(App);
