import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Signup = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [empty, setEmpty] = useState(false);

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (fullName == "" || email == "" || password == "") {
      setEmpty(true);
      return;
    } else {
      setEmpty(false);
    }

    // Perform validation and submit the form
    if (password === confirmPassword) {
      // Passwords match, proceed with signup
      const accessToken = uuidv4();
      const userState = {
        fullName,
        email,
        password,
        accessToken,
      };

      localStorage.setItem("userState", JSON.stringify(userState));

      // Clear form fields
      setFullName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setPasswordMatch(false);

      navigate("/profile");
    } else {
      // Passwords don't match, handle the error or display a validation message
      setPasswordMatch(true);
    }
  };

  useEffect(() => {
    const userState = localStorage.getItem("userState");

    if (userState) {
      const user = JSON.parse(userState);
      if (user.accessToken) {
        navigate("/profile");
      }
    }
  }, [navigate]);

  return (
    <>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Full Name:</label>
          <input
            placeholder="Full Name"
            type="text"
            id="fullName"
            value={fullName}
            onChange={handleFullNameChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            placeholder="Email"
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            placeholder="Password"
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            placeholder="Confirm Password"
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </div>
        <button type="submit">Signup</button>
      </form>
      {empty && (
        <p className="error-msg">Error : All the fields are mandatory</p>
      )}

      {passwordMatch && <p className="error-msg">Passwords do not match</p>}
    </>
  );
};

export default Signup;
