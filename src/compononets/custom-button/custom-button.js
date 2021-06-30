import React, { children} from 'react';


import { CustomButtonContainer } from './custom-button-styless';


const CustomButton =({children,...props}) => (

  /* an i idiotita isGoogleSignin einai true tote to butoon enonetai me tin analogi klasi allios me tin custom-button
  */
  <CustomButtonContainer {...props} >
    {children}
  </CustomButtonContainer>
);


export default CustomButton;