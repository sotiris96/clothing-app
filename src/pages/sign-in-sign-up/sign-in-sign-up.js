import React from 'react';

import SignIn from '../../compononets/sign-in/sign-in';
import SignUp from '../../compononets/sign-up/sign-up';

import './sign-in-sign-up.scss';

const SignInAndSignUpPage = () => (

<div className='sign-in-and-sign-up'>

<SignIn/>
<SignUp />

</div>
);

export default SignInAndSignUpPage;