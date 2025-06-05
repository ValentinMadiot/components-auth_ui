const LoginForm2 = ({ switchForm }) => {
  return (
    <form className="login__form">
      <h1 className="login__title">Login</h1>

      <div className="login__inputs">
        <div className="login__box">
          <input
            type="email"
            placeholder="Email"
            required
            className="login__input"
          />
          <i className="ri-mail-fill"></i>
        </div>

        <div className="login__box">
          <input
            type="password"
            placeholder="Password"
            required
            className="login__input"
          />
          <i className="ri-lock-2-fill"></i>
        </div>
      </div>

      <div className="login__check">
        <div className="login__check-box">
          <input
            type="checkbox"
            className="login__check-input"
            id="user-check"
          />
          <label htmlFor="user-check" className="login__check-label">
            Remember me
          </label>
        </div>

        <a href="#" className="login__forgot">
          Forgot Password?
        </a>
      </div>

      <button type="submit" className="login__button">
        Login
      </button>

      <div className="login__register">
        Don't have an account?{" "}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            switchForm();
          }}>
          Register
        </a>
      </div>
    </form>
  );
};

export default LoginForm2;
