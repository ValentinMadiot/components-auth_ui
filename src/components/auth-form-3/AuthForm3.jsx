import { useState } from "react";
import LoginForm3 from "./LoginForm3";
import SignupForm3 from "./SignupForm3";
import "./authForm3.css";

const AuthForm3 = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <section className="auth3" id="auth3">
      {isLogin ? (
        <LoginForm3 switchForm={() => setIsLogin(false)} />
      ) : (
        <SignupForm3 switchForm={() => setIsLogin(true)} />
      )}
    </section>
  );
};

export default AuthForm3;
