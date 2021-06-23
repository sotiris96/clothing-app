import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={ 

  apiKey: "AIzaSyDo7qgXuaYTFmRxmetL6-NYQKDu0fCXO0A",
  authDomain: "clothing-de1cf.firebaseapp.com",
  projectId: "clothing-de1cf",
  storageBucket: "clothing-de1cf.appspot.com",
  messagingSenderId: "479828196988",
  appId: "1:479828196988:web:a9103811802922942bd3f9",
  measurementId: "G-C3TFP8QMC1"

}

export const  createUserProfileDocument = async (userAuth, additionalData ) => {

  if (!userAuth) 
   return;
    /* to userref pernei to id tou user kai to snapShot anakta ta dedomena  */ 
   const userRef = firestore.doc(`users/${userAuth.id}`);
   
   const snapShot = await userRef.get();

  if (!snapShot.exists){

      const {displayName , email } = userAuth;
      const createdAt= new Date();
      /* asixrono aitima*/ 
      try {

        /* dimiourgia eggrafis an den iparxei  */ 
        await userRef.set ({
          displayName,
          email,
          createdAt,
          ...additionalData
        });

      }catch (error){
          console.log('error creating user' , error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters( { prompt: 'select_account'});

export const signInWithGoogle =() => auth.signInWithPopup (provider);

export default firebase;
