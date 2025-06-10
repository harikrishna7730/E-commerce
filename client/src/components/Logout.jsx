// src/components/Logout.js
import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";

function Logout() {
  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem("user");
    console.log("Signed out");
  };

  return <button onClick={handleLogout}>Sign Out</button>;
}

export default Logout;
