import React, { useContext } from "react";
import { AuthContext } from "../Context/UserBookingContext";
import { Navigate, useLocation } from "react-router-dom";
const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <div>Loading..</div>;
  }

  if (user && user.uid) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRouter;
