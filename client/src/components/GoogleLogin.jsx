import React from 'react';
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../components/firebaseConfig";

const GoogleLogin = () => {
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User Info:", user);
      alert(`Welcome ${user.displayName}`);
    } catch (error) {
      console.error("Error during sign in:", error);
    }
  };

  return (
    <div>
      <button onClick={handleGoogleSignIn}>Sign in with Google</button>
    </div>
  );
};

export default GoogleLogin;
