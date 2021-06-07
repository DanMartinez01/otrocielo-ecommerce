import firebase from 'firebase'
import 'firebase/firestore'

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "otrocielo-ecommerce-3d328.firebaseapp.com",
    projectId: "otrocielo-ecommerce-3d328",
    storageBucket: "otrocielo-ecommerce-3d328.appspot.com",
    messagingSenderId: "788740966036",
    appId: "1:788740966036:web:212311d1479541237e9681"
});
export const getfirebase = () => app
export const getfirestore = () => firebase.firestore(app)