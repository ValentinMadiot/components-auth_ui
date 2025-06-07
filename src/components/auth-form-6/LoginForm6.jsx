import { useState } from "react";
import { iconApple, iconFacebook, iconGoogle } from "./assets/img/index";

const LoginForm6 = ({ switchForm }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="auth6__login">
      <h1 className="auth6__title">Connectez-vous.</h1>

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
                Mot de passe
              </label>
              <i
                className={`ri-${
                  showPassword ? "eye-fill" : "eye-off-fill"
                } auth6__icon auth6__password`}
                id="loginPassword"
                onClick={() => setShowPassword(!showPassword)}></i>
            </div>
          </div>

          <a className="auth6__forgot">Mot de passe oublié ?</a>

          <button type="submit" className="auth6__button">
            Connexion
          </button>
        </form>

        <div className="auth6__social">
          <p className="auth6__social-title">Ou connectez-vous avec</p>

          <div className="auth6__social-links">
            <a className="auth6__social-link">
              <img
                src={iconGoogle}
                alt="Lien Google"
                className="auth6__social-img"
              />
            </a>

            <a className="auth6__social-link">
              <img
                src={iconFacebook}
                alt="Lien Facebook"
                className="auth6__social-img"
              />
            </a>

            <a className="auth6__social-link">
              <img
                src={iconApple}
                alt="Lien Apple"
                className="auth6__social-img"
              />
            </a>
          </div>
        </div>

        <p className="auth6__switch">
          Vous n’avez pas de compte ?{" "}
          <button onClick={switchForm} id="loginButtonRegister" type="button">
            Créer un compte
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginForm6;
