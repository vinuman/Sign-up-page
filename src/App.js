import Nav from "./Nav";
import Signup from "./Signup";
import Profile from "./Profile";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Signup />
      <Routes>
        <Route exact path="/" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
