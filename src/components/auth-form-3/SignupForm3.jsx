import { useState } from "react";

const SignupForm3 = ({ switchForm }) => {
  const [username, setUsername] = useState("");
  const [isUsernameValid, setIsUsernameValid] = useState(null);

  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(null);

  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(null);
  // const [strength, setStrength] = useState(0); // 0 = none, 1 = faible, 2 = moyen, 3 = fort
  const [showPassword, setShowPassword] = useState(false);

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    if (value === "") {
      setIsUsernameValid(null);
    } else {
      setIsUsernameValid(value.length >= 3 && value.length <= 24);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (value === "") {
      setIsValid(null);
    } else {
      setIsValid(pattern.test(value));
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    // Validation simple : minuscule, chiffre, symbole
    const hasLower = /[a-z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    // const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const valid = hasLower && hasNumber;
    setIsPasswordValid(value === "" ? null : valid);

    // Force du mot de passe
    // let level = 0;
    // if (value.length >= 6) level++;
    // if (hasLower && hasNumber) level++;
    // if (hasSymbol && value.length >= 8) level++;
    // setStrength(level);
  };

  return (
    <form className="auth3__form">
      <div>
        <h1 className="auth3__title">
          <span>Créer</span> un compte
        </h1>
        <p className="auth3__description">
          Rejoins-nous en 2 clics, c’est facile !
        </p>
      </div>

      <div>
        <div className="auth3__inputs">
          <div
            className={`auth3__field ${
              isUsernameValid === false
                ? "invalid"
                : isUsernameValid === true
                ? "valid"
                : ""
            }`}>
            <label className="auth3__label">Nom d'utilisateur</label>
            <input
              type="text"
              placeholder="Entrez un nom d'utilisateur"
              className="auth3__input"
              required
              value={username}
              onChange={handleUsernameChange}
            />
            <div className="auth3__error">
              <i className="ri-information-fill"></i>
              <span>Entre 3 et 24 caractères.</span>
            </div>
          </div>

          <div
            className={`auth3__field ${
              isValid === false ? "invalid" : isValid === true ? "valid" : ""
            }`}>
            <label className="auth3__label">Email</label>
            <input
              type="email"
              placeholder="Entrez votre adresse email"
              required
              className="auth3__input"
              value={email}
              onChange={handleChange}
            />
            <div className="auth3__error">
              <i className="ri-information-fill"></i>
              <span>Format d'email invalide.</span>
            </div>
          </div>

          <div
            className={`auth3__field ${
              isPasswordValid === false
                ? "invalid"
                : isPasswordValid === true
                ? "valid"
                : ""
            }`}>
            <label className="auth3__label">Mot de passe</label>
            <div className="auth3__box">
              <input
                type={showPassword ? "text" : "password"}
                className="auth3__input"
                placeholder="Entrez votre mot de passe"
                required
                value={password}
                onChange={handlePasswordChange}
              />
              <i
                className={`ri-${
                  showPassword ? "eye-line" : "eye-off-line"
                } auth3__eye`}
                onClick={() => setShowPassword(!showPassword)}></i>
              <div className="auth3__error">
                <i className="ri-information-fill"></i>
                <span>Un chiffre et une lettre.</span>
              </div>
              {/* Barre de force
              <div className="ligne">
                <div className="l1">
                  <span>faible</span>
                </div>
                <div className="l2">
                  <span>moyen</span>
                </div>
                <div className="l3">
                  <span>fort</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="auth3__buttons">
          <button className="auth3__button" type="submit">
            S’inscrire
          </button>
          <button
            className="auth3__button auth3__button-ghost"
            onClick={(e) => {
              e.preventDefault();
              switchForm();
            }}>
            Connexion
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignupForm3;
