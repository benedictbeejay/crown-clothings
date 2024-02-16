import React from 'react'
import { useState } from 'react';
import { createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import { eventWrapper } from '@testing-library/user-event/dist/utils';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUpForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword} = formFields;

  console.log(formFields);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }
    try {
      const response = await createAuthUserWithEmailAndPassword(email, password)
      console.log(response);
    } catch(error) {
        console.log('user created encountered an error', error);
    }
  }

  const handleChange = (event) => {
      const {name, value} = event.target;
      setFormFields({...formFields, [name]: value});
  };
  return (
    <div>
      
      <h1>
        sign up with your email and password
      </h1>

      <form onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input 
        type='text'
        required 
        name='displayName' 
        value={displayName}
        onChange={handleChange}
        />

         <label>Email</label>
        <input 
        type='email' 
        required 
        name='email' 
        value={email}
        onChange={handleChange}
        />

         <label>Password</label>
        <input 
        type='password' 
        required 
        name='password' 
        value={password}
        onChange={handleChange}
        />

         <label>Confirm Password</label>
        <input 
        type='password' 
        required 
        name='confirmPassword' 
        value={confirmPassword}
        onChange={handleChange}
        />

        <button type='submit'>Sign Up</button>
      </form>
    </div>
  )
}

export default SignUpForm
