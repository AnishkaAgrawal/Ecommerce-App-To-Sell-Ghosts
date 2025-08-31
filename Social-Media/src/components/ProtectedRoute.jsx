import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  // check login status from localStorage
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  if (!isAuthenticated) {
    // if not logged in, redirect to login page
    return <Navigate to="/login" replace />;
  }

  // else allow the route
  return children;
}
