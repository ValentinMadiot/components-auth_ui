import { useState } from "react";
import LoginForm4 from "./LoginForm4";
import SignupForm4 from "./SignupForm4";
import "./authForm4.css";

const AuthForm4 = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <section className="auth4">
      {isLogin ? (
        <LoginForm4 switchForm={() => setIsLogin(false)} />
      ) : (
        <SignupForm4 switchForm={() => setIsLogin(true)} />
      )}
    </section>
  );
};

export default AuthForm4;
