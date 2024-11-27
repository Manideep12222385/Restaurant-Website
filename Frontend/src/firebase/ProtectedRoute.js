import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Your Firebase Auth context

const ProtectedRoute = ({ children, allowedEmail }) => {
  const { currentUser } = useAuth(); // Get current user from AuthContext

  if (!currentUser) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" />;
  }

  if (currentUser.email !== allowedEmail) {
    // Redirect to home if the email is not authorized
    return <Navigate to="/" />;
  }

  return children; // Render the protected component
};

export default ProtectedRoute;
