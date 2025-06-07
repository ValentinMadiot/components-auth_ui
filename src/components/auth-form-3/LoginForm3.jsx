import { useState } from "react";

const LoginForm3 = ({ switchForm }) => {
  const [showPassword, setShowPassword] = useState(false);

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
                className="login__input"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                required
              />
              <i
                className={`ri-${
                  showPassword ? "eye-line" : "eye-off-line"
                } login__eye`}
                onClick={() => setShowPassword(!showPassword)}></i>
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
        <a className="login__forgot">Forgot Password?</a>
      </div>
    </form>
  );
};

export default LoginForm3;
