import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { requestLogin, setToken } from "../services/request";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [keepConnected, setKeepConnected] = useState(false);
  const [failedLogin, setFailedLogin] = useState(false);

  useEffect(() => {
    setFailedLogin(false);
  }, [username, password]);

  let navigate = useNavigate();

  const loginButton = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    try {
      const { token } = await requestLogin('/login', { username, password, keepConnected });
      setToken(token);
      localStorage.setItem('token', token);
      navigate('/home');
    } catch (error) {
      setFailedLogin(true);
    }
  };

  return (
    <main>
      <div>
        <form>
          <h1>Welcome Back!</h1>
          <label htmlFor="username">
            Username
            <input
              type="text"
              id="username"
              value={username}
              onChange={({ target }) => setUsername(target.value)}
              required
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              type="text"
              id="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              required
            />
          </label>
          <label htmlFor="keep-connected">
            <input
              type="checkbox"
              id="keep-connected"
              checked={keepConnected}
              onChange={() => setKeepConnected(!keepConnected)}
            />
            remeber me
          </label>
          {failedLogin && (
            <p>
              *Sorry, your username or password is incorrect. Please, try again.
            </p>
          )}
          <button type="submit" onClick={(event) => loginButton(event)}>
            Login
          </button>
        </form>
      </div>
    </main>
  );
}
