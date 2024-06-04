import React, { useState } from 'react'
import { useAuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';
const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async (username, password) => {
    try {
      // Check input errors
      const success = handleInputErrors({ username, password });
      if (!success) return;

      setLoading(true);

      // Make the API call
      const res = await fetch("api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      // Check the response status
      if (!res.ok) {
        // Handle non-200 status codes
        throw new Error("Failed to login. Please try again later.");
      }

      // Parse the response
      const data = await res.json();

      // Check for errors in the response
      if (data.error) {
        throw new Error(data.error);
      }

      // Save user data to localStorage and setAuthUser
      localStorage.setItem("chat-app user", JSON.stringify(data));
      setAuthUser(data);

      // Show success toast
      toast.success("Login successful!");
    } catch (error) {
      // Show error toast
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

function handleInputErrors({ username, password }) {
  if (!username || !password) {
    toast.error("Please fill in all the details.");
    return false;
  }

  return true;
}

export default useLogin;