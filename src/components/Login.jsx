import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    if (!username || !password) {
      setError("username and password are required");
    } else if (password.length < 5) {
      setError("Minimum required length forpassword is 5");
    } else {
      navigate("/welcome");
    }
  }
  return (
    <form>
      <input
        type="text"
        placeholder="email"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
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
      <button type="submit" onClick={handleLogin}>
        Login
      </button>
      {error ? <h2>{error}</h2> : null}
    </form>
  );
}
export default Login;
