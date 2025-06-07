const SignupForm5 = ({ switchForm }) => {
  return (
    <form className="auth5__container">
      <h1>Créer un compte</h1>

      <div className="auth5__inner">
        <article>
          <label htmlFor="firstName">Prénom</label>
          <input type="text" name="firstName" id="firstName" required />
        </article>

        <article>
          <label htmlFor="lastName">Nom</label>
          <input type="text" name="lastName" id="lastName" required />
        </article>
      </div>

      <div className="auth5__inner">
        <article>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
        </article>

        <article>
          <label htmlFor="password-one">Mot de passe</label>
          <input
            type="password"
            name="password-one"
            id="password-one"
            required
          />
        </article>
      </div>

      <div className="auth5__checkboxes">
        <article>
          <input type="checkbox" id="checkbox" className="checkbox" required />
          <label htmlFor="checkbox" className="label">
            <div className="ball"></div>
          </label>
        </article>
        <small>J’ai lu et j’accepte la politique de confidentialité</small>
      </div>

      <div className="auth5__checkboxes">
        <article>
          <input type="checkbox" id="checkbox-two" className="checkbox" />
          <label htmlFor="checkbox-two" className="label">
            <div className="ball"></div>
          </label>
        </article>
        <small>Recevoir les nouveautés et mises à jour</small>
      </div>

      <button className="auth5__btn" type="submit">
        Créer un compte
      </button>

      <p className="auth5__switch">
        Vous avez déjà un compte ? <span onClick={switchForm}>Connexion</span>
      </p>
    </form>
  );
};

export default SignupForm5;
