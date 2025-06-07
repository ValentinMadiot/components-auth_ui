import { useState } from "react";

const LoginForm = ({ switchForm }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="auth1__form">
      <h1 className="auth1__title">Connexion</h1>

      <div className="auth1__content">
        <div className="auth1__box">
          <i className="ri-mail-line auth1__icon"></i>
          <div className="auth1__box-input">
            <input
              type="email"
              required
              className="auth1__input"
              placeholder=" "
            />
            <label className="auth1__label">Email</label>
          </div>
        </div>

        <div className="auth1__box">
          <i className="ri-lock-2-line auth1__icon"></i>
          <div className="auth1__box-input">
            <input
              type={showPassword ? "text" : "password"}
              required
              className="auth1__input"
              id="login-pass"
              placeholder=" "
            />
            <label className="auth1__label">Mot de passe</label>
            <i
              className={`ri-${
                showPassword ? "eye-line" : "eye-off-line"
              } auth1__eye`}
              onClick={() => setShowPassword(!showPassword)}></i>
          </div>
        </div>
      </div>

      <div className="auth1__check">
        <div className="auth1__check-group">
          <input type="checkbox" className="auth1__check-input" id="remember" />
          <label htmlFor="remember" className="auth1__check-label">
            Se souvenir de moi
          </label>
        </div>
        <a className="auth1__forgot">Mot de passe oublié ?</a>
      </div>

      <button type="submit" className="auth1__button">
        Connexion
      </button>

      <p className="auth1__register">
        Pas encore de compte ?{" "}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            switchForm();
          }}>
          Inscription
        </a>
      </p>
    </form>
  );
};

export default LoginForm;
