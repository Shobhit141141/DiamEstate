import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (username.trim() === "") {
      setError("Required Field");
      return; // Early return to prevent further execution
    } 
    if (secretKey.trim() === "") {
      setError("Required Field");
      return; // Early return to prevent further execution
    } 
    setError(""); // Clear error if both fields are valid

    try {
      const resp = await axios.post("http://localhost:4000/api/auth/login", {
        username,
        secret_key: secretKey,
      });
      localStorage.setItem("access_token", resp.data.access_token);
      localStorage.setItem("public_address", resp.data.result.public_address);
      navigate("/");
    } catch (error) {
      console.error(error);
      setError("Login failed. Please try again."); // Set error for failed login
    }
  };

  return (
    <div className="relative h-[100vh] w-screen flex items-center justify-center">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/login_bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-[#00000070]"></div>
      <div className="relative z-10 bg-white p-8 rounded-lg shadow-md w-[90%] max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-black text-center">
          Welcome to <span className="text-[#7065F0]">DiamEstate</span>
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4 mt-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4 mt-4">
            <label
              htmlFor="secret_key"
              className="block text-sm font-medium text-gray-700"
            >
              Secret Key
            </label>
            <input
              type="text"
              id="secret_key" // Ensure the id is correct
              value={secretKey}
              onChange={(e) => setSecretKey(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}

          <p>Not a user? <Link to="/signup"><span className="text-indigo-700">Sign Up</span></Link></p>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 my-4"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
