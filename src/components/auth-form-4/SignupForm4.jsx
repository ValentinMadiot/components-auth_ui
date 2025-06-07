const SignupForm4 = ({ switchForm }) => {
  return (
    <div className="auth4__wrapper">
      <form className="auth4__content">
        <div className="auth4__box">
          <input
            type="email"
            className="auth4__input"
            placeholder="Entrez votre email"
            required
          />
          <label className="auth4__label">EMAIL</label>
          <div className="auth4__shadow"></div>
        </div>

        <div className="auth4__box">
          <input
            type="password"
            className="auth4__input"
            placeholder="Entrez votre mot de passe"
            required
          />
          <label className="auth4__label">MOT DE PASSE</label>
          <div className="auth4__shadow"></div>
        </div>

        <div className="auth4__button">
          <input type="submit" className="auth4__submit" value="S’inscrire" />
        </div>

        <p className="auth4__switch">
          Vous avez déjà un compte ? <span onClick={switchForm}>Connexion</span>
        </p>
      </form>
    </div>
  );
};

export default SignupForm4;
