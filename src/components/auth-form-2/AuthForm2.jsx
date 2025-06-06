import { useState } from "react";
import LoginForm2 from "./LoginForm2";
import SignupForm2 from "./SignupForm2";
import "./authForm2.css";

const AuthForm2 = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <section className="auth2" id="auth2">
      {isLogin ? (
        <LoginForm2 switchForm={() => setIsLogin(false)} />
      ) : (
        <SignupForm2 switchForm={() => setIsLogin(true)} />
      )}
    </section>
  );
};

export default AuthForm2;
