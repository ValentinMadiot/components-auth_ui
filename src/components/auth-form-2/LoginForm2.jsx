const LoginForm2 = ({ switchForm }) => {
  return (
    <form className="auth2__form">
      <h1 className="auth2__title">Connexion</h1>

      <div className="auth2__inputs">
        <div className="auth2__box">
          <input
            type="email"
            placeholder="Email"
            required
            className="auth2__input"
          />
          <i className="ri-mail-fill"></i>
        </div>

        <div className="auth2__box">
          <input
            type="password"
            placeholder="Mot de passe"
            required
            className="auth2__input"
          />
          <i className="ri-lock-2-fill"></i>
        </div>
      </div>

      <div className="auth2__check">
        <div className="auth2__check-box">
          <input
            type="checkbox"
            className="auth2__check-input"
            id="user-check"
          />
          <label htmlFor="user-check" className="auth2__check-label">
            Se souvenir de moi
          </label>
        </div>

        <a className="auth2__forgot">Mot de passe oublié ?</a>
      </div>

      <button type="submit" className="auth2__button">
        Connexion
      </button>

      <div className="auth2__register">
        Pas encore de compte ?{" "}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            switchForm();
          }}>
          Inscription
        </a>
      </div>
    </form>
  );
};

export default LoginForm2;
