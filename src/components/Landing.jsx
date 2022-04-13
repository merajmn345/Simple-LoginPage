import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <h1>Landing Page</h1>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/signup">
        <button>SignUp</button>
      </Link>
    </>
  );
}
export default Landing;
