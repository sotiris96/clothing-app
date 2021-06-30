import React, { useState } from 'react';
import {connect} from 'react-redux';


import FormInput from '../../compononets/form-input/Form-Input';
import CustomButton from '../custom-button/custom-button';

import { signUpStart } from '../../redux/user/user-actions';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';


import './sign-up.scss';

const SignUp = ( { signUpStart } ) => {

    const [userCredentials , setUserCredentials] = useState({

      displayName: '',
      email: ' ',
      password: ' ',
      confirmPassword: ' '
    })


    const {displayName, email, password , confirmPassword } = userCredentials; 


  
  const handleSubmit= async event => {

    event.preventDefault();


    if (password != confirmPassword ){
      alert(" Password don't match ");
      return;
  
    }
    signUpStart({ displayName, email, password });
    

  };

  const handleChange = event => {

    const {name , value }= event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };


    return (
      <div className='sign-up'>
        <h2 className='title'>I don't have a account </h2>
        <span> Sign up with your email and password  </span>

        <form className='sign-up-form' onSubmit={handleSubmit}>
          <br/>
          <label className='label-design'> Name </label>
          <FormInput type='text' name='displayName' value={displayName } onChange={handleChange} label='- Insert your display name ' required/>

          <label className='label-design' > Email </label>
          <FormInput type='email' name='email' value= {email} onChange={handleChange}
          label='- Insert your email' required />

          <label className='label-design' > Password </label>
          <FormInput type='password' name='password' value={password} onChange={handleChange}
          label='- Insert your password' required />

          <label className='label-design' >Confirm Password </label>
          <FormInput type='password' name='confirmPassword' value={confirmPassword} onChange={handleChange} label='- Insert your confirm Password' required/>

          <CustomButton type='submit'> SIGN UP  </CustomButton>


        </form>
      </div>

      );
    }


const mapDispatchToProps = (dispatch ) => ({
signUpStart: userCredentials => dispatch(signUpStart(userCredentials ))

});
export default connect(null,mapDispatchToProps)(SignUp);