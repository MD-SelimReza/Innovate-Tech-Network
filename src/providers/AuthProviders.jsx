import {
  GoogleAuthProvider,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import PropTypes from "prop-types";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleProvider = new GoogleAuthProvider();
  const googleSignIn = () => {
    setLoading(true);
    signInWithPopup(auth, googleProvider);
    console.log("google provider coming soon");
  };

  const githubProvider = new GithubAuthProvider();
  const githubLogIn = () => {
    setLoading(true);
    signInWithPopup(auth, githubProvider);
  };

  const profileUpdate = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  const logOut = () => {
    setUser(null);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log("currentUser", currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  console.log(user);

  const AuthInfo = {
    user,
    loading,
    createUser,
    signIn,
    googleSignIn,
    githubLogIn,
    profileUpdate,
    logOut,
  };

  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

AuthProviders.propTypes = {
  children: PropTypes.node,
};

export default AuthProviders;
