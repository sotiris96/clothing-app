import React from 'react';

import './custom-button.scss';


const CustomButton =({children, isGoogleSignIn ,inverted ,...otherProps}) => (

  /* an i idiotita isGoogleSignin einai true tote to butoon enonetai me tin analogi klasi allios me tin custom-button
  */
  <button className={`${inverted ? 'inverted' : ' '}${isGoogleSignIn ? 'google-sign-in' : ' '} custom-button`}

  {...otherProps}>
    
  {children}
  
  </button>
);


export default CustomButton;