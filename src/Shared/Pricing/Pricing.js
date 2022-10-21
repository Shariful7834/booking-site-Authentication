import React, { useContext } from "react";
import { AuthContext } from "../../Context/UserBookingContext";

const Pricing = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h2>Pricing Page</h2>
      {user?.email && <span>Welcome, {user.email}</span>}
    </div>
  );
};

export default Pricing;
