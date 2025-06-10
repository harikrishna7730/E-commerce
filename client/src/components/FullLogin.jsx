import React, { useState } from "react";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth, provider, facebookProvider } from "../components/firebaseConfig";

const FullLogin = () => {
  const [isSignup, setIsSignup] = useState(true); // Toggle between signup and login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailSignup = async () => {
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created: " + result.user.email);
      setIsSignup(false); // Switch to login after successful signup
    } catch (err) {
      alert(err.message);
      console.error(err);
    }
  };

  const handleEmailLogin = async () => {
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      alert("Logged in as: " + result.user.email);
    } catch (err) {
      alert(err.message);
      console.error(err);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      alert("Logged in as: " + result.user.displayName);
    } catch (err) {
      console.error(err);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      alert("Logged in as: " + result.user.displayName);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 px-4">
      <div className="bg-white shadow-2xl rounded-xl p-8 max-w-md w-full text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          {isSignup ? "Create Account" : "Login"}
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {isSignup ? (
          <button
            onClick={handleEmailSignup}
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition mb-4"
          >
            Sign Up with Email
          </button>
        ) : (
          <button
            onClick={handleEmailLogin}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition mb-4"
          >
            Login with Email
          </button>
        )}

        <div className="text-sm text-gray-600 mb-4">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            onClick={() => setIsSignup(!isSignup)}
            className="text-blue-600 hover:underline font-medium"
          >
            {isSignup ? "Login here" : "Sign up here"}
          </button>
        </div>

        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative bg-white px-4 text-gray-500 text-sm">or</div>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center bg-white text-gray-800 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition mb-3"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="h-5 w-5 mr-2"
          />
          Sign in with Google
        </button>

        <button
          onClick={handleFacebookLogin}
          className="w-full flex items-center justify-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          <img
            src="https://www.svgrepo.com/show/157810/facebook.svg"
            alt="Facebook"
            className="h-5 w-5 mr-2 invert"
          />
          Sign in with Facebook
        </button>
      </div>
    </div>
  );
};

export default FullLogin;
