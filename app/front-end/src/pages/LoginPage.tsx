import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [keepConneted, setKeepConnected] = useState(false);
  const [failedLogin, setFailedLogin] = useState(false);

  useEffect(() => {
    setFailedLogin(false);
  }, [username, password]);

  let navigate = useNavigate();

  const requestLogin = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    try {
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
              checked={keepConneted}
              onChange={() => setKeepConnected(!keepConneted)}
            />
            remeber me
          </label>
          {failedLogin && (
            <p>
              *Sorry, your username or password is incorrect. Please, try again.
            </p>
          )}
          <button type="submit" onClick={(event) => requestLogin(event)}>
            Login
          </button>
        </form>
      </div>
    </main>
  );
}
