import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve the user state from local storage
    const userState = localStorage.getItem("userState");

    if (userState) {
      const user = JSON.parse(userState);
      setUser(user);
    } else {
      navigate("/");
    }
  }, []);

  const handleLogout = () => {
    // Clear the user state and access token from local storage
    localStorage.removeItem("userState");

    // Reset the user state in the component
    setUser(null);

    // Navigate to the signup page
    navigate("/");
  };

  return (
    <>
      <h1>Profile</h1>
      {user && (
        <>
          <p className="profile-display">Full Name: {user.fullName}</p>
          <p className="profile-display">Email: {user.email}</p>
          <p className="profile-display">Password: {user.password}</p>
        </>
      )}
      <button onClick={handleLogout} style={{ marginLeft: "4rem" }}>
        Logout
      </button>
    </>
  );
};

export default Profile;
