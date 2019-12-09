import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('yxNAJqFZXGBTNbHaO2Np').collection('cartItems').doc('fEpM2cSbRoQ9VKgppAuo');
firestore.doc('users/yxNAJqFZXGBTNbHaO2Np/cartItems/fEpM2cSbRoQ9VKgppAuo');
firestore.collection('users/yxNAJqFZXGBTNbHaO2Np/cartItems');