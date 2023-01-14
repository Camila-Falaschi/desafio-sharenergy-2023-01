export default function Login() {
  return (
    <main>
      <div>
        <form>
          <h1>Welcome Back!</h1>
          <label htmlFor="username">
            Username
            <input type="text" id="username" name="username" required />
          </label>
          <label htmlFor="password">
            Password
            <input type="text" id="password" name="password" required />
          </label>
          <label htmlFor="keep-connected">
            <input type="checkbox" id="keep-connected" name="keep-connected" />
            remeber me
          </label>
          <button type="submit">Login</button>
         </form>
      </div>
    </main>
  );
}
