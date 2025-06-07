import { useState } from "react";
import LoginForm5 from "./LoginForm5";
import SignupForm5 from "./SignupForm5";
import "./authForm5.css";

const AuthForm5 = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <section className="auth5" id="auth5">
      {isLogin ? (
        <LoginForm5 switchForm={() => setIsLogin(false)} />
      ) : (
        <SignupForm5 switchForm={() => setIsLogin(true)} />
      )}
    </section>
  );
};

export default AuthForm5;
