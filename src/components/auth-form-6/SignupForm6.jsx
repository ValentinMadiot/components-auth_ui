import { useState } from "react";

const SignupForm6 = ({ onSwitch }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="auth6__register">
      <h1 className="auth6__title">Create new account.</h1>

      <div className="auth6__area">
        <form className="auth6__form">
          <div className="auth6__content">
            <div className="auth6__group">
              <div className="auth6__box">
                <input
                  type="text"
                  id="firstName"
                  required
                  placeholder=" "
                  className="auth6__input"
                />
                <label htmlFor="firstName" className="auth6__label">
                  First name
                </label>

                <i className="ri-id-card-fill auth6__icon"></i>
              </div>

              <div className="auth6__box">
                <input
                  type="text"
                  id="lastName"
                  required
                  placeholder=" "
                  className="auth6__input"
                />
                <label htmlFor="lastName" className="auth6__label">
                  Last name
                </label>
                <i className="ri-id-card-fill auth6__icon"></i>
              </div>
            </div>

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
                id="passwordCreate"
                required
                placeholder=" "
                className="auth6__input"
              />
              <label htmlFor="passwordCreate" className="auth6__label">
                Password
              </label>
              <i
                className={`ri-${
                  showPassword ? "eye-fill" : "eye-off-fill"
                } auth6__icon auth6__password`}
                onClick={() => setShowPassword(!showPassword)}></i>
            </div>
          </div>

          <button type="submit" className="auth6__button">
            Create Account
          </button>
        </form>

        <p className="auth6__switch">
          Already have an account?{" "}
          <button onClick={onSwitch} type="button">
            Log In
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignupForm6;
