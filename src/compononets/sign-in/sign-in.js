import React from 'react';

import FormInput from '../../compononets/form-input/Form-Input';
import CustomButton from '../../compononets/custom-button/custom-button';


import {auth, signInWithGoogle } from '../../firebase/firebase.utils'

import './sign-in.scss';



class SignIn extends React.Component{

  constructor(props){
    super(props);

    this.state= {
      email: '',
      password: ''
    }
  }

  /* pou tha kano ipovoli na katharisi i forma */ 
  handleSubmit= async event  => {

    event.preventDefault ();

    const { email , password } = this.state;
    

    try{

      await auth.signInWithEmailAndPassword(email, password);
      this.setState({email: ' ', password: ''})
    }
    catch (error){
      console.log(error);
    }

  }

    /* pou tha grapso kai tha figo tote tha meini i eggrafi sto pedio */ 

  handleChange = event  => {

    const {value, name} =event.target;

    this.setState ({[name] : value })

  }

  render(){
    return(
      <div className='sign-in'>
        <h2> I already have an account. </h2>
        <span> Sign in with your email and password.  </span>
       
        <form onSubmit= { this.handleSubmit }>
          <br/>
          <label className='label-design' > Email </label>
          <FormInput name="email" type="email" value= {this.state.email} handleChange={this.handleChange} label='- Insert your email'  required/>

          <label className='label-design' > Password </label>
          <FormInput name="password" type="password" value={ this.state.password } handleChange={ this.handleChange } label ='- Insert your code' required/>

          <div className='button'>
          <CustomButton type="submit"> Sign in  </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn > Sign in with Google </CustomButton>
          </div>
          


        </form>

      </div>
    );
  }
}
export default SignIn;