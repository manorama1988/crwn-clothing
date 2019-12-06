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

      firebase.initializeApp(config);

      export const auth = firebase.auth();
      export const firestore = firebase.firestore();

      const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({ promt: 'select_account' });
      export const signInWithGoogle = () => auth.signInWithPopup(provider);

      export default firebase; 
