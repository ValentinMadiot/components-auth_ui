const SignupForm5 = ({ switchForm }) => {
  return (
    <form className="form__container">
      <h1>Create an account</h1>

      <div className="form__inner">
        <article>
          <label htmlFor="firstName">First name</label>
          <input type="text" name="firstName" id="firstName" required />
        </article>

        <article>
          <label htmlFor="lastName">Last name</label>
          <input type="text" name="lastName" id="lastName" required />
        </article>
      </div>

      <div className="form__inner">
        <article>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
        </article>

        <article>
          <label htmlFor="password-one">Password</label>
          <input
            type="password"
            name="password-one"
            id="password-one"
            required
          />
        </article>
      </div>

      <div className="form__checkboxes">
        <article>
          <input type="checkbox" id="checkbox" className="checkbox" required />
          <label htmlFor="checkbox" className="label">
            <div className="ball"></div>
          </label>
        </article>
        <small>I have read and agree to the Privacy Policy</small>
      </div>

      <div className="form__checkboxes">
        <article>
          <input type="checkbox" id="checkbox-two" className="checkbox" />
          <label htmlFor="checkbox-two" className="label">
            <div className="ball"></div>
          </label>
        </article>
        <small>Receive updates and features</small>
      </div>

      <button className="form__btn" type="submit">
        Create Account
      </button>
      <p className="form__switch">
        Already have an account? <span onClick={switchForm}>Log in</span>
      </p>
    </form>
  );
};

export default SignupForm5;
