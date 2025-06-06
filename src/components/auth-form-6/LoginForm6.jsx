import { useState } from "react";
import { iconApple, iconFacebook, iconGoogle } from "./assets/img/index";

const LoginForm6 = ({ onSwitch }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="auth6__login">
      <h1 className="auth6__title">Log in to your account.</h1>

      <div className="auth6__area">
        <form className="auth6__form">
          <div className="auth6__content">
            <div className="auth6__box">
              <input
                type="email"
                id="email"
                required
                placeholder=" "
                className="auth6__input"
              />
              <label htmlFor="email" className="auth6__label">
                Email
              </label>
              <i className="ri-mail-fill auth6__icon"></i>
            </div>

            <div className="auth6__box">
              <input
                type={showPassword ? "text" : "password"}
                required
                placeholder=" "
                className="auth6__input"
                id="password"
              />
              <label htmlFor="password" className="auth6__label">
                Password
              </label>
              <i
                className={`ri-${
                  showPassword ? "eye-fill" : "eye-off-fill"
                } auth6__icon auth6__password`}
                id="loginPassword"
                onClick={() => setShowPassword(!showPassword)}></i>
            </div>
          </div>

          <a href="#" className="auth6__forgot">
            Forgot your password?
          </a>

          <button type="submit" className="auth6__button">
            Login
          </button>
        </form>

        <div className="auth6__social">
          <p className="auth6__social-title">Or login with</p>

          <div className="auth6__social-links">
            <a href="#" className="auth6__social-link">
              <img
                src={iconGoogle}
                alt="social link"
                className="auth6__social-img"
              />
            </a>

            <a href="#" className="auth6__social-link">
              <img
                src={iconFacebook}
                alt="social link"
                className="auth6__social-img"
              />
            </a>

            <a href="#" className="auth6__social-link">
              <img
                src={iconApple}
                alt="social link"
                className="auth6__social-img"
              />
            </a>
          </div>
        </div>

        <p className="auth6__switch">
          Don't have an account?{" "}
          <button onClick={onSwitch} id="loginButtonRegister" type="button">
            Create Account
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginForm6;
