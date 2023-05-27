import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useRef, useEffect } from "react";

const Nav = () => {
  const buttonRef = useRef(null);
  useEffect(() => {
    buttonRef.current.click();
  }, []);
  return (
    <nav>
      <p>Header</p>
      <div className="nav-end">
        <Link style={{ textDecoration: "none", color: "#fff" }} to="/">
          {" "}
          <p ref={buttonRef}>Sign Up</p>
        </Link>
        <Link style={{ textDecoration: "none", color: "#fff" }} to="/profile">
          {" "}
          <p>Profile</p>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
