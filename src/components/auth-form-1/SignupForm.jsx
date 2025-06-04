const SignupForm = ({ switchForm }) => {
  return (
    <form className="login__form">
      <h1 className="login__title">Signup</h1>

      <div className="login__content">
        <div className="login__box">
          <i className="ri-mail-line login__icon"></i>
          <div className="login__box-input">
            <input
              type="email"
              required
              className="login__input"
              placeholder=" "
            />
            <label className="login__label">Email</label>
          </div>
        </div>

        <div className="login__box">
          <i className="ri-lock-2-line login__icon"></i>
          <div className="login__box-input">
            <input
              type="password"
              required
              className="login__input"
              id="signup-pass"
              placeholder=" "
            />
            <label className="login__label">Password</label>
            <i className="ri-eye-off-line login__eye" id="signup-eye"></i>
          </div>
        </div>
      </div>

      <button type="submit" className="login__button">
        Register
      </button>

      <p className="login__register">
        Already have an account?{" "}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            switchForm();
          }}>
          Login
        </a>
      </p>
    </form>
  );
};

export default SignupForm;
