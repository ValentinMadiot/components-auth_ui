import { useState } from "react";
import LoginForm from "./LoginForm1";
import SignupForm from "./SignupForm1";
import "./authForm1.css";

const AuthForm1 = () => {
  const [isLogin, setIsLogin] = useState(true);

  const switchForm = () => {
    setIsLogin((prev) => !prev);
  };
  return (
    <section className="authWrapper auth1" id="auth1">
      <div className={`flip-card ${!isLogin ? "flipped" : ""}`}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <SignupForm switchForm={switchForm} />
          </div>
          <div className="flip-card-back">
            <LoginForm switchForm={switchForm} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthForm1;
