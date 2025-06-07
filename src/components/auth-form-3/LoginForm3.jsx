import { useState } from "react";

const LoginForm3 = ({ switchForm }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="auth3__form">
      <div>
        <h1 className="auth3__title">
          <span>Connexion</span> rapide
        </h1>
        <p className="auth3__description">
          Connecte-toi pour poursuivre l’aventure.
        </p>
      </div>

      <div>
        <div className="auth3__inputs">
          <div>
            <label className="auth3__label">Email</label>
            <input
              type="email"
              placeholder="Entrez votre adresse email"
              required
              className="auth3__input"
            />
          </div>

          <div>
            <label className="auth3__label">Mot de passe</label>
            <div className="auth3__box">
              <input
                className="auth3__input"
                type={showPassword ? "text" : "password"}
                placeholder="Entrez votre mot de passe"
                required
              />
              <i
                className={`ri-${
                  showPassword ? "eye-line" : "eye-off-line"
                } auth3__eye`}
                onClick={() => setShowPassword(!showPassword)}></i>
            </div>
          </div>
        </div>

        <div className="auth3__check">
          <input type="checkbox" className="auth3__check-input" />
          <label className="auth3__check-label">Se souvenir de moi</label>
        </div>
      </div>

      <div>
        <div className="auth3__buttons">
          <button className="auth3__button" type="submit">
            Connexion
          </button>
          <button
            className="auth3__button auth3__button-ghost"
            onClick={(e) => {
              e.preventDefault();
              switchForm();
            }}>
            S’inscrire
          </button>
        </div>
        <a className="auth3__forgot">Mot de passe oublié ?</a>
      </div>
    </form>
  );
};

export default LoginForm3;
