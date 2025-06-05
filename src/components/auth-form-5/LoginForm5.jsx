const LoginForm5 = ({ switchForm }) => {
  return (
    <form className="form__container">
      <h1>Log In</h1>

      <div className="form__inner login">
        <article>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
        </article>

        <article>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required />
        </article>
      </div>

      <div className="form__checkboxes">
        <article>
          <input type="checkbox" id="remember" className="checkbox" />
          <label htmlFor="remember" className="label">
            <div className="ball"></div>
          </label>
        </article>
        <small>Remember me</small>
      </div>

      <button className="form__btn" type="submit">
        Log In
      </button>
      <p className="form__switch">
        Don't have an account? <span onClick={switchForm}>Sign up</span>
      </p>
    </form>
  );
};

export default LoginForm5;
