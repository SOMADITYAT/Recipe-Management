import React, { useState } from "react";
import { registerUser } from "../api/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await registerUser({ username, email, password });
      toast.success("Registration successful! You can now log in.");
      navigate("/login");
    } catch (err) {
      console.error("Error during registration:", err);
      setError(
        "Registration failed: " +
          (err.response ? err.response.data.message : "Unknown error")
      );
      toast.error(
        "Registration failed: " +
          (err.response ? err.response.data.message : "An error occurred.")
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <button
        type="submit"
        className="w-full p-3 text-white bg-blue-500 rounded hover:bg-blue-600 transition duration-200"
      >
        Sign Up
      </button>
    </form>
  );
};

export default Signup;
