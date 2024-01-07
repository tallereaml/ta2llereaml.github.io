

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { getAuth, signInWithRedirect } from "firebase/auth";

const auth = getAuth();
signInWithRedirect(auth, provider);