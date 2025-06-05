const SignupForm3 = ({ switchForm }) => {
  return (
    <form className="login__form">
      <div>
        <h1 className="login__title">
          <span>Create</span> Account
        </h1>
        <p className="login__description">
          Join us by filling in your information below.
        </p>
      </div>

      <div>
        <div className="login__inputs">
          <div>
            <label className="login__label">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              required
              className="login__input"
            />
          </div>

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
                id="signup-pass"
              />
              <i className="ri-eye-off-line login__eye" id="signup-icon"></i>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="login__buttons">
          <button className="login__button" type="submit">
            Sign Up
          </button>
          <button
            className="login__button login__button-ghost"
            onClick={(e) => {
              e.preventDefault();
              switchForm();
            }}>
            Log In
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignupForm3;
