// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWoZq4qM96WLJV2WVM-2R8csnqbhEhGtg",
  authDomain: "first-react-project-crwn.firebaseapp.com",
  projectId: "first-react-project-crwn",
  storageBucket: "first-react-project-crwn.appspot.com",
  messagingSenderId: "356197813754",
  appId: "1:356197813754:web:23e8fcfd74a8cbcc8aa843"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  'prompt': 'select_account'
});

export const auth = getAuth();

/* authenticate is the workflow for authenticating the user
So we will only have one type of auth

For provider we can have multiple type of provider (google email etc.)
therefore provider is added as a secondary argument for the sign in  to identify
what the user is signing in with.
*/

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

/* singleton instance */
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  /* this method here takes user information and storing it in firestore */
  /* when user authenticate it does not save their information into firebase */
  /* console.log(userAuth); */
  const userDocRef = doc(db, 'user', userAuth.uid);
  /* console.log(userDocRef); */

  /* this is a async action therefore we will use await to perform the action */
  /* this is a document snapshot.  this can be use to check if user exist in our database*/
  const userSnapshot = await getDoc(userDocRef);
  /* console.log(userSnapshot); */
  /* as we have not save the user into the database therefore user does not exist */
  /* console.log(userSnapshot.exists()); */

  if(!userSnapshot.exists()) {
    // if user data does not exist

    /* this will user the user information from google and extract out the
    displayName and email which are default parameters of the user object */
    const { displayName, email } = userAuth;

    /* this creates a new datatime where user is creating a new account */
    const createdAt = new Date();

    try {

      /* this part we will set in the new user into the database using information
      that was extracted from the above method */
      await setDoc(userDocRef, { displayName, email, createdAt });

      /* in case of any error, system will prompt us that an error have occur */
    } catch (error) {
      console.log("error in creating a new user". error.message);
    };

  } else {
    // if user data exist
    return userDocRef
  };





  //
}
