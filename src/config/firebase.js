import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAXDYbQMk-HwIh1oUDGE3Novh1Tv83e5A8',
  authDomain: 'insect-collector-react.firebaseapp.com',
  databaseURL: 'https://insect-collector-react.firebaseio.com',
  projectId: 'insect-collector-react',
  storageBucket: 'bugs1990',
  messagingSenderId: '244443562042'
};
firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
