// sign-in-form.component.jsx
import React, { useState } from 'react';
import { SignIn, H2, ButtonsContainer } from './sign-in-form.styles';
import { 
  signInWithGooglePopup, 
  // createUserDocumentFromAuth, 
  signInAuthUserWithEmailAndPassword
  } from '../../utils/firebase/firebase.utils';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';
import FormInput from '../form-input/form-input.component';


const defaultFormFields = {
  email: '',
  password: ''
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
 
  const signInWithGoogle = async () => {
     await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await 
      signInAuthUserWithEmailAndPassword(
        email,
        password
        );resetFormFields();
    } catch (error) {
      if(error.code === "auth/invalid-credential"){
        alert('incorrect email or password')
      }
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignIn>
      <H2>Already have an account?</H2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          name='email'
          value={email}
          onChange={handleChange}
        />

        <FormInput
          label='Password'
          type='password'
          required
          name='password'
          value={password}
          onChange={handleChange}
        />
        <ButtonsContainer>
          <Button type='submit'>
            Sign In
          </Button>

          <Button type='button' 
          buttonType={BUTTON_TYPE_CLASSES.google} 
          onClick={signInWithGoogle}>
           Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignIn>
  );
};

export default SignInForm
