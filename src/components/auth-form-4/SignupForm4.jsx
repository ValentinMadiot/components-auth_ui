const SignupForm4 = ({ switchForm }) => {
  return (
    <div className="form">
      <form className="form__content">
        <div className="form__box">
          <input
            type="email"
            className="form__input"
            placeholder="Enter Email"
            required
          />
          <label className="form__label">ENTER EMAIL</label>
          <div className="form__shadow"></div>
        </div>

        <div className="form__box">
          <input
            type="password"
            className="form__input"
            placeholder="Enter Password"
            required
          />
          <label className="form__label">ENTER PASSWORD</label>
          <div className="form__shadow"></div>
        </div>

        <div className="form__button">
          <input type="submit" className="form__submit" value="Sign Up" />
        </div>
        <p className="form__switch">
          Already have an account? <span onClick={switchForm}>Log In</span>
        </p>
      </form>
    </div>
  );
};

export default SignupForm4;
