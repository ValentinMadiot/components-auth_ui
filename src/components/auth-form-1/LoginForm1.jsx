import { useState } from "react";
const LoginForm = ({ switchForm }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="login__form">
      <h1 className="login__title">Login</h1>

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
              type={showPassword ? "text" : "password"}
              required
              className="login__input"
              id="login-pass"
              placeholder=" "
            />
            <label className="login__label">Password</label>
            <i
              className={`ri-${
                showPassword ? "eye-line" : "eye-off-line"
              } login__eye`}
              onClick={() => setShowPassword(!showPassword)}></i>
          </div>
        </div>
      </div>

      <div className="login__check">
        <div className="login__check-group">
          <input type="checkbox" className="login__check-input" id="remember" />
          <label htmlFor="remember" className="login__check-label">
            Remember me
          </label>
        </div>
        <a className="login__forgot">Forgot Password?</a>
      </div>

      <button type="submit" className="login__button">
        Login
      </button>

      <p className="login__register">
        Don't have an account?{" "}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            switchForm();
          }}>
          Register
        </a>
      </p>
    </form>
  );
};

export default LoginForm;
