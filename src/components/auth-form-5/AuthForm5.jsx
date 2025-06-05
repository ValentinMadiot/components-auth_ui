import { useState } from "react";
import LoginForm5 from "./LoginForm5";
import SignupForm5 from "./SignupForm5";
import "./authForm5.css";

const AuthForm5 = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin((prev) => !prev);

  return (
    <section className="auth5">
      {isLogin ? (
        <LoginForm5 switchForm={toggleForm} />
      ) : (
        <SignupForm5 switchForm={toggleForm} />
      )}
    </section>
  );
};

export default AuthForm5;
