import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    
        apiKey: "AIzaSyBtZiv3KxM8Bi9DYRhhyn3H-JnBuCB1tGo",
        authDomain: "crwn-db-d0e87.firebaseapp.com",
        databaseURL: "https://crwn-db-d0e87.firebaseio.com",
        projectId: "crwn-db-d0e87",
        storageBucket: "crwn-db-d0e87.appspot.com",
        messagingSenderId: "885652111377",
        appId: "1:885652111377:web:10eaa9517c5f3fd2fcb1b0",
        measurementId: "G-FVTF989LWN"
      };

      export const createUserProfileDocument = async(userAuth , additionalData) => {
        if(!userAuth) return;

        const userRef = firestore.doc(`users/${userAuth.uid}`);
        const snapShot = await userRef.get();

        if(!snapShot.exists) {
          const { displayName, email } = userAuth;
          const createdAt = new Date();

          try {
             await userRef.set({
               displayName,
               email,
               createdAt,
               ...additionalData
             })
          } catch(error){
            console.log('error creating user ', error.message);
          }
        }
        return userRef;
      };

      

      firebase.initializeApp(config);

      export const auth = firebase.auth();
      export const firestore = firebase.firestore();

      const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({ promt: 'select_account' });
      export const signInWithGoogle = () => auth.signInWithPopup(provider);

      export default firebase; 
