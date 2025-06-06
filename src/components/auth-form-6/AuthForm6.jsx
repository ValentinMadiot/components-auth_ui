import { useState } from "react";
import "./authForm6.css";
import LoginForm6 from "./LoginForm6";
import SignupForm6 from "./SignupForm6";
import SvgMaskedImage from "./SvgMaskedImage";

const AuthForm6 = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <section className="auth6__bg" id="auth6">
      <SvgMaskedImage />
      <div className={`auth6 ${!isLogin ? "active" : ""}`}>
        {isLogin ? (
          <LoginForm6 onSwitch={toggleForm} />
        ) : (
          <SignupForm6 onSwitch={toggleForm} />
        )}
      </div>
    </section>
  );
};

export default AuthForm6;
