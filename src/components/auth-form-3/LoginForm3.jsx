const LoginForm3 = ({ switchForm }) => {
  return (
    <form className="login__form">
      <div>
        <h1 className="login__title">
          <span>Welcome</span> Back
        </h1>
        <p className="login__description">Welcome! Please login to continue.</p>
      </div>

      <div>
        <div className="login__inputs">
          <div>
            <label className="login__label">Email</label>
            <input
              type="email"
              placeholder="Enter your email address"
              required
              className="login__input"
            />
          </div>

          <div>
            <label className="login__label">Password</label>
            <div className="login__box">
              <input
                type="password"
                placeholder="Enter your password"
                required
                className="login__input"
                id="input-pass"
              />
              <i className="ri-eye-off-line login__eye" id="input-icon"></i>
            </div>
          </div>
        </div>

        <div className="login__check">
          <input type="checkbox" className="login__check-input" />
          <label className="login__check-label">Remember me</label>
        </div>
      </div>

      <div>
        <div className="login__buttons">
          <button className="login__button" type="submit">
            Log In
          </button>
          <button
            className="login__button login__button-ghost"
            onClick={(e) => {
              e.preventDefault();
              switchForm();
            }}>
            Sign Up
          </button>
        </div>
        <a href="#" className="login__forgot">
          Forgot Password?
        </a>
      </div>
    </form>
  );
};

export default LoginForm3;
