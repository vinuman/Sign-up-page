import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <p>Header</p>
      <div className="nav-end">
        <Link style={{ textDecoration: "none", color: "#fff" }} to="/">
          {" "}
          <p>Sign Up</p>
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
