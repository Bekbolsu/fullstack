import fire from "../fire";
import React, { useEffect, useState } from "react";
export const authContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  const [error, setError] = useState("");
  function handleLogin(email, password, navigate) {
    setError("");
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => navigate("/"))
      .catch((err) => setError(err.message));
  }
  function handleSignUp(email, password, navigate) {
    console.log(email, password);
    setError("");
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => handleLogin(email, password, navigate))
      .catch((err) => setError(err.message));
  }
  function handleLogOut() {
    fire.auth().signOut();
  }

  function authList() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser("");
      }
    });
  }
  useEffect(() => {
    authList();
  }, []);
  return (
    <authContext.Provider
      value={{
        currentUser,
        error,
        handleLogin,
        handleSignUp,
        handleLogOut,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
export default AuthContextProvider;
