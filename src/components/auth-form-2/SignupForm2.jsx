const SignupForm2 = ({ switchForm }) => {
  return (
    <div className="auth2 login">
      <form className="login__form">
        <h1 className="login__title">Register</h1>

        <div className="login__inputs">
          <div className="login__box">
            <input
              type="email"
              placeholder="Email id"
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

        <button type="submit" className="login__button">
          Register
        </button>

        <div className="login__register">
          Already have an account?{" "}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              switchForm();
            }}>
            Login
          </a>
        </div>
      </form>
    </div>
  );
};

export default SignupForm2;
