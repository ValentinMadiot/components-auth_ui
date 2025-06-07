const LoginForm5 = ({ switchForm }) => {
  return (
    <form className="auth5__container">
      <h1>Connexion</h1>

      <div className="auth5__inner auth5__login">
        <article>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
        </article>

        <article>
          <label htmlFor="password">Mot de passe</label>
          <input type="password" name="password" id="password" required />
        </article>
      </div>

      <div className="auth5__checkboxes">
        <article>
          <input type="checkbox" id="checkbox" className="checkbox" />
          <label htmlFor="checkbox" className="label">
            <div className="ball"></div>
          </label>
        </article>
        <small>Se souvenir de moi</small>
      </div>

      <button className="auth5__btn" type="submit">
        Connexion
      </button>

      <p className="auth5__switch">
        Pas encore de compte ? <span onClick={switchForm}>Inscription</span>
      </p>
    </form>
  );
};

export default LoginForm5;
