import { ref, firebaseAuth } from '../config/constants';

const provider = new firebaseAuth.GoogleAuthProvider();

export function auth() {
  return firebaseAuth()
    .signInWithPopup(provider)
    .then(saveUser)
    .catch(function(error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
    });
}

export function logout() {
  return firebaseAuth().signOut();
}

export function login() {
  return firebaseAuth().signInWithPopup();
}

export function resetPassword(email) {
  return firebaseAuth().sendPasswordResetEmail(email);
}

export function saveUser(user) {
  return ref
    .child(`users/${user.uid}/info`)
    .set({
      email: user.email,
      uid: user.uid
    })
    .then(() => user);
}
