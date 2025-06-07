const SignupForm2 = ({ switchForm }) => {
  return (
    <form className="auth2__form">
      <h1 className="auth2__title">Inscription</h1>

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

      <button type="submit" className="auth2__button">
        S’inscrire
      </button>

      <div className="auth2__register">
        Vous avez déjà un compte ?{" "}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            switchForm();
          }}>
          Connexion
        </a>
      </div>
    </form>
  );
};

export default SignupForm2;
