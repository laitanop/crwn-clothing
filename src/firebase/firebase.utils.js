import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyDJYNI4OQ9I8otr1Q8HMYUkTjklfBcU4fM',
    authDomain: 'crwn-db-38fbb.firebaseapp.com',
    projectId: 'crwn-db-38fbb',
    storageBucket: 'crwn-db-38fbb.appspot.com',
    messagingSenderId: '1006977501358',
    appId: '1:1006977501358:web:597b0317f918a2a88f853f',
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ promp: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
