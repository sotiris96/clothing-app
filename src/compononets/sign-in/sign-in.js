import React , {useState} from 'react';

import {connect} from 'react-redux';

import FormInput from '../../compononets/form-input/Form-Input';
import CustomButton from '../../compononets/custom-button/custom-button';

import {googleSignInStart , emailSignInStart} from '../../redux/user/user-actions';

import './sign-in.scss';

  const SignIn = ({ emailSignInStart , googleSignInStart}) => {
    const [userCredentials , setCredentials ] = useState({
       email: ' ', password: ' ' 
      }) ;
  
  const { email , password } = userCredentials;

  /* pou tha kano ipovoli na katharisi i forma */ 
  const handleSubmit = async event  => {
    event.preventDefault ();

    emailSignInStart(email,password);

  };

    /* pou tha grapso kai tha figo tote tha meini i eggrafi sto pedio */ 

  const handleChange = event  => {

    const {value, name} =event.target;

    setCredentials({ ...userCredentials, [name] : value })

  };

    
    return(
      <div className='sign-in'>
        <h2> I already have an account. </h2>
        <span> Sign in with your email and password.  </span>
       
        <form onSubmit= { handleSubmit }>
          <br/>
          <label className='label-design' > Email </label>
          <FormInput name="email" type="email" value= {email} handleChange={handleChange} label='- Insert your email'  required/>

          <label className='label-design' > Password </label>
          <FormInput name="password" type="password" value={ password } handleChange={ handleChange } label ='- Insert your code' required/>

          <div className='button'>
          <CustomButton type="submit"> Sign in  </CustomButton>
          <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn > 
          Sign in with Google </CustomButton>
          </div>
      
        </form>
      </div>
    );
  
}

const mapDispatchToProps = dispatch => ({

  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email,password) => dispatch (emailSignInStart({email,password}))

})


export default connect(null,mapDispatchToProps)(SignIn);