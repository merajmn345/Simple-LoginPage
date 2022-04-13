import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSignUp(e) {
    e.preventDefault();

    if (!email || !password || !number) {
      setError("required details");
    } else if (password.length < 6) {
      setError("password must six digit");
    } else {
      navigate("/Created");
    }
  }

  return (
    <form>
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <input
        type="number"
        placeholder="Number"
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <button type="submit" onClick={handleSignUp}>
        Sign up
      </button>
      {error ? <h2>{error}</h2> : null};
    </form>
  );
}
export default SignUp;
