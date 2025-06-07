import { useState } from "react";
import LoginForm from "./LoginForm1";
import SignupForm from "./SignupForm1";
import "./authForm1.css";

const AuthForm1 = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <section className="auth1" id="auth1">
      {isLogin ? (
        <LoginForm switchForm={() => setIsLogin(false)} />
      ) : (
        <SignupForm switchForm={() => setIsLogin(true)} />
      )}
    </section>
  );
};

export default AuthForm1;
