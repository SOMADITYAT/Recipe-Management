import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const loginUser = async (userData) => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    // Get error response from backend
    const errorData = await response.json(); 
    throw new Error(errorData.message || "Login failed");
  }

  return response.json();
};

export const registerUser = async (userData) => {
  return await axios.post(`${API_URL}/register`, userData);
};
