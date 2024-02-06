import { initializeApp } from 'firebase/app';
import {
    getAuth, 
    signInWithRedirect,
    signInWithPopup, 
    GoogleAuthProvider }
    from 'firebase/auth';

import  {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAhJSndcwY89C2EhTQ_QiM-6k-6puuxmcs",
  authDomain: "crwn-clothing-b6580.firebaseapp.com",
  projectId: "crwn-clothing-b6580",
  storageBucket: "crwn-clothing-b6580.appspot.com",
  messagingSenderId: "1082129450796",
  appId: "1:1082129450796:web:90a22ad38b8efadc0cce89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid );

  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if(!userSnapshot.exists()){
    const { displayName, email  } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch (error) {
      console.log('error creating the user', error.message)
    } 
  }
  return userDocRef; 
}