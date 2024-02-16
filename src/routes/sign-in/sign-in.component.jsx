import React from 'react'
import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import { signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';


const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = createUserDocumentFromAuth(user); 
    };

    const logGoogleRedirectUser = async () => {
        const {user} = await signInWithGoogleRedirect();
        console.log({user})
    }
  return (
    <div>
        <h1>
            sign in page
        </h1>
        <button onClick={logGoogleUser}>
            sign in with google popup
        </button>
         {/* <button onClick={logGoogleRedirectUser}>
            sign in with google redirect
        </button> */}
        <SignUpForm />
    </div>
  )
}

export default SignIn
